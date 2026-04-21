import { useState } from "react";
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
    question: "Does StatTarian integrate with FAW COMET?",
    answer:
      "Yes, StatTarian has native integration with FAW COMET via an ingestion API, allowing you to automatically sync player registration data.",
  },
  {
    question: "How is safeguarding data protected?",
    answer:
      "All safeguarding and welfare data is role-gated with granular access controls. Every access is audit-logged, and only authorized users with the appropriate permissions can view sensitive information.",
  },
  {
    question: "Can parents access the platform?",
    answer:
      "Yes, a dedicated parent portal is included in Pro and Enterprise plans. Parents can view fixture information, confirm attendance, and communicate with academy staff through safeguarding-audited messaging.",
  },
  {
    question: "Is there a Welsh language option?",
    answer:
      "Yes, full Welsh/English bilingual support is built into the platform from the ground up, with language switching available throughout the interface.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Typically 2–4 weeks with dedicated support. We configure your organisation structure, import existing data, set up user roles, and provide training to ensure a smooth transition.",
  },
  {
    question: "Can we migrate from Pitchero / Hudl?",
    answer:
      "Yes, data migration support is available on Pro and Enterprise plans. Our team will work with you to map and import your existing data from current platforms.",
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
