import { useState } from "react";
import { AnimatedSection } from "../AnimatedSection";
import { ArrowRight } from "lucide-react";

import leadershipImg from "../../../../assets/roles/leadership.png";
import coachingImg from "../../../../assets/roles/coaching.png";
import welfareImg from "../../../../assets/roles/welfare.png";
import parentsImg from "../../../../assets/roles/parents.png";
import physioImg from "../../../../assets/roles/physio.png";

const categories = [
  {
    key: "leadership",
    title: "Academy Leadership\n& Operations",
    subtitle: "Directors, Phase Coordinators",
    description:
      "Full visibility across every team, age group, and staff member — from one connected dashboard.",
    image: leadershipImg,
  },
  {
    key: "coaching",
    title: "Coaching\n& Performance",
    subtitle: "Head Coaches, Coaches, Analysts",
    description:
      "Plan sessions, track attendance, and monitor development — all from the touchline.",
    image: coachingImg,
  },
  {
    key: "physio",
    title: "Physio\n& Medical",
    subtitle: "Physios, Sports Scientists",
    description:
      "Injury records, return-to-play protocols, and medical history — always up to date.",
    image: physioImg,
  },
  {
    key: "welfare",
    title: "Welfare\n& Safeguarding",
    subtitle: "Safeguarding Leads, Welfare Officers",
    description:
      "Concern reporting, audit trails, and case management — built to FAW standards.",
    image: welfareImg,
  },
  {
    key: "parents",
    title: "Parents\n& Players",
    subtitle: "Parents, Players",
    description:
      "Fixtures, updates, and safe messaging — no app needed, no information missed.",
    image: parentsImg,
  },
];

export function RoleCategories() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="pt-8 md:pt-8 pb-8">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div
            className="
              flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4
              md:grid md:grid-cols-5 md:overflow-visible md:pb-0
              -mx-4 px-4 md:mx-0 md:px-0
              scrollbar-none
            "
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((cat) => {
              const isActive = active === cat.key;

              return (
                <button
                  key={cat.key}
                  onClick={() => setActive(isActive ? null : cat.key)}
                  className="
                    group relative overflow-hidden rounded-2xl shadow-md
                    flex-none snap-start
                    w-[72vw] sm:w-[48vw] md:w-auto
                    text-left focus:outline-none
                    transition-all duration-300
                  "
                  style={{
                    aspectRatio: "3 / 4",
                    boxShadow: isActive
                      ? "0 0 0 2px var(--color-primary), 0 20px 40px rgba(0,0,0,0.5)"
                      : undefined,
                  }}
                  aria-pressed={isActive}
                >
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                  <div
                    className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(to top, var(--color-brand-900, #0a1f2e) 0%, transparent 60%)",
                      opacity: isActive ? 1 : undefined,
                    }}
                  />

                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <p
                      className="text-white font-black uppercase tracking-wide leading-tight text-base md:text-sm lg:text-base"
                      style={{
                        fontFamily: "var(--font-heading)",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {cat.title}
                    </p>

                    <p className="text-white/60 text-xs mt-1">{cat.subtitle}</p>

                    <div
                      className="overflow-hidden transition-all duration-400 ease-out"
                      style={{
                        maxHeight: isActive ? "6rem" : "0",
                      }}
                    >
                      <p className="text-white/80 text-xs leading-relaxed mt-3 border-t border-white/20 pt-3">
                        {cat.description}
                      </p>
                    </div>

                    <div
                      className={`
                        flex items-center gap-1 mt-2 text-primary text-xs font-semibold
                        transition-all duration-300
                        ${
                          isActive
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0"
                        }
                      `}
                    >
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </div>

                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: "inset 0 0 0 2px var(--color-primary)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex justify-center gap-1.5 mt-4 md:hidden">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() =>
                  setActive(active === cat.key ? null : cat.key)
                }
                className={`h-1.5 rounded-full transition-all duration-200 ${
                  active === cat.key ? "w-4 bg-primary" : "w-1.5 bg-white/30"
                }`}
                aria-label={cat.key}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
