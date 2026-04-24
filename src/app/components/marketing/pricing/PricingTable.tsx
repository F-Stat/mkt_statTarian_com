import { PricingCard } from "./PricingCard"

type TierKey = "core" | "performance" | "advanced" | "elite"

const tiers = [
  {
    name: "Core",
    persona: "Grassroots academies and small clubs",
    price: "£99/month",
    features: [
      "Player profiles & attendance",
      "Training & session scheduling",
      "FAW COMET sync",
      "Basic safeguarding & welfare",
      "Welsh/English bilingual support",
    ],
    tier: "core" as TierKey,
  },
  {
    name: "Performance",
    persona: "Academies running multiple squads",
    price: "£299/month",
    features: [
      "All Core features",
      "Squads, phases & fixtures",
      "Staff & parent communication",
      "Injury tracking & availability",
      "Recruitment & trial management",
    ],
    tier: "performance" as TierKey,
  },
  {
    name: "Advanced",
    persona: "Academies with structured development",
    price: "£599/month",
    features: [
      "All Performance features",
      "IDPs, assessments & benchmarks",
      "LTAD & training load monitoring",
      "Video analysis & media tools",
      "Wellbeing & return‑to‑play workflows",
      "Education & player support tools",
      "Advanced analytics & custom reports",
    ],
    tier: "advanced" as TierKey,
  },
  {
    name: "Elite",
    persona: "Pro academies, regional hubs & governing bodies",
    price: "Contact us",
    features: [
      "All Advanced features",
      "Safeguarding case management",
      "Full audit logs & compliance tools",
      "FAW licence dashboard",
      "Multi‑academy / regional hub support",
      "Coach development & education oversight",
    ],
    tier: "elite" as TierKey,
  },
]

export function PricingTable({ recommendedTier }: { recommendedTier: TierKey }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {tiers.map((tier) => (
        <PricingCard
          key={tier.name}
          name={tier.name}
          persona={tier.persona}
          price={tier.price}
          features={tier.features}
          tier={tier.tier}
          recommended={tier.tier === recommendedTier}
        />
      ))}
    </div>
  )
}
