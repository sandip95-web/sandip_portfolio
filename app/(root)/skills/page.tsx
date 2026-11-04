import { Metadata } from "next";

import PageContainer from "@/components/common/page-container";
import SkillsCard from "@/components/skills/skills-card";
import { ResponsiveTabs, TabItem } from "@/components/ui/responsive-tabs";
import { pagesConfig } from "@/config/pages";
import { skills, skillsUnsorted } from "@/config/skills";

export const metadata: Metadata = {
  title: pagesConfig.skills.metadata.title,
  description: pagesConfig.skills.metadata.description,
};

export default function SkillsPage() {
  const qaSkills = skills.filter((s) => s.category === "QA & Testing");
  const backendSkills = skills.filter((s) => s.category === "Backend");
  const frontendToolsSkills = skills.filter(
    (s) => s.category === "Frontend & Tools"
  );

  const tabItems: TabItem[] = [
    {
      value: "all",
      label: "All Skills",
      count: skills.length,
      content: <SkillsCard skills={skills} />,
    },
    {
      value: "qa",
      label: "QA & Test Automation",
      count: qaSkills.length,
      content: <SkillsCard skills={qaSkills} />,
    },
    {
      value: "backend",
      label: "Backend & Databases",
      count: backendSkills.length,
      content: <SkillsCard skills={backendSkills} />,
    },
    {
      value: "frontend-tools",
      label: "Frontend & Tools",
      count: frontendToolsSkills.length,
      content: <SkillsCard skills={frontendToolsSkills} />,
    },
  ];

  return (
    <PageContainer
      title={pagesConfig.skills.title}
      description={pagesConfig.skills.description}
    >
      <ResponsiveTabs items={tabItems} defaultValue="all" />
    </PageContainer>
  );
}
