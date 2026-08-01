import Link from "next/link";

import { profile } from "@/content/cv";

/** Выходные данные документа: кто, что это и чем собрано. */
export function SiteFooter() {
  return (
    <footer className="flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-border pt-5 pb-10 font-mono text-[11px] tracking-[0.04em] text-muted-foreground">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
    </footer>
  );
}
