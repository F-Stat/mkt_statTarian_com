import { Star } from 'lucide-react'
import { motion } from 'motion/react'

const testimonials = [
  {
    quote:
      'StatTarian has transformed how we manage our development programme. Everything — IDPs, welfare checks, video, fixture scheduling — is finally in one place.',
    name: 'James O.',
    role: 'Academy Director',
    academy: 'Welsh Tier 1 Academy',
  },
  {
    quote:
      'The safeguarding audit trail alone saves us hours every week. I know exactly who accessed what and when — without chasing emails.',
    name: 'Sian W.',
    role: 'Safeguarding Lead',
    academy: 'FAW Licensed Academy',
  },
  {
    quote:
      'As a head coach I used to switch between four different apps before a session. Now everything is right there — player profiles, load data, video clips, session plan.',
    name: 'Rhys T.',
    role: 'Head Coach',
    academy: 'Under-18s Academy',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          style={{ fontFamily: 'var(--font-display)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by academies across Wales
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-6"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Quote Mark */}
              <div
                className="text-6xl font-black text-primary opacity-20"
                style={{ fontFamily: 'var(--font-display)' }}
                aria-hidden="true"
              >
                "
              </div>

              {/* Quote */}
              <p className="text-foreground flex-1">{testimonial.quote}</p>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Attribution */}
              <div>
                <div
                  className="font-semibold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  [Placeholder] {testimonial.name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.academy}
                </div>
                {/* TODO: Replace with real testimonial */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
