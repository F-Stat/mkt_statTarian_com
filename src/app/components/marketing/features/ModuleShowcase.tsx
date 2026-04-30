"use client";

import { useState, useMemo } from "react";
import {
  GraduationCap,
  TrendingUp,
  Film,
  ShieldCheck,
  MessageSquare,
  ClipboardList,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────────
// BRAND CHECKLIST (replaces old BulletList)
// ─────────────────────────────────────────────────────────────────────────────

function BrandCheck({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-sm bg-[var(--color-brand-700)] text-background text-[10px] font-bold">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

function BrandChecklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <BrandCheck key={item}>{item}</BrandCheck>
      ))}
    </ul>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EYEBROW
// ─────────────────────────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2.5 text-xs font-medium tracking-widest uppercase text-[var(--color-brand-500)]">
      {children}
    </p>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SKELETON PRIMITIVES — brand‑aligned geometry + colour + spacing
// ─────────────────────────────────────────────────────────────────────────────

function SkeletonBar({
  w,
  h = "h-2.5",
  opacity = "opacity-20",
}: {
  w: string;
  h?: string;
  opacity?: string;
}) {
  return <div className={`${h} ${w} ${opacity} rounded-sm bg-white/10`} />;
}

function SkeletonAvatar() {
  return <div className="w-8 h-8 rounded-sm bg-white/10 opacity-20 shrink-0" />;
}

function SkeletonTag({ w = "w-12" }: { w?: string }) {
  return <div className={`h-4 ${w} rounded-sm bg-white/10 opacity-20 shrink-0`} />;
}

function SkeletonCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/5 p-3 flex flex-col gap-2">
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PLAYERS SKELETON UI
// ─────────────────────────────────────────────────────────────────────────────

function PlayersSkeletonUI() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center gap-3 pb-3 border-b border-white/10">
        <SkeletonBar w="w-20" h="h-3" />
        <SkeletonBar w="w-16" h="h-3" />
        <SkeletonBar w="w-24" h="h-3" />
      </div>

      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <SkeletonAvatar />
          <div className="flex-1 flex flex-col gap-1.5 min-w-0">
            <SkeletonBar w="w-28" h="h-2.5" />
            <SkeletonBar w="w-16" h="h-2" opacity="opacity-10" />
          </div>
          <SkeletonTag w="w-10" />
          <SkeletonTag w="w-8" />
        </div>
      ))}

      <div className="mt-auto flex gap-2 flex-wrap">
        <SkeletonTag w="w-14" />
        <SkeletonTag w="w-20" />
        <SkeletonTag w="w-12" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COACHING SKELETON UI
// ─────────────────────────────────────────────────────────────────────────────

function CoachingSkeletonUI() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <SkeletonBar w="w-32" h="h-3" />
        <SkeletonTag w="w-16" />
      </div>

      <div className="grid grid-cols-5 gap-2">
        {["M", "T", "W", "T", "F"].map((d, i) => (
          <div key={i} className="flex flex-col gap-1.5 items-center">
            <div className="text-white/20 text-[10px] font-medium">{d}</div>
            <div
              className={`w-full rounded-sm bg-white/10 ${
                i === 1 ? "h-16" : i === 2 ? "h-24" : "h-10"
              }`}
            />
          </div>
        ))}
      </div>

      <SkeletonCard>
        <SkeletonBar w="w-24" h="h-2" />
        <div className="flex gap-1 items-end h-8">
          {[60, 80, 45, 90, 70, 55, 85].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-white/20"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </SkeletonCard>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────
// MATCHDAY SKELETON UI
// ─────────────────────────────────────────────────────────────────────────────

function MatchdaySkeletonUI() {
  const events = [
    { icon: "⚽", w: "w-20", sub: "w-12" },
    { icon: "🟨", w: "w-24", sub: "w-16" },
    { icon: "⚽", w: "w-20", sub: "w-10" },
    { icon: "🔁", w: "w-16", sub: "w-14" },
  ];

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center justify-between pb-3 border-b border-white/10">
        <SkeletonBar w="w-24" h="h-3" />
        <div className="flex items-center gap-2">
          <div className="h-6 w-8 rounded-sm bg-white/10 flex items-center justify-center text-white/30 text-xs font-bold">
            2
          </div>
          <div className="text-white/20 text-xs">—</div>
          <div className="h-6 w-8 rounded-sm bg-white/10 flex items-center justify-center text-white/30 text-xs font-bold">
            1
          </div>
        </div>
        <SkeletonTag w="w-12" />
      </div>

      <div className="flex flex-col gap-3">
        {events.map((e, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="text-base opacity-40 shrink-0">{e.icon}</div>
            <div className="flex flex-col gap-1">
              <SkeletonBar w={e.w} h="h-2.5" />
              <SkeletonBar w={e.sub} h="h-2" opacity="opacity-10" />
            </div>
            <div className="ml-auto opacity-20 text-[10px] text-white font-mono shrink-0">
              {`${23 + i * 11}'`}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-3 gap-2">
        {["Shots", "Possession", "Passes"].map((label) => (
          <SkeletonCard key={label}>
            <div className="text-white/20 text-[9px] uppercase tracking-widest">
              {label}
            </div>
            <SkeletonBar w="w-8" h="h-4" opacity="opacity-30" />
          </SkeletonCard>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MEDIA SKELETON UI
// ─────────────────────────────────────────────────────────────────────────────

function MediaSkeletonUI() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center gap-3 pb-3 border-b border-white/10">
        <SkeletonBar w="w-28" h="h-3" />
        <div className="ml-auto flex gap-2">
          <SkeletonTag w="w-12" />
          <SkeletonTag w="w-12" />
        </div>
      </div>

      <div className="w-full aspect-video rounded-md bg-white/10 flex items-center justify-center">
        <div className="w-10 h-10 rounded-sm bg-white/20 flex items-center justify-center">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white/40 ml-1" />
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="aspect-video rounded-sm bg-white/10" />
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// WELFARE SKELETON UI
// ─────────────────────────────────────────────────────────────────────────────

function WelfareSkeletonUI() {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center gap-3 pb-3 border-b border-white/10">
        <div className="w-6 h-6 rounded-sm bg-white/20 flex items-center justify-center shrink-0">
          <div className="w-3 h-3 rounded-sm bg-white/30" />
        </div>
        <SkeletonBar w="w-32" h="h-3" />
        <div className="ml-auto">
          <SkeletonTag w="w-16" />
        </div>
      </div>

      {[
        { status: "bg-amber-400/30", w: "w-28" },
        { status: "bg-green-400/30", w: "w-24" },
        { status: "bg-amber-400/30", w: "w-32" },
      ].map((item, i) => (
        <SkeletonCard key={i}>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-sm shrink-0 ${item.status}`} />
            <SkeletonBar w={item.w} h="h-2.5" />
            <div className="ml-auto opacity-20 text-[9px] text-white shrink-0">
              DSO only
            </div>
          </div>

          <SkeletonBar w="w-full" h="h-2" opacity="opacity-10" />

          <div className="flex gap-2 mt-1">
            <SkeletonTag w="w-12" />
            <SkeletonTag w="w-16" />
          </div>
        </SkeletonCard>
      ))}

      <div className="mt-auto rounded-md border border-white/10 bg-white/5 p-3 flex items-center gap-3">
        <SkeletonBar w="w-24" h="h-2" />
        <div className="ml-auto">
          <div className="h-4 w-20 rounded-sm bg-amber-400/20" />
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// COMMS SKELETON UI
// ─────────────────────────────────────────────────────────────────────────────

function CommsSkeletonUI() {
  const messages = [
    { side: "left", w: "w-40", sub: "w-24" },
    { side: "right", w: "w-32", sub: "w-20" },
    { side: "left", w: "w-48", sub: "w-28" },
    { side: "right", w: "w-36", sub: "w-16" },
  ];

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center gap-3 pb-3 border-b border-white/10">
        <SkeletonAvatar />
        <div className="flex flex-col gap-1 min-w-0">
          <SkeletonBar w="w-20" h="h-2.5" />
          <SkeletonBar w="w-14" h="h-2" opacity="opacity-10" />
        </div>
        <div className="ml-auto">
          <SkeletonTag w="w-8" />
        </div>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex ${
              m.side === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`rounded-md bg-white/10 px-4 py-3 flex flex-col gap-1.5 ${
                m.side === "right" ? "rounded-tr-sm" : "rounded-tl-sm"
              }`}
            >
              <SkeletonBar w={m.w} h="h-2.5" />
              <SkeletonBar w={m.sub} h="h-2" opacity="opacity-10" />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-3">
        <SkeletonBar w="w-full" h="h-2.5" opacity="opacity-10" />
        <div className="w-6 h-6 rounded-sm bg-white/20 shrink-0" />
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LEARNING SKELETON UI
// ─────────────────────────────────────────────────────────────────────────────

function LearningSkeletonUI() {
  const pillars = ["Player Dev", "Safeguarding", "Life Skills"];

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex gap-2 pb-3 border-b border-white/10 flex-wrap">
        {pillars.map((p, i) => (
          <div
            key={p}
            className={`px-3 py-1.5 rounded-sm text-[10px] font-medium shrink-0 ${
              i === 0
                ? "bg-white/20 text-white/60"
                : "bg-white/5 text-white/20"
            }`}
          >
            {p}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 flex-1">
        {[{ progress: 75 }, { progress: 40 }, { progress: 100 }, { progress: 20 }].map(
          (item, i) => (
            <SkeletonCard key={i}>
              <div className="aspect-video w-full rounded-sm bg-white/10" />
              <SkeletonBar w="w-full" h="h-3" />
              <SkeletonBar w="w-2/3" h="h-2" opacity="opacity-10" />

              <div className="w-full h-1 rounded-sm bg-white/10 mt-1">
                <div
                  className="h-1 rounded-sm bg-[var(--color-brand-700)]/60"
                  style={{ width: `${item.progress}%` }}
                />
              </div>
            </SkeletonCard>
          )
        )}
      </div>
    </div>
  );
}
// ─────────────────────────────────────────────────────────────────────────────
// VISUAL WRAPPER — brand‑aligned container
// ─────────────────────────────────────────────────────────────────────────────

function Visual({ showcase }: { showcase: (typeof showcases)[number] }) {
  return (
    <div
      className="relative w-full rounded-lg overflow-hidden border border-white/10 bg-[#07263a] p-5 md:p-6 shadow-xl"
      style={{ minHeight: "320px" }}
    >
      {skeletonMap[showcase.id]}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// UNIFIED 2‑COLUMN LAYOUT
// ─────────────────────────────────────────────────────────────────────────────

function TwoColumnLayout({ showcase }: { showcase: (typeof showcases)[number] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-start">
      <div className="space-y-6">
        <Eyebrow>{showcase.eyebrow}</Eyebrow>

        <h3 className="text-3xl md:text-4xl font-bold font-display leading-tight">
          {showcase.heading}
        </h3>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {showcase.description}
        </p>

        <BrandChecklist items={showcase.bullets} />
      </div>

      <Visual showcase={showcase} />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SKELETON MAP
// ─────────────────────────────────────────────────────────────────────────────

const skeletonMap: Record<string, React.ReactNode> = {
  players: <PlayersSkeletonUI />,
  coaching: <CoachingSkeletonUI />,
  matchday: <MatchdaySkeletonUI />,
  media: <MediaSkeletonUI />,
  welfare: <WelfareSkeletonUI />,
  comms: <CommsSkeletonUI />,
  learning: <LearningSkeletonUI />,
};

// ─────────────────────────────────────────────────────────────────────────────
// SHOWCASE DATA
// ─────────────────────────────────────────────────────────────────────────────

const showcases = [
  {
    id: "players",
    label: "Player Management",
    icon: GraduationCap,
    eyebrow: "Player profiles",
    heading: "Every player. Every detail. Zero chasing.",
    description:
      "From registration to release, every player's record is complete, current, and in one place. No chasing parents for forms, no duplicate spreadsheets, no \"I thought you had that\" — just a single source of truth that keeps itself up to date.",
    bullets: [
      "FAW COMET import syncs registrations automatically — no manual re-entry",
      "Medical records, consents, and emergency contacts always current and accessible to the right people",
      "Biological maturation data tracked alongside physical development milestones",
      "Role-based visibility ensures coaches see performance data, parents see what's relevant to them",
      "Full season history — attendance, injuries, notes, and transitions — in one unbroken timeline",
      "Submission-ready exports for FAW compliance without touching a spreadsheet",
    ],
  },
  {
    id: "coaching",
    label: "Coaching & Performance",
    icon: TrendingUp,
    eyebrow: "Coaching tools",
    heading: "Less time on laptops. More time on the grass.",
    description:
      "StatTarian removes the admin layer between coaches and their players. Session planning, load monitoring, and development tracking all live in one place — so your staff arrive prepared, spot problems early, and spend their energy where it matters.",
    bullets: [
      "Session builder with load targets, drill libraries, and attendance logging in one workflow",
      "Daily wellbeing check-ins surface fatigue trends before they become injuries",
      "Individual development plans with season objectives, position pathways, and progress flags",
      "Biological maturation screening integrated into load and training recommendations",
      "Performance benchmarks by age group, position, and phase of the season",
      "One-click branded PDF reports for parents, directors, or FAW submissions",
    ],
  },
  {
    id: "matchday",
    label: "Match Day & Reporting",
    icon: ClipboardList,
    eyebrow: "Match events & analytics",
    heading: "Every goal, every insight, every report — in one place.",
    description:
      "From the first whistle to the board report, StatTarian connects what happens on the pitch to the data that drives decisions. Tag events live, pull them into player profiles, and generate the reports your directors and the FAW need — without rebuilding everything in a spreadsheet afterwards.",
    bullets: [
      "Live and post-match event tagging — goals, assists, key actions — linked directly to video timestamps",
      "Automatic FAW match reporting built in, with filming compliance tracked per fixture",
      "Individual and squad analytics dashboards updated in real time as data comes in",
      "Multi-team and cross-season comparisons for phase coordinators and directors",
      "Pathway intelligence — track players from academy through RTC to senior transitions",
      "Branded PDF exports for board reports, parent reviews, and FAW submissions at a click",
    ],
  },
  {
    id: "media",
    label: "Media",
    icon: Film,
    eyebrow: "Video & media",
    heading: "Your footage — organised, secure, and actually useful.",
    description:
      "Shared drives get messy. WhatsApp videos expose players. Third-party apps create GDPR headaches. StatTarian gives your academy a club-hosted video library where every clip is tagged, searchable, and tied directly to the match or session it came from.",
    bullets: [
      "Club-hosted storage — footage never leaves your environment or touches a third-party platform",
      "Automatic FAW filming compliance tracking across all matches and training sessions",
      "Player tagging links clips directly to individual profiles for review and development planning",
      "Filter by match, session type, date, player, or event in seconds",
      "Right-to-erasure workflows built in — GDPR compliance without the manual admin",
      "Role-based access ensures players, parents, and coaches only see what they should",
    ],
  },
  {
    id: "welfare",
    label: "Safeguarding & Welfare",
    icon: ShieldCheck,
    eyebrow: "Safeguarding",
    heading: "Built for the responsibility the role actually carries.",
    description:
      "Safeguarding in StatTarian isn't a checkbox — it's a dedicated module with its own access controls, completely isolated from the rest of the platform. DSOs get the tools the role demands: a private space to log concerns, track actions, and maintain the audit trail that protects both players and staff.",
    bullets: [
      "DSO-only case management — invisible to coaching, admin, and all other staff roles",
      "Concern logging with timestamps, action tracking, and outcome recording",
      "Full audit trail on every welfare record — who accessed it, when, and what changed",
      "DBS status tracking with automatic alerts before certificates expire",
      "Online safety checks and welfare review workflows built into the platform",
      "Escalation pathways documented and logged for every case, protecting your academy at every step",
    ],
  },
  {
    id: "comms",
    label: "Communication & Admin",
    icon: MessageSquare,
    eyebrow: "Communications",
    heading: "No more WhatsApp groups. No more missed messages.",
    description:
      "Group chats are unauditable, uncontrollable, and a safeguarding risk. StatTarian replaces them with a structured communication layer — where the right messages reach the right people, everything is logged, and your academy owns the channel.",
    bullets: [
      "Parent portal with push notifications, read receipts, and message history",
      "Squad and group announcements with delivery confirmation — no more 'I didn't see it'",
      "Fixture updates, schedule changes, and consent requests sent and tracked in one place",
      "No personal phone numbers exposed — all communication routed through the platform",
      "Scheduled messages for match-day reminders, kit lists, and pre-season communications",
      "Organisation-level controls over who can send messages and to which groups",
    ],
  },
  {
    id: "learning",
    label: "Learning Hub",
    icon: BookOpen,
    eyebrow: "Education & development",
    heading: "Development that happens off the pitch too.",
    description:
      "StatTarian's Learning Hub goes beyond football. A structured three-pillar environment covering player development, safeguarding education, and life skills — with age-gated content delivery and automatic FAW compliance logging built in from the start.",
    bullets: [
      "Three learning pillars: Player Development, Safeguarding Education, and Life Skills",
      "Age-gated content delivery ensures the right material reaches the right players",
      "Multi-format content — video, quizzes, documents — accessible from any device",
      "Automatic FAW compliance logging per player as modules are completed",
      "Staff and coach education modules sit alongside player content in the same environment",
      "Academy directors can track completion rates and flag outstanding requirements at a glance",
    ],
  },
];

type ShowcaseId = typeof showcases[number]["id"];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────

export function ModuleShowcase() {
  const [active, setActive] = useState<ShowcaseId>("players");

  const activeShowcase = useMemo(
    () => showcases.find((s) => s.id === active)!,
    [active]
  );

  return (
    <div className="bg-[#061E29]">
      {/* Tab strip */}
      <div className="grid grid-cols-2 gap-2 mb-10 md:mb-12 md:flex md:flex-wrap">
        {showcases.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "flex items-center justify-center px-3 py-2.5 rounded-full font-semibold transition-all duration-200 border cursor-pointer",
              "text-[11px] md:text-[13px] w-full md:w-[200px]",
              tab.id === active
                ? "bg-[var(--color-brand-700)] text-white border-[var(--color-brand-700)]"
                : "bg-transparent text-[var(--color-brand-500)] border-[var(--color-brand-500)]"
            )}
            style={{ borderWidth: "1.5px" }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div key={active} className="animate-in fade-in duration-200">
        <TwoColumnLayout showcase={activeShowcase} />
      </div>
    </div>
  );
}
