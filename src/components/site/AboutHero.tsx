import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";
import { Reveal } from "./Reveal";
import bgVideo from "@/assets/gemini_generated_video_e4306bb1.mp4";

export function AboutHero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <section
        id="about-hero"
        aria-label="About Neelikon Hero"
        className="relative min-h-screen lg:h-[100dvh] lg:max-h-[100dvh] w-full overflow-hidden bg-white text-[#0F172A] pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-10 flex flex-col justify-between"
      >
        {/* ========================================================= */}
        {/* BACKGROUND: Crystal-Clear Vibrant Plant Artwork + Wave    */}
        {/* ========================================================= */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none overflow-hidden"
        >
          {/* Ambient Warm Glow in Top Left */}
          <div className="absolute -left-20 -top-20 h-[450px] w-[550px] rounded-full bg-gradient-to-br from-[#FED7AA]/30 via-[#FDE68A]/20 to-transparent blur-3xl" />

          {/* Right Photographic Artwork: Ultra-Sharp Colorful Facility Photo */}
          <div className="absolute top-0 right-0 bottom-0 w-full lg:w-[60%] xl:w-[58%] overflow-hidden">
            <img
              src="/images/about/about-hero-colorful.jpg"
              alt="Neelikon global manufacturing plant with vibrant colour explosion"
              className="h-full w-full object-cover object-[center_center]"
              loading="eager"
            />
            {/* Mobile gradient overlay so text is 100% readable on smaller viewports */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40 lg:hidden" />
          </div>

          {/* Desktop SVG Diagonal Wave Sash & Sky-Blue Ribbons */}
          {/* Guaranteed not to overlap the text: curve stays safely to the right of content */}
          <svg
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
            className="hidden lg:block absolute inset-0 h-full w-full"
            fill="none"
          >
            <defs>
              {/* Glossy Sky-Blue & Cyan Ribbon Gradient */}
              <linearGradient id="waveSashGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="25%" stopColor="#BAE6FD" stopOpacity="0.9" />
                <stop offset="55%" stopColor="#38BDF8" stopOpacity="0.8" />
                <stop offset="85%" stopColor="#60A5FA" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.25" />
              </linearGradient>

              <linearGradient id="innerWhiteGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#E0F2FE" stopOpacity="0.45" />
              </linearGradient>

              {/* Sky Radiance Arcs */}
              <linearGradient id="skyRadiance" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            {/* Left Solid White Panel with Smooth Diagonal Swoop */}
            {/* Starts at 820px (57% width) at top, swoops to 640px (44% width) at bottom */}
            <path
              d="M 0 0 L 840 0 C 780 200, 720 380, 680 540 C 640 700, 610 800, 580 900 L 0 900 Z"
              fill="#FFFFFF"
            />

            {/* Thick Sky-Blue Wave Ribbon Edge */}
            <path
              d="M 840 0 C 780 200, 720 380, 680 540 C 640 700, 610 800, 580 900"
              stroke="url(#waveSashGlow)"
              strokeWidth="36"
              strokeOpacity="0.85"
            />

            {/* Inner Crisp White Feathered Ribbon Line */}
            <path
              d="M 825 -5 C 765 195, 705 375, 665 535 C 625 695, 595 795, 565 905"
              stroke="url(#innerWhiteGlow)"
              strokeWidth="10"
              strokeOpacity="0.95"
            />

            {/* Outer Subtle Sky Glow Line */}
            <path
              d="M 860 5 C 800 205, 740 385, 700 545 C 660 705, 630 805, 600 895"
              stroke="#BAE6FD"
              strokeWidth="4"
              strokeOpacity="0.6"
            />

            {/* Sky Radial Arcs radiating into the upper sky */}
            <path
              d="M 940 0 C 1030 110, 1140 200, 1320 290"
              stroke="url(#skyRadiance)"
              strokeWidth="2.5"
            />
            <path
              d="M 1010 0 C 1090 90, 1190 170, 1370 240"
              stroke="url(#skyRadiance)"
              strokeWidth="1.5"
            />
            <path
              d="M 1080 0 C 1150 70, 1240 140, 1410 190"
              stroke="url(#skyRadiance)"
              strokeWidth="1"
            />
          </svg>
        </div>

        {/* ========================================================= */}
        {/* MAIN HERO CONTENT & RIGHT FLOATING TAGS                   */}
        {/* ========================================================= */}
        <div className="container-x relative z-10 w-full my-auto pt-6 lg:pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Column: Eyebrow, Main Headline, Paragraph, Video CTA */}
            <div className="lg:col-span-6 xl:col-span-5 max-w-xl">
              <Reveal>
                {/* Eyebrow: ABOUT NEELIKON */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#64748B]">
                    About Neelikon
                  </span>
                </div>

                {/* Main Headline: Bold Serif Navy + Italic Serif Orange */}
                <h1 className="mt-4 sm:mt-5 font-serif">
                  <span className="block text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold text-[#0F1E36] leading-[1.08] tracking-tight">
                    Four decades <br />
                    of colour expertise.
                  </span>
                  <span className="mt-1 sm:mt-2 block font-serif text-3xl sm:text-4xl lg:text-[3.25rem] xl:text-[3.65rem] font-normal italic text-[#E05322] leading-[1.08] tracking-tight">
                    A future of possibilities.
                  </span>
                </h1>

                {/* Description Paragraph */}
                <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-[#64748B]">
                  From dyes and pigments to speciality chemicals, we create colour solutions that
                  add value to industries and improve everyday life.
                </p>

                {/* Video Play CTA Button */}
                <div className="mt-7 sm:mt-9 flex items-center">
                  <button
                    type="button"
                    onClick={() => setVideoOpen(true)}
                    className="group flex items-center gap-4 text-left transition-transform active:scale-95 cursor-pointer"
                  >
                    {/* Vibrant Solid Orange Play Circle with White Icon */}
                    <span className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-[#E05322] shadow-lg shadow-[#E05322]/35 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C2410C]">
                      <Play className="h-5 w-5 sm:h-6 sm:w-6 fill-white text-white ml-0.5 transition-transform duration-300 group-hover:scale-105" />
                    </span>
                    {/* Text Label */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] leading-tight">
                        Our Journey
                      </p>
                      <p className="text-sm sm:text-base font-bold text-[#0F1E36] leading-tight mt-0.5 group-hover:text-[#E05322] transition-colors">
                        Watch Video
                      </p>
                    </div>
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Floating Slogan in Upper Right Sky */}
            <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 justify-end self-start pt-2 pr-2 xl:pr-6">
              <Reveal delay={0.2}>
                <div className="flex flex-col items-end space-y-2 select-none pointer-events-none backdrop-blur-md bg-white/40 border border-white/60 px-5 py-3 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#0F1E36]">
                      Colours
                    </span>
                    <span className="h-[2px] w-5 bg-[#E05322] rounded-full" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#0F1E36]">
                      For A Brighter
                    </span>
                    <span className="h-[2px] w-5 bg-[#E05322] rounded-full" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-[#0F1E36]">
                      Tomorrow
                    </span>
                    <span className="h-[2px] w-5 bg-[#E05322] rounded-full" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Empty bottom anchor ensuring vertical flex spacing */}
        <div className="h-2" />
      </section>

      {/* ========================================================= */}
      {/* FULLSCREEN VIDEO MODAL FOR "WATCH VIDEO"                  */}
      {/* ========================================================= */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                aria-label="Close video modal"
                onClick={() => setVideoOpen(false)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  autoPlay
                  controls
                  playsInline
                  className="h-full w-full object-cover"
                >
                  <source src={bgVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
