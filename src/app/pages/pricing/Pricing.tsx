import { useState } from "react"
import { PricingTable } from "../../components/marketing/pricing/PricingTable"
import { ComparisonTable } from "../../components/marketing/pricing/ComparisonTable"
import { AnimatedSection } from "../../components/marketing/AnimatedSection"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

type TierKey = "starter" | "pro" | "enterprise"

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
]

export function Pricing() {
  const [recommendedTier] = useState<TierKey>("pro")

  return (
    <main className="pt-24">

      {/* Page Hero */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Transparent pricing for every academy.
              </h1>

              <p
                className="text-xl text-muted-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Choose the plan that fits your academy size, structure, and ambitions.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <PricingTable recommendedTier={recommendedTier} />

          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>
              Pricing is indicative. Contact us for a tailored quote based on your academy's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* FAQ Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">

          <AnimatedSection>
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-12"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently Asked Questions
            </h2>
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

    </main>
  )
}
