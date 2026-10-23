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
    issuer: "Techaxis, Kumaripati, Lalitpur",
    year: "Ongoing",
    description:
      "Comprehensive training in SDLC, Manual Testing, Requirement Documents, Functional Documents, Test Scenarios, Test Cases, and Test Plans.",
  },
  {
    title: "Mobile App Development Competition",
    issuer: "Winner",
    year: "2023",
    description:
      "Collaborated on a Flutter/MongoDB mobile application addressing a real-world tracking challenge.",
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
