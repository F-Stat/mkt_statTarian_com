import { Link } from "react-router";
import { Button } from "../../ui/button";
import { AnimatedSection } from "../AnimatedSection";
import ctaBg from "@/assets/cta-bg.jpg";

interface DemoCtaSectionProps {
  heading?: string;
  subheading?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export function DemoCtaSection({
  heading = "Ready to see it in action?",
  subheading = "Book a 30-minute demo tailored to your academy's needs.",
  ctaLabel = "Book a Demo",
  ctaHref = "/contact",
}: DemoCtaSectionProps) {
  return (
    <section className="relative py-16 md:py-24 text-neutral-50 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 via-neutral-900/70 to-neutral-900/90" />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-6">
            <div>
              <span
                className="inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white"
                style={{
                  fontFamily: "var(--font-heading)",
                  backgroundColor: "var(--color-brand-700)",
                }}
              >
                Book a personalised walkthrough
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {heading}
            </h2>
            <p
              className="text-base md:text-xl text-neutral-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {subheading}
            </p>
            <div className="pt-2 md:pt-4">
              <Button
                size="lg"
                className="px-8 py-5 text-lg md:px-12 md:py-6 md:text-xl"
                asChild
              >
                <Link to={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}