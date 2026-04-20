const modules = [
  'Welfare',
  'Safeguarding',
  'Medical',
  'Session Planning',
  'Squad Management',
  'Video',
  'IDPs',
  'Parent Portal',
]

export function MarqueeBar() {
  return (
    <div className="w-full py-10 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <h2
          className="text-foreground text-2xl font-bold uppercase tracking-widest text-center mb-8"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          One platform. Every module.
        </h2>
      </div>

      <div className="relative">
        <div
          className="flex w-fit"
          style={{ animation: 'var(--animate-marquee)', willChange: 'transform' }}
        >
          {modules.map((name) => (
            <span
              key={`a-${name}`}
              className="shrink-0 whitespace-nowrap px-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {name}
              <span className="ml-8 text-primary">·</span>
            </span>
          ))}
          {modules.map((name) => (
            <span
              key={`b-${name}`}
              className="shrink-0 whitespace-nowrap px-8 text-sm font-semibold uppercase tracking-widest text-muted-foreground"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {name}
              <span className="ml-8 text-primary">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}