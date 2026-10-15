import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { ArrowDown, ArrowRight, Mail, MapPin, Phone, Activity, FlaskConical, Microscope, Network, Settings, ShieldCheck, Globe, Users, Handshake, Play } from "lucide-react";
import { useRef } from "react";
import lab from "@/assets/lab.jpg";
import globe from "@/assets/globe.jpg";
import { ABOUT_IMG, CERT_LABELS, CERT_LOGOS, CONTACT, NEWS } from "@/lib/content";
import { EASE, MaskImage, Reveal, SafeImg } from "@/components/site/Reveal";
import { ProductUniverse } from "@/components/site/ProductUniverse";
import { SpectrumDivider } from "@/components/site/SpectrumDivider";
import { FinalCta } from "@/components/site/FinalCta";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { HeroRedesign } from "@/components/site/HeroRedesign";
import { ColourEverywhere } from "@/components/site/ColourEverywhere";
import { MomentsFromNeelikon } from "@/components/site/MomentsFromNeelikon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Neelikon — Colour, Engineered. Food, Pharma & Cosmetic Colourants" },
      { name: "description", content: "Neelikon manufactures high-purity food colours, pharmaceutical colourants, cosmetic pigments and specialty dyes for customers in 100+ countries since 1983." },
      { property: "og:title", content: "Neelikon — Colour, Engineered. For a World in Motion." },
      { property: "og:description", content: "High-purity colourants for food, pharmaceutical, cosmetic and industrial applications, from Mumbai to 100+ countries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main>
      <HeroRedesign />
      <ColourEverywhere />
      <SpectrumDivider />
      <ProductUniverse />
      <Industries />
      <Science />
      <Global />
      <Quality />
      <Testimonial />
      <div className="bg-card"><SpectrumDivider /></div>
      <MomentsFromNeelikon />
      <FinalCta />
      <Contact />
    </main>
  );
}
const INDUSTRIES_DATA = [
  {
    num: "01",
    title: "Food & Beverages",
    desc: "Colour solutions developed for food applications, with a focus on quality, consistency, and application requirements.",
    slug: "natural-food",
    mainImg: "/images/industries/food-main.png",
    accentImg: "/images/industries/food-accent.png",
    color: "#e86024",
    type: "split-with-accent" as const,
  },
  {
    num: "02",
    title: "Pharmaceuticals",
    desc: "Specialised colourants supported by analytical testing and quality-focused processes.",
    slug: "pharma",
    mainImg: "/images/industries/pharma-main.png",
    color: "#0284c7",
    type: "panoramic-right" as const,
  },
  {
    num: "03",
    title: "Cosmetics & Personal Care",
    desc: "Colour technologies for cosmetic and personal-care formulations.",
    slug: "cosmetic",
    mainImg: "/images/industries/cosmetics-main.png",
    accentImg: "/images/industries/cosmetics-accent.png",
    color: "#e11d48",
    type: "split-with-accent" as const,
  },
  {
    num: "04",
    title: "Specialty & Industrial",
    desc: "Specialty fluorescent dyes and colourants for diverse industrial applications.",
    slug: "fluorescent",
    mainImg: "/images/industries/specialty-main.png",
    color: "#2563eb",
    type: "panoramic-right" as const,
  },
];

function Industries() {
  return (
    <section id="industries" className="scroll-mt-20 bg-[#FAF7F2] pt-6 sm:pt-8 lg:pt-10 pb-8 sm:pb-10 lg:pb-12 overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 rounded-full bg-[#e86024]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#64748b]">Industries</p>
          </div>
          <h2 className="display mt-4 max-w-4xl fs-section text-[#0f172a]">
            Four worlds. One standard.
          </h2>
        </Reveal>

        <div className="mt-16 sm:mt-20 space-y-16 sm:space-y-20 lg:space-y-24">
          {INDUSTRIES_DATA.map((item, i) => {
            if (item.type === "split-with-accent") {
              return (
                <article
                  key={item.title}
                  className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8"
                >
                  <Reveal className="lg:col-span-6">
                    <div className="group overflow-hidden rounded-2xl transition-all duration-500">
                      <img
                        src={item.mainImg}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                      />
                    </div>
                  </Reveal>

                  <Reveal className="lg:col-span-4 lg:pl-2" delay={0.1}>
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-sm font-bold" style={{ color: item.color }}>
                        {item.num}
                      </span>
                      <span
                        className="h-[1.5px] w-6"
                        style={{ backgroundColor: `${item.color}55` }}
                      />
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-medium text-[#0f172a] leading-tight tracking-tight mt-2.5">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[#64748b] leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                    <Link
                      to="/products/$slug"
                      params={{ slug: item.slug }}
                      className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0f172a] transition-colors"
                      style={{ ["--hover-color" as string]: item.color }}
                    >
                      <span className="group-hover:text-[var(--hover-color)] transition-colors">
                        Explore products
                      </span>
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1.5"
                        style={{ color: item.color }}
                      />
                    </Link>
                  </Reveal>

                  <Reveal
                    className="hidden lg:col-span-2 lg:flex items-center justify-end"
                    delay={0.2}
                  >
                    <div className="transition-transform duration-500 hover:scale-105">
                      <img
                        src={item.accentImg}
                        alt=""
                        aria-hidden="true"
                        className="w-full max-w-[190px] h-auto object-contain"
                      />
                    </div>
                  </Reveal>
                </article>
              );
            }

            return (
              <article
                key={item.title}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-8"
              >
                <Reveal className="order-2 lg:order-1 lg:col-span-4" delay={0.1}>
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-sm font-bold" style={{ color: item.color }}>
                      {item.num}
                    </span>
                    <span
                      className="h-[1.5px] w-6"
                      style={{ backgroundColor: `${item.color}55` }}
                    />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-medium text-[#0f172a] leading-tight tracking-tight mt-2.5">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-[#64748b] leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                  <Link
                    to="/products/$slug"
                    params={{ slug: item.slug }}
                    className="group mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0f172a] transition-colors"
                    style={{ ["--hover-color" as string]: item.color }}
                  >
                    <span className="group-hover:text-[var(--hover-color)] transition-colors">
                      Explore products
                    </span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1.5"
                      style={{ color: item.color }}
                    />
                  </Link>
                </Reveal>

                <Reveal className="order-1 lg:order-2 lg:col-span-8">
                  <div className="group overflow-hidden rounded-2xl transition-all duration-500">
                    <img
                      src={item.mainImg}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                    />
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const SCIENCE_CAPS = [
  {
    tag: "R&D / 01",
    title: "Research & development",
    desc: "Innovative colour solutions through continuous research and development.",
    badgeBg: "bg-[#0284c7]",
    tagColor: "text-[#0284c7]",
    icon: Microscope,
    watermark: "/images/science/card-1-watermark.png",
  },
  {
    tag: "R&D / 02",
    title: "HPLC – High-performance liquid chromatography",
    desc: "Precise analysis for consistent quality and performance.",
    badgeBg: "bg-[#ea580c]",
    tagColor: "text-[#ea580c]",
    icon: Activity,
    watermark: "/images/science/card-2-watermark.png",
  },
  {
    tag: "R&D / 03",
    title: "Ion chromatography",
    desc: "Accurate detection for superior colour formulation.",
    badgeBg: "bg-[#7c3aed]",
    tagColor: "text-[#7c3aed]",
    icon: Network,
    watermark: "/images/science/card-3-watermark.png",
  },
  {
    tag: "R&D / 04",
    title: "Gas chromatography",
    desc: "Reliable testing for purity and composition.",
    badgeBg: "bg-[#059669]",
    tagColor: "text-[#059669]",
    icon: FlaskConical,
    watermark: "/images/science/card-4-watermark.png",
  },
  {
    tag: "R&D / 05",
    title: "ICP-OES analytical instrumentation",
    desc: "Advanced elemental analysis for complete quality assurance.",
    badgeBg: "bg-[#f59e0b]",
    tagColor: "text-[#d97706]",
    icon: Settings,
    watermark: "/images/science/card-5-watermark.png",
  },
  {
    tag: "R&D / 06",
    title: "Product quality & testing processes",
    desc: "Rigorous testing to ensure colour consistency and reliability.",
    badgeBg: "bg-[#0284c7]",
    tagColor: "text-[#0284c7]",
    icon: ShieldCheck,
    watermark: "/images/science/card-6-watermark.png",
  },
];

function Science() {
  return (
    <section id="innovation" className="scroll-mt-20 bg-[#FAF7F2] pt-6 sm:pt-8 lg:pt-10 pb-20 sm:pb-28 lg:py-32 overflow-hidden text-[#0F172A] relative">
      {/* Subtle concentric vector contour rings matching the mockup background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[550px] h-[550px] -translate-x-1/4 -translate-y-1/4 rounded-full border border-slate-300/35" />
        <div className="absolute top-0 left-0 w-[820px] h-[820px] -translate-x-1/4 -translate-y-1/4 rounded-full border border-slate-300/25" />
        <div className="absolute top-0 left-0 w-[1100px] h-[1100px] -translate-x-1/4 -translate-y-1/4 rounded-full border border-slate-300/15" />
      </div>

      <div className="container-x relative z-10">
        {/* Top Header & Laboratory Hero Composition */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-6 xl:col-span-5">
            <div className="flex items-center gap-2.5">
              <span className="h-[2px] w-6 bg-[#0284c7] rounded-full" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#64748b]">
                Science meets precision
              </p>
            </div>
            <h2 className="mt-4 font-extrabold tracking-tight text-[#0f172a] text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.06]">
              Beautiful colour.
              <span className="block font-serif font-normal italic text-[#ea580c] mt-1 text-4xl sm:text-5xl lg:text-[3.75rem]">
                Serious science.
              </span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-[#64748b] leading-relaxed max-w-lg">
              Behind every colourant is a commitment to analytical rigour, product consistency, and continuous improvement.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-6 xl:col-span-7 flex items-center justify-center lg:justify-end" delay={0.15}>
            <div className="relative w-full max-w-[640px] lg:max-w-none flex items-center justify-center lg:justify-end">
              <img
                src="/images/science/lab-composition.png"
                alt="Analytical laboratory with HPLC instrumentation and chemical colour testing"
                loading="lazy"
                className="w-full h-auto max-h-[440px] lg:max-h-[500px] object-contain select-none pointer-events-none drop-shadow-[0_15px_35px_rgba(35,58,133,0.04)]"
                style={{
                  maskImage: "radial-gradient(ellipse at 65% 50%, black 65%, rgba(0,0,0,0.7) 82%, transparent 98%)",
                  WebkitMaskImage: "radial-gradient(ellipse at 65% 50%, black 65%, rgba(0,0,0,0.7) 82%, transparent 98%)",
                }}
              />
            </div>
          </Reveal>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="mt-14 sm:mt-18 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SCIENCE_CAPS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={idx * 0.07}>
                <div className="group relative h-full rounded-2xl bg-white border border-slate-100/90 p-6 sm:p-7 shadow-[0_4px_25px_rgba(0,0,0,0.025)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[165px]">
                  {/* Subtle right-side watermark graphic matching the design */}
                  <div className="absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none select-none overflow-hidden">
                    <img
                      src={card.watermark}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-contain object-right opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />
                  </div>

                  {/* Top: Icon & Step Tag */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-full ${card.badgeBg} flex items-center justify-center text-white shadow-sm shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-mono text-xs font-bold tracking-wider ${card.tagColor}`}>
                        {card.tag}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-base sm:text-[1.1rem] font-bold text-[#0f172a] mt-3.5 leading-snug tracking-tight pr-6">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-[#64748b] leading-relaxed max-w-[260px] sm:max-w-[280px]">
                      {card.desc}
                    </p>
                  </div>

                  {/* Bottom-right interactive action circle */}
                  <div className="relative z-10 mt-5 flex justify-end">
                    <div className="w-8 h-8 rounded-full border border-slate-200 bg-white/90 backdrop-blur-sm flex items-center justify-center text-slate-500 group-hover:border-[#0284c7] group-hover:text-[#0284c7] group-hover:translate-x-0.5 transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Global() {
  return (
    <section className="relative overflow-hidden bg-[#FAF6F0] py-20 lg:py-24 text-slate-900">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: "radial-gradient(ellipse at 80% 35%, rgba(195, 220, 245, 0.45) 0%, rgba(250, 246, 240, 0) 65%)",
        }}
      />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Editorial Information */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-between">
            <Reveal>
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 text-xs font-semibold tracking-widest uppercase text-slate-500">
                <span className="h-px w-6 bg-slate-400" />
                <span>GLOBAL REACH</span>
                <span className="text-slate-300">|</span>
                <span>HEADQUARTERED IN MUMBAI</span>
              </div>

              {/* Main Heading */}
              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.25rem] leading-[1.12]">
                Rooted in India.{" "}
                <span className="block mt-1 font-serif italic font-normal text-blue-700">
                  Connected to the world.
                </span>
              </h2>

              {/* Paragraph */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-lg">
                Serving customers across 100+ countries, supported by international business and distribution partnerships.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0A1128] px-6 py-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Let's Work Together
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300/80 bg-white/70 backdrop-blur-sm px-6 py-3.5 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-white hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                >
                  Our Global Presence
                  <Play className="h-3.5 w-3.5 fill-current text-slate-700 ml-0.5" />
                </Link>
              </div>

              {/* Frosted Stats Card */}
              <div className="mt-12 rounded-2xl border border-white/80 bg-white/80 p-5 sm:p-6 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/[0.03]">
                <div className="grid grid-cols-3 divide-x divide-slate-200/70">
                  {/* Stat 1 */}
                  <div className="pr-3 sm:pr-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                      <Globe className="h-4.5 w-4.5" />
                    </div>
                    <div className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">100+</div>
                    <div className="text-xs font-medium text-slate-500 mt-0.5">Countries Served</div>
                  </div>

                  {/* Stat 2 */}
                  <div className="px-3 sm:px-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                      <Users className="h-4.5 w-4.5" />
                    </div>
                    <div className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Global</div>
                    <div className="text-xs font-medium text-slate-500 mt-0.5">Distribution Partnerships</div>
                  </div>

                  {/* Stat 3 */}
                  <div className="pl-3 sm:pl-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                      <Handshake className="h-4.5 w-4.5" />
                    </div>
                    <div className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Trusted</div>
                    <div className="text-xs font-medium text-slate-500 mt-0.5">By Customers Worldwide</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Globe Visual */}
          <div className="lg:col-span-6 xl:col-span-7 relative flex items-center justify-center">
            <Reveal delay={0.2} className="relative w-full">
              <div className="relative overflow-hidden rounded-2xl select-none">
                <img
                  src="/images/global/global-globe-art.png"
                  alt="Neelikon Global Presence — 100+ countries connected across North America, Europe, Middle East, Africa, Asia Pacific, and Australia"
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-700 hover:scale-[1.01]"
                  loading="lazy"
                />

                {/* Continental Destination Pill Labels */}
                <div
                  className="absolute left-[33%] top-[19.5%] -translate-y-1/2 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-slate-800 shadow-md ring-1 ring-black/5 backdrop-blur-xs transition-transform duration-300 hover:scale-105"
                  title="Europe Hub"
                >
                  <span className="h-2 w-2 rounded-full bg-blue-600 shadow-xs shadow-blue-500" />
                  <span>EUROPE</span>
                </div>

                <div
                  className="absolute left-[74%] top-[19%] -translate-y-1/2 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-slate-800 shadow-md ring-1 ring-black/5 backdrop-blur-xs transition-transform duration-300 hover:scale-105"
                  title="Middle East Hub"
                >
                  <span className="h-2 w-2 rounded-full bg-amber-500 shadow-xs shadow-amber-500" />
                  <span>MIDDLE EAST</span>
                </div>

                <div
                  className="absolute left-[87%] top-[39.5%] -translate-y-1/2 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-slate-800 shadow-md ring-1 ring-black/5 backdrop-blur-xs transition-transform duration-300 hover:scale-105"
                  title="Asia Pacific Hub"
                >
                  <span className="h-2 w-2 rounded-full bg-purple-600 shadow-xs shadow-purple-500" />
                  <span>ASIA PACIFIC</span>
                </div>

                <div
                  className="absolute left-[84%] top-[68.5%] -translate-y-1/2 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-slate-800 shadow-md ring-1 ring-black/5 backdrop-blur-xs transition-transform duration-300 hover:scale-105"
                  title="Australia Hub"
                >
                  <span className="h-2 w-2 rounded-full bg-sky-600 shadow-xs shadow-sky-500" />
                  <span>AUSTRALIA</span>
                </div>

                <div
                  className="absolute left-[38%] top-[64.5%] -translate-y-1/2 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-slate-800 shadow-md ring-1 ring-black/5 backdrop-blur-xs transition-transform duration-300 hover:scale-105"
                  title="Africa Hub"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-600 shadow-xs shadow-emerald-500" />
                  <span>AFRICA</span>
                </div>

                <div
                  className="absolute left-[23%] top-[45.5%] -translate-y-1/2 hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold tracking-wider text-slate-800 shadow-md ring-1 ring-black/5 backdrop-blur-xs transition-transform duration-300 hover:scale-105"
                  title="North America Hub"
                >
                  <span className="h-2 w-2 rounded-full bg-rose-600 shadow-xs shadow-rose-500" />
                  <span>NORTH AMERICA</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const CERT_PILLS_ROW1 = [
  { label: "ISO 9001", bg: "bg-[#EAF2FC]", border: "border-[#D6E4F7]", text: "text-slate-800" },
  { label: "ISO 14001", bg: "bg-[#EBF7F2]", border: "border-[#D4EFE4]", text: "text-slate-800" },
  { label: "ISO 45001", bg: "bg-[#FEF8EC]", border: "border-[#FCECCE]", text: "text-slate-800" },
  { label: "FSSC 22000", bg: "bg-[#FDF0F3]", border: "border-[#F8DCE2]", text: "text-slate-800" },
  { label: "GMP", bg: "bg-[#F4F1FD]", border: "border-[#E5DEFA]", text: "text-slate-800" },
  { label: "REACH", bg: "bg-[#EAF6FE]", border: "border-[#D2ECFC]", text: "text-slate-800" },
];

const CERT_PILLS_ROW2 = [
  { label: "Halal", bg: "bg-[#EAF7F4]", border: "border-[#D2EFE9]", text: "text-slate-800" },
  { label: "Kosher", bg: "bg-[#FEF7EC]", border: "border-[#FCEACE]", text: "text-slate-800" },
  { label: "Sedex", bg: "bg-[#FDF0F3]", border: "border-[#F8DCE2]", text: "text-slate-800" },
  { label: "EcoVadis", bg: "bg-[#F3EFFC]", border: "border-[#E4DCF9]", text: "text-slate-800" },
  { label: "US-FDA", bg: "bg-[#EAF3FC]", border: "border-[#D2E4F9]", text: "text-slate-800" },
  { label: "NABL", bg: "bg-[#FEF8EB]", border: "border-[#FCECCD]", text: "text-slate-800" },
];

const QUALITY_CARDS = [
  {
    title: "ISO 9001",
    subtitle: "Quality Management",
    dot: "bg-blue-600",
    logo: "/images/quality/official-iso9001.png",
  },
  {
    title: "ISO 14001",
    subtitle: "Environmental Management",
    dot: "bg-emerald-600",
    logo: "/images/quality/official-iso14001.png",
  },
  {
    title: "ISO 45001",
    subtitle: "Occupational Health & Safety",
    dot: "bg-amber-500",
    logo: "/images/quality/official-iso45001.png",
  },
  {
    title: "NABL",
    subtitle: "Testing & Calibration",
    dot: "bg-purple-600",
    logo: "/images/quality/official-nabl.png",
  },
  {
    title: "EcoVadis",
    subtitle: "Sustainability Rating",
    dot: "bg-emerald-600",
    logo: "/images/quality/official-ecovadis.jpg",
  },
  {
    title: "US-FDA",
    subtitle: "Compliant Colours",
    dot: "bg-blue-600",
    logo: "/images/quality/official-usfda.jpg",
  },
];

function Quality() {
  return (
    <section id="quality" className="relative scroll-mt-20 overflow-hidden bg-[#FAF7F2] py-20 lg:py-28 text-slate-900">
      {/* Subtle top-right pigment dust spray */}
      <img
        src="/images/quality/dust-clean.png"
        alt=""
        className="pointer-events-none absolute top-0 right-0 w-36 sm:w-48 lg:w-56 select-none opacity-85"
        aria-hidden
      />

      {/* Gentle bottom-right warm champagne ambiance */}
      <div
        className="pointer-events-none absolute -bottom-10 right-0 h-48 w-96 rounded-full bg-gradient-to-t from-amber-200/25 via-amber-100/10 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="container-x relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 items-start">
          {/* Left Column: Eyebrow, Heading, Description, and Laboratory Visual */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <Reveal>
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="h-0.5 w-6 bg-slate-900" />
                <span>QUALITY CREDENTIALS</span>
              </div>

              {/* Main Heading */}
              <h2 className="mt-4 text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-slate-950 font-sans leading-[1.08]">
                Quality has{" "}
                <span className="block mt-1 font-serif italic font-normal text-[#BE123C]">
                  a standard.
                </span>
              </h2>

              {/* Paragraph Description */}
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-md">
                Certifications and memberships as published by Neelikon, reflecting our commitment to global quality, safety and compliance.
              </p>

              {/* Laboratory Petri Dishes Visual */}
              <div className="mt-8 relative overflow-hidden rounded-2xl">
                <img
                  src="/images/quality/quality-petri-artwork.png"
                  alt="Neelikon Quality Testing — Petri dishes with pure blue and magenta pigment powders in laboratory setting"
                  className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-sm transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* Right Column: Certification Pills & Cards */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <Reveal delay={0.15}>
              {/* Top: 12 Certification Badges in 2 structured rows */}
              <div className="flex flex-col gap-2.5">
                {/* Row 1 */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {CERT_PILLS_ROW1.map((pill, i) => (
                    <motion.div
                      key={pill.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03, ease: EASE }}
                      className={`rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-semibold tracking-wide border shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-transform duration-200 hover:scale-105 select-none ${pill.bg} ${pill.border} ${pill.text}`}
                    >
                      {pill.label}
                    </motion.div>
                  ))}
                </div>

                {/* Row 2 */}
                <div className="flex flex-wrap gap-2 sm:gap-2.5">
                  {CERT_PILLS_ROW2.map((pill, i) => (
                    <motion.div
                      key={pill.label}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.03, ease: EASE }}
                      className={`rounded-full px-3.5 sm:px-4 py-1.5 text-xs font-semibold tracking-wide border shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-transform duration-200 hover:scale-105 select-none ${pill.bg} ${pill.border} ${pill.text}`}
                    >
                      {pill.label}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bottom: 6 Accreditation & Certification Cards Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                {QUALITY_CARDS.map((card, idx) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + idx * 0.05, ease: EASE }}
                    className="flex flex-col justify-between rounded-2xl bg-white border border-stone-200/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.07)] hover:border-slate-300 hover:-translate-y-0.5"
                  >
                    {/* Official Certification Logo */}
                    <div className="flex h-16 sm:h-20 w-full items-center justify-center p-2">
                      <SafeImg
                        src={card.logo}
                        alt={`${card.title} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    {/* Meta Information with Indicator Dot */}
                    <div className="mt-4 pt-3 border-t border-stone-100 flex items-start gap-2.5">
                      <span className={`mt-1.5 h-2 w-2 rounded-full shrink-0 ${card.dot}`} />
                      <div>
                        <div className="text-sm font-bold tracking-tight text-slate-900">
                          {card.title}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {card.subtitle}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] py-20 lg:py-28 text-slate-900">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(200, 235, 255, 0.45) 0%, rgba(250, 247, 242, 0) 65%), radial-gradient(ellipse at 20% 80%, rgba(254, 243, 199, 0.35) 0%, transparent 60%)",
        }}
      />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Testimonial Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <Reveal>
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-slate-500">
                <span className="h-0.5 w-6 bg-slate-900" />
                <span>OUR PARTNERS SPEAK</span>
              </div>

              {/* Quote Block with decorative quote marks */}
              <div className="relative mt-8">
                {/* Large Opening Quote Icon */}
                <div
                  aria-hidden="true"
                  className="font-serif select-none pointer-events-none text-6xl sm:text-7xl leading-none text-sky-200/80 -mb-6 sm:-mb-8"
                >
                  “
                </div>

                <blockquote className="relative z-10 text-xl sm:text-2xl lg:text-[1.85rem] font-medium leading-[1.38] text-slate-900 tracking-tight">
                  <span className="font-serif italic font-bold text-slate-950">
                    Pioneers of the Colour and Dye Industry,{" "}
                  </span>
                  <span>
                    Neelikon is a well-established name that has continued providing the{" "}
                  </span>
                  <span className="font-serif italic font-normal text-[#0284C7]">
                    best quality products and efficient technical support{" "}
                  </span>
                  <span>
                    to its customers for decades. We are happy to be associated with them and look forward to continuing to do so in the long future.
                  </span>
                </blockquote>

                {/* Large Closing Quote Icon */}
                <div className="flex justify-end">
                  <span
                    aria-hidden="true"
                    className="font-serif select-none pointer-events-none text-5xl sm:text-6xl leading-none text-sky-200/80 -mt-3"
                  >
                    ”
                  </span>
                </div>
              </div>

              {/* Attribution */}
              <div className="mt-6 sm:mt-8 flex items-center gap-2.5 text-xs font-semibold tracking-widest uppercase text-slate-500">
                <span className="h-px w-6 bg-slate-400" />
                <span>DISTRIBUTOR — FOOD — INDIA</span>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Precision Food Science & Technical Formulation */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Reveal delay={0.2} className="relative w-full max-w-[480px]">
              <div className="relative">
                {/* Subtle Decorative Planetary Orbital Ring */}
                <svg
                  className="absolute -top-8 -left-8 w-[115%] h-[115%] pointer-events-none z-10 hidden sm:block"
                  viewBox="0 0 500 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle
                    cx="250"
                    cy="250"
                    r="230"
                    stroke="#CBD5E1"
                    strokeWidth="1.2"
                    strokeDasharray="4 6"
                    strokeOpacity="0.6"
                  />
                  <circle cx="250" cy="20" r="6" fill="#0284C7" />
                  <circle cx="250" cy="20" r="10" stroke="#38BDF8" strokeWidth="1.5" strokeOpacity="0.4" />
                  <circle cx="470" cy="300" r="5" fill="#EA580C" />
                  <circle cx="470" cy="300" r="9" stroke="#F97316" strokeWidth="1.5" strokeOpacity="0.4" />
                </svg>

                {/* Main Image Container */}
                <div className="relative overflow-hidden rounded-3xl border border-white/90 bg-white/60 p-2.5 shadow-2xl shadow-slate-200/60 backdrop-blur-xs transition-transform duration-700 hover:scale-[1.01]">
                  <div className="overflow-hidden rounded-2xl relative">
                    <img
                      src="/images/testimonial/food-colour-lab.jpg"
                      alt="Neelikon Food Grade Colour Quality Control & Technical Formulation Laboratory"
                      className="w-full h-auto object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    {/* Soft Ambient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Floating Quality Assurance Pill Badge (Top Right) */}
                <div className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 z-20 flex items-center gap-2 rounded-full border border-white/90 bg-white/95 px-3.5 py-1.5 shadow-md shadow-slate-900/5 backdrop-blur-md">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="h-3 w-3" />
                  </span>
                  <span className="text-[11px] font-semibold text-slate-800">
                    Food Grade Certified
                  </span>
                </div>

                {/* Floating Technical Support Badge (Bottom Left) */}
                <div className="absolute -bottom-3.5 -left-3.5 sm:-bottom-4 sm:-left-4 z-20 flex items-center gap-2 rounded-full border border-white/90 bg-white/95 px-3.5 py-1.5 shadow-md shadow-slate-900/5 backdrop-blur-md">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-50 text-sky-600">
                    <FlaskConical className="h-3 w-3" />
                  </span>
                  <span className="text-[11px] font-semibold text-slate-800">
                    Formulation & Technical Support
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}



function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#FAF7F2] text-[#0F172A] py-16 sm:py-20 lg:py-28 scroll-mt-16">
      {/* Subtle Warm Amber Glow behind the form corner */}
      <div
        className="pointer-events-none absolute -top-16 right-0 sm:right-10 h-[420px] w-[420px] rounded-full blur-3xl opacity-35 select-none hidden sm:block"
        style={{
          background: "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(249, 115, 22, 0.12) 45%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Restrained Navy-Blue Accent Shape with Smooth Organic Curves */}
      <svg
        className="pointer-events-none absolute right-0 top-0 h-full w-[40%] max-w-[500px] opacity-[0.035] select-none hidden lg:block"
        viewBox="0 0 500 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 140 0 C 260 80, 380 150, 410 300 C 440 450, 340 540, 430 700 L 500 700 L 500 0 Z"
          fill="#0F172A"
        />
      </svg>

      {/* Golden Ambient Curve Lines on Left Canvas */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 hidden lg:block"
        viewBox="0 0 1440 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M 540 0 C 530 80, 520 160, 560 210 C 600 260, 610 380, 540 460"
          stroke="#FDBA74"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
        <path
          d="M 510 500 C 490 540, 510 610, 600 670 C 650 700, 700 720, 740 720"
          stroke="#FDBA74"
          strokeWidth="1.2"
          strokeOpacity="0.4"
        />
      </svg>

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Heading, Contact Channels, and Product Link */}
          <div className="lg:col-span-5">
            <Reveal>
              {/* Eyebrow Header */}
              <div className="flex items-center gap-2.5">
                <span className="h-[2px] w-8 rounded-full bg-[#EA580C]" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#EA580C]">
                  Enquiries
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="mt-5 font-serif text-4xl sm:text-5xl lg:text-[50px] xl:text-[54px] font-normal tracking-tight text-[#0B1528] leading-[1.08]">
                Let’s create <br />
                something <br />
                <span className="italic text-[#EA580C]">exceptional.</span>
              </h2>

              {/* Subtitle */}
              <p className="mt-5 max-w-sm text-[15px] sm:text-base leading-relaxed text-[#475569]">
                Connect with our team to discuss your application, product requirements, and
                opportunities to work together.
              </p>

              {/* Contact Info Cards */}
              <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FBE0D0] bg-[#FDF0E7] text-[#EA580C] shadow-xs">
                    <Mail className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">Email Us</div>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-xs sm:text-[13px] text-[#475569] hover:text-[#EA580C] transition-colors"
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>

                {/* Call */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FBE0D0] bg-[#FDF0E7] text-[#EA580C] shadow-xs">
                    <Phone className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">Call Us</div>
                    <a
                      href={CONTACT.phoneHref}
                      className="text-xs sm:text-[13px] text-[#475569] hover:text-[#EA580C] transition-colors"
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#FBE0D0] bg-[#FDF0E7] text-[#EA580C] shadow-xs">
                    <MapPin className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#0F172A]">Our Office</div>
                    <div className="text-xs text-[#475569] leading-relaxed max-w-[290px]">
                      D-08, Everest Building, 5th Floor, <br />
                      Pt. Madan Mohan Malaviya Marg, <br />
                      Tardeo Circle, Mumbai, Maharashtra - 400034, India.
                    </div>
                  </div>
                </div>
              </div>

              {/* Explore Products Button */}
              <div className="mt-8 sm:mt-10">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-[#0F172A] bg-white/70 px-7 py-3.5 text-xs sm:text-[13px] font-semibold text-[#0F172A] shadow-xs backdrop-blur-xs transition-all duration-200 hover:border-[#0F172A] hover:bg-white hover:-translate-y-0.5 active:scale-95"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive White Enquiry Form Card */}
          <div className="lg:col-span-7 xl:col-span-6 xl:col-start-7">
            <Reveal delay={0.15}>
              <EnquiryForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

