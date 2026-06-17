const KYAN_ALLOWED_TABS = [
  'Client_Cases',
  'Client_Reports',
  'Daily_Ops',
  'Form_Responses',
  'Content_Ideas',
  'Draft_Posts',
  'Service_Playbooks',
  'Performance',
  'Learning_Log'
];

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents || '{}');
    const sheetId = extractSheetId(body.sheet_id || body.sheet_url);
    const tab = body.tab;
    const payload = body.payload || {};
    const action = body.action || 'create';

    if (!sheetId) return jsonResponse({ ok: false, error: 'Missing sheet_id' }, 400);
    if (!tab) return jsonResponse({ ok: false, error: 'Missing tab' }, 400);
    if (KYAN_ALLOWED_TABS.indexOf(tab) === -1) {
      return jsonResponse({ ok: false, error: 'Tab not allowed: ' + tab }, 400);
    }

    const spreadsheet = SpreadsheetApp.openById(sheetId);
    const sheet = getOrCreateSheet(spreadsheet, tab);

    if (action === 'list') {
      return jsonResponse({
        ok: true,
        tab: tab,
        rows: readRows(sheet, Number(body.limit || 25)),
        time: new Date().toISOString()
      });
    }

    const flat = flattenObject(payload);
    appendObject(sheet, flat);

    return jsonResponse({
      ok: true,
      tab: tab,
      written_columns: Object.keys(flat).length,
      time: new Date().toISOString()
    });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message }, 500);
  }
}

function readRows(sheet, limit) {
  const lastRow = sheet.getLastRow();
  const lastColumn = sheet.getLastColumn();
  if (lastRow < 2 || lastColumn < 1) return [];

  const headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  const count = Math.min(Math.max(limit || 25, 1), lastRow - 1);
  const start = Math.max(2, lastRow - count + 1);
  const values = sheet.getRange(start, 1, count, lastColumn).getValues();
  return values.reverse().map(function(row) {
    var item = {};
    headers.forEach(function(header, index) {
      if (header) item[header] = row[index];
    });
    return item;
  });
}

function getOrCreateSheet(spreadsheet, tab) {
  return spreadsheet.getSheetByName(tab) || spreadsheet.insertSheet(tab);
}

function extractSheetId(value) {
  const text = String(value || '').trim();
  const match = text.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match) return match[1];
  return text;
}

function appendObject(sheet, object) {
  const existingLastColumn = Math.max(sheet.getLastColumn(), 1);
  const existingHeaders = sheet.getLastRow() > 0
    ? sheet.getRange(1, 1, 1, existingLastColumn).getValues()[0].filter(String)
    : [];
  const headers = Array.from(new Set(['received_at'].concat(existingHeaders).concat(Object.keys(object))));

  if (sheet.getLastRow() === 0 || headers.length !== existingHeaders.length) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  const row = headers.map((header) => {
    if (header === 'received_at') return new Date();
    return object[header] === undefined ? '' : object[header];
  });
  sheet.appendRow(row);
}

function flattenObject(value, prefix, output) {
  output = output || {};
  prefix = prefix || '';

  if (value === null || value === undefined) {
    output[prefix || 'value'] = '';
    return output;
  }

  if (Array.isArray(value)) {
    output[prefix || 'items'] = value.map((item) => typeof item === 'object' ? JSON.stringify(item) : item).join(' | ');
    return output;
  }

  if (typeof value === 'object') {
    Object.keys(value).forEach((key) => {
      const next = prefix ? prefix + '.' + key : key;
      flattenObject(value[key], next, output);
    });
    return output;
  }

  output[prefix || 'value'] = value;
  return output;
}

function jsonResponse(data, status) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
