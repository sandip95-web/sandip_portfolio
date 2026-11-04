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
      "Implemented Redis caching and conducted load testing to investigate performance bottlenecks and improve backend responsiveness and scalability.",
      "Independently designed and developed the backend of a CRM system for managing leads, client information, project records, and milestones.",
      "Built and maintained backend services for Tiya App, a production cafe order-management and financial-tracking platform with RBAC and sales reporting.",
    ],
    achievements: [
      "Implemented Redis caching and conducted load testing to investigate performance bottlenecks and improve backend responsiveness and scalability.",
      "Independently designed and developed the backend of a CRM system for managing leads, client information, project records and milestones, including lead pools, dashboards, reporting and role-based privilege management.",
      "Built and maintained backend services for Tiya App, a production cafe order-management and financial-tracking platform, including RBAC (owner, staff, admin) and sales, revenue and transaction reporting modules.",
      "Delivered and maintained production features across the CRM and Tiya App using Node.js, Express, TypeScript and MongoDB.",
    ],
    skills: [
      "Node.js",
      "express.js",
      "Typescript",
      "MongoDB",
      "Redis",
      "Performance Testing",
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
      "Collaborated with backend and frontend teammates using Node.js, Express, MongoDB, and React to deliver LMS features over a 4-month internship.",
    ],
    achievements: [
      "Contributed to a Learning Management System for students applying to study abroad; designed REST APIs and MongoDB schemas for student profiles, applications and document management.",
      "Collaborated with backend and frontend teammates using Node.js, Express, MongoDB and React to deliver LMS features over a 4-month internship.",
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
