import { useState } from "react";
import { RolesMarqueeBar } from "../../components/marketing/social-proof/RolesMarqueeBar";
import { PricingTable } from "../../components/marketing/pricing/PricingTable";
import { ComparisonTable } from "../../components/marketing/pricing/ComparisonTable";
import { AnimatedSection } from "../../components/marketing/AnimatedSection";
import { DemoCtaSection } from "../../components/marketing/cta/DemoCtaSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

type TierKey = "starter" | "pro" | "enterprise";

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

const faqs = [
  {
    question: "Does StatTarian sync with FAW COMET and other governing‑body systems?",
    answer:
      "Yes. StatTarian has a native integration with FAW COMET via a secure ingestion API, allowing player registration and eligibility data to sync automatically. This removes manual admin work and keeps your squad lists accurate across systems.",
  },
  {
    question: "How is safeguarding data protected?",
    answer:
      "All safeguarding and welfare information is protected by granular, role‑based access controls. Every view, update, and export is fully audit‑logged. Only authorised staff with the correct permissions can access sensitive data, ensuring compliance with club, academy, and FAW safeguarding standards.",
  },
  {
    question: "Can parents access the platform?",
    answer:
      "Yes. A dedicated parent portal is included in Pro and Enterprise plans. Parents can view fixtures, confirm availability, receive updates, and communicate with staff through safeguarding‑audited messaging — without exposing internal academy data.",
  },
  {
    question: "Is the platform available in Welsh?",
    answer:
      "Yes. StatTarian includes full Welsh/English bilingual support throughout the entire interface. Users can switch languages at any time, and all core modules operate seamlessly in both languages.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most clubs and academies are fully onboarded within 2–4 weeks. Our team configures your organisational structure, imports existing data, sets up user roles and permissions, and provides hands‑on training to ensure a smooth transition for coaches, analysts, and administrators.",
  },
  {
    question: "Can you migrate our data from other platforms (Pitchero, Hudl, spreadsheets)?",
    answer:
      "Yes. Data migration support is included in Pro and Enterprise plans. We work with you to map, clean, and import your existing data — whether it comes from Pitchero, Hudl, spreadsheets, or other systems — so you can start with a complete and accurate history.",
  },
  {
    question: "What devices do coaches and parents need to use StatTarian?",
    answer:
      "StatTarian works on any modern device — mobile, tablet, or desktop. Coaches can manage sessions and squads on the pitch using their phone, while parents can access the portal from any browser without needing to install an app.",
  },
  {
    question: "Do coaches need training to use StatTarian?",
    answer:
      "StatTarian is designed to be intuitive from day one. Most coaches are fully comfortable within a single session. For larger academies, we provide structured onboarding, role‑specific training, and ongoing support to ensure consistent adoption.",
  },
  {
    question: "How does StatTarian support player development?",
    answer:
      "The platform centralises player information, attendance, session data, and development insights in one place. Coaches can track progress over time, identify trends, and share structured feedback with players and parents — all within safeguarding‑audited workflows.",
  },
  {
    question: "What makes StatTarian different from other platforms?",
    answer:
      "StatTarian is built specifically for academies and pathway environments. It combines safeguarding‑first communication, player development intelligence, bilingual support, and COMET integration in a single, modern platform — reducing admin while strengthening the player journey.",
  },
];

export function Pricing() {
  const [recommendedTier] = useState<TierKey>("pro");

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  Pricing
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Transparent pricing for every academy.
              </h1>
              <p
                className="text-base md:text-xl text-muted-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Choose the plan that fits your academy size, structure, and
                ambitions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <RolesMarqueeBar />

      {/* Pricing Table */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <PricingTable recommendedTier={recommendedTier} />
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-12 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-16 space-y-4">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  Compare Plans
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Everything, side by side.
              </h2>
            </div>
          </AnimatedSection>
          <ComparisonTable />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-16 space-y-4">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  FAQ
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Frequently asked questions.
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <DemoCtaSection />
    </main>
  );
}
