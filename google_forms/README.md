# KYAN Google Forms Audit Kit

Use this kit to create a client audit form that collects enough data for KYAN Brain to recommend a service path.

## Fast Setup

1. Go to [script.google.com](https://script.google.com).
2. Create a new Apps Script project.
3. Paste `create_kyan_audit_form.gs`.
4. Run `createKyanAuditForm`.
5. Give Google permissions.
6. Open the generated Google Form and response Sheet.
7. In KYAN Brain, use **Form Intake** to parse responses and create client paths.

## Recommended Automation

For now, copy a response row as JSON/key-value text into KYAN Brain > Form Intake.

Later:

- Use Apps Script to POST responses to `/api/sheets`.
- Or connect the response Sheet to n8n.
- Then let KYAN Brain and Google Sheets share the same client case data.

## Google Sheets Sync Webhook

Use `kyan_sheets_webhook.gs` as a simple Apps Script web app.

1. Create a Google Sheet for KYAN Brain.
2. Open Extensions > Apps Script.
3. Paste `kyan_sheets_webhook.gs`.
4. Deploy as Web App.
5. Access: Anyone with the link.
6. Copy the Web App URL.
7. In Cloudflare, set `SHEETS_WEBHOOK_URL` to that URL.
8. In KYAN Brain Settings, add the Google Sheet ID.

Then buttons like **Push Case**, **Push Audit**, and **Push Report** can append data to Google Sheets through `/api/sheets`.

## Form Purpose

The form collects:

- Business basics
- Current setup
- Page clarity
- Trust signals
- Content consistency
- Sales follow-up
- Orders/payments tracking
- Manual work
- Website need
- Technical risk
- Budget/urgency

These answers map directly to KYAN services:

- Facebook Page Setup
- Content Planning
- Google Sheets CRM
- n8n Automation
- Website / Landing Page
- Technical Support
- Monthly Business Support
