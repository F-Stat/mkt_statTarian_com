import { DemoCtaSection } from "../../components/marketing/cta/DemoCtaSection";
import { AnimatedSection } from "../../components/marketing/AnimatedSection";
import { RoleCategories } from "../../components/marketing/features/RoleCategories";
import { ModuleShowcase } from "../../components/marketing/features/ModuleShowcase";

// ─── Page ─────────────────────────────────────────────────────────────────────

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

export function Features() {
  return (
    <main className="pt-16 md:pt-24">
      {/* Page Hero */}
      <section className="relative pt-20 md:pt-32 pb-16 md:pb-24 overflow-hidden bg-background">
        {/* Subtle brand‑tinted grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.22]"
          style={{
            backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.34) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.34) 1px, transparent 1px)
    `,
            backgroundSize: "160px 160px",
          }}
        />

        {/* Soft brand‑tinted radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
      radial-gradient(
        circle at center,
        rgba(95,149,152,0.24) 0%,
        transparent 80%
      )
    `,
          }}
        />

        <div className="relative container mx-auto px-4">
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
                  The Platform
                </span>
              </div>

              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Your academy. Organised, connected, and finally in control.
              </h1>

              <p
                className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                No more spreadsheets, no more chasing coaches, no more missing
                consents — just one platform built for the demands of Welsh
                academy football.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="pt-8 md:pt-12 pb-8 md:pb-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Showcase header */}
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-12 space-y-3 md:space-y-4">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  Academy Management Tools
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Every tool your academy runs on.
              </h2>
              <p
                className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Seven integrated modules — built specifically for Welsh football
                academies and youth development programmes. Select a module to
                explore what it does.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <ModuleShowcase />
          </AnimatedSection>
        </div>
      </section>

      {/* Role Categories */}
      <section className="pt-4 md:pt-6 pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <RoleCategories />
        </div>
      </section>

      <DemoCtaSection />
    </main>
  );
}
