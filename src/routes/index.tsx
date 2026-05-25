import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MouseLight } from "@/components/MouseLight";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { BentoAbout } from "@/components/BentoAbout";
import { TechMarquee } from "@/components/TechMarquee";
import { Projects } from "@/components/Projects";
import { CodeShowcase } from "@/components/CodeShowcase";
import { Terminal } from "@/components/Terminal";
import { GitHubHeatmap } from "@/components/GitHubHeatmap";
import { LiveWidgets } from "@/components/LiveWidgets";
import { Testimonials } from "@/components/Testimonials";
import { Writing } from "@/components/Writing";
import { Contact, Footer } from "@/components/Contact";
import { CommandPalette } from "@/components/CommandPalette";
import { SvgDivider } from "@/components/SvgDivider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Onyerionwu Prince — Web Developer & IT Student" },
      {
        name: "description",
        content:
          "Portfolio of Onyerionwu Prince — Nigerian web developer crafting fast, beautiful, and challenging products with React, TypeScript, and modern tooling.",
      },
      { property: "og:title", content: "Onyerionwu Prince — Web Developer" },
      { property: "og:description", content: "Cinematic portfolio of a Nigerian full-stack developer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPaletteOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <MouseLight />
      <ScrollProgress />
      <Nav onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />

      <main className="relative z-10">
        <Hero />
        <SvgDivider />
        <BentoAbout />
        <TechMarquee />
        <Projects />
        <CodeShowcase />
        <Terminal />
        <GitHubHeatmap />
        <LiveWidgets />
        <Testimonials />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
