"use client";

import type { Section } from "@/content/cv";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

/**
 * Заголовок раздела живёт на полях документа, а не над текстом. Под ключом —
 * короткая фактическая приписка: сколько в разделе ролей, инструментов, лет.
 * Поля несут данные, а не украшение.
 *
 * Квадратный маркер слева краснеет, пока раздел читают.
 */
export function SectionHeading({
  section,
  as: Tag = "h2",
}: {
  section: Section;
  as?: "h2" | "p";
}) {
  const active = useActiveSection() === section.id;

  return (
    <Tag
      id={`${section.id}-key`}
      className="m-0 border-b border-rule-2 pb-3 ledger:border-b-0 ledger:pb-0"
    >
      <span className="flex items-center gap-[9px] font-mono text-xs font-medium tracking-[0.1em] uppercase">
        <span
          aria-hidden
          className={cn(
            "size-1.5 shrink-0 transition-colors print:hidden",
            active ? "bg-primary" : "bg-border",
          )}
        />
        {section.key}
      </span>
      <span className="ml-3 inline font-mono text-[11px] tracking-[0.02em] text-muted-foreground ledger:mt-[7px] ledger:ml-0 ledger:block ledger:pl-[15px]">
        {section.note}
      </span>
    </Tag>
  );
}
