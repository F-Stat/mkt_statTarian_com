import { AnimatedSection } from "../AnimatedSection";

import leadershipImg from "../../../../assets/roles/leadership.png";
import coachingImg from "../../../../assets/roles/coaching.png";
import welfareImg from "../../../../assets/roles/welfare.png";
import parentsImg from "../../../../assets/roles/parents.png";

const categories = [
  {
    title: "Academy Leadership\n& Operations",
    subtitle: "Directors, Phase Coordinators",
    image: leadershipImg,
  },
  {
    title: "Coaching\n& Performance",
    subtitle: "Head Coaches, Coaches, Analysts",
    image: coachingImg,
  },
  {
    title: "Welfare\n& Medical",
    subtitle: "Safeguarding Leads, Medical Staff",
    image: welfareImg,
  },
  {
    title: "Parents\n& Players",
    subtitle: "Parents, Players",
    image: parentsImg,
  },
];

export function RoleCategories() {
  return (
    <section className="pt-16 md:pt-24 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          {/* Header */}
          <div className="max-w-5xl mx-auto text-center space-y-4 mb-14">
            <span
              className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white"
              style={{
                fontFamily: "var(--font-heading)",
                backgroundColor: "var(--color-brand-700)",
              }}
            >
              Who We Support
            </span>

            <h2
              className="text-3xl md:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Supporting every role across the academy pathway — end to end
            </h2>
          </div>

          {/* Cards grid — rest unchanged */}

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
                style={{ aspectRatio: "3 / 4" }}
              >
                {/* Full-bleed photo */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient overlay — stronger at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Label pinned to bottom-left */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p
                    className="text-white font-black uppercase tracking-wide leading-tight text-lg"
                    style={{
                      fontFamily: "var(--font-heading)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {cat.title}
                  </p>
                  <p className="text-white/70 text-sm mt-1">{cat.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
