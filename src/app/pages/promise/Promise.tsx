import { AnimatedSection } from '../../components/marketing/AnimatedSection'

export function Promise() {
  return (
    <main className="pt-24">
      {/* Page Hero */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                statTarian Promise
              </h1>

              <p
                className="text-xl text-muted-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                A platform you can trust with your academy.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Why We Exist
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Football academies deserve better than chaos. For too long,
                youth programmes have been forced to stitch together WhatsApp
                groups, spreadsheets, PDFs, email threads, and outdated systems
                that were never built for the realities of modern player
                development.
              </p>

              <p>
                The result is predictable: missed messages, admin overload,
                safeguarding risk, frustrated parents, and coaches spending more
                time organising than coaching.
              </p>

              <p>
                StatTarian exists to fix this — to bring clarity where there’s
                noise, to give time back to the people who develop players, and
                to ensure nothing and no one slips through the cracks.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Five Promises */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Our Five Promises
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-12">
              {[
                {
                  title: '1. Clarity Over Chaos',
                  body:
                    'Your academy should run from one connected system — not a patchwork of tools. We promise a platform where schedules, communication, player information, and safeguarding records live together, stay in sync, and stay accessible to the right people.',
                },
                {
                  title: '2. Safeguarding First',
                  body:
                    'Nothing matters more. We design every workflow with safeguarding and compliance at the centre — clear audit trails, secure communication, and role‑based access that protects players and supports staff.',
                },
                {
                  title: '3. Time Back for Coaches',
                  body:
                    'Coaches should coach — not drown in admin. We remove repetitive, manual tasks through automation, smart scheduling, and information that’s always where it should be.',
                },
                {
                  title: '4. Parents Always Informed',
                  body:
                    'Parents shouldn’t have to guess, chase, or hope they’ve seen the latest message. We promise clear, timely, reliable communication through a single, consistent channel.',
                },
                {
                  title: '5. Built for Football',
                  body:
                    'Football has its own rhythms, pressures, and operational realities. We build exclusively for the game — your workflows, your terminology, your season structure, your safeguarding requirements.',
                },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              How We Deliver on This Promise
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We don’t rely on slogans. We rely on systems — a single connected
              platform, real‑time updates, role‑based access, automated
              workflows, secure communication, and a product shaped by real
              academy experience.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What You Can Expect From Us
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Fast onboarding. Transparent roadmap. No hidden fees. No lock‑in
              tricks. Human support when you need it. Continuous improvement
              driven by real academy feedback.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Non-negotiables */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              What We Won’t Compromise On
            </h2>

            <ul className="list-disc pl-6 text-lg text-muted-foreground leading-relaxed space-y-2">
              <li>We won’t ship features that create safeguarding risk.</li>
              <li>We won’t add complexity for the sake of it.</li>
              <li>We won’t ignore feedback from coaches or parents.</li>
              <li>We won’t build for every sport — only football.</li>
              <li>We won’t sacrifice clarity for speed.</li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* Closing */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection>
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              A Final Word
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Football deserves better tools. Coaches deserve more time. Parents
              deserve clarity. Players deserve safe, organised environments where
              they can grow. That’s the promise behind StatTarian — and we intend
              to keep it.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
}
