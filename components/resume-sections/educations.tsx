import { Card } from "@/components/ui/card";
import type { ResumeContent } from "@/app/content/content";
import { Separator } from "../ui/separator";

type EducationProps = {
  education: NonNullable<ResumeContent["education"]>;
};

export function Education({ education }: EducationProps) {
  return (
    <>
      <section className="space-y-1 print:space-y-0">
        <h2 className="text-lg font-semibold">
          Education
        </h2>
        {education.map((edu, index) => (
          <Card
            key={`${edu.degree}-${index}`}
            className="shadow-none border-0"
          >
            <div className="flex justify-between items-start mb-1">
              <div>
                <h3>
                  {edu.degree}
                </h3>
                <p className="text-sm text-muted-foreground">{edu.school}</p>
              </div>
              {edu.period && (
                <span className="font-semibold text-sm whitespace-nowrap">
                  {edu.period}
                </span>
              )}
            </div>
            {edu.description && edu.description.length > 0 && (
              <ul className="list-disc ml-4 text-sm text-muted-foreground space-y-1">
                {edu.description.map((desc, idx) => (
                  <li key={idx} className="print:text-xs tracking-tight">
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
