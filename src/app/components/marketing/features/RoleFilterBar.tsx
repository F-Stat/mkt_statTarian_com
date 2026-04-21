import { useState } from 'react'
import { cn } from '@/lib/utils'

const roles = [
  { key: 'all', label: 'All' },
  { key: 'academy_director', label: 'Academy Director' },
  { key: 'head_coach', label: 'Head Coach' },
  { key: 'analyst', label: 'Analyst' },
  { key: 'medical_safeguarding', label: 'Medical & Safeguarding' },
  { key: 'parent', label: 'Parent' },
]

interface RoleFilterBarProps {
  onFilterChange: (role: string) => void
}

export function RoleFilterBar({ onFilterChange }: RoleFilterBarProps) {
  const [selectedRole, setSelectedRole] = useState('all')

  const handleRoleClick = (roleKey: string) => {
    setSelectedRole(roleKey)
    onFilterChange(roleKey)
  }

  return (
    <div className="flex flex-col items-center gap-3">

      {/* Label */}
      <p
        className="text-xs uppercase tracking-widest text-muted-foreground hidden md:block"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Filter by role
      </p>

      {/* Pills — scrollable on mobile, centred on desktop */}
      <div className="relative w-full">
        {/* Fade hints for mobile scroll */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-card to-transparent pointer-events-none md:hidden z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-card to-transparent pointer-events-none md:hidden z-10" />

        <div className="overflow-x-auto scrollbar-none">
          <div className="flex gap-2 md:justify-center min-w-max md:min-w-0 px-6 md:px-0">
            {roles.map((role) => (
              <button
                key={role.key}
                onClick={() => handleRoleClick(role.key)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap border',
                  selectedRole === role.key
                    ? 'text-white border-transparent shadow-md'
                    : 'bg-transparent border-border text-muted-foreground hover:text-foreground hover:border-primary/60 hover:bg-primary/5'
                )}
                style={
                  selectedRole === role.key
                    ? { backgroundColor: 'var(--color-brand-700)' }
                    : {}
                }
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}