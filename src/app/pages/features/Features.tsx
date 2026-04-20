import { useState } from 'react'
import { RoleFilterBar } from '../../components/marketing/features/RoleFilterBar'
import { ModuleGrid } from '../../components/marketing/features/ModuleGrid'
import { DemoCtaSection } from '../../components/marketing/cta/DemoCtaSection'
import { AnimatedSection } from '../../components/marketing/AnimatedSection'

export function Features() {
  const [selectedRole, setSelectedRole] = useState('all')

  return (
    <main className="pt-24">
      {/* Page Hero */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Everything your academy needs, in one place.
              </h1>
              <p
                className="text-xl text-muted-foreground"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Eight purpose-built modules. One unified platform.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Role Filter Bar */}
      <section className="py-8 bg-card border-y border-border sticky top-[73px] z-40">
        <div className="container mx-auto px-4">
          <RoleFilterBar onFilterChange={setSelectedRole} />
        </div>
      </section>

      {/* Module Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <ModuleGrid selectedRole={selectedRole} />
        </div>
      </section>

      <DemoCtaSection />
    </main>
  )
}
