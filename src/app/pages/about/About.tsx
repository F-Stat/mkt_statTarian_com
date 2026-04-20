import { ShieldCheck, Globe, Lock } from 'lucide-react'
import { DemoCtaSection } from '../../components/marketing/cta/DemoCtaSection'
import { AnimatedSection } from '../../components/marketing/AnimatedSection'
import { motion } from 'motion/react'

const values = [
  {
    icon: ShieldCheck,
    title: 'Player First',
    description:
      'Every decision is made with player development and welfare at its core',
  },
  {
    icon: Globe,
    title: 'Welsh at Heart',
    description:
      'Native bilingual support and FAW compliance built in from day one',
  },
  {
    icon: Lock,
    title: 'Trust by Design',
    description:
      'Enterprise-grade safeguarding, RBAC, and audit trails — not an afterthought',
  },
]

const teamMembers = [
  { name: 'Team Member 1', role: 'Founder & CEO' },
  { name: 'Team Member 2', role: 'Head of Product' },
  { name: 'Team Member 3', role: 'Lead Engineer' },
  { name: 'Team Member 4', role: 'Safeguarding Specialist' },
]

export function About() {
  return (
    <main className="pt-24">
      {/* Page Hero */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Built for Welsh football. By people who love the game.
              </h1>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <AnimatedSection>
              <div className="space-y-6">
                <h2
                  className="text-4xl font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground">
                  To provide Welsh football academies with a unified platform
                  that puts player development, welfare, and performance at the
                  centre of everything they do.
                </p>
                <p className="text-lg text-muted-foreground">
                  We believe academies shouldn't have to juggle 10 different
                  tools to do their jobs. StatTarian brings it all together.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="aspect-square rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground text-sm">
                {/* TODO: Replace with real asset */}
                [Brand Graphic — Stylised Football Pitch]
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto space-y-6">
              <h2
                className="text-4xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground">
                Welsh football academies have long relied on a patchwork of
                tools — scheduling apps, spreadsheets, separate video platforms,
                and disconnected communication channels. StatTarian was built to
                change that.
              </p>
              <p className="text-lg text-muted-foreground">
                A single, purposefully designed platform that puts the player at
                the centre of everything. From registration through FAW COMET
                integration to performance tracking, video analysis, and
                safeguarding — all in one secure, compliant system.
              </p>
              <p className="text-lg text-muted-foreground">
                Built in Wales, for Welsh football, with the unique needs of FAW
                academies front and centre.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Values
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-background border border-border rounded-2xl p-8 flex flex-col gap-6"
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

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Team
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="h-32 w-32 rounded-full bg-muted">
                  {/* TODO: Replace with real asset */}
                </div>
                <div>
                  <div
                    className="font-semibold"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {member.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {member.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            {/* TODO: Replace with real asset */}
            [Placeholder — team profiles to be added]
          </p>
        </div>
      </section>

      <DemoCtaSection />
    </main>
  )
}
