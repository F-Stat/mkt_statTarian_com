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
    <section className="pt-16 md:pt-8 pb-24 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          
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
