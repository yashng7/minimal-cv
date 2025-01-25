import { Separator } from "@/components/ui/separator"

type SummaryProps = {
  summary: string
}

export function Summary({ summary }: SummaryProps) {
  return (
    <>
      <section>
        <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-200">Professional Summary</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">{summary}</p>
      </section>
      <Separator />
    </>
  )
}

