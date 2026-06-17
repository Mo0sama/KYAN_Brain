var KYAN_ALLOWED_TABS = [
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

function doGet() {
  return jsonResponse({
    ok: true,
    service: 'KYAN Sheets Webhook',
    actions: ['create', 'list'],
    allowed_tabs: KYAN_ALLOWED_TABS,
    time: new Date().toISOString()
  });
}

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    var sheetId = extractSheetId(body.sheet_id || body.sheet_url);
    var tab = body.tab;
    var payload = body.payload || {};
    var action = body.action || 'create';

    if (!sheetId) return jsonResponse({ ok: false, error: 'Missing sheet_id' });
    if (!tab) return jsonResponse({ ok: false, error: 'Missing tab' });
    if (KYAN_ALLOWED_TABS.indexOf(tab) === -1) {
      return jsonResponse({ ok: false, error: 'Tab not allowed: ' + tab });
    }

    var spreadsheet = SpreadsheetApp.openById(sheetId);
    var sheet = getOrCreateSheet(spreadsheet, tab);

    if (action === 'list') {
      return jsonResponse({
        ok: true,
        tab: tab,
        rows: readRows(sheet, Number(body.limit || 25)),
        time: new Date().toISOString()
      });
    }

    var flat = flattenObject(payload);
    appendObject(sheet, flat);

    return jsonResponse({
      ok: true,
      tab: tab,
      written_columns: Object.keys(flat).length,
      time: new Date().toISOString()
    });
  } catch (error) {
    return jsonResponse({ ok: false, error: error.message });
  }
}

function readRows(sheet, limit) {
  var lastRow = sheet.getLastRow();
  var lastColumn = sheet.getLastColumn();
  if (lastRow < 2 || lastColumn < 1) return [];

  var headers = sheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  var count = Math.min(Math.max(limit || 25, 1), lastRow - 1);
  var start = Math.max(2, lastRow - count + 1);
  var values = sheet.getRange(start, 1, count, lastColumn).getValues();
  var rows = [];

  for (var i = values.length - 1; i >= 0; i--) {
    var item = {};
    for (var j = 0; j < headers.length; j++) {
      if (headers[j]) item[headers[j]] = values[i][j];
    }
    rows.push(item);
  }

  return rows;
}

function getOrCreateSheet(spreadsheet, tab) {
  return spreadsheet.getSheetByName(tab) || spreadsheet.insertSheet(tab);
}

function extractSheetId(value) {
  var text = String(value || '').trim();
  var match = text.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match) return match[1];
  return text;
}

function appendObject(sheet, object) {
  var existingLastColumn = Math.max(sheet.getLastColumn(), 1);
  var existingHeaders = [];
  if (sheet.getLastRow() > 0) {
    existingHeaders = sheet.getRange(1, 1, 1, existingLastColumn).getValues()[0].filter(String);
  }

  var headers = uniqueList(['received_at'].concat(existingHeaders).concat(Object.keys(object)));
  if (sheet.getLastRow() === 0 || headers.length !== existingHeaders.length) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  }

  var row = [];
  for (var i = 0; i < headers.length; i++) {
    var header = headers[i];
    row.push(header === 'received_at' ? new Date() : object[header] === undefined ? '' : object[header]);
  }
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
    output[prefix || 'items'] = value.map(function(item) {
      return typeof item === 'object' ? JSON.stringify(item) : item;
    }).join(' | ');
    return output;
  }

  if (typeof value === 'object') {
    Object.keys(value).forEach(function(key) {
      var next = prefix ? prefix + '.' + key : key;
      flattenObject(value[key], next, output);
    });
    return output;
  }

  output[prefix || 'value'] = value;
  return output;
}

function uniqueList(items) {
  var seen = {};
  var result = [];
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item && !seen[item]) {
      seen[item] = true;
      result.push(item);
    }
  }
  return result;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
