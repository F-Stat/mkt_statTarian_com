import { PricingCard } from "./PricingCard"
import { motion } from "motion/react"

type TierKey = "core" | "performance" | "advanced" | "elite"

const tiers = [
  {
    name: "Core",
    target: "Foundations for smaller academies",
    price: "£129/month",
    features: [
      "Player registration & profiles",
      "Session scheduling & attendance",
      "FAW COMET integration",
      "Basic safeguarding & welfare records",
      "Welsh/English bilingual support",
    ],
    tier: "core" as TierKey,
  },
  {
    name: "Performance",
    target: "Scaling across age groups",
    price: "£299/month",
    features: [
      "All Core features",
      "Squad & age group management",
      "Parent portal & communication",
      "Fixture management & match reports",
      "Performance assessments & IDPs",
      "Injury register & return-to-play tracking",
    ],
    tier: "performance" as TierKey,
  },
  {
    name: "Advanced",
    target: "Established full-scale academies",
    price: "£499/month",
    features: [
      "All Performance features",
      "Video library & media gallery",
      "Advanced reporting & analytics",
      "Trial & recruitment pipeline",
      "Wellbeing check-ins",
      "Custom report builder",
    ],
    tier: "advanced" as TierKey,
  },
  {
    name: "Elite",
    target: "Regional hubs & governing bodies",
    price: "Contact us",
    features: [
      "All Advanced features",
      "FAW licence compliance dashboard",
      "Multi-academy / regional hub support",
      "Safeguarding case management",
      "Full audit log & compliance documents",
      "Dedicated onboarding & priority support",
    ],
    tier: "elite" as TierKey,
  },
]

interface PricingTableProps {
  recommendedTier?: TierKey
}

export function PricingTable({ recommendedTier = "performance" }: PricingTableProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.tier}
            className="flex"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <PricingCard {...tier} recommended={recommendedTier === tier.tier} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}