import {
  Users,
  ClipboardList,
  Dumbbell,
  Video,
  BarChart2,
  MessageSquare,
  ShieldCheck,
  BookOpen,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const platforms = [
  {
    icon: Users,
    title: "Player & Squad Management",
    description:
      "Every player record in one place. Import from FAW COMET, track registration status, biological maturation data, and get submission-ready exports without the spreadsheet chaos.",
  },
  {
    icon: ClipboardList,
    title: "Match Events & Tagging",
    description:
      "Tag goals, assists, and key actions live or post-match — linked directly to video timestamps. Stay on top of filming compliance with automatic FAW reporting built in.",
  },
  {
    icon: Dumbbell,
    title: "Training & Load Tracking",
    description:
      "Plan sessions, monitor player load, and flag fatigue before it becomes injury. Daily wellbeing check-ins and filming compliance trackers keep your coaching and medical staff ahead of the curve.",
  },
  {
    icon: Video,
    title: "Video Library",
    description:
      "Club-hosted, securely isolated footage linked to every match and training event. Right-to-erasure workflows built in — no third-party apps, no compliance headaches.",
  },
  {
    icon: BarChart2,
    title: "Analytics & Reports",
    description:
      "From individual dashboards to multi-team comparisons, your performance data is always export-ready. Branded PDFs at the click of a button — built for coaches and directors alike.",
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description:
      "Replace the group chat chaos with a secure, auditable messaging channel. Team announcements, read receipts, and scheduled messages — all logged and fully compliant.",
  },
  {
    icon: ShieldCheck,
    title: "Safeguarding & Welfare",
    description:
      "A dedicated case management module completely isolated from Club Admin. Private logs, DBS status tracking, and escalation workflows — built for the seriousness the role demands.",
  },
  {
    icon: BookOpen,
    title: "Player Development Planning",
    description:
      "Season objectives, position pathways, promotion readiness flags, and FAW COMET linkage — all under one roof. Academic progress, life-skills tracking, and maturation screening included.",
  },
  {
    icon: GraduationCap,
    title: "Learning Hub",
    description:
      "A three-pillar learning environment covering Player Development, Safeguarding Education, and Life Skills. Multi-format content, age-gated delivery, and FAW compliance auto-logging per player.",
  },
]

const navButtonClass =
  "absolute top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full border border-transparent flex items-center justify-center text-foreground hover:opacity-80 transition-opacity shadow-lg"

export function PersonaSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, containScroll: false },
    [Autoplay({ delay: 3000, stopOnInteraction: true })],
  )

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-16 space-y-3 md:space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span
              className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white"
              style={{
                fontFamily: "var(--font-heading)",
                backgroundColor: 'var(--color-brand-700)',
              }}
            >
              Academy Management Tools
            </span>
          </div>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            All your academy needs. One connected platform.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            statTarian was built specifically for football academies and youth
            development programmes — cloud-based, multi-role, and designed
            around the real demands of modern academy operations.
          </p>
        </motion.div>

        {/* Slider + Nav */}
        <div className="relative">

          {/* Prev Button */}
          <button
            onClick={scrollPrev}
            className={`${navButtonClass} -left-3 md:-left-5`}
            style={{ backgroundColor: 'var(--color-brand-700)' }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className={`${navButtonClass} -right-3 md:-right-5`}
            style={{ backgroundColor: 'var(--color-brand-700)' }}
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          {/* Carousel — 1 card on mobile, 3 on desktop */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing px-2"
            ref={emblaRef}
          >
            <div className="flex">
              {platforms.map((item) => (
                <div
                  key={item.title}
                  className="flex-none w-[85%] md:w-[calc(33.333%)] pl-4 md:pl-6"
                >
                  <Link to="/features">
                    <div className="bg-card border border-border rounded-2xl p-5 md:p-8 h-full flex flex-col gap-4 md:gap-6 hover:border-primary transition-colors group">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <h3
                        className="text-lg md:text-xl font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground flex-1 text-xs md:text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="text-accent text-xs md:text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}