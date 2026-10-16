import { Reveal } from "./Reveal";

const MILESTONES = [
  {
    num: "01",
    year: "1983",
    desc: "Neelikon is established in Mumbai.",
    img: "/images/about/timeline-1983.jpg",
    alt: "Neelikon manufacturing facility in Mumbai established 1983",
  },
  {
    num: "02",
    year: "Growth",
    desc: "Expansion across food, pharmaceutical, cosmetic and industrial colourants.",
    img: "/images/about/timeline-growth.jpg",
    alt: "Industrial synthesis reactors and chemical growth phase",
  },
  {
    num: "03",
    year: "Today",
    desc: "Serving customers in 100+ countries through an international network.",
    img: "/images/about/about-hero-perspective.jpg",
    alt: "Modern Neelikon manufacturing complex today",
  },
];

export function AboutJourney() {
  return (
    <section
      id="journey"
      aria-label="Our Journey — A legacy in every colour"
      className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#0F172A] py-8 sm:py-10 lg:py-12"
    >
      {/* ========================================================= */}
      {/* BACKGROUND GRAPHICS: Topography Lines, Dots & Plant Tower */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      >
        {/* Soft Ambient Radial Warm Glows */}
        <div className="absolute -left-20 top-1/4 h-[350px] w-[400px] rounded-full bg-gradient-to-br from-[#FED7AA]/25 via-[#FDE68A]/10 to-transparent blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[400px] w-[450px] rounded-full bg-gradient-to-tl from-[#FDBA74]/15 via-[#FED7AA]/10 to-transparent blur-3xl" />

        {/* Faint Architectural Distillation Tower Watermark on Far Right */}
        <div className="absolute right-0 top-0 bottom-0 w-64 lg:w-80 opacity-[0.14] mix-blend-multiply overflow-hidden">
          <img
            src="/images/about/timeline-growth.jpg"
            alt=""
            className="h-full w-full object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-transparent to-transparent" />
        </div>

        {/* Topography Contour Waves SVG */}
        <svg
          viewBox="0 0 1440 500"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-40 overflow-visible"
          fill="none"
        >
          <path
            d="M-50 320 C 150 360, 250 250, 420 300 C 600 360, 750 220, 950 280 C 1150 340, 1300 250, 1460 290 C 1560 315, 1660 270, 1780 285"
            stroke="#FDBA74"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />
          <path
            d="M-50 260 C 120 300, 280 190, 480 250 C 680 310, 820 180, 1020 230 C 1220 280, 1380 190, 1480 220 C 1580 245, 1680 195, 1800 215"
            stroke="#FDBA74"
            strokeWidth="0.8"
            strokeOpacity="0.7"
          />
          <path
            d="M-50 380 C 180 410, 320 300, 520 350 C 720 390, 880 280, 1080 330 C 1280 380, 1420 300, 1500 330 C 1600 355, 1700 305, 1820 325"
            stroke="#FDBA74"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
          {/* Subtle Contour Wave blending softly with the industrial-facility watermark on the far right */}
          <path
            d="M 180 160 C 400 130, 600 185, 800 150 C 1000 115, 1200 170, 1380 140 C 1490 120, 1620 155, 1760 135"
            stroke="#FDBA74"
            strokeWidth="0.75"
            strokeOpacity="0.4"
            strokeDasharray="3 5"
          />
        </svg>

        {/* Dot Matrix Pattern 1 (Bottom Left) */}
        <div className="absolute left-8 lg:left-16 bottom-6 opacity-30">
          <svg width="55" height="55" viewBox="0 0 55 55" fill="none">
            {[0, 14, 28, 42].map((x) =>
              [0, 14, 28, 42].map((y) => (
                <circle key={`${x}-${y}`} cx={x + 4} cy={y + 4} r="1.25" fill="#EA580C" />
              ))
            )}
          </svg>
        </div>

        {/* Dot Matrix Pattern 2 (Upper Middle) */}
        <div className="hidden lg:block absolute left-[45%] top-8 opacity-25">
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
            {[0, 14, 28, 42].map((x) =>
              [0, 14, 28, 42].map((y) => (
                <circle key={`${x}-${y}`} cx={x + 4} cy={y + 4} r="1.25" fill="#EA580C" />
              ))
            )}
          </svg>
        </div>
      </div>

      <div className="container-x relative z-10 mx-auto max-w-7xl">
        {/* ========================================================= */}
        {/* SECTION HEADER: Eyebrow + Split Headline                   */}
        {/* ========================================================= */}
        <div className="max-w-2xl">
          <Reveal>
            {/* Eyebrow: OUR JOURNEY */}
            <div className="flex items-center gap-2.5">
              <span className="h-[2px] w-6 bg-[#E05322] rounded-full" />
              <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#64748B]">
                Our Journey
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-bold text-[#0F1E36] leading-[1.15] tracking-tight">
              A legacy{" "}
              <span className="italic font-normal text-[#E05322]">
                in every colour.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* ========================================================= */}
        {/* TIMELINE MILESTONE TRACK & NODES                          */}
        {/* ========================================================= */}
        <div className="relative mt-6 sm:mt-8 lg:mt-9">
          {/* Desktop Connecting Orange Wave Ribbon Path */}
          <div className="hidden lg:block pointer-events-none absolute inset-0 select-none overflow-visible">
            <svg
              viewBox="0 0 1100 280"
              preserveAspectRatio="none"
              className="w-full h-full overflow-visible"
              fill="none"
            >
              {/* Secondary Subtle Cream-Orange Contour Background Line */}
              <path
                d="M 140 124 C 240 124, 320 44, 430 32 C 485 26, 545 26, 600 32 C 700 48, 770 144, 870 144 C 925 144, 980 140, 1040 132 C 1100 122, 1160 84, 1240 76 C 1320 68, 1400 112, 1490 124 C 1580 136, 1680 126, 1800 110 C 1900 96, 2000 100, 2150 102"
                stroke="#FDBA74"
                strokeWidth="1.2"
                strokeOpacity="0.45"
              />

              {/* Main Winding Connecting Path extending seamlessly off-canvas past the right edge */}
              <path
                d="M 160 110 C 260 110, 340 30, 440 18 C 490 12, 540 12, 590 18 C 690 32, 760 130, 860 130 C 915 130, 970 126, 1030 118 C 1090 108, 1150 70, 1230 62 C 1310 54, 1380 96, 1460 108 C 1540 120, 1630 110, 1730 95 C 1820 82, 1920 86, 2150 88"
                stroke="#E05322"
                strokeWidth="1.75"
              />

              {/* Waypoint Orange Pin Dots Along the Path */}
              <circle cx="340" cy="30" r="4" fill="#E05322" stroke="white" strokeWidth="2" />
              <circle cx="760" cy="130" r="4" fill="#E05322" stroke="white" strokeWidth="2" />
            </svg>
          </div>

          {/* Responsive Milestone Cards Grid / Flow */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 items-start relative z-10">
            {/* ------------------------------------------------------- */}
            {/* MILESTONE 1: 1983 (Lower-left position)                 */}
            {/* ------------------------------------------------------- */}
            <div className="flex flex-col items-center md:items-start lg:pt-6 xl:pt-8">
              <Reveal delay={0.1}>
                {/* Concentric Double-Ring Circular Frame */}
                <div className="relative mx-auto md:mx-0 flex items-center justify-center aspect-square w-36 sm:w-40 lg:w-44 xl:w-48">
                  {/* Outer Ring 2: Delicate Stroke, Soft Restrained Glow & Gentle Rotation */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border border-[#E05322]/20 shadow-[0_0_18px_rgba(224,83,34,0.08)] pointer-events-none animate-[spin_45s_linear_infinite]"
                  >
                    {/* Subtle Rotating Accent Bead on Outer Ring */}
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#E05322]/70 shadow-[0_0_6px_rgba(224,83,34,0.4)]" />
                  </div>

                  {/* Ring 1: Inner Delicate Circular Outline */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-2 sm:inset-2.5 rounded-full border border-[#E05322]/45 pointer-events-none"
                  />

                  {/* Inner Circular Image Container */}
                  <div className="relative aspect-square w-[calc(100%-1.25rem)] sm:w-[calc(100%-1.5rem)] rounded-full overflow-hidden border-[3px] border-white shadow-[0_10px_26px_rgba(15,23,42,0.08)] bg-slate-100 z-10">
                    <img
                      src={MILESTONES[0].img}
                      alt={MILESTONES[0].alt}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Glowing Connection Node placed precisely on the outer perimeter where the timeline leaves */}
                  <div className="hidden lg:block absolute top-1/2 -right-1 -translate-y-1/2 z-20">
                    <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#E05322] opacity-40 animate-ping" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E05322] border-2 border-white shadow-xs" />
                    </span>
                  </div>
                </div>

                {/* Milestone Details */}
                <div className="mt-3.5 sm:mt-4 text-center md:text-left max-w-[240px]">
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-[11px] font-semibold text-[#E05322]">
                    <span>01</span>
                    <span className="h-[1.5px] w-3.5 bg-[#E05322]" />
                  </div>
                  <h3 className="mt-0.5 font-serif text-2xl sm:text-[1.75rem] font-bold text-[#0F1E36] tracking-tight">
                    1983
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-[#64748B]">
                    Neelikon is established in Mumbai.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* ------------------------------------------------------- */}
            {/* MILESTONE 2: GROWTH (Elevated Center Position)           */}
            {/* ------------------------------------------------------- */}
            <div className="flex flex-col items-center md:items-start lg:pt-0">
              <Reveal delay={0.2}>
                {/* Concentric Double-Ring Circular Frame */}
                <div className="relative mx-auto md:mx-0 flex items-center justify-center aspect-square w-40 sm:w-44 lg:w-48 xl:w-52">
                  {/* Outer Ring 2: Delicate Stroke, Soft Restrained Glow & Gentle Counter-Rotation */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border border-[#E05322]/22 shadow-[0_0_20px_rgba(224,83,34,0.09)] pointer-events-none animate-[spin_50s_linear_infinite_reverse]"
                  >
                    {/* Subtle Rotating Accent Bead on Outer Ring */}
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-2 w-2 rounded-full bg-[#E05322]/70 shadow-[0_0_6px_rgba(224,83,34,0.4)]" />
                  </div>

                  {/* Ring 1: Inner Delicate Circular Outline */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-2 sm:inset-2.5 rounded-full border border-[#E05322]/45 pointer-events-none"
                  />

                  {/* Inner Circular Image Container (Slightly larger, perfectly centered) */}
                  <div className="relative aspect-square w-[calc(100%-1.25rem)] sm:w-[calc(100%-1.5rem)] rounded-full overflow-hidden border-[3px] border-white shadow-[0_12px_30px_rgba(15,23,42,0.1)] bg-slate-100 z-10">
                    <img
                      src={MILESTONES[1].img}
                      alt={MILESTONES[1].alt}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Glowing Connection Node placed precisely on the outer perimeter at the crest */}
                  <div className="hidden lg:block absolute -top-1 left-1/2 -translate-x-1/2 z-20">
                    <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#E05322] opacity-40 animate-ping" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E05322] border-2 border-white shadow-xs" />
                    </span>
                  </div>
                </div>

                {/* Milestone Details */}
                <div className="mt-3.5 sm:mt-4 text-center md:text-left max-w-[240px]">
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-[11px] font-semibold text-[#E05322]">
                    <span>02</span>
                    <span className="h-[1.5px] w-3.5 bg-[#E05322]" />
                  </div>
                  <h3 className="mt-0.5 font-serif text-2xl sm:text-[1.75rem] font-bold text-[#0F1E36] tracking-tight">
                    Growth
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-[#64748B]">
                    Expansion across food, pharmaceutical, cosmetic and industrial colourants.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* ------------------------------------------------------- */}
            {/* MILESTONE 3: TODAY (Lower-Right Position)               */}
            {/* ------------------------------------------------------- */}
            <div className="flex flex-col items-center md:items-start lg:pt-8 xl:pt-10">
              <Reveal delay={0.3}>
                {/* Concentric Double-Ring Circular Frame */}
                <div className="relative mx-auto md:mx-0 flex items-center justify-center aspect-square w-36 sm:w-40 lg:w-44 xl:w-48">
                  {/* Outer Ring 2: Delicate Stroke, Soft Restrained Glow & Gentle Rotation */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full border border-[#E05322]/20 shadow-[0_0_18px_rgba(224,83,34,0.08)] pointer-events-none animate-[spin_40s_linear_infinite]"
                  >
                    {/* Subtle Rotating Accent Bead on Outer Ring */}
                    <span className="absolute top-1/4 -right-0.5 h-2 w-2 rounded-full bg-[#E05322]/70 shadow-[0_0_6px_rgba(224,83,34,0.4)]" />
                  </div>

                  {/* Ring 1: Inner Delicate Circular Outline */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-2 sm:inset-2.5 rounded-full border border-[#E05322]/45 pointer-events-none"
                  />

                  {/* Inner Circular Image Container */}
                  <div className="relative aspect-square w-[calc(100%-1.25rem)] sm:w-[calc(100%-1.5rem)] rounded-full overflow-hidden border-[3px] border-white shadow-[0_10px_26px_rgba(15,23,42,0.08)] bg-slate-100 z-10">
                    <img
                      src={MILESTONES[2].img}
                      alt={MILESTONES[2].alt}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Glowing Connection Node placed precisely on the outer perimeter where the timeline enters */}
                  <div className="hidden lg:block absolute top-1/2 -left-1 -translate-y-1/2 z-20">
                    <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#E05322] opacity-40 animate-ping" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E05322] border-2 border-white shadow-xs" />
                    </span>
                  </div>

                  {/* Glowing Connection Node placed precisely on the outer perimeter where the timeline exits toward the right edge */}
                  <div className="hidden lg:block absolute top-1/2 -right-1 -translate-y-1/2 z-20">
                    <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-[#E05322] opacity-40 animate-ping" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-[#E05322] border-2 border-white shadow-xs" />
                    </span>
                  </div>
                </div>

                {/* Milestone Details */}
                <div className="mt-3.5 sm:mt-4 text-center md:text-left max-w-[240px]">
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-[11px] font-semibold text-[#E05322]">
                    <span>03</span>
                    <span className="h-[1.5px] w-3.5 bg-[#E05322]" />
                  </div>
                  <h3 className="mt-0.5 font-serif text-2xl sm:text-[1.75rem] font-bold text-[#0F1E36] tracking-tight">
                    Today
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-[#64748B]">
                    Serving customers in 100+ countries through an international network.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
