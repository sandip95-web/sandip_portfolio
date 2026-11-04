import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to Sandeep Maharjan's portfolio website.",
    metadata: {
      title: "Home",
      description:
        "Sandeep Maharjan - Software QA Engineer, Automation Tester & Backend Developer.",
    },
  },
  skills: {
    title: "Skills",
    description:
      "Technical competencies across Software QA, Test Automation, Manual Testing, Backend Engineering, Databases, and APIs.",
    metadata: {
      title: "Skills",
      description:
        "Sandeep Maharjan's technical skills across Playwright, JMeter, Manual Testing, Node.js, TypeScript, and MongoDB.",
    },
  },
  projects: {
    title: "Projects",
    description:
      "Showcasing QA automation suites, manual test documentation, production backend systems, and web platforms.",
    metadata: {
      title: "Projects",
      description:
        "Sandeep Maharjan's QA automation test suites, manual testing documentation, and production backend projects.",
    },
  },
  experience: {
    title: "Experience",
    description:
      "Professional engineering journey, production backend systems, load testing, and performance optimization.",
    metadata: {
      title: "Experience",
      description:
        "Sandeep Maharjan's professional journey, backend achievements, and experience timeline.",
    },
  },
  education: {
    title: "Education, Certifications & References",
    description:
      "Academic degree in CSIT, TechAxis Software QA training, certifications, and industry mentor reference.",
    metadata: {
      title: "Education, Certifications & References",
      description:
        "Sandeep Maharjan's academic qualifications, TechAxis QA training, achievements, and QA mentor reference from Cedar Gate Technologies.",
    },
  },
  contact: {
    title: "Contact",
    description:
      "Let's connect — open to Software QA, Automation Testing, and Backend Developer opportunities.",
    metadata: {
      title: "Contact",
      description:
        "Contact Sandeep Maharjan for Software QA and Backend Developer opportunities.",
    },
  },
  contributions: {
    title: "Contributions",
    description: "Open-source contributions and community involvement.",
    metadata: {
      title: "Contributions",
      description: "Sandeep Maharjan's contributions.",
    },
  },
  resume: {
    title: "Resume",
    description:
      "Sandeep Maharjan's resume — Software QA & Automation Testing | Backend Developer.",
    metadata: {
      title: "Resume",
      description: "Sandeep Maharjan's resume.",
    },
  },
  blogs: {
    title: "Blogs",
    description: "Technical writings and engineering notes.",
    metadata: {
      title: "Blogs",
      description: "Sandeep Maharjan's blog.",
    },
  },
};
