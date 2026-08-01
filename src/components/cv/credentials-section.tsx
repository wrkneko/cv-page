import { education, languages, section } from "@/content/cv";
import { LedgerSection } from "@/components/layout/ledger-section";
import { DataList } from "./data-list";

export function CredentialsSection() {
  return (
    <LedgerSection section={section("credentials")}>
      <div className="grid gap-8 ledger:grid-cols-2 ledger:gap-12">
        <div>
          <p className="t-label">Languages</p>
          <div className="mt-6">
            <DataList entries={languages} />
          </div>
        </div>
        <div>
          <p className="t-label">Education</p>
          <div className="mt-6">
            <DataList entries={education} />
          </div>
        </div>
      </div>
    </LedgerSection>
  );
}
