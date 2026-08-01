/**
 * Ссылка для клавиатуры: перепрыгнуть шапку и уйти сразу в содержание.
 * Видна только в фокусе.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="absolute top-2 -left-[9999px] z-[100] rounded-sm bg-primary px-3.5 py-2 font-mono text-xs text-primary-foreground no-underline focus:left-4 print:hidden"
    >
      Skip to content
    </a>
  );
}
