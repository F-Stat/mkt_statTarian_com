import { useState } from 'react'
import { cn } from '@/lib/utils'

type TierKey = 'starter' | 'pro' | 'enterprise'

const playerOptions = [
  { key: '30', label: '≤ 30' },
  { key: '100', label: '31–100' },
  { key: '100+', label: '100+' },
]

const staffOptions = [
  { key: '5', label: '1–5' },
  { key: '20', label: '6–20' },
  { key: '20+', label: '20+' },
]

interface TierQualifierWidgetProps {
  onRecommendation: (tier: TierKey) => void
}

export function TierQualifierWidget({
  onRecommendation,
}: TierQualifierWidgetProps) {
  const [players, setPlayers] = useState<string | null>(null)
  const [staff, setStaff] = useState<string | null>(null)

  const determineRecommendation = (
    playerCount: string,
    staffCount: string
  ): TierKey => {
    if (playerCount === '30' && staffCount === '5') {
      return 'starter'
    } else if (playerCount === '100+' || staffCount === '20+') {
      return 'enterprise'
    } else {
      return 'pro'
    }
  }

  const handlePlayerSelect = (value: string) => {
    setPlayers(value)
    if (staff) {
      const recommendation = determineRecommendation(value, staff)
      onRecommendation(recommendation)
    }
  }

  const handleStaffSelect = (value: string) => {
    setStaff(value)
    if (players) {
      const recommendation = determineRecommendation(players, value)
      onRecommendation(recommendation)
    }
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 max-w-xl mx-auto mb-12">
      <h3
        className="text-lg font-semibold mb-6"
        style={{ fontFamily: 'var(--font-heading)' }}
      >
        Find your perfect plan
      </h3>

      {/* Question 1 */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-3">
          How many players are in your academy?
        </label>
        <div className="flex gap-2">
          {playerOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => handlePlayerSelect(option.key)}
              className={cn(
                'flex-1 px-4 py-2 rounded-lg border text-sm font-medium transition-all',
                players === option.key
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background border-border hover:border-primary'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Question 2 */}
      <div>
        <label className="block text-sm font-medium mb-3">
          How many staff accounts do you need?
        </label>
        <div className="flex gap-2">
          {staffOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => handleStaffSelect(option.key)}
              className={cn(
                'flex-1 px-4 py-2 rounded-lg border text-sm font-medium transition-all',
                staff === option.key
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-background border-border hover:border-primary'
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
