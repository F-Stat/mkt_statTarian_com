import { ShieldCheck, Globe, Lock } from 'lucide-react'
import { DemoCtaSection } from '../../components/marketing/cta/DemoCtaSection'
import { AnimatedSection } from '../../components/marketing/AnimatedSection'
import { motion } from 'motion/react'
import walesImage from '../../../assets/abstract-training.jpg'

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white"

const values = [
  {
    icon: ShieldCheck,
    title: 'Player First',
    description:
      'Every product decision starts with one question: does this help a young player develop safely and reach their potential?',
  },
  {
    icon: Globe,
    title: 'Welsh at Heart',
    description:
      'Bilingual Welsh/English from day one. FAW-compliant by design. Built by someone who cares about Welsh football — not just as a market.',
  },
  {
    icon: Lock,
    title: 'Trust by Design',
    description:
      "Safeguarding controls, role-based access, and encrypted audit trails aren't features we added later. They're the foundation everything else is built on.",
  },
]

const problems = [
  {
    before: 'Spreadsheets and email threads for player welfare records',
    after: 'Structured digital records with audit trails and role-based access',
  },
  {
    before: 'Manual FAW COMET data entry, duplicated across multiple tools',
    after: 'Direct FAW COMET integration — register once, sync everywhere',
  },
  {
    before: 'Video analysis on consumer platforms with no safeguarding controls',
    after: 'Purpose-built video tools with age-appropriate access controls',
  },
]

// TODO: Replace with real assets when available
const HERO_IMAGE = ''         // Aerial or wide-angle pitch shot — matches DemoCtaSection tone
const FOUNDER_IMAGE = ''      // Headshot of Steve Lloyd
const WALES_IMAGE = walesImage

export function About() {
  return (
    <main className="pt-24">

      {/* Hero — full-bleed background image with overlay */}
      <section
        className="relative py-32 md:py-48 bg-background bg-cover bg-center"
        style={{ backgroundImage: HERO_IMAGE ? `url(${HERO_IMAGE})` : undefined }}
      >
        {HERO_IMAGE && <div className="absolute inset-0 bg-background/80" />}

        <div className="relative z-10 container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div>
                <span
                  className={pillClass}
                  style={{ fontFamily: 'var(--font-heading)', backgroundColor: 'var(--color-brand-700)' }}
                >
                  About StatTarian
                </span>
              </div>
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Built for Welsh football. By someone who understands it.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A unified platform for FAW academies — player development, welfare, and
                performance, all in one place. No patchwork. No compromises.
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
                    style={{ fontFamily: 'var(--font-heading)', backgroundColor: 'var(--color-brand-700)' }}
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
                          e.currentTarget.style.display = 'none'
                        }}
                      />
                    ) : (
                      'SL'
                    )}
                  </div>

                  <div className="space-y-5">
                    <h2
                      className="text-3xl md:text-4xl font-bold leading-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      "Welsh academies deserved better than a dozen disconnected tools."
                    </h2>
                    <p className="text-lg text-muted-foreground">
                      I've seen first-hand how Welsh football academies operate — the
                      commitment, the passion, the genuine care coaches have for the young
                      players in their charge. But I've also seen the admin burden:
                      registration on one system, schedules on another, welfare records
                      buried in email threads.
                    </p>
                    <p className="text-lg text-muted-foreground">
                      I built StatTarian because an academy managing 50 players shouldn't
                      need enterprise-level IT skills to run safely and compliantly. Every
                      part of this platform — from FAW COMET integration to Welsh-language
                      support — was designed with that reality in mind.
                    </p>
                    <div className="pt-2">
                      <p className="font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                        Steve Lloyd
                      </p>
                      <p className="text-sm text-muted-foreground">Founder & CEO, StatTarian</p>
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
                      style={{ fontFamily: 'var(--font-heading)', backgroundColor: 'var(--color-brand-700)' }}
                    >
                      Why Wales
                    </span>
                  </div>
                  <h2
                    className="text-4xl font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Not a generic platform with a Welsh flag on it.
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    StatTarian was designed from scratch for the FAW ecosystem. That means
                    native bilingual Welsh/English support throughout, FAW safeguarding and
                    COMET compliance baked in — not bolted on — and a genuine understanding
                    of how Welsh community academies actually work.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We're not adapting a platform built for the Premier League. We're
                    building for the grassroots clubs and regional academies that are the
                    backbone of Welsh football.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    {['Bilingual Welsh/English', 'FAW COMET integration', 'FAW safeguarding compliance', 'Built in Wales'].map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-4 py-1.5 rounded-full border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
                  style={{ fontFamily: 'var(--font-heading)', backgroundColor: 'var(--color-brand-700)' }}
                >
                  What We Replaced
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                What we replaced
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                The status quo for most Welsh academies. StatTarian replaces all of it.
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
                  style={{ fontFamily: 'var(--font-heading)', backgroundColor: 'var(--color-brand-700)' }}
                >
                  Our Values
                </span>
              </div>
              <h2
                className="text-4xl md:text-5xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
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
                  style={{ fontFamily: 'var(--font-heading)' }}
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
  )
}