import {
  ShieldCheck,
  Clock,
  MessageSquare,
  Trophy,
  Layers,
  X,
} from "lucide-react";
import { AnimatedSection } from "../../components/marketing/AnimatedSection";
import { DemoCtaSection } from "../../components/marketing/cta/DemoCtaSection";

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

const promises = [
  {
    icon: Layers,
    title: "Clarity Over Chaos",
    body: "Your academy should run from one connected system — not a patchwork of tools. Schedules, communication, player information, and safeguarding records live together, stay in sync, and stay accessible to the right people.",
  },
  {
    icon: ShieldCheck,
    title: "Safeguarding First",
    body: "Nothing matters more. Every workflow is designed with safeguarding and compliance at the centre — clear audit trails, secure communication, and role‑based access that protects players and supports staff.",
  },
  {
    icon: Clock,
    title: "Time Back for Coaches",
    body: `Coaches should coach — not drown in admin. We remove repetitive, manual tasks through automation, smart scheduling, and information that's always where it should be.`,
  },
  {
    icon: MessageSquare,
    title: "Parents Always Informed",
    body: `Parents shouldn't have to guess, chase, or hope they've seen the latest message. Clear, timely, reliable communication through a single, consistent channel.`,
  },
  {
    icon: Trophy,
    title: "Built for Football",
    body: "Football has its own rhythms, pressures, and operational realities. We build exclusively for the game — your workflows, your terminology, your season structure, your safeguarding requirements.",
  },
];

const nonNegotiables = [
  "We won't ship features that create safeguarding risk.",
  "We won't add complexity for the sake of it.",
  "We won't ignore feedback from coaches or parents.",
  "We won't build for every sport — only football.",
  "We won't sacrifice clarity for speed.",
];

export function Promise() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-6">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  Our Commitment
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The statTarian Promise
              </h1>
              <p
                className="text-base md:text-xl text-muted-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                A platform you can trust with your academy.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-12 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <div className="space-y-6 md:space-y-8">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  Why We Exist
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Football academies deserve better than chaos.
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  For too long, youth programmes have been forced to stitch
                  together WhatsApp groups, spreadsheets, PDFs, email threads,
                  and outdated systems that were never built for the realities
                  of modern player development.
                </p>
                <p>
                  The result is predictable: missed messages, admin overload,
                  safeguarding risk, frustrated parents, and coaches spending
                  more time organising than coaching.
                </p>
                <p>
                  statTarian exists to fix this — to bring clarity where there's
                  noise, to give time back to the people who develop players,
                  and to ensure nothing and no one slips through the cracks.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Five Promises — Cards */}
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
                  Our Promises
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Five things we commit to. Every day.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {promises.map((promise, index) => (
              <AnimatedSection key={promise.title} delay={index * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <promise.icon
                      className="h-6 w-6 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3
                    className="text-lg md:text-xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {promise.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed flex-1">
                    {promise.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver + What to Expect — Side by side */}
      <section className="py-12 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            <AnimatedSection>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <span
                    className={pillClass}
                    style={{
                      fontFamily: "var(--font-heading)",
                      backgroundColor: "var(--color-brand-700)",
                    }}
                  >
                    How We Deliver
                  </span>
                </div>
                <h2
                  className="text-2xl md:text-4xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Systems, not slogans.
                </h2>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                  A single connected platform, real‑time updates, role‑based
                  access, automated workflows, secure communication, and a
                  product shaped by real academy experience.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="space-y-4 md:space-y-6">
                <div>
                  <span
                    className={pillClass}
                    style={{
                      fontFamily: "var(--font-heading)",
                      backgroundColor: "var(--color-brand-700)",
                    }}
                  >
                    What to Expect
                  </span>
                </div>
                <h2
                  className="text-2xl md:text-4xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  No surprises.
                </h2>
                <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                  Fast onboarding. Transparent roadmap. No hidden fees. No
                  lock‑in tricks. Human support when you need it. Continuous
                  improvement driven by real academy feedback.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Non-negotiables */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <AnimatedSection>
            <div className="space-y-6 md:space-y-10">
              <div className="text-center space-y-4">
                <div>
                  <span
                    className={pillClass}
                    style={{
                      fontFamily: "var(--font-heading)",
                      backgroundColor: "var(--color-brand-700)",
                    }}
                  >
                    Non-Negotiables
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-5xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  What we won't compromise on.
                </h2>
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                {nonNegotiables.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="h-4 w-4 text-destructive" />
                    </div>
                    <p className="text-sm md:text-base text-foreground leading-relaxed pt-1">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing */}
      <section className="py-12 md:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <AnimatedSection>
            <div className="space-y-4 md:space-y-6">
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A final word.
              </h2>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                {`Football deserves better tools. Coaches deserve more time.
  Parents deserve clarity. Players deserve safe, organised
  environments where they can grow. That's the promise behind
  statTarian — and we intend to keep it.`}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <DemoCtaSection
        heading="Ready to hold us to it?"
        subheading="Book a demo and see the promise in action."
        ctaLabel="Book a Demo"
      />
    </main>
  );
}
