import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, ShieldCheck, Sparkles, Globe } from "lucide-react";
import heroArt from "@/assets/hero-transparent.png";
import bgVideo from "@/assets/gemini_generated_video_e4306bb1.mp4";
import { Reveal } from "./Reveal";

export function HeroRedesign() {
  return (
    <section
      id="hero"
      aria-label="Colour is everywhere. Our expertise makes it extraordinary."
      className="relative min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] w-full overflow-hidden bg-[#FDFAF5] text-[#0F172A] pt-20 lg:pt-24 pb-4 lg:pb-6 flex flex-col justify-center"
    >
      {/* Background Ambience: Ambient looping liquid colour video & radiant glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        {/* Looping ambient liquid pigment plume video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-45 mix-blend-multiply"
        >
          <source src={bgVideo} type="video/mp4" />
        </video>

        {/* Luminous soft radial accents */}
        <div className="absolute -right-24 -top-24 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#60A5FA]/15 via-[#F59E0B]/10 to-transparent blur-3xl" />
        <div className="absolute -right-10 -bottom-20 h-[450px] w-[450px] rounded-full bg-gradient-to-tl from-[#EC4899]/12 via-[#8B5CF6]/10 to-transparent blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-[350px] w-[450px] rounded-full bg-[#F5EFE6]/60 blur-2xl" />

        {/* High-legibility warm overlay across left column */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFAF5] via-[#FDFAF5]/85 to-transparent" />

        {/* Soft edge blending for natural flow from header & to bottom section */}
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#FDFAF5] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FDFAF5] to-transparent" />
      </div>

      <div className="container-x relative z-10 w-full my-auto">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Main Typography, Copy, CTAs & 4-Stat Strip  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal>
              {/* Eyebrow Header */}
              <div className="flex items-center gap-3">
                <div className="flex items-center">
                  <span className="h-[2px] w-6 bg-[#243F90]" />
                  <span className="h-[1px] w-10 bg-[#CBD5E1]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
                  Colour Solutions for a Brighter World
                </span>
              </div>

              {/* Main Headline - Compact and punchy for 100% viewport fit */}
              <h1 className="mt-3 sm:mt-4 font-sans">
                <span className="block text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-extrabold tracking-[-0.035em] text-[#0F172A] leading-[1.06]">
                  Colour is everywhere.
                </span>
                <span className="mt-0.5 sm:mt-1 block font-serif text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.4rem] font-normal italic tracking-[-0.015em] text-[#243F90] leading-[1.08]">
                  Our expertise makes it extraordinary.
                </span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base leading-[1.6] text-[#475569]">
                With over 35 years of R&D, we are proud to present unbeatable quality and low impurity
                range of colourants that adhere to JECFA, USA, European, Japanese, and other global standards.
              </p>

              {/* Action Buttons */}
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="/products"
                  className="btn min-h-11 rounded-full bg-[#1E2B68] px-6 text-xs sm:text-sm font-bold text-white shadow-md shadow-[#1E2B68]/20 transition-all hover:bg-[#151F4E] hover:-translate-y-0.5 active:scale-95"
                >
                  Explore Our Products <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#film"
                  className="btn min-h-11 rounded-full border border-[#CBD5E1] bg-white/80 px-5 text-xs sm:text-sm font-semibold text-[#0F172A] shadow-xs backdrop-blur-xs transition-all hover:bg-white hover:border-[#94A3B8] hover:-translate-y-0.5 active:scale-95"
                >
                  Our Journey
                  <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full border border-[#0F172A] text-[8px] font-bold">
                    ▶
                  </span>
                </a>
              </div>

              {/* Bottom 4 Feature Stats Strip */}
              <div className="mt-6 lg:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-[#E8E2D9] pt-4 max-w-xl">
                {/* 1. 35+ Years of R&D */}
                <div className="flex items-start gap-2.5">
                  <div className="p-1 rounded-md bg-[#243F90]/5 text-[#243F90]">
                    <FlaskConical className="h-4 w-4 shrink-0" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-tight">35+</p>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-[#64748B]">Years of R&D</p>
                  </div>
                </div>

                {/* 2. Global Standards */}
                <div className="flex items-start gap-2.5 border-l border-[#E8E2D9] pl-3">
                  <div className="p-1 rounded-md bg-[#243F90]/5 text-[#243F90]">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-tight">Global</p>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-[#64748B]">Standards</p>
                  </div>
                </div>

                {/* 3. Wide Applications */}
                <div className="flex items-start gap-2.5 border-l border-[#E8E2D9] pl-3">
                  <div className="p-1 rounded-md bg-[#243F90]/5 text-[#243F90]">
                    <Sparkles className="h-4 w-4 shrink-0" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-tight">Wide</p>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-[#64748B]">Applications</p>
                  </div>
                </div>

                {/* 4. Trusted Worldwide */}
                <div className="flex items-start gap-2.5 border-l border-[#E8E2D9] pl-3">
                  <div className="p-1 rounded-md bg-[#243F90]/5 text-[#243F90]">
                    <Globe className="h-4 w-4 shrink-0" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-extrabold text-[#0F172A] leading-tight">Trusted</p>
                    <p className="text-[10px] sm:text-[11px] font-semibold text-[#64748B]">Worldwide</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 5-Chapter Planetary Wheel Artwork           */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex items-center justify-center">
            <Reveal delay={0.15}>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-[450px] lg:max-w-[480px] xl:max-w-[530px] aspect-[1312/1199] select-none mx-auto"
              >
                {/* The Master Visual Artwork Layer */}
                <img
                  src={heroArt}
                  alt="Neelikon 5 Core Chapters and One World One Quality Emblem"
                  width={1312}
                  height={1199}
                  className="h-full w-full object-contain pointer-events-none drop-shadow-[0_10px_30px_rgba(30,43,104,0.08)]"
                  loading="eager"
                />

                {/* ========================================================= */}
                {/* INTERACTIVE CHAPTER DISCS & EMBLEM HOTSPOTS               */}
                {/* ========================================================= */}

                {/* Center 3D Emblem: "ONE WORLD ONE QUALITY" */}
                <Link
                  to="/products/$slug"
                  params={{ slug: "one-world-one-quality" }}
                  aria-label="One World, One Quality Colours"
                  className="group/seal absolute left-[50%] top-[50.9%] z-30 h-[25%] w-[23%] -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-108 focus-visible:outline-2 focus-visible:outline-sky"
                  title="Click to explore One World, One Quality Colours"
                >
                  <span className="absolute inset-0 rounded-full bg-sky/0 ring-0 ring-sky/40 transition-all duration-300 group-hover/seal:bg-sky/15 group-hover/seal:ring-4 group-hover/seal:shadow-[0_0_30px_rgba(30,58,138,0.35)]" />
                  <span className="sr-only">One World, One Quality</span>
                </Link>

                {/* Node 1: "The World of Colour" (Top - Blue) */}
                <a
                  href="#film"
                  aria-label="Chapter 01 — The World of Colour"
                  className="group/n1 absolute left-[50%] top-[17.5%] z-30 h-[23.5%] w-[21.5%] -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-108 focus-visible:outline-2 focus-visible:outline-sky"
                  title="Chapter 01: The World of Colour — An extraordinary world begins with colour"
                >
                  <span className="absolute inset-0 rounded-full bg-sky/0 ring-0 ring-sky/50 transition-all duration-300 group-hover/n1:bg-sky/20 group-hover/n1:ring-4 group-hover/n1:shadow-[0_0_25px_rgba(2,132,199,0.4)]" />
                  <span className="sr-only">Chapter 01 — The World of Colour</span>
                </a>

                {/* Node 2: "Precision in Every Particle" (Right-Top - Magenta) */}
                <a
                  href="#innovation"
                  aria-label="Chapter 02 — Precision in Every Particle"
                  className="group/n2 absolute left-[76.2%] top-[39.6%] z-30 h-[23.5%] w-[21.5%] -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-108 focus-visible:outline-2 focus-visible:outline-sky"
                  title="Chapter 02: Precision in Every Particle — Analytical testing behind every batch"
                >
                  <span className="absolute inset-0 rounded-full bg-pink-500/0 ring-0 ring-pink-500/50 transition-all duration-300 group-hover/n2:bg-pink-500/20 group-hover/n2:ring-4 group-hover/n2:shadow-[0_0_25px_rgba(236,72,153,0.4)]" />
                  <span className="sr-only">Chapter 02 — Precision in Every Particle</span>
                </a>

                {/* Node 3: "Engineered for Industry" (Bottom-Right - Purple) */}
                <a
                  href="#industries"
                  aria-label="Chapter 03 — Engineered for Industry"
                  className="group/n3 absolute left-[66.2%] top-[76.3%] z-30 h-[23.5%] w-[21.5%] -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-108 focus-visible:outline-2 focus-visible:outline-sky"
                  title="Chapter 03: Engineered for Industry — Designed for real-world demands"
                >
                  <span className="absolute inset-0 rounded-full bg-purple-500/0 ring-0 ring-purple-500/50 transition-all duration-300 group-hover/n3:bg-purple-500/20 group-hover/n3:ring-4 group-hover/n3:shadow-[0_0_25px_rgba(168,85,247,0.4)]" />
                  <span className="sr-only">Chapter 03 — Engineered for Industry</span>
                </a>

                {/* Node 4: "Quality Without Borders" (Bottom-Left - Green) */}
                <a
                  href="#quality"
                  aria-label="Chapter 04 — Quality Without Borders"
                  className="group/n4 absolute left-[33.8%] top-[76.3%] z-30 h-[23.5%] w-[21.5%] -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-108 focus-visible:outline-2 focus-visible:outline-sky"
                  title="Chapter 04: Quality Without Borders — Meeting international standards"
                >
                  <span className="absolute inset-0 rounded-full bg-emerald-500/0 ring-0 ring-emerald-500/50 transition-all duration-300 group-hover/n4:bg-emerald-500/20 group-hover/n4:ring-4 group-hover/n4:shadow-[0_0_25px_rgba(16,185,129,0.4)]" />
                  <span className="sr-only">Chapter 04 — Quality Without Borders</span>
                </a>

                {/* Node 5: "A Legacy of Expertise" (Left - Amber) */}
                <Link
                  to="/about"
                  aria-label="Chapter 05 — A Legacy of Expertise"
                  className="group/n5 absolute left-[23.8%] top-[39.6%] z-30 h-[23.5%] w-[21.5%] -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-108 focus-visible:outline-2 focus-visible:outline-sky"
                  title="Chapter 05: A Legacy of Expertise — Since 1983, serving 100+ countries"
                >
                  <span className="absolute inset-0 rounded-full bg-amber-500/0 ring-0 ring-amber-500/50 transition-all duration-300 group-hover/n5:bg-amber-500/20 group-hover/n5:ring-4 group-hover/n5:shadow-[0_0_25px_rgba(245,158,11,0.4)]" />
                  <span className="sr-only">Chapter 05 — A Legacy of Expertise</span>
                </Link>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Subtle bottom transition to next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[#FAF7F2]"
      />
    </section>
  );
}
