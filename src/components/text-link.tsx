import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

/**
 * Ссылка подчёркнута всегда: цвет один, и на нём одном её не отличить.
 * Внешние помечены стрелкой — понятно, что уводит со страницы, и `rel` с
 * `target` проставляются здесь же, чтобы их нельзя было забыть.
 */
export function TextLink({
  external,
  mono,
  className,
  children,
  ...props
}: ComponentProps<"a"> & { external?: boolean; mono?: boolean }) {
  return (
    <a
      {...props}
      {...(external ? { target: "_blank", rel: "noopener" } : null)}
      className={cn(
        "underline decoration-border underline-offset-[3px] transition-colors hover:text-primary hover:decoration-primary",
        mono && "font-mono text-xs text-muted-foreground",
        className,
      )}
    >
      {children}
      {external ? (
        <span aria-hidden className="ml-[3px] text-[0.85em] text-muted-foreground">
          ↗
        </span>
      ) : null}
    </a>
  );
}
