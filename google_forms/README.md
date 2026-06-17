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
