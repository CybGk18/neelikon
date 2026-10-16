import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function AboutOurStory() {
  return (
    <section
      id="story"
      aria-label="Who We Are — A Mumbai manufacturer with a global outlook"
      className="relative w-full overflow-hidden bg-[#FAF7F2] py-12 sm:py-16 lg:py-20 text-[#0F1E36]"
    >
      <div className="container-x mx-auto max-w-[84rem]">
        {/* Main Panoramic Card matching mockup layout */}
        <div className="relative w-full overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#FFF5EC] border border-[#EFE7DC] shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
          {/* ========================================================================= */}
          {/* BACKGROUND ARTWORK: Organic Waves, Dot Matrices & Connecting Ribbon       */}
          {/* ========================================================================= */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none overflow-hidden"
          >
            {/* Top-Left Soft Peach Atmospheric Wave */}
            <svg
              viewBox="0 0 1200 420"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full"
              fill="none"
            >
              <defs>
                <linearGradient id="wavePeachGrad" x1="0%" y1="0%" x2="100%" y2="80%">
                  <stop offset="0%" stopColor="#FDEEE0" stopOpacity="0.85" />
                  <stop offset="45%" stopColor="#FFF2E5" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#FFFDF9" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="bottomWaveGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.55" />
                  <stop offset="50%" stopColor="#FEEFE3" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FFFDF9" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Upper flowing wave contour */}
              <path
                d="M 0 0 L 450 0 C 380 90, 240 140, 100 160 C 40 168, 0 175, 0 175 Z"
                fill="url(#wavePeachGrad)"
              />

              {/* Bottom organic swooping wave */}
              <path
                d="M 0 420 L 1200 420 L 1200 310 C 1050 330, 900 370, 750 380 C 520 395, 300 385, 0 420 Z"
                fill="url(#bottomWaveGrad)"
              />

              {/* Dynamic Connecting Orange Wave Ribbon Path */}
              <path
                d="M 60 320 Q 150 290, 220 282 T 400 320 T 680 340 T 920 250 T 1040 220"
                stroke="#E05322"
                strokeWidth="1.5"
                strokeOpacity="0.85"
                strokeLinecap="round"
              />

              {/* Connecting Wave Node Dot 1 (near bottom left) */}
              <circle cx="220" cy="282" r="6" fill="#E05322" />
              <circle cx="220" cy="282" r="13" fill="#E05322" fillOpacity="0.18" />

              {/* Connecting Wave Node Dot 2 (leading to plant porthole on right) */}
              <circle cx="920" cy="250" r="7.5" fill="#E05322" />
              <circle cx="920" cy="250" r="15" fill="#E05322" fillOpacity="0.22" />
            </svg>

            {/* Left Dot Matrix Accent (under eyebrow) */}
            <div className="absolute left-6 sm:left-10 lg:left-14 top-24 sm:top-28 grid grid-cols-4 gap-2 opacity-55">
              {Array.from({ length: 12 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-[#CBD5E1]" />
              ))}
            </div>

            {/* Bottom-Center Dot Matrix Accent (under description) */}
            <div className="absolute left-[44%] sm:left-[48%] bottom-6 sm:bottom-8 hidden sm:grid grid-cols-6 gap-2 opacity-50">
              {Array.from({ length: 18 }).map((_, i) => (
                <span key={i} className="h-1 w-1 rounded-full bg-[#E2E8F0]" />
              ))}
            </div>

            {/* Top-Right Background World Map with Global Flight Paths */}
            <div className="hidden lg:block absolute right-[18%] xl:right-[19%] top-2 w-64 xl:w-76 pointer-events-none select-none opacity-85">
              <img
                src="/images/about/about-story-map.png"
                alt=""
                aria-hidden="true"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>

            {/* Bottom-Left Amber Vials Porthole */}
            <div className="absolute -left-2 sm:left-0 bottom-0 w-20 sm:w-28 lg:w-36 xl:w-40 pointer-events-none select-none overflow-hidden">
              <img
                src="/images/about/about-story-vials-clean.png"
                alt="Glass colourant laboratory bottles"
                className="w-full h-auto object-contain object-bottom-left drop-shadow-sm"
                loading="lazy"
              />
            </div>

            {/* Right Manufacturing Plant Organic Porthole */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[22%] xl:w-[20%] pointer-events-none select-none overflow-hidden">
              <img
                src="/images/about/about-story-plant.png"
                alt="Neelikon chemical processing and manufacturing plant facility"
                className="h-full w-full object-cover object-left"
                loading="lazy"
              />
            </div>
          </div>

          {/* ========================================================================= */}
          {/* FOREGROUND EDITORIAL CONTENT (3-Column Layout matching mockup)             */}
          {/* ========================================================================= */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 xl:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 xl:gap-8 items-center">
              {/* ------------------------------------------------------------------- */}
              {/* LEFT COLUMN: Eyebrow + Signature Serif Headline                     */}
              {/* ------------------------------------------------------------------- */}
              <div className="lg:col-span-5 xl:col-span-4 pl-4 sm:pl-8 lg:pl-6">
                <Reveal>
                  {/* Eyebrow */}
                  <div className="flex items-center gap-2.5">
                    <span className="h-[1.5px] w-5 bg-[#64748B]/70" />
                    <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#64748B]">
                      WHO WE ARE
                    </p>
                  </div>

                  {/* Main Display Headline */}
                  <h2 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.85rem] font-bold text-[#0F1E36] leading-[1.12] tracking-tight">
                    A Mumbai<br />
                    manufacturer<br />
                    with a{" "}
                    <span className="text-[#E05322] font-semibold">
                      global
                    </span><br />
                    outlook.
                  </h2>
                </Reveal>
              </div>

              {/* ------------------------------------------------------------------- */}
              {/* CENTER COLUMN: Editorial Description & "Our Story" CTA Link         */}
              {/* ------------------------------------------------------------------- */}
              <div className="lg:col-span-4 xl:col-span-5 px-2 sm:px-4 lg:px-2">
                <Reveal delay={0.1}>
                  <p className="text-sm sm:text-[0.95rem] lg:text-[0.985rem] leading-[1.72] text-[#475569] font-normal">
                    Neelikon Food Dyes and Chemicals Limited was established in 1983 as a Mumbai-based
                    manufacturing and export business. Today, we specialise in dyes, pigments,
                    pharmaceutical, cosmetic and personal care ingredients, and speciality industrial
                    colourants — guided by a leadership focus on continuous R&D, quality improvement
                    and long-term customer relationships.
                  </p>

                  <div className="mt-5 sm:mt-6">
                    <a
                      href="#journey"
                      className="group inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#E05322] hover:text-[#C2410C] transition-colors"
                    >
                      <span>Our Story</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </Reveal>
              </div>

              {/* ------------------------------------------------------------------- */}
              {/* RIGHT COLUMN: 40+ Years of Excellence Stat Block                    */}
              {/* ------------------------------------------------------------------- */}
              <div className="lg:col-span-3 xl:col-span-3 flex items-center justify-start lg:justify-center pl-2 sm:pl-4 lg:pl-0">
                <Reveal delay={0.15}>
                  <div className="flex items-center gap-4 sm:gap-5">
                    {/* Vertical Orange Accent Line with Centered Circle Node */}
                    <div className="relative flex flex-col items-center justify-center h-20 sm:h-24 lg:h-28">
                      <div className="w-[2px] h-full bg-[#E05322]" />
                      <div className="absolute top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-[#E05322] ring-4 ring-[#E05322]/20 shadow-xs" />
                    </div>

                    {/* Stat Number & Stacked Label */}
                    <div>
                      <div className="font-serif text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold text-[#0F1E36] leading-none tracking-tight">
                        40+
                      </div>
                      <div className="mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#0F1E36] leading-tight">
                        YEARS OF<br />
                        EXCELLENCE
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
