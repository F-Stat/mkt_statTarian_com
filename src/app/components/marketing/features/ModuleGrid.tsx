import {
  GraduationCap,
  TrendingUp,
  Film,
  ShieldCheck,
  MessageSquare,
  BarChart2,
  Settings,
  LayoutDashboard,
} from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'
import { cn } from '@/lib/utils'

export interface Module {
  id: string
  name: string
  icon: typeof GraduationCap
  description: string
  features: string[]
  roles: string[]
}

export const modules: Module[] = [
  {
    id: 'academy',
    name: 'Academy',
    icon: GraduationCap,
    description:
      'Complete player registration and squad management with native FAW COMET integration',
    features: [
      'Player registration & profiles',
      'Squad management across age groups',
      'Fixture scheduling & trials',
      'FAW COMET data ingestion',
      'Season planning & structure',
    ],
    roles: ['all'],
  },
  {
    id: 'performance',
    name: 'Performance',
    icon: TrendingUp,
    description:
      'Track player development with Individual Development Plans and performance benchmarks',
    features: [
      'Individual Development Plans (IDPs)',
      'Physical benchmarks & testing',
      'RPE (Rate of Perceived Exertion) tracking',
      'Session assessments & feedback',
      'Progress tracking & reports',
    ],
    roles: ['head_coach', 'analyst', 'academy_director'],
  },
  {
    id: 'media',
    name: 'Media',
    icon: Film,
    description:
      'Secure video library with player-tagged clips and timestamp annotations',
    features: [
      'Secure video library',
      'Player-tagged clips',
      'Timestamp annotations',
      'Signed playback URLs',
      'Coach playlists',
    ],
    roles: ['head_coach', 'analyst', 'academy_director'],
  },
  {
    id: 'welfare',
    name: 'Welfare',
    icon: ShieldCheck,
    description:
      'Access-controlled safeguarding cases, medical records, and welfare management',
    features: [
      'Safeguarding case management',
      'Medical records (access-gated)',
      'Medication logs',
      'Welfare concern tracking',
      'Full audit trail',
    ],
    roles: ['medical_safeguarding', 'academy_director'],
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: MessageSquare,
    description:
      'Fixture RSVPs, group announcements, and parent portal with safeguarding-audited messaging',
    features: [
      'Fixture RSVPs',
      'Group announcements',
      'Parent portal access',
      'Attendance confirmations',
      'Safeguarding-audited messaging',
    ],
    roles: ['all'],
  },
  {
    id: 'reporting',
    name: 'Reporting',
    icon: BarChart2,
    description:
      'Academy-wide dashboards, attendance trends, and development progress exports',
    features: [
      'Performance dashboards',
      'Attendance trend analysis',
      'Development progress reports',
      'Multi-team insights',
      'Export capabilities',
    ],
    roles: ['academy_director', 'analyst'],
  },
  {
    id: 'account',
    name: 'Account',
    icon: Settings,
    description:
      'Organisation billing, user management, and subscription control',
    features: [
      'Billing management',
      'User role assignment',
      'Subscription control',
      'Seat allocation',
      'Organisation settings',
    ],
    roles: ['academy_director'],
  },
  {
    id: 'home',
    name: 'Home',
    icon: LayoutDashboard,
    description:
      'Role-personalised dashboard showing what matters to each user',
    features: [
      'Personalised dashboards',
      'Role-specific views',
      'Quick access panels',
      'Recent activity',
      'Key metrics at a glance',
    ],
    roles: ['all'],
  },
]

interface ModuleGridProps {
  selectedRole: string
}

export function ModuleGrid({ selectedRole }: ModuleGridProps) {
  const filteredModules = modules.filter(
    (module) =>
      selectedRole === 'all' ||
      module.roles.includes('all') ||
      module.roles.includes(selectedRole)
  )

  return (
    <div className="space-y-24">
      {filteredModules.map((module, index) => {
        const isEven = index % 2 === 0

        return (
          <AnimatedSection
            key={module.id}
            id={module.id}
            className={cn(!filteredModules.includes(module) && 'hidden')}
          >
            <div
              className={cn(
                'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
                !isEven && 'lg:grid-flow-dense'
              )}
            >
              {/* Content */}
              <div className={cn('space-y-6', !isEven && 'lg:col-start-2')}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <module.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3
                    className="text-3xl font-bold"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {module.name}
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground">
                  {module.description}
                </p>

                <ul className="space-y-3">
                  {module.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mockup */}
              <div className={cn(!isEven && 'lg:col-start-1 lg:row-start-1')}>
                <div className="aspect-video rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground text-sm">
                  {/* TODO: Replace with real asset */}
                  [Module Screenshot — {module.name}]
                </div>
              </div>
            </div>
          </AnimatedSection>
        )
      })}
    </div>
  )
}
