"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * next-themes сам вставляет синхронный скрипт до первой отрисовки — тот же
 * приём, что стоял руками в <head> статической версии, только теперь он ещё
 * и умеет третье состояние: «следовать за системой». Выбор пишется в
 * localStorage; обращения к нему завёрнуты внутри библиотеки, поэтому
 * приватный режим Safari ничего не роняет.
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
