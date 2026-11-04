import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `
You are the official AI Portfolio Assistant for Sandeep Maharjan.
Your job is to answer questions from recruiters, hiring managers, and visitors accurately, concisely, professionally, and warmly.

STRICT ACCURACY RULES:
- ONLY state facts provided in the knowledge base below.
- Do NOT hallucinate or fabricate any job experiences, companies, technologies, or projects.
- If asked about something not mentioned in the knowledge base, politely state that you do not have that specific information in your current records and encourage the visitor to contact Sandeep directly via email at sandipmaharjan95@gmail.com or phone at +977-9818504980.
- Keep answers formatted nicely with bullet points where appropriate.

KNOWLEDGE BASE FOR SANDEEP MAHARJAN:
Full Name: Sandeep Maharjan
Title: Software QA & Automation Testing | Backend Developer
Specialization: API & Performance Testing | Playwright Automation | Node.js & TypeScript Engineering
Location: Jawalakhel-5, Lalitpur, Bagmati Province, Nepal
Contact:
- Phone: +977-9818504980
- Email: sandipmaharjan95@gmail.com
- LinkedIn: https://linkedin.com/in/sandip-maharjan
- GitHub: https://github.com/sandip95-web
- Portfolio: https://sandeepmaharjan95.com.np/
- Resume Link: https://drive.google.com/file/d/1Huuh9RPEJhS6HsEB3XzEmpv1nF30UMB5/view?usp=sharing

PROFESSIONAL SUMMARY:
Software QA professional with a strong backend engineering foundation (2+ years in Node.js, Express.js, TypeScript and MongoDB). Software QA training at TechAxis with hands-on practice in manual testing, test planning, test case design, requirements traceability (RTM), defect reporting in Jira, API testing, performance testing with Apache JMeter, and test automation with Playwright and TypeScript. Brings a developer’s understanding of how APIs, databases and business logic behave, which helps in designing thorough test scenarios, finding root causes faster, and communicating clearly with development teams.

TECHNICAL SKILLS:
- Manual Testing: Functional Testing, SDLC, STLC, Requirement Analysis, Test Plans, Test Scenarios, Test Cases, Requirements Traceability Matrix (RTM), Equivalence Partitioning, Boundary Value Analysis.
- Defect Management: Bug Reporting, Severity and Priority, Bug Life Cycle, Jira.
- API Testing: REST API Testing, HTTP Methods and Status Codes, Request/Response Validation, Authentication and Authorization, JSON payloads.
- Performance Testing: Apache JMeter, Load Testing, Performance Bottleneck Analysis.
- Test Automation: Playwright, TypeScript, Page Object Model (POM), Assertions.
- Tools & Platforms: Jira, Git, GitHub, GitLab, Google Sheets, Redis, Docker (working knowledge).
- Languages: JavaScript, TypeScript, Python, C.
- Backend & APIs: Node.js, Express.js, NestJS, Django, REST APIs, GraphQL, Zod.
- Databases & ORM: MongoDB, PostgreSQL, SQL; Prisma, Mongoose.
- Frontend: React.js, Next.js, HTML, CSS.

PROJECTS:
1. OpenCart — E-commerce QA & Automation Testing (Playwright | TypeScript | Google Sheets)
   - GitHub: https://github.com/sandip95-web/opencart-qa-automation
   - Developing manual test documentation, including a test plan, test cases, and a Requirements Traceability Matrix (RTM) in Google Sheets.
   - Practicing functional testing of user registration, shopping cart, and other selected e-commerce workflows using Equivalence Partitioning and Boundary Value Analysis.
   - Building automated functional tests using Playwright and TypeScript with a Page Object Model (POM) structure.
   - Organizing reusable page objects and test data, and documenting test results.
2. Gripas Tech CRM (https://crm.gripastech.com/)
   - Enterprise CRM backend featuring automated lead pools, pipeline stage actions, client/project directories, and dynamic reporting powered by Redis and BullMQ.
   - Conducted load testing to investigate performance bottlenecks and improve backend responsiveness and scalability.
3. Tiya App (https://tiyaapp.com/) — Cafe Management System
   - Contributed to a cafe management platform for order processing, billing, financial tracking, role-based access control (owner, staff, admin), and admin dashboards.
   - Built with Node.js, Express, MongoDB, TypeScript, and React.
4. Silver6 (https://silver6nepal.com/) — E-commerce Platform
   - Developed backend functionality for product listings, secure user accounts, order management, cart APIs, and sales reporting using Node.js, Express, MongoDB, and Next.js.
5. Caregiver Academia (https://caregiveracademia.com/)
   - Caregiver CRM & Care Home Compliance Management System with RBAC (SUPER_ADMIN, RECEPTIONIST, COUNSELOR), course fee logic, and automated background jobs.

WORK EXPERIENCE:
1. Gripas Marketing (Dec 2024 – Sep 2026)
   Role: Backend Developer
   - Implemented Redis caching and conducted load testing to investigate performance bottlenecks and improve backend responsiveness and scalability.
   - Independently designed and developed the backend of a CRM system for managing leads, client information, project records and milestones, including lead pools, dashboards, reporting and role-based privilege management.
   - Built and maintained backend services for Tiya App, a production cafe order-management and financial-tracking platform, including RBAC (owner, staff, admin) and sales, revenue and transaction reporting modules.
   - Delivered and maintained production features across the CRM and Tiya App using Node.js, Express, TypeScript and MongoDB.
2. AGI InfoTech (Mar 2024 – Jun 2024)
   Role: Full Stack Developer Intern
   - Contributed to a Learning Management System for students applying to study abroad; designed REST APIs and MongoDB schemas for student profiles, applications and document management.
   - Collaborated with backend and frontend teammates using Node.js, Express, MongoDB and React to deliver LMS features over a 4-month internship.

EDUCATION:
- B.Sc. Computer Science & IT — Academia International College, Gwarko (2024 | 74.14%)
- Higher Secondary Education (+2 Science) — Moonlight College (2019 | GPA: 3.03)
- Secondary School (SLC) — Adarsha Vidya Mandir High School (2017 | GPA: 3.6)

CERTIFICATIONS & ACHIEVEMENTS:
- Software QA Training — TechAxis, Kumaripati, Lalitpur: manual testing, test planning, test case design, RTM, Jira, JMeter, API testing, and Playwright automation.
- Mobile App Development Competition — Winner (2023): collaborated on a Flutter/MongoDB app addressing a real-world tracking problem.
- Graphic Design Certification — Aptech (2023): visual design principles, layout, typography, and design tools.

LANGUAGES:
- Nepali (Fluent)
- English (Fluent)
- Hindi (Intermediate)

PROFESSIONAL & MENTOR REFERENCES:
Name: Sandhya Phuyal
Role: Software QA Engineer
Company: Cedar Gate Technologies, Lalitpur, Nepal
Phone: +977-9869416100 (or 9869416100)
Email: sfuyal@gmail.com
Relationship: QA Mentor — TechAxis Software QA Training Program
Context: Sandhya Phuyal is Sandeep's lead Software QA mentor and instructor from TechAxis who guided him through manual testing (STLC, test planning, test case design, RTM, Jira defect tracking), API testing, JMeter load testing, and Playwright automation.
`;

function getSmartFallback(message: string): string {
  const query = message.toLowerCase();

  if (
    query.includes("reference") ||
    query.includes("mentor") ||
    query.includes("sandhya") ||
    query.includes("phuyal") ||
    query.includes("cedar")
  ) {
    return `**Professional & Mentor Reference for Sandeep:**
• **Name:** Sandhya Phuyal
• **Current Role:** Software QA Engineer at **Cedar Gate Technologies**, Lalitpur
• **Relationship:** QA Mentor & Instructor at **TechAxis** Software QA Training Program
• **Phone:** [+977-9869416100](tel:+9779869416100)
• **Email:** [sfuyal@gmail.com](mailto:sfuyal@gmail.com)

Sandhya mentored Sandeep through manual testing (STLC, test planning, RTM), Jira defect management, REST API validation, Apache JMeter performance testing, and Playwright automation with TypeScript.`;
  }

  if (
    query.includes("qa") ||
    query.includes("test") ||
    query.includes("playwright") ||
    query.includes("jmeter") ||
    query.includes("rtm") ||
    query.includes("opencart")
  ) {
    return `**Sandeep's Software QA & Testing Capabilities:**
• **Test Automation:** Playwright with TypeScript, Page Object Model (POM), assertions, test runner configuration
• **Manual Testing & STLC:** Test Plans, Test Scenarios, Test Cases, Requirements Traceability Matrix (RTM), Equivalence Partitioning, Boundary Value Analysis
• **API Testing:** REST API testing, status codes, request/response validation, auth tokens, JSON
• **Performance Testing:** Apache JMeter, load testing, response times, bottleneck analysis
• **Defect Tracking:** Jira, Bug Life Cycle, severity/priority triage
• **Featured QA Project:** **OpenCart QA & Automation** ([GitHub](https://github.com/sandip95-web/opencart-qa-automation)) featuring manual test docs (RTM) and Playwright POM automation suite.`;
  }

  if (
    query.includes("skill") ||
    query.includes("stack") ||
    query.includes("technolog")
  ) {
    return `**Sandeep's Technical Skills (QA & Backend):**
• **QA & Automation:** Playwright, TypeScript, Apache JMeter, Manual Testing, STLC, RTM, Jira, REST API Testing
• **Backend Engineering:** Node.js, Express.js, TypeScript, REST APIs, GraphQL, NestJS, Django, Python
• **Databases & Caching:** MongoDB, Mongoose, PostgreSQL, SQL, Redis, BullMQ, Prisma
• **Frontend & Tools:** React.js, Next.js, HTML5/CSS3, Git, GitHub, GitLab, Google Sheets, Docker (basics)`;
  }

  if (
    query.includes("project") ||
    query.includes("opencart") ||
    query.includes("gripas") ||
    query.includes("tiya") ||
    query.includes("silver") ||
    query.includes("caregiver")
  ) {
    return `**Featured Projects (QA & Backend):**
1. **OpenCart QA & Automation** ([GitHub](https://github.com/sandip95-web/opencart-qa-automation)): E-commerce test suite with manual test plan, test cases, RTM in Google Sheets, and Playwright + TypeScript POM automation.
2. **Gripas Tech CRM** ([Live](https://crm.gripastech.com/)): Enterprise CRM with lead pipelines, sales reporting, Redis caching, BullMQ, and load testing.
3. **Tiya App** ([Live](https://tiyaapp.com/)): Cafe management platform with digital billing, order processing, and RBAC reporting.
4. **Silver6** ([Live](https://silver6nepal.com/)): Modern jewelry and apparel e-commerce platform built with Next.js, Node.js, and MongoDB.`;
  }

  if (
    query.includes("experience") ||
    query.includes("job") ||
    query.includes("work") ||
    query.includes("company")
  ) {
    return `**Professional Experience:**
• **Backend Developer** at **Gripas Marketing** (Dec 2024 – Sep 2026): Engineered CRM backend systems, lead pools, Tiya App cafe services, Redis caching, and conducted load testing for performance bottleneck resolution.
• **Full Stack Developer Intern** at **AGI InfoTech** (Mar 2024 – Jun 2024): Built study-abroad LMS features, REST APIs, and MongoDB schemas.`;
  }

  if (
    query.includes("education") ||
    query.includes("college") ||
    query.includes("degree") ||
    query.includes("training")
  ) {
    return `**Education & Certifications:**
• **B.Sc. Computer Science & IT** — Academia International College (2024 | 74.14%)
• **Higher Secondary (+2 Science)** — Moonlight College (2019 | GPA: 3.03)
• **SLC** — Adarsha Vidya Mandir High School (2017 | GPA: 3.6)
• **Software QA Training** — TechAxis, Lalitpur (Manual Testing, RTM, Jira, JMeter, API Testing, Playwright Automation)
• **Mobile App Dev Competition Winner** (2023)
• **Graphic Design Certification** — Aptech (2023)`;
  }

  if (
    query.includes("contact") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("reach") ||
    query.includes("hire")
  ) {
    return `**Contact Sandeep Maharjan:**
• **Email:** [sandipmaharjan95@gmail.com](mailto:sandipmaharjan95@gmail.com)
• **Phone:** [+977-9818504980](tel:+9779818504980)
• **Location:** Jawalakhel-5, Lalitpur, Nepal
• **LinkedIn:** [linkedin.com/in/sandip-maharjan](https://linkedin.com/in/sandip-maharjan)
• **GitHub:** [github.com/sandip95-web](https://github.com/sandip95-web)`;
  }

  if (query.includes("resume") || query.includes("cv")) {
    return `You can view or download Sandeep's official resume here:
[📄 Sandeep Maharjan's Resume (Google Drive)](https://drive.google.com/file/d/1Huuh9RPEJhS6HsEB3XzEmpv1nF30UMB5/view?usp=sharing)`;
  }

  return `Hello! I'm Sandeep Maharjan's AI Assistant. 

I can answer questions about his:
• **Software QA & Test Automation** (Playwright, Manual Testing, RTM, Jira, API Testing, Apache JMeter)
• **Backend Engineering Experience** (Node.js, Express, TypeScript, MongoDB, Redis, Load Testing)
• **Professional Projects** (OpenCart QA Suite, Gripas CRM, Tiya Cafe App, Silver6)
• **Education, Mentor Reference & Contact Info** (Sandhya Phuyal from Cedar Gate Technologies)

How can I help you today?`;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "Messages array is required." },
        { status: 400 }
      );
    }

    const lastUserMessage = messages[messages.length - 1]?.content || "";
    const apiKey = process.env.GEMINI_API_KEY?.trim();

    // If no key or key is clearly invalid format, respond gracefully with smart fallback
    if (!apiKey || !apiKey.startsWith("AIzaSy")) {
      const fallbackReply = getSmartFallback(lastUserMessage);
      return NextResponse.json({
        reply: fallbackReply,
        isFallback: true,
      });
    }

    // Prepare contents array for Gemini API
    const geminiContents = messages.map(
      (m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      })
    );

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents: geminiContents,
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 600,
          },
        }),
      }
    );

    if (!response.ok) {
      console.warn("Gemini API call failed with status", response.status);
      const fallbackReply = getSmartFallback(lastUserMessage);
      return NextResponse.json({
        reply: fallbackReply,
        isFallback: true,
      });
    }

    const data = await response.json();
    const candidateText =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      getSmartFallback(lastUserMessage);

    return NextResponse.json({
      reply: candidateText,
      isFallback: false,
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({
      reply:
        "I'm currently unable to connect to the AI service. Feel free to contact Sandeep directly at sandipmaharjan95@gmail.com!",
      isFallback: true,
    });
  }
}
