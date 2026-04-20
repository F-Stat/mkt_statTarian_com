import { PricingCard } from "./PricingCard"
import { motion } from "motion/react"

type TierKey = "core" | "performance" | "advanced" | "elite"

const tiers = [
  {
    name: "Core",
    target: "Foundations for smaller academies",
    price: "£99/month",
    features: ["1", "2", "3", "4", "5"],
    tier: "core" as TierKey,
  },
  {
    name: "Performance",
    target: "Scaling across age groups",
    price: "£249/month",
    features: ["All Core features", "2", "3", "4", "5"],
    tier: "performance" as TierKey,
  },
  {
    name: "Advanced",
    target: "Established full-scale academies",
    price: "£399/month",
    features: ["All Performance features", "2", "3", "4", "5"],
    tier: "advanced" as TierKey,
  },
  {
    name: "Elite",
    target: "Regional hubs & governing bodies",
    price: "£549/month",
    features: ["All Advanced features", "2", "3", "4", "5"],
    tier: "elite" as TierKey,
  },
]

interface PricingTableProps {
  recommendedTier?: TierKey
}

export function PricingTable({ recommendedTier = "performance" }: PricingTableProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {tiers.map((tier, index) => (
          <motion.div
            key={tier.tier}
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
