import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  // Backend & Core
  {
    name: "Node.js",
    description:
      "Build high-performance, asynchronous backend systems and RESTful APIs for production services.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "Express.js",
    description:
      "Develop secure, modular server-side web applications, middleware, and API endpoints.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "TypeScript",
    description:
      "Type-safe application development ensuring maintainable, scalable, and robust codebases.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "JavaScript",
    description:
      "Core language for full-stack engineering across server runtimes and client interfaces.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "MongoDB",
    description:
      "Schema design, complex aggregations, and data modeling using Mongoose for scalable platforms.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "PostgreSQL",
    description:
      "Relational database design, querying, data integrity, and ORM integration.",
    rating: 4,
    icon: Icons.postgresql,
  },
  {
    name: "Redis",
    description:
      "In-memory caching and message handling to accelerate backend responsiveness and reduce latency.",
    rating: 4,
    icon: Icons.redis,
  },
  {
    name: "BullMQ",
    description:
      "Distributed message queue and background job processing on top of Redis.",
    rating: 4,
    icon: Icons.settings,
  },
  {
    name: "REST APIs",
    description:
      "Design and implementation of standard, secure, and well-structured RESTful endpoints.",
    rating: 5,
    icon: Icons.link,
  },
  {
    name: "GraphQL",
    description:
      "Declarative API querying, schemas, and efficient data retrieval.",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "NestJS",
    description:
      "Enterprise modular architecture with dependency injection and TypeScript.",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "Django",
    description:
      "Python-based web framework for backend endpoints and rapid service development.",
    rating: 4,
    icon: Icons.django,
  },
  {
    name: "Python",
    description:
      "Scripting, backend service development, data processing, and automation.",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "C",
    description:
      "Fundamental procedural programming, systems foundations, and memory concepts.",
    rating: 3,
    icon: Icons.cLang,
  },
  {
    name: "Prisma & Mongoose",
    description:
      "Database ORM/ODM modeling for structured access, migrations, and schema validation.",
    rating: 4,
    icon: Icons.prisma,
  },
  {
    name: "Zod",
    description:
      "TypeScript-first schema declaration and runtime data validation for APIs.",
    rating: 4,
    icon: Icons.check,
  },
  // Frontend
  {
    name: "React.js",
    description:
      "Component-based UI development, state management, and API integration for web apps.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Next.js",
    description:
      "Server-side rendering, App Router, and full-stack React framework features.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "HTML 5 & CSS 3",
    description:
      "Semantic markup, responsive layouts, and modern web interface styling.",
    rating: 4,
    icon: Icons.html5,
  },
  // QA & Testing
  {
    name: "Manual Testing & QA",
    description:
      "SDLC execution, functional requirement analysis, test scenarios, test cases, and test plans.",
    rating: 4,
    icon: Icons.check,
  },
  {
    name: "Git & GitHub / GitLab",
    description:
      "Version control workflows, branching, pull requests, code reviews, and issue tracking.",
    rating: 4,
    icon: Icons.git,
  },
  {
    name: "Docker",
    description:
      "Containerizing backend services for consistent development and deployment environments.",
    rating: 3,
    icon: Icons.docker,
  },
  {
    name: "Jira",
    description:
      "Agile sprint tracking, task coordination, and bug defect reporting.",
    rating: 3,
    icon: Icons.jira,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
