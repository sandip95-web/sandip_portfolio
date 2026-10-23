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
Title: Aspiring Software QA Engineer | Backend Developer
Location: Jawalakhel-5, Lalitpur, Bagmati Province, Nepal
Contact:
- Phone: +977-9818504980
- Email: sandipmaharjan95@gmail.com
- LinkedIn: https://linkedin.com/in/sandip-maharjan
- GitHub: https://github.com/sandip95-web
- Portfolio: https://sandeepmaharjan95.com.np/
- Resume Link: https://drive.google.com/file/d/1Huuh9RPEJhS6HsEB3XzEmpv1nF30UMB5/view?usp=sharing

PROFESSIONAL SUMMARY:
Backend Developer with 2+ years of professional experience building backend systems, RESTful APIs, and production web applications using Node.js, Express, TypeScript, and MongoDB. Experienced in authentication, authorization, database modeling, reporting, and backend performance optimization, with frontend knowledge in React and Next.js. Currently expanding into Software QA Engineer and Backend Developer roles with expertise in manual testing, API testing (Postman), test case design, and automated testing fundamentals (Cypress, Selenium).

WORK EXPERIENCE:
1. Gripas Marketing (Dec 2024 – Sep 2026 / Present)
   Role: Backend Developer
   Key Responsibilities & Highlights:
   - Developed and optimized backend features for enterprise CRM and internal applications.
   - Built core CRM modules: sales reporting, project directory, client directory, and lead & lead pipeline management featuring customizable stages and actions.
   - Implemented Redis caching and BullMQ for robust background task queues and asynchronous processing.
   - Designed and maintained MongoDB schemas, relationships, and validation using Mongoose.
   - Implemented JWT authentication and Role-Based Access Control (RBAC).

2. AGI InfoTech (Mar 2024 – Jun 2024)
   Role: Backend Developer Intern
   Key Responsibilities:
   - Developed RESTful APIs using Node.js, Express, and TypeScript.
   - Handled database modeling and CRUD operations with MongoDB.
   - Participated in testing and debugging API endpoints.

KEY PROJECTS:
1. Gripas Tech CRM (https://crm.gripastech.com/)
   - Enterprise CRM with pipeline stages, sales reports, client & project directories.
   - Tech: Node.js, Express, TypeScript, MongoDB, Redis, BullMQ, Next.js.
2. Caregiver Academia (https://caregiveracademia.com/)
   - Caregiver CRM & Care Home Compliance Management System.
   - Tech: Node.js, TypeScript, Express.js, MongoDB, REST APIs, RBAC.
   - Handled role-based access control (SUPER_ADMIN, RECEPTIONIST, COUNSELOR), fee calculations, outstanding dues, and automated tasks.
3. Tiya App (https://tiyaapp.com/)
   - Chiya Pasal & Cafe Management System with digital billing, inventory tracking, daily sales reporting, and expense management.
   - Tech: React, Node.js, Express, MongoDB.
4. Silver6 (https://silver6nepal.com/)
   - Modern E-commerce platform for jewelry and fashion accessories in Nepal, featuring product catalog, cart, checkout, and admin order management.
   - Tech: Next.js, React, Node.js, MongoDB.

TECHNICAL SKILLS:
- Backend & APIs: Node.js, Express.js, TypeScript, RESTful APIs, MVC Architecture, Role-Based Access Control (RBAC), JWT Authentication, Error Handling, Middleware Design, Microservices, BullMQ.
- Databases & Caching: MongoDB, Mongoose, Redis, Schema Design, Data Validation.
- Software QA & Testing: Manual Testing, API Testing (Postman), Test Automation (Cypress, Selenium WebDriver basics), Test Case Design, Bug Reporting & Tracking, Black Box Testing, Regression Testing, Functional Testing, Agile/Scrum.
- Tools & DevOps: Git, GitHub, Docker (basics), Postman, Linux, VS Code, CI/CD basics.
- Frontend: React.js, Next.js, HTML5, CSS3, Tailwind CSS.

EDUCATION & CERTIFICATIONS:
- B.Sc. CSIT (Bachelor of Science in Computer Science and Information Technology) — Academia International College, Tribhuvan University (2020 – 2025).
- +2 Science — Moonlight College, Kumaripati, Lalitpur (2018 – 2020).
- SEE (Secondary Education Examination) — AVM High School, Manbhawan, Lalitpur (Graduated 2018).
- Software QA Training — Techaxis, Kumaripati, Lalitpur (Manual Testing, Test Case Design, Bug Lifecycle, API Testing with Postman, Cypress, Selenium).
- Web Development Course — Aptech Computer Education.

LANGUAGES:
- Nepali (Native), English (Fluent), Hindi (Conversational).
`;

function getSmartFallback(message: string): string {
  const query = message.toLowerCase();

  if (query.includes("skill") || query.includes("stack") || query.includes("technolog")) {
    return `**Sandeep's Technical Skills:**
• **Backend & APIs:** Node.js, Express.js, TypeScript, RESTful APIs, JWT, RBAC, BullMQ
• **Databases & Caching:** MongoDB, Mongoose, Redis
• **Software QA & Testing:** Manual Testing, API Testing (Postman), Cypress, Selenium basics, Test Case Design, Bug Tracking
• **Frontend:** React.js, Next.js, Tailwind CSS
• **Tools:** Git, GitHub, Docker (basics), Postman, Linux`;
  }

  if (query.includes("project") || query.includes("gripas") || query.includes("tiya") || query.includes("silver") || query.includes("caregiver")) {
    return `**Sandeep's Featured Projects:**
1. **Gripas Tech CRM** ([Live](https://crm.gripastech.com/)): Enterprise CRM with lead pipelines, sales reporting, Redis, BullMQ, Node.js, TypeScript & MongoDB.
2. **Caregiver Academia** ([Live](https://caregiveracademia.com/)): Care home compliance CRM with RBAC, fee calculations, and automated background tasks.
3. **Tiya App** ([Live](https://tiyaapp.com/)): Chiya pasal & cafe management system with digital billing, inventory tracking, and sales analytics.
4. **Silver6** ([Live](https://silver6nepal.com/)): Modern jewelry and accessories e-commerce platform built with Next.js and Node.js.`;
  }

  if (query.includes("experience") || query.includes("job") || query.includes("work") || query.includes("company")) {
    return `**Sandeep's Professional Experience:**
• **Backend Developer** at **Gripas Marketing** (Dec 2024 – Present): Building enterprise CRM features, sales reports, lead pipelines, BullMQ background queues, and Redis caching.
• **Backend Developer Intern** at **AGI InfoTech** (Mar 2024 – Jun 2024): Developed RESTful APIs, database modeling, and API testing with Node.js and MongoDB.`;
  }

  if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("reach") || query.includes("hire")) {
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

  if (query.includes("qa") || query.includes("test") || query.includes("quality")) {
    return `**Software QA Competencies:**
Sandeep completed specialized Software QA Engineer training at **Techaxis** covering:
• Manual Testing, Functional & Regression Testing, Black Box Testing
• Test Case Design, Execution & Bug Lifecycle Tracking
• API Testing with Postman (validation, status codes, payload assertions)
• Automation Testing foundations with Cypress and Selenium WebDriver`;
  }

  if (query.includes("education") || query.includes("college") || query.includes("degree")) {
    return `**Education:**
• **B.Sc. CSIT** — Academia International College, Tribhuvan University (2020 – 2025)
• **+2 Science** — Moonlight College, Kumaripati, Lalitpur (2018 – 2020)
• **SEE** — AVM High School, Manbhawan, Lalitpur (2018)`;
  }

  return `Hello! I'm Sandeep Maharjan's AI Assistant. 

I can answer questions about his:
• **Backend Development Experience** (Node.js, Express, TypeScript, MongoDB, Redis, BullMQ)
• **Software QA & Testing Knowledge** (Postman API Testing, Cypress, Test Cases, Bug Reporting)
• **Featured Projects** (Gripas CRM, Caregiver Academia, Tiya App, Silver6)
• **Education & Contact Information**

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
    const geminiContents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

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
