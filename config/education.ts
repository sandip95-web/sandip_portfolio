export interface EducationInterface {
  degree: string;
  institution: string;
  score: string;
  year: string;
}

export interface AchievementInterface {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface LanguageInterface {
  language: string;
  proficiency: string;
}

export interface ReferenceInterface {
  name: string;
  role: string;
  company: string;
  location: string;
  phone: string;
  email: string;
  relationship: string;
  description: string;
}

export const educationList: EducationInterface[] = [
  {
    degree: "B.Sc. Computer Science & IT",
    institution: "Academia International College, Gwarko",
    score: "74.14%",
    year: "2024",
  },
  {
    degree: "Higher Secondary Education (+2 Science)",
    institution: "Moonlight College",
    score: "GPA: 3.03",
    year: "2019",
  },
  {
    degree: "Secondary School (SLC)",
    institution: "Adarsha Vidya Mandir High School",
    score: "GPA: 3.6",
    year: "2017",
  },
];

export const achievementsList: AchievementInterface[] = [
  {
    title: "Software QA Training",
    issuer: "TechAxis, Kumaripati, Lalitpur",
    year: "2024",
    description:
      "Comprehensive training covering manual testing, test planning, test case design, requirements traceability matrix (RTM), defect reporting in Jira, REST API testing, performance testing with Apache JMeter, and test automation with Playwright and TypeScript.",
  },
  {
    title: "Mobile App Development Competition",
    issuer: "Winner",
    year: "2023",
    description:
      "Collaborated on a Flutter/MongoDB mobile application addressing a real-world tracking problem.",
  },
  {
    title: "Graphic Design Certification",
    issuer: "Aptech",
    year: "2023",
    description:
      "Visual design principles, layout composition, typography, and industry design tools.",
  },
];

export const languagesList: LanguageInterface[] = [
  {
    language: "Nepali",
    proficiency: "Fluent",
  },
  {
    language: "English",
    proficiency: "Fluent",
  },
  {
    language: "Hindi",
    proficiency: "Intermediate",
  },
];

export const referencesList: ReferenceInterface[] = [
  {
    name: "Sandhya Phuyal",
    role: "Software QA Engineer",
    company: "Cedar Gate Technologies",
    location: "Lalitpur, Nepal",
    phone: "+977-9869416100",
    email: "sfuyal@gmail.com",
    relationship: "QA Mentor — TechAxis Software QA Training",
    description:
      "Industry mentor and lead instructor for Software QA at TechAxis. Guided Sandeep through hands-on test planning, test case design, RTM, Jira defect workflows, API validation, Apache JMeter performance testing, and Playwright automation with TypeScript.",
  },
];
