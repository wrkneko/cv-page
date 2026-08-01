import type { ReactNode } from "react";

import type { Section } from "@/content/cv";
import { SectionHeading } from "./section-heading";

/**
 * Каркас всей страницы: одна сетка «поля документа + текст». Слева всегда
 * метаданные, справа всегда содержание. Читатель узнаёт правило один раз и
 * дальше не тратит на него внимание — поэтому надзаголовков-eyebrow нигде нет.
 *
 * Ключ раздела прилипает к верху, пока раздел в кадре: на длинной истории
 * работы всегда видно, что именно ты читаешь.
 */
export function LedgerSection({
  section,
  as,
  children,
}: {
  section: Section;
  as?: "h2" | "p";
  children: ReactNode;
}) {
  return (
    <section
      id={section.id}
      aria-labelledby={`${section.id}-key`}
      className="grid gap-x-[var(--rail-gap)] border-t border-border py-9 first:border-t-0 ledger:grid-cols-[var(--rail)_1fr] ledger:py-14 print:break-inside-auto print:py-[9pt]"
    >
      <div className="mb-5 ledger:mb-0">
        <div className="ledger:sticky ledger:top-[calc(var(--header-h)+32px)] print:static">
          <SectionHeading section={section} as={as} />
        </div>
      </div>

      <div className="min-w-0">{children}</div>
    </section>
  );
}
