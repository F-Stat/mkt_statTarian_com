import { useState } from "react";
import { AnimatedSection } from "../AnimatedSection";
import { ArrowUp } from "lucide-react";

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
      "See everything across every squad, staff member, and department — without chasing updates. Run your academy with the confidence that nothing is slipping through.",
    image: leadershipImg,
  },
  {
    key: "coaching",
    title: "Coaching\n& Performance",
    subtitle: "Head Coaches, Coaches, Analysts",
    description:
      "Everything you need before, during, and after a session — in one place. Less time on laptops. More time doing the job.",
    image: coachingImg,
  },
  {
    key: "physio",
    title: "Physio\n& Medical",
    subtitle: "Physios, Sports Scientists",
    description:
      "Every injury, screening, and return-to-play note in one secure record. When a player steps on the pitch, you know exactly where they stand.",
    image: physioImg,
  },
  {
    key: "welfare",
    title: "Welfare\n& Safeguarding",
    subtitle: "Safeguarding Leads, Welfare Officers",
    description:
      "Log concerns, track DBS, and evidence compliance in a space only welfare leads can see. Built for the responsibility the role actually carries.",
    image: welfareImg,
  },
  {
    key: "parents",
    title: "Parents\n& Players",
    subtitle: "Parents, Players",
    description:
      "Fixtures, consent requests, and updates — sent to the right people, at the right time. No WhatsApp groups. No missed messages.",
    image: parentsImg,
  },
];

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

export function RoleCategories() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="pt-8 md:pt-8 pb-8">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-10 md:mb-12 space-y-3 md:space-y-4">
            <div>
              <span
                className={pillClass}
                style={{
                  fontFamily: "var(--font-heading)",
                  backgroundColor: "var(--color-brand-700)",
                }}
              >
                Built for every role
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              One platform. Every role in your academy.
            </h2>
            <p
              className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              From directors to parents, every role gets exactly what they need
              — and nothing they don't. Role-based access means the right
              information reaches the right people, every time.
            </p>
          </div>
        </AnimatedSection>

        {/* Role Cards */}
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

                  <div
                    className={`
                      absolute inset-0 flex flex-col justify-end p-5
                      transition-transform duration-300
                      ${isActive ? "-translate-y-8" : "translate-y-0 group-hover:-translate-y-1"}
                    `}
                  >
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
                      style={{ maxHeight: isActive ? "9rem" : "0" }}
                    >
                      <p className="text-white/80 text-xs leading-relaxed mt-3 border-t border-white/20 pt-3">
                        {cat.description}
                      </p>
                    </div>

                    <div
                      className={`
                        flex items-center gap-1 mt-2 text-primary text-xs font-semibold
                        transition-all duration-300
                        ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                      `}
                    >
                      <ArrowUp className="h-3 w-3" />
                    </div>
                  </div>

                  {isActive && (
                    <div
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ boxShadow: "inset 0 0 0 2px var(--color-primary)" }}
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
                onClick={() => setActive(active === cat.key ? null : cat.key)}
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