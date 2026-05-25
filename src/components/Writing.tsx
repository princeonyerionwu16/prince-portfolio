import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const posts = [
  { date: "Apr 2026", read: "6 min", title: "Designing for stillness in a noisy web", excerpt: "Why restraint is the new wow factor in 2026 portfolios." },
  { date: "Mar 2026", read: "9 min", title: "Building offline-first apps with IndexedDB", excerpt: "A practical guide to PWAs that work on Nigerian 3G." },
  { date: "Feb 2026", read: "4 min", title: "I rebuilt my workflow around AI — here's what changed", excerpt: "Productive prompts, sharp boundaries, and shipping faster." },
];

export function Writing() {
  return (
    <section id="writing" className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-cyan)]">// writing</p>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <h2 className="max-w-xl font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Notes from the <span className="text-gradient">trenches</span>
          </h2>
          <a href="#" className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            All articles <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>

      <div className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-surface/40">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 80}>
            <a
              href="#"
              className="group grid grid-cols-12 items-center gap-4 px-6 py-6 transition hover:bg-white/[0.02]"
            >
              <div className="col-span-3 flex flex-col font-mono text-xs text-muted-foreground sm:col-span-2">
                <span>{p.date}</span>
                <span className="text-[10px]">{p.read} read</span>
              </div>
              <div className="col-span-9 sm:col-span-9">
                <h3 className="font-display text-lg font-semibold transition group-hover:text-[var(--neon-cyan)]">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.excerpt}</p>
              </div>
              <ArrowUpRight className="col-span-12 hidden h-5 w-5 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground sm:col-span-1 sm:block" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
