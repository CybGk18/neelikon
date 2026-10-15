import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import natureImg from "@/assets/chapter-pillar-nature.jpg";
import scienceImg from "@/assets/chapter-pillar-science.jpg";
import performanceImg from "@/assets/chapter-pillar-performance.jpg";
import tomorrowImg from "@/assets/chapter-pillar-tomorrow.jpg";

interface PillarData {
  id: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  cardBg: string;
  cardBorder: string;
  cardShadow: string;
  iconColor: string;
  textColor: string;
  hoverRing: string;
  renderIcon: () => React.ReactNode;
}

const PILLARS: PillarData[] = [
  {
    id: "nature",
    titleLine1: "INSPIRED",
    titleLine2: "BY NATURE",
    description: "Sourcing pure natural and nature-identical pigments with ecological care",
    href: "#science",
    image: natureImg,
    alt: "Macro photograph of vibrant green leaf with glistening dewdrops",
    cardBg: "bg-gradient-to-b from-[#EDF7EE]/95 via-[#E6F4EA]/80 to-[#D4EEDC]/45",
    cardBorder: "border-[#BCE4C7]/70",
    cardShadow: "shadow-[0_12px_36px_rgba(22,101,52,0.08)]",
    iconColor: "text-[#15803D]",
    textColor: "text-[#14532D]",
    hoverRing: "group-hover:ring-[#15803D]/30 group-hover:shadow-[0_18px_44px_rgba(22,101,52,0.16)]",
    renderIcon: () => (
      <svg
        className="w-5 h-5 text-[#15803D] shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    id: "science",
    titleLine1: "DRIVEN",
    titleLine2: "BY SCIENCE",
    description: "State-of-the-art analytical testing and purity verification",
    href: "#science",
    image: scienceImg,
    alt: "Laboratory glass beaker with blue dye and pipette dropper",
    cardBg: "bg-gradient-to-b from-[#EDF6FD]/95 via-[#E0F2FE]/80 to-[#BAE6FD]/45",
    cardBorder: "border-[#BAE6FD]/70",
    cardShadow: "shadow-[0_12px_36px_rgba(2,132,199,0.08)]",
    iconColor: "text-[#0284C7]",
    textColor: "text-[#0369A1]",
    hoverRing: "group-hover:ring-[#0284C7]/30 group-hover:shadow-[0_18px_44px_rgba(2,132,199,0.16)]",
    renderIcon: () => (
      <svg
        className="w-5 h-5 text-[#0284C7] shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 2v7.31L4.15 19.33A2 2 0 0 0 5.86 22h12.28a2 2 0 0 0 1.71-2.67L14 9.31V2" />
        <path d="M8.5 2h7" />
        <path d="M7 16h10" />
      </svg>
    ),
  },
  {
    id: "performance",
    titleLine1: "ENGINEERED",
    titleLine2: "FOR PERFORMANCE",
    description: "Superior dispersion, heat stability, and lightfastness",
    href: "#industries",
    image: performanceImg,
    alt: "Industrial steel dispenser pouring orange pigment pellets",
    cardBg: "bg-gradient-to-b from-[#FFF9EE]/95 via-[#FEF3C7]/80 to-[#FDE68A]/45",
    cardBorder: "border-[#FDE68A]/70",
    cardShadow: "shadow-[0_12px_36px_rgba(217,119,6,0.08)]",
    iconColor: "text-[#D97706]",
    textColor: "text-[#9A3412]",
    hoverRing: "group-hover:ring-[#D97706]/30 group-hover:shadow-[0_18px_44px_rgba(217,119,6,0.16)]",
    renderIcon: () => (
      <svg
        className="w-5 h-5 text-[#D97706] shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
      </svg>
    ),
  },
  {
    id: "tomorrow",
    titleLine1: "CREATED FOR A",
    titleLine2: "BRIGHTER TOMORROW",
    description: "Sustainable, safe, and globally compliant colour solutions",
    href: "#quality",
    image: tomorrowImg,
    alt: "Sculptural curved swatches of red, yellow, and blue smooth materials",
    cardBg: "bg-gradient-to-b from-[#FFF2F4]/95 via-[#FFE4E6]/80 to-[#FECDD3]/45",
    cardBorder: "border-[#FECDD3]/70",
    cardShadow: "shadow-[0_12px_36px_rgba(190,18,60,0.08)]",
    iconColor: "text-[#BE123C]",
    textColor: "text-[#9F1239]",
    hoverRing: "group-hover:ring-[#BE123C]/30 group-hover:shadow-[0_18px_44px_rgba(190,18,60,0.16)]",
    renderIcon: () => (
      <svg
        className="w-5 h-5 text-[#BE123C] shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function ColourEverywhere() {
  return (
    <section
      id="world-of-colour"
      aria-label="The World of Colour"
      className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#0F172A] py-14 sm:py-18 lg:py-24"
    >
      {/* Background Ambience: Subtle radiant glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div className="absolute -right-24 top-6 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-[#F59E0B]/8 via-[#EF4444]/6 to-transparent blur-3xl" />
        <div className="absolute left-8 -bottom-16 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-[#3B82F6]/8 via-[#10B981]/6 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[1520px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Editorial Typography & Brand Story           */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-center">
            <Reveal>
              {/* Eyebrow Header */}
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-7 rounded-full bg-[#EA580C]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.22em] text-[#64748B]">
                  The World of Colour
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="mt-5 sm:mt-6 font-serif text-4xl sm:text-5xl lg:text-[50px] xl:text-[56px] font-normal leading-[1.08] tracking-tight text-[#0B1528]">
                An extraordinary <br />
                <span className="italic font-normal bg-gradient-to-r from-[#D97706] via-[#EA580C] to-[#BE123C] bg-clip-text text-transparent">
                  world begins
                </span>{" "}
                <span className="italic font-normal bg-gradient-to-r from-[#D97706] via-[#EA580C] to-[#BE123C] bg-clip-text text-transparent">
                  with colour.
                </span>
              </h2>

              {/* Subheadline Tagline */}
              <p className="mt-5 font-serif text-base sm:text-lg text-[#0F172A] leading-snug">
                <span>Every colour has a story. </span>
                <span className="italic text-[#1E3A8A]">Every particle has a purpose.</span>
              </p>

              {/* Description Paragraph */}
              <p className="mt-4 max-w-md text-sm sm:text-[14.5px] leading-relaxed text-[#475569]">
                From nature's inspiration to advanced formulation, we create colour solutions that bring ideas to life across industries — with consistency, performance and care.
              </p>

              {/* Primary Action Button */}
              <div className="mt-7 sm:mt-8">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-[#0E1B38] px-7 py-3.5 text-xs sm:text-[13px] font-semibold text-white shadow-md shadow-slate-900/15 transition-all duration-200 hover:bg-[#1E293B] hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Explore Our World</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Real HTML/CSS 4 Pillars System (100% Crisp) */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 xl:col-span-8 relative">
            <Reveal delay={0.15}>
              {/* Proportional Container matching 1176 x 758 reference aspect */}
              <div className="relative w-full max-w-[860px] xl:max-w-[940px] mx-auto select-none aspect-[1176/758]">
                {/* 1. Vector Wireframe Connecting Piping & Outline Paths with Flowing Animations & Particles */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  viewBox="0 0 1176 758"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <style>{`
                    @keyframes pipeStrokeFlow {
                      to {
                        stroke-dashoffset: -1200;
                      }
                    }
                    @keyframes pipeStrokeFlowReverse {
                      to {
                        stroke-dashoffset: 1200;
                      }
                    }
                    .animate-stroke-flow-1 {
                      animation: pipeStrokeFlow 20s linear infinite;
                    }
                    .animate-stroke-flow-2 {
                      animation: pipeStrokeFlow 24s linear infinite;
                    }
                    .animate-stroke-flow-3 {
                      animation: pipeStrokeFlow 22s linear infinite;
                    }
                    .animate-stroke-flow-4 {
                      animation: pipeStrokeFlow 26s linear infinite;
                    }
                    .animate-pipe-loop {
                      animation: pipeStrokeFlow 16s linear infinite;
                    }
                  `}</style>

                  <defs>
                    {/* Gradients for connecting pipes */}
                    <linearGradient id="pipeTopGreenBlue" x1="102" y1="42" x2="423" y2="42" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#15803D" />
                      <stop offset="65%" stopColor="#16A34A" />
                      <stop offset="100%" stopColor="#0284C7" />
                    </linearGradient>
                    <linearGradient id="pipeTopAmberRed" x1="648" y1="42" x2="973" y2="42" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#D97706" />
                      <stop offset="60%" stopColor="#EA580C" />
                      <stop offset="100%" stopColor="#BE123C" />
                    </linearGradient>
                    <linearGradient id="pipeBotGreen" x1="102" y1="712" x2="588" y2="712" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#15803D" />
                      <stop offset="100%" stopColor="#16A34A" />
                    </linearGradient>
                    <linearGradient id="pipeBotAmberRed" x1="765" y1="685" x2="1108" y2="685" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#D97706" />
                      <stop offset="50%" stopColor="#EA580C" />
                      <stop offset="100%" stopColor="#BE123C" />
                    </linearGradient>

                    {/* Particle Glow Filters */}
                    <filter id="glow-green" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="glow-cyan" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="glow-amber" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="glow-coral" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* ========================================================================= */}
                  {/* RECTANGULAR OUTLINE PATHS BEHIND PANELS (Definitions & Static Base Lines) */}
                  {/* ========================================================================= */}
                  {/* Panel 1 (Nature) Outline Path */}
                  <path
                    id="path-outline-nature"
                    d="M 44,105 H 266 A 24 24 0 0 1 290,129 V 608 A 24 24 0 0 1 266,632 H 44 A 24 24 0 0 1 20,608 V 129 A 24 24 0 0 1 44,105 Z"
                    fill="none"
                    stroke="#15803D"
                    strokeWidth="1.2"
                    strokeOpacity="0.22"
                  />
                  {/* Panel 1 Animated Travelling Stroke */}
                  <path
                    d="M 44,105 H 266 A 24 24 0 0 1 290,129 V 608 A 24 24 0 0 1 266,632 H 44 A 24 24 0 0 1 20,608 V 129 A 24 24 0 0 1 44,105 Z"
                    fill="none"
                    stroke="#22C55E"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeDasharray="90 320"
                    strokeOpacity="0.85"
                    className="animate-stroke-flow-1"
                  />

                  {/* Panel 2 (Science) Outline Path */}
                  <path
                    id="path-outline-science"
                    d="M 325,95 H 547 A 24 24 0 0 1 571,119 V 626 A 24 24 0 0 1 547,650 H 325 A 24 24 0 0 1 301,626 V 119 A 24 24 0 0 1 325,95 Z"
                    fill="none"
                    stroke="#0284C7"
                    strokeWidth="1.2"
                    strokeOpacity="0.22"
                  />
                  {/* Panel 2 Animated Travelling Stroke */}
                  <path
                    d="M 325,95 H 547 A 24 24 0 0 1 571,119 V 626 A 24 24 0 0 1 547,650 H 325 A 24 24 0 0 1 301,626 V 119 A 24 24 0 0 1 325,95 Z"
                    fill="none"
                    stroke="#38BDF8"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeDasharray="95 340"
                    strokeOpacity="0.85"
                    className="animate-stroke-flow-2"
                  />

                  {/* Panel 3 (Performance) Outline Path */}
                  <path
                    id="path-outline-performance"
                    d="M 606,80 H 836 A 24 24 0 0 1 860,104 V 611 A 24 24 0 0 1 836,635 H 606 A 24 24 0 0 1 582,611 V 104 A 24 24 0 0 1 606,80 Z"
                    fill="none"
                    stroke="#D97706"
                    strokeWidth="1.2"
                    strokeOpacity="0.22"
                  />
                  {/* Panel 3 Animated Travelling Stroke */}
                  <path
                    d="M 606,80 H 836 A 24 24 0 0 1 860,104 V 611 A 24 24 0 0 1 836,635 H 606 A 24 24 0 0 1 582,611 V 104 A 24 24 0 0 1 606,80 Z"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeDasharray="95 330"
                    strokeOpacity="0.85"
                    className="animate-stroke-flow-3"
                  />

                  {/* Panel 4 (Tomorrow) Outline Path */}
                  <path
                    id="path-outline-tomorrow"
                    d="M 894,85 H 1130 A 24 24 0 0 1 1154,109 V 616 A 24 24 0 0 1 1130,640 H 894 A 24 24 0 0 1 870,616 V 109 A 24 24 0 0 1 894,85 Z"
                    fill="none"
                    stroke="#BE123C"
                    strokeWidth="1.2"
                    strokeOpacity="0.22"
                  />
                  {/* Panel 4 Animated Travelling Stroke */}
                  <path
                    d="M 894,85 H 1130 A 24 24 0 0 1 1154,109 V 616 A 24 24 0 0 1 1130,640 H 894 A 24 24 0 0 1 870,616 V 109 A 24 24 0 0 1 894,85 Z"
                    fill="none"
                    stroke="#FB7185"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeDasharray="95 340"
                    strokeOpacity="0.85"
                    className="animate-stroke-flow-4"
                  />

                  {/* ========================================================================= */}
                  {/* CONNECTING PIPING LOOPS (Base Strokes + Flowing Dash Overlays)            */}
                  {/* ========================================================================= */}
                  {/* Top Green -> Blue Loop: from Card 1 up and over into Card 2 */}
                  <path
                    id="pipe-top-green-blue"
                    d="M 102 135 L 102 62 A 20 20 0 0 1 122 42 L 403 42 A 20 20 0 0 1 423 62 L 423 96"
                    stroke="url(#pipeTopGreenBlue)"
                    strokeWidth="1.85"
                    strokeOpacity="0.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 102 135 L 102 62 A 20 20 0 0 1 122 42 L 403 42 A 20 20 0 0 1 423 62 L 423 96"
                    stroke="url(#pipeTopGreenBlue)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="70 200"
                    className="animate-pipe-loop"
                  />

                  {/* Bottom Green Loop: under Card 1 & Card 2 */}
                  <path
                    id="pipe-bot-green"
                    d="M 110 635 L 110 692 A 20 20 0 0 0 130 712 L 568 712 A 20 20 0 0 0 588 692 L 588 660"
                    stroke="url(#pipeBotGreen)"
                    strokeWidth="1.85"
                    strokeOpacity="0.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 110 635 L 110 692 A 20 20 0 0 0 130 712 L 568 712 A 20 20 0 0 0 588 692 L 588 660"
                    stroke="url(#pipeBotGreen)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="80 220"
                    className="animate-pipe-loop"
                  />

                  {/* Top Amber -> Red Loop: from Card 3 up and over into Card 4 */}
                  <path
                    id="pipe-top-amber-red"
                    d="M 648 85 L 648 62 A 20 20 0 0 1 668 42 L 953 42 A 20 20 0 0 1 973 62 L 973 88"
                    stroke="url(#pipeTopAmberRed)"
                    strokeWidth="1.85"
                    strokeOpacity="0.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 648 85 L 648 62 A 20 20 0 0 1 668 42 L 953 42 A 20 20 0 0 1 973 62 L 973 88"
                    stroke="url(#pipeTopAmberRed)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="70 200"
                    className="animate-pipe-loop"
                  />

                  {/* Bottom Amber -> Red Loop: under Card 3 & Card 4 */}
                  <path
                    id="pipe-bot-amber-red"
                    d="M 765 635 L 765 665 A 20 20 0 0 0 785 685 L 1088 685 A 20 20 0 0 0 1108 665 L 1108 640"
                    stroke="url(#pipeBotAmberRed)"
                    strokeWidth="1.85"
                    strokeOpacity="0.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M 765 635 L 765 665 A 20 20 0 0 0 785 685 L 1088 685 A 20 20 0 0 0 1108 665 L 1108 640"
                    stroke="url(#pipeBotAmberRed)"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="80 220"
                    className="animate-pipe-loop"
                  />

                  {/* ========================================================================= */}
                  {/* SUBTLE MOVING PARTICLES (2–4 luminous dots per panel, soft glow)         */}
                  {/* ========================================================================= */}
                  {/* Panel 1: Nature (Leaf Green Luminous Particles) */}
                  <g>
                    {/* Dot 1 */}
                    <circle r="2.8" fill="#4ADE80" filter="url(#glow-green)" opacity="0.95">
                      <animateMotion dur="18s" repeatCount="indefinite" begin="0s">
                        <mpath href="#path-outline-nature" />
                      </animateMotion>
                    </circle>
                    {/* Dot 2 */}
                    <circle r="2.0" fill="#22C55E" filter="url(#glow-green)" opacity="0.8">
                      <animateMotion dur="18s" repeatCount="indefinite" begin="-6s">
                        <mpath href="#path-outline-nature" />
                      </animateMotion>
                    </circle>
                    {/* Dot 3 */}
                    <circle r="1.6" fill="#86EFAC" filter="url(#glow-green)" opacity="0.7">
                      <animateMotion dur="18s" repeatCount="indefinite" begin="-12s">
                        <mpath href="#path-outline-nature" />
                      </animateMotion>
                    </circle>
                  </g>

                  {/* Panel 2: Science (Cyan-Blue Luminous Particles) */}
                  <g>
                    {/* Dot 1 */}
                    <circle r="2.8" fill="#38BDF8" filter="url(#glow-cyan)" opacity="0.95">
                      <animateMotion dur="19s" repeatCount="indefinite" begin="0s">
                        <mpath href="#path-outline-science" />
                      </animateMotion>
                    </circle>
                    {/* Dot 2 */}
                    <circle r="2.1" fill="#0EA5E9" filter="url(#glow-cyan)" opacity="0.8">
                      <animateMotion dur="19s" repeatCount="indefinite" begin="-6.3s">
                        <mpath href="#path-outline-science" />
                      </animateMotion>
                    </circle>
                    {/* Dot 3 */}
                    <circle r="1.6" fill="#7DD3FC" filter="url(#glow-cyan)" opacity="0.7">
                      <animateMotion dur="19s" repeatCount="indefinite" begin="-12.6s">
                        <mpath href="#path-outline-science" />
                      </animateMotion>
                    </circle>
                  </g>

                  {/* Panel 3: Performance (Amber-Orange Luminous Particles) */}
                  <g>
                    {/* Dot 1 */}
                    <circle r="2.8" fill="#FBBF24" filter="url(#glow-amber)" opacity="0.95">
                      <animateMotion dur="20s" repeatCount="indefinite" begin="0s">
                        <mpath href="#path-outline-performance" />
                      </animateMotion>
                    </circle>
                    {/* Dot 2 */}
                    <circle r="2.0" fill="#F59E0B" filter="url(#glow-amber)" opacity="0.8">
                      <animateMotion dur="20s" repeatCount="indefinite" begin="-6.6s">
                        <mpath href="#path-outline-performance" />
                      </animateMotion>
                    </circle>
                    {/* Dot 3 */}
                    <circle r="1.6" fill="#FDE68A" filter="url(#glow-amber)" opacity="0.7">
                      <animateMotion dur="20s" repeatCount="indefinite" begin="-13.3s">
                        <mpath href="#path-outline-performance" />
                      </animateMotion>
                    </circle>
                  </g>

                  {/* Panel 4: Tomorrow (Muted Coral-Red Luminous Particles) */}
                  <g>
                    {/* Dot 1 */}
                    <circle r="2.8" fill="#FB7185" filter="url(#glow-coral)" opacity="0.95">
                      <animateMotion dur="21s" repeatCount="indefinite" begin="0s">
                        <mpath href="#path-outline-tomorrow" />
                      </animateMotion>
                    </circle>
                    {/* Dot 2 */}
                    <circle r="2.0" fill="#F43F5E" filter="url(#glow-coral)" opacity="0.8">
                      <animateMotion dur="21s" repeatCount="indefinite" begin="-7s">
                        <mpath href="#path-outline-tomorrow" />
                      </animateMotion>
                    </circle>
                    {/* Dot 3 */}
                    <circle r="1.6" fill="#FECDD3" filter="url(#glow-coral)" opacity="0.7">
                      <animateMotion dur="21s" repeatCount="indefinite" begin="-14s">
                        <mpath href="#path-outline-tomorrow" />
                      </animateMotion>
                    </circle>
                  </g>

                  {/* Connecting Loops Particles (Flowing between the pillars) */}
                  {/* Top Loop Green -> Blue: 2 Particles */}
                  <circle r="2.4" fill="#34D399" filter="url(#glow-green)" opacity="0.9">
                    <animateMotion dur="12s" repeatCount="indefinite" begin="0s">
                      <mpath href="#pipe-top-green-blue" />
                    </animateMotion>
                  </circle>
                  <circle r="1.8" fill="#38BDF8" filter="url(#glow-cyan)" opacity="0.85">
                    <animateMotion dur="12s" repeatCount="indefinite" begin="-6s">
                      <mpath href="#pipe-top-green-blue" />
                    </animateMotion>
                  </circle>

                  {/* Bottom Loop Green: 2 Particles */}
                  <circle r="2.2" fill="#22C55E" filter="url(#glow-green)" opacity="0.85">
                    <animateMotion dur="14s" repeatCount="indefinite" begin="0s">
                      <mpath href="#pipe-bot-green" />
                    </animateMotion>
                  </circle>
                  <circle r="1.7" fill="#86EFAC" filter="url(#glow-green)" opacity="0.75">
                    <animateMotion dur="14s" repeatCount="indefinite" begin="-7s">
                      <mpath href="#pipe-bot-green" />
                    </animateMotion>
                  </circle>

                  {/* Top Loop Amber -> Red: 2 Particles */}
                  <circle r="2.4" fill="#F59E0B" filter="url(#glow-amber)" opacity="0.9">
                    <animateMotion dur="13s" repeatCount="indefinite" begin="0s">
                      <mpath href="#pipe-top-amber-red" />
                    </animateMotion>
                  </circle>
                  <circle r="1.8" fill="#FB7185" filter="url(#glow-coral)" opacity="0.85">
                    <animateMotion dur="13s" repeatCount="indefinite" begin="-6.5s">
                      <mpath href="#pipe-top-amber-red" />
                    </animateMotion>
                  </circle>

                  {/* Bottom Loop Amber -> Red: 2 Particles */}
                  <circle r="2.2" fill="#EA580C" filter="url(#glow-amber)" opacity="0.85">
                    <animateMotion dur="15s" repeatCount="indefinite" begin="0s">
                      <mpath href="#pipe-bot-amber-red" />
                    </animateMotion>
                  </circle>
                  <circle r="1.7" fill="#FDA4AF" filter="url(#glow-coral)" opacity="0.75">
                    <animateMotion dur="15s" repeatCount="indefinite" begin="-7.5s">
                      <mpath href="#pipe-bot-amber-red" />
                    </animateMotion>
                  </circle>
                </svg>

                {/* 2. Four Pillars Cards Container (100% Vector Headers + Crisp High-Res Photos) */}
                <div className="absolute inset-0 z-20">
                  {/* Card 1: INSPIRED BY NATURE */}
                  <a
                    href="#science"
                    aria-label="Inspired by Nature — Sourcing pure natural and nature-identical pigments"
                    style={{
                      left: "1.7%",
                      top: "13.8%",
                      width: "23.0%",
                      height: "69.5%",
                    }}
                    className="group absolute flex flex-col rounded-[22px] sm:rounded-[26px] bg-gradient-to-b from-[#EDF7EE]/95 via-[#E6F4EA]/80 to-[#D4EEDC]/45 border border-[#BCE4C7]/80 shadow-[0_12px_36px_rgba(22,101,52,0.08)] p-2.5 sm:p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(22,101,52,0.18)] hover:border-[#15803D]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#15803D]"
                  >
                    {/* Header: Crisp SVG Leaf + Crisp Vector Text */}
                    <div className="flex items-center gap-2 sm:gap-2.5 px-1 py-1 sm:py-1.5 shrink-0">
                      <div className="shrink-0">{PILLARS[0].renderIcon()}</div>
                      <div className="text-[9px] sm:text-[10px] xl:text-[11px] font-bold tracking-[0.07em] uppercase text-[#14532D] leading-[1.18]">
                        Inspired<br />by nature
                      </div>
                    </div>
                    {/* Nested Image Frame: High-Res Crystal-Clear Photography */}
                    <div className="mt-1.5 sm:mt-2 relative w-full flex-1 rounded-[16px] sm:rounded-[20px] overflow-hidden border border-white/70 shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-emerald-950/5">
                      <img
                        src={PILLARS[0].image}
                        alt={PILLARS[0].alt}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="eager"
                      />
                    </div>
                  </a>

                  {/* Card 2: DRIVEN BY SCIENCE */}
                  <a
                    href="#science"
                    aria-label="Driven by Science — State-of-the-art analytical testing and purity verification"
                    style={{
                      left: "25.6%",
                      top: "12.5%",
                      width: "23.0%",
                      height: "73.2%",
                    }}
                    className="group absolute flex flex-col rounded-[22px] sm:rounded-[26px] bg-gradient-to-b from-[#EDF6FD]/95 via-[#E0F2FE]/80 to-[#BAE6FD]/45 border border-[#BAE6FD]/80 shadow-[0_12px_36px_rgba(2,132,199,0.08)] p-2.5 sm:p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(2,132,199,0.18)] hover:border-[#0284C7]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]"
                  >
                    {/* Header: Crisp SVG Flask + Crisp Vector Text */}
                    <div className="flex items-center gap-2 sm:gap-2.5 px-1 py-1 sm:py-1.5 shrink-0">
                      <div className="shrink-0">{PILLARS[1].renderIcon()}</div>
                      <div className="text-[9px] sm:text-[10px] xl:text-[11px] font-bold tracking-[0.07em] uppercase text-[#0369A1] leading-[1.18]">
                        Driven<br />by science
                      </div>
                    </div>
                    {/* Nested Image Frame: High-Res Crystal-Clear Photography */}
                    <div className="mt-1.5 sm:mt-2 relative w-full flex-1 rounded-[16px] sm:rounded-[20px] overflow-hidden border border-white/70 shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-sky-950/5">
                      <img
                        src={PILLARS[1].image}
                        alt={PILLARS[1].alt}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="eager"
                      />
                    </div>
                  </a>

                  {/* Card 3: ENGINEERED FOR PERFORMANCE */}
                  <a
                    href="#industries"
                    aria-label="Engineered for Performance — Superior dispersion, heat stability, and lightfastness"
                    style={{
                      left: "49.5%",
                      top: "10.5%",
                      width: "23.6%",
                      height: "73.2%",
                    }}
                    className="group absolute flex flex-col rounded-[22px] sm:rounded-[26px] bg-gradient-to-b from-[#FFF9EE]/95 via-[#FEF3C7]/80 to-[#FDE68A]/45 border border-[#FDE68A]/80 shadow-[0_12px_36px_rgba(217,119,6,0.08)] p-2.5 sm:p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(217,119,6,0.18)] hover:border-[#D97706]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706]"
                  >
                    {/* Header: Crisp SVG Gear + Crisp Vector Text */}
                    <div className="flex items-center gap-2 sm:gap-2.5 px-1 py-1 sm:py-1.5 shrink-0">
                      <div className="shrink-0">{PILLARS[2].renderIcon()}</div>
                      <div className="text-[9px] sm:text-[10px] xl:text-[11px] font-bold tracking-[0.07em] uppercase text-[#9A3412] leading-[1.18]">
                        Engineered<br />for performance
                      </div>
                    </div>
                    {/* Nested Image Frame: High-Res Crystal-Clear Photography */}
                    <div className="mt-1.5 sm:mt-2 relative w-full flex-1 rounded-[16px] sm:rounded-[20px] overflow-hidden border border-white/70 shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-amber-950/5">
                      <img
                        src={PILLARS[2].image}
                        alt={PILLARS[2].alt}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="eager"
                      />
                    </div>
                  </a>

                  {/* Card 4: CREATED FOR A BRIGHTER TOMORROW */}
                  <a
                    href="#quality"
                    aria-label="Created for a Brighter Tomorrow — Sustainable, safe, and globally compliant colour solutions"
                    style={{
                      left: "74.0%",
                      top: "11.2%",
                      width: "24.2%",
                      height: "73.2%",
                    }}
                    className="group absolute flex flex-col rounded-[22px] sm:rounded-[26px] bg-gradient-to-b from-[#FFF2F4]/95 via-[#FFE4E6]/80 to-[#FECDD3]/45 border border-[#FECDD3]/80 shadow-[0_12px_36px_rgba(190,18,60,0.08)] p-2.5 sm:p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(190,18,60,0.18)] hover:border-[#BE123C]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#BE123C]"
                  >
                    {/* Header: Crisp SVG Users + Crisp Vector Text */}
                    <div className="flex items-center gap-2 sm:gap-2.5 px-1 py-1 sm:py-1.5 shrink-0">
                      <div className="shrink-0">{PILLARS[3].renderIcon()}</div>
                      <div className="text-[9px] sm:text-[10px] xl:text-[11px] font-bold tracking-[0.07em] uppercase text-[#9F1239] leading-[1.18]">
                        Created for a<br />brighter tomorrow
                      </div>
                    </div>
                    {/* Nested Image Frame: High-Res Crystal-Clear Photography */}
                    <div className="mt-1.5 sm:mt-2 relative w-full flex-1 rounded-[16px] sm:rounded-[20px] overflow-hidden border border-white/70 shadow-[0_4px_16px_rgba(0,0,0,0.06)] bg-rose-950/5">
                      <img
                        src={PILLARS[3].image}
                        alt={PILLARS[3].alt}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                        loading="eager"
                      />
                    </div>
                  </a>

                  {/* 3. Overlapping Frosted Glass Pills (From User Reference Design) */}
                  {/* Teal/Cyan pill overlapping bottom of Card 1 & Card 2 */}
                  <div
                    aria-hidden="true"
                    style={{
                      left: "17.0%",
                      top: "75.0%",
                      width: "19.5%",
                      height: "12.8%",
                    }}
                    className="pointer-events-none absolute z-30 rounded-xl sm:rounded-2xl bg-gradient-to-r from-emerald-600/35 via-teal-600/45 to-sky-600/40 backdrop-blur-md border border-white/30 shadow-[0_8px_24px_rgba(13,148,136,0.22)]"
                  />

                  {/* Amber/Peach soft accent glow overlapping Card 3 & Card 4 */}
                  <div
                    aria-hidden="true"
                    style={{
                      left: "55.0%",
                      top: "81.0%",
                      width: "18.5%",
                      height: "11.0%",
                    }}
                    className="pointer-events-none absolute z-30 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500/25 via-orange-500/28 to-rose-500/20 backdrop-blur-sm border border-white/20 shadow-[0_8px_24px_rgba(234,88,12,0.12)]"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

