"use client";

import { Award, BookOpen, Calendar, GraduationCap } from "lucide-react";
import React from "react";

import {
  AchievementInterface,
  EducationInterface,
  achievementsList,
  educationList,
} from "@/config/education";

export const EducationSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
      {/* Education Column */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-6 h-6 text-primary" />
          <h3 className="font-heading text-xl font-bold">Formal Education</h3>
        </div>
        <div className="space-y-4">
          {educationList.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-5 transition-all hover:shadow-md"
            >
              <div className="flex justify-between items-start gap-2">
                <h4 className="font-bold text-base text-foreground">
                  {item.degree}
                </h4>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary shrink-0">
                  {item.year}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {item.institution}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-primary">
                <span>Score: {item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Achievements Column */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-6 h-6 text-primary" />
          <h3 className="font-heading text-xl font-bold">
            Certifications & Achievements
          </h3>
        </div>
        <div className="space-y-4">
          {achievementsList.map((item, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-5 transition-all hover:shadow-md"
            >
              <div className="flex justify-between items-start gap-2">
                <h4 className="font-bold text-base text-foreground">
                  {item.title}
                </h4>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground shrink-0">
                  {item.year}
                </span>
              </div>
              <p className="text-xs font-medium text-primary mt-1">
                {item.issuer}
              </p>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
