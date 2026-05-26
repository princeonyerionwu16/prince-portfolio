import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-transparent">
      <div
        className="h-full origin-left transition-[width] duration-75"
        style={{
          width: `${p}%`,
          background:
            "linear-gradient(90deg, var(--neon-cyan), var(--neon-blue), var(--neon-purple))",
          boxShadow: "0 0 12px var(--neon-blue)",
        }}
      />
    </div>
  );
}
