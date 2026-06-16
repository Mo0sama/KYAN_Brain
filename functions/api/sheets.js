export async function onRequestPost({ request, env }) {
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
      message: "Set SHEETS_WEBHOOK_URL or N8N_WEBHOOK_URL in Cloudflare. Recommended first version: point it to an n8n webhook or Google Apps Script web app.",
      received: body
    }, 202);
  } catch (error) {
    return json({ error: error.message || "Sheets request failed" }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "POST, OPTIONS"
    }
  });
}

function safeJson(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return text;
  }
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
