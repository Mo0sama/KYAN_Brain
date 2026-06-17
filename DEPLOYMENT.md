# KYAN Brain Deployment

## Recommended Live Stack

- Cloudflare Workers & Pages: static assets + Worker API
- Cloudflare Pages Functions are also included for Pages-mode deployment
- Google Sheets: first database
- n8n or Google Apps Script: easiest first Sheets writer
- AI provider: OpenAI, OpenAI-compatible, Anthropic, Gemini, or custom webhook

## Accounts To Create

1. Cloudflare account
2. GitHub account or repository for the project
3. Google account for Google Sheets
4. AI provider account of your choice
5. Optional: n8n Cloud account or self-hosted n8n
6. Optional: domain name for a private KYAN URL

## Cloudflare Environment Variables

Add only the variables you need:

```text
AI_PROVIDER=openai
AI_MODEL=gpt-4.1-mini
OPENAI_API_KEY=...

OPENAI_COMPATIBLE_API_KEY=...
OPENAI_COMPATIBLE_BASE_URL=https://provider.example.com/v1

ANTHROPIC_API_KEY=...
GEMINI_API_KEY=...

CUSTOM_AI_URL=https://your-custom-endpoint.example.com
CUSTOM_AI_API_KEY=...

SHEETS_WEBHOOK_URL=https://your-n8n-or-apps-script-webhook
SHEETS_WEBHOOK_TOKEN=optional-shared-secret
N8N_WEBHOOK_URL=https://your-n8n-webhook
```

Never paste API keys into the browser Settings screen.

## Deploy Steps

1. Put the contents of this `KYAN_Brain` folder in a GitHub repository.
2. In Cloudflare Workers & Pages, create a project from the repository.
3. If Cloudflare shows deploy command `npx wrangler deploy`, keep it.
4. Build command: leave empty.
5. Add environment variables.
6. Deploy.
7. Open `/api/health` to confirm the backend works.
8. Open KYAN Brain > Settings / API and test the API.

This repo includes `worker.js` plus `[assets]` in `wrangler.toml`, so Workers deploy mode can serve both the app files and `/api/*`.

## Daily Use Recommendation

Use Daily Ops as the morning workspace:

1. Add today tasks.
2. Add new leads from WhatsApp/Facebook.
3. Add content ideas from real client problems.
4. Use Audit Brain to decide each client path.
5. Use Client Desk for replies and delivery tasks.
6. Export backup weekly until Sheets sync is connected.

## Sheets Sync

The included `/api/sheets` function is a safe proxy.
For v1, connect it to n8n or Google Apps Script using `SHEETS_WEBHOOK_URL`.

The browser sends:

```json
{
  "sheet_id": "...",
  "tab": "Client_Cases",
  "payload": {}
}
```

Your webhook writes that payload to the target Google Sheet.
