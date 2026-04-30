"use client";

type HeroSurfaceProps = {
  children: React.ReactNode;
  className?: string;

  // Optional tuning controls
  spacing?: number;          // grid spacing (default 160px)
  lineOpacity?: number;      // brightness of grid lines (default 0.34)
  wrapperOpacity?: number;   // overall grid opacity (default 0.22)
  vignetteOpacity?: number;  // centre glow strength (default 0.24)
  vignettePosition?: string; // CSS position e.g. "center", "top center"
};

export function HeroSurface({
  children,
  className = "",
  spacing = 160,
  lineOpacity = 0.34,
  wrapperOpacity = 0.22,
  vignetteOpacity = 0.24,
  vignettePosition = "center",
}: HeroSurfaceProps) {
  return (
    <section
      className={`relative bg-background overflow-hidden py-12 md:py-24 ${className}`}
    >
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: wrapperOpacity,
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,${lineOpacity}) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,${lineOpacity}) 1px, transparent 1px)
          `,
          backgroundSize: `${spacing}px ${spacing}px`,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              circle at ${vignettePosition},
              rgba(95,149,152,${vignetteOpacity}) 0%,
              transparent 80%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
