import { DemoRequestForm } from '../../components/marketing/forms/DemoRequestForm'
import { AnimatedSection } from '../../components/marketing/AnimatedSection'
import { Clock, Mail, ShieldCheck, Users, Workflow } from 'lucide-react'
import contactBg from '@/assets/contact-bg.jpg'

export function Contact() {
  return (
    <main className="pt-24">

      {/* HERO */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Request a Demo
              </h1>
              <p
                className="text-xl text-muted-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                We'll set up a 30-minute walkthrough tailored to your academy's
                structure and needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FULL‑PAGE BACKGROUND CONTACT SECTION */}
      <section
        className="relative py-24"
        style={{
          backgroundImage: `url(${contactBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

            {/* LEFT COLUMN — FORM */}
            <AnimatedSection>
              <div className="bg-background border border-border rounded-xl p-10 shadow-xl">
                <DemoRequestForm />
              </div>
            </AnimatedSection>

            {/* RIGHT COLUMN — INFO PANEL (NO CARD, DIRECT ON BACKGROUND) */}
            <AnimatedSection delay={0.2}>
              <div className="space-y-12 text-neutral-50">

                {/* What to expect */}
                <div>
                  <h2
                    className="text-3xl font-bold mb-6"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    What to expect from your demo
                  </h2>

                  <ul className="space-y-6">
                    <li className="flex items-start gap-4">
                      <Users className="h-6 w-6 text-primary shrink-0" />
                      <span>
                        A personalised walkthrough of StatTarian’s modules,
                        tailored to your academy’s structure and age groups.
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <Workflow className="h-6 w-6 text-primary shrink-0" />
                      <span>
                        A review of your current workflow and how StatTarian
                        can streamline operations across coaching, welfare,
                        fixtures, and communication.
                      </span>
                    </li>

                    <li className="flex items-start gap-4">
                      <ShieldCheck className="h-6 w-6 text-primary shrink-0" />
                      <span>
                        Live Q&A covering safeguarding, compliance, permissions,
                        and data management.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Contact details */}
                <div className="border-t border-white/20 pt-10 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Email us</div>
                      <a
                        href="mailto:hello@stattarian.com"
                        className="text-sm text-accent hover:underline"
                      >
                        hello@stattarian.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">Response time</div>
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
  )
}
