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
import FeaturedProjectTabs from "@/components/projects/featured-project-tabs";
import FeaturedSkillTabs from "@/components/skills/featured-skill-tabs";
import { Button, buttonVariants } from "@/components/ui/button";
import { experiences } from "@/config/experience";
import { pagesConfig } from "@/config/pages";
import { featuredProjects } from "@/config/projects";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: `${pagesConfig.home.metadata.title} | ${siteConfig.authorName}`,
  description:
    "Sandeep Maharjan - Software QA Engineer, Automation Tester & Backend Developer with 2+ years of experience in Node.js, Express, TypeScript, MongoDB, manual testing, API testing, JMeter, and Playwright automation.",
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
    jobTitle: "Software QA & Automation Testing | Backend Developer",
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
      <section className="space-y-6 pb-8 pt-6 mb-0 md:pb-12 md:py-20 lg:py-24 min-h-[90vh] flex items-center">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center -mt-6">
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
            className="font-heading text-base sm:text-xl md:text-2xl text-primary font-semibold"
          >
            Software QA &amp; Automation Testing | Backend Developer
          </AnimatedText>

          {/* Quick Info Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
              <span>📍 Jawalakhel-5, Lalitpur, Nepal</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted">
              <span>📞 +977-9818504980</span>
            </span>
            <a
              href="mailto:sandipmaharjan95@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted hover:text-foreground transition-colors"
            >
              <span>✉️ sandipmaharjan95@gmail.com</span>
            </a>
          </div>

          {/* Core Strengths Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              Playwright &amp; TypeScript Automation
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              Manual Testing, Test Plans &amp; RTM
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              REST API &amp; JMeter Performance Testing
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20">
              2+ Yrs Node.js, Express &amp; MongoDB
            </span>
          </div>

          <div className="mt-2 max-w-[50rem] text-center">
            <p className="leading-relaxed text-muted-foreground text-sm sm:text-base">
              Software QA professional with a strong backend engineering
              foundation (2+ years in Node.js, Express.js, TypeScript, and
              MongoDB). Software QA training at TechAxis with hands-on practice in
              manual testing, test planning, test case design, requirements
              traceability (RTM), defect reporting in Jira, API testing,
              performance testing with Apache JMeter, and test automation with
              Playwright and TypeScript. Brings a developer’s understanding of how
              APIs, databases, and business logic behave to design thorough test
              scenarios, find root causes faster, and communicate clearly with
              engineering teams.
            </p>
          </div>

          <div className="flex flex-col mt-4 items-center justify-center sm:flex-row sm:space-x-4 gap-3">
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
            <Icons.chevronDown className="h-6 w-6 mt-6 opacity-70 animate-bounce" />
          </AnimatedText>
        </div>
      </section>

      {/* Projects Section with Interactive Category Tabs */}
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
            Filter between QA automation suites and backend production platforms.
          </AnimatedText>
        </div>
        <FeaturedProjectTabs projects={featuredProjects} />
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

      {/* Education, Certifications & Mentor References Section */}
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

      {/* Skills Section with Interactive Tabs */}
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
            Explore technical expertise across QA Automation, STLC, Backend, and Databases.
          </AnimatedText>
        </div>
        <FeaturedSkillTabs />
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
