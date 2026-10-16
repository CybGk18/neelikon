import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Reveal } from "./Reveal";

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds

const MOMENTS = [
  {
    num: "01",
    date: "12 MAR 2023",
    color: "#0284C7",
    accentColor: "#E05322",
    badgeBg: "bg-[#E0F2FE]",
    badgeText: "text-[#0284C7]",
    category: "Industry Recognition",
    title: "Export Award by CHEMEXCIL",
    desc: "Recognition for outstanding export performance and exceptional contribution to the Indian colour and dye industry, highlighting Neelikon's sustained global manufacturing excellence.",
    img: "/images/news/News-Event-1.png",
    link: "https://neelikon.com/",
  },
  {
    num: "02",
    date: "18 OCT 2022",
    color: "#EA580C",
    accentColor: "#EA580C",
    badgeBg: "bg-[#FFEDD5]",
    badgeText: "text-[#EA580C]",
    category: "Global Growth",
    title: "Exporters' Excellence Award",
    desc: "Honoured for consistent growth, rigorous regulatory compliance, and a strong international presence across key specialty colour markets worldwide.",
    img: "/images/news/News-Event-2.png",
    link: "https://neelikon.com/",
  },
  {
    num: "03",
    date: "05 JUN 2021",
    color: "#10B981",
    accentColor: "#10B981",
    badgeBg: "bg-[#DCFCE7]",
    badgeText: "text-[#16A34A]",
    category: "Community & CSR",
    title: "Support to Child Development",
    desc: "Neelikon as Chief Patron for the inauguration of Rise & Shine Child Development Centre, investing in comprehensive developmental healthcare and community wellbeing.",
    img: "/images/news/News-Event-3.png",
    link: "https://neelikon.com/",
  },
  {
    num: "04",
    date: "20 AUG 2019",
    color: "#E11D48",
    accentColor: "#E11D48",
    badgeBg: "bg-[#FFE4E6]",
    badgeText: "text-[#E11D48]",
    category: "Memorial Felicitation",
    title: "Lalit Doshi Memorial Recognition",
    desc: "Felicitation for our enduring dedication to high-purity colour synthesis, technical leadership, and continuous contribution to the Indian chemical industry.",
    img: "/images/news/News-Event-4.png",
    link: "https://neelikon.com/",
  },
];

export function MomentsFromNeelikon() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isManualPaused, setIsManualPaused] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Slide navigation with loop (stable functions that don't depend on currentIndex)
  const goToSlide = useCallback((index: number, newDirection: 1 | -1 = 1) => {
    setDirection(newDirection);
    setCurrentIndex((index + MOMENTS.length) % MOMENTS.length);
  }, []);

  const goToNextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % MOMENTS.length);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + MOMENTS.length) % MOMENTS.length);
  }, []);

  // Autoplay management: always active unless user explicitly clicks Pause
  const shouldPlay = !isManualPaused;

  useEffect(() => {
    if (!shouldPlay) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      goToNextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [shouldPlay, goToNextSlide]);

  // Touch Swipe Handlers for mobile & tablet
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      touchStartXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    if (!e.changedTouches[0]) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartXRef.current - touchEndX;

    // Minimum swipe threshold of 45px
    if (Math.abs(deltaX) > 45) {
      if (deltaX > 0) {
        goToNextSlide();
      } else {
        goToPrevSlide();
      }
    }
    touchStartXRef.current = null;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrevSlide();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNextSlide();
    }
  };

  const currentMoment = MOMENTS[currentIndex] ?? MOMENTS[0]!;

  // Slide animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "8%" : "-8%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring" as const, stiffness: 260, damping: 28, mass: 0.8 },
        opacity: { duration: 0.45, ease: "easeOut" as const },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-8%" : "8%",
      opacity: 0,
      transition: {
        x: { type: "spring" as const, stiffness: 260, damping: 28, mass: 0.8 },
        opacity: { duration: 0.35, ease: "easeIn" as const },
      },
    }),
  };

  return (
    <section
      id="moments"
      aria-label="Moments from Neelikon"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="relative w-full overflow-hidden bg-[#FAF8F5] text-[#0F172A] pt-16 sm:pt-20 pb-20 sm:pb-28 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A]/20"
    >
      {/* ========================================================= */}
      {/* DECORATIVE TOP-RIGHT SPICE BOWL & FLOWING SWEEP CURVES    */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[300px] sm:w-[420px] lg:w-[500px] h-[220px] sm:h-[260px] overflow-hidden select-none z-0"
      >
        <svg
          viewBox="0 0 500 260"
          className="absolute inset-0 w-full h-full"
          fill="none"
        >
          <defs>
            <linearGradient id="topSweepLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2DDD5" stopOpacity="0.1" />
              <stop offset="45%" stopColor="#E8AA76" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#E2DDD5" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M 120 0 C 130 90, 210 180, 340 220 C 420 245, 470 255, 500 260"
            stroke="url(#topSweepLine)"
            strokeWidth="1.5"
          />
          <path
            d="M 160 0 C 170 80, 240 160, 360 200 C 430 225, 475 235, 500 240"
            stroke="#F0E8DC"
            strokeWidth="1"
          />
        </svg>

        <img
          src="/images/news/top-dish-fade.png"
          alt=""
          aria-hidden="true"
          className="absolute top-0 right-0 w-[270px] sm:w-[350px] lg:w-[410px] object-contain object-top-right opacity-90"
        />
      </div>

      {/* ========================================================= */}
      {/* DECORATIVE BOTTOM SILKY RIBBON WAVES (Clean Vector SVG)  */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 sm:h-36 overflow-hidden select-none z-0"
      >
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 w-full h-full opacity-85"
          fill="none"
        >
          <defs>
            <linearGradient id="warmGoldWave" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5DEC6" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#EBD3B9" stopOpacity="0.6" />
              <stop offset="80%" stopColor="#FAF8F5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="coolSlateWave" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#E2E8F0" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ribbonLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E6CDB2" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#DFC3A5" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            d="M 0 130 C 250 80, 500 170, 800 110 C 1100 50, 1300 130, 1440 100 L 1440 200 L 0 200 Z"
            fill="url(#warmGoldWave)"
          />
          <path
            d="M 1440 120 C 1200 60, 950 160, 700 120 C 450 80, 200 150, 0 160 L 0 200 L 1440 200 Z"
            fill="url(#coolSlateWave)"
          />
          <path
            d="M 0 140 C 280 90, 560 175, 840 115 C 1120 55, 1320 135, 1440 105"
            stroke="url(#ribbonLine)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="container-x relative z-10 mx-auto max-w-7xl">
        {/* ========================================================= */}
        {/* 1. HEADER (Preserved: Eyebrow, Title, Divider, Pill CTA) */}
        {/* ========================================================= */}
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pb-2">
            {/* Left: Eyebrow & Brand Headline */}
            <div className="max-w-xl">
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-7 bg-[#E05322]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#1E293B]">
                  News & Events
                </span>
              </div>

              <h2 className="mt-3.5 font-serif text-4xl sm:text-5xl lg:text-[3.25rem] tracking-tight leading-[1.08] text-[#0F172A] font-bold">
                Moments from{" "}
                <span className="italic font-normal text-[#E05322] block sm:inline">Neelikon.</span>
              </h2>
            </div>

            {/* Middle: Editorial Subtitle with Vertical Left Border */}
            <div className="max-w-xs lg:max-w-sm border-l border-slate-300 pl-4 py-0.5">
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans">
                Recognitions, partnerships and milestones that reflect our commitment to quality,
                innovation and a brighter, more colourful world.
              </p>
            </div>

            {/* Right: Pill Link Button */}
            <div className="shrink-0 lg:pb-1">
              <a
                href="https://neelikon.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#0F172A] bg-white/90 px-6 py-2.5 text-xs sm:text-sm font-semibold text-[#0F172A] shadow-xs backdrop-blur-xs transition-all duration-300 hover:bg-[#0F172A] hover:text-white hover:shadow-md hover:-translate-y-0.5 active:scale-95"
              >
                All news on neelikon.com <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* ========================================================= */}
        {/* 2. AUTO-PLAYING SLIDESHOW PRESENTATION (ONE SLIDE AT ONCE)*/}
        {/* ========================================================= */}
        <div
          className="relative mt-10 sm:mt-14"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slide Presentation Stage with AnimatePresence */}
          <div className="relative min-h-[460px] sm:min-h-[480px] lg:min-h-[500px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* ---------------------------------------------------- */}
                {/* Large Prominent Event Photograph (Desktop: ~58% cols)*/}
                {/* ---------------------------------------------------- */}
                <div className="lg:col-span-7">
                  <div className="relative w-full aspect-[16/10] sm:aspect-[16/10] md:aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 shadow-[0_16px_40px_rgba(15,23,42,0.08)] border border-[#EBE5DC] group select-none">
                    <img
                      src={currentMoment.img}
                      alt={currentMoment.title}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="eager"
                    />

                    {/* Subtle warm corner shadow vignette */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60" />

                    {/* Active index pill overlay on top-left of image */}
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1.5 shadow-sm border border-white/60">
                      <span className="h-2 w-2 rounded-full bg-[#E05322] animate-pulse" />
                      <span className="text-xs font-mono font-bold tracking-wider text-[#0F172A]">
                        {currentMoment.num} / {String(MOMENTS.length).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Date badge on bottom-left of image */}
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-lg bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-white shadow-sm">
                      <p className="text-[11px] font-mono sm:text-xs font-bold tracking-wider uppercase">
                        {currentMoment.date}
                      </p>
                    </div>
                  </div>
                </div>

                {/* ---------------------------------------------------- */}
                {/* Event Details Content (Desktop: ~42% cols)          */}
                {/* ---------------------------------------------------- */}
                <div className="lg:col-span-5 flex flex-col justify-between py-2 sm:py-4">
                  <div>
                    {/* Header: Numbered Indicator & Date */}
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-mono font-bold ${currentMoment.badgeBg} ${currentMoment.badgeText}`}
                      >
                        MOMENT {currentMoment.num}
                      </span>
                      <span className="text-slate-300 font-light">|</span>
                      <span className="text-xs font-mono font-semibold tracking-wider text-slate-500 uppercase">
                        {currentMoment.date}
                      </span>
                    </div>

                    {/* Subtle Orange Accent Line */}
                    <div className="mt-4 h-[2.5px] w-12 bg-[#E05322] rounded-full" />

                    {/* Headline in Elegant Serif */}
                    <h3 className="mt-5 font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0F172A] tracking-tight leading-[1.2]">
                      {currentMoment.title}
                    </h3>

                    {/* Description in Muted Slate */}
                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                      {currentMoment.desc}
                    </p>

                    {/* Read More Link */}
                    <div className="mt-6">
                      <a
                        href={currentMoment.link}
                        target="_blank"
                        rel="noreferrer"
                        className="group/link inline-flex items-center gap-2 text-sm font-semibold text-[#0F172A] hover:text-[#E05322] transition-colors duration-200"
                      >
                        <span className="underline decoration-1 underline-offset-4 decoration-slate-300 group-hover/link:decoration-[#E05322]">
                          Read More
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1.5" />
                      </a>
                    </div>
                  </div>

                  {/* -------------------------------------------------- */}
                  {/* NAVIGATION CONTROLS & TIMELINE PROGRESS BAR        */}
                  {/* -------------------------------------------------- */}
                  <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-200/80">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Interactive Slide Dots Indicator */}
                      <div className="flex items-center gap-2.5">
                        {MOMENTS.map((item, idx) => {
                          const isActive = idx === currentIndex;
                          return (
                            <button
                              key={item.num}
                              type="button"
                              onClick={() => goToSlide(idx, idx > currentIndex ? 1 : -1)}
                              aria-label={`Go to slide ${idx + 1}: ${item.title}`}
                              className={`group/dot relative h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                isActive
                                  ? "w-8 bg-[#0F172A]"
                                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
                              }`}
                            >
                              <span className="sr-only">Slide {idx + 1}</span>
                            </button>
                          );
                        })}

                        {/* Subtle Autoplay Status Indicator */}
                        <button
                          type="button"
                          onClick={() => setIsManualPaused((prev) => !prev)}
                          aria-label={isManualPaused ? "Resume slideshow autoplay" : "Pause slideshow autoplay"}
                          className="ml-2 inline-flex items-center justify-center h-6 w-6 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                          title={isManualPaused ? "Resume autoplay" : "Pause autoplay"}
                        >
                          {isManualPaused ? (
                            <Play className="h-3 w-3 fill-current" />
                          ) : (
                            <Pause className="h-3 w-3 fill-current" />
                          )}
                        </button>
                      </div>

                      {/* Circular Navigation Buttons */}
                      <div className="flex items-center gap-2.5 select-none self-end sm:self-auto">
                        <button
                          type="button"
                          onClick={goToPrevSlide}
                          aria-label="Previous event slide"
                          className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white border border-slate-200 text-slate-800 flex items-center justify-center shadow-xs transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A]"
                        >
                          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                        <button
                          type="button"
                          onClick={goToNextSlide}
                          aria-label="Next event slide"
                          className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-[#0B132B] text-white flex items-center justify-center shadow-xs transition-all duration-200 hover:bg-[#1E2B68] hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F172A]"
                        >
                          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </button>
                      </div>
                    </div>

                    {/* Continuous Auto-Advance Progress Bar */}
                    <div
                      className="mt-4 h-[2px] w-full bg-slate-200 overflow-hidden rounded-full"
                      role="progressbar"
                      aria-valuenow={currentIndex + 1}
                      aria-valuemin={1}
                      aria-valuemax={MOMENTS.length}
                    >
                      <motion.div
                        key={`${currentIndex}-${shouldPlay}`}
                        initial={{ width: "0%" }}
                        animate={{ width: shouldPlay ? "100%" : "0%" }}
                        transition={{
                          duration: shouldPlay ? AUTOPLAY_INTERVAL / 1000 : 0,
                          ease: "linear",
                        }}
                        className="h-full bg-[#E05322]"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
