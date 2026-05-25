import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { Reveal } from "./Reveal";
import { LumenReadsCover, TaskFlowCover, AuraStudioCover, StudentRegCover } from "./ProjectCovers";

type Project = {
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
  live: string;
  repo: string;
  accent: string;
  accent2: string;
  Cover: () => ReactNode;
};

const projects: Project[] = [
  {
    title: "LumenReads",
    tagline: "AI-powered book discovery",
    desc: "A cinematic reading dashboard. Describe a vibe and LumenReads surfaces your next favorite book using semantic search and a curated taste graph.",
    tags: ["React", "TypeScript", "OpenAI", "Tailwind"],
    live: "#", repo: "#",
    accent: "oklch(0.68 0.20 295)",
    accent2: "oklch(0.70 0.18 270)",
    Cover: LumenReadsCover,
  },
  {
    title: "TaskFlow Pro",
    tagline: "Productivity workspace",
    desc: "A futuristic kanban + analytics workspace. Drag, drop, and watch your sprint velocity climb with real-time charts and silky transitions.",
    tags: ["Next.js", "Framer Motion", "Postgres", "tRPC"],
    live: "#", repo: "#",
    accent: "oklch(0.78 0.15 200)",
    accent2: "oklch(0.70 0.18 240)",
    Cover: TaskFlowCover,
  },
  {
    title: "Aura Studio",
    tagline: "Creative studio landing",
    desc: "A digital studio brand site — glassmorphism, aurora gradients, and choreographed motion that turns every scroll into a film cut.",
    tags: ["React", "GSAP", "Three.js", "Tailwind"],
    live: "#", repo: "#",
    accent: "oklch(0.72 0.20 320)",
    accent2: "oklch(0.75 0.16 200)",
    Cover: AuraStudioCover,
  },
  {
    title: "Student Registration System",
    tagline: "Academic admin platform",
    desc: "A full academic management platform — enrollments, courses, analytics, and role-based access. Built to scale from one classroom to a campus.",
    tags: ["React", "MySQL", "Node.js", "Express"],
    live: "#", repo: "#",
    accent: "oklch(0.78 0.16 165)",
    accent2: "oklch(0.78 0.16 200)",
    Cover: StudentRegCover,
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // gentler tilt
  const rx = useSpring(useTransform(my, [-60, 60], [4, -4]), { stiffness: 180, damping: 22 });
  const ry = useSpring(useTransform(mx, [-60, 60], [-4, 4]), { stiffness: 180, damping: 22 });
  const gx = useTransform(mx, [-100, 100], ["0%", "100%"]);
  const gy = useTransform(my, [-100, 100], ["0%", "100%"]);
  const glow = useTransform([gx, gy], ([x, y]) =>
    `radial-gradient(420px circle at ${x} ${y}, ${p.accent}1f, transparent 60%)`
  ) as unknown as string;
  const shineX = useTransform(mx, [-100, 100], [-24, 24]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <Reveal delay={i * 90}>
      <motion.article
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 220, damping: 24 }}
        style={{ rotateX: rx, rotateY: ry, transformPerspective: 1400 }}
        className="group relative h-full"
      >
        {/* softer animated border */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[18px] opacity-0 blur-[6px] transition-opacity duration-500 group-hover:opacity-70"
          style={{
            background: `conic-gradient(from 180deg at 50% 50%, ${p.accent}, transparent 35%, ${p.accent2}, transparent 70%, ${p.accent})`,
            animation: "gradient 10s linear infinite",
          }}
        />
        <div className="relative h-full overflow-hidden rounded-[18px] border border-white/[0.08] bg-[oklch(0.135_0.015_265)] shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] transition-shadow duration-500 group-hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.9)]">
          {/* cursor-follow soft glow (reduced ~15%) */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: glow }}
          />

          {/* cover */}
          <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.06]">
            <p.Cover />
            {/* parallax shine */}
            <motion.div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background: "linear-gradient(115deg, transparent 42%, rgba(255,255,255,0.05) 50%, transparent 58%)",
                x: shineX,
              }}
            />
            {/* badge */}
            <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: p.accent, boxShadow: `0 0 6px ${p.accent}` }} />
              <span className="font-mono text-[10px] uppercase tracking-wider text-white/85">{p.tagline}</span>
            </div>
          </div>

          {/* body */}
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">{p.title}</h3>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/65">{p.desc}</p>

            {/* tag badges */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map((t, ti) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 * ti }}
                  whileHover={{ y: -2 }}
                  className="rounded-md border border-white/10 bg-white/[0.035] px-2 py-1 font-mono text-[10px] text-white/70 transition hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
                >
                  {t}
                </motion.span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <a
                href={p.live}
                className="group/btn relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg px-3.5 py-2 text-xs font-semibold text-white transition-transform duration-300 hover:scale-[1.03]"
                style={{
                  background: `linear-gradient(135deg, ${p.accent}, ${p.accent2})`,
                  boxShadow: `0 6px 22px -10px ${p.accent}`,
                }}
              >
                <ExternalLink className="h-3.5 w-3.5" /> Live demo
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
              </a>
              <a
                href={p.repo}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-white/80 backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06] hover:text-white"
              >
                <Github className="h-3.5 w-3.5" /> GitHub
              </a>
            </div>
          </div>
        </div>
      </motion.article>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
      <Reveal>
        <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-cyan)]">// selected work</p>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 sm:mb-12">
          <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Projects I'm <span className="text-gradient">proud of</span>
          </h2>
          <a href="#" className="group inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            See all on GitHub <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </Reveal>

      <div className="grid gap-5 sm:gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
