import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    quote: "Prince delivered our MVP in two weeks — the UI was sharper than what we'd seen from agencies charging 10x more.",
    name: "Adaeze O.",
    role: "Founder, fintech startup",
  },
  {
    quote: "Calm under pressure, ridiculously fast, and writes the cleanest React I've reviewed in a while. Hire him.",
    name: "Marcus K.",
    role: "Senior Engineer, remote",
  },
  {
    quote: "He turned our messy Figma into a pixel-perfect, fully responsive site. Our conversions jumped 38%.",
    name: "Sade A.",
    role: "Marketing Lead",
  },
];

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24">
      <Reveal>
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-cyan)]">// kind words</p>
        <h2 className="mb-12 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          What people <span className="text-gradient">say</span>
        </h2>
      </Reveal>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <figure className="group relative h-full rounded-2xl border border-border/60 bg-[var(--gradient-card)] p-6 transition hover:-translate-y-1 hover:border-[var(--neon-blue)]/40">
              <Quote className="h-6 w-6 text-[var(--neon-blue)]/60" />
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div
                  className="grid h-9 w-9 place-items-center rounded-full font-display text-sm font-semibold text-background"
                  style={{
                    background: `linear-gradient(135deg, var(--neon-${["blue", "purple", "cyan"][i % 3]}), var(--neon-${["purple", "cyan", "blue"][i % 3]}))`,
                  }}
                >
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
