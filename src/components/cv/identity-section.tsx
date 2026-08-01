import { Download } from "lucide-react";

import { lede, profile, section } from "@/content/cv";
import { LedgerSection } from "@/components/layout/ledger-section";
import { TextLink } from "@/components/text-link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ActionButton, ButtonGroup } from "./action-button";

/**
 * Первый экран — не рекламный блок, а шапка личного дела: имя, роль, одна
 * фраза о профиле, фото и действия. Ничего, что нельзя проверить.
 *
 * Фото — квадрат, а не круг: это снимок из личного дела, а не аватарка в чате.
 * Если файла нет, Avatar из shadcn сам показывает инициалы — императивный
 * обработчик `onerror` из статической версии больше не нужен.
 */
export function IdentitySection() {
  return (
    <LedgerSection section={section("top")} as="p">
      <div className="grid items-start gap-6 sm:grid-cols-[1fr_auto] sm:gap-11">
        <div className="order-2 space-y-4.5 sm:order-1">
          <h1 className="t-display">
            {profile.name}
            <span className="text-primary">.</span>
          </h1>
          <p className="t-lede">
            SQA Engineer. QA Lead at{" "}
            <TextLink href={profile.employer.url} external>
              {profile.employer.name}
            </TextLink>
            .
          </p>
          <p className="t-body">{lede}</p>
        </div>

        <div className="order-1 sm:order-2">
          <Avatar className="size-20 rounded-sm bg-card after:rounded-sm sm:size-26 print:size-16">
            <AvatarImage
              src={profile.photo}
              alt={profile.name}
              className="rounded-sm"
            />
            <AvatarFallback className="rounded-sm font-mono text-[26px] font-medium">
              {profile.initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <ButtonGroup className="mt-8">
        <ActionButton primary href={profile.cv} download>
          Download CV
          <Download className="size-[13px]" />
        </ActionButton>
        <ActionButton href={`mailto:${profile.email}`}>Email me</ActionButton>
        <ActionButton href={profile.telegram.url} target="_blank" rel="noopener">
          Telegram
        </ActionButton>
        <ActionButton href={profile.linkedin.url} target="_blank" rel="noopener">
          LinkedIn
        </ActionButton>
      </ButtonGroup>
    </LedgerSection>
  );
}
