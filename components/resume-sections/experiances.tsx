import { Card } from "@/components/ui/card";
import type { ResumeContent } from "@/app/content/content";
import { Separator } from "../ui/separator";

type ExperienceProps = {
  experience: NonNullable<ResumeContent["experience"]>;
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">
          Work Experience
        </h2>
        {experience.map((job, index) => (
          <Card
            key={`${job.company}-${index}`}
            className="p-3 print:p-0 print:shadow-none print:border-0"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-300 text-sm">
                  {job.role}
                </h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
              </div>
              {job.period && (
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {job.period}
                </span>
              )}
            </div>
            {job.achievements && job.achievements.length > 0 && (
              <ul className="list-disc list-outside ml-4 mt-2 text-sm text-muted-foreground space-y-1">
                {job.achievements.map((achievement, idx) => (
                  <li key={idx} className="print:text-xs">
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}
      </section>
      <Separator/>
    </>
  );
}
