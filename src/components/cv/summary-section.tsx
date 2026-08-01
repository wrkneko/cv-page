import { section, summary } from "@/content/cv";
import { LedgerSection } from "@/components/layout/ledger-section";

export function SummarySection() {
  return (
    <LedgerSection section={section("summary")}>
      <div className="space-y-4">
        {summary.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="t-body">
            {paragraph}
          </p>
        ))}
      </div>
    </LedgerSection>
  );
}
