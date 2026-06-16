const brain = {
  brand_name: "KYAN - Integrated Business Solutions",
  arabic_name: "كيان - حلول الأعمال المتكاملة",
  tagline: "KYAN - من اللخبطة للنظام، ومن النظام للنمو.",
  tone: ["Practical", "Clear", "Confident", "Helpful", "Egyptian-friendly", "Smart"],
  language: "Simple Egyptian Arabic, with English terms for CRM, Automation, System, Digital Presence, and Landing Page.",
  positioning: "Organize, digitize, automate, and grow.",
  promise: "From random work to organized business growth.",
  audience: ["small business owners", "online stores", "clinics", "salons", "service providers", "local brands", "entrepreneurs"],
  cta: "ابعتلنا لينك صفحتك أو موقعك لتحليل مجاني.",
  avoid: ["fake hype", "guaranteed sales", "guaranteed viral content", "first-page Google promises", "very formal Arabic", "generic agency talk"]
};

const pillars = [
  { name: "Business Organization", hook: "طلباتك متلخبطة؟ ده معناه إنك محتاج سيستم.", goal: "Show KYAN solves chaos." },
  { name: "Digital Presence", hook: "صفحتك شكلها كويس؟ ولا بتطرد العميل؟", goal: "Improve page and website trust." },
  { name: "Sales & Follow-up", hook: "العميل اللي مردتش عليه النهارده ممكن يشتري من منافسك.", goal: "Teach lead conversion." },
  { name: "Automation", hook: "إزاي فورم بسيط يوفر عليك متابعة 20 عميل؟", goal: "Show time-saving systems." },
  { name: "Google Sheets / CRM", hook: "CRM بسيط للبيزنس الصغير.", goal: "Make practical systems feel easy." },
  { name: "Websites & SEO", hook: "موقعك لازم يقول للعميل يعمل إيه في أول 5 ثواني.", goal: "Build technical authority." },
  { name: "Founder / Behind the Scenes", hook: "إحنا بنبني KYAN بنفس السيستم اللي بنقدمه للعملاء.", goal: "Build personal trust." },
  { name: "Free Audit Offer", hook: "ابعت صفحتك ونقولك 5 حاجات تتظبط.", goal: "Generate leads." }
];

const checklist = [
  "Pick one clear business problem before creating content.",
  "Use simple Egyptian Arabic and avoid agency buzzwords.",
  "Attach every post to one content pillar.",
  "Add one CTA only: free audit, WhatsApp, or next step.",
  "Never promise guaranteed sales, ranking, or viral results.",
  "Record published posts and performance so the brain learns."
];

const liveChecklistItems = [
  "Create Cloudflare account",
  "Create a private GitHub repository for KYAN Brain",
  "Connect the repo to Cloudflare Pages",
  "Add environment variables for AI provider keys in Cloudflare, never in the browser",
  "Create Google Sheet from the CSV tabs in sheets/",
  "Add Sheet ID in Settings / API",
  "Deploy and test /api/health",
  "Test AI Agent with a small prompt",
  "Test Push Audit / Push Case",
  "Add a private custom domain or keep the pages.dev URL private"
];

const auditItems = [
  "Page clarity: visitor understands the offer in 5 seconds",
  "Trust: real photos, reviews, useful information, response path",
  "CTA: WhatsApp or Messenger button is visible and clear",
  "Content: posts are useful, consistent, and not random",
  "Sales flow: lead follow-up is tracked after first message",
  "System: customers, orders, payments, and follow-ups are organized"
];

const auditScorecard = [
  {
    id: "clarity",
    label: "Offer clarity",
    description: "Can a visitor understand what the business offers in 5 seconds?",
    service: "Facebook Page Setup",
    fix: "Rewrite bio, About, services, pinned post, and CTA.",
    question: "What exactly do you sell, for whom, and what should the client do next?"
  },
  {
    id: "trust",
    label: "Trust signals",
    description: "Does the business look real, active, and safe to contact?",
    service: "Facebook Page Setup",
    fix: "Improve profile/cover, proof, photos, reviews, and business details.",
    question: "What proof, photos, reviews, or real business details can we show?"
  },
  {
    id: "content",
    label: "Content quality",
    description: "Are posts useful, consistent, and connected to client problems?",
    service: "Content Planning",
    fix: "Build pillars, calendar, hooks, captions, reels, and offer posts.",
    question: "Which customer problems should the content talk about every week?"
  },
  {
    id: "cta",
    label: "CTA and contact flow",
    description: "Is the next step clear: WhatsApp, Messenger, form, or website?",
    service: "Facebook Page Setup",
    fix: "Clarify one CTA and connect it to a simple follow-up path.",
    question: "What is the one action you want clients to take first?"
  },
  {
    id: "followup",
    label: "Sales follow-up",
    description: "Are leads replied to, tracked, and followed up at the right time?",
    service: "Google Sheets CRM",
    fix: "Create lead stages, follow-up dates, owner view, and daily task list.",
    question: "How do you know today who needs a reply or follow-up?"
  },
  {
    id: "orders",
    label: "Orders and payments",
    description: "Are orders, delivery, and payments tracked outside chat?",
    service: "Google Sheets CRM",
    fix: "Create orders, payments, delivery status, and dashboard tabs.",
    question: "What order/payment information must never get lost?"
  },
  {
    id: "manual",
    label: "Manual repetitive work",
    description: "Are repeated tasks wasting time after the process is clear?",
    service: "n8n Automation",
    fix: "Automate intake, sheet updates, reminders, notifications, and reports.",
    question: "What task do you repeat every day that follows the same steps?"
  },
  {
    id: "website",
    label: "Website / landing page",
    description: "Does the business need a page that explains the offer and captures leads?",
    service: "Website / Landing Page",
    fix: "Build hero, offer, services, proof, FAQ, SEO basics, and WhatsApp CTA.",
    question: "Do clients need one link that explains the offer better than social media?"
  },
  {
    id: "technical",
    label: "Technical risk",
    description: "Are there domain, hosting, email, SSL, DNS, backup, or website issues?",
    service: "Technical Support",
    fix: "Back up first, diagnose, fix carefully, test, and document changes.",
    question: "What technical issue is blocking the business right now?"
  }
];

const issueSignals = [
  { id: "weak_page", label: "Weak or unclear Facebook page", keywords: ["page", "facebook", "bio", "cover", "profile", "صفحة", "فيسبوك", "بايو"] },
  { id: "low_sales", label: "Messages but low sales", keywords: ["sales", "بيع", "مبيعات", "واتساب", "message", "رسائل"] },
  { id: "lost_leads", label: "Lost leads or forgotten follow-ups", keywords: ["follow", "lead", "customer", "client", "عميل", "عملاء", "متابعة", "بيضيع"] },
  { id: "manual_work", label: "Manual repetitive work", keywords: ["manual", "repeat", "automation", "n8n", "أتمتة", "يدوي", "متكرر"] },
  { id: "no_website", label: "No website or weak landing page", keywords: ["website", "landing", "site", "موقع", "لاندنج"] },
  { id: "tech_issue", label: "Technical support issue", keywords: ["domain", "hosting", "email", "ssl", "dns", "technical", "دومين", "استضافة", "إيميل", "مشكلة تقنية"] },
  { id: "content_problem", label: "Random or weak content", keywords: ["content", "posts", "reels", "caption", "محتوى", "بوستات", "ريلز"] }
];

const serviceKnowledge = {
  "Facebook Page Setup": {
    triggerIssues: ["weak_page"],
    goal: "Make the page clear, trustworthy, and ready to receive leads.",
    discovery: ["Page link", "Business offer", "Target customer", "WhatsApp number", "Current bio/About text", "Logo and brand assets"],
    deliverables: ["Optimized bio", "About section", "CTA structure", "Pinned post", "Services list", "Cover direction", "Page improvement report"],
    tasks: ["Audit page clarity", "Rewrite bio and About", "Set CTA path", "Prepare pinned post", "List services", "Recommend first 10 posts"],
    upsell: "Content plan or Google Sheets CRM"
  },
  "Content Planning": {
    triggerIssues: ["content_problem", "weak_page"],
    goal: "Create content that builds trust and generates useful conversations.",
    discovery: ["Business type", "Products/services", "Customer pains", "Current offers", "Photos/videos available", "Competitors", "Monthly goal"],
    deliverables: ["Content pillars", "Monthly calendar", "Captions", "Reel scripts", "Story ideas", "Carousel structures", "Visual directions"],
    tasks: ["Define pillars", "Map content mix", "Write hooks", "Draft captions/scripts", "Add CTAs", "Prepare posting schedule"],
    upsell: "Monthly business support"
  },
  "Free Business Audit": {
    triggerIssues: ["weak_page", "low_sales", "lost_leads", "content_problem", "no_website"],
    goal: "Give useful diagnosis and convert the lead into one clear paid next step.",
    discovery: ["Page or website link", "Main business goal", "What is not working", "Where leads come from", "How follow-up is handled"],
    deliverables: ["Main problem", "Top 5 fixes", "Recommended KYAN package", "Next step"],
    tasks: ["Check clarity", "Check trust", "Check CTA", "Check content", "Check sales flow", "Recommend one package"],
    upsell: "Facebook Page Setup, CRM, Website, or Content Plan"
  },
  "Google Sheets CRM": {
    triggerIssues: ["lost_leads", "low_sales"],
    goal: "Stop losing customers, orders, payments, and follow-ups.",
    discovery: ["Lead sources", "Customer fields", "Sales stages", "Order flow", "Payment flow", "Delivery flow", "Who will use the sheet"],
    deliverables: ["Leads tab", "Customers tab", "Orders tab", "Follow-ups tab", "Payments tab", "Dashboard", "Usage guide"],
    tasks: ["Draw workflow", "Define fields", "Create tabs", "Add dropdowns", "Add formulas", "Add dashboard", "Test sample data", "Train client"],
    upsell: "n8n automation"
  },
  "n8n Automation": {
    triggerIssues: ["manual_work", "lost_leads"],
    goal: "Save time and reduce forgotten manual work after the process is organized.",
    discovery: ["Manual task", "Trigger app", "Destination app", "Fields needed", "Notification channel", "Failure handling"],
    deliverables: ["Workflow map", "n8n workflow", "Test cases", "Error path", "Documentation"],
    tasks: ["Define trigger", "Define actions", "Map fields", "Build workflow", "Test", "Add error handling", "Document"],
    upsell: "Monthly support"
  },
  "Website / Landing Page": {
    triggerIssues: ["no_website", "weak_page"],
    goal: "Build a professional online presence that explains the offer and generates leads.",
    discovery: ["Business name", "Services", "Main offer", "WhatsApp number", "Proof/testimonials", "FAQ", "Domain/hosting status"],
    deliverables: ["Hero copy", "Services section", "How it works", "FAQ", "Contact CTA", "Basic SEO", "Mobile optimized page"],
    tasks: ["Collect content", "Write copy", "Design layout", "Add CTA", "Optimize mobile", "Add SEO meta", "Test forms/buttons"],
    upsell: "CRM or monthly support"
  },
  "Technical Support": {
    triggerIssues: ["tech_issue"],
    goal: "Solve technical problems carefully with backup and documentation.",
    discovery: ["Issue description", "Website/domain link", "Hosting provider", "Access available", "When it started", "Recent changes", "Screenshots"],
    deliverables: ["Diagnosis", "Backup confirmation", "Fix summary", "Test result", "Prevention recommendation"],
    tasks: ["Understand issue", "Request screenshots/access", "Back up first", "Diagnose", "Fix", "Test", "Explain simply"],
    upsell: "Monthly technical support"
  },
  "Monthly Business Support": {
    triggerIssues: ["manual_work", "content_problem", "lost_leads", "weak_page"],
    goal: "Continuously improve content, systems, website, automation, and reporting.",
    discovery: ["Monthly goals", "Current systems", "Recurring tasks", "Reporting needs", "Budget", "Main bottleneck"],
    deliverables: ["Monthly report", "Completed tasks", "Content calendar", "System updates", "Recommendations", "Next month plan"],
    tasks: ["Review month", "Plan tasks", "Execute updates", "Monitor systems", "Report", "Recommend next steps"],
    upsell: "Longer retainer or full system build"
  }
};

const services = [
  ["Facebook Page Setup", ["Bio, About, services, pinned post, CTA", "Cover direction and trust signals", "10 starter captions and WhatsApp reply script"]],
  ["Content Planning", ["Monthly calendar", "Captions, Reels scripts, Stories, Carousel structures", "Hooks, hashtags, visual direction, CTA plan"]],
  ["Free Business Audit", ["Review page clarity, trust, content, CTA, sales flow", "Give top 5 fixes", "Recommend one logical KYAN package"]],
  ["Google Sheets CRM", ["Leads, customers, orders, follow-ups, payments", "Dropdowns, formulas, dashboard", "Client usage guide and sample data"]],
  ["n8n Automation", ["Trigger, actions, data fields, error path", "Test with sample data", "Document and train the client"]],
  ["Website / Landing Page", ["Hero, services, process, proof, FAQ, contact", "Mobile optimization and basic SEO", "WhatsApp CTA and handover"]],
  ["Technical Support", ["Back up before changes", "Diagnose, fix, test", "Explain what changed and how to prevent repeat issues"]],
  ["Monthly Business Support", ["Monthly report and completed tasks", "Content/system updates", "Recommendations and next-month action plan"]]
];

const templates = {
  "AI Agent System Prompt": `You are the KYAN AI Content Engine.

Create powerful, practical, brand-consistent Facebook content for KYAN - Integrated Business Solutions.

KYAN helps small and medium businesses organize, digitize, automate, and grow through digital presence, business systems, Google Sheets CRM, automation, websites, technical support, and smart solutions.

Tone:
- Practical, clear, confident, helpful
- Simple Egyptian Arabic mainly
- Egyptian-friendly, smart business tone
- Not too formal, not childish, not generic

Every post must include:
- Strong hook
- Clear business pain
- Simple explanation
- Practical KYAN solution
- One clear CTA

Avoid overpromising, technical jargon, generic agency talk, repeated wording, and more than 5 hashtags.

Output only valid JSON with: content_type, pillar, target_audience, hook, caption, cta, visual_brief, hashtags.`,
  "Discovery Questions": `1. What type of business do you have?
2. What do you sell or provide?
3. Where do customers come from now?
4. What is your biggest problem right now?
5. Do you track customers, orders, or payments anywhere?
6. Do you have a page, website, Google profile, or only WhatsApp?
7. What result do you want first?
8. What is your monthly budget?
9. Who will use the system after delivery?
10. One-time setup or monthly support?`,
  "Scope Confirmation": `Service:
Deliverables:
Timeline:
Price:
Included:
Not included:
Client requirements:
Revision limit:
Support period:
Payment terms:`,
  "Pinned Welcome Post": `Welcome to KYAN - Integrated Business Solutions

لو عندك بيزنس وبتحس إن الشغل متلخبط بين العملاء، الطلبات، واتساب، فيسبوك، والموقع... KYAN معمول عشان يساعدك.

بنساعدك في:
تنظيم العملاء والطلبات
تحسين صفحتك ومحتواك
بناء سيستم بسيط لشغلك
إنشاء مواقع وصفحات هبوط
أتمتة المهام المتكررة
دعم تقني للبيزنس

ابدأ بتحليل مجاني لصفحتك أو موقعك.
ابعتلنا اللينك وهنقولك 5 حاجات محتاجة تتظبط عشان تزود الثقة والمبيعات.

KYAN - من اللخبطة للنظام، ومن النظام للنمو.`,
  "Guarantee Response": `We improve the system, clarity, follow-up, and customer journey to increase the chance of better results. No agency or tool can guarantee specific results.`
  ,
  "Proposal Template": `Service:

Client problem:

Recommended KYAN solution:

Deliverables:
- 
- 
- 

Timeline:

Price:

Included:

Not included:

Client requirements:

Revision limit:

Support period:

Payment terms:

Next step:`,
  "CRM Requirements Form": `1. How do leads arrive?
2. What customer info should be collected?
3. What are the sales stages?
4. Are there orders to track?
5. Is delivery tracking needed?
6. Is payment tracking needed?
7. Who will use the sheet?
8. What reports should the dashboard show?
9. What dropdown statuses do you need?
10. What should the owner see every morning?`,
  "Automation Requirements Form": `1. What manual task happens every day?
2. What triggers it?
3. Which apps are involved?
4. What data fields move between apps?
5. What should happen if data is missing?
6. Who should be notified?
7. How will success be checked?
8. What should happen if the workflow fails?`,
  "Website Requirements Form": `1. Business name and logo
2. Main offer
3. Target customers
4. Services
5. WhatsApp number
6. Location
7. Photos/videos
8. Testimonials or proof
9. FAQ
10. Domain and hosting status`,
  "Technical Support Report": `Issue:

Client/site:

Access received:

Backup taken:

Diagnosis:

Work completed:

Tests performed:

Result:

Prevention recommendation:

Next support option:`,
  "Monthly Report Template": `Month:

Client:

Completed tasks:
- 
- 

Performance notes:

System/content improvements:

Problems found:

Recommendations:

Next month plan:

Upsell opportunity:`,
  "Handover Document": `Project:

What was delivered:

How to use it:

Important links/files:

Client responsibilities:

Support period:

What is not included:

Recommended next step:

KYAN - من اللخبطة للنظام، ومن النظام للنمو.`
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 1600);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast("Copied");
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.left = "-9999px";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    document.body.removeChild(helper);
    showToast("Copied");
  }
}

function renderOptions() {
  $("#pillarSelect").innerHTML = pillars.map((pillar) => `<option>${pillar.name}</option>`).join("");
  $("#audienceSelect").innerHTML = brain.audience.map((audience) => `<option>${audience}</option>`).join("");
  $("#templateSelect").innerHTML = Object.keys(templates).map((name) => `<option>${name}</option>`).join("");
}

function renderStaticSections() {
  $("#dailyChecklist").innerHTML = checklist.map((item) => `<label class="check-row"><input type="checkbox" /> <span>${item}</span></label>`).join("");
  $("#voiceRules").innerHTML = [...brain.tone, "Simple Egyptian Arabic", "No guaranteed claims", "One clear CTA"].map((tag) => `<span class="tag">${tag}</span>`).join("");
  $("#brandJson").textContent = JSON.stringify(brain, null, 2);
  $("#auditChecks").innerHTML = auditItems.map((item, index) => `<label class="check-row"><input type="checkbox" ${index < 5 ? "checked" : ""} /> <span>${item}</span></label>`).join("");
  $("#auditScoreInputs").innerHTML = auditScorecard.map((item) => `<label class="score-row">
    <span><b>${item.label}</b><br>${item.description}</span>
    <input id="score-${item.id}" type="number" min="0" max="5" value="3" />
  </label>`).join("");
  $("#issueChecks").innerHTML = issueSignals.map((issue) => `<label class="check-row"><input type="checkbox" value="${issue.id}" /> <span>${issue.label}</span></label>`).join("");
  $("#serviceCards").innerHTML = services.map(([title, items]) => `<article class="surface service-card"><h3>${title}</h3><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`).join("");
  $("#liveChecklist").innerHTML = liveChecklistItems.map((item) => `<label class="check-row"><input type="checkbox" /> <span>${item}</span></label>`).join("");
  renderCaseList();
}

function generateDraft() {
  const pillar = pillars.find((item) => item.name === $("#pillarSelect").value);
  const format = $("#formatSelect").value;
  const audience = $("#audienceSelect").value;
  const pain = $("#painInput").value.trim();
  const hooks = [
    pillar.hook,
    `أكبر غلطة عند البيزنس الصغير: ${pain}.`,
    `لو ${pain}، يبقى المشكلة مش في التسويق بس.`,
    "صفحتك مش محتاجة بوستات أكتر... محتاجة سيستم.",
    "البيزنس اللي مفيهوش متابعة... مفيهوش نمو."
  ];

  const result = {
    content_type: format,
    pillar: pillar.name,
    target_audience: audience,
    selected_hook: hooks[0],
    hook_options: hooks,
    caption: `${hooks[0]}

المشكلة غالبا إن العميل بيدخل، يسأل، وبعدها مفيش متابعة واضحة.
ومع الوقت الرسائل بتتوه، الطلبات بتتلخبط، والفرص الحقيقية بتضيع.

KYAN بيبدأ بتنظيم العملية: نوضح الرسالة، نرتب خطوات التواصل، ونبني سيستم بسيط يخليك عارف كل عميل وصل لفين.

${brain.cta}

${brain.tagline}`,
    cta: brain.cta,
    visual_brief: `Clean KYAN-branded ${format.toLowerCase()} using teal, white, and dark charcoal. Show messy WhatsApp messages turning into an organized CRM/follow-up system. Headline: "${hooks[0]}"`,
    hashtags: ["#KYAN", "#BusinessSystems", "#CRM", "#DigitalPresence", "#SmallBusiness"]
  };

  $("#draftOutput").textContent = JSON.stringify(result, null, 2);
}

function generateAudit() {
  const business = $("#businessName").value.trim();
  const problem = $("#mainProblem").value.trim();
  const selected = $$("#auditChecks input")
    .map((input, index) => input.checked ? auditItems[index] : null)
    .filter(Boolean)
    .slice(0, 5);

  const fixes = selected.map((item, index) => `${index + 1}. ${item}`).join("\n");
  $("#auditOutput").textContent = `Business/Page Reviewed: ${business}

Main Problem:
${problem}

Top 5 Fixes:
${fixes}

Recommended KYAN Package:
Facebook Page Optimization + simple customer follow-up tracker.

Next Step:
ابعتلنا لينك الصفحة أو الموقع، وهنبدأ بخطة تحسين واضحة من غير وعود مبالغ فيها.

KYAN - من اللخبطة للنظام، ومن النظام للنمو.`;
}

function clampScore(value) {
  const number = Number(value);
  if (Number.isNaN(number)) return 0;
  return Math.max(0, Math.min(5, number));
}

function getAuditScores() {
  return auditScorecard.map((item) => ({
    ...item,
    score: clampScore($(`#score-${item.id}`).value)
  }));
}

function severityLabel(score) {
  if (score >= 4) return "Critical";
  if (score >= 3) return "Needs work";
  if (score >= 2) return "Watch";
  return "Healthy";
}

function servicePathFromScores(scores) {
  const ranked = scores.filter((item) => item.score >= 3).sort((a, b) => b.score - a.score);
  const services = ranked.map((item) => item.service);
  const hasFollowup = ranked.some((item) => ["followup", "orders"].includes(item.id));
  const hasManual = ranked.some((item) => item.id === "manual");
  const path = ["Free Business Audit"];

  services.forEach((service) => {
    if (service === "n8n Automation" && hasManual && hasFollowup && !path.includes("Google Sheets CRM")) {
      path.push("Google Sheets CRM");
    }
    if (!path.includes(service)) path.push(service);
  });

  if (hasManual && !path.includes("n8n Automation")) path.push("n8n Automation");
  if (path.length > 2 && !path.includes("Monthly Business Support")) path.push("Monthly Business Support");
  return path;
}

function renderAuditSummary(scores) {
  $("#auditScoreSummary").innerHTML = scores.map((item) => {
    const percent = (item.score / 5) * 100;
    const tone = item.score >= 4 ? "danger" : item.score >= 3 ? "warn" : "";
    return `<div class="score-meter">
      <div class="score-meter-head"><span>${item.label}</span><span>${item.score}/5 - ${severityLabel(item.score)}</span></div>
      <div class="meter-track"><div class="meter-fill ${tone}" style="width:${percent}%"></div></div>
    </div>`;
  }).join("");
}

function determineAuditPath() {
  const client = $("#auditClientName").value.trim() || "Audit Client";
  const type = $("#auditBusinessType").value;
  const goal = $("#auditClientGoal").value.trim();
  const setup = $("#auditCurrentSetup").value.trim();
  const scores = getAuditScores();
  const ranked = [...scores].sort((a, b) => b.score - a.score);
  const critical = ranked.filter((item) => item.score >= 4);
  const needsWork = ranked.filter((item) => item.score >= 3);
  const top = ranked[0];
  const path = servicePathFromScores(scores);
  const firstPaid = path.find((item) => item !== "Free Business Audit") || "Facebook Page Setup";
  const firstService = serviceKnowledge[firstPaid] || serviceKnowledge["Facebook Page Setup"];

  renderAuditSummary(scores);

  const auditOutput = `AUDIT BRAIN RESULT
Client: ${client}
Business type: ${type}

CLIENT GOAL
${goal}

CURRENT SETUP
${setup}

MAIN BOTTLENECK
${top.label} (${top.score}/5 - ${severityLabel(top.score)})
${top.description}

CRITICAL FINDINGS
${critical.length ? critical.map((item) => `- ${item.label}: ${item.fix}`).join("\n") : "- No critical area. Start with the highest scoring bottleneck."}

AREAS THAT NEED WORK
${needsWork.length ? needsWork.map((item) => `- ${item.label} -> ${item.service}`).join("\n") : "- No high-risk areas selected."}

RECOMMENDED CLIENT PATH
${path.map((step, index) => `${index + 1}. ${step}`).join("\n")}

FIRST PAID STEP
${firstPaid}
Goal: ${firstService.goal}

WHY THIS PATH
${path.includes("Google Sheets CRM") && path.includes("n8n Automation") ? "- CRM comes before automation because KYAN does not automate a messy process.\n" : ""}- Fix the largest bottleneck first.
- Keep the first paid step simple and easy to understand.
- Upsell only after the first system/page/content problem is solved.

DISCOVERY QUESTIONS TO ASK NEXT
${formatList(needsWork.slice(0, 6).map((item) => item.question))}

FIRST DELIVERY TASKS
${firstService.tasks.map((task) => `[ ] ${task}`).join("\n")}

DO NOT PROMISE
- Guaranteed sales
- Viral content
- First-page Google ranking
- Instant growth

SAFE POSITIONING
${brain.cta}
We improve the system, clarity, follow-up, and customer journey to increase the chance of better results.`;

  const reply = `تمام، بناء على التحليل المبدئي واضح إن أكبر نقطة محتاجة تتظبط هي: ${top.label}.

الأفضل نمشي بالترتيب ده:
${path.map((step, index) => `${index + 1}. ${step}`).join("\n")}

أول خطوة مدفوعة أرشحها: ${firstPaid}.
الهدف منها إننا نعالج أصل المشكلة قبل ما نزود محتوى أو نعمل Automation.

ابعتلي التفاصيل/اللينكات، وهنطلعلك تقرير مختصر فيه أهم 5 إصلاحات والخطوة المناسبة.

KYAN - من اللخبطة للنظام، ومن النظام للنمو.`;

  $("#auditBrainOutput").textContent = auditOutput;
  $("#auditClientReplyOutput").textContent = reply;

  return {
    name: client,
    type,
    request: goal,
    assets: [setup],
    budget: "Audit",
    urgency: "Audit",
    issues: needsWork.map((item) => item.id),
    primary: firstPaid,
    plan: auditOutput,
    reply,
    created_at: new Date().toISOString()
  };
}

function renderTemplate() {
  const name = $("#templateSelect").value;
  $("#templateTitle").textContent = name;
  $("#templateOutput").textContent = templates[name];
}

function normalizeText(text) {
  return text.toLowerCase().trim();
}

function detectIssues(message, manualIssues = []) {
  const text = normalizeText(message);
  const found = new Set(manualIssues);
  issueSignals.forEach((issue) => {
    if (issue.keywords.some((keyword) => text.includes(keyword.toLowerCase()))) {
      found.add(issue.id);
    }
  });
  if (!found.size) found.add("weak_page");
  return Array.from(found);
}

function scoreServices(issueIds) {
  return Object.entries(serviceKnowledge)
    .map(([name, service]) => ({
      name,
      score: service.triggerIssues.filter((issue) => issueIds.includes(issue)).length,
      service
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
}

function buildServicePath(issueIds) {
  const scored = scoreServices(issueIds);
  const primary = scored[0] || { name: "Free Business Audit", service: serviceKnowledge["Free Business Audit"] };
  const secondary = scored.find((item) => item.name !== primary.name && item.name !== "Free Business Audit") || scored[1] || primary;
  const auditFirst = primary.name === "Free Business Audit" ? primary : { name: "Free Business Audit", service: serviceKnowledge["Free Business Audit"] };
  const path = [auditFirst.name, primary.name, secondary.name, primary.service.upsell]
    .filter((item, index, array) => item && array.indexOf(item) === index);
  return { primary, secondary, path };
}

function selectedAssets() {
  return Array.from($("#clientAssets").selectedOptions).map((option) => option.value);
}

function selectedManualIssues() {
  return $$("#issueChecks input")
    .filter((input) => input.checked)
    .map((input) => input.value);
}

function formatList(items) {
  return items.map((item) => `- ${item}`).join("\n");
}

function buildClientPlan() {
  const name = $("#clientName").value.trim() || "New Client";
  const type = $("#clientType").value;
  const request = $("#clientRequest").value.trim();
  const assets = selectedAssets();
  const budget = $("#budgetLevel").value;
  const urgency = $("#urgencyLevel").value;
  const issues = detectIssues(`${request} ${assets.join(" ")}`);
  const { primary, secondary, path } = buildServicePath(issues);
  const service = primary.service;
  const issueLabels = issues.map((id) => issueSignals.find((issue) => issue.id === id)?.label || id);

  const plan = `CLIENT CASE
Client: ${name}
Business type: ${type}
Budget: ${budget}
Urgency: ${urgency}
Assets: ${assets.join(", ") || "Unknown"}

CLIENT REQUEST
${request}

DIAGNOSIS
${formatList(issueLabels)}

PRIMARY RECOMMENDATION
${primary.name}
Goal: ${service.goal}

SERVICE PATH
${path.map((step, index) => `${index + 1}. ${step}`).join("\n")}

DISCOVERY QUESTIONS TO ASK NEXT
${formatList(service.discovery)}

DELIVERABLES
${formatList(service.deliverables)}

INTERNAL TASK LIST
${service.tasks.map((task) => `[ ] ${task}`).join("\n")}

NEXT UPSELL
${service.upsell}

KYAN SAFETY LINE
${brain.avoid.includes("guaranteed sales") ? "We improve clarity, follow-up, and customer journey. We do not guarantee sales or instant results." : ""}`;

  const reply = `تمام، خليني أفهم الوضع صح الأول.

من كلامك واضح إن المشكلة مش مجرد ${primary.name}، لكن في تنظيم رحلة العميل والمتابعة.

الأفضل نبدأ بتحليل سريع للوضع الحالي:
1. نشوف وضوح الصفحة أو السيستم الحالي
2. نحدد فين العميل بيتوه
3. نطلع أول 5 إصلاحات مهمة
4. بعدها أرشحلك خطوة واحدة مناسبة بدل ما نعمل حاجات عشوائية

ابعتلي اللينكات أو التفاصيل المتاحة، وهنبدأ بتشخيص عملي.

KYAN - من اللخبطة للنظام، ومن النظام للنمو.`;

  $("#clientPlanOutput").textContent = plan;
  $("#clientReplyOutput").textContent = reply;
  return { name, type, request, assets, budget, urgency, issues, primary: primary.name, plan, reply, created_at: new Date().toISOString() };
}

function routeRequest() {
  const message = $("#routerInput").value.trim();
  const manualIssues = selectedManualIssues();
  const issues = detectIssues(message, manualIssues);
  const { primary, secondary, path } = buildServicePath(issues);
  const issueLabels = issues.map((id) => issueSignals.find((issue) => issue.id === id)?.label || id);

  $("#routerOutput").textContent = `DETECTED ISSUES
${formatList(issueLabels)}

START WITH
${primary.name}

WHY
${primary.service.goal}

SECONDARY OPTION
${secondary.name}

RECOMMENDED SERVICE PATH
${path.map((step, index) => `${index + 1}. ${step}`).join("\n")}

ASK THESE QUESTIONS
${formatList(primary.service.discovery)}

AVOID
- Do not promise guaranteed sales
- Do not automate before organizing the workflow
- Do not recommend more content if the page/message/follow-up system is unclear`;
}

function buildSystemPlan() {
  const type = $("#systemType").value;
  const workflow = $("#workflowInput").value.trim();
  const goal = $("#systemGoal").value.trim();
  const serviceKey = {
    "Landing Page": "Website / Landing Page",
    "Monthly Support": "Monthly Business Support"
  }[type] || type;
  const service = serviceKnowledge[serviceKey] || serviceKnowledge["Google Sheets CRM"];
  const outputMap = {
    "Google Sheets CRM": `SHEET STRUCTURE
Tabs:
- Leads
- Customers
- Orders
- Follow-ups
- Payments
- Dashboard
- Settings

Leads columns:
Lead ID | Date | Name | Phone | Source | Interested In | Problem/Need | Status | Next Follow-up | Assigned To | Notes

Dashboard:
Total leads | New leads | Follow-ups needed | Won deals | Lost deals | Total sales | Pending payments | Top source`,
    "n8n Automation": `WORKFLOW ARCHITECTURE
Trigger:
- New form/message/row/order event

Actions:
- Validate fields
- Add or update Google Sheet row
- Create follow-up date
- Notify owner
- Log errors

Rule:
Never automate a bad process. Organize first, automate second.`,
    "Landing Page": `PAGE STRUCTURE
1. Hero: clear offer + WhatsApp CTA
2. About: who the business helps
3. Services: simple list
4. Why choose us
5. How it works
6. Proof/testimonials
7. FAQ
8. Contact CTA`,
    "Technical Support": `SUPPORT PROCESS
1. Understand issue
2. Request screenshots/access
3. Back up files/database/settings
4. Diagnose
5. Fix
6. Test
7. Explain what changed
8. Recommend prevention`,
    "Monthly Support": `MONTHLY RHYTHM
Week 1: Review previous month and plan
Week 2: Content/system updates
Week 3: Optimization and follow-up
Week 4: Report and next recommendations`
  };

  $("#systemOutput").textContent = `SYSTEM TYPE
${type}

CURRENT WORKFLOW
${workflow}

MAIN GOAL
${goal}

REQUIRED DISCOVERY
${formatList(service.discovery)}

BUILD TASKS
${service.tasks.map((task) => `[ ] ${task}`).join("\n")}

DELIVERABLES
${formatList(service.deliverables)}

${outputMap[type]}

HANDOVER
- Explain the system in simple language
- Include next actions
- Mention support period and what is not included`;
}

function getCases() {
  try {
    return JSON.parse(localStorage.getItem("kyan_cases") || "[]");
  } catch (error) {
    return [];
  }
}

function setCases(cases) {
  localStorage.setItem("kyan_cases", JSON.stringify(cases));
}

function saveCurrentCase() {
  const current = buildClientPlan();
  const cases = getCases();
  cases.unshift(current);
  setCases(cases.slice(0, 30));
  renderCaseList();
  showToast("Client case saved");
}

function saveCurrentAuditCase() {
  const current = determineAuditPath();
  const cases = getCases();
  cases.unshift(current);
  setCases(cases.slice(0, 30));
  renderCaseList();
  showToast("Audit case saved");
}

function loadCase(caseData) {
  $("#clientName").value = caseData.name || "Client";
  $("#clientType").value = caseData.type || "Other small business";
  $("#clientRequest").value = caseData.request || "";
  $("#budgetLevel").value = caseData.budget || "Unknown";
  $("#urgencyLevel").value = caseData.urgency || "This week";
  Array.from($("#clientAssets").options).forEach((option) => {
    option.selected = (caseData.assets || []).includes(option.value);
  });
  $("#clientPlanOutput").textContent = caseData.plan || "";
  $("#clientReplyOutput").textContent = caseData.reply || "";
  $$(".nav-item").find((item) => item.dataset.section === "client")?.click();
}

function renderCaseList() {
  const target = $("#caseList");
  if (!target) return;
  const cases = getCases();
  if (!cases.length) {
    target.innerHTML = `<div class="case-item"><strong>No saved cases yet.</strong><span class="case-meta">Diagnose a client request, then save it here.</span></div>`;
    return;
  }
  target.innerHTML = cases.map((caseData, index) => `<div class="case-item">
    <strong>${caseData.name}</strong>
    <span class="case-meta">${caseData.primary} | ${new Date(caseData.created_at).toLocaleString()}</span>
    <button class="ghost-button" data-load-case="${index}">Load Case</button>
  </div>`).join("");
  $$("[data-load-case]").forEach((button) => {
    button.addEventListener("click", () => loadCase(cases[Number(button.dataset.loadCase)]));
  });
}

function defaultSettings() {
  return {
    apiProvider: "openai",
    apiModel: "gpt-4.1-mini",
    aiEndpoint: "/api/ai",
    sheetsEndpoint: "/api/sheets",
    sheetId: "",
    n8nWebhook: ""
  };
}

function getSettings() {
  try {
    return { ...defaultSettings(), ...JSON.parse(localStorage.getItem("kyan_settings") || "{}") };
  } catch (error) {
    return defaultSettings();
  }
}

function setSettings(settings) {
  localStorage.setItem("kyan_settings", JSON.stringify(settings));
}

function collectSettings() {
  return {
    apiProvider: $("#apiProvider").value,
    apiModel: $("#apiModel").value.trim(),
    aiEndpoint: $("#aiEndpoint").value.trim(),
    sheetsEndpoint: $("#sheetsEndpoint").value.trim(),
    sheetId: $("#sheetId").value.trim(),
    n8nWebhook: $("#n8nWebhook").value.trim()
  };
}

function loadSettings() {
  const settings = getSettings();
  $("#apiProvider").value = settings.apiProvider;
  $("#apiModel").value = settings.apiModel;
  $("#aiEndpoint").value = settings.aiEndpoint;
  $("#sheetsEndpoint").value = settings.sheetsEndpoint;
  $("#sheetId").value = settings.sheetId;
  $("#n8nWebhook").value = settings.n8nWebhook;
  $("#connectionOutput").textContent = `Saved settings loaded.

Security rule:
- Do not paste API keys here.
- Put API keys in Cloudflare Pages environment variables.
- Browser stores only endpoint URLs, model name, and Sheet ID.`;
}

async function requestJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const text = await response.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch (error) {
    data = { raw: text };
  }
  if (!response.ok) {
    throw new Error(data.error || data.message || `Request failed with ${response.status}`);
  }
  return data;
}

function latestCasePayload() {
  const cases = getCases();
  if (cases[0]) return cases[0];
  return buildClientPlan();
}

function currentAuditPayload() {
  return determineAuditPath();
}

async function testApiConnection() {
  const settings = collectSettings();
  setSettings(settings);
  const healthUrl = settings.aiEndpoint.replace(/\/api\/ai$/, "/api/health");
  $("#connectionOutput").textContent = "Testing connection...";
  try {
    const response = await fetch(healthUrl);
    const data = await response.json();
    $("#connectionOutput").textContent = JSON.stringify({ ok: true, healthUrl, data }, null, 2);
  } catch (error) {
    $("#connectionOutput").textContent = `Could not reach ${healthUrl}.

That is normal before deploying the Cloudflare Pages Functions.

Next:
1. Deploy to Cloudflare Pages.
2. Add environment variables.
3. Test again.

Error: ${error.message}`;
  }
}

async function runAiAgent(event) {
  event.preventDefault();
  const settings = collectSettings();
  setSettings(settings);
  const payload = {
    provider: settings.apiProvider,
    model: settings.apiModel,
    system: $("#aiSystemPrompt").value.trim(),
    input: $("#aiUserPrompt").value.trim(),
    context: {
      brand: brain,
      latest_case: latestCasePayload()
    }
  };

  $("#aiOutput").textContent = "Sending AI request...";
  try {
    const data = await requestJson(settings.aiEndpoint, payload);
    $("#aiOutput").textContent = data.output || JSON.stringify(data, null, 2);
  } catch (error) {
    $("#aiOutput").textContent = `AI request not completed.

If you have not deployed the backend yet, copy this request packet into your AI tool or n8n:

${JSON.stringify(payload, null, 2)}

Error: ${error.message}`;
  }
}

async function pushToSheets(tab, payload) {
  const settings = collectSettings();
  setSettings(settings);
  if (!settings.sheetId) {
    $("#connectionOutput").textContent = "Add a Google Sheet ID first.";
    return;
  }
  const body = {
    sheet_id: settings.sheetId,
    tab,
    payload
  };
  $("#connectionOutput").textContent = `Pushing ${tab}...`;
  try {
    const data = await requestJson(settings.sheetsEndpoint, body);
    $("#connectionOutput").textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    $("#connectionOutput").textContent = `Sheet push not completed.

If backend is not deployed yet, copy this packet into n8n or Apps Script:

${JSON.stringify(body, null, 2)}

Error: ${error.message}`;
  }
}

function exportBackupFile() {
  const backup = {
    exported_at: new Date().toISOString(),
    settings: getSettings(),
    cases: getCases(),
    brain,
    audit_scorecard: auditScorecard,
    service_knowledge: serviceKnowledge
  };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kyan-brain-backup-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast("Backup exported");
}

$$(".nav-item").forEach((button) => {
  button.addEventListener("click", () => {
    $$(".nav-item").forEach((item) => item.classList.remove("active"));
    $$(".panel").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    $(`#${button.dataset.section}`).classList.add("active");
  });
});

$("#contentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  generateDraft();
});

$("#auditForm").addEventListener("submit", (event) => {
  event.preventDefault();
  generateAudit();
});

$("#auditBrainForm").addEventListener("submit", (event) => {
  event.preventDefault();
  determineAuditPath();
});

$("#clientForm").addEventListener("submit", (event) => {
  event.preventDefault();
  buildClientPlan();
});

$("#routerForm").addEventListener("submit", (event) => {
  event.preventDefault();
  routeRequest();
});

$("#systemForm").addEventListener("submit", (event) => {
  event.preventDefault();
  buildSystemPlan();
});

$("#settingsForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const settings = collectSettings();
  setSettings(settings);
  showToast("Settings saved");
});

$("#aiAgentForm").addEventListener("submit", runAiAgent);
$("#templateSelect").addEventListener("change", renderTemplate);
$("#copyBrain").addEventListener("click", () => copyText(templates["AI Agent System Prompt"]));
$("#copyDraft").addEventListener("click", () => copyText($("#draftOutput").textContent));
$("#copyAudit").addEventListener("click", () => copyText($("#auditOutput").textContent));
$("#copyAuditBrain").addEventListener("click", () => copyText(`${$("#auditBrainOutput").textContent}\n\nCLIENT REPLY\n${$("#auditClientReplyOutput").textContent}`));
$("#copyClientPlan").addEventListener("click", () => copyText(`${$("#clientPlanOutput").textContent}\n\nCLIENT REPLY\n${$("#clientReplyOutput").textContent}`));
$("#copyRouter").addEventListener("click", () => copyText($("#routerOutput").textContent));
$("#copySystemPlan").addEventListener("click", () => copyText($("#systemOutput").textContent));
$("#copyTemplate").addEventListener("click", () => copyText($("#templateOutput").textContent));
$("#saveSettings").addEventListener("click", () => {
  setSettings(collectSettings());
  showToast("Settings saved");
});
$("#testApi").addEventListener("click", testApiConnection);
$("#pushAuditToSheets").addEventListener("click", () => pushToSheets("Client_Cases", currentAuditPayload()));
$("#pushCaseToSheets").addEventListener("click", () => pushToSheets("Client_Cases", latestCasePayload()));
$("#exportBackup").addEventListener("click", exportBackupFile);
$("#saveAuditCase").addEventListener("click", saveCurrentAuditCase);
$("#saveCase").addEventListener("click", saveCurrentCase);
$("#loadLastCase").addEventListener("click", () => {
  const latest = getCases()[0];
  if (latest) loadCase(latest);
  else showToast("No saved cases yet");
});
$("#clearCases").addEventListener("click", () => {
  setCases([]);
  renderCaseList();
  showToast("Saved cases cleared");
});
$$("[data-copy-target]").forEach((button) => button.addEventListener("click", () => copyText($(`#${button.dataset.copyTarget}`).textContent)));

renderOptions();
renderStaticSections();
generateDraft();
generateAudit();
determineAuditPath();
buildClientPlan();
routeRequest();
buildSystemPlan();
renderTemplate();
loadSettings();
