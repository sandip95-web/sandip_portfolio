"use client";

import React, { useState } from "react";

import { AnimatedSection } from "@/components/common/animated-section";
import ProjectCard from "@/components/projects/project-card";
import { ProjectInterface } from "@/config/projects";
import { cn } from "@/lib/utils";

interface FeaturedProjectTabsProps {
  projects: ProjectInterface[];
}

export default function FeaturedProjectTabs({
  projects,
}: FeaturedProjectTabsProps) {
  const [filter, setFilter] = useState<"all" | "qa" | "backend">("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "qa") return p.category.includes("QA & Testing");
    if (filter === "backend") return p.category.includes("Backend");
    return true;
  });

  return (
    <div className="w-full space-y-6">
      {/* Category Filter Pills */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 bg-background/80 backdrop-blur-sm border border-border rounded-xl shadow-sm gap-1">
          <button
            onClick={() => setFilter("all")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all",
              filter === "all"
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            All Featured ({projects.length})
          </button>
          <button
            onClick={() => setFilter("qa")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all",
              filter === "qa"
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            QA &amp; Automation
          </button>
          <button
            onClick={() => setFilter("backend")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all",
              filter === "backend"
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Backend Systems
          </button>
        </div>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto w-full items-stretch">
        {filteredProjects.map((project, index) => (
          <AnimatedSection
            key={project.id}
            delay={0.08 * (index + 1)}
            direction="up"
            className="h-full w-full min-w-0"
          >
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}

