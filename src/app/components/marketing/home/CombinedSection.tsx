import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../../ui/button";
import { AnimatedSection } from "../AnimatedSection";
import ctaBg from "@/assets/cta-bg.jpg";

const steps = [
  {
    step: "1",
    title: "Book a Demo",
    description:
      "We'll walk through your academy's structure, modules needed, and user roles in a 30-minute session.",
  },
  {
    step: "2",
    title: "We Configure Your Academy",
    description:
      "Our team sets up your organisation, imports existing data, and configures roles and permissions.",
  },
  {
    step: "3",
    title: "Go Live",
    description:
      "Your staff and parents get access. Training, welfare, fixtures, and video — all in one place from day one.",
  },
];

export function CombinedSection() {
  return (
    <section className="relative py-32 text-neutral-50 overflow-hidden">
      {/* Shared background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />

      {/* Shared gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-neutral-900/70 to-neutral-900/90" />

      {/* Content wrapper */}
      <div className="relative container mx-auto px-4 space-y-8">
        {/* ----------------------------- */}
        {/* Onboarding Section */}
        {/* ----------------------------- */}
        <AnimatedSection>
          <div className="w-full text-center">
  <p
    className="text-sm md:text-base uppercase tracking-[0.2em] text-primary font-semibold"
    style={{ fontFamily: "var(--font-heading)" }}
  >
    Simplified Onboarding
  </p>
</div>

        </AnimatedSection>

        <AnimatedSection>
          <h3
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for Day One.
          </h3>
        </AnimatedSection>

        {/* Steps */}
        <div className="mt-16 relative">
          {/* Connector Line */}
          <motion.div
            className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-border"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Step Number Circle */}
                <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center mb-6 relative z-10">
                  <span
                    className="text-4xl font-black text-primary"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.step}
                  </span>
                </div>

                <h4
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h4>

                <p className="text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ----------------------------- */}
        {/* Personalisation CTA */}
        {/* ----------------------------- */}
        <AnimatedSection>
          <div className="w-full text-center">
  <p
    className="text-sm md:text-base uppercase tracking-[0.2em] text-primary font-semibold"
    style={{ fontFamily: "var(--font-heading)" }}
  >
    Personalisation
  </p>
</div>

        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h3
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              See statTarian in action.
            </h3>

            <p
              className="text-lg md:text-xl text-neutral-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Book a 30-minute demo tailored to your academy's needs.
            </p>

            <div className="pt-4">
              <Button size="lg" className="px-12 py-6 text-xl" asChild>
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
