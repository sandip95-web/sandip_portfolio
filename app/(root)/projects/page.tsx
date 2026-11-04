import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import ProjectCard from "@/components/projects/project-card";
import { ResponsiveTabs, TabItem } from "@/components/ui/responsive-tabs";
import { pagesConfig } from "@/config/pages";
import { Projects } from "@/config/projects";

export const metadata: Metadata = {
  title: pagesConfig.projects.metadata.title,
  description: pagesConfig.projects.metadata.description,
};

const renderContent = (tabVal: string) => {
  let projectArr = Projects;
  if (tabVal === "qa") {
    projectArr = projectArr.filter((val) =>
      val.category.includes("QA & Testing")
    );
  } else if (tabVal === "backend") {
    projectArr = projectArr.filter((val) =>
      val.category.includes("Backend")
    );
  }

  return (
    <div className="mx-auto my-6 grid justify-center gap-6 md:grid-cols-2 max-w-5xl static items-stretch">
      {projectArr.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default function ProjectsPage() {
  const qaCount = Projects.filter((p) =>
    p.category.includes("QA & Testing")
  ).length;
  const backendCount = Projects.filter((p) =>
    p.category.includes("Backend")
  ).length;

  const tabItems: TabItem[] = [
    {
      value: "all",
      label: "All Projects",
      count: Projects.length,
      content: renderContent("all"),
    },
    {
      value: "qa",
      label: "QA & Automation",
      count: qaCount,
      content: renderContent("qa"),
    },
    {
      value: "backend",
      label: "Backend Systems",
      count: backendCount,
      content: renderContent("backend"),
    },
  ];

  return (
    <PageContainer
      title={pagesConfig.projects.title}
      description={pagesConfig.projects.description}
    >
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
