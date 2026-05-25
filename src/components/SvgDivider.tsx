export function SvgDivider() {
  return (
    <div className="relative w-full" aria-hidden>
      <svg viewBox="0 0 1200 80" className="h-12 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="dg" x1="0" x2="1">
            <stop offset="0%" stopColor="oklch(0.85 0.16 200)" stopOpacity="0" />
            <stop offset="50%" stopColor="oklch(0.70 0.21 255)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="oklch(0.68 0.24 295)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 40 Q 300 10 600 40 T 1200 40"
          fill="none"
          stroke="url(#dg)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
