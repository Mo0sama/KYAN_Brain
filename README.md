# KYAN Brain

This is a static browser dashboard built from `KYAN_Master_Plan.md`.

Open `index.html` in a browser to use:

- Brand Brain source of truth
- Client Desk for diagnosing client requests
- Audit Brain for scoring a client and choosing the service path
- Request Router for turning messy messages into service paths
- KYAN content draft generator
- Free audit builder
- Systems Builder for CRM, automation, landing pages, support, and retainers
- Service delivery playbooks
- Client templates and AI prompt

Portable assets:

- `kyan_brain.json` for n8n, Google Sheets, or AI context storage
- `ai_agent_system_prompt.md` for OpenAI/AI Agent nodes
- `sheets/` CSV files for building the KYAN_Content_Engine workbook
- `functions/api/` Cloudflare Pages Functions for live AI and Sheets proxy
- `DEPLOYMENT.md` for Cloudflare setup and environment variables

Suggested workflow:

1. Paste the client request into Client Desk.
2. Generate the diagnosis, service path, task list, and client reply.
3. Save the case locally in the dashboard.
4. Use Systems Builder for the actual delivery blueprint.
5. Use Templates for proposals, requirements forms, reports, and handover.
6. Use Settings / API after deployment to connect AI, Sheets, and n8n.

No setup, server, or internet connection is required.
