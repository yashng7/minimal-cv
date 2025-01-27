import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { ResumeContent } from "@/app/content/content"

type SkillsProps = {
  skills: ResumeContent["skills"]
  categories: Array<keyof ResumeContent["skills"]>
}

export function Skills({ skills, categories }: SkillsProps) {
  return (
    <>
      <section className="space-y-1 print:space-y-0">
        <h2 className="text-lg font-semibold">Technical Skills</h2>
        <div className="flex flex-wrap gap-3 print:gap-2">
          {categories.map((category) => (
            <Card key={category} className="shadow-none flex-1 rounded-none p-2 space-y-2">
              <h3 className="capitalize">
                {String(category).replace("_", " ")}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills[category].map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="px-2 py-0.5 bg-secondary text-xs print:bg-transparent print:border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>
      <Separator />
    </>
  )
}

