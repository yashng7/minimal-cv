import { Card } from "@/components/ui/card";
import type { ResumeContent } from "@/app/content/content";
import { Separator } from "../ui/separator";

type ProjectsProps = {
  projects: NonNullable<ResumeContent["projects"]>;
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <section className="space-y-1 print:space-y-0">
        <h2 className="text-lg font-semibold">Project Work</h2>
        {projects.map((project, index) => (
          <Card
            key={`${project.title}-${index}`}
            className="border-0 shadow-none"
          >
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3>{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.role}</p>
              </div>
              {project.period && (
                <span className="font-semibold text-sm whitespace-nowrap">
                  {project.period}
                </span>
              )}
            </div>
            {project.achievements && project.achievements.length > 0 && (
              <ul className={`list-disc ml-4 text-sm text-muted-foreground space-y-1 ${
                index < projects.length - 1 ? "mb-2" : ""
              }`}>
                {project.achievements.map((achievement, idx) => (
                  <li key={idx} className="print:text-xs tracking-tight">
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </section>
      <Separator />
    </>
  );
}
