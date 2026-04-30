import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

// ─── Timing constants (seconds) ──────────────────────────────────────────────
// Adjust these to tune the sequence. Everything else is derived.

const WORDS = ['Organise.', 'Analyse.', 'Elevate.']

const WORD_STAGGER   = 0.60  // gap between each word starting
const WORD_DURATION  = 0.75  // how long each wipe-up takes

const HOLD_AFTER_LAST = 0.30  // pause after 'Elevate.' before tagline appears
const TAGLINE_DURATION = 0.30  // tagline fade-in duration
const TAGLINE_HOLD     = 0.75  // how long tagline sits before everything exits

const EXIT_DURATION    = 0.4  // how long words/tagline take to exit
const LINES_EXIT_AFTER = 0.15  // lines start fading this long after words begin exiting
const LINES_EXIT_DURATION = 0.4 // how long pitch lines take to fade out
const OVERLAY_EXIT_AFTER  = 0.05  // overlay fades immediately after lines finish

// ─── Derived timestamps ───────────────────────────────────────────────────────
const LAST_WORD_START = WORD_STAGGER * (WORDS.length - 1)
const LAST_WORD_END   = LAST_WORD_START + WORD_DURATION
const TAGLINE_DELAY   = LAST_WORD_END + HOLD_AFTER_LAST
const TAGLINE_END     = TAGLINE_DELAY + TAGLINE_DURATION
const EXIT_START      = TAGLINE_END + TAGLINE_HOLD
const LINES_EXIT_START = EXIT_START + LINES_EXIT_AFTER
const OVERLAY_EXIT_START = LINES_EXIT_START + LINES_EXIT_DURATION + OVERLAY_EXIT_AFTER

// ─── Variants ─────────────────────────────────────────────────────────────────

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: {
      delay: i * WORD_STAGGER,
      duration: WORD_DURATION,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
  exit: (i: number) => ({
    y: '-110%',
    opacity: 0,
    transition: {
      delay: i * 0.05,
      duration: EXIT_DURATION,
      ease: [0.7, 0, 1, 1] as const,
    },
  }),
}

const taglineVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: TAGLINE_DELAY,
      duration: TAGLINE_DURATION,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: {
      duration: EXIT_DURATION,
      ease: [0.7, 0, 1, 1] as const,
    },
  },
}

// ─── Component ────────────────────────────────────────────────────────────────

type Phase = 'in' | 'exit'

export function HeroWordReveal({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>('in')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    timerRef.current = setTimeout(
      () => setPhase('exit'),
      EXIT_START * 1000,
    )
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--color-brand-900)' }}
      // Overlay fades out after lines have gone — homepage appears cleanly
      animate={phase === 'exit' ? { opacity: 0 } : { opacity: 1 }}
      transition={
        phase === 'exit'
          ? { delay: OVERLAY_EXIT_START - EXIT_START, duration: 0.35, ease: 'easeInOut' }
          : { duration: 0 }
      }
      onAnimationComplete={() => { if (phase === 'exit') onComplete() }}
    >
      {/* Pitch lines — tied to the same EXIT_START reference */}
      <PitchLines phase={phase} />

      {/* Words + tagline */}
      <AnimatePresence>
        {phase === 'in' && (
          <div className="relative z-10 flex flex-col items-center" style={{ gap: '4px' }}>
            {WORDS.map((word, i) => (
              <div key={word} style={{ overflow: 'hidden', padding: '2px 0' }}>
                <motion.span
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 'clamp(40px, 9vw, 88px)',
                    fontWeight: 900,
                    lineHeight: 1.05,
                    letterSpacing: '-0.01em',
                    color: i === WORDS.length - 1
                      ? 'var(--color-brand-500)'
                      : 'var(--color-neutral-50)',
                  }}
                >
                  {word}
                </motion.span>
              </div>
            ))}

            <motion.p
              variants={taglineVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{
                marginTop: '28px',
                fontFamily: 'var(--font-family-heading)',
                fontSize: '13px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--color-brand-500)',
                fontWeight: 600,
                opacity: 0.6,
              }}
            >
              Football. Organised.
            </motion.p>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ─── Pitch lines ──────────────────────────────────────────────────────────────
// Fades in with the first word, fades out swiftly after exit begins.

function PitchLines({ phase }: { phase: Phase }) {
  return (
    <motion.svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={phase === 'exit' ? { opacity: 0 } : { opacity: 1 }}
      transition={
        phase === 'exit'
          ? { delay: LINES_EXIT_AFTER, duration: LINES_EXIT_DURATION, ease: 'easeIn' }
          : { duration: 0.5, ease: 'easeIn' }
      }
    >
      <line x1="400" y1="0" x2="400" y2="600"
        stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <rect x="250" y="150" width="300" height="300"
        fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <circle cx="400" cy="300" r="90"
        fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <circle cx="400" cy="300" r="5"
        fill="rgba(255,255,255,0.06)" />
      <rect x="330" y="210" width="140" height="180"
        fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
    </motion.svg>
  )
}