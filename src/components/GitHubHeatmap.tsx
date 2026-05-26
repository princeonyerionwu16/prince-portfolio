import { useMemo } from "react";

function seedRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function GitHubHeatmap() {
  const cells = useMemo(() => {
    const rng = seedRandom(42);
    return Array.from({ length: 7 * 53 }, () => {
      const r = rng();
      if (r < 0.45) return 0;
      if (r < 0.7) return 1;
      if (r < 0.88) return 2;
      if (r < 0.97) return 3;
      return 4;
    });
  }, []);

  const colors = [
    "oklch(0.24 0.025 270)",
    "oklch(0.45 0.10 250)",
    "oklch(0.58 0.15 250)",
    "oklch(0.70 0.20 255)",
    "oklch(0.80 0.22 280)",
  ];

  const total = cells.reduce((a: number, b: number) => a + b * 2, 0);

  return (
    <section id="activity" className="relative mx-auto max-w-6xl px-4 py-24">
      <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
        // activity
      </p>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
          A year of <span className="text-gradient">shipping</span>
        </h2>
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-foreground">{total}</span> contributions in the last year
        </p>
      </div>

      <div className="rounded-2xl border border-border/60 bg-[var(--gradient-card)] p-6">
        <div className="overflow-x-auto">
          <div
            className="grid grid-flow-col gap-[3px]"
            style={{ gridTemplateRows: "repeat(7, 12px)" }}
          >
            {cells.map((v, i) => (
              <div
                key={i}
                className="h-3 w-3 rounded-[3px] transition hover:scale-150"
                style={{
                  backgroundColor: colors[v],
                  boxShadow: v >= 3 ? `0 0 8px ${colors[v]}` : undefined,
                }}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center justify-end gap-2 text-xs text-muted-foreground">
          <span>Less</span>
          {colors.map((c, i) => (
            <span key={i} className="h-3 w-3 rounded-[3px]" style={{ backgroundColor: c }} />
          ))}
          <span>More</span>
        </div>
      </div>
    </section>
  );
}
