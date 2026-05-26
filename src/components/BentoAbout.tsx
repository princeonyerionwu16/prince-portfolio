import { Code2, Coffee, Globe2, Rocket, Brain, Heart } from "lucide-react";
import { Reveal } from "./Reveal";
import portrait from "@/assets/portrait.jpg";

export function BentoAbout() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-4 py-32">
      <Reveal>
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
          // about
        </p>
        <h2 className="mb-12 max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
          A developer who treats <span className="text-gradient">every project</span> like a
          challenge worth winning.
        </h2>
      </Reveal>

      <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-4">
        {/* Portrait card */}
        <Reveal className="md:col-span-1 md:row-span-2" delay={0}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface/40">
            <img
              src={portrait}
              alt="Onyerionwu Prince — portrait"
              loading="lazy"
              width={768}
              height={960}
              className="h-full w-full object-cover object-[70%_30%] transition duration-700 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--neon-blue)]/20" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--neon-cyan)]">
                // the human
              </p>
              <p className="mt-1 font-display text-lg font-semibold leading-tight">
                Onyerionwu Prince
              </p>
              <p className="text-xs text-muted-foreground">Lagos · Nigeria</p>
            </div>
          </div>
        </Reveal>

        {/* Bio card - large */}
        <Reveal className="md:col-span-2 md:row-span-2" delay={60}>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-border/60 bg-[var(--gradient-card)] p-6 transition hover:border-[var(--neon-blue)]/50">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[var(--neon-blue)]/20 blur-3xl transition group-hover:bg-[var(--neon-purple)]/30" />
            <Brain className="h-8 w-8 text-[var(--neon-cyan)]" />
            <h3 className="mt-4 font-display text-2xl font-semibold">
              Curious by nature, builder by trade.
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              I'm an IT student who fell in love with the web through tinkering — breaking things,
              fixing them, and shipping. From clean UIs in React to scripts in Python and
              lower-level C++, I'm always reaching for the next challenge.
            </p>
          </div>
        </Reveal>

        {/* Location */}
        <Reveal delay={80}>
          <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface/60 p-5 backdrop-blur">
            <Globe2 className="h-6 w-6 text-[var(--neon-purple)]" />
            <p className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              based in
            </p>
            <p className="font-display text-lg font-semibold">Nigeria 🇳🇬</p>
            <p className="text-xs text-muted-foreground">Working globally</p>
          </div>
        </Reveal>

        {/* Years */}
        <Reveal delay={140}>
          <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-[var(--neon-blue)]/15 to-transparent p-5">
            <Code2 className="h-6 w-6 text-[var(--neon-blue)]" />
            <p className="mt-3 font-display text-3xl font-bold text-gradient-neon">3+ yrs</p>
            <p className="text-xs text-muted-foreground">writing production code</p>
          </div>
        </Reveal>

        {/* Focus */}
        <Reveal delay={200}>
          <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface/60 p-5">
            <Rocket className="h-6 w-6 text-[var(--neon-cyan)]" />
            <p className="mt-3 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              currently
            </p>
            <p className="font-display text-lg font-semibold">Full-stack & UI engineering</p>
          </div>
        </Reveal>

        {/* Fun */}
        <Reveal delay={260}>
          <div className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-tr from-[var(--neon-purple)]/15 to-transparent p-5">
            <Coffee className="h-6 w-6 text-[var(--neon-purple)]" />
            <p className="mt-3 font-display text-3xl font-bold">∞</p>
            <p className="text-xs text-muted-foreground">cups of coffee debugged</p>
          </div>
        </Reveal>

        {/* Values */}
        <Reveal className="md:col-span-2" delay={320}>
          <div className="relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-border/60 bg-surface/60 p-5">
            <Heart className="h-6 w-6 shrink-0 text-[var(--neon-cyan)]" />
            <p className="text-sm text-muted-foreground">
              I believe great software is <span className="text-foreground">fast</span>,{" "}
              <span className="text-foreground">accessible</span>, and{" "}
              <span className="text-foreground">delightful</span> — never one without the others.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
