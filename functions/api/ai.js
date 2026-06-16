export async function onRequestPost({ request, env }) {
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

export async function onRequestOptions() {
  return cors();
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

function assertEnv(value, name) {
  if (!value) throw new Error(`Missing Cloudflare environment variable: ${name}`);
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data, null, 2), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
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
