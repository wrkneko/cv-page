import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

import { profile } from "@/content/cv";
import { TextLink } from "@/components/text-link";
import { ActionButton, ButtonGroup } from "@/components/cv/action-button";
import { DataList } from "@/components/cv/data-list";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: `Components · ${profile.name}`,
  description:
    "Component reference for the CV site: shadcn/ui primitives as they are dressed for this layout.",
  robots: { index: false },
};

/**
 * Справочник по набору. В версии без сборки это был отдельный HTML-файл,
 * который приходилось править параллельно с index.html. Здесь он импортирует
 * ровно те же компоненты, что и резюме, — разъехаться с ним нечему.
 */

/** Что было своим CSS-компонентом и чем оно стало. */
const MAP: { component: string; source: string; where: string }[] = [
  { component: "Button", source: "shadcn/ui", where: "действия" },
  { component: "Badge", source: "shadcn/ui", where: "статусы и инструменты" },
  { component: "Card", source: "shadcn/ui", where: "запись о работе" },
  { component: "Table", source: "shadcn/ui", where: "стек: область → инструменты" },
  { component: "Avatar", source: "shadcn/ui", where: "фото, фолбэк на инициалы" },
  { component: "DropdownMenu", source: "shadcn/ui", where: "выбор темы" },
  { component: "Separator", source: "shadcn/ui", where: "разделители в справочнике" },
  { component: "Tooltip", source: "shadcn/ui", where: "зарезервирован" },
  { component: "TextLink", source: "свой", where: "ссылки, метка внешней" },
  { component: "DataList", source: "свой", where: "реквизиты, языки, контакты" },
  { component: "LedgerSection", source: "свой", where: "сетка «поля + текст»" },
  { component: "SectionHeading", source: "свой", where: "ключ раздела на полях" },
];

function Row({ title, note, children }: {
  title: string;
  note: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-x-[var(--rail-gap)] border-t border-border py-9 ledger:grid-cols-[var(--rail)_1fr] ledger:py-12">
      <div className="mb-5 ledger:mb-0">
        <h2 className="m-0 font-mono text-xs font-medium tracking-[0.1em] uppercase">
          {title}
        </h2>
        <p className="mt-[7px] font-mono text-[11px] text-muted-foreground">
          {note}
        </p>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

export default function ComponentsPage() {
  return (
    <main id="main" className="pb-4">
      <div className="py-9 ledger:py-14">
        <p className="t-label">Reference</p>
        <h1 className="mt-3 font-serif text-4xl leading-none">
          Components<span className="text-primary">.</span>
        </h1>
        <p className="t-body mt-4">
          Набор, из которого собрано резюме. Примитивы взяты из shadcn/ui и
          одеты в токены бланка: прямоугольные, в моноширинном, с волосяной
          рамкой. Ниже — живые экземпляры, не скриншоты.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground underline decoration-border underline-offset-[3px] transition-colors hover:text-primary hover:decoration-primary"
        >
          <ArrowLeft className="size-3.5" />
          back to CV
        </Link>
      </div>

      <Row title="button" note="shadcn/ui · ActionButton">
        <ButtonGroup>
          <ActionButton primary href="#">
            Primary
            <Download className="size-[13px]" />
          </ActionButton>
          <ActionButton href="#">Default</ActionButton>
        </ButtonGroup>
        <Separator className="my-6" />
        <div className="flex flex-wrap items-center gap-2.5">
          <Button size="sm">default</Button>
          <Button size="sm" variant="outline">
            outline
          </Button>
          <Button size="sm" variant="ghost">
            ghost
          </Button>
          <Button size="sm" variant="secondary">
            secondary
          </Button>
        </div>
      </Row>

      <Row title="badge" note="shadcn/ui · статус и тег">
        <div className="flex flex-wrap items-center gap-2.5">
          <Badge
            variant="outline"
            className="h-5 gap-1.5 rounded-sm border-pass-rule px-[7px] font-mono text-[10px] tracking-[0.09em] text-pass uppercase"
          >
            <span aria-hidden className="size-[5px] rounded-full bg-current" />
            open to roles
          </Badge>
          <Badge
            variant="outline"
            className="rounded-sm border-primary px-[7px] font-mono text-[10px] tracking-[0.09em] text-primary uppercase"
          >
            current
          </Badge>
          <Badge
            variant="outline"
            className="rounded-sm px-[7px] font-mono text-[10px] tracking-[0.09em] text-muted-foreground uppercase"
          >
            contract
          </Badge>
          <Badge
            variant="outline"
            className="h-auto rounded-sm border-rule-2 bg-card px-2 py-[3px] font-mono text-xs font-normal text-ink-2"
          >
            Playwright
          </Badge>
        </div>
      </Row>

      <Row title="avatar" note="shadcn/ui · квадрат, фолбэк на инициалы">
        <div className="flex items-end gap-4">
          <Avatar className="size-26 rounded-sm bg-card after:rounded-sm">
            <AvatarImage src={profile.photo} alt="" className="rounded-sm" />
            <AvatarFallback className="rounded-sm font-mono text-[26px]">
              {profile.initials}
            </AvatarFallback>
          </Avatar>
          <Avatar className="size-10 rounded-sm bg-card after:rounded-sm">
            <AvatarFallback className="rounded-sm font-mono text-sm">
              {profile.initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </Row>

      <Row title="link" note="свой · внешняя со стрелкой">
        <p className="t-body">
          Обычная <TextLink href="#">внутренняя ссылка</TextLink>, внешняя{" "}
          <TextLink href="https://example.com" external>
            уводит со страницы
          </TextLink>
          , и моноширинная{" "}
          <TextLink href="https://example.com" external mono>
            example.com
          </TextLink>
          .
        </p>
      </Row>

      <Row title="data list" note="свой · пары с выноской">
        <DataList
          entries={[
            { key: "English", value: "C1" },
            { key: "Email", value: profile.email, href: `mailto:${profile.email}` },
          ]}
        />
      </Row>

      <Row title="table" note="shadcn/ui · матрица">
        <Table className="text-[15px]">
          <TableBody className="[&>tr:first-child>*]:pt-0">
            {MAP.slice(0, 4).map((item) => (
              <TableRow
                key={item.component}
                className="border-t border-rule-2 first:border-t-0 hover:bg-transparent"
              >
                <TableHead
                  scope="row"
                  className="h-auto w-px py-3 pr-7 pl-0 align-top font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase"
                >
                  {item.component}
                </TableHead>
                <TableCell className="px-0 py-3 align-top text-ink-2 whitespace-normal">
                  {item.where}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Row>

      <Row title="inventory" note={`${MAP.length} компонентов`}>
        <Table className="text-[15px]">
          <TableBody className="[&>tr:first-child>*]:pt-0">
            {MAP.map((item) => (
              <TableRow
                key={item.component}
                className="border-t border-rule-2 first:border-t-0 hover:bg-transparent"
              >
                <TableHead
                  scope="row"
                  className="h-auto w-px py-2.5 pr-7 pl-0 align-top font-mono text-[11px] tracking-[0.08em] text-muted-foreground uppercase"
                >
                  {item.component}
                </TableHead>
                <TableCell className="px-0 py-2.5 align-top whitespace-normal">
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.source}
                  </span>
                </TableCell>
                <TableCell className="px-0 py-2.5 text-right align-top text-ink-2 whitespace-normal">
                  {item.where}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Row>
    </main>
  );
}
