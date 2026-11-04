"use client";

import {
  Award,
  Building,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  UserCheck,
} from "lucide-react";
import React from "react";

import {
  achievementsList,
  educationList,
  languagesList,
  referencesList,
} from "@/config/education";

export const EducationSection: React.FC = () => {
  return (
    <div className="space-y-10 w-full">
      {/* Top Grid: Education & Certifications */}
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
              Certifications &amp; Achievements
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

      {/* Bottom Grid: Mentor References & Languages */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full pt-2">
        {/* Professional & Mentor References (Spans 2 columns on lg) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <UserCheck className="w-6 h-6 text-primary" />
            <h3 className="font-heading text-xl font-bold">
              Professional &amp; Mentor References
            </h3>
          </div>
          <p className="text-xs text-muted-foreground -mt-2">
            Industry mentor reference from the TechAxis Software QA Training program.
          </p>

          <div className="space-y-4">
            {referencesList.map((ref, index) => (
              <div
                key={index}
                className="rounded-xl border bg-card/80 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-md border-primary/20"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-lg text-foreground flex items-center gap-2">
                      {ref.name}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Verified QA Mentor
                      </span>
                    </h4>
                    <p className="text-sm font-medium text-primary mt-0.5 flex items-center gap-1.5">
                      <Building className="w-4 h-4" />
                      {ref.role} — {ref.company}
                    </p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded-md self-start sm:self-auto font-medium">
                    {ref.location}
                  </span>
                </div>

                <div className="inline-block mt-2 px-2.5 py-1 rounded bg-secondary/80 text-[11px] font-medium text-secondary-foreground">
                  {ref.relationship}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                  {ref.description}
                </p>

                <div className="mt-4 pt-4 border-t border-border flex flex-wrap items-center gap-4 text-xs font-medium">
                  <a
                    href={`tel:${ref.phone}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{ref.phone}</span>
                  </a>
                  <a
                    href={`mailto:${ref.email}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>{ref.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages (Spans 1 column on lg) */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Globe className="w-6 h-6 text-primary" />
            <h3 className="font-heading text-xl font-bold">Languages</h3>
          </div>
          <p className="text-xs text-muted-foreground -mt-2">
            Communication proficiency across languages.
          </p>

          <div className="space-y-3">
            {languagesList.map((lang, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-4 transition-all hover:shadow-sm flex items-center justify-between"
              >
                <span className="font-semibold text-sm text-foreground">
                  {lang.language}
                </span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  {lang.proficiency}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
