# KYAN Brain

This is a static browser dashboard built from `KYAN_Master_Plan.md`.

Open `index.html` in a browser to use:

- Brand Brain source of truth
- Daily Ops for tasks, lead pipeline, and content queue
- Form Intake for Google Form audit responses
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
- `google_forms/` Apps Script and question schema to create the client audit form
- `google_forms/kyan_sheets_webhook.gs` to sync KYAN Brain data into Google Sheets
- `AUDIT_PLAYBOOK.md` for step-by-step audit execution
- `DEPLOYMENT.md` for Cloudflare setup and environment variables

Suggested workflow:

1. Open Daily Ops every morning.
2. Add tasks, active leads, and content ideas.
3. Send the Google Form audit to new leads.
4. Paste form responses into Form Intake to create the path.
5. Use Audit Brain or Client Desk for deeper diagnosis.
6. Save the case locally in the dashboard.
7. Use Systems Builder for the actual delivery blueprint.
8. Use Templates for proposals, requirements forms, reports, and handover.
9. Use Reports to generate a client-ready audit report.
10. Use Settings / API after deployment to connect AI, Sheets, and n8n.

No setup, server, or internet connection is required.
