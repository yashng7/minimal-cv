import { Card } from "@/components/ui/card"
import Link from "next/link"
import type { ResumeContent } from "@/app/content/content"

type CertificationsProps = {
  certifications: NonNullable<ResumeContent["certifications"]>
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <section className="space-y-2">
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">Certifications</h2>
      {certifications.map((cert, index) => (
        <Card key={`${cert.title}-${index}`} className="p-3 print:p-0 print:shadow-none print:border-0 ">
          <div className="flex justify-between items-start">
            <Link href={cert.link} className="hover:underline">
              <h3 className="font-semibold text-gray-800 dark:text-gray-300 text-sm">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
            </Link>
            {cert.period && <span className="text-sm text-muted-foreground whitespace-nowrap">{cert.period}</span>}
          </div>
          {cert.achievements && cert.achievements.length > 0 && (
            <ul className="list-disc list-outside ml-4 mt-2 text-sm text-muted-foreground space-y-1">
              {cert.achievements.map((ach, idx) => (
                <li key={idx} className="print:text-xs">
                  {ach}
                </li>
              ))}
            </ul>
          )}
        </Card>
      ))}
    </section>
  )
}
