import { useEffect, useState } from "react";
import {
  Search,
  ArrowRight,
  Hash,
  Folder,
  Mail,
  Github,
  FileText,
  Terminal as TermIcon,
} from "lucide-react";

type Item = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  group: string;
};

const items: Item[] = [
  { id: "about", label: "About", icon: Hash, href: "#about", group: "Navigate" },
  { id: "projects", label: "Projects", icon: Folder, href: "#projects", group: "Navigate" },
  { id: "stack", label: "Tech stack", icon: Hash, href: "#stack", group: "Navigate" },
  { id: "terminal", label: "Terminal", icon: TermIcon, href: "#terminal", group: "Navigate" },
  { id: "activity", label: "GitHub activity", icon: Hash, href: "#activity", group: "Navigate" },
  { id: "writing", label: "Writing", icon: FileText, href: "#writing", group: "Navigate" },
  { id: "contact", label: "Contact", icon: Mail, href: "#contact", group: "Navigate" },
  {
    id: "email",
    label: "Copy email",
    icon: Mail,
    href: "mailto:princeonyerionwu16@gmail.com",
    group: "Actions",
  },
  {
    id: "gh",
    label: "Open GitHub",
    icon: Github,
    href: "https://github.com/princeonyerionwu16",
    group: "Actions",
  },
];

export function CommandPalette({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!open) setQ("");
    setActive(0);
  }, [open]);

  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => Math.min(a + 1, filtered.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      }
      if (e.key === "Enter" && filtered[active]) {
        const f = filtered[active];
        if (f.href.startsWith("#")) {
          document.querySelector(f.href)?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.open(f.href, "_blank");
        }
        onClose();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active, onClose]);

  if (!open) return null;

  const groups = filtered.reduce<Record<string, Item[]>>((acc, i) => {
    (acc[i.group] ||= []).push(i);
    return acc;
  }, {});

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[12vh]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/70 backdrop-blur-md" />
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-border/60 bg-[oklch(0.18_0.025_270)] shadow-[var(--shadow-elevated)] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-border/60 px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            autoFocus
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Type a command or search…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <kbd className="rounded border border-border/60 bg-background/60 px-1.5 py-0.5 font-mono text-[10px]">
            ESC
          </kbd>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="px-4 py-10 text-center text-sm text-muted-foreground">
              No results for "{q}"
            </p>
          ) : (
            Object.entries(groups).map(([group, list]) => (
              <div key={group} className="mb-2">
                <p className="px-3 pb-1 pt-2 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {group}
                </p>
                {list.map((i) => {
                  const idx = filtered.indexOf(i);
                  const isActive = idx === active;
                  return (
                    <button
                      key={i.id}
                      onMouseEnter={() => setActive(idx)}
                      onClick={() => {
                        if (i.href.startsWith("#")) {
                          document.querySelector(i.href)?.scrollIntoView({ behavior: "smooth" });
                        } else {
                          window.open(i.href, "_blank");
                        }
                        onClose();
                      }}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition ${
                        isActive
                          ? "bg-gradient-to-r from-[var(--neon-blue)]/20 to-[var(--neon-purple)]/20 text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <i.icon className="h-4 w-4" />
                        {i.label}
                      </span>
                      {isActive && <ArrowRight className="h-3.5 w-3.5" />}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
