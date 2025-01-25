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
      <section>
        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">Technical Skills</h2>
        <div className="flex flex-wrap gap-3 print:gap-2">
          {categories.map((category) => (
            <Card key={category} className="p-3 print:p-0 print:shadow-none print:border-0 flex-1">
              <h3 className="font-medium mb-2 text-gray-800 dark:text-gray-300 text-sm capitalize">
                {String(category).replace("_", " ")}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skills[category].map((skill, index) => (
                  <span
                    key={`${skill}-${index}`}
                    className="px-2 py-0.5 bg-secondary rounded text-xs print:border print:border-gray-200 print:bg-transparent"
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

