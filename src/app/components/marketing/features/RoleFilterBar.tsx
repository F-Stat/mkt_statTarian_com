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
    <div className="w-full overflow-x-auto">
      <div className="flex gap-2 pb-4 min-w-max">
        {roles.map((role) => (
          <button
            key={role.key}
            onClick={() => handleRoleClick(role.key)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap',
              selectedRole === role.key
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            )}
          >
            {role.label}
          </button>
        ))}
      </div>
    </div>
  )
}
