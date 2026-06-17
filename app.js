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

const googleAuditForm = [
  { section: "Business Basics", title: "Business name", type: "short", required: true, maps_to: "client_name" },
  { section: "Business Basics", title: "Business type", type: "choice", required: true, options: ["Online store", "Clinic", "Salon", "Coach / consultant", "Local service business", "Restaurant / cafe", "Real estate", "Other small business"], maps_to: "business_type" },
  { section: "Business Basics", title: "Main goal", type: "paragraph", required: true, maps_to: "goal" },
  { section: "Business Basics", title: "Current setup", type: "paragraph", required: true, maps_to: "setup" },
  { section: "Problem", title: "Main problem", type: "paragraph", required: true, maps_to: "problem" },
  { section: "Assets", title: "Has Facebook page", type: "choice", required: true, options: ["Yes", "No", "Not sure"], score_area: "clarity" },
  { section: "Assets", title: "Has website", type: "choice", required: true, options: ["Yes", "No", "Bad/needs work"], score_area: "website" },
  { section: "Assets", title: "Has Google Sheet / CRM", type: "choice", required: true, options: ["Yes", "No", "Basic sheet only"], score_area: "followup" },
  { section: "Page Audit", title: "Can customers understand your offer in 5 seconds?", type: "choice", required: true, options: ["Yes", "No", "Not sure"], score_area: "clarity" },
  { section: "Page Audit", title: "Do you have clear reviews/photos/proof?", type: "choice", required: true, options: ["Yes", "No", "Some"], score_area: "trust" },
  { section: "Content", title: "Content consistency", type: "choice", required: true, options: ["Consistent", "Random", "Rarely post", "No content"], score_area: "content" },
  { section: "Sales Flow", title: "Follow-up system", type: "choice", required: true, options: ["CRM / Sheet", "WhatsApp only", "Memory only", "No follow-up"], score_area: "followup" },
  { section: "Sales Flow", title: "Tracks leads", type: "choice", required: true, options: ["Yes", "No", "Sometimes"], score_area: "followup" },
  { section: "Sales Flow", title: "Tracks orders/payments", type: "choice", required: true, options: ["Yes", "No", "Sometimes", "Not applicable"], score_area: "orders" },
  { section: "Automation", title: "Manual repetitive work", type: "choice", required: true, options: ["Low", "Medium", "High"], score_area: "manual" },
  { section: "Technical", title: "Technical issues", type: "choice", required: true, options: ["No", "Website/domain/email issue", "Not sure"], score_area: "technical" },
  { section: "Sales", title: "Monthly budget level", type: "choice", required: true, options: ["Low", "Medium", "High", "Not sure"], maps_to: "budget" },
  { section: "Sales", title: "Urgency", type: "choice", required: true, options: ["Today", "This week", "This month", "No deadline"], maps_to: "urgency" },
  { section: "Sales", title: "Best contact method", type: "choice", required: true, options: ["WhatsApp", "Phone", "Email", "Messenger"], maps_to: "contact_method" },
  { section: "Sales", title: "Page/website link", type: "short", required: false, maps_to: "link" }
];

const auditPlaybooks = {
  "Facebook Page Audit": {
    goal: "Decide whether the client needs page setup, content planning, CRM, or ads-readiness work.",
    tools: ["Facebook Page public view", "Meta Business Suite", "Page inbox/Messenger", "WhatsApp Business", "Competitor pages"],
    checks: [
      "Profile photo is clear and recognizable in a small circle",
      "Cover communicates offer, service, and CTA",
      "Bio explains what the business does in one simple sentence",
      "CTA button points to WhatsApp/Messenger correctly",
      "About section has phone, location, website, hours, and services",
      "Pinned post explains offer and next step",
      "Last 10 posts are useful and not random",
      "Comments/messages are answered quickly",
      "Trust signals exist: reviews, real photos, proof, portfolio, FAQs",
      "Lead flow after first message is tracked somewhere"
    ],
    scoring: "Score each area 0-5. Any 4-5 in clarity, CTA, or trust means Page Setup comes before ads/content scaling.",
    redFlags: ["No clear CTA", "No pinned post", "Random posts only", "Messages handled from memory", "Boosting ads before page looks trustworthy"],
    deliverables: ["Page audit report", "Top 5 fixes", "Recommended package", "Pinned post draft", "Bio/About rewrite"],
    nextServices: ["Facebook Page Setup", "Content Planning", "Google Sheets CRM"]
  },
  "Instagram Audit": {
    goal: "Decide whether Instagram needs profile optimization, content pillars, highlights, Reels, or DM follow-up system.",
    tools: ["Instagram public profile", "Meta Business Suite", "Instagram Insights", "DM inbox", "Competitor Instagram profiles"],
    checks: [
      "Name field contains searchable business/service keyword",
      "Bio explains offer, location/market, and next step",
      "Link in bio works and supports the CTA",
      "Highlights are organized: services, results, FAQ, reviews, location",
      "Last 9 posts visually communicate the business clearly",
      "Reels have strong first 2 seconds and useful topics",
      "Captions include one clear CTA",
      "Comments/DMs are answered and tracked",
      "Content pillars are consistent",
      "Trust proof exists: testimonials, before/after, client stories"
    ],
    scoring: "Score clarity, trust, content, CTA, and follow-up. If DMs are active but sales are low, CRM/follow-up is the likely next step.",
    redFlags: ["Bio says nothing specific", "No highlights", "No link/CTA", "Pretty posts but no sales path", "DMs not tracked"],
    deliverables: ["Instagram profile audit", "Bio rewrite", "Highlight plan", "Content pillar plan", "Reels ideas"],
    nextServices: ["Content Planning", "Google Sheets CRM", "Monthly Business Support"]
  },
  "Website / Landing Page Audit": {
    goal: "Decide whether the website can explain the offer and generate leads, or needs landing page/technical fixes.",
    tools: ["Browser mobile view", "Google PageSpeed Insights", "Google Search Console", "Google Analytics if available", "BuiltWith/Wappalyzer optional"],
    checks: [
      "Hero explains offer in 5 seconds",
      "Main CTA is visible above the fold and repeated later",
      "WhatsApp/contact button works on mobile",
      "Services are clear and easy to scan",
      "Proof exists: testimonials, portfolio, numbers, reviews",
      "FAQ handles objections",
      "Page is mobile-friendly",
      "PageSpeed mobile performance is acceptable",
      "SEO title/meta description exist",
      "Indexing/Search Console status is healthy",
      "Forms/buttons are tested",
      "SSL and basic technical setup are healthy"
    ],
    scoring: "If hero/CTA/mobile fail, fix landing page before SEO. If speed/indexing/SSL fail, technical support comes first.",
    redFlags: ["No CTA above fold", "Broken WhatsApp/form", "Slow mobile page", "Not indexed", "No SSL", "Generic stock copy"],
    deliverables: ["Website audit report", "Top 5 conversion fixes", "Technical fixes", "SEO basics checklist", "Landing page recommendation"],
    nextServices: ["Website / Landing Page", "Technical Support", "SEO Basics", "Google Sheets CRM"]
  },
  "Google Business Profile Audit": {
    goal: "Decide whether the business is ready for local search trust and customer actions.",
    tools: ["Google Business Profile dashboard", "Google Maps public listing", "GBP performance", "Competitor map listings"],
    checks: [
      "Business name/category is accurate",
      "Address/service area and hours are correct",
      "Phone/website/booking links work",
      "Services/products are filled",
      "Photos are real, recent, and relevant",
      "Reviews are present and answered",
      "Business description is clear",
      "Posts/updates are used if relevant",
      "Questions and answers are handled",
      "UTM/tracking is considered for website link"
    ],
    scoring: "If profile is incomplete or reviews are unmanaged, fix GBP before local ads.",
    redFlags: ["Wrong category", "No photos", "Unanswered bad reviews", "Wrong hours", "Broken phone/link"],
    deliverables: ["GBP audit", "Profile optimization checklist", "Review response templates", "Photo/post plan"],
    nextServices: ["Digital Presence Setup", "Content Planning", "Monthly Business Support"]
  },
  "CRM / Follow-up Audit": {
    goal: "Decide whether leads/orders/payments need a Google Sheets CRM before any automation.",
    tools: ["WhatsApp chat flow", "Inbox review", "Existing Google Sheet/Excel", "Order/payment examples", "Manual process map"],
    checks: [
      "Lead sources are known",
      "Required customer fields are clear",
      "Lead stages are defined",
      "Follow-up date is tracked",
      "Owner knows who needs action today",
      "Orders are separated from leads",
      "Payments are tracked",
      "Lost reasons are tracked",
      "Dashboard shows useful numbers",
      "Team knows how to use the system"
    ],
    scoring: "If follow-up/order/payment scores are 4-5, CRM is the first paid system. Automation waits until this is clear.",
    redFlags: ["Everything inside WhatsApp", "No next follow-up date", "No owner view", "No payment status", "No lost reason"],
    deliverables: ["Process map", "CRM requirements", "Sheet structure", "Dashboard requirements", "Handover guide"],
    nextServices: ["Google Sheets CRM", "n8n Automation", "Monthly Business Support"]
  },
  "Automation Audit": {
    goal: "Decide whether a process is ready for n8n automation or still needs organization first.",
    tools: ["Process map", "Google Sheets", "n8n", "Google Forms", "Email/Telegram/WhatsApp notification tools", "Error examples"],
    checks: [
      "Trigger is clear",
      "Inputs/fields are defined",
      "Destination app is clear",
      "Duplicate handling is defined",
      "Error path is defined",
      "Manual override exists",
      "Client understands what the workflow does",
      "Data is already organized",
      "Testing examples are available",
      "Maintenance owner is assigned"
    ],
    scoring: "If trigger/data/error path are unclear, do not automate yet. Build CRM/process first.",
    redFlags: ["Client cannot explain the process", "No structured data", "No failure handling", "Automation requested to fix chaos"],
    deliverables: ["Automation readiness report", "Workflow map", "Trigger/actions/fields", "Error handling plan", "n8n build scope"],
    nextServices: ["Google Sheets CRM", "n8n Automation", "Monthly Business Support"]
  },
  "Technical Support Audit": {
    goal: "Identify technical blockers safely before touching files, DNS, hosting, email, or website settings.",
    tools: ["Hosting/cPanel dashboard", "Domain DNS panel", "SSL checker", "Website backup tool", "Browser console optional", "Google Search Console optional"],
    checks: [
      "Issue is clearly described",
      "Access is available and authorized",
      "Backup exists before changes",
      "Domain DNS records are documented",
      "SSL is valid",
      "Business email works",
      "Website loads on mobile/desktop",
      "Recent changes are known",
      "Error screenshots are collected",
      "Rollback plan exists"
    ],
    scoring: "Any backup/access/DNS uncertainty is critical. Do not modify before documenting current state.",
    redFlags: ["No backup", "Unknown DNS access", "Client asks for urgent changes without screenshots", "Email/domain involved with no rollback"],
    deliverables: ["Technical support report", "Backup note", "Diagnosis", "Fix summary", "Prevention recommendation"],
    nextServices: ["Technical Support", "Monthly Business Support"]
  }
};

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

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function listHtml(items) {
  return `<ul>${(items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
}

function textBlockHtml(text) {
  return `<div class="copy-block">${escapeHtml(text)}</div>`;
}

function renderHumanOutput(target, sections) {
  const element = typeof target === "string" ? $(target) : target;
  element.innerHTML = sections.map((section) => `<section class="answer-section">
    <h4>${escapeHtml(section.title)}</h4>
    ${section.html}
  </section>`).join("");
}

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
  $("#opsContentPillar").innerHTML = pillars.map((pillar) => `<option>${pillar.name}</option>`).join("");
  $("#auditPlaybookType").innerHTML = Object.keys(auditPlaybooks).map((name) => `<option>${name}</option>`).join("");
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
  renderFormIntake();
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

  renderContentDraft(result);
  localStorage.setItem("kyan_last_content_draft", JSON.stringify(result));
}

function renderContentDraft(result) {
  renderHumanOutput("#draftOutput", [
    { title: "Best Hook", html: textBlockHtml(result.selected_hook) },
    { title: "Caption", html: textBlockHtml(result.caption) },
    { title: "Other Hooks", html: listHtml(result.hook_options) },
    { title: "Visual Brief", html: textBlockHtml(result.visual_brief) },
    { title: "CTA", html: textBlockHtml(result.cta) },
    { title: "Hashtags", html: `<div class="tag-grid">${result.hashtags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>` }
  ]);
}

function flywheelInputPayload() {
  return {
    input_type: $("#flywheelInputType").value,
    platform_focus: $("#flywheelPlatform").value,
    language: $("#flywheelLanguage").value,
    business_context: $("#flywheelContext").value.trim(),
    raw_input: $("#flywheelInput").value.trim(),
    created_at: new Date().toISOString()
  };
}

function flywheelPrompt(payload = flywheelInputPayload()) {
  return `Create a KYAN Content Flywheel pack.

Brand:
${JSON.stringify(brain, null, 2)}

Input type: ${payload.input_type}
Platform focus: ${payload.platform_focus}
Language: ${payload.language}
Business context: ${payload.business_context}
Raw input: ${payload.raw_input}

Return only valid JSON with these keys:
core_insight, target_client, content_angle, hooks, short_form_scripts, facebook_linkedin_posts, carousel_outline, story_ideas, thread, visual_direction, posting_schedule, measurement_plan, service_blueprint.

Rules:
- Use practical, simple, Egyptian-friendly wording.
- Make the content useful for small business owners.
- Maximize useful reach through volume, consistency, hooks, proof, and platform-native formats.
- Never promise guaranteed virality, guaranteed sales, first-page rankings, or instant growth.
- service_blueprint must include recommended_service, why_this_path, discovery_questions, delivery_steps, deliverables, and next_upsell.`;
}

function buildLocalFlywheelPack(payload = flywheelInputPayload()) {
  const issueText = `${payload.business_context} ${payload.raw_input}`;
  const issues = detectIssues(issueText);
  const { primary, secondary, path } = buildServicePath(issues);
  const pain = payload.raw_input || payload.business_context || "The business has scattered work and no clear follow-up system.";
  const target = payload.business_context || "Egyptian SMB owners";
  const core = "Many SMBs do not need more random activity first. They need a cleaner system for clarity, follow-up, and daily execution.";
  const hooks = [
    "Your problem may not be marketing. It may be missing follow-up.",
    "If every lead stays inside chat, your business is depending on memory.",
    "More posts will not fix a broken customer journey.",
    "Before automation, make the process visible.",
    "A simple CRM can save leads you already paid time and effort to attract."
  ];
  const scripts = hooks.slice(0, 3).map((hook, index) => ({
    title: `Short-form script ${index + 1}`,
    hook,
    beats: [
      "Show the messy current situation: messages, notes, and forgotten follow-ups.",
      `Name the real pain: ${pain}`,
      "Show the KYAN method: Audit, Organize, Build, Automate, Improve.",
      `Offer the next step: ${primary.name}.`
    ],
    visual_cues: ["Split screen before/after", "Quick screen recording of a clean sheet or dashboard", "End with one WhatsApp/free audit CTA"],
    cta: brain.cta
  }));

  const posts = [
    {
      platform: "Facebook / LinkedIn",
      caption: `${hooks[0]}

${pain}

Most small businesses try to solve this with more posts, more ads, or more manual effort. But if the customer journey is unclear, the same problem repeats.

KYAN starts with the system:
1. Audit the current setup
2. Organize the client journey
3. Build the simple tracker or workflow
4. Automate only what is already clear

Next logical step: ${primary.name}.

${brain.cta}`
    },
    {
      platform: "Facebook / LinkedIn",
      caption: `A business can look active online and still lose clients every day.

The issue is usually hidden in small details:
- No clear CTA
- No lead status
- No follow-up date
- No owner for the next step
- No simple dashboard

That is why KYAN works system first, automation second.

Recommended path: ${path.join(" -> ")}.`
    }
  ];

  const pack = {
    pack_id: uid("flywheel"),
    created_at: payload.created_at,
    input: payload,
    core_insight: core,
    target_client: target,
    content_angle: `${primary.name} as the practical next step for a messy customer journey.`,
    hooks,
    short_form_scripts: scripts,
    facebook_linkedin_posts: posts,
    carousel_outline: [
      "Slide 1: The business problem is not always marketing",
      "Slide 2: Where leads get lost",
      "Slide 3: What to track first",
      "Slide 4: The KYAN path",
      `Slide 5: Start with ${primary.name}`,
      "Slide 6: Free audit CTA"
    ],
    story_ideas: [
      "Poll: Do you track follow-ups outside WhatsApp?",
      "Before/after: messy chat vs organized CRM",
      "Question box: Send your page and we will tell you the first bottleneck"
    ],
    thread: [
      "1. If your leads are only in chat, you do not have a sales system yet.",
      "2. Start by defining lead status, next follow-up, and owner.",
      "3. Then connect the page, form, or WhatsApp flow.",
      "4. Automation comes after the process is clean.",
      `5. KYAN next step: ${primary.name}.`
    ],
    visual_direction: "Use clean teal/white/charcoal visuals. Show chaos becoming an organized tracker, dashboard, or client path. Avoid fake luxury, hype, and generic agency visuals.",
    posting_schedule: [
      "Day 1: Short-form script 1",
      "Day 2: Facebook/LinkedIn post 1",
      "Day 3: Stories poll + question box",
      "Day 4: Carousel",
      "Day 5: Short-form script 2",
      "Day 6: Facebook/LinkedIn post 2",
      "Day 7: Proof, behind-the-scenes, or audit invitation"
    ],
    measurement_plan: [
      "Track saves, comments, replies, audit requests, and qualified leads.",
      "Mark which hook created the most client conversations.",
      "Turn best-performing posts into service examples and client report language."
    ],
    service_blueprint: {
      recommended_service: primary.name,
      secondary_service: secondary.name,
      path,
      why_this_path: primary.service.goal,
      discovery_questions: primary.service.discovery,
      delivery_steps: primary.service.tasks,
      deliverables: primary.service.deliverables,
      next_upsell: primary.service.upsell
    },
    safety_rule: "Maximize useful reach through volume, consistency, hooks, proof, and platform-native formats. No guaranteed virality, guaranteed sales, first-page rankings, or instant growth."
  };
  return pack;
}

function renderFlywheelPack(pack) {
  const scriptsHtml = (pack.short_form_scripts || []).map((script) => `<article class="mini-card">
    <h5>${escapeHtml(script.title)}</h5>
    <p><b>Hook:</b> ${escapeHtml(script.hook)}</p>
    ${listHtml(script.beats || [])}
    <p><b>Visual cues:</b> ${escapeHtml((script.visual_cues || []).join(" | "))}</p>
  </article>`).join("");
  const postsHtml = (pack.facebook_linkedin_posts || []).map((post) => `<article class="mini-card">
    <h5>${escapeHtml(post.platform || "Post")}</h5>
    ${textBlockHtml(post.caption || "")}
  </article>`).join("");

  renderHumanOutput("#flywheelOutput", [
    { title: "Core Insight", html: textBlockHtml(pack.core_insight) },
    { title: "Content Angle", html: textBlockHtml(pack.content_angle) },
    { title: "Hooks", html: listHtml(pack.hooks) },
    { title: "Short-Form Scripts", html: scriptsHtml },
    { title: "Facebook / LinkedIn Posts", html: postsHtml },
    { title: "Carousel Outline", html: listHtml(pack.carousel_outline) },
    { title: "Stories", html: listHtml(pack.story_ideas) },
    { title: "Thread", html: listHtml(pack.thread) },
    { title: "Visual Direction", html: textBlockHtml(pack.visual_direction) },
    { title: "Posting Schedule", html: listHtml(pack.posting_schedule) },
    { title: "Measure This", html: listHtml(pack.measurement_plan) },
    { title: "Safety Rule", html: textBlockHtml(pack.safety_rule) }
  ]);

  const blueprint = pack.service_blueprint || {};
  renderHumanOutput("#flywheelBlueprintOutput", [
    { title: "Recommended Service", html: textBlockHtml(blueprint.recommended_service || "Free Business Audit") },
    { title: "Why This Path", html: textBlockHtml(blueprint.why_this_path || "") },
    { title: "Service Path", html: listHtml(blueprint.path || []) },
    { title: "Discovery Questions", html: listHtml(blueprint.discovery_questions || []) },
    { title: "Delivery Steps", html: listHtml(blueprint.delivery_steps || []) },
    { title: "Deliverables", html: listHtml(blueprint.deliverables || []) },
    { title: "Next Upsell", html: textBlockHtml(blueprint.next_upsell || "") }
  ]);
  localStorage.setItem("kyan_last_flywheel_pack", JSON.stringify(pack));
  return pack;
}

function flywheelPackToText(pack = latestFlywheelPack()) {
  const scripts = (pack.short_form_scripts || []).map((script) => `${script.title}
Hook: ${script.hook}
Beats:
${formatList(script.beats || [])}`).join("\n\n");
  const posts = (pack.facebook_linkedin_posts || []).map((post) => `${post.platform}
${post.caption}`).join("\n\n");
  const blueprint = pack.service_blueprint || {};
  return `KYAN CONTENT FLYWHEEL

CORE INSIGHT
${pack.core_insight}

CONTENT ANGLE
${pack.content_angle}

HOOKS
${formatList(pack.hooks || [])}

SHORT-FORM SCRIPTS
${scripts}

FACEBOOK / LINKEDIN POSTS
${posts}

CAROUSEL OUTLINE
${formatList(pack.carousel_outline || [])}

STORIES
${formatList(pack.story_ideas || [])}

THREAD
${formatList(pack.thread || [])}

VISUAL DIRECTION
${pack.visual_direction}

POSTING SCHEDULE
${formatList(pack.posting_schedule || [])}

MEASUREMENT PLAN
${formatList(pack.measurement_plan || [])}

SERVICE BLUEPRINT
Recommended service: ${blueprint.recommended_service || "Free Business Audit"}
Why: ${blueprint.why_this_path || ""}
Path: ${(blueprint.path || []).join(" -> ")}

Discovery:
${formatList(blueprint.discovery_questions || [])}

Delivery:
${formatList(blueprint.delivery_steps || [])}

Deliverables:
${formatList(blueprint.deliverables || [])}

Next upsell:
${blueprint.next_upsell || ""}

SAFETY RULE
${pack.safety_rule}`;
}

function generateContentFlywheel(event) {
  if (event) event.preventDefault();
  return renderFlywheelPack(buildLocalFlywheelPack());
}

function latestFlywheelPack() {
  try {
    return JSON.parse(localStorage.getItem("kyan_last_flywheel_pack") || "null") || generateContentFlywheel();
  } catch (error) {
    return generateContentFlywheel();
  }
}

async function generateContentFlywheelWithAi() {
  const settings = collectSettings();
  setSettings(settings);
  const payload = flywheelInputPayload();
  const requestPayload = {
    provider: settings.apiProvider,
    model: settings.apiModel,
    system: "You are the KYAN Content Flywheel strategist. Return only valid JSON.",
    input: flywheelPrompt(payload),
    context: {
      brand: brain,
      service_knowledge: serviceKnowledge,
      latest_case: latestCasePayload()
    }
  };
  $("#flywheelOutput").textContent = "Sending Content Flywheel request...";
  $("#flywheelBlueprintOutput").textContent = "Waiting for AI service blueprint...";
  try {
    const data = await requestJson(settings.aiEndpoint, requestPayload);
    const output = data.output || JSON.stringify(data, null, 2);
    try {
      const parsed = JSON.parse(output);
      renderFlywheelPack({ ...parsed, input: payload, created_at: new Date().toISOString() });
    } catch (parseError) {
      renderHumanOutput("#flywheelOutput", [
        { title: "AI Content Pack", html: textBlockHtml(output) },
        { title: "Note", html: textBlockHtml("The AI returned normal text instead of structured sections. You can still copy it, or rerun with the local generator.") }
      ]);
      renderHumanOutput("#flywheelBlueprintOutput", [
        { title: "Service Blueprint", html: textBlockHtml("No structured blueprint was found in the AI response.") }
      ]);
    }
  } catch (error) {
    const fallback = buildLocalFlywheelPack(payload);
    renderFlywheelPack(fallback);
    showToast("AI unavailable. Local pack generated.");
  }
}

function saveFlywheelToOps() {
  const pack = latestFlywheelPack();
  const ops = normalizedOps();
  const ideas = [
    ...(pack.short_form_scripts || []).map((script) => ({
      idea: script.hook || script.title,
      format: "Reel",
      pillar: "Sales & Follow-up"
    })),
    ...(pack.facebook_linkedin_posts || []).map((post) => ({
      idea: post.caption ? post.caption.split("\n")[0] : "Facebook / LinkedIn post",
      format: "Facebook Post",
      pillar: "Business Organization"
    })),
    {
      idea: (pack.carousel_outline || [])[0] || pack.content_angle || "Carousel from flywheel pack",
      format: "Carousel",
      pillar: "Free Audit Offer"
    }
  ].slice(0, 8);
  ideas.reverse().forEach((idea) => {
    ops.content.unshift({
      id: uid("content"),
      idea: idea.idea,
      pillar: idea.pillar,
      format: idea.format,
      status: "Idea",
      created_at: new Date().toISOString()
    });
  });
  setOps(ops);
  renderOps();
  showToast("Flywheel saved to content queue");
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

function renderFormIntake() {
  const grouped = googleAuditForm.reduce((acc, question) => {
    acc[question.section] = acc[question.section] || [];
    acc[question.section].push(question);
    return acc;
  }, {});
  $("#formQuestionList").innerHTML = Object.entries(grouped).map(([section, questions]) => `<div class="ops-item">
    <div class="ops-item-title">${section}</div>
    ${questions.map((question) => `<div><b>${question.title}</b><div class="ops-meta"><span>${question.type}</span><span>${question.required ? "Required" : "Optional"}</span>${question.score_area ? `<span>Scores: ${question.score_area}</span>` : ""}</div></div>`).join("")}
  </div>`).join("");
  $("#formSchemaOutput").textContent = JSON.stringify(googleAuditForm, null, 2);
  renderAuditToolCards();
}

function parseFormResponse(raw) {
  const text = raw.trim();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch (error) {
    return text.split(/\n+/).reduce((acc, line) => {
      const separator = line.includes(":") ? ":" : line.includes("=") ? "=" : null;
      if (!separator) return acc;
      const [key, ...rest] = line.split(separator);
      acc[key.trim()] = rest.join(separator).trim();
      return acc;
    }, {});
  }
}

function valueIncludes(value, terms) {
  return terms.some((term) => String(value || "").toLowerCase().includes(term.toLowerCase()));
}

function scoreFromFormAnswer(question, value) {
  if (!question.score_area) return null;
  if (valueIncludes(value, ["no", "not sure", "memory only", "no follow-up", "no content", "rarely", "bad/needs work"])) return 5;
  if (valueIncludes(value, ["random", "whatsapp only", "sometimes", "basic", "high", "website/domain/email issue"])) return 4;
  if (valueIncludes(value, ["some", "medium", "not applicable"])) return 3;
  if (valueIncludes(value, ["yes", "consistent", "crm", "sheet", "low"])) return 1;
  return 3;
}

function scoresFromFormResponse(response) {
  const scores = auditScorecard.map((area) => ({ ...area, score: 0, evidence: [] }));
  googleAuditForm.forEach((question) => {
    const value = response[question.title];
    const score = scoreFromFormAnswer(question, value);
    if (score === null) return;
    const target = scores.find((item) => item.id === question.score_area);
    if (!target) return;
    target.score = Math.max(target.score, score);
    target.evidence.push(`${question.title}: ${value || "Missing"}`);
  });

  const textBlob = Object.values(response).join(" ");
  if (valueIncludes(textBlob, ["sales", "mبيعات", "واتساب", "messages"])) {
    scores.find((item) => item.id === "followup").score = Math.max(scores.find((item) => item.id === "followup").score, 3);
  }
  if (valueIncludes(textBlob, ["content is random", "random content", "محتوى"])) {
    scores.find((item) => item.id === "content").score = Math.max(scores.find((item) => item.id === "content").score, 4);
  }
  return scores;
}

function buildPathFromFormResponse(response) {
  const scores = scoresFromFormResponse(response);
  const ranked = [...scores].sort((a, b) => b.score - a.score);
  const needsWork = ranked.filter((item) => item.score >= 3);
  const top = ranked[0];
  const path = servicePathFromScores(scores);
  const firstPaid = path.find((item) => item !== "Free Business Audit") || "Facebook Page Setup";
  const firstService = serviceKnowledge[firstPaid] || serviceKnowledge["Facebook Page Setup"];
  const client = response["Business name"] || "Form Client";
  const type = response["Business type"] || "Unknown";
  const goal = response["Main goal"] || response["Main problem"] || "Needs audit";
  const setup = response["Current setup"] || "Not provided";

  const output = `GOOGLE FORM AUDIT RESULT
Client: ${client}
Business type: ${type}
Budget: ${response["Monthly budget level"] || response["Budget level"] || "Unknown"}
Urgency: ${response["Urgency"] || "Unknown"}
Link: ${response["Page/website link"] || "Not provided"}

CLIENT GOAL
${goal}

CURRENT SETUP
${setup}

MAIN BOTTLENECK
${top.label} (${top.score}/5 - ${severityLabel(top.score)})

EVIDENCE
${needsWork.map((item) => `- ${item.label}: ${item.evidence.join("; ") || item.description}`).join("\n")}

RECOMMENDED PATH
${path.map((step, index) => `${index + 1}. ${step}`).join("\n")}

FIRST PAID STEP
${firstPaid}
Goal: ${firstService.goal}

DISCOVERY QUESTIONS
${formatList(firstService.discovery)}

DELIVERY TASKS
${firstService.tasks.map((task) => `[ ] ${task}`).join("\n")}`;

  const reply = `تمام، شكرًا إنك ملّيت الفورم.

من إجاباتك واضح إن أكبر نقطة محتاجة تتظبط هي: ${top.label}.

الترتيب المناسب ليك:
${path.map((step, index) => `${index + 1}. ${step}`).join("\n")}

أول خطوة أرشحها: ${firstPaid}.
هنبدأ بتشخيص واضح ونحدد أهم 5 إصلاحات قبل أي شغل عشوائي.

KYAN - من اللخبطة للنظام، ومن النظام للنمو.`;

  return {
    caseData: {
      name: client,
      type,
      request: goal,
      assets: [setup],
      budget: response["Monthly budget level"] || response["Budget level"] || "Unknown",
      urgency: response["Urgency"] || "Unknown",
      issues: needsWork.map((item) => item.id),
      primary: firstPaid,
      plan: output,
      reply,
      created_at: new Date().toISOString()
    },
    output,
    reply
  };
}

function parseFormResponseToPath(event) {
  event.preventDefault();
  const response = parseFormResponse($("#formResponseInput").value);
  const result = buildPathFromFormResponse(response);
  $("#formPathOutput").textContent = result.output;
  $("#formReplyOutput").textContent = result.reply;

  const cases = getCases();
  cases.unshift(result.caseData);
  setCases(cases.slice(0, 30));
  renderCaseList();
  showToast("Form response parsed and saved");
}

function formQuestionsText() {
  return googleAuditForm.map((question, index) => `${index + 1}. ${question.title}
Type: ${question.type}
Required: ${question.required ? "Yes" : "No"}
${question.options ? `Options: ${question.options.join(" | ")}` : ""}`).join("\n\n");
}

function renderAuditToolCards() {
  $("#auditToolCards").innerHTML = Object.entries(auditPlaybooks).map(([name, playbook]) => `<article class="surface service-card">
    <h3>${name}</h3>
    <ul>
      <li><b>Goal:</b> ${playbook.goal}</li>
      <li><b>Tools:</b> ${playbook.tools.slice(0, 4).join(", ")}</li>
      <li><b>Next:</b> ${playbook.nextServices.join(" -> ")}</li>
    </ul>
  </article>`).join("");
}

function auditPlaybookText(name, context = "") {
  const playbook = auditPlaybooks[name];
  if (!playbook) return "Choose an audit type.";
  return `AUDIT PLAYBOOK
Type: ${name}

CLIENT CONTEXT
${context || "Not provided"}

GOAL
${playbook.goal}

TOOLS TO USE
${formatList(playbook.tools)}

WHAT TO CHECK
${playbook.checks.map((check, index) => `${index + 1}. ${check}`).join("\n")}

SCORING RULE
${playbook.scoring}

RED FLAGS
${formatList(playbook.redFlags)}

DELIVERABLES
${formatList(playbook.deliverables)}

RECOMMENDED KYAN PATH
${playbook.nextServices.map((service, index) => `${index + 1}. ${service}`).join("\n")}

AUDIT OUTPUT FORMAT
Business/Page Reviewed:
Main Problem:
Top 5 Fixes:
Recommended KYAN Package:
Next Step:

SAFETY RULE
Do not promise guaranteed sales, viral content, first-page ranking, or instant growth.`;
}

function buildAuditPlaybook(event) {
  if (event) event.preventDefault();
  const name = $("#auditPlaybookType").value;
  const context = $("#auditPlaybookContext").value.trim();
  $("#auditPlaybookOutput").textContent = auditPlaybookText(name, context);
}

function auditToolsText() {
  return Object.entries(auditPlaybooks).map(([name, playbook]) => `${name}
Tools: ${playbook.tools.join(", ")}
Next services: ${playbook.nextServices.join(" -> ")}`).join("\n\n");
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
  const clientName = $("#blueprintClientName").value.trim() || "New KYAN Client";
  const workflow = $("#workflowInput").value.trim();
  const goal = $("#systemGoal").value.trim();
  const scope = $("#blueprintScope").value;
  const timeline = $("#blueprintTimeline").value.trim();
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

  const accessMap = {
    "Google Sheets CRM": ["Google account access or shared Sheet", "Current customer/order fields", "Sample leads/orders/payments", "Team members who will use the sheet"],
    "n8n Automation": ["Trigger app access", "Destination app access", "Google Sheet or CRM structure", "Notification channel", "Test data", "Failure notification owner"],
    "Landing Page": ["Business logo", "Services/offers", "WhatsApp number", "Photos/proof/testimonials", "Domain/hosting status", "FAQ answers"],
    "Technical Support": ["Website/admin access", "Hosting/domain access", "Recent change history", "Screenshots", "Backup confirmation", "Permission to test after fix"],
    "Monthly Support": ["Monthly goals", "Current systems access", "Content/assets", "Reporting sheet", "Priority task list", "Approval contact"]
  };
  const scopeBoundaries = {
    "Starter fix": ["Fix the biggest bottleneck first", "Keep setup simple", "No complex automation unless the workflow is already clear"],
    "Standard build": ["Build the main working system", "Include usage guide and handover", "Leave future improvements as next phase"],
    "Full system": ["Map the complete workflow", "Build core system and reporting", "Prepare automation-ready structure"],
    "Monthly support": ["Operate through monthly priorities", "Track completed work and results", "Improve system based on usage"]
  };
  const qaChecks = [
    "Test with real sample data",
    "Check mobile readability where relevant",
    "Confirm owner knows the next daily action",
    "Document what changed",
    "List what is included and not included"
  ];
  const blueprint = {
    blueprint_id: uid("blueprint"),
    created_at: new Date().toISOString(),
    client_name: clientName,
    service: serviceKey,
    scope,
    timeline,
    current_workflow: workflow,
    main_goal: goal,
    required_discovery: service.discovery,
    required_access: accessMap[type] || accessMap["Google Sheets CRM"],
    scope_boundaries: scopeBoundaries[scope] || scopeBoundaries["Standard build"],
    delivery_phases: [
      "Diagnose current setup",
      "Confirm scope and required access",
      "Design the workflow",
      "Build the system",
      "Test with sample data",
      "Handover and explain usage",
      "Recommend next improvement"
    ],
    build_tasks: service.tasks,
    deliverables: service.deliverables,
    technical_blueprint: outputMap[type] || outputMap["Google Sheets CRM"],
    qa_checks: qaChecks,
    client_handover: [
      "Simple explanation of how to use the system",
      "What KYAN changed",
      "What the client must do daily or weekly",
      "Support period and what is not included",
      "Recommended next service"
    ],
    next_upsell: service.upsell,
    safety_rule: "System first. Automation second. No guaranteed sales, viral content, ranking, or instant growth."
  };

  renderBlueprint(blueprint);
  localStorage.setItem("kyan_last_blueprint", JSON.stringify(blueprint));
  return blueprint;
}

function renderBlueprint(blueprint) {
  renderHumanOutput("#systemOutput", [
    { title: "Project", html: textBlockHtml(`${blueprint.client_name}\nService: ${blueprint.service}\nScope: ${blueprint.scope}\nTimeline: ${blueprint.timeline}`) },
    { title: "Current Workflow", html: textBlockHtml(blueprint.current_workflow) },
    { title: "Main Goal", html: textBlockHtml(blueprint.main_goal) },
    { title: "Required Discovery", html: listHtml(blueprint.required_discovery) },
    { title: "Required Access / Materials", html: listHtml(blueprint.required_access) },
    { title: "Scope Boundaries", html: listHtml(blueprint.scope_boundaries) },
    { title: "Delivery Phases", html: listHtml(blueprint.delivery_phases) },
    { title: "Build Tasks", html: listHtml(blueprint.build_tasks) },
    { title: "Deliverables", html: listHtml(blueprint.deliverables) },
    { title: "Technical Blueprint", html: textBlockHtml(blueprint.technical_blueprint) },
    { title: "QA Checks", html: listHtml(blueprint.qa_checks) },
    { title: "Client Handover", html: listHtml(blueprint.client_handover) },
    { title: "Next Upsell", html: textBlockHtml(blueprint.next_upsell) },
    { title: "Safety Rule", html: textBlockHtml(blueprint.safety_rule) }
  ]);
}

function latestBlueprint() {
  try {
    return JSON.parse(localStorage.getItem("kyan_last_blueprint") || "null") || buildSystemPlan();
  } catch (error) {
    return buildSystemPlan();
  }
}

function blueprintToText(blueprint = latestBlueprint()) {
  return `KYAN SERVICE BLUEPRINT

PROJECT
Client: ${blueprint.client_name}
Service: ${blueprint.service}
Scope: ${blueprint.scope}
Timeline: ${blueprint.timeline}

CURRENT WORKFLOW
${blueprint.current_workflow}

MAIN GOAL
${blueprint.main_goal}

REQUIRED DISCOVERY
${formatList(blueprint.required_discovery || [])}

REQUIRED ACCESS / MATERIALS
${formatList(blueprint.required_access || [])}

SCOPE BOUNDARIES
${formatList(blueprint.scope_boundaries || [])}

DELIVERY PHASES
${formatList(blueprint.delivery_phases || [])}

BUILD TASKS
${(blueprint.build_tasks || []).map((task) => `[ ] ${task}`).join("\n")}

DELIVERABLES
${formatList(blueprint.deliverables || [])}

TECHNICAL BLUEPRINT
${blueprint.technical_blueprint}

QA CHECKS
${formatList(blueprint.qa_checks || [])}

CLIENT HANDOVER
${formatList(blueprint.client_handover || [])}

NEXT UPSELL
${blueprint.next_upsell}

SAFETY RULE
${blueprint.safety_rule}`;
}

function saveBlueprintToOps() {
  const blueprint = latestBlueprint();
  const ops = normalizedOps();
  const tasks = [
    `Confirm scope and access for ${blueprint.client_name}`,
    ...(blueprint.build_tasks || []).map((task) => `${blueprint.service}: ${task}`),
    `Prepare handover for ${blueprint.client_name}`
  ].slice(0, 10);
  tasks.reverse().forEach((title) => {
    ops.tasks.unshift({
      id: uid("task"),
      title,
      area: "Client Delivery",
      priority: "High",
      done: false,
      created_at: new Date().toISOString()
    });
  });
  setOps(ops);
  renderOps();
  showToast("Blueprint tasks saved");
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

function uid(prefix) {
  return `${prefix}_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`;
}

function getOps() {
  try {
    return JSON.parse(localStorage.getItem("kyan_ops") || "{}");
  } catch (error) {
    return {};
  }
}

function setOps(ops) {
  localStorage.setItem("kyan_ops", JSON.stringify(ops));
}

function normalizedOps() {
  const ops = getOps();
  return {
    tasks: Array.isArray(ops.tasks) ? ops.tasks : [],
    leads: Array.isArray(ops.leads) ? ops.leads : [],
    content: Array.isArray(ops.content) ? ops.content : []
  };
}

function saveOpsSection(key, items) {
  const ops = normalizedOps();
  ops[key] = items;
  setOps(ops);
  renderOps();
}

function priorityRank(priority) {
  return { High: 0, Medium: 1, Low: 2 }[priority] ?? 3;
}

function renderOps() {
  const ops = normalizedOps();
  const openTasks = ops.tasks.filter((task) => !task.done);
  const activeLeads = ops.leads.filter((lead) => !["Won", "Lost"].includes(lead.stage));

  $("#opsOpenTasks").textContent = openTasks.length;
  $("#opsActiveLeads").textContent = activeLeads.length;
  $("#opsContentCount").textContent = ops.content.length;
  $("#opsTodayFocus").textContent = openTasks.sort((a, b) => priorityRank(a.priority) - priorityRank(b.priority))[0]?.area || "Audit";

  $("#opsTaskList").innerHTML = ops.tasks.length ? ops.tasks
    .sort((a, b) => Number(a.done) - Number(b.done) || priorityRank(a.priority) - priorityRank(b.priority))
    .map((task) => `<div class="ops-item ${task.done ? "done" : ""}">
      <div class="ops-item-title">${task.title}</div>
      <div class="ops-meta"><span>${task.area}</span><span>${task.priority}</span><span>${new Date(task.created_at).toLocaleDateString()}</span></div>
      <div class="ops-actions">
        <button class="mini-button" data-task-toggle="${task.id}">${task.done ? "Reopen" : "Done"}</button>
        <button class="mini-button" data-task-delete="${task.id}">Delete</button>
      </div>
    </div>`).join("") : `<div class="ops-item"><div class="ops-item-title">No tasks yet.</div><div class="ops-meta">Add today’s first action.</div></div>`;

  $("#opsLeadList").innerHTML = ops.leads.length ? ops.leads.map((lead) => `<div class="ops-item">
    <div class="ops-item-title">${lead.name}</div>
    <div>${lead.need}</div>
    <div class="ops-meta"><span>${lead.stage}</span><span>${new Date(lead.created_at).toLocaleDateString()}</span></div>
    <div class="ops-actions">
      <button class="mini-button" data-lead-advance="${lead.id}">Advance</button>
      <button class="mini-button" data-lead-delete="${lead.id}">Delete</button>
    </div>
  </div>`).join("") : `<div class="ops-item"><div class="ops-item-title">No leads yet.</div><div class="ops-meta">Add a lead after the first message or audit.</div></div>`;

  $("#opsContentList").innerHTML = ops.content.length ? ops.content.map((idea) => `<div class="ops-item">
    <div class="ops-item-title">${idea.idea}</div>
    <div class="ops-meta"><span>${idea.pillar}</span><span>${idea.format}</span><span>${idea.status}</span></div>
    <div class="ops-actions">
      <button class="mini-button" data-content-mark="${idea.id}">${idea.status === "Drafted" ? "Reset" : "Drafted"}</button>
      <button class="mini-button" data-content-delete="${idea.id}">Delete</button>
    </div>
  </div>`).join("") : `<div class="ops-item"><div class="ops-item-title">No content ideas yet.</div><div class="ops-meta">Queue ideas from client problems and audits.</div></div>`;

  bindOpsButtons();
  renderDailySnapshot();
}

function bindOpsButtons() {
  $$("[data-task-toggle]").forEach((button) => button.addEventListener("click", () => {
    const ops = normalizedOps();
    ops.tasks = ops.tasks.map((task) => task.id === button.dataset.taskToggle ? { ...task, done: !task.done } : task);
    setOps(ops);
    renderOps();
  }));
  $$("[data-task-delete]").forEach((button) => button.addEventListener("click", () => {
    const ops = normalizedOps();
    ops.tasks = ops.tasks.filter((task) => task.id !== button.dataset.taskDelete);
    setOps(ops);
    renderOps();
  }));
  $$("[data-lead-advance]").forEach((button) => button.addEventListener("click", () => {
    const stages = ["New", "Audit Sent", "Proposal", "Won", "Lost"];
    const ops = normalizedOps();
    ops.leads = ops.leads.map((lead) => {
      if (lead.id !== button.dataset.leadAdvance) return lead;
      const next = stages[Math.min(stages.indexOf(lead.stage) + 1, stages.length - 1)] || "Audit Sent";
      return { ...lead, stage: next };
    });
    setOps(ops);
    renderOps();
  }));
  $$("[data-lead-delete]").forEach((button) => button.addEventListener("click", () => {
    const ops = normalizedOps();
    ops.leads = ops.leads.filter((lead) => lead.id !== button.dataset.leadDelete);
    setOps(ops);
    renderOps();
  }));
  $$("[data-content-mark]").forEach((button) => button.addEventListener("click", () => {
    const ops = normalizedOps();
    ops.content = ops.content.map((idea) => idea.id === button.dataset.contentMark ? { ...idea, status: idea.status === "Drafted" ? "Idea" : "Drafted" } : idea);
    setOps(ops);
    renderOps();
  }));
  $$("[data-content-delete]").forEach((button) => button.addEventListener("click", () => {
    const ops = normalizedOps();
    ops.content = ops.content.filter((idea) => idea.id !== button.dataset.contentDelete);
    setOps(ops);
    renderOps();
  }));
}

function addOpsTask(event) {
  event.preventDefault();
  const ops = normalizedOps();
  ops.tasks.unshift({
    id: uid("task"),
    title: $("#opsTaskTitle").value.trim() || "Untitled task",
    area: $("#opsTaskArea").value,
    priority: $("#opsTaskPriority").value,
    done: false,
    created_at: new Date().toISOString()
  });
  setOps(ops);
  renderOps();
}

function addOpsLead(event) {
  event.preventDefault();
  const ops = normalizedOps();
  ops.leads.unshift({
    id: uid("lead"),
    name: $("#opsLeadName").value.trim() || "New Lead",
    need: $("#opsLeadNeed").value.trim() || "Needs audit",
    stage: $("#opsLeadStage").value,
    created_at: new Date().toISOString()
  });
  setOps(ops);
  renderOps();
}

function addOpsContent(event) {
  event.preventDefault();
  const ops = normalizedOps();
  ops.content.unshift({
    id: uid("content"),
    idea: $("#opsContentIdea").value.trim() || "Untitled idea",
    pillar: $("#opsContentPillar").value,
    format: $("#opsContentFormat").value,
    status: "Idea",
    created_at: new Date().toISOString()
  });
  setOps(ops);
  renderOps();
}

function renderDailySnapshot() {
  const ops = normalizedOps();
  const openTasks = ops.tasks.filter((task) => !task.done);
  const activeLeads = ops.leads.filter((lead) => !["Won", "Lost"].includes(lead.stage));
  const nextTasks = openTasks
    .sort((a, b) => priorityRank(a.priority) - priorityRank(b.priority))
    .slice(0, 5)
    .map((task, index) => `${index + 1}. [${task.priority}] ${task.title} (${task.area})`)
    .join("\n") || "No open tasks.";
  const leads = activeLeads.slice(0, 5).map((lead) => `- ${lead.name}: ${lead.need} (${lead.stage})`).join("\n") || "No active leads.";
  const content = ops.content.slice(0, 5).map((idea) => `- ${idea.idea} | ${idea.pillar} | ${idea.format} | ${idea.status}`).join("\n") || "No queued content.";

  $("#dailySnapshotOutput").textContent = `KYAN DAILY SNAPSHOT
Date: ${new Date().toLocaleDateString()}

TOP TASKS
${nextTasks}

ACTIVE LEADS
${leads}

CONTENT QUEUE
${content}

OPERATING RULE
Start with the highest-leverage bottleneck. System first. Automation second.`;
}

function copyLeadReply() {
  const lead = normalizedOps().leads.find((item) => !["Won", "Lost"].includes(item.stage));
  const text = lead ? `تمام يا ${lead.name}.

خليني أبدأ بتحليل سريع للوضع الحالي عشان نحدد أفضل خطوة بدل ما نشتغل عشوائي.
واضح إن الاحتياج الأساسي: ${lead.need}.

ابعتلي اللينك أو التفاصيل المتاحة، وهنطلعلك أهم 5 حاجات محتاجة تتظبط والخطوة المناسبة.

KYAN - من اللخبطة للنظام، ومن النظام للنمو.` : "No active lead to reply to.";
  copyText(text);
}

function sendFirstIdeaToContent() {
  const idea = normalizedOps().content[0];
  if (!idea) {
    showToast("No content idea queued");
    return;
  }
  $("#pillarSelect").value = idea.pillar;
  $("#formatSelect").value = idea.format === "Reel" ? "Reel Script" : idea.format;
  $("#painInput").value = idea.idea;
  generateDraft();
  $$(".nav-item").find((item) => item.dataset.section === "content")?.click();
}

function exportOpsFile() {
  const blob = new Blob([JSON.stringify({ exported_at: new Date().toISOString(), ops: normalizedOps() }, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `kyan-daily-ops-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast("Ops exported");
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

function extractGoogleSheetId(value) {
  const text = String(value || "").trim();
  const match = text.match(/\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/);
  if (match) return match[1];
  return text;
}

function loadSettings() {
  const settings = getSettings();
  $("#apiProvider").value = settings.apiProvider;
  $("#apiModel").value = settings.apiModel;
  $("#aiEndpoint").value = settings.aiEndpoint;
  $("#sheetsEndpoint").value = settings.sheetsEndpoint;
  $("#sheetId").value = settings.sheetId;
  $("#n8nWebhook").value = settings.n8nWebhook;
  $("#connectionOutput").textContent = `Settings loaded.

How to use this area:
1. Keep API keys inside Cloudflare environment variables.
2. Use this screen only for provider, model, endpoints, Sheet URL, and webhooks.
3. Test API before using AI generation.
4. Test Sheets before pushing reports or content.

Security rule:
Do not paste secret API keys into the browser.`;
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

function getReports() {
  try {
    return JSON.parse(localStorage.getItem("kyan_reports") || "[]");
  } catch (error) {
    return [];
  }
}

function setReports(reports) {
  localStorage.setItem("kyan_reports", JSON.stringify(reports));
}

function currentReportSource() {
  const source = $("#reportSource").value;
  if (source === "Current Audit Brain") return determineAuditPath();
  if (source === "Current Client Desk") return buildClientPlan();
  if (source === "Current Form Intake") {
    const parsed = parseFormResponse($("#formResponseInput").value);
    return buildPathFromFormResponse(parsed).caseData;
  }
  return latestCasePayload();
}

function packageDetails(packageName) {
  const key = packageName === "Auto" ? "" : packageName;
  const service = serviceKnowledge[key] || serviceKnowledge["Free Business Audit"];
  return {
    name: key || "Recommended KYAN Package",
    goal: service.goal,
    deliverables: service.deliverables || ["Audit report", "Top 5 fixes", "Recommended next step"],
    tasks: service.tasks || ["Review current setup", "Diagnose bottleneck", "Recommend next step"],
    upsell: service.upsell || "Next logical service"
  };
}

function topFixesFromCase(caseData) {
  const text = `${caseData.plan || ""}\n${caseData.request || ""}`.toLowerCase();
  const fixes = [];
  if (text.includes("clarity") || text.includes("page") || text.includes("facebook")) fixes.push("Clarify the offer, bio/About, pinned post, and CTA.");
  if (text.includes("trust")) fixes.push("Add trust signals: real photos, reviews, proof, FAQs, and business details.");
  if (text.includes("content")) fixes.push("Create 4-6 content pillars and stop random posting.");
  if (text.includes("follow") || text.includes("crm") || text.includes("lead")) fixes.push("Track every lead with status and next follow-up date.");
  if (text.includes("order") || text.includes("payment")) fixes.push("Separate orders/payments from chat and track them in a sheet.");
  if (text.includes("website") || text.includes("landing")) fixes.push("Make the website/landing page explain the offer and show one clear CTA.");
  if (text.includes("automation") || text.includes("n8n")) fixes.push("Automate only after the workflow and data fields are clear.");
  if (!fixes.length) fixes.push("Start with a focused audit and fix the largest bottleneck first.");
  return fixes.slice(0, 5);
}

function generateClientReport(event) {
  if (event) event.preventDefault();
  const caseData = currentReportSource();
  const packageName = $("#reportPackage").value === "Auto" ? caseData.primary || "Free Business Audit" : $("#reportPackage").value;
  const details = packageDetails(packageName);
  const fixes = topFixesFromCase(caseData);
  const timeline = $("#reportTimeline").value.trim();
  const price = $("#reportPrice").value.trim();

  const report = `KYAN CLIENT AUDIT REPORT
Client: ${caseData.name || "Client"}
Business type: ${caseData.type || "Unknown"}
Date: ${new Date().toLocaleDateString()}

1. Main Situation
${caseData.request || "Client requested a business audit."}

2. Main Problem
The current setup needs clearer organization around offer clarity, customer journey, and follow-up. The biggest issue should be fixed before scaling content, ads, or automation.

3. Top 5 Fixes
${fixes.map((fix, index) => `${index + 1}. ${fix}`).join("\n")}

4. Recommended KYAN Package
${packageName}

Goal:
${details.goal}

Deliverables:
${details.deliverables.map((item) => `- ${item}`).join("\n")}

5. Delivery Plan
${details.tasks.map((task, index) => `${index + 1}. ${task}`).join("\n")}

6. Timeline
${timeline}

7. Price
${price}

8. Next Step
Confirm the scope, send required links/access/materials, then KYAN starts with the first checklist.

Safety Line:
We improve the system, clarity, follow-up, and customer journey to increase the chance of better results. We do not promise guaranteed sales, viral content, first-page rankings, or instant growth.

KYAN - من اللخبطة للنظام، ومن النظام للنمو.`;

  $("#clientReportOutput").textContent = report;
  return {
    report_id: uid("report"),
    created_at: new Date().toISOString(),
    client_name: caseData.name || "Client",
    package: packageName,
    source_case: caseData,
    report
  };
}

function saveClientReport() {
  const current = generateClientReport();
  const reports = getReports();
  reports.unshift(current);
  setReports(reports.slice(0, 50));
  showToast("Report saved");
  return current;
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
    $("#connectionOutput").textContent = `API connection is reachable.

Checked:
${healthUrl}

Status:
${data.ok === false ? "Backend responded, but needs configuration." : "Backend responded successfully."}

Next:
Run a small AI test. If it fails, check provider keys in Cloudflare environment variables.`;
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
  const sheetId = extractGoogleSheetId(settings.sheetId);
  if (!sheetId) {
    $("#connectionOutput").textContent = "Add a Google Sheet URL or ID first.";
    return;
  }
  const body = {
    sheet_id: sheetId,
    sheet_url: settings.sheetId,
    tab,
    payload
  };
  $("#connectionOutput").textContent = `Pushing ${tab}...`;
  try {
    const data = await requestJson(settings.sheetsEndpoint, body);
    $("#connectionOutput").textContent = `Google Sheets push completed.

Tab:
${tab}

Result:
${data.ok === false ? "The webhook responded but reported a problem." : "The row was sent to the sheet webhook."}

Next:
Open the Google Sheet and confirm the new row appeared.`;
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
    reports: getReports(),
    ops: normalizedOps(),
    last_flywheel_pack: latestFlywheelPack(),
    last_blueprint: latestBlueprint(),
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

function navigateTo(sectionId) {
  const button = $(`.nav-item[data-section="${sectionId}"]`);
  const panel = $(`#${sectionId}`);
  if (!button || !panel) return;
  $$(".nav-item").forEach((item) => item.classList.remove("active"));
  $$(".panel").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  panel.classList.add("active");
  document.querySelector(".workspace")?.scrollTo({ top: 0, behavior: "smooth" });
}

$$(".nav-item").forEach((button) => {
  button.addEventListener("click", () => navigateTo(button.dataset.section));
});

$$("[data-jump]").forEach((button) => {
  button.addEventListener("click", () => navigateTo(button.dataset.jump));
});

$("#contentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  generateDraft();
});
$("#flywheelForm").addEventListener("submit", generateContentFlywheel);

$("#auditForm").addEventListener("submit", (event) => {
  event.preventDefault();
  generateAudit();
});

$("#auditBrainForm").addEventListener("submit", (event) => {
  event.preventDefault();
  determineAuditPath();
});

$("#formResponseForm").addEventListener("submit", parseFormResponseToPath);
$("#auditPlaybookForm").addEventListener("submit", buildAuditPlaybook);
$("#reportForm").addEventListener("submit", generateClientReport);
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

$("#opsTaskForm").addEventListener("submit", addOpsTask);
$("#opsLeadForm").addEventListener("submit", addOpsLead);
$("#opsContentForm").addEventListener("submit", addOpsContent);
$("#aiAgentForm").addEventListener("submit", runAiAgent);
$("#templateSelect").addEventListener("change", renderTemplate);
$("#copyBrain").addEventListener("click", () => copyText(templates["AI Agent System Prompt"]));
$("#copyDraft").addEventListener("click", () => copyText($("#draftOutput").textContent));
$("#copyFlywheel").addEventListener("click", () => copyText(flywheelPackToText()));
$("#copyFlywheelPrompt").addEventListener("click", () => copyText(flywheelPrompt()));
$("#saveFlywheelToOps").addEventListener("click", saveFlywheelToOps);
$("#generateFlywheelAi").addEventListener("click", generateContentFlywheelWithAi);
$("#pushFlywheelToSheets").addEventListener("click", () => pushToSheets("Content_Ideas", latestFlywheelPack()));
$("#copyAudit").addEventListener("click", () => copyText($("#auditOutput").textContent));
$("#copyAuditBrain").addEventListener("click", () => copyText(`${$("#auditBrainOutput").textContent}\n\nCLIENT REPLY\n${$("#auditClientReplyOutput").textContent}`));
$("#copyFormQuestions").addEventListener("click", () => copyText(formQuestionsText()));
$("#copyFormSchema").addEventListener("click", () => copyText(JSON.stringify(googleAuditForm, null, 2)));
$("#copyAuditChecklist").addEventListener("click", () => copyText($("#auditPlaybookOutput").textContent));
$("#copyAuditTools").addEventListener("click", () => copyText(auditToolsText()));
$("#copyClientReport").addEventListener("click", () => copyText($("#clientReportOutput").textContent));
$("#saveClientReport").addEventListener("click", saveClientReport);
$("#pushReportToSheets").addEventListener("click", () => pushToSheets("Client_Reports", saveClientReport()));
$("#copyClientPlan").addEventListener("click", () => copyText(`${$("#clientPlanOutput").textContent}\n\nCLIENT REPLY\n${$("#clientReplyOutput").textContent}`));
$("#copyRouter").addEventListener("click", () => copyText($("#routerOutput").textContent));
$("#copySystemPlan").addEventListener("click", () => copyText(blueprintToText()));
$("#saveBlueprintToOps").addEventListener("click", saveBlueprintToOps);
$("#pushBlueprintToSheets").addEventListener("click", () => pushToSheets("Service_Playbooks", latestBlueprint()));
$("#copyTemplate").addEventListener("click", () => copyText($("#templateOutput").textContent));
$("#saveSettings").addEventListener("click", () => {
  setSettings(collectSettings());
  showToast("Settings saved");
});
$("#testApi").addEventListener("click", testApiConnection);
$("#pushAuditToSheets").addEventListener("click", () => pushToSheets("Client_Cases", currentAuditPayload()));
$("#pushCaseToSheets").addEventListener("click", () => pushToSheets("Client_Cases", latestCasePayload()));
$("#exportBackup").addEventListener("click", exportBackupFile);
$("#copyDailySnapshot").addEventListener("click", () => copyText($("#dailySnapshotOutput").textContent));
$("#exportOps").addEventListener("click", exportOpsFile);
$("#copyLeadReply").addEventListener("click", copyLeadReply);
$("#sendIdeaToContent").addEventListener("click", sendFirstIdeaToContent);
$("#clearDoneTasks").addEventListener("click", () => {
  const ops = normalizedOps();
  ops.tasks = ops.tasks.filter((task) => !task.done);
  setOps(ops);
  renderOps();
});
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
generateContentFlywheel();
generateAudit();
determineAuditPath();
buildClientPlan();
routeRequest();
buildSystemPlan();
renderTemplate();
buildAuditPlaybook();
generateClientReport();
loadSettings();
renderOps();
