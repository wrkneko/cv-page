import { section, stack } from "@/content/cv";
import { LedgerSection } from "@/components/layout/ledger-section";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableRow,
} from "@/components/ui/table";

/**
 * Стек — это матрица «область → инструменты», а не облако тегов. Таблица
 * отвечает на вопрос, который на самом деле задают: чем человек закрывает
 * автоматизацию, чем инфраструктуру, чем наблюдаемость.
 *
 * Настоящая <table> с <th scope="row">, а не сетка из <div>: на мобильном
 * строки раскладываются в блоки, но структура для скринридера не меняется.
 */
export function StackSection() {
  return (
    <LedgerSection section={section("stack")}>
      <Table className="text-[15px]">
        <TableCaption className="sr-only">Tools by area</TableCaption>
        <TableBody className="max-sm:block [&>tr:first-child>*]:pt-0">
          {stack.map((row) => (
            <TableRow
              key={row.area}
              className="border-t border-rule-2 first:border-t-0 hover:bg-transparent max-sm:block max-sm:border-t max-sm:first:border-t-0"
            >
              <TableHead
                scope="row"
                className="h-auto w-px py-4 pr-7 pl-0 align-top font-mono text-[11px] font-medium tracking-[0.08em] text-muted-foreground uppercase max-sm:block max-sm:w-auto max-sm:pt-4.5 max-sm:pb-2"
              >
                {row.area}
              </TableHead>
              <TableCell className="px-0 py-3.5 align-top whitespace-normal max-sm:block max-sm:pt-0">
                <div className="flex flex-wrap gap-1.5">
                  {row.tools.map((tool) => (
                    <Badge
                      key={tool}
                      variant="outline"
                      className="h-auto rounded-sm border-rule-2 bg-card px-2 py-[3px] font-mono text-xs font-normal text-ink-2"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </LedgerSection>
  );
}
