import { Card } from "@/components/ui/card";
import type { ResumeContent } from "@/app/content/content";
import { Separator } from "../ui/separator";

type EducationProps = {
  education: NonNullable<ResumeContent["education"]>;
};

export function Education({ education }: EducationProps) {
  return (
    <>
      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
          Education
        </h2>
        {education.map((edu, index) => (
          <Card
            key={`${edu.degree}-${index}`}
            className="p-3 print:p-0 print:shadow-none print:border-0"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-300 text-sm">
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
              </div>
              {edu.period && (
                <span className="text-sm text-muted-foreground whitespace-nowrap">
                  {edu.period}
                </span>
              )}
            </div>
            {edu.description && edu.description.length > 0 && (
              <ul className="list-disc list-outside ml-4 mt-2 text-sm text-muted-foreground space-y-1">
                {edu.description.map((desc, idx) => (
                  <li key={idx} className="print:text-xs">
                    {desc}
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
