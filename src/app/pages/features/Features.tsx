import { ModuleShowcase } from '../../components/marketing/features/ModuleShowcase'
import { DemoCtaSection } from '../../components/marketing/cta/DemoCtaSection'
import { AnimatedSection } from '../../components/marketing/AnimatedSection'
import { RolesMarqueeBar } from "../../components/marketing/RolesMarqueeBar";

export function Features() {
  return (
    <main className="pt-16 md:pt-24">

      {/* Page Hero */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto space-y-4 md:space-y-6">
              <div>
                <span
                  className="inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    backgroundColor: 'var(--color-brand-700)',
                  }}
                >
                  The Platform
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Everything your academy needs, in one place.
              </h1>
              <p
                className="text-base md:text-xl text-muted-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Purpose-built modules. One unified platform.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Roles Marquee — placed immediately after hero */}
      <section className="bg-background">
        <RolesMarqueeBar />
      </section>

      {/* Module Showcases */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <ModuleShowcase />
        </div>
      </section>

      <DemoCtaSection />
    </main>
  )
}
