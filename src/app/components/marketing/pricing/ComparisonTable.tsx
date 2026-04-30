import { Check, Minus } from "lucide-react"
import { cn } from "@/lib/utils"

const tiers = ["Core", "Performance", "Advanced", "Bespoke"]

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
      // 4 ticks
      { name: "Player registration & COMET‑synced profiles", values: [true, true, true, true] },
      { name: "Training schedule & attendance tracking", values: [true, true, true, true] },
      { name: "Parent consent workflows (medical, media, travel)", values: [true, true, true, true] },
      { name: "Squad & age‑group management", values: [true, true, true, true] },
      { name: "Staff profiles, roles & permissions", values: [true, true, true, true] },

      // 3 ticks
      { name: "Full‑season planning & shared academy calendar", values: [false, true, true, true] },

      // 2 ticks
      { name: "Facility & resource scheduling", values: [false, false, true, true] },
      { name: "Travel & logistics coordination", values: [false, false, true, true] },
      { name: "Player trial & recruitment pipeline", values: [false, false, true, true] },
      { name: "Player pathway progression tracking", values: [false, false, true, true] },

      // 1 tick
      { name: "Multi‑academy / regional hub support", values: [false, false, false, true] },
      { name: "Document vault (policies, handbooks, codes of conduct)", values: [false, false, false, true] },
    ],
  },

  {
    category: "Match Centre",
    features: [
      // 3 ticks
      { name: "Team selection & lineup builder", values: [false, true, true, true] },
      { name: "Pre‑match plans & coaching notes", values: [false, true, true, true] },
      { name: "Live match event tagging & stats", values: [false, true, true, true] },
      { name: "Player match ratings", values: [false, true, true, true] },
      { name: "Results, standings & cup progress", values: [false, true, true, true] },

      // 2 ticks
      { name: "Opposition scouting (match)", values: [false, false, true, true] },
      { name: "Automated post‑match reports", values: [false, false, true, true] },
      { name: "Match video upload & event‑linked tagging", values: [false, false, true, true] },
      { name: "Set‑piece library & match templates", values: [false, false, true, true] },
    ],
  },

  {
    category: "Welfare & Safeguarding",
    features: [
      // 4 ticks
      { name: "Basic safeguarding & welfare records", values: [true, true, true, true] },
      { name: "Safeguarding concern reporting", values: [true, true, true, true] },
      { name: "GDPR data retention & compliance", values: [true, true, true, true] },

      // 3 ticks
      { name: "Medical records & history", values: [false, true, true, true] },
      { name: "Injury register", values: [false, true, true, true] },
      { name: "Fit‑to‑play & availability status", values: [false, true, true, true] },

      // 2 ticks
      { name: "Medication management", values: [false, false, true, true] },
      { name: "Return‑to‑play workflow", values: [false, false, true, true] },
      { name: "Wellbeing check‑ins", values: [false, false, true, true] },
      { name: "FAW licence compliance dashboard", values: [false, false, true, true] },

      // 1 tick
      { name: "Safeguarding case management", values: [false, false, false, true] },
      { name: "Complete welfare audit trail", values: [false, false, false, true] },
    ],
  },

  {
    category: "Educational Support",
    features: [
      // 3 ticks
      { name: "School contacts per player", values: [false, true, true, true] },

      // 2 ticks
      { name: "Education workshop tracking", values: [false, false, true, true] },
      { name: "Workshop attendance tracking", values: [false, false, true, true] },
      { name: "School liaison record", values: [false, false, true, true] },

      // 1 tick
      { name: "Liaison follow‑up reminders", values: [false, false, false, true] },
      { name: "Coach development workshop tracking", values: [false, false, false, true] },
    ],
  },

  {
    category: "Development & Analysis",
    features: [
      // 3 ticks
      { name: "Individual Development Plans (IDPs)", values: [false, true, true, true] },
      { name: "Technical & tactical evaluations", values: [false, true, true, true] },
      { name: "Performance benchmarking", values: [false, true, true, true] },

      // 2 ticks
      { name: "Physical benchmarks & LTAD profiling", values: [false, false, true, true] },
      { name: "Training load & recovery monitoring", values: [false, false, true, true] },
      { name: "Video library & tagging tools", values: [false, false, true, true] },
      { name: "Player highlight reel builder", values: [false, false, true, true] },
      { name: "Player progression charts", values: [false, false, true, true] },
      { name: "Coach feedback & session ratings", values: [false, false, true, true] },
      { name: "Advanced reporting & analytics", values: [false, false, true, true] },
      { name: "Custom report builder", values: [false, false, true, true] },

      // 1 tick
      { name: "Peer & national benchmark comparisons", values: [false, false, false, true] },
      { name: "Age‑group curriculum builder", values: [false, false, false, true] },
      { name: "Player comparison tool (side‑by‑side)", values: [false, false, false, true] },
    ],
  },

  {
    category: "Communication",
    features: [
      // 4 ticks
      { name: "Staff communication tools", values: [true, true, true, true] },
      { name: "Parent portal & communication", values: [true, true, true, true] },
      { name: "Announcements & notice board", values: [true, true, true, true] },

      // 3 ticks
      { name: "Automated reminders", values: [false, true, true, true] },
      { name: "In‑app notification controls", values: [false, false, true, true] },

      // 2 ticks
      { name: "Emergency alerts (weather, cancellations)", values: [false, false, true, true] },

      // 1 tick
      { name: "Communication audit log", values: [false, false, false, true] },
    ],
  },

  {
    category: "Support & Onboarding",
    features: [
      // 4 ticks
      { name: "Standard support", values: [true, true, true, true] },

      // 3 ticks
      { name: "Data migration support", values: [false, true, true, true] },

      // 2 ticks
      { name: "Dedicated onboarding", values: [false, false, true, true] },
      { name: "Priority response support", values: [false, false, true, true] },

      // 1 tick
      { name: "Quarterly academy health review", values: [false, false, false, true] },
      { name: "Dedicated success manager", values: [false, false, false, true] },
    ],
  },
];


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