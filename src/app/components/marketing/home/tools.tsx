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
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

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
      "A dedicated case management module completely isolated from club admin. Private logs, DBS status tracking, and escalation workflows — built for the seriousness the role demands.",
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

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

export function Tools() {
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
              className={pillClass}
              style={{
                fontFamily: "var(--font-heading)",
                backgroundColor: "var(--color-brand-700)",
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

        {/* 3×3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {platforms.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link to="/features">
                <div className="bg-card border border-border/60 rounded-2xl p-6 md:p-10 h-full flex flex-col gap-4 md:gap-6 shadow-sm md:shadow-md hover:border-primary transition-colors group">
                  {/* Updated icon container */}
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary/25 transition-colors">
                    <item.icon className="h-6 w-6 md:h-7 md:w-7 text-primary stroke-[2.25]" />
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

                  <div className="mt-auto pt-2">
                    <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-primary/40 text-primary text-xs md:text-sm font-semibold group-hover:bg-primary/10 group-hover:border-primary transition-all">
                      Learn more{" "}
                      <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
