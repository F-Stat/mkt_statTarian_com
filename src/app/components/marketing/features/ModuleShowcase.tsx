"use client";

import { useState, useMemo } from "react";
import {
  GraduationCap,
  TrendingUp,
  Film,
  ShieldCheck,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

import mockWelfare from "../../../../assets/mock-placeholder.png";
import mockPlayer from "../../../../assets/mock-placeholder.png";
import mockComms from "../../../../assets/mock-placeholder.png";
import mockPerformance from "../../../../assets/mock-placeholder.png";

const showcaseImages: Record<string, string> = {
  players: mockPlayer,
  coaching: mockPerformance,
  media: mockPerformance,
  welfare: mockWelfare,
  comms: mockComms,
};

// ─────────────────────────────────────────────────────────────────────────────
// UI PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <span className="flex-shrink-0 mt-0.5 flex items-center justify-center rounded-full w-4 h-4 bg-[#e1f5ee]">
      <svg width="9" height="9" viewBox="0 0 10 10">
        <polyline
          points="2,5 4.5,7.5 8,2.5"
          stroke="#1d9e75"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2.5 text-xs font-medium tracking-widest uppercase text-[var(--color-brand-500)]">
      {children}
    </p>
  );
}

// Larger bullets
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)]"
        >
          <CheckIcon />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA (features removed)
// ─────────────────────────────────────────────────────────────────────────────

const showcases = [
  {
    id: "players",
    label: "Player Management",
    icon: GraduationCap,
    tagline: "Academy + Home",
    heading: "Every player. Every detail. Zero chasing.",
    description:
      "From registration to release, every player’s information lives in one clean, reliable record. No more spreadsheets, no more missing consents, no more “Can you resend that?” — just a single source of truth that updates itself.",
    eyebrow: "Player profiles",
    bullets: [
      "Medical records, consents, and emergency contacts always up to date",
      "Role‑based visibility so coaches see performance and parents see schedules",
      "Full season history with notes, injuries, and attendance in one timeline",
      "COMET‑synced registrations that stay accurate without manual work",
    ],
  },
  {
    id: "coaching",
    label: "Coaching & Performance",
    icon: TrendingUp,
    tagline: "Performance + Reporting",
    heading: "Data that actually moves development forward.",
    description:
      "Track progress with clarity. Every benchmark, every plan, every session load — automatically organised into dashboards that help coaches coach and help directors see the bigger picture.",
    eyebrow: "Development data",
    bullets: [
      "Season development plans with clear goal‑tracking",
      "Load and wellness monitoring with trend alerts",
      "Benchmarks by age group, position, and phase",
      "One‑click analytics and parent‑ready PDF reports",
    ],
  },
  {
    id: "media",
    label: "Media",
    icon: Film,
    tagline: "Video Library",
    heading: "Your footage — organised, secure, and instantly useful.",
    description:
      "A club‑hosted video library that finally removes the chaos of shared drives and lost clips. Tag players, build playlists, and surface the moments that matter — all without ever risking data leakage.",
    eyebrow: "Video library",
    bullets: [
      "Secure hosting with no third‑party sharing",
      "Player tagging that pushes clips straight into profiles",
      "Filters for match, session type, date, or player",
      "Fully GDPR‑aligned with right‑to‑erasure workflows",
    ],
  },
  {
    id: "welfare",
    label: "Safeguarding & Welfare",
    icon: ShieldCheck,
    tagline: "Welfare Module",
    heading: "Safeguarding that never slips through the cracks.",
    description:
      "Designed with DSO workflows at the centre — not as an afterthought. Every concern, record, and escalation is logged, tracked, and protected with the strictest access controls.",
    eyebrow: "Safeguarding",
    bullets: [
      "DSO‑only case management, isolated from coaching staff",
      "Medical and welfare records with full access audit trail",
      "Online safety checks and welfare workflows built‑in",
      "DBS tracking with automatic expiry alerts",
    ],
  },
  {
    id: "comms",
    label: "Communication & Admin",
    icon: MessageSquare,
    tagline: "Communication + Account",
    heading: "One channel. Zero missed messages.",
    description:
      "Replace scattered WhatsApp groups with structured, auditable communication. Parents stay informed, coaches stay in control, and your academy finally owns the conversation.",
    eyebrow: "Communications",
    bullets: [
      "Parent portal with push notifications and read receipts",
      "Squad announcements and fixture updates in one place",
      "Picture‑safe links that never expose personal phones",
      "Organisation‑level controls over who can message whom",
    ],
  },
];

type ShowcaseId = typeof showcases[number]["id"];

// ─────────────────────────────────────────────────────────────────────────────
// VISUAL WITH THUMBNAILS
// ─────────────────────────────────────────────────────────────────────────────

function Visual({ showcase }: { showcase: (typeof showcases)[number] }) {
  const images = [
    showcaseImages[showcase.id],
    showcaseImages[showcase.id],
    showcaseImages[showcase.id],
    showcaseImages[showcase.id],
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
        <img
          src={images[activeIndex]}
          alt={showcase.heading}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={cn(
              "relative aspect-[4/3] rounded-lg overflow-hidden border transition-all",
              activeIndex === i
                ? "border-[var(--color-brand-700)]"
                : "border-border hover:border-[var(--color-brand-500)]"
            )}
          >
            <img
              src={img}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// UNIFIED 2‑COLUMN LAYOUT FOR ALL MODULES
// ─────────────────────────────────────────────────────────────────────────────

function TwoColumnLayout({ showcase }: { showcase: (typeof showcases)[number] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <div className="space-y-6">
        <Eyebrow>{showcase.eyebrow}</Eyebrow>

        <h3 className="text-3xl md:text-4xl font-bold font-display leading-tight">
          {showcase.heading}
        </h3>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {showcase.description}
        </p>

        <BulletList items={showcase.bullets} />
      </div>

      <Visual showcase={showcase} />
    </div>
  );
}

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
      <div className="grid grid-cols-2 gap-2 mb-12 md:flex md:flex-wrap">
        {showcases.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "flex items-center justify-center px-4 py-2.5 rounded-full text-[13px] font-semibold transition-all duration-200 border cursor-pointer",
              "w-[200px]",
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
