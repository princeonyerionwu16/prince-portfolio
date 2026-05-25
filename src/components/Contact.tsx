import { useEffect, useState, type FormEvent } from "react";
import { Check, Copy, Github, Mail, Twitter, Linkedin, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const EMAIL = "hello@prince.dev";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email").max(255, "Email is too long"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(1000, "Message is too long"),
});

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((p) => ({ ...p, [key]: undefined }));
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const next: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FieldErrors;
        if (k && !next[k]) next[k] = issue.message;
      }
      setErrors(next);
      return;
    }
    setSubmitting(true);
    // Frontend-only: open the user's mail client with a prefilled message.
    const subject = encodeURIComponent(`Portfolio inquiry from ${parsed.data.name}`);
    const body = encodeURIComponent(`${parsed.data.message}\n\n— ${parsed.data.name}\n${parsed.data.email}`);
    setTimeout(() => {
      window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      toast.success("Opening your email app…", {
        description: "Your message is ready to send to Prince.",
      });
      setForm({ name: "", email: "", message: "" });
      setSubmitting(false);
    }, 400);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-5xl px-4 py-32">
      <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[var(--gradient-card)] p-8 sm:p-12 noise">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[var(--neon-blue)]/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[var(--neon-purple)]/30 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Left: pitch + email + socials */}
          <div>
            <p className="mb-3 text-xs font-mono uppercase tracking-[0.3em] text-[var(--neon-cyan)]">// let's talk</p>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Have an idea? <br />
              <span className="text-gradient-neon">Let's build it.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Open to freelance projects, internships, and ambitious collaborations. I usually reply within 24 hours.
            </p>

            <div className="mt-8 inline-flex items-center gap-1 rounded-2xl border border-border/60 bg-background/60 p-1.5 backdrop-blur">
              <span className="px-4 py-2 font-mono text-sm">{EMAIL}</span>
              <button
                type="button"
                onClick={copy}
                className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-3 py-2 text-xs font-semibold text-background transition hover:shadow-[var(--shadow-glow)]"
              >
                {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <div className="mt-10 flex gap-3">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-xl border border-border/60 bg-surface/60 text-muted-foreground backdrop-blur transition hover:-translate-y-0.5 hover:border-[var(--neon-blue)]/50 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            noValidate
            className="relative rounded-2xl border border-border/60 bg-background/50 p-6 backdrop-blur sm:p-8"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Your name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Ada Lovelace"
                  className="h-11 w-full rounded-lg border border-border/70 bg-surface/60 px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-[var(--neon-blue)]/60 focus:ring-2 focus:ring-[var(--neon-blue)]/20"
                />
                {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  maxLength={255}
                  autoComplete="email"
                  placeholder="you@domain.com"
                  className="h-11 w-full rounded-lg border border-border/70 bg-surface/60 px-3 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-[var(--neon-blue)]/60 focus:ring-2 focus:ring-[var(--neon-blue)]/20"
                />
                {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={update("message")}
                  maxLength={1000}
                  rows={5}
                  placeholder="Tell me about your project, role, or idea…"
                  className="w-full resize-none rounded-lg border border-border/70 bg-surface/60 px-3 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-[var(--neon-blue)]/60 focus:ring-2 focus:ring-[var(--neon-blue)]/20"
                />
                <div className="mt-1 flex items-center justify-between text-xs">
                  {errors.message ? (
                    <p className="text-destructive">{errors.message}</p>
                  ) : (
                    <span className="text-muted-foreground/60">Min 10 characters</span>
                  )}
                  <span className="font-mono text-muted-foreground/60">{form.message.length}/1000</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-4 py-3 text-sm font-semibold text-background transition hover:shadow-[var(--shadow-glow)] disabled:opacity-70"
              >
                {submitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    Send message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);
  return (
    <footer className="border-t border-border/40 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
        <p>© {year} Onyerionwu Prince. Crafted with care in Nigeria.</p>
        <p className="font-mono">
          Built with React · TypeScript · Tailwind ·{" "}
          <span className="text-[var(--neon-cyan)]">v1.0.0</span>
        </p>
      </div>
    </footer>
  );
}
