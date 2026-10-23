import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "gripas-marketing",
    position: "Backend Developer",
    company: "Gripas Marketing",
    location: "Lalitpur, Nepal",
    startDate: new Date("2024-12-01"),
    endDate: new Date("2026-09-30"),
    description: [
      "Independently designed and developed the backend for Gripas Tech CRM managing leads, clients, project milestones, and role privileges.",
      "Built and maintained backend services for Tiya App, a production cafe order-management and financial-tracking platform.",
      "Implemented Redis caching and BullMQ queuing, conducting load testing to investigate performance bottlenecks.",
    ],
    achievements: [
      "Independently designed and developed the backend of a CRM system to manage leads from social media and website inquiries, client information, project records, and milestones.",
      "Built modules for lead pools, client and project directories, project history, dashboards, reporting, and role-based privilege management.",
      "Implemented Redis caching and BullMQ message queuing, conducting load testing to investigate performance bottlenecks and improve backend responsiveness and scalability.",
      "Built and maintained backend services for Tiya App, a production cafe order-management and financial-tracking platform used by cafe owners and staff.",
      "Designed role-based access control (RBAC) with authentication and authorization for owner, staff, and admin roles, and developed sales, revenue, and transaction reporting modules.",
      "Delivered and maintained production features across the CRM and Tiya App using Node.js, Express, TypeScript, and MongoDB.",
    ],
    skills: [
      "Node.js",
      "express.js",
      "Typescript",
      "MongoDB",
      "Redis",
      "BullMQ",
      "REST APIs",
    ],
    companyUrl: "https://crm.gripastech.com/",
    logo: "/gripastech.avif",
  },
  {
    id: "agi-infotech",
    position: "Full Stack Developer Intern",
    company: "AGI InfoTech",
    location: "Nepal",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-06-30"),
    description: [
      "Contributed to a Learning Management System (LMS) for students applying to study abroad.",
      "Designed REST APIs and MongoDB schemas for student profiles, applications, and document management.",
      "Collaborated with backend and frontend teammates using Node.js, Express, MongoDB, and React.",
    ],
    achievements: [
      "Contributed to a Learning Management System for students applying to study abroad.",
      "Designed REST APIs and MongoDB schemas for student profiles, applications, and document management.",
      "Collaborated with backend and frontend teammates using Node.js, Express, MongoDB, and React to deliver LMS features over a 4-month internship.",
    ],
    skills: [
      "Node.js",
      "express.js",
      "MongoDB",
      "React",
      "REST APIs",
      "Javascript",
    ],
    logo: "/logo.png",
  },
];
