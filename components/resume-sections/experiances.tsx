import { Card } from "@/components/ui/card";
import type { ResumeContent } from "@/app/content/content";
import { Separator } from "../ui/separator";

type ExperienceProps = {
  experience: NonNullable<ResumeContent["experience"]>;
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <>
      <section className="space-y-1 print:space-y-0">
        <h2 className="text-lg font-semibold">Work Experience</h2>
        {experience.map((job, index) => (
          <Card
            key={`${job.company}-${index}`}
            className="shadow-none border-none"
          >
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3>{job.role}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
              </div>
              {job.period && (
                <span className="font-semibold text-sm whitespace-nowrap">
                  {job.period}
                </span>
              )}
            </div>
            {job.achievements && job.achievements.length > 0 && (
              <ul
                className={`list-disc ml-4 text-sm text-muted-foreground space-y-1 ${
                  index < experience.length - 1 ? "mb-2" : ""
                }`}
              >
                {job.achievements.map((achievement, idx) => (
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
