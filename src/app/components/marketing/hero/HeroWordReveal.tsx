import { motion } from 'motion/react'

const words = ['Organise.', 'Simplify.', 'Empower.']

export function HeroWordReveal({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-brand-900 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.6, duration: 0.4 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.4,
            },
          },
        }}
        initial="initial"
        animate="animate"
      >
        {words.map((word, index) => (
          <motion.span
            key={word}
            className={`font-display font-black text-7xl md:text-9xl lg:text-[8rem] leading-none ${
              index === words.length - 1 ? 'text-primary' : 'text-foreground'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
            variants={{
              initial: { opacity: 0, y: 40 },
              animate: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}