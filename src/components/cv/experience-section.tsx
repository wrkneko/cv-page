import { roles, section, type Role } from "@/content/cv";
import { LedgerSection } from "@/components/layout/ledger-section";
import { TextLink } from "@/components/text-link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Запись о работе — не карточка с тенью, а строка реестра: волосяная линейка
 * сверху, должность, организация, период и место, дальше список того, за что
 * человек отвечал. Card из shadcn даёт слоты и семантику, оформление снято
 * до бланка: ни рамки, ни фона, ни радиуса.
 */
function JobEntry({ role }: { role: Role }) {
  const current = role.to === null;

  return (
    <li className="border-t border-rule-2 first:border-t-0 print:break-inside-avoid">
      <Card className="gap-0 rounded-none bg-transparent py-6.5 text-inherit ring-0 [--card-spacing:0px] print:py-[9pt]">
        <CardHeader className="gap-0">
          <CardTitle className="flex flex-wrap items-center gap-2.5 font-sans text-base leading-normal font-normal sm:text-[18px]">
            <span className="font-semibold tracking-[-0.01em]">{role.title}</span>
            <span className="text-ink-2 sm:before:mr-2.5 sm:before:text-muted-foreground sm:before:content-['·']">
              {role.org}
            </span>
            {current ? (
              <Badge
                variant="outline"
                className="rounded-sm border-primary px-[7px] font-mono text-[10px] font-medium tracking-[0.09em] text-primary uppercase"
              >
                current
              </Badge>
            ) : null}
            {role.kind ? (
              <Badge
                variant="outline"
                className="rounded-sm px-[7px] font-mono text-[10px] font-medium tracking-[0.09em] text-muted-foreground uppercase"
              >
                {role.kind}
              </Badge>
            ) : null}
          </CardTitle>
        </CardHeader>

        <CardContent className="mt-[7px] flex flex-wrap gap-x-4.5 gap-y-1.5 font-mono text-xs text-muted-foreground">
          <span>
            {role.from} → {role.to ?? "present"}
          </span>
          <span>{role.location}</span>
        </CardContent>

        <CardContent className="mt-3.5">
          <ul className="space-y-[7px]">
            {role.points.map((point) => (
              <li
                key={point.slice(0, 32)}
                className="relative pl-4.5 text-[15px] leading-relaxed text-ink-2 before:absolute before:top-[0.72em] before:left-0 before:h-px before:w-2 before:bg-muted-foreground before:content-['']"
              >
                {point}
              </li>
            ))}
          </ul>
        </CardContent>

        {role.url ? (
          <CardContent className="mt-3.5">
            <TextLink href={role.url} external mono>
              {role.url.replace("https://", "")}
            </TextLink>
          </CardContent>
        ) : null}
      </Card>
    </li>
  );
}

export function ExperienceSection() {
  return (
    <LedgerSection section={section("history")}>
      <ol className="[&>li:first-child>*]:pt-0">
        {roles.map((role) => (
          <JobEntry key={`${role.org}-${role.from}`} role={role} />
        ))}
      </ol>
    </LedgerSection>
  );
}
