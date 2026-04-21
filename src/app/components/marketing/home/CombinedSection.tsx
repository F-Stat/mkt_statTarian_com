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
]

export function CombinedSection() {
  return (
    <section className="relative py-16 md:py-32 text-neutral-50 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-neutral-900/70 to-neutral-900/90" />

      <div className="relative container mx-auto px-4 space-y-6 md:space-y-8">

        {/* ----------------------------- */}
        {/* Onboarding Section */}
        {/* ----------------------------- */}
        <AnimatedSection>
          <div className="w-full text-center">
            <span
              className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white"
              style={{
                fontFamily: "var(--font-heading)",
                backgroundColor: 'var(--color-brand-700)',
              }}
            >
              Simplified Onboarding
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h3
            className="text-3xl md:text-5xl font-bold text-center mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for Day One.
          </h3>
        </AnimatedSection>

        {/* Steps */}
        <div className="mt-8 md:mt-16 relative">
          <motion.div
            className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-white/20"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Step circle */}
                <div
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 md:mb-6 relative z-10 border-2 border-white/30"
                  style={{ backgroundColor: 'var(--color-brand-700)' }}
                >
                  <span
                    className="text-2xl md:text-4xl font-black text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {step.step}
                  </span>
                </div>

                <h4
                  className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h4>

                <p className="text-sm md:text-base text-neutral-300 max-w-xs">
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
          <div className="w-full text-center pt-4 md:pt-8">
            <span
              className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white"
              style={{
                fontFamily: "var(--font-heading)",
                backgroundColor: 'var(--color-brand-700)',
              }}
            >
              Personalisation
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-6">
            <h3
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Get ready to see it in action.
            </h3>
            <p
              className="text-base md:text-xl text-neutral-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Book a 30-minute demo tailored to your academy's needs.
            </p>
            <div className="pt-2 md:pt-4">
              <Button
                size="lg"
                className="px-8 py-5 text-lg md:px-12 md:py-6 md:text-xl"
                asChild
              >
                <Link to="/contact">Request a Demo</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}