import { Icons } from "@/components/common/icons";

export type SkillCategory = "QA & Testing" | "Backend" | "Frontend & Tools";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
  category: SkillCategory;
}

export const skillsUnsorted: skillsInterface[] = [
  // QA & Testing
  {
    name: "Playwright Automation",
    description:
      "Automated functional testing using Playwright and TypeScript with Page Object Model (POM), assertions, and reusable page structures.",
    rating: 5,
    icon: Icons.playwright,
    category: "QA & Testing",
  },
  {
    name: "Manual Testing & STLC",
    description:
      "Functional testing, requirement analysis, test plans, test scenarios, test cases, RTM, Equivalence Partitioning, and Boundary Value Analysis.",
    rating: 5,
    icon: Icons.shieldCheck,
    category: "QA & Testing",
  },
  {
    name: "API Testing & Validation",
    description:
      "REST API testing, HTTP status codes, request/response validation, auth token handling, JSON schemas, and endpoint contract verification.",
    rating: 5,
    icon: Icons.testTube,
    category: "QA & Testing",
  },
  {
    name: "Apache JMeter",
    description:
      "Performance testing, load testing, concurrent user simulation, response time tracking, and system bottleneck analysis.",
    rating: 4,
    icon: Icons.jmeter,
    category: "QA & Testing",
  },
  {
    name: "Jira & Defect Management",
    description:
      "Defect reporting, severity and priority classification, Bug Life Cycle management, sprint coordination, and traceability in Jira.",
    rating: 4,
    icon: Icons.jira,
    category: "QA & Testing",
  },
  {
    name: "Google Sheets for QA",
    description:
      "Authoring comprehensive Test Plans, Test Case suites, execution logs, and Requirements Traceability Matrices (RTM).",
    rating: 4,
    icon: Icons.spreadsheet,
    category: "QA & Testing",
  },

  // Backend & Core Engineering
  {
    name: "Node.js",
    description:
      "2+ years building high-performance, asynchronous backend services, business logic, and production APIs.",
    rating: 5,
    icon: Icons.nodejs,
    category: "Backend",
  },
  {
    name: "Express.js",
    description:
      "Architecting secure RESTful endpoints, modular middleware, centralized error handling, and RBAC authentication.",
    rating: 5,
    icon: Icons.express,
    category: "Backend",
  },
  {
    name: "TypeScript",
    description:
      "Type-safe development across backend architectures, test automation suites, schemas, and modern web applications.",
    rating: 5,
    icon: Icons.typescript,
    category: "Backend",
  },
  {
    name: "JavaScript",
    description:
      "Core foundation across modern JavaScript runtimes, browser automation, async flows, and server systems.",
    rating: 5,
    icon: Icons.javascript,
    category: "Backend",
  },
  {
    name: "MongoDB & Mongoose",
    description:
      "Schema design, complex aggregations, indexing, document relationships, and data modeling for scalable production apps.",
    rating: 5,
    icon: Icons.mongodb,
    category: "Backend",
  },
  {
    name: "PostgreSQL & SQL",
    description:
      "Relational database design, query optimization, data normalization, ACID compliance, and ORM integration.",
    rating: 4,
    icon: Icons.postgresql,
    category: "Backend",
  },
  {
    name: "Redis & BullMQ",
    description:
      "In-memory caching and distributed background queues to eliminate performance bottlenecks and improve response times.",
    rating: 4,
    icon: Icons.redis,
    category: "Backend",
  },
  {
    name: "REST APIs",
    description:
      "Design, documentation, and implementation of robust RESTful services with strict status codes and JSON payloads.",
    rating: 5,
    icon: Icons.link,
    category: "Backend",
  },
  {
    name: "GraphQL",
    description:
      "Declarative API querying, custom schemas, resolvers, and efficient data retrieval.",
    rating: 4,
    icon: Icons.graphql,
    category: "Backend",
  },
  {
    name: "NestJS",
    description:
      "Enterprise modular architecture with TypeScript, dependency injection, and scalable service design.",
    rating: 4,
    icon: Icons.nestjs,
    category: "Backend",
  },
  {
    name: "Django & Python",
    description:
      "Python scripting, backend endpoints, data processing, and automation utilities.",
    rating: 4,
    icon: Icons.python,
    category: "Backend",
  },
  {
    name: "C Programming",
    description:
      "Procedural programming foundations, memory management concepts, and low-level system understanding.",
    rating: 3,
    icon: Icons.cLang,
    category: "Backend",
  },
  {
    name: "Prisma & Zod",
    description:
      "Type-safe ORM modeling, database migrations, and runtime schema validation for API integrity.",
    rating: 4,
    icon: Icons.prisma,
    category: "Backend",
  },

  // Frontend & DevOps Tools
  {
    name: "React.js & Next.js",
    description:
      "Component-based UI development, client/server rendering, state management, and full-stack integration.",
    rating: 4,
    icon: Icons.react,
    category: "Frontend & Tools",
  },
  {
    name: "HTML 5 & CSS 3",
    description:
      "Semantic HTML markup, responsive web styling, and modern UI implementation.",
    rating: 4,
    icon: Icons.html5,
    category: "Frontend & Tools",
  },
  {
    name: "Git, GitHub & GitLab",
    description:
      "Branching strategies, pull requests, automated CI/CD workflows, test tracking, and collaborative version control.",
    rating: 4,
    icon: Icons.git,
    category: "Frontend & Tools",
  },
  {
    name: "Docker",
    description:
      "Containerizing backend services and testing environments for reproducible local and staging setups.",
    rating: 3,
    icon: Icons.docker,
    category: "Frontend & Tools",
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = [
  skillsUnsorted.find((s) => s.name === "Playwright Automation")!,
  skillsUnsorted.find((s) => s.name === "Manual Testing & STLC")!,
  skillsUnsorted.find((s) => s.name === "API Testing & Validation")!,
  skillsUnsorted.find((s) => s.name === "Node.js")!,
  skillsUnsorted.find((s) => s.name === "TypeScript")!,
  skillsUnsorted.find((s) => s.name === "Apache JMeter")!,
];
