import { useEffect, useState } from "react";
import { Music, Clock, Zap, Eye } from "lucide-react";

export function LiveWidgets() {
  const [now, setNow] = useState<Date | null>(null);
  const [visitors, setVisitors] = useState(12947);

  useEffect(() => {
    setNow(new Date());
    setVisitors(12847 + Math.floor(Math.random() * 200));
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const time = now ? now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false }) : "--:--:--";
  const date = now ? now.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" }) : "—";

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-4 md:grid-cols-4">
        {/* Now working on */}
        <div className="md:col-span-2 rounded-2xl border border-border/60 bg-[var(--gradient-card)] p-5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--neon-cyan)]">
            <Zap className="h-3.5 w-3.5" />
            now working on
          </div>
          <p className="mt-3 font-display text-lg font-semibold">Building a real-time collaboration tool</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Exploring CRDTs and WebSockets for offline-first multiplayer editing.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-surface">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-purple)]" />
            </div>
            <span className="font-mono text-xs text-muted-foreground">67%</span>
          </div>
        </div>

        {/* Clock */}
        <div className="rounded-2xl border border-border/60 bg-surface/60 p-5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--neon-purple)]">
            <Clock className="h-3.5 w-3.5" />
            local time
          </div>
          <p className="mt-3 font-mono text-3xl font-semibold tabular-nums text-gradient-neon">{time}</p>
          <p className="mt-1 text-xs text-muted-foreground">{date} · WAT</p>
        </div>

        {/* Spotify */}
        <div className="rounded-2xl border border-border/60 bg-surface/60 p-5">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--neon-cyan)]">
            <Music className="h-3.5 w-3.5" />
            now playing
          </div>
          <p className="mt-3 font-display text-base font-semibold">Midnight City</p>
          <p className="text-xs text-muted-foreground">M83 · Hurry Up, We're Dreaming</p>
          <div className="mt-3 flex items-end gap-0.5">
            {[3, 5, 2, 6, 4, 7, 3, 5, 4, 6, 3, 5].map((h, i) => (
              <span
                key={i}
                className="w-1 rounded-sm bg-gradient-to-t from-[var(--neon-blue)] to-[var(--neon-purple)]"
                style={{ height: `${h * 3}px`, animation: `pulse-glow ${0.8 + i * 0.07}s ease-in-out infinite` }}
              />
            ))}
          </div>
        </div>

        {/* Visitor counter */}
        <div className="md:col-span-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-border/60 bg-gradient-to-r from-[var(--neon-blue)]/10 via-transparent to-[var(--neon-purple)]/10 p-5">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--neon-blue)]/20 text-[var(--neon-cyan)]">
              <Eye className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">visitor count</p>
              <p className="font-display text-lg font-semibold tabular-nums">
                {visitors.toLocaleString()} <span className="text-sm font-normal text-muted-foreground">curious souls have stopped by</span>
              </p>
            </div>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            you're visitor <span className="text-foreground">#{(visitors + 1).toLocaleString()}</span> · welcome 👋
          </p>
        </div>
      </div>
    </section>
  );
}
