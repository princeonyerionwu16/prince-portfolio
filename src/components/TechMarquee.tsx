const stack = [
  "React", "TypeScript", "Next.js", "Node.js", "Tailwind CSS", "Vite",
  "Python", "C++", "MySQL", "PostgreSQL", "Git", "GitHub", "Figma",
  "Framer Motion", "Three.js", "REST APIs", "GraphQL", "Docker", "Linux", "AI / LLMs",
];

export function TechMarquee() {
  const row = [...stack, ...stack];
  return (
    <section id="stack" className="relative overflow-hidden py-20">
      <div className="mx-auto mb-10 max-w-6xl px-4">
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-cyan)]">// stack</p>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Tools I reach for <span className="text-gradient">every day</span>
        </h2>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <div className="flex animate-marquee gap-3 whitespace-nowrap">
          {row.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 px-5 py-2.5 font-mono text-sm text-muted-foreground backdrop-blur transition hover:border-[var(--neon-blue)]/40 hover:text-foreground"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)]" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
