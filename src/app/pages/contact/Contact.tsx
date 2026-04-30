import { DemoRequestForm } from "../../components/marketing/forms/DemoRequestForm";
import { AnimatedSection } from "../../components/marketing/AnimatedSection";
import { Clock, Mail, ShieldCheck, Users, Workflow } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";
import { HeroSurface } from "../../components/marketing/layout/HeroSurface";

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

export function Contact() {
  return (
    <main className="pt-16 md:pt-24">
      {/* HERO */}
      <HeroSurface className="pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  Book a Demo
                </span>
              </div>

              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Request a Demo
              </h1>

              <p
                className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                We'll set up a 30-minute walkthrough tailored to your academy's
                structure and needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </HeroSurface>

      {/* CONTACT SECTION */}
      <section
        className="relative pt-16 pb-10 md:pt-24 md:pb-16"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Darker overlay for readability */}
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
            {/* LEFT — FORM */}
            <AnimatedSection>
              <div className="bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-10 shadow-2xl">
                <DemoRequestForm />
              </div>
            </AnimatedSection>

            {/* RIGHT — INFO */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-10 md:space-y-12 text-neutral-50">
                {/* What to expect */}
                <div className="space-y-6">
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
                    className="text-2xl md:text-3xl font-bold"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Your 30-minute demo, explained.
                  </h2>

                  <ul className="space-y-5">
                    {[
                      {
                        icon: Users,
                        text: "A personalised walkthrough of statTarian's modules, tailored to your academy's structure and age groups.",
                      },
                      {
                        icon: Workflow,
                        text: "A review of your current workflow and how statTarian can streamline operations across coaching, welfare, fixtures, and communication.",
                      },
                      {
                        icon: ShieldCheck,
                        text: "Live Q&A covering safeguarding, compliance, permissions, and data management.",
                      },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <span className="text-sm md:text-base text-neutral-200 leading-relaxed pt-2">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact details */}
                <div className="border-t border-white/20 pt-8 md:pt-10 space-y-5">
                  <div>
                    <span
                      className={pillClass}
                      style={{
                        fontFamily: "var(--font-heading)",
                        backgroundColor: "var(--color-brand-700)",
                      }}
                    >
                      Get in Touch
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-50">
                        Email us
                      </div>
                      <a
                        href="mailto:hello@stattarian.com"
                        className="text-sm text-neutral-50 hover:text-primary hover:underline transition-colors"
                      >
                        hello@stattarian.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-neutral-50">
                        Response time
                      </div>
                      <div className="text-sm text-neutral-300">
                        We typically respond within one working day.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
