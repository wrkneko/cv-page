import type { Entry } from "@/content/cv";
import { TextLink } from "@/components/text-link";

/**
 * Пары «ключ — значение»: реквизиты, языки, образование, контакты.
 * Выноска между ключом и значением — не декор, она ведёт глаз через пустое
 * место к значению, как в оглавлении печатной книги.
 */
export function DataList({ entries }: { entries: Entry[] }) {
  return (
    <dl className="m-0">
      {entries.map((entry) => (
        <div
          key={entry.key}
          className="flex items-start gap-3 border-t border-rule-2 py-2.5 first:border-t-0 first:pt-0"
        >
          <dt className="mt-[3px] font-mono text-[11px] font-medium tracking-[0.08em] whitespace-nowrap text-muted-foreground uppercase">
            {entry.key}
          </dt>
          <span aria-hidden className="dl-leader" />
          <dd className="m-0 text-right text-[15px] leading-snug">
            {entry.href ? (
              <TextLink
                href={entry.href}
                external={entry.external}
                className="no-underline"
              >
                {entry.value}
              </TextLink>
            ) : (
              entry.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
