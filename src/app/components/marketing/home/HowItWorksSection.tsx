import { motion } from 'motion/react'
import { AnimatedSection } from '../AnimatedSection'

const steps = [
  {
    step: '1',
    title: 'Book a Demo',
    description:
      "We'll walk through your academy's structure, modules needed, and user roles in a 30-minute session.",
  },
  {
    step: '2',
    title: 'We Configure Your Academy',
    description:
      'Our team sets up your organisation, imports existing data, and configures roles and permissions.',
  },
  {
    step: '3',
    title: 'Go Live',
    description:
      'Your staff and parents get access. Training, welfare, fixtures, and video — all in one place from day one.',
  },
]

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

export function HowItWorksSection() {
  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container mx-auto px-4">

        <AnimatedSection>
          <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4">
            <div>
              <span
                className={pillClass}
                style={{
                  fontFamily: 'var(--font-heading)',
                  backgroundColor: 'var(--color-brand-700)',
                }}
              >
                Simplified Onboarding
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Built for Day One.
            </h2>
          </div>
        </AnimatedSection>

        <div className="mt-8 md:mt-16 relative">
          {/* Connector Line */}
          <motion.div
            className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-border"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* Step Number Circle */}
                <div
                  className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 md:mb-6 relative z-10 border-2 border-white/10"
                  style={{ backgroundColor: 'var(--color-brand-700)' }}
                >
                  <span
                    className="text-2xl md:text-4xl font-black text-white"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3
                  className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>

                <p className="text-sm md:text-base text-muted-foreground max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}