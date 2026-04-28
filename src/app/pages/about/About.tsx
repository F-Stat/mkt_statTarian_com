"use client";

import { useRef, useEffect } from "react";
import { ShieldCheck, Globe, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { DemoCtaSection } from "../../components/marketing/cta/DemoCtaSection";
import { AnimatedSection } from "../../components/marketing/AnimatedSection";
import { motion } from "motion/react";
import walesImage from "../../../assets/abstract-training.jpg";
import founderImage from "../../../assets/founder.jpg";

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

const values = [
  {
    icon: ShieldCheck,
    title: "Player First",
    description:
      "We design for the child, not the system. Protection, development, and welfare guide every decision we make.",
  },
  {
    icon: Globe,
    title: "Welsh at Heart",
    description:
      "A platform shaped by the realities of Welsh football — bilingual, FAW‑aligned, and built by people who’ve lived the pathway.",
  },
  {
    icon: Lock,
    title: "Trust by Design",
    description:
      "Safety is engineered into every layer of the platform — from access control to audit trails to the way information flows.",
  },
];

const problems = [
  {
    before:
      "Disconnected spreadsheets and email chains for welfare and injuries",
    after:
      "A single safeguarding‑first record system with audit trails and role‑based access",
  },
  {
    before: "Manual FAW COMET entries duplicated across multiple tools",
    after:
      "Direct COMET integration — update once, sync everywhere automatically",
  },
  {
    before: "Video analysis on consumer apps with no safeguarding controls",
    after:
      "Purpose‑built video tools with age‑appropriate access and full accountability",
  },
  {
    before: "Information scattered across chats, PDFs, and personal devices",
    after:
      "One connected platform where every update is structured, secure, and visible",
  },
  {
    before: "Coaches spending hours on admin instead of player development",
    after:
      "Automated workflows that give time back to the people who need it most",
  },
];

const HERO_IMAGE = "";
const FOUNDER_IMAGE = founderImage;
const WALES_IMAGE = walesImage;

export function About() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-16 md:pt-24">

      {/* Hero — Promise-aligned */}
      <section
        className="relative py-12 md:py-24 bg-background bg-cover bg-center"
        style={{
          backgroundImage: HERO_IMAGE ? `url(${HERO_IMAGE})` : undefined,
        }}
      >
        {HERO_IMAGE && <div className="absolute inset-0 bg-background/80" />}

        <div className="relative z-10 container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  About statTarian
                </span>
              </div>

              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Built Inside Academy Football.
              </h1>

              <p
                className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                statTarian was created by practitioners who understand the
                demands of youth development.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Story — Promise spacing */}
      <section className="py-12 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="flex flex-col items-center text-center space-y-10">

                <div className="h-40 w-40 rounded-full overflow-hidden bg-muted border border-border shadow-sm ring-2 ring-[var(--color-brand-700)]">
                  <img
                    src={FOUNDER_IMAGE}
                    alt="Steve Lloyd, Founder & CEO of statTarian"
                    className="h-full w-full object-cover"
                    onError={(e) => (e.currentTarget.style.display = "none")}
                  />
                </div>

                <h2
                  className="text-3xl md:text-4xl font-bold leading-tight mt-4 mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  “Welsh academies deserved better — so we built it.”
                </h2>

                <div className="w-24 h-px bg-border/80 mx-auto mb-2" />

                <div className="max-w-2xl mx-auto space-y-6 text-left md:text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I’ve spent nearly two decades working at the intersection of
                    data, technology, and operational design — across
                    consulting, retail, public sector, education, and sport. But
                    it was my years inside Welsh football that changed
                    everything.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I saw coaches giving everything, young players developing,
                    and staff doing their best in systems that simply weren’t
                    built for them. Registrations lived in one place, schedules
                    in another, welfare notes buried in inboxes, and compliance
                    scattered across tools that never spoke to each other.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Even with a background in CRM, data architecture, and
                    process design, it was obvious the academy environment was
                    being held together by effort, not infrastructure. Welsh
                    football deserved better.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    statTarian was built to fix that — not as another generic
                    platform, but as a connected, safeguarding‑first operating
                    system shaped by people who understand the FAW pathway,
                    COMET, bilingual requirements, and the day‑to‑day reality of
                    academies. This isn’t theory or market research; it’s lived
                    experience turned into a product built for the environment
                    it serves.
                  </p>
                </div>

                <div className="pt-4 text-center opacity-90 space-y-1">
                  <p
                    className="font-semibold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Steve Lloyd
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Founder & CEO, statTarian
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Wales — Promise spacing */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div>
                    <span
                      className={pillClass}
                      style={{
                        fontFamily: "var(--font-heading)",
                        backgroundColor: "var(--color-brand-700)",
                      }}
                    >
                      Why Wales
                    </span>
                  </div>

                  <h2
                    className="text-4xl md:text-5xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Built for Wales — not adapted for it.
                  </h2>

                  <p
                    className="text-base md:text-lg text-muted-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    statTarian was designed from the ground up for the FAW
                    pathway. That means bilingual Welsh/English support
                    throughout, safeguarding and COMET compliance built into
                    every workflow, and a deep understanding of how Welsh
                    academies actually operate.
                  </p>

                  <p
                    className="text-base md:text-lg text-muted-foreground"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    This isn’t a Premier League tool retrofitted for Wales. It’s
                    a Welsh platform built for grassroots clubs and regional
                    academies — the backbone of Welsh football.
                  </p>
                </div>

                <motion.div
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border"
                  initial={{ opacity: 0, x: 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={WALES_IMAGE}
                    alt="Welsh youth football training"
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem → Solution — Promise spacing */}
      <section className="py-12 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  What We Replaced
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                From chaos to clarity.
              </h2>

              <p
                className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Before statTarian, Welsh academies were forced to stitch
                together disconnected tools. We replaced all of it with a
                single, safeguarding‑first operating system.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto space-y-4">
            {problems.map((item, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="bg-background border border-border rounded-xl p-6 flex gap-3">
                  <span className="text-destructive mt-0.5 shrink-0">✕</span>
                  <p className="text-muted-foreground">{item.before}</p>
                </div>
                <div className="bg-background border border-border rounded-xl p-6 flex gap-3">
                  <span className="text-primary mt-0.5 shrink-0">✓</span>
                  <p className="text-muted-foreground">{item.after}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values — Promise spacing */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12 md:mb-16 space-y-4">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  Our Values
                </span>
              </div>

              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What We Stand For.
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative max-w-6xl mx-auto">

            {/* Mobile arrows */}
            <button
              onClick={() =>
                scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" })
              }
              className="
                flex md:hidden absolute left-3 top-1/2 -translate-y-1/2 z-20
                h-10 w-10 rounded-full bg-[var(--color-brand-700)]
                text-white items-center justify-center
                shadow-md active:scale-95 transition
              "
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() =>
                scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" })
              }
              className="
                flex md:hidden absolute right-3 top-1/2 -translate-y-1/2 z-20
                h-10 w-10 rounded-full bg-[var(--color-brand-700)]
                text-white items-center justify-center
                shadow-md active:scale-95 transition
              "
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-background to-transparent md:hidden" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent md:hidden" />

            {/* Scroll container */}
            <div
              ref={scrollRef}
              className="
                flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar
                md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:snap-none
                px-1
              "
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="
                    min-w-[85%] snap-center md:min-w-0
                    bg-card border border-border rounded-2xl p-8 flex flex-col gap-6
                    shadow-sm
                  "
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3
                    className="text-2xl font-bold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {value.title}
                  </h3>

                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DemoCtaSection />
    </main>
  );
}
