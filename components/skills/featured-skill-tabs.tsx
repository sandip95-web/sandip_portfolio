"use client";

import React, { useState } from "react";

import SkillsCard from "@/components/skills/skills-card";
import { featuredSkills, skills, skillsInterface } from "@/config/skills";
import { cn } from "@/lib/utils";

export default function FeaturedSkillTabs() {
  const [activeTab, setActiveTab] = useState<
    "featured" | "qa" | "backend" | "all"
  >("featured");

  const qaSkills = skills.filter((s) => s.category === "QA & Testing");
  const backendSkills = skills.filter((s) => s.category === "Backend");

  let displayedSkills: skillsInterface[] = featuredSkills;
  if (activeTab === "qa") {
    displayedSkills = qaSkills;
  } else if (activeTab === "backend") {
    displayedSkills = backendSkills;
  } else if (activeTab === "all") {
    displayedSkills = skills;
  }

  return (
    <div className="w-full space-y-6">
      {/* Category Filter Pills */}
      <div className="flex justify-center">
        <div className="inline-flex p-1 bg-muted/80 backdrop-blur-sm border border-border rounded-xl shadow-sm gap-1 flex-wrap justify-center">
          <button
            onClick={() => setActiveTab("featured")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all",
              activeTab === "featured"
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Core Highlights
          </button>
          <button
            onClick={() => setActiveTab("qa")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all",
              activeTab === "qa"
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            QA &amp; Automation ({qaSkills.length})
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all",
              activeTab === "backend"
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Backend &amp; DB ({backendSkills.length})
          </button>
          <button
            onClick={() => setActiveTab("all")}
            className={cn(
              "px-4 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all",
              activeTab === "all"
                ? "bg-primary text-primary-foreground shadow"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            All Skills ({skills.length})
          </button>
        </div>
      </div>

      {/* Skills Grid */}
      <SkillsCard skills={displayedSkills} />
    </div>
  );
}

