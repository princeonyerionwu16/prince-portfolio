import { useEffect, useState } from "react";

const lines = [
  { type: "in", text: "whoami" },
  { type: "out", text: "onyerionwu prince — full-stack developer" },
  { type: "in", text: "cat skills.json" },
  { type: "out", text: '{ "frontend": ["React", "TS", "Tailwind"],' },
  { type: "out", text: '  "backend":  ["Node", "Python", "MySQL"],' },
  { type: "out", text: '  "passion":  "building beautiful things" }' },
  { type: "in", text: "echo $LOCATION" },
  { type: "out", text: "Lagos, Nigeria 🇳🇬 — open to remote" },
  { type: "in", text: "contact --email" },
  { type: "out", text: "→ princeonyerionwu16@gmail.com" },
];

export function Terminal() {
  const [shown, setShown] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (shown >= lines.length) return;
    const cur = lines[shown];
    if (cur.type === "in") {
      if (typed.length < cur.text.length) {
        const t = setTimeout(() => setTyped(cur.text.slice(0, typed.length + 1)), 55);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => {
        setShown((s) => s + 1);
        setTyped("");
      }, 400);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => setShown((s) => s + 1), 200);
      return () => clearTimeout(t);
    }
  }, [shown, typed]);

  // Restart loop
  useEffect(() => {
    if (shown >= lines.length) {
      const t = setTimeout(() => {
        setShown(0);
        setTyped("");
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [shown]);

  return (
    <section id="terminal" className="relative mx-auto max-w-5xl px-4 py-24">
      <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
        // terminal
      </p>
      <h2 className="mb-10 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Say hi the <span className="text-gradient">developer way</span>
      </h2>

      <div className="overflow-hidden rounded-2xl border border-border/60 bg-[oklch(0.12_0.02_270)] shadow-[var(--shadow-elevated)]">
        <div className="flex items-center gap-1.5 border-b border-border/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-destructive/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/70" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">prince@portfolio: ~</span>
        </div>
        <div className="min-h-[320px] p-5 font-mono text-sm leading-7">
          {lines.slice(0, shown).map((l, i) => (
            <Line key={i} line={l} />
          ))}
          {shown < lines.length && lines[shown].type === "in" && (
            <Line line={{ type: "in", text: typed }} cursor />
          )}
        </div>
      </div>
    </section>
  );
}

function Line({ line, cursor }: { line: { type: string; text: string }; cursor?: boolean }) {
  return (
    <div className="flex">
      {line.type === "in" ? (
        <>
          <span className="mr-2 select-none text-[var(--neon-cyan)]">➜</span>
          <span className="mr-2 select-none text-[var(--neon-purple)]">~</span>
          <span className="text-foreground">
            {line.text}
            {cursor && (
              <span className="ml-0.5 inline-block h-4 w-2 -translate-y-[-2px] bg-[var(--neon-cyan)] align-middle animate-blink" />
            )}
          </span>
        </>
      ) : (
        <span className="text-muted-foreground">{line.text}</span>
      )}
    </div>
  );
}
