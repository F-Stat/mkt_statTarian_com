import { PricingCard } from "./PricingCard"

type TierKey = "core" | "performance" | "advanced" | "elite"

const tiers = [
  {
    name: "Core",
    persona: "For academies building structure and centralising operations.",
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
    persona: "For academies levelling up coaching, analysis, and player development.",
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
    persona: "For multi‑team programmes running full player pathways.",
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
    name: "Bespoke integrations",
    persona: "For governing bodies, multi‑site academies, and enterprise‑scale operations.",
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
