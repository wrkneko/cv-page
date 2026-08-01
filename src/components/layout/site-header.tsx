"use client";

import { profile, sections } from "@/content/cv";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";

/**
 * Липкая шапка высотой в одну строку. Без размытия и тени: у страницы есть
 * край, и этот край — волосяная линейка, как в бланке.
 *
 * На узких экранах шапка ужимается до монограммы: имя всё равно стоит первой
 * строкой на самой странице, дублировать его негде и незачем.
 */
export function SiteHeader() {
  const active = useActiveSection();
  const nav = sections.filter((section) => section.inNav);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background print:hidden">
      <div className="mx-auto flex h-[var(--header-h)] max-w-[var(--page-max)] items-center gap-3 px-[var(--page-pad)] nav:gap-6">
        <a href="#top" className="mr-auto flex items-center gap-2.5 no-underline">
          <span
            aria-hidden
            className="grid size-[22px] place-items-center rounded-sm bg-primary font-mono text-[11px] font-semibold tracking-[0.02em] text-primary-foreground"
          >
            {profile.initials}
          </span>
          <span className="hidden font-mono text-xs font-medium tracking-[0.02em] whitespace-nowrap nav:inline">
            {profile.name}
          </span>
          <span className="hidden font-mono text-xs whitespace-nowrap text-muted-foreground id:inline">
            {profile.shortRole}
          </span>
        </a>

        <nav aria-label="Sections" className="flex gap-3 nav:gap-5">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "relative py-1 font-mono text-[11px] no-underline transition-colors nav:text-xs",
                "after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-primary after:opacity-0",
                active === item.id
                  ? "text-foreground after:opacity-100"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.key}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
