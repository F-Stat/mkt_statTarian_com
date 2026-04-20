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
  heading = "See statTarian in action",
  subheading = "Book a 30-minute demo tailored to your academy's needs.",
  ctaLabel = "Request a Demo",
  ctaHref = "/contact",
}: DemoCtaSectionProps) {
  return (
    <section className="relative py-24 text-neutral-50">
      {/* Background image – same pattern as HeroSection */}
      <div
        style={{ backgroundImage: `url(${ctaBg})` }}
      />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {heading}
            </h2>

            <p
              className="text-lg md:text-xl text-neutral-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {subheading}
            </p>

            <div className="pt-4">
              <Button size="lg" className="px-12 py-6 text-xl" asChild>
                <Link to={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
