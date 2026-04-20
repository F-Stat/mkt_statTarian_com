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
];

export function PersonaSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, containScroll: false },
    [Autoplay({ delay: 3000, stopOnInteraction: true })],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-sm md:text-base uppercase tracking-[0.2em] text-primary font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Academy Management Tools
          </p>

          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            All your academy needs. One connected platform.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
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
            className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-colors shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Carousel */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing px-2"
            ref={emblaRef}
          >
            <div className="flex">
              {platforms.map((item) => (
                <div
                  key={item.title}
                  className="flex-none w-full md:w-[calc(33.333%)] pl-6"
                >
                  <Link to="/features">
                    <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col gap-6 hover:border-primary transition-colors group">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3
                        className="text-xl font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground flex-1 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="text-accent text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn more <ChevronRight className="h-4 w-4" />
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
  );
}
