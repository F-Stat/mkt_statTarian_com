import { useInView } from "motion/react";
import { useRef } from "react";
import { useCountUp } from "@/lib/hooks/useCountUp";
import { ShieldCheck, Layers, Clock, Database } from "lucide-react";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  subtitle: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  {
    value: 360,
    suffix: "°",
    label: "UNIFIED PLAYER VIEW.",
    subtitle: "Training, games, wellbeing & education linked",
    icon: Database,
  },
  {
    value: 4,
    suffix: "×",
    label: "MORE DATA POINTS.",
    subtitle: "Compared to typical grassroots systems",
    icon: Layers,
  },
  {
    value: 95,
    suffix: "%",
    label: "BETTER DECISIONS.",
    subtitle: "Reported when using pathway intelligence",
    icon: ShieldCheck,
  },
  {
    value: 100,
    suffix: "%",
    label: "PATHWAY VISIBILITY.",
    subtitle: "Academy → RTC → Senior transitions tracked",
    icon: Clock,
  },
];

function StatCounter({ stat }: { stat: StatItem }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useCountUp(stat.value, 1500, isInView);
  const Icon = stat.icon;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center gap-3 md:gap-4"
    >
      {/* Icon circle — updated */}
      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary stroke-[2.25]" />
      </div>

      <div
        className="text-4xl md:text-6xl font-black text-foreground leading-none"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {count}
        {stat.suffix}
      </div>

      <div
        className="text-xs font-bold tracking-widest text-foreground uppercase"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {stat.label}
      </div>

      <div
        className="text-xs md:text-sm italic text-muted-foreground"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {stat.subtitle}
      </div>
    </div>
  );
}

export function StatsBar() {
  return (
    <div className="w-full py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCounter key={index} stat={stat} />
          ))}
        </div>
      </div>
    </div>
  );
}
