export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS" && url.pathname.startsWith("/api/")) {
      return cors();
    }

    if (url.pathname === "/api/session") {
      return json({
        required: Boolean(env.ACCESS_CODE),
        authenticated: !env.ACCESS_CODE || await isAuthenticated(request, env)
      });
    }

    if (url.pathname === "/api/login" && request.method === "POST") {
      return handleLogin(request, env);
    }

    if (url.pathname === "/api/health") {
      return json({
        ok: true,
        service: "KYAN Brain API",
        mode: "worker",
        time: new Date().toISOString()
      });
    }

    if (url.pathname === "/api/ai" && request.method === "POST") {
      return handleAi(request, env);
    }

    if (url.pathname === "/api/sheets" && request.method === "POST") {
      return handleSheets(request, env);
    }

    if (url.pathname === "/api/db" && request.method === "POST") {
      return handleDb(request, env);
    }

    if (env.ACCESS_CODE && !url.pathname.startsWith("/api/") && !await isAuthenticated(request, env)) {
      return loginShell();
    }

    return env.ASSETS.fetch(request);
  }
};

async function handleLogin(request, env) {
  if (!env.ACCESS_CODE) return json({ ok: true, required: false });
  const body = await request.json();
  if (String(body.code || "") !== String(env.ACCESS_CODE)) {
    return json({ ok: false, error: "Invalid access code" }, 401);
  }
  const token = await sessionToken(env);
  return json({ ok: true }, 200, {
    "Set-Cookie": `kyan_access=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=2592000`
  });
}

async function isAuthenticated(request, env) {
  if (!env.ACCESS_CODE) return true;
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(/(?:^|;\s*)kyan_access=([^;]+)/);
  return Boolean(match && match[1] === await sessionToken(env));
}

async function sessionToken(env) {
  const source = `${env.ACCESS_CODE}:${env.ACCESS_SECRET || env.ACCESS_CODE}`;
  const bytes = new TextEncoder().encode(source);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return Array.from(new Uint8Array(digest)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function loginShell() {
  return new Response(`<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>KYAN Brain Access</title>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div class="access-gate">
    <form class="access-card" method="dialog" onsubmit="login(event)">
      <div class="brand-mark">K</div>
      <p class="eyebrow">Private workspace</p>
      <h1>KYAN Brain Access</h1>
      <p>Enter your access code to open the operating system.</p>
      <label>Access code <input id="code" type="password" autofocus /></label>
      <button class="primary-button" type="submit">Unlock KYAN Brain</button>
      <small id="message"></small>
    </form>
  </div>
  <script>
    async function login(event) {
      event.preventDefault();
      message.textContent = "Checking access...";
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.value })
      });
      if (response.ok) location.reload();
      else message.textContent = "Access denied.";
    }
  </script>
</body>
</html>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}

async function handleAi(request, env) {
  try {
    const body = await request.json();
    const provider = body.provider || env.AI_PROVIDER || "openai";
    const model = body.model || env.AI_MODEL || "gpt-4.1-mini";
    const system = body.system || "";
    const input = body.input || "";
    const context = body.context || {};

    if (!input) return json({ error: "Missing input" }, 400);

    if (provider === "openai") {
      return json(await callOpenAI({ env, model, system, input, context }));
    }

    if (provider === "openai-compatible") {
      return json(await callOpenAICompatible({ env, model, system, input, context }));
    }

    if (provider === "anthropic") {
      return json(await callAnthropic({ env, model, system, input, context }));
    }

    if (provider === "gemini") {
      return json(await callGemini({ env, model, system, input, context }));
    }

    if (provider === "custom") {
      return json(await callCustom({ env, provider, model, system, input, context }));
    }

    return json({ error: `Unsupported provider: ${provider}` }, 400);
  } catch (error) {
    return json({ error: error.message || "AI request failed" }, 500);
  }
}

async function handleSheets(request, env) {
  try {
    const body = await request.json();
    const webhookUrl = env.SHEETS_WEBHOOK_URL || env.N8N_WEBHOOK_URL;

    if (!body.sheet_id) return json({ error: "Missing sheet_id" }, 400);
    if (!body.tab) return json({ error: "Missing tab" }, 400);

    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(env.SHEETS_WEBHOOK_TOKEN ? { Authorization: `Bearer ${env.SHEETS_WEBHOOK_TOKEN}` } : {})
        },
        body: JSON.stringify(body)
      });
      const text = await response.text();
      if (!response.ok) throw new Error(text || `Webhook returned ${response.status}`);
      return json({ ok: true, mode: "webhook", response: safeJson(text) });
    }

    return json({
      ok: false,
      mode: "not_configured",
      message: "Set SHEETS_WEBHOOK_URL or N8N_WEBHOOK_URL in Cloudflare.",
      received: body
    }, 202);
  } catch (error) {
    return json({ error: error.message || "Sheets request failed" }, 500);
  }
}

async function handleDb(request, env) {
  try {
    const body = await request.json();
    const action = body.action || "create";
    const webhookUrl = env.SHEETS_WEBHOOK_URL || env.N8N_WEBHOOK_URL;
    if (!webhookUrl) return json({ ok: false, mode: "not_configured", rows: [], message: "Set SHEETS_WEBHOOK_URL in Cloudflare." }, 202);
    if (!body.sheet_id) return json({ error: "Missing sheet_id" }, 400);
    if (!body.tab) return json({ error: "Missing tab" }, 400);

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(env.SHEETS_WEBHOOK_TOKEN ? { Authorization: `Bearer ${env.SHEETS_WEBHOOK_TOKEN}` } : {})
      },
      body: JSON.stringify({ ...body, action })
    });
    const text = await response.text();
    if (!response.ok) throw new Error(text || `Webhook returned ${response.status}`);
    return json({ ok: true, mode: "webhook", ...safeJson(text) });
  } catch (error) {
    return json({ error: error.message || "Database request failed" }, 500);
  }
}

async function callOpenAI({ env, model, system, input, context }) {
  assertEnv(env.OPENAI_API_KEY, "OPENAI_API_KEY");
  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model,
      input: [
        { role: "system", content: system },
        { role: "user", content: `${input}\n\nContext:\n${JSON.stringify(context)}` }
      ]
    })
  });
  const data = await readProviderResponse(response);
  const output = data.output_text || data.output?.flatMap((item) => item.content || []).map((item) => item.text || "").join("\n").trim();
  return { provider: "openai", model, output, raw: data };
}

async function callOpenAICompatible({ env, model, system, input, context }) {
  assertEnv(env.OPENAI_COMPATIBLE_API_KEY, "OPENAI_COMPATIBLE_API_KEY");
  assertEnv(env.OPENAI_COMPATIBLE_BASE_URL, "OPENAI_COMPATIBLE_BASE_URL");
  const response = await fetch(`${env.OPENAI_COMPATIBLE_BASE_URL.replace(/\/$/, "")}/chat/completions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_COMPATIBLE_API_KEY}`
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: system },
        { role: "user", content: `${input}\n\nContext:\n${JSON.stringify(context)}` }
      ]
    })
  });
  const data = await readProviderResponse(response);
  return { provider: "openai-compatible", model, output: data.choices?.[0]?.message?.content || "", raw: data };
}

async function callAnthropic({ env, model, system, input, context }) {
  assertEnv(env.ANTHROPIC_API_KEY, "ANTHROPIC_API_KEY");
  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model,
      max_tokens: 1200,
      system,
      messages: [
        { role: "user", content: `${input}\n\nContext:\n${JSON.stringify(context)}` }
      ]
    })
  });
  const data = await readProviderResponse(response);
  return { provider: "anthropic", model, output: data.content?.map((part) => part.text || "").join("\n") || "", raw: data };
}

async function callGemini({ env, model, system, input, context }) {
  assertEnv(env.GEMINI_API_KEY, "GEMINI_API_KEY");
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${env.GEMINI_API_KEY}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents: [{ parts: [{ text: `${input}\n\nContext:\n${JSON.stringify(context)}` }] }]
    })
  });
  const data = await readProviderResponse(response);
  return {
    provider: "gemini",
    model,
    output: data.candidates?.[0]?.content?.parts?.map((part) => part.text || "").join("\n") || "",
    raw: data
  };
}

async function callCustom({ env, provider, model, system, input, context }) {
  assertEnv(env.CUSTOM_AI_URL, "CUSTOM_AI_URL");
  const response = await fetch(env.CUSTOM_AI_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(env.CUSTOM_AI_API_KEY ? { Authorization: `Bearer ${env.CUSTOM_AI_API_KEY}` } : {})
    },
    body: JSON.stringify({ provider, model, system, input, context })
  });
  const data = await readProviderResponse(response);
  return { provider: "custom", model, output: data.output || data.text || JSON.stringify(data), raw: data };
}

async function readProviderResponse(response) {
  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    data = { raw: text };
  }
  if (!response.ok) {
    throw new Error(data.error?.message || data.error || data.message || `Provider returned ${response.status}`);
  }
  return data;
}

function safeJson(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return text;
  }
}

function assertEnv(value, name) {
  if (!value) throw new Error(`Missing Cloudflare environment variable: ${name}`);
}

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      ...extraHeaders
    }
  });
}

function cors() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    }
  });
}
