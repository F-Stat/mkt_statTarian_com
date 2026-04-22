import { ShieldCheck, Globe, Lock } from "lucide-react";
import { DemoCtaSection } from "../../components/marketing/cta/DemoCtaSection";
import { AnimatedSection } from "../../components/marketing/AnimatedSection";
import { motion } from "motion/react";
import walesImage from "../../../assets/abstract-training.jpg";

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

const values = [
  {
    icon: ShieldCheck,
    title: "Player First",
    description:
      "Every decision starts with one question: does this protect and support the young people in our care? If not, it doesn’t ship.",
  },
  {
    icon: Globe,
    title: "Welsh at Heart",
    description:
      "Built in Wales, for Wales. Bilingual from day one, aligned with FAW requirements, and shaped by people who understand the pathway.",
  },
  {
    icon: Lock,
    title: "Trust by Design",
    description:
      "Safeguarding‑centric workflows, role‑based access, and encrypted audit trails form the foundation of the entire platform.",
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

// TODO: Replace with real assets when available
const HERO_IMAGE = ""; // Aerial or wide-angle pitch shot — matches DemoCtaSection tone
const FOUNDER_IMAGE = ""; // Headshot of Steve Lloyd
const WALES_IMAGE = walesImage;

export function About() {
  return (
    <main className="pt-4 md:pt-24">
      {/* Hero — full-bleed background image with overlay */}
      <section
        className="relative py-32 md:py-48 bg-background bg-cover bg-center"
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
                  About StatTarian
                </span>
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Built Inside Academy Football.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                statTarian was created by practitioners who understand the
                demands of youth development.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <span
                    className={pillClass}
                    style={{
                      fontFamily: "var(--font-heading)",
                      backgroundColor: "var(--color-brand-700)",
                    }}
                  >
                    From the Founder
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 items-start">
                  <div className="h-20 w-20 rounded-full bg-muted overflow-hidden shrink-0 flex items-center justify-center text-2xl font-bold">
                    {FOUNDER_IMAGE ? (
                      <img
                        src={FOUNDER_IMAGE}
                        alt="Steve Lloyd, Founder & CEO of StatTarian"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      "SL"
                    )}
                  </div>

                  <div className="space-y-5">
                    <h2
                      className="text-3xl md:text-4xl font-bold leading-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      "Welsh academies deserved better than a dozen disconnected
                      tools."
                    </h2>

                    <p className="text-lg text-muted-foreground">
                      I’ve spent years inside Welsh academies — seeing the
                      commitment of coaches, the care for young players, and the
                      sheer effort required just to keep everything running. But
                      I also saw the strain: registrations in one place,
                      schedules somewhere else, welfare notes buried in inboxes,
                      and no single source of truth.
                    </p>

                    <p className="text-lg text-muted-foreground">
                      StatTarian exists because an academy shouldn’t need
                      enterprise‑level IT skills to operate safely, clearly, and
                      compliantly. From FAW COMET integration to bilingual
                      support, every part of this platform was designed around
                      the real day‑to‑day reality of Welsh football.
                    </p>

                    <div className="pt-2">
                      <p
                        className="font-semibold"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        Steve Lloyd
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Founder & CEO, StatTarian
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Wales — image as right-column accent */}
      <section className="py-24 bg-background">
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
                    className="text-4xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Built for Wales — not adapted for it.
                  </h2>

                  <p className="text-lg text-muted-foreground">
                    StatTarian was designed from the ground up for the FAW
                    pathway. That means bilingual Welsh/English support
                    throughout, safeguarding and COMET compliance built into
                    every workflow, and a deep understanding of how Welsh
                    academies actually operate.
                  </p>

                  <p className="text-lg text-muted-foreground">
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

      {/* Problem → Solution */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14 space-y-4">
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
              <p className="text-muted-foreground max-w-xl mx-auto">
                Before StatTarian, Welsh academies were forced to stitch
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

      {/* Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-16 space-y-4">
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
                Our Values
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-6"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
      </section>

      <DemoCtaSection />
    </main>
  );
}
