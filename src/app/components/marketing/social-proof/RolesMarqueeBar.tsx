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
    <div className="relative w-full overflow-hidden border-y border-border bg-card py-4">

      {/* Left gradient fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />

      {/* Right gradient fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

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
              {/* Persona-style icon container */}
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
