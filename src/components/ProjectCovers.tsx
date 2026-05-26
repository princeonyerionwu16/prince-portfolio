import { motion } from "framer-motion";
import {
  Search,
  Sparkles,
  Star,
  BookOpen,
  Bell,
  Plus,
  CheckCircle2,
  BarChart3,
  Filter,
  Calendar,
  Layers,
  Users,
  GraduationCap,
  MoreHorizontal,
  Play,
  ArrowRight,
} from "lucide-react";

/* ----------------------------------------------------------
   Shared chrome: a realistic "browser window" frame for cards.
   Keeps every cover stylistically consistent.
---------------------------------------------------------- */
function BrowserChrome({
  url,
  children,
  theme = "dark",
}: {
  url: string;
  children: React.ReactNode;
  theme?: "dark" | "light";
}) {
  const bg = theme === "dark" ? "bg-[oklch(0.14_0.02_265)]" : "bg-[oklch(0.97_0.01_260)]";
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="flex h-6 shrink-0 items-center gap-1.5 border-b border-white/10 bg-black/40 px-3 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-amber-400/70" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        <div className="ml-3 flex h-3.5 flex-1 items-center justify-center rounded-md bg-white/[0.06] px-2">
          <span className="font-mono text-[8px] text-white/50">{url}</span>
        </div>
      </div>
      <div className={`relative flex-1 overflow-hidden ${bg}`}>{children}</div>
    </div>
  );
}

/* ============================================================
   LumenReads — realistic book discovery dashboard
============================================================ */
export function LumenReadsCover() {
  const books = [
    { t: "Project Hail Mary", a: "Andy Weir", c: "from-violet-500 to-fuchsia-500", r: 4.8 },
    { t: "Klara and the Sun", a: "K. Ishiguro", c: "from-indigo-500 to-blue-500", r: 4.6 },
    { t: "The Midnight Library", a: "Matt Haig", c: "from-fuchsia-500 to-pink-500", r: 4.7 },
  ];
  return (
    <BrowserChrome url="lumenreads.app/discover">
      {/* subtle aurora */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(at 15% 0%, oklch(0.45 0.18 295 / 0.30), transparent 55%), radial-gradient(at 100% 100%, oklch(0.50 0.18 255 / 0.25), transparent 55%)",
        }}
      />

      <div className="relative flex h-full">
        {/* sidebar */}
        <aside className="hidden w-[22%] shrink-0 border-r border-white/5 p-2.5 sm:block">
          <div className="flex items-center gap-1.5">
            <div className="grid h-4 w-4 place-items-center rounded-sm bg-gradient-to-br from-fuchsia-400 to-violet-500">
              <BookOpen className="h-2.5 w-2.5 text-white" />
            </div>
            <span className="font-display text-[10px] font-semibold text-white">LumenReads</span>
          </div>
          <div className="mt-3 space-y-1">
            {["Discover", "Library", "Lists", "Friends"].map((l, i) => (
              <div
                key={l}
                className={`rounded-md px-1.5 py-1 font-mono text-[8px] ${i === 0 ? "bg-white/10 text-white" : "text-white/45"}`}
              >
                {l}
              </div>
            ))}
          </div>
        </aside>

        {/* main */}
        <div className="flex-1 p-3">
          {/* search */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 backdrop-blur"
          >
            <Search className="h-3 w-3 text-fuchsia-300" />
            <span className="font-mono text-[9px] text-white/70">
              books like "Dune" but cozier…
            </span>
            <motion.span
              className="ml-auto h-3 w-px bg-fuchsia-300/80"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
            />
          </motion.div>

          {/* AI suggestion chip */}
          <div className="mt-2 inline-flex items-center gap-1 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-2 py-0.5">
            <Sparkles className="h-2.5 w-2.5 text-fuchsia-300" />
            <span className="font-mono text-[8px] text-fuchsia-200">AI · 12 picks for you</span>
          </div>

          {/* book grid */}
          <div className="mt-2.5 grid grid-cols-3 gap-1.5">
            {books.map((b, i) => (
              <motion.div
                key={b.t}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="rounded-md border border-white/10 bg-white/[0.03] p-1.5"
              >
                <div className={`h-12 w-full rounded bg-gradient-to-br ${b.c}`}>
                  <div className="ml-1 mt-1 h-0.5 w-5 rounded bg-white/40" />
                  <div className="ml-1 mt-0.5 h-0.5 w-3 rounded bg-white/25" />
                </div>
                <p className="mt-1 truncate font-display text-[9px] font-semibold text-white">
                  {b.t}
                </p>
                <p className="truncate font-mono text-[7px] text-white/45">{b.a}</p>
                <div className="mt-0.5 flex items-center gap-0.5">
                  <Star className="h-1.5 w-1.5 fill-amber-300 text-amber-300" />
                  <span className="font-mono text-[7px] text-white/60">{b.r}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

/* ============================================================
   TaskFlow Pro — realistic kanban + analytics
============================================================ */
export function TaskFlowCover() {
  const cols = [
    {
      t: "Backlog",
      n: 4,
      c: "bg-sky-400",
      tasks: [
        { p: "high", l: "Onboarding flow" },
        { p: "med", l: "Refactor auth" },
      ],
    },
    { t: "In progress", n: 2, c: "bg-amber-400", tasks: [{ p: "high", l: "Billing portal" }] },
    {
      t: "Done",
      n: 6,
      c: "bg-emerald-400",
      tasks: [
        { p: "low", l: "Landing v2" },
        { p: "med", l: "Migrate DB" },
      ],
    },
  ];
  const pColor: Record<string, string> = {
    high: "bg-rose-400/80",
    med: "bg-amber-400/80",
    low: "bg-emerald-400/80",
  };

  return (
    <BrowserChrome url="taskflow.pro/board/sprint-12">
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(at 80% 0%, oklch(0.55 0.15 200 / 0.25), transparent 60%)",
        }}
      />

      <div className="relative flex h-full flex-col">
        {/* topbar */}
        <div className="flex h-7 items-center gap-2 border-b border-white/10 px-3">
          <span className="font-display text-[10px] font-semibold text-white">Sprint 12</span>
          <span className="rounded-full bg-cyan-500/15 px-1.5 py-0.5 font-mono text-[7px] text-cyan-300">
            active
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <Filter className="h-2.5 w-2.5 text-white/50" />
            <Calendar className="h-2.5 w-2.5 text-white/50" />
            <Bell className="h-2.5 w-2.5 text-white/50" />
            <div className="h-3 w-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
          </div>
        </div>

        {/* board */}
        <div className="grid flex-1 grid-cols-3 gap-1.5 p-2">
          {cols.map((c, ci) => (
            <div key={c.t} className="rounded-md border border-white/10 bg-white/[0.025] p-1.5">
              <div className="flex items-center gap-1">
                <span className={`h-1.5 w-1.5 rounded-full ${c.c}`} />
                <span className="font-mono text-[7.5px] uppercase tracking-wider text-white/65">
                  {c.t}
                </span>
                <span className="ml-auto font-mono text-[7.5px] text-white/35">{c.n}</span>
              </div>
              <div className="mt-1 space-y-1">
                {c.tasks.map((tk, i) => (
                  <motion.div
                    key={tk.l}
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.07 * (ci * 2 + i) }}
                    className="rounded bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-1.5 ring-1 ring-white/5"
                  >
                    <div className="flex items-center gap-1">
                      <span className={`h-1 w-1 rounded-full ${pColor[tk.p]}`} />
                      <span className="font-mono text-[7.5px] text-white/85">{tk.l}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-1">
                      <span className="rounded bg-white/10 px-1 font-mono text-[6.5px] text-white/55">
                        TF-{20 + i}
                      </span>
                      <div className="ml-auto flex -space-x-1">
                        <span className="h-2 w-2 rounded-full bg-cyan-400 ring-1 ring-black/40" />
                        <span className="h-2 w-2 rounded-full bg-violet-400 ring-1 ring-black/40" />
                      </div>
                    </div>
                  </motion.div>
                ))}
                <button className="flex w-full items-center gap-1 rounded px-1 py-0.5 font-mono text-[7px] text-white/30 hover:bg-white/5">
                  <Plus className="h-2 w-2" /> add
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* analytics strip */}
        <div className="grid grid-cols-3 gap-1.5 border-t border-white/10 p-2">
          <div className="rounded-md border border-white/10 bg-white/[0.03] p-1.5">
            <div className="flex items-center gap-1 font-mono text-[7px] uppercase text-cyan-300">
              <BarChart3 className="h-2 w-2" /> velocity
            </div>
            <div className="mt-1 flex items-end gap-0.5">
              {[3, 5, 4, 7, 6, 9, 8].map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h * 2}px` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 * i }}
                  className="w-1 rounded-sm bg-gradient-to-t from-cyan-500/80 to-cyan-300"
                />
              ))}
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.03] p-1.5">
            <p className="font-mono text-[7px] uppercase text-white/45">completed</p>
            <p className="font-display text-sm font-semibold text-emerald-300">87%</p>
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.03] p-1.5">
            <p className="font-mono text-[7px] uppercase text-white/45">cycle</p>
            <p className="font-display text-sm font-semibold text-cyan-300">2.4d</p>
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}

/* ============================================================
   Aura Studio — creative agency landing page
============================================================ */
export function AuraStudioCover() {
  return (
    <BrowserChrome url="aura.studio">
      {/* gradient field */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.17 0.05 320), oklch(0.15 0.04 270), oklch(0.16 0.05 230))",
        }}
      />
      <motion.div
        className="absolute -left-8 -top-8 h-40 w-40 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.22 320 / 0.40), transparent 70%)",
        }}
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-8 bottom-0 h-44 w-44 rounded-full"
        style={{
          background: "radial-gradient(circle, oklch(0.7 0.22 230 / 0.40), transparent 70%)",
        }}
        animate={{ x: [0, -18, 0], y: [0, -12, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* nav */}
      <div className="relative flex h-7 items-center gap-3 border-b border-white/8 px-3">
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-md bg-gradient-to-br from-fuchsia-400 to-violet-500" />
          <span className="font-display text-[10px] font-semibold text-white">aura</span>
        </div>
        <div className="ml-3 flex gap-2.5 font-mono text-[8px] text-white/55">
          <span>work</span>
          <span>studio</span>
          <span>journal</span>
        </div>
        <button className="ml-auto rounded-full bg-white px-2 py-0.5 font-mono text-[7.5px] font-semibold text-black">
          contact
        </button>
      </div>

      {/* hero */}
      <div className="relative flex h-[calc(100%-1.75rem)] flex-col items-start justify-center px-5">
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-full border border-white/15 bg-white/[0.06] px-2 py-0.5 font-mono text-[7.5px] uppercase tracking-[0.25em] text-white/70 backdrop-blur"
        >
          ✦ creative studio · 2026
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 max-w-[80%] font-display text-[18px] font-semibold leading-[1.1] tracking-tight text-white"
        >
          We craft{" "}
          <span className="bg-gradient-to-r from-fuchsia-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
            light
          </span>
          <br />
          into pixels.
        </motion.h3>
        <p className="mt-1.5 max-w-[70%] font-mono text-[8px] leading-relaxed text-white/55">
          A boutique studio building cinematic brands & interfaces.
        </p>
        <div className="mt-2.5 flex items-center gap-1.5">
          <button className="inline-flex items-center gap-1 rounded-md bg-white px-2 py-1 font-mono text-[8px] font-semibold text-black">
            view work <ArrowRight className="h-2 w-2" />
          </button>
          <button className="inline-flex items-center gap-1 rounded-md border border-white/20 bg-white/5 px-2 py-1 font-mono text-[8px] text-white/85 backdrop-blur">
            <Play className="h-2 w-2" /> reel
          </button>
        </div>
      </div>

      {/* floating glass tile */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-3 top-10 w-[34%] rounded-lg border border-white/15 bg-white/[0.06] p-2 backdrop-blur-xl"
      >
        <div className="h-10 rounded-md bg-gradient-to-br from-fuchsia-400/40 via-violet-500/30 to-cyan-400/30" />
        <p className="mt-1.5 font-display text-[9px] font-semibold text-white">Northstar / 2025</p>
        <p className="font-mono text-[7px] text-white/50">brand · web · motion</p>
      </motion.div>
    </BrowserChrome>
  );
}

/* ============================================================
   Student Registration — admin/academic dashboard
============================================================ */
export function StudentRegCover() {
  const students = [
    { n: "Adaeze Okafor", c: "CSC 201", s: "active", g: "A" },
    { n: "Bola Adeyemi", c: "ITE 110", s: "active", g: "B+" },
    { n: "Chinedu Eze", c: "CSC 305", s: "pending", g: "—" },
    { n: "Damilola Bello", c: "EEE 202", s: "active", g: "A-" },
    { n: "Emeka Nwosu", c: "ITE 220", s: "pending", g: "—" },
  ];
  return (
    <BrowserChrome url="campus.edu/admin/students">
      <div className="absolute inset-0 bg-[oklch(0.13_0.015_240)]" />

      <div className="relative flex h-full">
        {/* sidebar */}
        <aside className="hidden w-[18%] shrink-0 border-r border-white/8 p-2 sm:block">
          <div className="flex items-center gap-1.5">
            <div className="grid h-4 w-4 place-items-center rounded-sm bg-gradient-to-br from-emerald-400 to-cyan-400">
              <GraduationCap className="h-2.5 w-2.5 text-black" />
            </div>
            <span className="font-display text-[9px] font-semibold text-white">Campus</span>
          </div>
          <div className="mt-3 space-y-1">
            {[
              { Ic: Users, l: "Students", a: true },
              { Ic: Layers, l: "Courses" },
              { Ic: BarChart3, l: "Reports" },
              { Ic: BookOpen, l: "Library" },
            ].map(({ Ic, l, a }) => (
              <div
                key={l}
                className={`flex items-center gap-1.5 rounded px-1.5 py-1 ${a ? "bg-emerald-500/10 text-emerald-300" : "text-white/40"}`}
              >
                <Ic className="h-2.5 w-2.5" />
                <span className="font-mono text-[7.5px]">{l}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* main */}
        <div className="flex-1 p-2.5">
          {/* topbar */}
          <div className="flex items-center gap-2">
            <div>
              <p className="font-display text-[11px] font-semibold text-white">Students</p>
              <p className="font-mono text-[7px] text-white/45">1,284 enrolled · spring '26</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <div className="flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.04] px-1.5 py-1">
                <Search className="h-2.5 w-2.5 text-white/40" />
                <span className="font-mono text-[7px] text-white/40">search…</span>
              </div>
              <button className="rounded-md bg-emerald-400 px-2 py-1 font-mono text-[7.5px] font-semibold text-black">
                + add
              </button>
            </div>
          </div>

          {/* stats */}
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            {[
              { l: "Enrolled", v: "1,284", c: "text-emerald-300", t: "+8%" },
              { l: "Active", v: "1,109", c: "text-cyan-300", t: "+3%" },
              { l: "Pending", v: "47", c: "text-amber-300", t: "−12%" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="rounded-md border border-white/10 bg-white/[0.03] p-1.5"
              >
                <p className="font-mono text-[7px] uppercase text-white/45">{s.l}</p>
                <div className="flex items-baseline gap-1">
                  <p className={`font-display text-sm font-semibold ${s.c}`}>{s.v}</p>
                  <span className="font-mono text-[7px] text-white/40">{s.t}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* table */}
          <div className="mt-2 rounded-md border border-white/10 bg-black/20 p-1.5">
            <div className="grid grid-cols-[1.4fr_60px_50px_30px_16px] items-center gap-2 border-b border-white/10 pb-1">
              {["Student", "Course", "Status", "Grade", ""].map((h) => (
                <span key={h} className="font-mono text-[7px] uppercase text-white/40">
                  {h}
                </span>
              ))}
            </div>
            {students.map((r, i) => (
              <motion.div
                key={r.n}
                initial={{ opacity: 0, x: -4 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.04 * i }}
                className="grid grid-cols-[1.4fr_60px_50px_30px_16px] items-center gap-2 border-b border-white/[0.04] py-1 last:border-0"
              >
                <div className="flex items-center gap-1.5">
                  <span className="grid h-3.5 w-3.5 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 font-mono text-[6px] font-bold text-black">
                    {r.n[0]}
                  </span>
                  <span className="truncate font-mono text-[8px] text-white/85">{r.n}</span>
                </div>
                <span className="font-mono text-[8px] text-white/55">{r.c}</span>
                <span
                  className={`inline-flex items-center gap-0.5 rounded-full px-1 py-0.5 font-mono text-[7px] ${r.s === "active" ? "bg-emerald-500/15 text-emerald-300" : "bg-amber-500/15 text-amber-300"}`}
                >
                  <CheckCircle2 className="h-1.5 w-1.5" /> {r.s}
                </span>
                <span className="font-mono text-[8px] text-white/70">{r.g}</span>
                <MoreHorizontal className="h-2.5 w-2.5 text-white/30" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </BrowserChrome>
  );
}
