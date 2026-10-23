import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to Sandeep Maharjan's portfolio website.",
    metadata: {
      title: "Home",
      description: "Sandeep Maharjan - Aspiring Software QA Engineer & Backend Developer.",
    },
  },
  skills: {
    title: "Skills",
    description: "Technical skills across Backend, QA & Testing, Databases, and APIs.",
    metadata: {
      title: "Skills",
      description:
        "Sandeep Maharjan's technical skills across Backend, QA & Testing, Databases, and APIs.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing production backend systems, CRM architectures, and web platforms.",
    metadata: {
      title: "Projects",
      description: "Sandeep Maharjan's production backend and web application projects.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey, production achievements, and work timeline.",
    metadata: {
      title: "Experience",
      description:
        "Sandeep Maharjan's professional journey and experience timeline.",
    },
  },
  education: {
    title: "Education & Certifications",
    description: "Academic qualifications, QA training, and certified achievements.",
    metadata: {
      title: "Education & Certifications",
      description:
        "Sandeep Maharjan's academic degrees, software QA training, and certifications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect — open to Software QA and Backend Developer opportunities.",
    metadata: {
      title: "Contact",
      description: "Contact Sandeep Maharjan.",
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
    description: "Sandeep Maharjan's resume.",
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
