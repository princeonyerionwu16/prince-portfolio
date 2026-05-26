import { useEffect, useRef, useState } from "react";

const snippet = [
  { t: "// hooks/useDebounce.ts", c: "text-muted-foreground" },
  { t: 'import { useEffect, useState } from "react";', c: "text-foreground" },
  { t: "", c: "" },
  { t: "export function useDebounce<T>(value: T, delay = 300) {", c: "text-foreground" },
  { t: "  const [debounced, setDebounced] = useState(value);", c: "text-foreground" },
  { t: "", c: "" },
  { t: "  useEffect(() => {", c: "text-foreground" },
  { t: "    const t = setTimeout(() => setDebounced(value), delay);", c: "text-foreground" },
  { t: "    return () => clearTimeout(t);", c: "text-foreground" },
  { t: "  }, [value, delay]);", c: "text-foreground" },
  { t: "", c: "" },
  { t: "  return debounced;", c: "text-[var(--neon-cyan)]" },
  { t: "}", c: "text-foreground" },
];

export function CodeShowcase() {
  const [visible, setVisible] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          let i = 0;
          const tick = () => {
            i++;
            setVisible(i);
            if (i < snippet.length) setTimeout(tick, 90);
          };
          tick();
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24" ref={ref}>
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            // craft
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Code that <span className="text-gradient">reads like prose</span>
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            I obsess over readability, performance, and the tiny details. Every component is built
            to scale, every function tested, every animation tuned.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            {[
              "Type-safe end to end",
              "Accessible by default",
              "Zero-jank animations",
              "Clean git history",
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)]" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/60 bg-[oklch(0.13_0.02_270)] shadow-[var(--shadow-elevated)]">
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">useDebounce.ts</span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
            {snippet.slice(0, visible).map((l, i) => (
              <div key={i} className="flex">
                <span className="mr-4 w-6 select-none text-right text-muted-foreground/50">
                  {i + 1}
                </span>
                <span className={l.c}>{l.t || "\u00A0"}</span>
              </div>
            ))}
          </pre>
        </div>
      </div>
    </section>
  );
}
