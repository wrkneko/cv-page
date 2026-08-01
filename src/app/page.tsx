import { FactsBar } from "@/components/cv/facts-bar";
import { IdentitySection } from "@/components/cv/identity-section";
import { SummarySection } from "@/components/cv/summary-section";
import { ExperienceSection } from "@/components/cv/experience-section";
import { StackSection } from "@/components/cv/stack-section";
import { CredentialsSection } from "@/components/cv/credentials-section";
import { ContactSection } from "@/components/cv/contact-section";
import { personJsonLd } from "@/lib/json-ld";

export default function Home() {
  return (
    <>
      <FactsBar />

      <main id="main">
        <IdentitySection />
        <SummarySection />
        <ExperienceSection />
        <StackSection />
        <CredentialsSection />
        <ContactSection />
      </main>

      {/* Разметка Schema.org для поисковиков: собирается из тех же данных,
          что и страница, поэтому разъехаться с ней не может. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
