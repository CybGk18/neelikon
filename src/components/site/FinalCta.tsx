import { Link } from "@tanstack/react-router";
import { ArrowRight, FlaskConical, MessageCircle, Settings2 } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-[#FAF7F2] text-[#0F172A] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Silky Fluid Wave Ribbons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft radial glow */}
        <div
          className="absolute -top-24 left-1/3 h-96 w-96 rounded-full blur-3xl opacity-40 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(254, 215, 170, 0.8) 0%, rgba(250, 247, 242, 0) 70%)",
          }}
        />

        {/* Liquid Wave SVG Ribbons */}
        <svg
          className="absolute inset-0 h-full w-full opacity-60"
          preserveAspectRatio="none"
          viewBox="0 0 1440 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="peachWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDBA74" stopOpacity="0" />
              <stop offset="40%" stopColor="#FED7AA" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#FDBA74" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FDE68A" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="cyanWave" x1="0%" y1="50%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
              <stop offset="45%" stopColor="#7DD3FC" stopOpacity="0.45" />
              <stop offset="75%" stopColor="#BAE6FD" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Upper Peach Fluid Ribbon */}
          <path
            d="M 350 -50 C 550 50, 720 120, 950 220 C 1120 300, 1300 380, 1460 420 L 1460 -50 Z"
            fill="url(#peachWave)"
          />

          {/* Lower Cerulean / Cyan Fluid Ribbon */}
          <path
            d="M 450 550 C 620 440, 780 340, 960 330 C 1120 320, 1280 380, 1460 450 L 1460 550 Z"
            fill="url(#cyanWave)"
          />
        </svg>
      </div>

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Typography, Actions, and Feature Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <Reveal>
              {/* Eyebrow Header */}
              <div className="flex items-center gap-2.5">
                <span className="h-[2.5px] w-8 rounded-full bg-[#3B82F6]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#2563EB]">
                  Start a conversation
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="mt-5 text-3xl sm:text-4xl md:text-[44px] lg:text-[46px] font-bold tracking-tight text-[#0F172A] leading-[1.14]">
                Have a colour challenge? <br />
                <span className="font-serif italic font-normal inline-block mt-1">
                  <span className="bg-gradient-to-r from-[#1D63D2] via-[#2F80ED] to-[#38BDF8] bg-clip-text text-transparent">
                    Let's solve
                  </span>{" "}
                  <span className="text-[#1E3A8A]">it</span>{" "}
                  <span className="text-[#F95721]">together.</span>
                </span>
              </h2>

              {/* Subtext Paragraph */}
              <p className="mt-5 max-w-xl text-[15px] sm:text-base leading-relaxed text-[#475569]">
                Tell us about your application and requirements. Our team can help you explore the
                right colour solutions for your products.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#F95721] to-[#FF6B35] px-7 py-3.5 text-sm sm:text-[15px] font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-200 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>

                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#0F172A]/85 bg-white/70 px-7 py-3.5 text-sm sm:text-[15px] font-semibold text-[#0F172A] shadow-sm backdrop-blur-xs transition-all duration-200 hover:border-[#0F172A] hover:bg-white hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Three Feature Badges with Vertical Dividers */}
              <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-6 sm:gap-7 lg:gap-8 pt-2">
                {/* Badge 1: Discuss your application */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D5E6F7] bg-[#EAF3FA] text-[#1E40AF] shadow-xs">
                    <MessageCircle className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <div className="text-xs sm:text-[13px] font-medium leading-tight text-[#334155]">
                    <div>Discuss your</div>
                    <div>application</div>
                  </div>
                </div>

                {/* Divider 1 */}
                <div className="hidden sm:block h-8 w-px bg-slate-200/90" aria-hidden="true" />

                {/* Badge 2: Get expert recommendations */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FDE7C9] bg-[#FEF5E7] text-[#D97706] shadow-xs">
                    <FlaskConical className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <div className="text-xs sm:text-[13px] font-medium leading-tight text-[#334155]">
                    <div>Get expert</div>
                    <div>recommendations</div>
                  </div>
                </div>

                {/* Divider 2 */}
                <div className="hidden sm:block h-8 w-px bg-slate-200/90" aria-hidden="true" />

                {/* Badge 3: Find the right colour solution */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FBD6D3] bg-[#FDECEB] text-[#EA580C] shadow-xs">
                    <Settings2 className="h-5 w-5" strokeWidth={2.2} />
                  </div>
                  <div className="text-xs sm:text-[13px] font-medium leading-tight text-[#334155]">
                    <div>Find the right</div>
                    <div>colour solution</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: High-Purity Pigment Dishes & Planetary Orbital Arc */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
            <Reveal delay={0.15} className="relative w-full max-w-[540px] xl:max-w-[580px]">
              <div className="relative">
                <img
                  src="/images/cta/cta-visual.png"
                  alt="Neelikon colour pigment testing in laboratory Petri dishes with planetary orbital arc"
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-700 hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
