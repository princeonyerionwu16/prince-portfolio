import { useEffect, useState } from "react";
import { Search, Command } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
  { label: "Terminal", href: "#terminal" },
  { label: "Activity", href: "#activity" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" },
];

export function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-1/2 top-4 z-50 w-[min(1100px,calc(100%-2rem))] -translate-x-1/2 rounded-2xl transition-all duration-500 ${
        scrolled ? "glass shadow-[var(--shadow-elevated)]" : "border border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-display font-semibold tracking-tight"
        >
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] via-[var(--neon-blue)] to-[var(--neon-purple)] text-sm font-bold text-background shadow-[var(--shadow-glow)]">
            P
          </span>
          <span className="hidden sm:inline">
            prince<span className="text-muted-foreground">.dev</span>
          </span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={onOpenPalette}
          className="group flex items-center gap-2 rounded-lg border border-border/60 bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground transition hover:border-[var(--neon-blue)]/40 hover:text-foreground"
        >
          <Search className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Search…</span>
          <kbd className="hidden items-center gap-0.5 rounded border border-border/60 bg-background/80 px-1.5 py-0.5 font-mono text-[10px] sm:inline-flex">
            <Command className="h-2.5 w-2.5" />K
          </kbd>
        </button>
      </div>
    </header>
  );
}
