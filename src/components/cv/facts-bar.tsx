import { facts } from "@/content/cv";
import { Badge } from "@/components/ui/badge";

/**
 * Паспорт документа: то, что обычно ищут первым делом — статус, город, стаж,
 * дата ревизии. Настоящий <dl>, а не сетка из <div>.
 */
export function FactsBar() {
  return (
    <dl
      aria-label="At a glance"
      className="flex flex-wrap border-b border-border"
    >
      {facts.map((fact) => (
        <div
          key={fact.key}
          className="flex items-center gap-2 border-rule-2 py-2 pr-3.5 ledger:border-r ledger:px-4.5 ledger:last:border-r-0 ledger:first:pl-0"
        >
          <dt className="font-mono text-[10px] font-medium tracking-[0.08em] whitespace-nowrap text-muted-foreground uppercase">
            {fact.key}
          </dt>
          <dd className="m-0 font-mono text-[11px] font-medium tracking-[0.05em]">
            {fact.tone === "pass" ? (
              <Badge
                variant="outline"
                className="h-5 gap-1.5 rounded-sm border-pass-rule px-[7px] font-mono text-[10px] font-medium tracking-[0.09em] text-pass uppercase"
              >
                <span
                  aria-hidden
                  className="size-[5px] shrink-0 rounded-full bg-current"
                />
                {fact.value}
              </Badge>
            ) : (
              fact.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
