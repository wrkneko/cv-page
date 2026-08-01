"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * В статической версии кнопка умела только «светлая ↔ тёмная»: как только
 * человек нажимал её один раз, вернуться к системной настройке было уже
 * нельзя. Меню на три пункта чинит это, а на экране прибавляет ровно одну
 * иконку.
 *
 * Какая иконка видна, решает CSS по классу `.dark` на <html> — тот же приём,
 * что и в версии без сборки. Состояния в React для этого нет намеренно: иначе
 * до гидратации иконка не совпала бы с уже отрисованной темой.
 */
const OPTIONS = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon-sm"
          aria-label="Theme"
          className="rounded-sm border-border bg-transparent text-muted-foreground hover:border-muted-foreground hover:bg-transparent hover:text-foreground print:hidden"
        >
          <Sun className="size-[15px] dark:hidden" />
          <Moon className="hidden size-[15px] dark:block" />
        </Button>
      </DropdownMenuTrigger>

      {/* Меню рисуется только в открытом виде, уже на клиенте — здесь
          сравнение с текущим выбором безопасно. */}
      <DropdownMenuContent align="end" className="min-w-36 rounded-sm font-mono">
        {OPTIONS.map(({ value, label, Icon }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => setTheme(value)}
            data-current={theme === value}
            className="gap-2 rounded-sm text-xs data-[current=true]:text-primary"
          >
            <Icon className="size-3.5" />
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
