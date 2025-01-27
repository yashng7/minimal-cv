"use client";
import { useRef, useMemo } from "react";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReactToPrint } from "react-to-print";
import { ResumeContent, resumeContent } from "./content/content";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Certifications } from "@/components/resume-sections/certifications";
import { Header } from "@/components/resume-sections/header";
import { Summary } from "@/components/resume-sections/summary";
import { Experience } from "@/components/resume-sections/experiances";
import { Projects } from "@/components/resume-sections/projects";
import { Skills } from "@/components/resume-sections/skills";
import { Education } from "@/components/resume-sections/educations";

export default function Portfolio() {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef
  });

  const skillCategories = useMemo(
    () =>
      Object.keys(resumeContent.skills) as Array<keyof ResumeContent["skills"]>,
    []
  );

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 print:p-0 print:bg-white">
      <div className="max-w-[8.5in] mx-auto">
        {/* Actions */}
        <div className="flex justify-end gap-3 mb-6 print:hidden">
          <Button variant="outline" onClick={() => handlePrint()} className="rounded-none">
            <Printer className="h-4 w-4 mr-2" /> Print
          </Button>
          <ModeToggle />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="flex flex-col gap-2 border p-4 print:shadow-none print:p-0 print:border-0"
        >
          <Header profile={resumeContent.profile} />
          {resumeContent.summary && <Summary summary={resumeContent.summary} />}
          {resumeContent.experience && (
            <Experience experience={resumeContent.experience} />
          )}
          {resumeContent.projects && (
            <Projects projects={resumeContent.projects} />
          )}
          {skillCategories.length > 0 && (
            <Skills
              skills={resumeContent.skills}
              categories={skillCategories}
            />
          )}
          {resumeContent.education && (
            <Education education={resumeContent.education} />
          )}
          {resumeContent.certifications && (
            <Certifications certifications={resumeContent.certifications} />
          )}
        </div>
      </div>
    </main>
  );
}
