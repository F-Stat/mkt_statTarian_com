import {
  ShieldCheck,
  Clock,
  MessageSquare,
  Trophy,
  Layers,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { AnimatedSection } from "../../components/marketing/AnimatedSection";
import { DemoCtaSection } from "../../components/marketing/cta/DemoCtaSection";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const pillClass =
  "inline-block min-w-[200px] text-center px-3 py-1 md:px-4 md:py-1.5 rounded-full text-xs md:text-sm uppercase tracking-[0.2em] font-semibold text-white";

const navButtonClass =
  "absolute top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full border border-transparent flex items-center justify-center text-foreground hover:opacity-80 transition-opacity shadow-lg";

const promises = [
  {
    icon: Layers,
    title: "Clarity Over Chaos",
    body: "Your academy should run from one connected system — not a patchwork of tools. Schedules, communication, player information, and safeguarding records stay unified, consistent, and accessible to the right people.",
  },
  {
    icon: ShieldCheck,
    title: "Safeguarding First",
    body: "Nothing matters more. Every workflow is designed with safeguarding and compliance at the centre — clear audit trails, secure communication, and role‑based access that protects players and supports staff.",
  },
  {
    icon: Clock,
    title: "Time Back for Coaches",
    body: "Coaches should coach — not drown in admin. We remove repetitive, manual tasks through automation, smart scheduling, and information that’s always where it should be.",
  },
  {
    icon: MessageSquare,
    title: "Parents Always Informed",
    body: "Parents shouldn’t have to guess, chase, or hope they’ve seen the latest update. Clear, timely, reliable communication through a single, consistent channel.",
  },
  {
    icon: Trophy,
    title: "Built for Football",
    body: "Football has its own rhythms, pressures, and operational realities. We build exclusively for the game — your workflows, your terminology, your season structure, your safeguarding requirements.",
  },
];

export function Promise() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1, containScroll: false },
    [Autoplay({ delay: 3000, stopOnInteraction: true })],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <main className="pt-16 md:pt-24">

      {/* Hero */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto space-y-4 md:space-y-6">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  Our Commitment
                </span>
              </div>
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What You Can Expect From Us
              </h1>
              <p
                className="text-base md:text-xl text-muted-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                StatTarian is more than software — it’s a commitment to clarity, safety, and the standards academy football deserves.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why We Exist — 2 column */}
      <section className="py-12 md:py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

              {/* Left — Text */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <span
                    className={pillClass}
                    style={{
                      fontFamily: "var(--font-heading)",
                      backgroundColor: "var(--color-brand-700)",
                    }}
                  >
                    Why We Exist
                  </span>
                </div>
                <h2
                  className="text-3xl md:text-5xl font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  StatTarian exists to bring order, clarity, and accountability to academy football.
                </h2>
                <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Not as another tool — but as an operating standard. We built it to remove chaos, protect young people, and give staff the structure, visibility, and confidence they deserve.
                  </p>
                </div>
              </div>

              {/* Right — Video Placeholder */}
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border bg-background group cursor-pointer">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, var(--color-brand-700) 0%, var(--color-brand-900) 100%)",
                  }}
                />
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(var(--color-brand-500) 1px, transparent 1px), linear-gradient(90deg, var(--color-brand-500) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                    <Play className="h-7 w-7 md:h-9 md:w-9 text-white fill-white ml-1" />
                  </div>
                  <p
                    className="text-xs md:text-sm text-white/60 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Coming soon
                  </p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 px-5 py-4 bg-gradient-to-t from-black/60 to-transparent">
                  <p
                    className="text-xs text-white/50 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    StatTarian — Platform Overview
                  </p>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Five Promises — Carousel */}
      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-16 space-y-4">
              <div>
                <span
                  className={pillClass}
                  style={{
                    fontFamily: "var(--font-heading)",
                    backgroundColor: "var(--color-brand-700)",
                  }}
                >
                  Our Promises
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Five commitments you can rely on. Every day.
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative">
            <button
              onClick={scrollPrev}
              className={`${navButtonClass} -left-3 md:-left-5`}
              style={{ backgroundColor: "var(--color-brand-700)" }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button
              onClick={scrollNext}
              className={`${navButtonClass} -right-3 md:-right-5`}
              style={{ backgroundColor: "var(--color-brand-700)" }}
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
            </button>

            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing px-2"
              ref={emblaRef}
            >
              <div className="flex">
                {promises.map((promise) => (
                  <div
                    key={promise.title}
                    className="flex-none w-[85%] md:w-[calc(33.333%)] pl-4 md:pl-6"
                  >
                    <div className="bg-card border border-border rounded-2xl p-5 md:p-8 h-full flex flex-col gap-4 md:gap-6">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <promise.icon
                          className="h-5 w-5 md:h-6 md:w-6 text-primary"
                          strokeWidth={1.5}
                        />
                      </div>
                      <h3
                        className="text-lg md:text-xl font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {promise.title}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">
                        {promise.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-12 md:py-24 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <AnimatedSection>
            <div className="space-y-4 md:space-y-6">
              <h2
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A final word.
              </h2>
              <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
                Football deserves better tools. Coaches deserve more time. Parents deserve clarity.  
                And players deserve safe, organised environments where they can grow.  
                That’s the promise behind StatTarian — and it’s one we intend to keep.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <DemoCtaSection
        heading="Ready to hold us to it?"
        subheading="Book a demo and see the promise in action."
        ctaLabel="Book a Demo"
      />

    </main>
  );
}
