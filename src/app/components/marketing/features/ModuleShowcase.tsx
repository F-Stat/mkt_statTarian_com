"use client";

import { useState } from "react";
import {
  GraduationCap,
  TrendingUp,
  Film,
  ShieldCheck,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Real Images (Vite‑safe imports) ─────────────────────────────────────────

import mockWelfare from "../../../../assets/mock-placeholder.png";
import mockPlayer from "../../../../assets/mock-placeholder.png";
import mockComms from "../../../../assets/mock-placeholder.png";
import mockPerformance from "../../../../assets/mock-placeholder.png";


// Map showcase.id → actual image
const showcaseImages: Record<string, string> = {
  players: mockPlayer,
  coaching: mockPerformance,
  media: mockPerformance,
  welfare: mockWelfare,
  comms: mockComms,
};

// ─── Data ────────────────────────────────────────────────────────────────────

const showcases = [
  {
    id: "players",
    label: "Player Management",
    icon: GraduationCap,
    tagline: "Academy + Home",
    heading: "Every player. Every detail. One screen.",
    description:
      "From first registration to season end, every player record lives in one place. Role-personalised dashboards mean each staff member sees exactly what they need — nothing more, nothing less.",
    layout: "full-width-top",
    features: [
      {
        title: "Player Profiles",
        description:
          "Registration, biographical data, maturation screening, and FAW COMET linkage — all in one record.",
      },
      {
        title: "Squad Management",
        description:
          "Organise players across age groups, manage trials, and plan your season structure from one view.",
      },
      {
        title: "FAW COMET Integration",
        description:
          "Native data ingestion from FAW COMET — no manual exports, no duplicate entry.",
      },
      {
        title: "Personalised Dashboards",
        description:
          "Every role sees a tailored view — directors get the big picture, coaches get their squad.",
      },
    ],
  },
  {
    id: "coaching",
    label: "Coaching & Performance",
    icon: TrendingUp,
    tagline: "Performance + Reporting",
    heading: "Data that drives development.",
    description:
      "Track every player's journey with Individual Development Plans, physical benchmarks, and session load monitoring. Academy-wide dashboards give directors and analysts the full picture.",
    layout: "left-text",
    features: [
      {
        title: "Individual Development Plans",
        description:
          "Build structured IDPs with season objectives, position pathways, and promotion readiness flags.",
      },
      {
        title: "Load & RPE Tracking",
        description:
          "Monitor session load and Rate of Perceived Exertion to flag fatigue before it becomes injury.",
      },
      {
        title: "Performance Benchmarks",
        description:
          "Physical testing, benchmarks, and progress tracking — always export-ready.",
      },
      {
        title: "Analytics & Reports",
        description:
          "Multi-team dashboards, attendance trends, and branded PDF exports at the click of a button.",
      },
    ],
  },
  {
    id: "media",
    label: "Media",
    icon: Film,
    tagline: "Video Library",
    heading: "Your footage. Secure, tagged, and always findable.",
    description:
      "A club-hosted video library linked to every match and training session. Tag players, annotate timestamps, and build coach playlists — with right-to-erasure workflows built in.",
    layout: "right-text",
    features: [
      {
        title: "Secure Video Library",
        description:
          "Club-hosted, isolated footage — no third-party apps, no compliance headaches.",
      },
      {
        title: "Player Tagging",
        description:
          "Tag individual players to clips and link directly to match events and timestamps.",
      },
      {
        title: "Coach Playlists",
        description:
          "Build and share curated playlists for individual players or the full squad.",
      },
      {
        title: "Filming Compliance",
        description:
          "Automatic FAW filming compliance tracking with audit-ready records.",
      },
    ],
  },
  {
    id: "welfare",
    label: "Safeguarding & Welfare",
    icon: ShieldCheck,
    tagline: "Welfare Module",
    heading: "Safeguarding that never slips through the cracks.",
    description:
      "A completely isolated module for welfare and medical records. Only the right people see the right information — with a full audit trail and escalation workflows built for the seriousness the role demands.",
    layout: "left-text",
    features: [
      {
        title: "Case Management",
        description:
          "Dedicated safeguarding case logs, completely isolated from Club Admin access.",
      },
      {
        title: "Medical Records",
        description:
          "Access-gated medical records and medication logs — only visible to authorised staff.",
      },
      {
        title: "Welfare Concern Tracking",
        description:
          "Log, track, and escalate welfare concerns with a full timestamped audit trail.",
      },
      {
        title: "DBS Status Tracking",
        description:
          "Monitor DBS status across all staff with automated renewal reminders.",
      },
    ],
  },
  {
    id: "comms",
    label: "Communication & Admin",
    icon: MessageSquare,
    tagline: "Communication + Account",
    heading: "One channel. Zero missed messages.",
    description:
      "Replace the group chat chaos with secure, auditable messaging. Parents stay informed, fixtures get confirmed, and your organisation stays in control — from RSVPs to billing.",
    layout: "full-width-top",
    features: [
      {
        title: "Parent Portal",
        description:
          "Parents access fixture info, RSVP to sessions, and receive announcements — all in one place.",
      },
      {
        title: "Group Announcements",
        description:
          "Send targeted messages to squads, age groups, or the whole academy with read receipts.",
      },
      {
        title: "Fixture RSVPs",
        description:
          "Attendance confirmations built in — no chasing, no spreadsheets.",
      },
      {
        title: "Organisation Settings",
        description:
          "Manage billing, user roles, seat allocation, and permissions from one admin panel.",
      },
    ],
  },
];

// ─── Visual Component (Vite‑safe, perfect fit) ───────────────────────────────

function Visual({ showcase }: { showcase: typeof showcases[0] }) {
  const img = showcaseImages[showcase.id];

  return (
    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-xl">
      <img
        src={img}
        alt={showcase.heading}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-background/60 to-transparent pointer-events-none" />
    </div>
  );
}

// ─── Layout: Full-width visual top ───────────────────────────────────────────

function FullWidthTopLayout({ showcase }: { showcase: typeof showcases[0] }) {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="space-y-0">
      <div className="space-y-3 mb-6">
        <p
          className="text-xs uppercase tracking-widest text-primary font-semibold"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {showcase.tagline}
        </p>
        <h3
          className="text-2xl md:text-4xl font-bold"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {showcase.heading}
        </h3>
        <p className="text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed">
          {showcase.description}
        </p>
      </div>

      <div className="rounded-t-2xl overflow-hidden border border-border border-b-0">
        <Visual showcase={showcase} />
      </div>

      <div className="border border-border rounded-b-2xl bg-card overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {showcase.features.map((f, i) => (
            <button
              key={f.title}
              onClick={() => setActiveFeature(i)}
              className={cn(
                "relative text-left p-4 md:p-5 border-r border-border last:border-r-0 transition-colors",
                i >= 2 && "border-t border-border md:border-t-0",
                activeFeature === i ? "bg-primary/5" : "hover:bg-primary/5"
              )}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-transparent">
                {activeFeature === i && <div className="h-full bg-primary" />}
              </div>
              <p
                className={cn(
                  "text-xs md:text-sm font-bold mb-1 transition-colors",
                  activeFeature === i
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
                style={{ fontFamily: "var(--font-display)" }}
              >
                {f.title}
              </p>
              <p
                className={cn(
                  "text-xs leading-relaxed transition-colors hidden md:block",
                  activeFeature === i
                    ? "text-muted-foreground"
                    : "text-muted-foreground/50"
                )}
              >
                {f.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Layout: Side-by-side (left or right text) ───────────────────────────────

function SideLayout({
  showcase,
  flip = false,
}: {
  showcase: typeof showcases[0];
  flip?: boolean;
}) {
  const [openFeature, setOpenFeature] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
      <div className={cn("space-y-6", flip && "lg:order-2")}>
        <div className="space-y-3">
          <p
            className="text-xs uppercase tracking-widest text-primary font-semibold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {showcase.tagline}
          </p>
          <h3
            className="text-2xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {showcase.heading}
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {showcase.description}
          </p>
        </div>

        <div className="space-y-1">
          {showcase.features.map((f, i) => (
            <div
              key={f.title}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFeature(openFeature === i ? null : i)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3.5 text-left transition-colors",
                  openFeature === i
                    ? "bg-primary/10"
                    : "bg-card hover:bg-primary/5"
                )}
              >
                <div className="flex items-center gap-3">
                  <showcase.icon
                    className={cn(
                      "h-4 w-4 shrink-0 transition-colors",
                      openFeature === i
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                    strokeWidth={1.5}
                  />
                  <span
                    className={cn(
                      "text-sm font-semibold transition-colors",
                      openFeature === i
                        ? "text-foreground"
                        : "text-muted-foreground"
                    )}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {f.title}
                  </span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition-transform shrink-0",
                    openFeature === i && "rotate-180"
                  )}
                />
              </button>
              {openFeature === i && (
                <div className="px-4 py-3 bg-primary/5 border-t border-border">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={cn(flip && "lg:order-1")}>
        <Visual showcase={showcase} />
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function ModuleShowcase() {
  return (
    <div
      className="space-y-24 md:space-y-32 bg-[#061E29]"
    >
      {showcases.map((showcase) => {
        if (showcase.layout === "full-width-top") {
          return (
            <div key={showcase.id}>
              <FullWidthTopLayout showcase={showcase} />
            </div>
          );
        }
        if (showcase.layout === "right-text") {
          return (
            <div key={showcase.id}>
              <SideLayout showcase={showcase} flip />
            </div>
          );
        }
        return (
          <div key={showcase.id}>
            <SideLayout showcase={showcase} />
          </div>
        );
      })}
    </div>
  );
}
