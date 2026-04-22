"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  GraduationCap,
  Activity,
  HeartPulse,
  UserCheck,
  Star,
  ClipboardList,
} from "lucide-react";

const roles = [
  { label: "Academy Directors", icon: GraduationCap },
  { label: "Head Coaches", icon: Users },
  { label: "Coaches", icon: UserCheck },
  { label: "Analysts", icon: Activity },
  { label: "Safeguarding Leads", icon: Shield },
  { label: "Medical Staff", icon: HeartPulse },
  { label: "Phase Coordinators", icon: ClipboardList },
  { label: "Parents", icon: Users },
  { label: "Players", icon: Star },
];

export function RolesMarqueeBar() {
  return (
    <div className="relative w-full overflow-hidden border-y border-border bg-card py-12">

      {/* Section label */}
      <div className="text-center mb-4">
        <span
          className="
            inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5
            rounded-full text-xs md:text-sm uppercase tracking-[0.2em]
            font-semibold text-white
          "
          style={{
            fontFamily: "var(--font-heading)",
            backgroundColor: "var(--color-brand-700)",
          }}
        >
          Who We Support
        </span>
      </div>

      {/* Divider */}
      <div className="w-12 h-px bg-border/60 mx-auto mb-6" />

      {/* Intro line */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10 text-sm md:text-base text-foreground/70"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Supporting every role across the academy pathway — end to end.
      </motion.div>

      {/* Left gradient fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />

      {/* Right gradient fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee */}
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}
      >
        {[...roles, ...roles].map((role, index) => {
          const Icon = role.icon;

          return (
            <div
              key={index}
              className="flex items-center gap-3 group text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
              </div>

              <span>{role.label}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
