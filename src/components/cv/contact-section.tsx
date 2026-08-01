import { contacts, profile, section } from "@/content/cv";
import { LedgerSection } from "@/components/layout/ledger-section";
import { ActionButton, ButtonGroup } from "./action-button";
import { DataList } from "./data-list";

export function ContactSection() {
  return (
    <LedgerSection section={section("contact")}>
      <p className="t-body">
        Open to QA Lead and SQA Engineer roles. Reach out on any of these —
        Telegram is the fastest way to get in touch.
      </p>

      <div className="mt-8">
        <DataList entries={contacts} />
      </div>

      <ButtonGroup className="mt-8">
        <ActionButton primary href={profile.telegram.url} >
          Telegram
        </ActionButton>
        <ActionButton href={profile.cv} download>
          Download CV
        </ActionButton>
      </ButtonGroup>
    </LedgerSection>
  );
}
