import { Check, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const tiers = ["Core", "Performance", "Advanced", "Elite"]

type CellValue = boolean | string

interface Feature {
  name: string
  values: [CellValue, CellValue, CellValue, CellValue]
}

interface FeatureGroup {
  category: string
  features: Feature[]
}

const featureGroups: FeatureGroup[] = [
  {
    category: "Academy Management",
    features: [
      { name: "Player registration & profiles", values: [true, true, true, true] },
      { name: "Session scheduling & attendance", values: [true, true, true, true] },
      { name: "FAW COMET integration", values: [true, true, true, true] },
      { name: "Welsh/English bilingual support", values: [true, true, true, true] },
      { name: "Squad & age group management", values: [false, true, true, true] },
      { name: "Fixture management & match reports", values: [false, true, true, true] },
      { name: "Staff profiles, roles & permissions", values: [false, true, true, true] },
      { name: "Season planning & academy calendar", values: [false, true, true, true] },
      { name: "Facility booking & resource management", values: [false, true, true, true] },
      { name: "Trial & recruitment pipeline", values: [false, false, true, true] },
      { name: "Player pathway tracking", values: [false, false, true, true] },
      { name: "Multi-academy / regional hub support", values: [false, false, false, true] },
    ],
  },
  {
    category: "Match Centre",
    features: [
      { name: "Team selection & lineup builder", values: [false, true, true, true] },
      { name: "Pre-match preparation & notes", values: [false, true, true, true] },
      { name: "Opposition scouting (match)", values: [false, true, true, true] },
      { name: "Live match stats & event input", values: [false, true, true, true] },
      { name: "Post-match reports", values: [false, true, true, true] },
      { name: "Player match ratings", values: [false, true, true, true] },
      { name: "Results, standings & cup progress", values: [false, true, true, true] },
      { name: "Travel & logistics coordination", values: [false, true, true, true] },
      { name: "Match video upload & clip tagging", values: [false, false, true, true] },
    ],
  },
  {
    category: "Welfare & Safeguarding",
    features: [
      { name: "Basic safeguarding & welfare records", values: [true, true, true, true] },
      { name: "Concern reporting", values: [true, true, true, true] },
      { name: "Medical records & history", values: [false, true, true, true] },
      { name: "Injury register", values: [false, true, true, true] },
      { name: "Fit-to-play / availability flags", values: [false, true, true, true] },
      { name: "Medication management", values: [false, false, true, true] },
      { name: "Return-to-play protocols", values: [false, false, true, true] },
      { name: "Wellbeing check-ins", values: [false, false, true, true] },
      { name: "Safeguarding case management", values: [false, false, false, true] },
      { name: "Full welfare audit trail", values: [false, false, false, true] },
      { name: "GDPR data retention & compliance", values: [false, false, false, true] },
      { name: "FAW licence compliance dashboard", values: [false, false, false, true] },
    ],
  },
  {
    category: "Educational Support",
    features: [
      { name: "Education workshop log", values: [false, false, true, true] },
      { name: "Workshop attendance tracking", values: [false, false, true, true] },
      { name: "School contacts per player", values: [false, false, true, true] },
      { name: "School liaison log", values: [false, false, true, true] },
      { name: "Follow-up reminders for liaison actions", values: [false, false, false, true] },
      { name: "Coach development workshop tracking", values: [false, false, false, true] },
    ],
  },
  {
    category: "Development & Analysis",
    features: [
      { name: "Individual Development Plans (IDPs)", values: [false, false, true, true] },
      { name: "Technical & tactical assessments", values: [false, false, true, true] },
      { name: "Physical benchmarks & LTAD", values: [false, false, true, true] },
      { name: "Training load & recovery monitoring", values: [false, false, true, true] },
      { name: "Video library & tagging tools", values: [false, false, true, true] },
      { name: "Player highlight reel builder", values: [false, false, true, true] },
      { name: "Performance benchmarking", values: [false, false, true, true] },
      { name: "Progression charts & trends", values: [false, false, true, true] },
      { name: "Peer & national benchmark comparison", values: [false, false, true, true] },
      { name: "Coach feedback & session ratings", values: [false, false, true, true] },
      { name: "Advanced reporting & analytics", values: [false, false, true, true] },
      { name: "Custom report builder", values: [false, false, true, true] },
    ],
  },
  {
    category: "Communication",
    features: [
      { name: "Staff communication tools", values: [false, true, true, true] },
      { name: "Parent portal & communication", values: [false, true, true, true] },
      { name: "Announcement board & notice board", values: [false, true, true, true] },
      { name: "Automated reminders", values: [false, true, true, true] },
      { name: "In-app notification management", values: [false, true, true, true] },
      { name: "Communication audit log", values: [false, false, false, true] },
    ],
  },
  {
    category: "Support & Onboarding",
    features: [
      { name: "Standard email support", values: [true, true, true, true] },
      { name: "Data migration support", values: [false, true, true, true] },
      { name: "Dedicated onboarding", values: [false, false, false, true] },
      { name: "Priority support", values: [false, false, false, true] },
    ],
  },
]

function Cell({ value }: { value: CellValue }) {
  if (value === true) {
    return (
      <div className="flex justify-center">
        <Check className="h-5 w-5 text-primary" />
      </div>
    )
  }
  if (value === false) {
    return (
      <div className="flex justify-center">
        <Minus className="h-4 w-4 text-muted-foreground/30" />
      </div>
    )
  }
  return (
    <div className="text-center text-sm text-muted-foreground">{value}</div>
  )
}

export function ComparisonTable() {
  return (
    <div className="max-w-5xl mx-auto">

      {/* Scroll hint — visible on mobile only */}
      <p className="text-xs text-muted-foreground text-center mb-3 md:hidden">
        Scroll to compare all plans →
      </p>

      {/* Horizontally scrollable on mobile */}
      <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
        <table className="w-full text-sm border-collapse min-w-[600px]">

          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-4 pr-6 font-medium text-muted-foreground w-2/5 sticky left-0 bg-card z-10">
                Feature
              </th>
              {tiers.map((tier) => (
                <th
                  key={tier}
                  className="py-4 px-4 text-center font-bold w-[15%]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {tier}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {featureGroups.map((group) => (
              <>
                {/* CATEGORY ROW — pill cell is sticky, remaining columns span the rest */}
                <tr key={group.category} className="border-t border-border">
                  {/* Sticky left cell holds the pill */}
                  <td className="pt-8 pb-4 sticky left-0 bg-card z-10 w-2/5">
                    <span
                      className="
                        inline-block px-3 py-1
                        rounded-full
                        text-[10px] md:text-xs
                        uppercase tracking-[0.2em] font-semibold
                        text-white
                        bg-[var(--color-brand-700)]
                      "
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {group.category}
                    </span>
                  </td>
                  {/* Empty cells for the tier columns so the row height is correct */}
                  <td colSpan={4} className="pt-8 pb-4 bg-card" />
                </tr>

                {/* FEATURE ROWS */}
                {group.features.map((feature, i) => (
                  <tr
                    key={feature.name}
                    className={cn(
                      "border-b border-border/50",
                      i % 2 === 0 ? "bg-background/20" : ""
                    )}
                  >
                    <td className="py-3 pr-6 text-muted-foreground sticky left-0 bg-card z-10">
                      {feature.name}
                    </td>
                    {feature.values.map((value, vi) => (
                      <td key={vi} className="py-3 px-4">
                        <Cell value={value} />
                      </td>
                    ))}
                  </tr>
                ))}
              </>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}