import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

const MOMENTS = [
  {
    num: "01",
    date: "12 MAR 2023",
    color: "#2563EB",
    lineColor: "bg-blue-600",
    numColor: "text-blue-200/70",
    accentBg: "bg-blue-50/80 hover:bg-blue-100/90",
    accentText: "text-blue-600",
    accentBorder: "border-blue-200/80",
    title: "Export Award by CHEMEXCIL",
    desc: "Recognition for outstanding export performance and contribution to the Indian colour and dye industry.",
    img: "/images/news/News-Event-1.jpg",
    link: "https://neelikon.com/",
  },
  {
    num: "02",
    date: "18 OCT 2022",
    color: "#F97316",
    lineColor: "bg-orange-500",
    numColor: "text-orange-200/70",
    accentBg: "bg-orange-50/80 hover:bg-orange-100/90",
    accentText: "text-orange-600",
    accentBorder: "border-orange-200/80",
    title: "Exporters' Excellence Award",
    desc: "Honoured for consistent growth and global presence in specialty colour solutions.",
    img: "/images/news/News-Event-2.jpg",
    link: "https://neelikon.com/",
  },
  {
    num: "03",
    date: "05 JUN 2021",
    color: "#10B981",
    lineColor: "bg-emerald-500",
    numColor: "text-emerald-200/70",
    accentBg: "bg-emerald-50/80 hover:bg-emerald-100/90",
    accentText: "text-emerald-600",
    accentBorder: "border-emerald-200/80",
    title: "Support to Child Development",
    desc: "Neelikon as Chief Patron for the inauguration of Rise & Shine Child Development Centre.",
    img: "/images/news/News-Event-3.jpg",
    link: "https://neelikon.com/",
  },
  {
    num: "04",
    date: "20 AUG 2019",
    color: "#F43F5E",
    lineColor: "bg-rose-500",
    numColor: "text-rose-200/70",
    accentBg: "bg-rose-50/80 hover:bg-rose-100/90",
    accentText: "text-rose-600",
    accentBorder: "border-rose-200/80",
    title: "Lalit Doshi Memorial Recognition",
    desc: "Felicitation for our continued contribution to the colour and dye industry.",
    img: "/images/news/News-Event-4.jpg",
    link: "https://neelikon.com/",
  },
];

export function MomentsFromNeelikon() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (idx: number) => {
    const clamped = Math.max(0, Math.min(MOMENTS.length - 1, idx));
    setActiveIndex(clamped);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 320;
      scrollRef.current.scrollTo({
        left: clamped * (cardWidth + 24),
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => scrollToIndex(activeIndex - 1);
  const handleNext = () => scrollToIndex(activeIndex + 1);

  return (
    <section
      id="moments"
      aria-label="Moments from Neelikon"
      className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#0F172A] py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative Fluid Ribbon Wave Backgrounds matching reference */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        {/* Top-Right Warm Champagne Silk Glow */}
        <div className="absolute -right-20 top-0 h-[380px] w-[500px] rounded-full bg-gradient-to-br from-[#FED7AA]/35 via-[#FDE68A]/20 to-transparent blur-3xl" />

        {/* Bottom-Left Cyan & Sky Blue Ribbon Waves */}
        <svg
          viewBox="0 0 600 350"
          className="absolute -bottom-10 -left-10 w-[420px] sm:w-[560px] h-auto opacity-70"
          fill="none"
        >
          <defs>
            <linearGradient id="waveBlue" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient id="waveCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M -50 250 C 100 320, 250 210, 420 310 C 500 360, 560 300, 600 330 L 600 400 L -50 400 Z"
            fill="url(#waveBlue)"
          />
          <path
            d="M -30 290 C 120 230, 280 340, 480 260 C 540 230, 580 270, 600 290 L 600 400 L -30 400 Z"
            fill="url(#waveCyan)"
          />
        </svg>

        {/* Bottom-Right Peach & Coral Ribbon Waves */}
        <svg
          viewBox="0 0 500 300"
          className="absolute -bottom-10 -right-10 w-[360px] sm:w-[480px] h-auto opacity-60"
          fill="none"
        >
          <defs>
            <linearGradient id="wavePeach" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FB7185" stopOpacity="0.4" />
              <stop offset="60%" stopColor="#FDBA74" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#FFEDD5" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 550 200 C 400 280, 250 170, 80 270 C 20 310, -20 280, -50 300 L -50 400 L 550 400 Z"
            fill="url(#wavePeach)"
          />
        </svg>
      </div>

      <div className="container-x relative z-10 mx-auto max-w-7xl">
        {/* ========================================================= */}
        {/* HEADER: Eyebrow, Title with Orange "Neelikon.", Copy, CTA */}
        {/* ========================================================= */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 pb-2">
            {/* Left: Eyebrow & Brand Headline */}
            <div>
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#2563EB]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#2563EB]">
                  News & Events
                </span>
              </div>

              <h2 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.5rem] tracking-tight leading-[1.08] text-[#0F172A] font-bold">
                Moments from{" "}
                <span className="italic font-normal text-[#E05322]">Neelikon.</span>
              </h2>
            </div>

            {/* Middle: Editorial Subtitle */}
            <div className="max-w-sm lg:pb-1">
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Recognitions, partnerships and milestones that reflect our commitment to quality,
                innovation and a brighter, more colourful world.
              </p>
            </div>

            {/* Right: Pill Link Button */}
            <div className="lg:pb-1">
              <a
                href="https://neelikon.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#1E2B68] bg-white/60 px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#1E2B68] shadow-xs backdrop-blur-xs transition-all duration-300 hover:bg-[#1E2B68] hover:text-white hover:shadow-md hover:-translate-y-0.5 active:scale-95"
              >
                All news on neelikon.com <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* ========================================================= */}
        {/* CARDS CONTAINER & CAROUSEL                                */}
        {/* ========================================================= */}
        <div className="relative mt-12 sm:mt-14">
          {/* Previous Arrow Button */}
          <button
            onClick={handlePrev}
            disabled={activeIndex === 0}
            aria-label="Previous card"
            className="hidden md:flex absolute -left-4 xl:-left-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white border border-[#E2DDD5] text-slate-700 shadow-md transition-all duration-200 hover:bg-slate-50 hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Next Arrow Button */}
          <button
            onClick={handleNext}
            disabled={activeIndex >= MOMENTS.length - 1}
            aria-label="Next card"
            className="hidden md:flex absolute -right-4 xl:-right-6 top-1/2 -translate-y-1/2 z-20 h-11 w-11 items-center justify-center rounded-full bg-white border border-[#E2DDD5] text-slate-700 shadow-md transition-all duration-200 hover:bg-slate-50 hover:scale-105 hover:shadow-lg active:scale-95 disabled:opacity-30 disabled:pointer-events-none"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Cards Grid / Scroll Track */}
          <div
            ref={scrollRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 overflow-x-auto pb-4 pt-1 snap-x snap-mandatory scrollbar-none"
          >
            {MOMENTS.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group snap-start relative flex flex-col justify-between rounded-3xl bg-white p-4 pb-6 border border-[#ECE7DF] shadow-[0_8px_24px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] hover:border-[#DFD8CC]"
              >
                <div>
                  {/* Event Photograph with Smooth Aspect Ratio */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-4 select-none">
                    <img
                      src={item.img}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Header Row inside card: Date & Watermark Number */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[11px] font-bold tracking-wider uppercase text-[#64748B] font-mono">
                        {item.date}
                      </p>
                      <div className={`mt-1.5 h-[2px] w-6 ${item.lineColor} rounded-full`} />
                    </div>

                    {/* Watermark Numeral */}
                    <span
                      aria-hidden="true"
                      className={`font-serif italic font-normal text-3xl sm:text-4xl leading-none select-none ${item.numColor}`}
                    >
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 font-serif font-bold text-lg sm:text-xl text-[#0F172A] leading-snug line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs text-[#64748B] leading-relaxed line-clamp-3">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Row: Circular Action Button */}
                <div className="mt-6 pt-2 flex items-center justify-end">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Read more about ${item.title}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full ${item.accentBg} ${item.accentText} ${item.accentBorder} border shadow-xs transition-all duration-300 group-hover:scale-110 active:scale-95`}
                  >
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ========================================================= */}
          {/* PAGINATION INDICATOR (— • • —) MATCHING REFERENCE         */}
          {/* ========================================================= */}
          <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10 select-none">
            {/* Left wide dash */}
            <span className="h-[2px] w-9 rounded-full bg-slate-300/80" />

            {/* Dot 1 (Active) */}
            <button
              onClick={() => scrollToIndex(0)}
              aria-label="Go to slide 1"
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeIndex === 0
                  ? "bg-[#1E2B68] ring-4 ring-[#1E2B68]/15 scale-110"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />

            {/* Dot 2 */}
            <button
              onClick={() => scrollToIndex(1)}
              aria-label="Go to slide 2"
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeIndex === 1
                  ? "bg-[#1E2B68] ring-4 ring-[#1E2B68]/15 scale-110"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />

            {/* Dot 3 */}
            <button
              onClick={() => scrollToIndex(2)}
              aria-label="Go to slide 3"
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                activeIndex === 2
                  ? "bg-[#1E2B68] ring-4 ring-[#1E2B68]/15 scale-110"
                  : "bg-slate-300 hover:bg-slate-400"
              }`}
            />

            {/* Right wide dash */}
            <span className="h-[2px] w-9 rounded-full bg-slate-300/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
