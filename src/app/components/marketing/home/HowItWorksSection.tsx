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

export function HowItWorksSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Built for Day One.
          </h2>
        </AnimatedSection>

        <div className="mt-16 relative">
          {/* Connector Line */}
          <motion.div
            className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-border"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
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
                <div className="w-24 h-24 rounded-full bg-primary/20 border-4 border-background flex items-center justify-center mb-6 relative z-10">
                  <span
                    className="text-4xl font-black text-primary"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.step}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {step.title}
                </h3>

                <p className="text-muted-foreground max-w-xs">
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