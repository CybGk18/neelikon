import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, FlaskConical, Settings, Users, Sparkles } from "lucide-react";
import chapterArt from "@/assets/chapter-01-world-of-colour.jpg";
import smokeCloud from "@/assets/chapter-smoke.png";
import powderWave from "@/assets/chapter-powders.png";
import beakerPorthole from "@/assets/chapter-beaker.png";
import { Reveal } from "./Reveal";

export function ColourEverywhere() {
  return (
    <section
      id="world-of-colour"
      aria-label="Chapter 01 — The World of Colour"
      className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#0F172A] py-8 sm:py-12 lg:py-16"
    >
      {/* Background Ambience: Subtle radiant glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div className="absolute -right-32 top-10 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#F59E0B]/10 via-[#EF4444]/8 to-transparent blur-3xl" />
        <div className="absolute left-10 -bottom-20 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-[#3B82F6]/10 via-[#10B981]/8 to-transparent blur-3xl" />
      </div>

      {/* ========================================================= */}
      {/* 1. DESKTOP / TABLET: 100% Pixel-Accurate Reference Design */}
      {/* ========================================================= */}
      <div className="hidden md:block relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative w-full aspect-[1024/682] select-none mx-auto">
            {/* The Master Visual Artwork Layer */}
            <img
              src={chapterArt}
              alt="Chapter 01 — The World of Colour. An extraordinary world begins with colour."
              width={1024}
              height={682}
              className="h-full w-full object-contain pointer-events-none"
              loading="lazy"
            />

            {/* Accessible screen-reader text for SEO & assistive tech */}
            <div className="sr-only">
              <h2>Chapter 01 — The World of Colour</h2>
              <p>An extraordinary world begins with colour.</p>
              <p>Every colour has a story. Every particle has a purpose.</p>
              <p>
                From nature's inspiration to advanced formulation, we create colour solutions that bring ideas to life across industries — with consistency, performance and care.
              </p>
              <ul>
                <li>Inspired by Nature</li>
                <li>Driven by Science</li>
                <li>Engineered for Performance</li>
                <li>Created for a Brighter Tomorrow</li>
              </ul>
              <h3>Our Belief</h3>
              <p>Colour is more than what you see — it's what moves the world.</p>
              <p>
                We combine deep expertise, global reach and a passion for innovation to deliver colour solutions that elevate products and enrich everyday lives.
              </p>
            </div>

            {/* ========================================================= */}
            {/* INTERACTIVE HOTSPOTS & HOVER STATES                       */}
            {/* ========================================================= */}

            {/* Primary Action Button: "Explore Our World →" */}
            <Link
              to="/products"
              aria-label="Explore Our World"
              className="group/btn absolute left-[5.6%] top-[81.5%] z-20 h-[7.8%] w-[15.5%] rounded-full cursor-pointer focus-visible:outline-2 focus-visible:outline-[#243F90]"
              title="Explore Our World"
            >
              <span className="absolute inset-0 rounded-full bg-white/0 ring-0 ring-white/40 transition-all duration-300 group-hover/btn:bg-white/10 group-hover/btn:ring-2 group-hover/btn:shadow-[0_0_20px_rgba(14,27,56,0.3)]" />
            </Link>

            {/* Milestone 1: "INSPIRED BY NATURE" */}
            <a
              href="#science"
              aria-label="Inspired by Nature"
              className="group/m1 absolute left-[51.8%] top-[15.5%] z-20 h-[8%] w-[14%] rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-sky"
              title="Inspired by Nature — Sourcing pure natural and nature-identical pigments"
            >
              <span className="absolute inset-0 rounded-full bg-amber-500/0 ring-0 ring-amber-400/0 transition-all duration-300 group-hover/m1:bg-amber-400/10 group-hover/m1:ring-2 group-hover/m1:ring-amber-400/40" />
            </a>

            {/* Milestone 2: "DRIVEN BY SCIENCE" */}
            <a
              href="#science"
              aria-label="Driven by Science"
              className="group/m2 absolute left-[47.2%] top-[35.5%] z-20 h-[8%] w-[14%] rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-sky"
              title="Driven by Science — State-of-the-art analytical testing and purity verification"
            >
              <span className="absolute inset-0 rounded-full bg-sky-500/0 ring-0 ring-sky-400/0 transition-all duration-300 group-hover/m2:bg-sky-400/10 group-hover/m2:ring-2 group-hover/m2:ring-sky-400/40" />
            </a>

            {/* Milestone 3: "ENGINEERED FOR PERFORMANCE" */}
            <a
              href="#industries"
              aria-label="Engineered for Performance"
              className="group/m3 absolute left-[47.2%] top-[58.8%] z-20 h-[8%] w-[16%] rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-sky"
              title="Engineered for Performance — Superior dispersion, heat stability, and lightfastness"
            >
              <span className="absolute inset-0 rounded-full bg-orange-500/0 ring-0 ring-orange-400/0 transition-all duration-300 group-hover/m3:bg-orange-400/10 group-hover/m3:ring-2 group-hover/m3:ring-orange-400/40" />
            </a>

            {/* Milestone 4: "CREATED FOR A BRIGHTER TOMORROW" */}
            <a
              href="#quality"
              aria-label="Created for a Brighter Tomorrow"
              className="group/m4 absolute left-[52.2%] top-[78.8%] z-20 h-[8.5%] w-[16%] rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-sky"
              title="Created for a Brighter Tomorrow — Sustainable, safe, and globally compliant colour solutions"
            >
              <span className="absolute inset-0 rounded-full bg-emerald-500/0 ring-0 ring-emerald-400/0 transition-all duration-300 group-hover/m4:bg-emerald-400/10 group-hover/m4:ring-2 group-hover/m4:ring-emerald-400/40" />
            </a>

            {/* Dissolution Beaker Porthole (Bottom Right) */}
            <Link
              to="/products/$slug"
              params={{ slug: "one-world-one-quality" }}
              aria-label="Dissolution & Application Purity"
              className="group/beaker absolute left-[88.4%] top-[56.0%] z-20 h-[26%] w-[17%] -translate-x-1/2 -translate-y-1/2 rounded-full cursor-pointer transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-sky"
              title="Explore High Purity Dissolution & Colours"
            >
              <span className="absolute inset-0 rounded-full bg-amber-500/0 ring-0 ring-amber-400/0 transition-all duration-300 group-hover/beaker:bg-amber-400/10 group-hover/beaker:ring-2 group-hover/beaker:ring-amber-400/40 group-hover/beaker:shadow-[0_0_25px_rgba(217,119,6,0.25)]" />
            </Link>
          </div>
        </Reveal>
      </div>

      {/* ========================================================= */}
      {/* 2. MOBILE RESPONSIVE LAYOUT (< md screens)               */}
      {/* ========================================================= */}
      <div className="block md:hidden container-x relative z-10 w-full space-y-10">
        {/* Top Story: Chapter 01 */}
        <Reveal>
          <div>
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#D97706]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
                Chapter 01 — The World of Colour
              </span>
            </div>

            <h2 className="mt-3 font-serif text-3xl font-normal leading-[1.08] text-[#0F172A]">
              An extraordinary{" "}
              <span className="italic bg-gradient-to-r from-[#D97706] via-[#EA580C] to-[#BE123C] bg-clip-text text-transparent">
                world begins with colour.
              </span>
            </h2>

            <p className="mt-3 font-serif text-base text-[#0F172A]">
              <span>Every colour has a story. </span>
              <span className="italic text-[#243F90]">Every particle has a purpose.</span>
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[#475569]">
              From nature's inspiration to advanced formulation, we create colour solutions that bring ideas to life across industries — with consistency, performance and care.
            </p>

            <div className="mt-5">
              <Link
                to="/products"
                className="btn min-h-11 rounded-full bg-[#0E1B38] px-6 text-xs font-bold text-white shadow-md inline-flex items-center gap-2"
              >
                Explore Our World <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Milestone Cards for Mobile */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-[#E8E2D9]">
            <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
              <Leaf className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#0F172A] uppercase leading-tight">Inspired</p>
              <p className="text-[9px] text-[#64748B] uppercase">By Nature</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-[#E8E2D9]">
            <div className="p-2 rounded-lg bg-sky-50 text-sky-700">
              <FlaskConical className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#0F172A] uppercase leading-tight">Driven</p>
              <p className="text-[9px] text-[#64748B] uppercase">By Science</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-[#E8E2D9]">
            <div className="p-2 rounded-lg bg-orange-50 text-orange-700">
              <Settings className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#0F172A] uppercase leading-tight">Engineered</p>
              <p className="text-[9px] text-[#64748B] uppercase">For Performance</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-[#E8E2D9]">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-[#0F172A] uppercase leading-tight">Created</p>
              <p className="text-[9px] text-[#64748B] uppercase">For Tomorrow</p>
            </div>
          </div>
        </div>

        {/* Visual Highlights: Smoke & Powders */}
        <div className="grid grid-cols-2 gap-3">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#E8E2D9] shadow-xs">
            <img
              src={smokeCloud}
              alt="Vibrant pigment cloud explosion"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-[#E8E2D9] shadow-xs">
            <img
              src={powderWave}
              alt="Pure color pigment mounds"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Bottom Story: Our Belief */}
        <Reveal>
          <div className="p-5 rounded-2xl bg-white/80 border border-[#E8E2D9] shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#D97706]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748B]">
                Our Belief
              </span>
            </div>

            <h3 className="font-serif text-2xl leading-tight text-[#0F172A]">
              Colour is more than what you see —{" "}
              <span className="italic text-[#D97706]">it's what moves the world.</span>
            </h3>

            <p className="text-xs leading-relaxed text-[#475569]">
              We combine deep expertise, global reach and a passion for innovation to deliver colour solutions that elevate products and enrich everyday lives.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Subtle bottom transition to next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-b from-transparent to-[#FAF7F2]"
      />
    </section>
  );
}
