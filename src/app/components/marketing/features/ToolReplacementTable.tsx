import { motion } from 'motion/react'
import { Check } from 'lucide-react'

const replacements = [
  { platform: 'Team Communication App', module: 'Communication & Fixtures' },
  { platform: 'Manual Registration System', module: 'Academy (native integration)' },
  { platform: 'Video Tagging Platform', module: 'Media & Performance' },
  { platform: 'Cloud Video Platform', module: 'Media Library' },
  { platform: 'Video Analysis Software', module: 'Video Analysis' },
  { platform: 'GPS Performance Tracker', module: 'Performance Tracking' },
  { platform: 'Player Scouting Platform', module: 'Player Analytics' },
  { platform: 'Club Website & Scheduling Tool', module: 'Communication & Scheduling' },
  { platform: 'Session Planning Software', module: 'Session Planning' },
  { platform: 'Match Recording System', module: 'Video Capture & Review' },
]

export function ToolReplacementTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th
              className="text-left py-4 px-4 font-bold text-muted-foreground text-sm uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              What you're currently using
            </th>
            <th
              className="text-left py-4 px-4 font-bold text-muted-foreground text-sm uppercase tracking-widest"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              What statTarian gives you instead
            </th>
          </tr>
        </thead>
        <tbody>
          {replacements.map((item, index) => (
            <motion.tr
              key={item.platform}
              className="border-b border-border last:border-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <td className="py-4 px-4 text-muted-foreground">
                {item.platform}
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-accent shrink-0" />
                  <span className="font-medium">{item.module}</span>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}