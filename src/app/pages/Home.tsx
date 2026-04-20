import { HeroSection } from '../components/marketing/hero/HeroSection'
import { StatsBar } from '../components/marketing/social-proof/StatsBar'
import { PersonaSection } from '../components/marketing/home/PersonaSection'
import { CombinedSection } from '../components/marketing/home/CombinedSection'
import ctaBg from '@/assets/cta-bg.jpg'

export function Home() {
  return (
    <main>
      <HeroSection />
      <StatsBar />
      <PersonaSection />

      {/* Shared background wrapper */}
      <div
        className="relative"
        style={{
          backgroundImage: `url(${ctaBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Shared overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10">
          <CombinedSection />
        </div>
      </div>
    </main>
  )
}
