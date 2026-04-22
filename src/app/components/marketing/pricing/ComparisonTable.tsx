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
      { name: "Trial & recruitment pipeline", values: [false, false, true, true] },
      { name: "Multi-academy / regional hub support", values: [false, false, false, true] },
    ],
  },
  {
    category: "Welfare & Safeguarding",
    features: [
      { name: "Basic safeguarding & welfare records", values: [true, true, true, true] },
      { name: "Injury register & return-to-play tracking", values: [false, true, true, true] },
      { name: "Wellbeing check-ins", values: [false, false, true, true] },
      { name: "Safeguarding case management", values: [false, false, false, true] },
      { name: "Full audit log & compliance documents", values: [false, false, false, true] },
      { name: "FAW licence compliance dashboard", values: [false, false, false, true] },
    ],
  },
  {
    category: "Performance & Analysis",
    features: [
      { name: "Performance assessments & IDPs", values: [false, true, true, true] },
      { name: "Video library & media gallery", values: [false, false, true, true] },
      { name: "Custom report builder", values: [false, false, true, true] },
      { name: "Advanced reporting & analytics", values: [false, false, true, true] },
    ],
  },
  {
    category: "Communication",
    features: [
      { name: "Staff communication tools", values: [true, true, true, true] },
      { name: "Parent portal & communication", values: [false, true, true, true] },
      { name: "Announcement board & notice board", values: [false, true, true, true] },
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
              <th className="text-left py-4 pr-6 font-medium text-muted-foreground w-2/5 sticky left-0 bg-card">
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

                {/* CATEGORY PILL ROW */}
                <tr key={group.category} className="border-t border-border">
                  <td
                    colSpan={5}
                    className="pt-8 pb-4 sticky left-0 bg-card"
                  >
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
                    <td className="py-3 pr-6 text-muted-foreground sticky left-0 bg-card">
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
