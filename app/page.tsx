"use client";
import { useRef } from "react";
import {
  Github,
  Mail,
  Linkedin,
  MapPin,
  Calendar,
  Building2,
  Printer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useReactToPrint } from "react-to-print";
import { resumeContent } from "./content";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";

export default function Portfolio() {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef,
  });

  // Get all skill categories dynamically
  const skillCategories = Object.keys(resumeContent.skills) as Array<
    keyof typeof resumeContent.skills
  >;

  return (
    <main className="min-h-screen bg-background p-4 md:p-8 print:p-0 print:bg-white">
      <div className="max-w-[8.5in] mx-auto">
        {/* Actions */}
        <div className="flex justify-end gap-3 mb-6 print:hidden">
          <Button variant="outline" onClick={() => handlePrint()}>
            <Printer className="h-4 w-4 mr-2" /> Print
          </Button>
          <ModeToggle />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="space-y-4 border p-6 rounded-lg shadow-sm print:shadow-none print:p-0 print:border-0"
        >
          {/* Header */}
          <header className="print:pb-2">
            <div className="flex items-start gap-4">
              {resumeContent.profile.image && (
                <img
                  src={resumeContent.profile.image}
                  alt={resumeContent.profile.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-primary/20 print:w-20 print:h-20 bg-white self-center grayscale hover:grayscale-0"
                />
              )}
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200 print:text-xl">
                  {resumeContent.profile.name}
                </h1>
                <p className="text-lg text-muted-foreground mt-1 print:text-base">
                  {resumeContent.profile.title}
                </p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                  {resumeContent.profile.location && (
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />{" "}
                      {resumeContent.profile.location}
                    </span>
                  )}
                  {resumeContent.profile.email && (
                    <span className="flex items-center gap-1">
                      <Mail className="h-4 w-4" /> {resumeContent.profile.email}
                    </span>
                  )}
                  {resumeContent.profile.phone && (
                    <span className="flex items-center gap-1">
                      <Mail className="h-4 w-4" /> {resumeContent.profile.phone}
                    </span>
                  )}
                </div>
                <div className="flex gap-3 mt-2 print:hidden">
                  {resumeContent.profile.links?.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={resumeContent.profile.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" /> GitHub
                      </a>
                    </Button>
                  )}
                  {resumeContent.profile.links?.linkedin && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={resumeContent.profile.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </header>

          <Separator />

          {/* Summary */}
          {resumeContent.summary && (
            <>
              <section className="print:pb-2">
                <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">
                  Professional Summary
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {resumeContent.summary}
                </p>
              </section>
              <Separator />
            </>
          )}

          {/* Experience */}
          {resumeContent.experience?.length > 0 && (
            <>
              <section className="print:pb-2">
                <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">
                  Work Experience
                </h2>
                <div className="space-y-3">
                  {resumeContent.experience.map((job, index) => (
                    <div
                      key={`${job.company}-${index}`}
                      className="print:page-break-inside-avoid"
                    >
                      <Card className="p-3 print:p-0 print:shadow-none print:border-0">
                        <div className="flex justify-between items-start gap-2">
                          <div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-300 print:text-sm">
                              {job.role}
                            </h3>
                            <p className="text-sm text-muted-foreground flex items-center gap-1">
                              <Building2 className="h-3 w-3" /> {job.company}
                            </p>
                          </div>
                          {job.period && (
                            <span className="text-sm text-muted-foreground flex items-center gap-1 whitespace-nowrap">
                              <Calendar className="h-3 w-3" /> {job.period}
                            </span>
                          )}
                        </div>
                        {job.achievements?.length > 0 && (
                          <ul className="list-disc list-outside ml-4 mt-2 text-sm text-muted-foreground space-y-1">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx} className="print:text-xs">
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        )}
                      </Card>
                    </div>
                  ))}
                </div>
              </section>
              <Separator />
            </>
          )}

          {/* Skills */}
          {skillCategories.length > 0 && (
            <>
              <section className="print:pb-2">
                <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">
                  Technical Skills
                </h2>
                <div className="flex flex-wrap gap-3 print:gap-2">
                  {skillCategories.map((category) => (
                    <>
                      <Card
                        key={category}
                        className="p-3 print:p-0 print:shadow-none print:border-0 flex-1"
                      >
                        <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-300 text-sm capitalize">
                          {category.replace("_", " ")}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                          {resumeContent.skills[category].map(
                            (skill, index) => (
                              <span
                                key={`${skill}-${index}`}
                                className="px-2 py-0.5 bg-secondary rounded text-xs print:border print:border-gray-200 print:bg-transparent"
                              >
                                {skill}
                              </span>
                            )
                          )}
                        </div>
                      </Card>
                    </>
                  ))}
                </div>
              </section>
              <Separator />
            </>
          )}

          {/* Education */}
          {resumeContent.education && (
            <>
              <section className="print:pb-2">
                <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">
                  Education
                </h2>
                <Card className="p-3 print:p-0 print:shadow-none print:border-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-gray-300 text-sm">
                        {resumeContent.education.degree}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {resumeContent.education.school}
                      </p>
                    </div>
                    {resumeContent.education.period && (
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {resumeContent.education.period}
                      </span>
                    )}
                  </div>
                </Card>
              </section>
              <Separator />
            </>
          )}

          {/* Certifications */}
          {resumeContent.certifications?.length > 0 && (
            <section className="space-y-3 print:pb-2">
              <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">
                Certifications
              </h2>
              {resumeContent.certifications.map((cert, index) => (
                <div
                  key={`${cert.title}-${index}`}
                  className="p-3 print:p-0 print:shadow-none print:border-0"
                >
                  <div className="flex justify-between items-start">
                    <Link href={cert.link} className="hover:underline">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-300 text-sm">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {cert.subtitle}
                      </p>
                    </Link>
                    {cert.period && (
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {cert.period}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </main>
  );
}
