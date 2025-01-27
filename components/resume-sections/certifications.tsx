import { Card } from "@/components/ui/card";
import Link from "next/link";
import type { ResumeContent } from "@/app/content/content";

type CertificationsProps = {
  certifications: NonNullable<ResumeContent["certifications"]>;
};

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <section className="space-y-1 print:space-y-0">
      <h2 className="text-lg font-semibold">
        Certifications
      </h2>
      {certifications.map((cert, index) => (
        <Card
          key={`${cert.title}-${index}`}
          className="shadow-none border-0 "
        >
          <div className="flex justify-between items-start mb-1">
            {cert.link && (
              <Link href={cert.link} className="hover:underline">
                <h3>
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.subtitle}</p>
              </Link>
            )}
            {cert.period && (
              <span className="text-sm font-semibold whitespace-nowrap">
                {cert.period}
              </span>
            )}
          </div>
          {cert.achievements && cert.achievements.length > 0 && (
            <ul className="list-disc ml-4 text-sm text-muted-foreground space-y-1">
              {cert.achievements.map((ach, idx) => (
                <li key={idx} className="print:text-xs tracking-tight">
                  {ach}
                </li>
              ))}
            </ul>
          )}
        </Card>
      ))}
    </section>
  );
}
