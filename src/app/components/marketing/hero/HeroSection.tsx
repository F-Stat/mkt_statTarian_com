import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "../../ui/button";
import { HeroWordReveal } from "./HeroWordReveal";
import logoMark from "@/assets/logo.png";
import heroBg from "@/assets/main-hero.jpg";

export function HeroSection() {
  const [showMain, setShowMain] = useState(false);

  return (
    <>
      {!showMain && <HeroWordReveal onComplete={() => setShowMain(true)} />}

      <motion.div
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: showMain ? 1 : 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center 100%",
          }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/60 to-brand-900/90" />

        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0.85)_70%)] pointer-events-none" />

        {/* Content */}
        <div className="relative container mx-auto px-4 pt-16 pb-16 md:pt-24 flex flex-col items-center text-center gap-1 md:gap-6">
          {/* Logo Mark + Brand Name + Tagline — shifted up on mobile via reduced pt above */}
          <motion.div
            className="flex flex-col items-center gap-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <img
              src={logoMark}
              alt="StatTarian"
              className="h-20 md:h-40 w-auto mx-auto"
            />
            <p
              className="text-foreground text-xl md:text-3xl font-bold tracking-wide leading-tight md:leading-normal"
              style={{ fontFamily: "var(--font-display)" }}
            >
              statTarian
            </p>
            <p
              className="text-primary text-sm md:text-base tracking-wide font-medium leading-tight md:leading-normal"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Football. Organised.
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05] md:leading-tight max-w-4xl"
            style={{
              fontFamily: "var(--font-display)",
              textShadow: "0 2px 24px rgba(0,0,0,0.8)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <span className="text-foreground">Your Entire Academy.</span>
            <br />
            <span className="text-primary">One Platform.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.div
            className="backdrop-blur-[2px] px-4 py-2 rounded-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p
              className="text-base md:text-xl text-foreground/90 leading-snug md:leading-relaxed max-w-3xl font-medium"
              style={{
                fontFamily: "var(--font-body)",
                textShadow: "0 2px 12px rgba(0,0,0,0.9)",
              }}
            >
              statTarian is a Welsh football academy management platform built
              for youth development programmes — replacing the fragmented tools
              holding your operations together with one connected system. Give
              coaches their time back, keep parents effortlessly informed, and
              ensure safeguarding and compliance never slip through the cracks.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-4 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="px-8 py-5 text-lg md:px-12 md:py-6 md:text-xl"
              asChild
            >
              <Link to="/contact">Book a Demo</Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}