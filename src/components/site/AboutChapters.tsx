import {
  FlaskConical,
  Globe2,
  Factory,
  Leaf,
  HeartHandshake,
  FileCheck2,
  ShieldCheck,
  Sparkles,
  Award,
  Layers,
  Recycle,
  GraduationCap,
  Heart,
  Droplets,
  Users,
} from "lucide-react";
import { Reveal } from "./Reveal";

export function AboutChapters() {
  return (
    <section
      id="capabilities"
      aria-label="Our Core Pillars — Capabilities & Operational Excellence"
      className="relative w-full overflow-hidden bg-white text-[#0F172A] py-14 sm:py-18 lg:py-24"
    >
      {/* ========================================================= */}
      {/* 1. SECTION HEADING (Aligned to max-w-7xl content grid)    */}
      {/* ========================================================= */}
      <div className="container-x mx-auto max-w-7xl mb-10 sm:mb-12 lg:mb-16">
        <Reveal>
          <div className="flex items-center gap-2.5">
            <span className="h-[2px] w-6 bg-[#E05322] rounded-full" />
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#64748B]">
              Excellence in Action
            </span>
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#0F1E36] tracking-tight">
            Our Core Pillars
          </h2>
        </Reveal>
      </div>

      <div className="container-x mx-auto max-w-7xl space-y-12 sm:space-y-16 lg:space-y-20">
        {/* ========================================================================= */}
        {/* PILLAR 01: RESEARCH & TESTING                                             */}
        {/* Card Layout: Text on LEFT, Lab Photo with Wave on RIGHT                   */}
        {/* ========================================================================= */}
        <div className="relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#FFFDF9] border border-[#EFE7DC] shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          {/* Ambient Warm Corner Tint in Card */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br from-[#FED7AA]/25 via-[#FFEDD5]/15 to-transparent blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
            {/* Left Content Column */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between relative z-10">
              <div>
                <div className="relative pl-5 sm:pl-6 pt-1">
                  <div className="absolute left-0 top-0 bottom-4 w-[1.5px] bg-[#E05322]/80" />

                  <div className="flex items-center gap-3">
                    <span className="absolute left-0 top-0 w-3.5 h-[1.5px] bg-[#E05322]/80" />
                    <span className="font-mono text-sm sm:text-[15px] font-bold text-[#E05322] tracking-wider">
                      01
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#334155]">
                      RESEARCH & TESTING
                    </span>
                    <div className="flex items-center w-8 sm:w-12 h-[1.5px] bg-[#E05322]/80 relative">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-[1.5px] border-r-[1.5px] border-[#E05322] rotate-45" />
                    </div>
                  </div>

                  <h3 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#0F1E36] leading-[1.12] tracking-tight">
                    Analytical rigour <br />
                    at the <span className="text-[#E05322]">core.</span>
                  </h3>

                  <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[1.02rem] leading-relaxed text-[#475569] max-w-xl font-normal">
                    Continuous R&D and in-house testing — including HPLC, ion chromatography, gas
                    chromatography and ICP-OES — support quality improvement across our ranges.
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 pt-6 border-t border-[#F1E8DC]/80">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 items-center">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <Layers className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Advanced Instrumentation
                    </span>
                  </div>

                  <div className="flex items-start sm:items-center gap-3 sm:border-l sm:border-[#E2E8F0] sm:pl-4 lg:pl-5">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <FileCheck2 className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Stringent Quality Checks
                    </span>
                  </div>

                  <div className="flex items-start sm:items-center gap-3 sm:border-l sm:border-[#E2E8F0] sm:pl-4 lg:pl-5">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <ShieldCheck className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Continuous Innovation
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden bg-slate-100">
              <img
                src="/images/about/research-testing.jpg"
                alt="Analytical chemistry testing with precision pipette"
                className="h-full w-full object-cover object-center lg:object-[left_center]"
                loading="lazy"
              />

              <div className="hidden lg:block pointer-events-none absolute inset-y-0 -left-[1px] w-48 xl:w-56 select-none z-10">
                <svg viewBox="0 0 200 500" preserveAspectRatio="none" className="h-full w-full" fill="none">
                  <path d="M 0 0 L 140 0 C 100 80, 20 180, 25 270 C 30 350, 90 420, 180 500 L 0 500 Z" fill="#FFFDF9" />
                  <path d="M 140 0 C 100 80, 20 180, 25 270 C 30 350, 90 420, 180 500" stroke="#E05322" strokeWidth="2" />
                  <g opacity="0.32" fill="#E05322">
                    {[0, 14, 28].map((x) =>
                      [190, 206, 222, 238, 254].map((y) => (
                        <circle key={`${x}-${y}`} cx={x + 10} cy={y} r="1.3" />
                      ))
                    )}
                  </g>
                </svg>
              </div>

              <div className="hidden lg:flex absolute top-[54%] left-6 xl:left-8 -translate-y-1/2 z-20 items-center justify-center">
                <div className="relative group">
                  <span className="absolute -inset-2 rounded-full border border-[#E05322]/40 animate-pulse pointer-events-none" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#EA580C] to-[#C2410C] border-2 border-white shadow-[0_8px_25px_rgba(234,88,12,0.35)] transition-transform duration-300 hover:scale-110">
                    <FlaskConical className="h-6 w-6 text-white stroke-[2.2]" />
                  </div>
                  <div className="absolute -left-6 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <span className="h-2 w-2 rounded-full bg-[#E05322]" />
                  </div>
                </div>
              </div>

              <div className="block lg:hidden pointer-events-none absolute inset-x-0 top-0 h-12 select-none z-10">
                <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="h-full w-full" fill="none">
                  <path d="M 0 0 L 500 0 L 500 20 Q 250 50, 0 20 Z" fill="#FFFDF9" />
                  <path d="M 0 20 Q 250 50, 500 20" stroke="#E05322" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 02: DISTRIBUTION NETWORK                                           */}
        {/* 1:1 Precise Implementation of User's Mockup:                              */}
        {/* - Left: Port Sunset (about2.png) with Organic Wave Cut                     */}
        {/* - Overlapping: Large Circular Warehouse (about21.png) with White Border   */}
        {/* - Badge: Orange Globe Badge connected via curved wire to caliper bracket  */}
        {/* - Center Background: Light Dotted World Map Watermark                     */}
        {/* - Top-Right Background: Faint Amber Concentric Radial Arc Lines           */}
        {/* - Bottom: Soft Peach Ribbon Wave                                          */}
        {/* - Right: Caliper, "International relationships.", description & 3 stats    */}
        {/* ========================================================================= */}
        <div className="relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#FAF5EE] border border-[#ECE1D2] shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          {/* Top-Right Faint Amber Radar / Concentric Wave Arcs */}
          <div className="pointer-events-none absolute top-0 right-0 w-80 lg:w-[420px] h-[360px] select-none opacity-40">
            <svg viewBox="0 0 400 350" className="w-full h-full" fill="none">
              <circle cx="420" cy="-30" r="220" stroke="#FDBA74" strokeWidth="0.8" strokeDasharray="4 6" />
              <circle cx="420" cy="-30" r="280" stroke="#FDBA74" strokeWidth="0.8" />
              <circle cx="420" cy="-30" r="340" stroke="#FDBA74" strokeWidth="0.8" strokeDasharray="3 5" />
              <circle cx="420" cy="-30" r="400" stroke="#FDBA74" strokeWidth="0.6" />
            </svg>
          </div>

          {/* Dotted World Map Watermark in Center Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 select-none overflow-hidden opacity-[0.24] flex items-center justify-center lg:justify-end lg:pr-32"
          >
            <svg
              viewBox="0 0 900 450"
              className="w-full max-w-4xl h-auto"
              fill="none"
            >
              {/* Dot Matrix World Map Representation */}
              <g fill="#94A3B8" opacity="0.65">
                {/* North America */}
                {[
                  [180, 70], [195, 70], [210, 68], [225, 72], [240, 75],
                  [170, 85], [185, 85], [200, 83], [215, 84], [230, 86], [245, 88], [260, 85],
                  [165, 100], [180, 100], [195, 98], [210, 99], [225, 102], [240, 103], [255, 100], [270, 95],
                  [175, 115], [190, 115], [205, 114], [220, 116], [235, 118], [250, 115],
                  [190, 130], [205, 130], [220, 132], [235, 132],
                  [210, 145], [225, 148], [240, 150],
                  [220, 160], [230, 165],
                ].map(([x, y], idx) => (
                  <circle key={`na-${idx}`} cx={x} cy={y} r="2.2" />
                ))}

                {/* South America */}
                {[
                  [250, 185], [265, 185], [280, 190],
                  [245, 200], [260, 200], [275, 202], [290, 205],
                  [255, 215], [270, 215], [285, 218], [300, 220],
                  [260, 230], [275, 230], [290, 232],
                  [265, 245], [280, 245],
                  [270, 260], [285, 260],
                  [275, 275],
                ].map(([x, y], idx) => (
                  <circle key={`sa-${idx}`} cx={x} cy={y} r="2.2" />
                ))}

                {/* Europe */}
                {[
                  [420, 65], [435, 65], [450, 68], [465, 68],
                  [410, 80], [425, 80], [440, 82], [455, 82], [470, 84], [485, 84],
                  [405, 95], [420, 95], [435, 97], [450, 97], [465, 98], [480, 98],
                  [415, 110], [430, 110], [445, 112], [460, 112],
                ].map(([x, y], idx) => (
                  <circle key={`eu-${idx}`} cx={x} cy={y} r="2.2" />
                ))}

                {/* Africa */}
                {[
                  [410, 135], [425, 135], [440, 135], [455, 137], [470, 138],
                  [415, 150], [430, 150], [445, 152], [460, 153], [475, 154], [490, 154],
                  [420, 165], [435, 165], [450, 167], [465, 168], [480, 168],
                  [430, 180], [445, 180], [460, 182], [475, 182],
                  [435, 195], [450, 195], [465, 197],
                  [440, 210], [455, 210],
                  [445, 225],
                ].map(([x, y], idx) => (
                  <circle key={`af-${idx}`} cx={x} cy={y} r="2.2" />
                ))}

                {/* Asia */}
                {[
                  [500, 65], [515, 65], [530, 68], [545, 68], [560, 70], [575, 70], [590, 72], [605, 72],
                  [495, 80], [510, 80], [525, 82], [540, 82], [555, 84], [570, 84], [585, 85], [600, 85], [615, 87], [630, 87],
                  [490, 95], [505, 95], [520, 97], [535, 97], [550, 98], [565, 98], [580, 100], [595, 100], [610, 102], [625, 102], [640, 104],
                  [500, 110], [515, 110], [530, 112], [545, 112], [560, 114], [575, 114], [590, 115], [605, 115], [620, 117], [635, 117],
                  [525, 125], [540, 125], [555, 127], [570, 127], [585, 128], [600, 128], [615, 130],
                  [535, 140], [550, 140], [565, 142], [580, 142], [595, 144],
                  [550, 155], [565, 155], [580, 157],
                ].map(([x, y], idx) => (
                  <circle key={`as-${idx}`} cx={x} cy={y} r="2.2" />
                ))}

                {/* Australia */}
                {[
                  [630, 205], [645, 205], [660, 208], [675, 208],
                  [620, 220], [635, 220], [650, 222], [665, 222], [680, 224],
                  [625, 235], [640, 235], [655, 237], [670, 237],
                  [635, 250], [650, 250], [665, 252],
                ].map(([x, y], idx) => (
                  <circle key={`au-${idx}`} cx={x} cy={y} r="2.2" />
                ))}
              </g>
            </svg>
          </div>

          {/* Bottom Soft Peach Fluid Wave Ribbon */}
          <div className="pointer-events-none absolute -bottom-6 left-0 right-0 h-28 select-none opacity-60">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full" fill="none">
              <path
                d="M 160 120 C 320 50, 520 60, 800 120 Z"
                fill="url(#peachRibbon)"
              />
              <defs>
                <linearGradient id="peachRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FED7AA" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#FED7AA" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#FFF7ED" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Main 2-Column Content Flow */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] lg:min-h-[520px]">
            {/* ----------------------------------------------------------------- */}
            {/* LEFT VISUAL: Port Sunset + Circular Warehouse + Globe Badge       */}
            {/* ----------------------------------------------------------------- */}
            <div className="lg:col-span-5 relative min-h-[360px] sm:min-h-[420px] lg:min-h-full overflow-hidden bg-slate-950 order-2 lg:order-1">
              {/* Port Sunset Photograph (about2.png) */}
              <img
                src="/images/about/about2.png"
                alt="International container shipping port terminal with gantry cranes at sunset"
                className="h-full w-full object-cover object-[center_60%]"
                loading="lazy"
              />

              {/* Top Organic Arched Wave (Creates organic header curve over the port sky) */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-20 lg:h-24 select-none z-10">
                <svg viewBox="0 0 500 90" preserveAspectRatio="none" className="h-full w-full" fill="none">
                  <path d="M 0 0 L 500 0 L 500 10 C 320 85, 120 40, 0 65 Z" fill="#FAF5EE" />
                </svg>
              </div>

              {/* Desktop Organic S-Curve Seam on the RIGHT edge of the port image */}
              <div className="hidden lg:block pointer-events-none absolute inset-y-0 -right-[1px] w-48 xl:w-56 select-none z-10">
                <svg viewBox="0 0 200 500" preserveAspectRatio="none" className="h-full w-full" fill="none">
                  <path
                    d="M 60 0 C 110 80, 185 180, 180 270 C 175 350, 105 420, 20 500 L 200 500 L 200 0 Z"
                    fill="#FAF5EE"
                  />
                  <path
                    d="M 60 0 C 110 80, 185 180, 180 270 C 175 350, 105 420, 20 500"
                    stroke="#E05322"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* Overlapping Circular Warehouse Cutout (about21.png) */}
              <div className="absolute right-4 sm:right-6 lg:-right-16 xl:-right-20 bottom-4 sm:bottom-6 lg:bottom-8 z-20">
                <div className="relative group">
                  {/* Outer Concentric Accent Ring */}
                  <div className="absolute -inset-2.5 rounded-full border border-[#E05322]/35 pointer-events-none" />

                  {/* Circular Warehouse Cutout */}
                  <div className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden border-[4px] sm:border-[5px] border-white shadow-[0_16px_45px_rgba(15,23,42,0.22)] bg-slate-950 transition-transform duration-700 group-hover:scale-105">
                    <img
                      src="/images/about/about21.png"
                      alt="Modern high-bay warehouse storage with automated forklift"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Orange Globe Badge on Curve Seam */}
              <div className="hidden lg:flex absolute -right-6 lg:-right-7 top-[30%] sm:top-[33%] z-30 items-center justify-center">
                <div className="relative group">
                  <span className="absolute -inset-2 rounded-full border border-[#E05322]/40 animate-pulse pointer-events-none" />
                  <div className="relative flex h-13 w-13 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#EA580C] to-[#C2410C] border-2 border-white shadow-[0_8px_25px_rgba(234,88,12,0.35)] transition-transform duration-300 hover:scale-110">
                    <Globe2 className="h-6 w-6 text-white stroke-[2.2]" />
                  </div>
                </div>
              </div>
            </div>

            {/* ----------------------------------------------------------------- */}
            {/* RIGHT CONTENT: Caliper, Headline, Paragraph & 3 Metrics           */}
            {/* ----------------------------------------------------------------- */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 xl:p-14 lg:pl-24 xl:pl-28 flex flex-col justify-between relative z-10 order-1 lg:order-2">
              {/* Desktop Curved Wire linking Globe Badge to Caliper Bracket */}
              <div className="hidden lg:block pointer-events-none absolute -left-7 top-[34%] w-32 h-16 select-none z-20">
                <svg viewBox="0 0 120 60" className="w-full h-full" fill="none">
                  <path
                    d="M 5 28 C 45 28, 70 8, 115 8"
                    stroke="#E05322"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Upper Narrative Area */}
              <div>
                <div className="relative pl-5 sm:pl-6 pt-1">
                  {/* Orange Caliper Left Vertical Rule */}
                  <div className="absolute left-0 top-0 bottom-4 w-[1.5px] bg-[#E05322]/80" />

                  {/* Top Branch with 02, Category & Arrow */}
                  <div className="flex items-center gap-3">
                    <span className="absolute left-0 top-0 w-3.5 h-[1.5px] bg-[#E05322]/80" />
                    <span className="font-mono text-sm sm:text-[15px] font-bold text-[#E05322] tracking-wider">
                      02
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#334155]">
                      DISTRIBUTION NETWORK
                    </span>
                    <div className="flex items-center w-8 sm:w-12 h-[1.5px] bg-[#E05322]/80 relative">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-[1.5px] border-r-[1.5px] border-[#E05322] rotate-45" />
                    </div>
                  </div>

                  {/* Display Headline matching mockup */}
                  <h3 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.85rem] xl:text-[3.25rem] font-bold text-[#0F1E36] leading-[1.1] tracking-tight">
                    International <br />
                    <span className="text-[#E05322]">relationships.</span>
                  </h3>

                  {/* Editorial Paragraph */}
                  <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[1.02rem] leading-relaxed text-[#475569] max-w-xl font-normal">
                    Long-standing distribution and business partnerships take Neelikon colourants
                    to customers across 100+ countries.
                  </p>
                </div>
              </div>

              {/* 3 Metrics Matching Mockup */}
              <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#E8DEC9]">
                <div className="grid grid-cols-3 gap-3 sm:gap-6 items-center">
                  {/* Metric 1 */}
                  <div>
                    <div className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#0F1E36] tracking-tight">
                      100+
                    </div>
                    <div className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">
                      Countries
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div className="border-l border-[#DED3C2] pl-3 sm:pl-6">
                    <div className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#0F1E36] tracking-tight">
                      Global
                    </div>
                    <div className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">
                      Partners
                    </div>
                  </div>

                  {/* Metric 3 */}
                  <div className="border-l border-[#DED3C2] pl-3 sm:pl-6">
                    <div className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#0F1E36] tracking-tight">
                      Long-term
                    </div>
                    <div className="text-xs sm:text-sm text-[#64748B] font-medium mt-1">
                      Collaboration
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 03: MANUFACTURING & PACKAGING                                      */}
        {/* ========================================================================= */}
        <div className="relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#FFFDF9] border border-[#EFE7DC] shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between relative z-10">
              <div>
                <div className="relative pl-5 sm:pl-6 pt-1">
                  <div className="absolute left-0 top-0 bottom-4 w-[1.5px] bg-[#E05322]/80" />
                  <div className="flex items-center gap-3">
                    <span className="absolute left-0 top-0 w-3.5 h-[1.5px] bg-[#E05322]/80" />
                    <span className="font-mono text-sm sm:text-[15px] font-bold text-[#E05322] tracking-wider">
                      03
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#334155]">
                      MANUFACTURING & PACKAGING
                    </span>
                    <div className="flex items-center w-8 sm:w-12 h-[1.5px] bg-[#E05322]/80 relative">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-[1.5px] border-r-[1.5px] border-[#E05322] rotate-45" />
                    </div>
                  </div>

                  <h3 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#0F1E36] leading-[1.12] tracking-tight">
                    Built around the <br />
                    <span className="text-[#E05322]">customer.</span>
                  </h3>

                  <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[1.02rem] leading-relaxed text-[#475569] max-w-xl font-normal">
                    Manufacturing and customer-centric packaging, backed by technical support for each specific industry formulation and application requirement.
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 pt-6 border-t border-[#F1E8DC]/80">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 items-center">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <Factory className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Automated Reactor Lines
                    </span>
                  </div>

                  <div className="flex items-start sm:items-center gap-3 sm:border-l sm:border-[#E2E8F0] sm:pl-4 lg:pl-5">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <Sparkles className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Tailor-Made Blending
                    </span>
                  </div>

                  <div className="flex items-start sm:items-center gap-3 sm:border-l sm:border-[#E2E8F0] sm:pl-4 lg:pl-5">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <Award className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Clean-Room Packaging
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden bg-slate-100">
              <img
                src="/images/about/manufacturing-packaging.jpg"
                alt="Modern chemical reactors and packaging line"
                className="h-full w-full object-cover object-center lg:object-[left_center]"
                loading="lazy"
              />

              <div className="hidden lg:block pointer-events-none absolute inset-y-0 -left-[1px] w-48 xl:w-56 select-none z-10">
                <svg viewBox="0 0 200 500" preserveAspectRatio="none" className="h-full w-full" fill="none">
                  <path d="M 0 0 L 140 0 C 100 80, 20 180, 25 270 C 30 350, 90 420, 180 500 L 0 500 Z" fill="#FFFDF9" />
                  <path d="M 140 0 C 100 80, 20 180, 25 270 C 30 350, 90 420, 180 500" stroke="#E05322" strokeWidth="2" />
                </svg>
              </div>

              <div className="hidden lg:flex absolute top-[54%] left-6 xl:left-8 -translate-y-1/2 z-20 items-center justify-center">
                <div className="relative group">
                  <span className="absolute -inset-2 rounded-full border border-[#E05322]/40 animate-pulse pointer-events-none" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#EA580C] to-[#C2410C] border-2 border-white shadow-[0_8px_25px_rgba(234,88,12,0.35)]">
                    <Factory className="h-6 w-6 text-white stroke-[2.2]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 04: ENVIRONMENT & SUSTAINABILITY                                   */}
        {/* ========================================================================= */}
        <div className="relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#FFFDF9] border border-[#EFE7DC] shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between relative z-10">
              <div>
                <div className="relative pl-5 sm:pl-6 pt-1">
                  <div className="absolute left-0 top-0 bottom-4 w-[1.5px] bg-[#E05322]/80" />
                  <div className="flex items-center gap-3">
                    <span className="absolute left-0 top-0 w-3.5 h-[1.5px] bg-[#E05322]/80" />
                    <span className="font-mono text-sm sm:text-[15px] font-bold text-[#E05322] tracking-wider">
                      04
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#334155]">
                      ENVIRONMENT & SUSTAINABILITY
                    </span>
                    <div className="flex items-center w-8 sm:w-12 h-[1.5px] bg-[#E05322]/80 relative">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-[1.5px] border-r-[1.5px] border-[#E05322] rotate-45" />
                    </div>
                  </div>

                  <h3 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#0F1E36] leading-[1.12] tracking-tight">
                    Responsible <br />
                    <span className="text-[#E05322]">operations.</span>
                  </h3>

                  <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[1.02rem] leading-relaxed text-[#475569] max-w-xl font-normal">
                    Environmental initiatives, including state-of-the-art effluent treatment plants (ETP) and zero-liquid-discharge systems, are integral to how we manufacture.
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 pt-6 border-t border-[#F1E8DC]/80">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 items-center">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <Droplets className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Advanced ETP Facility
                    </span>
                  </div>

                  <div className="flex items-start sm:items-center gap-3 sm:border-l sm:border-[#E2E8F0] sm:pl-4 lg:pl-5">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <Recycle className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Water Recycling & ZLD
                    </span>
                  </div>

                  <div className="flex items-start sm:items-center gap-3 sm:border-l sm:border-[#E2E8F0] sm:pl-4 lg:pl-5">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <Leaf className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Green Energy Initiatives
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden bg-slate-100">
              <img
                src="/images/about/environment-etp.jpg"
                alt="Wastewater effluent treatment facility"
                className="h-full w-full object-cover object-center lg:object-[left_center]"
                loading="lazy"
              />

              <div className="hidden lg:block pointer-events-none absolute inset-y-0 -left-[1px] w-48 xl:w-56 select-none z-10">
                <svg viewBox="0 0 200 500" preserveAspectRatio="none" className="h-full w-full" fill="none">
                  <path d="M 0 0 L 140 0 C 100 80, 20 180, 25 270 C 30 350, 90 420, 180 500 L 0 500 Z" fill="#FFFDF9" />
                  <path d="M 140 0 C 100 80, 20 180, 25 270 C 30 350, 90 420, 180 500" stroke="#E05322" strokeWidth="2" />
                </svg>
              </div>

              <div className="hidden lg:flex absolute top-[54%] left-6 xl:left-8 -translate-y-1/2 z-20 items-center justify-center">
                <div className="relative group">
                  <span className="absolute -inset-2 rounded-full border border-[#E05322]/40 animate-pulse pointer-events-none" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#EA580C] to-[#C2410C] border-2 border-white shadow-[0_8px_25px_rgba(234,88,12,0.35)]">
                    <Leaf className="h-6 w-6 text-white stroke-[2.2]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PILLAR 05: COMMUNITY & CSR                                                */}
        {/* ========================================================================= */}
        <div className="relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-[#FFFDF9] border border-[#EFE7DC] shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] lg:min-h-[500px]">
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 xl:p-14 flex flex-col justify-between relative z-10">
              <div>
                <div className="relative pl-5 sm:pl-6 pt-1">
                  <div className="absolute left-0 top-0 bottom-4 w-[1.5px] bg-[#E05322]/80" />
                  <div className="flex items-center gap-3">
                    <span className="absolute left-0 top-0 w-3.5 h-[1.5px] bg-[#E05322]/80" />
                    <span className="font-mono text-sm sm:text-[15px] font-bold text-[#E05322] tracking-wider">
                      05
                    </span>
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#334155]">
                      COMMUNITY & CSR
                    </span>
                    <div className="flex items-center w-8 sm:w-12 h-[1.5px] bg-[#E05322]/80 relative">
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t-[1.5px] border-r-[1.5px] border-[#E05322] rotate-45" />
                    </div>
                  </div>

                  <h3 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-[#0F1E36] leading-[1.12] tracking-tight">
                    Commitment beyond <br />
                    <span className="text-[#E05322]">business.</span>
                  </h3>

                  <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[1.02rem] leading-relaxed text-[#475569] max-w-xl font-normal">
                    Corporate social responsibility initiatives in the communities we are part of — championing education, healthcare access, and regional empowerment.
                  </p>
                </div>
              </div>

              <div className="mt-8 sm:mt-10 pt-6 border-t border-[#F1E8DC]/80">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 items-center">
                  <div className="flex items-start sm:items-center gap-3">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <GraduationCap className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Educational Support
                    </span>
                  </div>

                  <div className="flex items-start sm:items-center gap-3 sm:border-l sm:border-[#E2E8F0] sm:pl-4 lg:pl-5">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <Heart className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Healthcare Outreach
                    </span>
                  </div>

                  <div className="flex items-start sm:items-center gap-3 sm:border-l sm:border-[#E2E8F0] sm:pl-4 lg:pl-5">
                    <div className="shrink-0 flex items-center justify-center w-9 h-9 rounded-xl bg-orange-50 border border-orange-100 text-[#E05322]">
                      <Users className="h-5 w-5 stroke-[1.8]" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#0F1E36] leading-snug">
                      Community Welfare
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[280px] sm:min-h-[340px] lg:min-h-full overflow-hidden bg-slate-100">
              <img
                src="/images/about/csr-community.jpg"
                alt="Corporate social responsibility community education initiative"
                className="h-full w-full object-cover object-center lg:object-[left_center]"
                loading="lazy"
              />

              <div className="hidden lg:block pointer-events-none absolute inset-y-0 -left-[1px] w-48 xl:w-56 select-none z-10">
                <svg viewBox="0 0 200 500" preserveAspectRatio="none" className="h-full w-full" fill="none">
                  <path d="M 0 0 L 140 0 C 100 80, 20 180, 25 270 C 30 350, 90 420, 180 500 L 0 500 Z" fill="#FFFDF9" />
                  <path d="M 140 0 C 100 80, 20 180, 25 270 C 30 350, 90 420, 180 500" stroke="#E05322" strokeWidth="2" />
                </svg>
              </div>

              <div className="hidden lg:flex absolute top-[54%] left-6 xl:left-8 -translate-y-1/2 z-20 items-center justify-center">
                <div className="relative group">
                  <span className="absolute -inset-2 rounded-full border border-[#E05322]/40 animate-pulse pointer-events-none" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#EA580C] to-[#C2410C] border-2 border-white shadow-[0_8px_25px_rgba(234,88,12,0.35)]">
                    <HeartHandshake className="h-6 w-6 text-white stroke-[2.2]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
