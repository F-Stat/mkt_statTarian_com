"use client";

import {
  ShieldCheck,
  Clock,
  MessageSquare,
  Trophy,
  Layers,
  Play,
} from "lucide-react";
import { AnimatedSection } from "../../components/marketing/AnimatedSection";
import { DemoCtaSection } from "../../components/marketing/cta/DemoCtaSection";
import { HeroSurface } from "../../components/marketing/layout/HeroSurface";

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

const promises = [
  {
    icon: Layers,
    title: "Clarity Over Chaos",
    body: "Your academy should run from one connected system — not a patchwork of tools. Schedules, communication, player information, and safeguarding records stay unified, consistent, and accessible to the right people.",
  },
  {
    icon: ShieldCheck,
    title: "Safeguarding First",
    body: "Nothing matters more. Every workflow is designed with safeguarding and compliance at the centre — clear audit trails, secure communication, and role-based access that protects players and supports staff.",
  },
  {
    icon: Clock,
    title: "Time Back for Coaches",
    body: "Coaches should coach — not drown in admin. We remove repetitive, manual tasks through automation, smart scheduling, and information that’s always where it should be.",
  },
  {
    icon: MessageSquare,
    title: "Parents Always Informed",
    body: "Parents shouldn’t have to guess, chase, or hope they’ve seen the latest update. Clear, timely, reliable communication through a single, consistent channel.",
  },
  {
    icon: Trophy,
    title: "Built for Football",
    body: "Football has its own rhythms, pressures, and operational realities. We build exclusively for the game — your workflows, your terminology, your season structure, your safeguarding requirements.",
  },
];

export function Promise() {
  return (
    <main className="pt-16 md:pt-24 dark">
      {/* Hero */}
      <HeroSurface className="pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
              <span
                className={pillClass}
                style={{
                  fontFamily: "var(--font-heading)",
                  backgroundColor: "var(--color-brand-700)",
                }}
              >
                Our Commitment
              </span>

              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Built on standards.
              </h1>

              <p
                className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                We go beyond software — it’s a commitment to clarity, safety,
                and trust in academy football.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </HeroSurface>

      {/* Why We Exist */}
      <section className="py-8 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <div className="space-y-6 md:space-y-8">
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  Why We Exist
                </span>

                <h2
                  className="text-3xl md:text-5xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Order. Clarity. Accountability.
                </h2>

                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  statTarian exists to bring order to academy football —
                  combining clarity, accountability, and structure in a single
                  operating standard designed to remove chaos, protect young
                  people, and give staff complete confidence in how they work.
                </p>
              </div>

              {/* Video */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-background group cursor-pointer">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-brand-700),var(--color-brand-900))]" />
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(var(--color-brand-500)_1px,transparent_1px),linear-gradient(90deg,var(--color-brand-500)_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all">
                    <Play className="h-7 w-7 md:h-9 md:w-9 text-white fill-white ml-1" />
                  </div>
                  <p className="text-xs md:text-sm text-white/60 uppercase tracking-widest">
                    Coming soon
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Five Promises */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <AnimatedSection>
            <div className="text-center mb-12 space-y-4">
              <span
                className={pillClass}
                style={{
                  fontFamily: "var(--font-heading)",
                  backgroundColor: "var(--color-brand-700)",
                }}
              >
                Our Promises
              </span>

              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Five commitments you can rely on.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promises.map((promise, index) => (
              <div
                key={promise.title}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 flex flex-col gap-4 max-w-sm mx-auto w-full"
              >
                {/* Number now styled as the circle */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl font-bold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {promise.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {promise.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DemoCtaSection
        heading="Ready to hold us to it?"
        subheading="30 minutes. No slides. Just the platform."
        ctaLabel="Book a Demo"
      />
    </main>
  );
}
