import type { ComponentProps, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Прямоугольная, в mono, с волосяной рамкой. Подпись говорит, что произойдёт
 * при нажатии.
 *
 * Метрика бланка (38px, mono 13px, радиус почти нулевой) задана один раз
 * здесь, а поведение, фокус и `asChild` достаются от shadcn Button.
 */
export function ActionButton({
  primary,
  className,
  children,
  ...props
}: ComponentProps<"a"> & { primary?: boolean }) {
  return (
    <Button
      asChild
      variant={primary ? "default" : "outline"}
      className={cn(
        "h-[38px] rounded-sm px-4 font-mono text-[13px] font-medium tracking-[0.01em] no-underline",
        primary
          ? "hover:bg-primary-hover"
          : "border-border bg-transparent hover:border-muted-foreground hover:bg-transparent",
        className,
      )}
    >
      <a {...props}>{children}</a>
    </Button>
  );
}

/** Группа действий: переносится по строкам, на мобильном тянется на всю ширину. */
export function ButtonGroup({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-2.5 [&>*]:max-sm:flex-1 print:hidden",
        className,
      )}
    >
      {children}
    </div>
  );
}
