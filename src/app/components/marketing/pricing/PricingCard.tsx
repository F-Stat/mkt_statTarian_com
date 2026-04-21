import { Link } from 'react-router'
import { Check } from 'lucide-react'
import { Button } from '../../ui/button'
import { Badge } from '../../ui/badge'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  name: string
  target: string
  price: string
  features: string[]
  tier: 'core' | 'performance' | 'advanced' | 'elite'
  recommended?: boolean
}

const tierGradients: Record<string, string> = {
  core: "bg-gradient-to-b from-[#0A1A24] to-[#0F2A36]",
  performance: "bg-gradient-to-b from-primary/20 to-primary/5",
  advanced: "bg-gradient-to-b from-accent/20 to-accent/5",
  elite: "bg-gradient-to-b from-[#1D546D]/30 to-[#061E29]/10",
}

export function PricingCard({
  name,
  target,
  price,
  features,
  tier,
  recommended = false,
}: PricingCardProps) {
  const isContactUs = price === "Contact us"
  const [amount, cadence] = isContactUs ? [price, null] : price.split('/')

  return (
    <div
      className={cn(
        "relative border rounded-2xl p-8 flex flex-col w-full h-full transition-all hover:shadow-xl hover:-translate-y-1",
        tierGradients[tier],
        recommended ? "border-primary shadow-lg" : "border-border"
      )}
    >
      {recommended && (
        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground whitespace-nowrap">
          Recommended
        </Badge>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">{target}</p>
      </div>

      {/* Price */}
      <div className="mb-6 min-h-[72px]">
        {isContactUs ? (
          <>
            <p
              className="text-4xl font-bold text-primary"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let's talk
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Tailored to your organisation
            </p>
          </>
        ) : (
          <>
            <div className="flex items-end gap-1">
              <span
                className="text-4xl font-bold text-primary"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {amount}
              </span>
              <span className="text-sm text-muted-foreground mb-1">
                /{cadence}
              </span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Paid annually (save 25%)
            </p>
          </>
        )}
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button asChild className="w-full">
        <Link to={isContactUs ? "/contact?plan=elite" : `/contact?plan=${tier}`}>
          {isContactUs ? "Contact Us" : "Get Started"}
        </Link>
      </Button>
    </div>
  )
}