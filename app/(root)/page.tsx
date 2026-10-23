import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { AnimatedSection } from "@/components/common/animated-section";
import { AnimatedText } from "@/components/common/animated-text";
import { ClientPageWrapper } from "@/components/common/client-page-wrapper";
import { Icons } from "@/components/common/icons";
import EducationSection from "@/components/education/education-card";
import ExperienceCard from "@/components/experience/experience-card";
import ProjectCard from "@/components/projects/project-card";
import SkillsCard from "@/components/skills/skills-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { featuredSkills } from "@/config/skills";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | ${siteConfig.authorName}`,
  description:
    "Sandeep Maharjan - Aspiring Software QA Engineer & Backend Developer with 2+ years of experience in Node.js, Express, TypeScript, and MongoDB. Explore my projects, experience, and skills.",
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function IndexPage() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.authorName,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile.png`,
    jobTitle: "Aspiring Software QA Engineer | Backend Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lalitpur",
      addressRegion: "Bagmati Province",
      addressCountry: "Nepal",
    },
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.portfolio,
    ],
  };

  return (
    <ClientPageWrapper>
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-28 min-h-[90vh] flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-10">
          <Image
            src="/profile.png"
            height={160}
            width={160}
            className="bg-primary rounded-full mb-2 h-36 w-36 sm:h-40 sm:w-40 object-cover border-4 border-primary shadow-xl"
            alt="Sandeep Maharjan - Software QA Engineer & Backend Developer"
            priority
          />
          <AnimatedText
            as="h1"
            delay={0.2}
            className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Sandeep Maharjan
          </AnimatedText>
          <AnimatedText
            as="h3"
            delay={0.4}
            className="font-heading text-base sm:text-xl md:text-xl lg:text-2xl text-primary font-medium"
          >
            Aspiring Software QA Engineer | Backend Developer
          </AnimatedText>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
            <span>Jawalakhel-5, Lalitpur, Nepal</span>
          </div>
          <div className="mt-2 max-w-[46rem] text-center">
            <p className="leading-relaxed text-muted-foreground text-sm sm:text-base">
              Backend Developer with 2+ years of professional experience
              building backend systems, RESTful APIs, and production web
              applications using Node.js, Express, TypeScript, and MongoDB.
              Experienced in authentication, database modeling, reporting, and
              backend performance optimization. Currently undergoing Software QA
              and Manual Testing training at Techaxis.
            </p>
          </div>

          <div className="flex flex-col mt-6 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
            <AnimatedText delay={0.6}>
              <Link
                href={"/resume"}
                target="_blank"
                className={cn(buttonVariants({ size: "lg" }))}
                aria-label="View resume"
              >
                <Icons.post className="w-4 h-4 mr-2" /> Resume
              </Link>
            </AnimatedText>
            <AnimatedText delay={0.8}>
              <Link
                href={"/contact"}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  })
                )}
                aria-label="Contact Sandeep Maharjan"
              >
                <Icons.contact className="w-4 h-4 mr-2" /> Contact Me
              </Link>
            </AnimatedText>
          </div>
          <AnimatedText delay={1.2}>
            <Icons.chevronDown className="h-6 w-6 mt-8 opacity-70 animate-bounce" />
          </AnimatedText>
        </div>
      </section>

      {/* Projects Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14 rounded-2xl"
        id="projects"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            {pagesConfig.projects.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.projects.description}
          </AnimatedText>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full items-stretch">
            {featuredProjects.map((project, index) => (
              <AnimatedSection
                key={project.id}
                delay={0.1 * (index + 1)}
                direction="up"
                className="h-full w-full min-w-0"
              >
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/projects">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Projects
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="experience"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            {pagesConfig.experience.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.experience.description}
          </AnimatedText>
        </div>
        <div className="mx-auto grid justify-center gap-6 md:w-full lg:grid-cols-2 max-w-4xl">
          {experiences.map((experience, index) => (
            <AnimatedSection
              key={experience.id}
              delay={0.1 * (index + 1)}
              direction="up"
            >
              <ExperienceCard experience={experience} />
            </AnimatedSection>
          ))}
        </div>
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/experience">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> Full Experience
              Timeline
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>

      {/* Education & Achievements Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 bg-muted py-10 my-14 rounded-2xl"
        id="education"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            {pagesConfig.education.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.education.description}
          </AnimatedText>
        </div>
        <div className="max-w-5xl mx-auto w-full">
          <EducationSection />
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection
        direction="up"
        className="container space-y-6 py-10 my-14"
        id="skills"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <AnimatedText
            as="h2"
            className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl"
          >
            {pagesConfig.skills.title}
          </AnimatedText>
          <AnimatedText
            as="p"
            delay={0.2}
            className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
          >
            {pagesConfig.skills.description}
          </AnimatedText>
        </div>
        <SkillsCard skills={featuredSkills} />
        <AnimatedText delay={0.4} className="flex justify-center">
          <Link href="/skills">
            <Button variant={"outline"} className="rounded-xl">
              <Icons.chevronDown className="mr-2 h-4 w-4" /> View All Skills
            </Button>
          </Link>
        </AnimatedText>
      </AnimatedSection>
    </ClientPageWrapper>
  );
}
