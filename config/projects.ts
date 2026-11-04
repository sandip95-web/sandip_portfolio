import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "opencart-qa-automation",
    companyName: "OpenCart — QA & Automation Testing",
    type: "Personal",
    category: ["QA & Testing", "Web Dev"],
    shortDescription:
      "Comprehensive QA project featuring manual test planning, test cases, and RTM in Google Sheets, alongside automated functional test suites built with Playwright, TypeScript, and Page Object Model (POM).",
    githubLink: "https://github.com/sandip95-web/opencart-qa-automation",
    techStack: [
      "Playwright",
      "Typescript",
      "Manual Testing",
      "Test Plans",
      "Test Scenarios & Cases",
      "RTM",
      "Google Sheets",
      "Jira",
    ],
    startDate: new Date("2024-09-01"),
    endDate: new Date("2024-11-30"),
    companyLogoImg: "/opencart.svg",
    pagesInfoArr: [
      {
        title: "Test Documentation & RTM",
        description:
          "Authored comprehensive manual test documentation including Test Strategy, Test Cases, and Requirements Traceability Matrix (RTM) tracking functional coverage.",
        imgArr: ["/opencart.svg"],
      },
      {
        title: "Playwright Automation Suite",
        description:
          "Modular automation framework built with TypeScript adhering to the Page Object Model (POM) pattern for maintainable end-to-end tests.",
        imgArr: ["/opencart.svg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "OpenCart QA & Automation Testing is an end-to-end quality assurance project developed during specialized Software QA training at TechAxis, focusing on comprehensive manual and automated validation of e-commerce workflows.",
        "Authored thorough manual test documentation covering Test Plans, Test Scenarios, detailed Test Cases with pre-conditions and expected results, and a complete Requirements Traceability Matrix (RTM) organized in Google Sheets.",
        "Conducted in-depth functional testing across critical user journeys including user registration, product search, cart operations, checkout flows, and account management using Equivalence Partitioning and Boundary Value Analysis.",
        "Built automated regression and functional test suites using Playwright and TypeScript architected with a strict Page Object Model (POM) structure for maximum reusability, test isolation, and maintainability.",
        "Organized reusable page objects, dynamic test fixtures, test data sets, assertions, and documented test execution results.",
      ],
      bullets: [
        "Authored comprehensive manual test documentation: Test Plan, Test Scenarios, Test Cases, and RTM.",
        "Executed manual functional testing on user registration, shopping cart, checkout, and search workflows.",
        "Applied Black Box test design techniques including Boundary Value Analysis and Equivalence Partitioning.",
        "Built automated functional and regression test suites using Playwright and TypeScript with Page Object Model (POM).",
        "Structured reusable page components, parameterized test data, and documented test execution results.",
        "Tracked defect lifecycles, bug reporting, and severity/priority triage using Jira.",
      ],
    },
  },
  {
    id: "gripas-tech-crm",
    companyName: "Gripas Tech CRM",
    type: "Professional",
    category: ["Backend", "Full Stack"],
    shortDescription:
      "Enterprise CRM backend featuring automated lead pools, pipeline stage actions, client/project directories, and dynamic reporting powered by Redis and BullMQ with load testing for bottleneck resolution.",
    websiteLink: "https://crm.gripastech.com/",
    techStack: [
      "Node.js",
      "express.js",
      "Typescript",
      "MongoDB",
      "Redis",
      "BullMQ",
      "REST APIs",
      "Performance Testing",
    ],
    startDate: new Date("2024-12-01"),
    endDate: new Date("2026-09-30"),
    companyLogoImg: "/gripastech.avif",
    pagesInfoArr: [
      {
        title: "CRM Pipelines & Reporting",
        description:
          "Custom pipeline stages with automated stage actions, lead pools, and project directories.",
        imgArr: ["/gripastech.avif"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Independently designed and developed the backend of a full CRM system to manage leads from social media and website inquiries, client information, project records, and milestones.",
        "Built modules for lead pools, client and project directories, project history, dashboards, reporting, and role-based privilege management.",
        "Engineered pipeline stages where each stage triggers specific actions, leveraging Redis caching and BullMQ for high-performance background queues.",
        "Conducted load testing to systematically investigate and resolve performance bottlenecks, improving backend responsiveness and scalability.",
      ],
      bullets: [
        "Designed and implemented lead pools, project directories, and pipeline stages with stage actions.",
        "Integrated Redis caching and BullMQ job queues for responsive background processing.",
        "Configured role-based privilege management and comprehensive sales reporting.",
        "Conducted load testing to isolate bottlenecks and optimize backend scalability.",
      ],
    },
  },
  {
    id: "tiya-app",
    companyName: "Tiya App (Cafe Management System)",
    type: "Professional",
    category: ["Backend", "Full Stack"],
    shortDescription:
      "Production cafe order-management and financial-tracking platform empowering cafe owners and staff with real-time billing, RBAC, and revenue reporting.",
    websiteLink: "https://tiyaapp.com/",
    techStack: [
      "Node.js",
      "express.js",
      "MongoDB",
      "Typescript",
      "React",
      "REST APIs",
    ],
    startDate: new Date("2024-12-01"),
    endDate: new Date("2026-09-30"),
    companyLogoImg: "/tiya.webp",
    pagesInfoArr: [
      {
        title: "Order & Financial Platform",
        description:
          "End-to-end cafe management platform for order processing, billing, financial tracking, role-based access, and admin dashboards.",
        imgArr: ["/tiya.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Contributed to an end-to-end cafe management platform for order processing, billing, financial tracking, role-based access, and admin dashboards.",
        "Built and maintained backend services for Tiya App, a production cafe order-management and financial-tracking platform used daily by cafe owners and staff.",
        "Designed role-based access control (RBAC) with authentication and authorization for owner, staff, and admin roles, and developed sales, revenue, and transaction reporting modules.",
        "Delivered and maintained production features using Node.js, Express, TypeScript, and MongoDB.",
      ],
      bullets: [
        "Built end-to-end backend services for order processing, billing, and financial tracking.",
        "Designed role-based access control (RBAC) with authentication and authorization for owner, staff, and admin roles.",
        "Developed sales, revenue, and transaction reporting modules.",
        "Maintained high reliability across production cafe operations.",
      ],
    },
  },
  {
    id: "silver6",
    companyName: "Silver6 (E-commerce Platform)",
    type: "Professional",
    category: ["Backend", "Full Stack", "Web Dev"],
    shortDescription:
      "Full-stack e-commerce platform with secure user authentication, product catalogs, cart APIs, order management, and sales reporting.",
    websiteLink: "https://silver6nepal.com/",
    techStack: [
      "Node.js",
      "express.js",
      "MongoDB",
      "Next.js",
      "REST APIs",
      "Typescript",
    ],
    startDate: new Date("2024-01-01"),
    endDate: new Date("2024-12-01"),
    companyLogoImg: "/silver6.png",
    pagesInfoArr: [
      {
        title: "E-Commerce System",
        description:
          "Product catalogs, secure accounts, cart processing, and backend sales tracking.",
        imgArr: ["/silver6.png"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Developed backend functionality for product listings, secure user accounts, order management, cart APIs, and sales reporting.",
        "Designed REST APIs and database models with MongoDB to support high-volume catalog queries and smooth checkout workflows.",
        "Built administrative sales reporting tools to help store managers track inventory turnover, pending orders, and financial summaries.",
      ],
      bullets: [
        "Developed backend services for product listings, order management, and cart APIs.",
        "Implemented secure user accounts, authentication, and authorization.",
        "Built sales reporting and store management modules.",
        "Leveraged Node.js, Express, MongoDB, and Next.js.",
      ],
    },
  },
  {
    id: "caregiver-academia",
    companyName: "Caregiver Academia",
    type: "Professional",
    category: ["Backend", "Full Stack"],
    shortDescription:
      "Caregiver CRM & Compliance Management System with role-based access (SUPER_ADMIN, RECEPTIONIST, COUNSELOR), fee management, and automated background jobs.",
    websiteLink: "https://caregiveracademia.com/",
    techStack: [
      "Node.js",
      "Typescript",
      "express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
    ],
    startDate: new Date("2024-06-01"),
    endDate: new Date("2024-11-30"),
    companyLogoImg: "/caregiver.webp",
    pagesInfoArr: [
      {
        title: "Caregiver CRM & Compliance",
        description:
          "Care Home Compliance Management System with automated fee processing and RBAC.",
        imgArr: ["/caregiver.webp"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Caregiver Academia is a Caregiver CRM and Care Home Compliance Management System engineered for operational efficiency and reliable compliance tracking.",
        "Built backend functionality for managing CRM data, operational workflows, and business operations using Node.js, Express.js, and TypeScript.",
        "Implemented role-based access control (RBAC) with granular authentication and authorization for users including SUPER_ADMIN, RECEPTIONIST, and COUNSELOR.",
        "Designed and managed MongoDB schemas, document relationships, and data validation using Mongoose.",
        "Developed fee and payment management business logic for calculating course fees, payment plans, and tracking outstanding dues.",
        "Engineered automated background tasks and scheduled jobs for processing and tracking fee statuses and deadline alerts.",
        "Architected the application using TypeScript with reusable middleware, schema validation, centralized error handling, and consistent API responses.",
      ],
      bullets: [
        "Built backend functionality for managing CRM data and business operations using Node.js, Express, and TypeScript.",
        "Implemented role-based access for SUPER_ADMIN, RECEPTIONIST, and COUNSELOR roles.",
        "Designed and managed MongoDB schemas, relationships, and data validation using Mongoose.",
        "Engineered fee and payment management modules for calculating dues and payment tracking.",
        "Built automated background tasks and scheduled jobs for tracking outstanding fees.",
        "Organized backend architecture with reusable middleware, validation, error handling, and uniform responses.",
      ],
    },
  },
];

export const featuredProjects = [
  Projects.find((p) => p.id === "opencart-qa-automation")!,
  Projects.find((p) => p.id === "gripas-tech-crm")!,
  Projects.find((p) => p.id === "tiya-app")!,
  Projects.find((p) => p.id === "silver6")!,
];
