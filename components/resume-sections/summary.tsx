import { Separator } from "@/components/ui/separator"

type SummaryProps = {
  summary: string
}

export function Summary({ summary }: SummaryProps) {
  return (
    <>
      <section className="space-y-1 print:space-y-0">
        <h2 className="font-semibold text-lg">Professional Summary</h2>
        <p className="text-muted-foreground text-sm tracking-tight">{summary}</p>
      </section>
      <Separator />
    </>
  )
}

