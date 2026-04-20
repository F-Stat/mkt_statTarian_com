import { useInView } from 'motion/react'
import { useRef } from 'react'
import { useCountUp } from '@/lib/hooks/useCountUp'
import { ShieldCheck, Layers, Clock, Database } from 'lucide-react'

interface StatItem {
  value: number
  suffix?: string
  label: string
  subtitle: string
  icon: React.ElementType
}

const stats: StatItem[] = [
  {
    value: 100,
    suffix: '%',
    label: 'COMPLIANCE-ALIGNED. BY DESIGN.',
    subtitle: 'Built to FAW & FA safeguarding standards',
    icon: ShieldCheck,
  },
  {
    value: 1,
    label: 'PLATFORM. ZERO FRAGMENTATION.',
    subtitle: 'Replacing multiple disconnected tools',
    icon: Layers,
  },
  {
    value: 80,
    suffix: '%',
    label: 'LESS ADMIN. MORE COACHING.',
    subtitle: 'Reported by beta club users',
    icon: Clock,
  },
  {
    value: 100,
    suffix: '%',
    label: 'UNIFIED PLAYER RECORDS. SOURCE OF TRUTH.',
    subtitle: 'One record. Every role. Always in sync.',
    icon: Database,
  },
]

function StatCounter({ stat }: { stat: StatItem }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(stat.value, 1500, isInView)
  const Icon = stat.icon

  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-3 md:gap-4">
      {/* Icon circle */}
      <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 md:w-7 md:h-7 text-primary" strokeWidth={1.5} />
      </div>
      <div
        className="text-4xl md:text-6xl font-black text-foreground leading-none"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {count}{stat.suffix}
      </div>
      <div
        className="text-xs font-bold tracking-widest text-foreground uppercase"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        {stat.label}
      </div>
      <div
        className="text-xs md:text-sm italic text-muted-foreground"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {stat.subtitle}
      </div>
    </div>
  )
}

export function StatsBar() {
  return (
    <div className="w-full py-12 md:py-20 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCounter key={index} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  )
}