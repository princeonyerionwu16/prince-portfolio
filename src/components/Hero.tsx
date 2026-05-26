import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center px-4 pt-32">
      {/* Animated grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.70 0.21 255 / 0.25) 1px, transparent 1px), linear-gradient(90deg, oklch(0.70 0.21 255 / 0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
        }}
      />
      {/* Glow orbs */}
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-72 w-72 rounded-full bg-[var(--neon-blue)]/20 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute right-[10%] bottom-[15%] h-96 w-96 rounded-full bg-[var(--neon-purple)]/20 blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--neon-blue)]/30 bg-[var(--neon-blue)]/5 px-4 py-1.5 text-xs font-medium text-[var(--neon-cyan)] backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-cyan)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
          </span>
          Available for freelance & collaboration
        </div>

        <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl">
          <span className="block text-foreground">Building the</span>
          <span className="block text-gradient-neon">future of the web,</span>
          <span className="block text-foreground">one pixel at a time.</span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg">
          I'm <span className="font-medium text-foreground">Onyerionwu Prince</span> — an
          Information Technology student & web developer from Nigeria, crafting fast, beautiful, and
          challenging products with React, TypeScript and a love for clean code.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-6 py-3 text-sm font-semibold text-background shadow-[var(--shadow-glow)] transition hover:shadow-[var(--shadow-glow-purple)]"
          >
            <Sparkles className="h-4 w-4" />
            View my work
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition hover:border-[var(--neon-blue)]/40 hover:bg-surface"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-20 flex flex-col items-center text-xs text-muted-foreground">
          <ArrowDown className="h-4 w-4 animate-bounce" />
          <span className="mt-2 font-mono uppercase tracking-widest">scroll</span>
        </div>
      </div>
    </section>
  );
}
