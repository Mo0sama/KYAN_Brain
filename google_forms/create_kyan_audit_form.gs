function createKyanAuditForm() {
  const form = FormApp.create('KYAN Free Business Audit');
  form.setDescription('This audit helps KYAN understand your current business setup and recommend the right next step. No guaranteed sales promises - we improve clarity, systems, follow-up, and customer journey.');
  form.setCollectEmail(true);

  const questions = [
    { title: 'Business name', type: 'short', required: true },
    { title: 'Business type', type: 'choice', required: true, options: ['Online store', 'Clinic', 'Salon', 'Coach / consultant', 'Local service business', 'Restaurant / cafe', 'Real estate', 'Other small business'] },
    { title: 'Main goal', type: 'paragraph', required: true },
    { title: 'Current setup', type: 'paragraph', required: true },
    { title: 'Main problem', type: 'paragraph', required: true },
    { title: 'Has Facebook page', type: 'choice', required: true, options: ['Yes', 'No', 'Not sure'] },
    { title: 'Has website', type: 'choice', required: true, options: ['Yes', 'No', 'Bad/needs work'] },
    { title: 'Has Google Sheet / CRM', type: 'choice', required: true, options: ['Yes', 'No', 'Basic sheet only'] },
    { title: 'Can customers understand your offer in 5 seconds?', type: 'choice', required: true, options: ['Yes', 'No', 'Not sure'] },
    { title: 'Do you have clear reviews/photos/proof?', type: 'choice', required: true, options: ['Yes', 'No', 'Some'] },
    { title: 'Content consistency', type: 'choice', required: true, options: ['Consistent', 'Random', 'Rarely post', 'No content'] },
    { title: 'Follow-up system', type: 'choice', required: true, options: ['CRM / Sheet', 'WhatsApp only', 'Memory only', 'No follow-up'] },
    { title: 'Tracks leads', type: 'choice', required: true, options: ['Yes', 'No', 'Sometimes'] },
    { title: 'Tracks orders/payments', type: 'choice', required: true, options: ['Yes', 'No', 'Sometimes', 'Not applicable'] },
    { title: 'Manual repetitive work', type: 'choice', required: true, options: ['Low', 'Medium', 'High'] },
    { title: 'Technical issues', type: 'choice', required: true, options: ['No', 'Website/domain/email issue', 'Not sure'] },
    { title: 'Monthly budget level', type: 'choice', required: true, options: ['Low', 'Medium', 'High', 'Not sure'] },
    { title: 'Urgency', type: 'choice', required: true, options: ['Today', 'This week', 'This month', 'No deadline'] },
    { title: 'Best contact method', type: 'choice', required: true, options: ['WhatsApp', 'Phone', 'Email', 'Messenger'] },
    { title: 'Page/website link', type: 'short', required: false }
  ];

  questions.forEach((question) => addQuestion(form, question));

  const sheet = SpreadsheetApp.create('KYAN Audit Responses');
  form.setDestination(FormApp.DestinationType.SPREADSHEET, sheet.getId());

  Logger.log('Form edit URL: ' + form.getEditUrl());
  Logger.log('Form public URL: ' + form.getPublishedUrl());
  Logger.log('Responses Sheet URL: ' + sheet.getUrl());
}

function addQuestion(form, question) {
  let item;
  if (question.type === 'paragraph') {
    item = form.addParagraphTextItem();
  } else if (question.type === 'choice') {
    item = form.addMultipleChoiceItem();
    item.setChoiceValues(question.options);
  } else {
    item = form.addTextItem();
  }

  item.setTitle(question.title);
  item.setRequired(Boolean(question.required));
}

function responseToObject(e) {
  const namedValues = e.namedValues || {};
  const result = {};
  Object.keys(namedValues).forEach((key) => {
    result[key] = Array.isArray(namedValues[key]) ? namedValues[key][0] : namedValues[key];
  });
  return result;
}

function onFormSubmit(e) {
  const payload = responseToObject(e);
  Logger.log(JSON.stringify(payload, null, 2));

  // Optional future automation:
  // UrlFetchApp.fetch('https://YOUR-KYAN-BRAIN-URL/api/sheets', {
  //   method: 'post',
  //   contentType: 'application/json',
  //   payload: JSON.stringify({
  //     sheet_id: 'YOUR_SHEET_ID',
  //     tab: 'Client_Cases',
  //     payload: payload
  //   })
  // });
}
