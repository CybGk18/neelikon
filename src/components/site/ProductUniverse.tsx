import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import bgArtwork from "@/assets/bg.png";

export type GroupFilter = "All" | "Food" | "Pharma" | "Cosmetics" | "Specialty";

export interface EditorialProduct {
  num: string;
  slug: string;
  name: string;
  group: "Food" | "Pharma" | "Cosmetics" | "Specialty";
  categoryLabel: string;
  desc: string;
  img: string;
  numColor: string;
  badgeClass: string;
  arrowColor: string;
  glowColor: string;
}

export const EDITORIAL_PRODUCTS: EditorialProduct[] = [
  {
    num: "01",
    slug: "natural-food",
    name: "Natural Food Colours",
    group: "Food",
    categoryLabel: "FOOD",
    desc: "Natural colours extracted from plants, fruits and vegetables.",
    img: "/images/home/1.png",
    numColor: "#FCD34D",
    badgeClass: "bg-[#FEF3C7] text-[#B45309]",
    arrowColor: "#D97706",
    glowColor: "rgba(253, 224, 71, 0.22)",
  },
  {
    num: "02",
    slug: "synthetic-food",
    name: "Synthetic Food Colours",
    group: "Food",
    categoryLabel: "FOOD",
    desc: "Water-soluble colours, blends, lakes and granular grades for food.",
    img: "/images/home/2.png",
    numColor: "#F472B6",
    badgeClass: "bg-[#FDF2F8] text-[#BE185D]",
    arrowColor: "#DB2777",
    glowColor: "rgba(244, 114, 182, 0.18)",
  },
  {
    num: "03",
    slug: "pharma",
    name: "Pharmaceutical Colourants",
    group: "Pharma",
    categoryLabel: "PHARMA",
    desc: "Colourants for tablets, syrups and ointments, supported by analytical testing.",
    img: "/images/home/3.png",
    numColor: "#93C5FD",
    badgeClass: "bg-[#E0F2FE] text-[#0369A1]",
    arrowColor: "#0284C7",
    glowColor: "rgba(147, 197, 253, 0.2)",
  },
  {
    num: "04",
    slug: "cosmetic",
    name: "Cosmetic Pigments",
    group: "Cosmetics",
    categoryLabel: "COSMETICS",
    desc: "Lavanya dyes, lakes and pigments for decorative cosmetics.",
    img: "/images/home/4.png",
    numColor: "#FDA4AF",
    badgeClass: "bg-[#FFE4E6] text-[#BE123C]",
    arrowColor: "#E11D48",
    glowColor: "rgba(253, 164, 175, 0.2)",
  },
  {
    num: "05",
    slug: "personal-home",
    name: "Personal Care & Home Care Colourants",
    group: "Cosmetics",
    categoryLabel: "COSMETICS",
    desc: "Lavanya water- and solvent-soluble dyes and dispersions for personal and home care.",
    img: "/images/home/5.png",
    numColor: "#FDBA74",
    badgeClass: "bg-[#FFEDD5] text-[#C2410C]",
    arrowColor: "#EA580C",
    glowColor: "rgba(253, 186, 116, 0.22)",
  },
  {
    num: "06",
    slug: "surface-treated",
    name: "Surface-Treated Pigments",
    group: "Cosmetics",
    categoryLabel: "COSMETICS",
    desc: "Surface-treated pigments for cosmetic applications.",
    img: "/images/home/6.png",
    numColor: "#F472B6",
    badgeClass: "bg-[#FDF2F8] text-[#BE185D]",
    arrowColor: "#C026D3",
    glowColor: "rgba(244, 114, 182, 0.18)",
  },
  {
    num: "07",
    slug: "lip-paste",
    name: "Ready-Mix Paste for Lip Care",
    group: "Cosmetics",
    categoryLabel: "COSMETICS",
    desc: "Ready-to-use colour pastes for lip-care formulations.",
    img: "/images/home/7.png",
    numColor: "#FCA5A5",
    badgeClass: "bg-[#FEF2F2] text-[#DC2626]",
    arrowColor: "#DC2626",
    glowColor: "rgba(252, 165, 165, 0.2)",
  },
  {
    num: "08",
    slug: "pearlescent",
    name: "Pearlescent Pigments",
    group: "Cosmetics",
    categoryLabel: "COSMETICS",
    desc: "Coated mica platelets for colour and lustre effects.",
    img: "/images/home/8.png",
    numColor: "#D8B4FE",
    badgeClass: "bg-[#F5F3FF] text-[#7C3AED]",
    arrowColor: "#7C3AED",
    glowColor: "rgba(216, 180, 254, 0.22)",
  },
  {
    num: "09",
    slug: "white-no-tio2",
    name: "White Pigments Without Titanium Dioxide",
    group: "Food",
    categoryLabel: "FOOD",
    desc: "White pigment options formulated without titanium dioxide.",
    img: "/images/home/9.png",
    numColor: "#BAE6FD",
    badgeClass: "bg-[#E0F2FE] text-[#0369A1]",
    arrowColor: "#0284C7",
    glowColor: "rgba(186, 230, 253, 0.25)",
  },
  {
    num: "10",
    slug: "red3-alt",
    name: "Alternatives for FD&C Red 3",
    group: "Food",
    categoryLabel: "FOOD",
    desc: "Natural and synthetic alternatives as the US FDA revokes FD&C Red No. 3.",
    img: "/images/home/10.png",
    numColor: "#FDA4AF",
    badgeClass: "bg-[#FFE4E6] text-[#BE123C]",
    arrowColor: "#E11D48",
    glowColor: "rgba(253, 164, 175, 0.2)",
  },
  {
    num: "11",
    slug: "natural-lakes",
    name: "Synthetic Aluminium Lakes from Natural Colours",
    group: "Pharma",
    categoryLabel: "PHARMA",
    desc: "Aluminium lakes produced from natural colours.",
    img: "/images/home/11.png",
    numColor: "#99F6E4",
    badgeClass: "bg-[#CCFBF1] text-[#0F766E]",
    arrowColor: "#0D9488",
    glowColor: "rgba(153, 246, 228, 0.22)",
  },
  {
    num: "12",
    slug: "fluorescent",
    name: "Fluorescent & Solvent Dyes",
    group: "Specialty",
    categoryLabel: "SPECIALTY",
    desc: "Specialty fluorescent and solvent dyes.",
    img: "/images/home/12.png",
    numColor: "#A7F3D0",
    badgeClass: "bg-[#D1FAE5] text-[#047857]",
    arrowColor: "#059669",
    glowColor: "rgba(167, 243, 208, 0.22)",
  },
  {
    num: "13",
    slug: "inkjet",
    name: "Stationery & Inkjet Dyes",
    group: "Specialty",
    categoryLabel: "SPECIALTY",
    desc: "High-purity dyes for stationery and inkjet ink applications.",
    img: "/images/home/13.png",
    numColor: "#FDE68A",
    badgeClass: "bg-[#FEF3C7] text-[#B45309]",
    arrowColor: "#D97706",
    glowColor: "rgba(254, 230, 138, 0.24)",
  },
  {
    num: "14",
    slug: "industrial",
    name: "Industrial Application Colourants",
    group: "Specialty",
    categoryLabel: "SPECIALTY",
    desc: "High-purity colours and fluorescent dyes for industrial uses, from toys to agriculture.",
    img: "/images/home/14.png",
    numColor: "#DDD6FE",
    badgeClass: "bg-[#F3E8FF] text-[#7E22CE]",
    arrowColor: "#7C3AED",
    glowColor: "rgba(221, 214, 254, 0.24)",
  },
];

const FILTER_TABS: GroupFilter[] = ["All", "Food", "Pharma", "Cosmetics", "Specialty"];

export function ProductUniverse({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  const [activeFilter, setActiveFilter] = useState<GroupFilter>("All");

  const filtered = EDITORIAL_PRODUCTS.filter(
    (p) => activeFilter === "All" || p.group === activeFilter
  );

  const isAll = activeFilter === "All";
  const mainProducts = isAll ? filtered.slice(0, 12) : filtered;
  const wideProducts = isAll ? filtered.slice(12, 14) : [];

  const H = heading;

  return (
    <section
      id="products"
      className="relative w-full overflow-hidden bg-[#FAF7F2] text-[#0F1E36] pt-14 pb-18 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32"
    >
      {/* ========================================================= */}
      {/* BACKGROUND ATMOSPHERE: Subtle Translucent Organic Waves   */}
      {/* ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none overflow-hidden"
      >
        {/* Ambient Warm Corner Glow */}
        <div className="absolute -left-28 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#FED7AA]/30 via-[#FDE68A]/15 to-transparent blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-[#FDBA74]/15 via-[#FED7AA]/10 to-transparent blur-3xl" />
        <div className="absolute left-1/4 bottom-10 h-[500px] w-[600px] rounded-full bg-gradient-to-tr from-[#FED7AA]/20 to-transparent blur-3xl" />

        {/* Faint Organic Wave Paths */}
        <svg
          viewBox="0 0 1440 1200"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full opacity-40"
          fill="none"
        >
          <path
            d="M -100 200 C 300 120, 600 350, 1000 220 C 1300 120, 1500 260, 1600 240"
            stroke="#FED7AA"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          />
          <path
            d="M -100 480 C 200 560, 500 420, 850 510 C 1200 600, 1400 450, 1600 490"
            stroke="#FED7AA"
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />
          <path
            d="M -100 800 C 350 720, 700 900, 1100 780 C 1350 700, 1500 820, 1600 800"
            stroke="#FED7AA"
            strokeWidth="1.5"
            strokeOpacity="0.5"
          />
        </svg>
      </div>

      <div className="container-x mx-auto max-w-[88rem] relative z-10">
        {/* ========================================================= */}
        {/* 1. SECTION HEADER: Editorial Headline + Vibrant Artwork   */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center pb-8 sm:pb-10">
          {/* Left Column: Eyebrow, Display Headline, Description, Button */}
          <div className="lg:col-span-7 xl:col-span-6 max-w-2xl">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#64748B]">
                  Product Portfolio · 14 Specialized Families
                </span>
              </div>

              <H className="mt-3 sm:mt-4 font-serif text-4xl sm:text-5xl lg:text-[3.65rem] xl:text-[4.25rem] font-bold text-[#0F1E36] leading-[1.08] tracking-tight">
                One world. <br />
                <span className="font-serif italic font-normal text-[#E05322]">Countless</span>{" "}
                <span className="font-serif italic font-normal text-[#1D4ED8]">possibilities.</span>
              </H>

              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed text-[#64748B] max-w-xl font-normal">
                A diverse range of high-performance colour solutions for multiple industries, designed
                to meet global standards.
              </p>

              <div className="mt-7 sm:mt-8">
                <a
                  href="#products-grid"
                  className="inline-flex items-center gap-3 rounded-full bg-[#0F1E36] px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-white shadow-[0_6px_20px_rgba(15,23,42,0.18)] transition-all duration-300 hover:bg-[#1E293B] hover:shadow-[0_10px_28px_rgba(15,23,42,0.25)] hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Swirling Pigments + One World One Quality Emblem + Script */}
          <div className="lg:col-span-5 xl:col-span-6 relative flex items-center justify-center lg:justify-end overflow-visible">
            <Reveal delay={0.2} className="relative w-full max-w-[390px] sm:max-w-[460px] lg:max-w-[520px] overflow-visible">
              {/* Subtle ambient warm glow behind artwork */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-4 rounded-full bg-gradient-to-br from-[#FED7AA]/30 via-[#FDE68A]/15 to-transparent blur-3xl -z-10"
              />

              {/* Graphic Artwork: Seamless edge blending without rectangular borders */}
              <div className="relative aspect-[1.12/1] w-full overflow-visible select-none">
                <img
                  src={bgArtwork}
                  alt="Neelikon One World One Quality colourful powder dispersion"
                  className="w-full h-full object-contain select-none"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 95% 90% at 50% 50%, black 72%, transparent 99%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 95% 90% at 50% 50%, black 72%, transparent 99%)",
                  }}
                  loading="eager"
                />

                {/* Repositioned Calligraphy Script: Colours for a Brighter World */}
                {/* Placed downward and rightward with comfortable spacing from 35+ and central globe */}
                <div className="absolute right-[-6px] sm:right-[-12px] lg:right-[-18px] bottom-[-16px] sm:bottom-[-22px] lg:bottom-[-26px] -rotate-[6deg] select-none pointer-events-none text-right z-20">
                  <p className="font-['Caveat',cursive] text-2xl sm:text-3xl lg:text-[2.25rem] text-[#B45309] font-bold leading-[0.92] tracking-wide">
                    Colours <br />
                    for a Brighter <br />
                    World
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. MINIMALIST FILTER ROW (Centered with thin dividers)    */}
        {/* ========================================================= */}
        <div className="pt-6 sm:pt-8 pb-10 sm:pb-14">
          <div
            role="tablist"
            aria-label="Filter products by category"
            className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap"
          >
            {FILTER_TABS.map((tab, idx) => {
              const isActive = activeFilter === tab;

              return (
                <div key={tab} className="flex items-center gap-4 sm:gap-6 md:gap-8">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(tab)}
                    className={`relative text-xs sm:text-[13px] tracking-wide transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "font-bold text-[#0F1E36]"
                        : "font-medium text-[#64748B] hover:text-[#0F1E36]"
                    }`}
                  >
                    <span>{tab}</span>
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#0F1E36] rounded-full" />
                    )}
                  </button>

                  {/* Thin vertical separator between tabs (omitted after last tab) */}
                  {idx < FILTER_TABS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-stone-300 text-xs sm:text-sm select-none font-light"
                    >
                      |
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. 14 PRODUCT ENTRIES (Editorial Organic Grid)            */}
        {/* ========================================================= */}
        <div id="products-grid" className="scroll-mt-28">
          {/* Main 3-Column Grid for Items 01 - 12 (or all filtered items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-12 sm:gap-y-16 lg:gap-y-18">
            {mainProducts.map((product, idx) => (
              <ProductCard key={product.slug} product={product} delay={0.04 * (idx % 3)} />
            ))}
          </div>

          {/* Row 5: 2 Wider Product Entries (Items 13 & 14) when "All" is active */}
          {wideProducts.length > 0 && (
            <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-8 sm:gap-x-12 lg:gap-x-16 gap-y-12 max-w-5xl mx-auto">
              {wideProducts.map((product, idx) => (
                <ProductCard key={product.slug} product={product} delay={0.1 * idx} isWide />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  delay = 0,
  isWide = false,
}: {
  product: EditorialProduct;
  delay?: number;
  isWide?: boolean;
}) {
  return (
    <Reveal delay={delay} className="w-full">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="group relative flex flex-row items-center w-full select-none cursor-pointer rounded-2xl transition-transform duration-300 hover:-translate-y-1"
      >
        {/* Left Column: Number, Category Pill, Title & Description */}
        <div
          className={`shrink-0 z-10 flex flex-col justify-center ${
            isWide
              ? "w-[40%] sm:w-[38%] lg:w-[36%]"
              : "w-[44%] sm:w-[42%] lg:w-[40%]"
          }`}
        >
          {/* Oversized Pastel Italic Number */}
          <span
            className="font-serif italic font-normal text-3xl sm:text-4xl lg:text-[2.85rem] leading-none select-none tracking-tight transition-transform duration-300 group-hover:scale-105 origin-left"
            style={{ color: product.numColor }}
          >
            {product.num}
          </span>

          {/* Compact Category Label Pill */}
          <div className="mt-1.5 sm:mt-2">
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded-full text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-widest ${product.badgeClass}`}
            >
              {product.categoryLabel}
            </span>
          </div>

          {/* Product Title in High-Contrast Navy Serif */}
          <h3 className="mt-2 sm:mt-2.5 font-serif font-bold text-[1.15rem] sm:text-[1.25rem] lg:text-[1.35rem] text-[#0F1E36] leading-[1.16] tracking-tight group-hover:text-[#E05322] transition-colors">
            {product.name}
          </h3>

          {/* Clean Muted Sans-Serif Description */}
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-[12.5px] leading-relaxed text-[#64748B] line-clamp-3">
            {product.desc}
          </p>
        </div>

        {/* Right Column: Organic Cutout Photograph (brought close to text without excessive gap) */}
        <div
          className={`flex-1 relative -ml-3 sm:-ml-5 lg:-ml-7 flex items-center ${
            isWide ? "max-w-[62%]" : "max-w-[60%]"
          }`}
        >
          <div className="relative w-full aspect-[4/3] sm:aspect-[1.22/1] flex items-center justify-start overflow-visible">
            {/* Subtle coordinated pastel radial glow behind organic shape */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full blur-2xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at 60% 50%, ${product.glowColor} 0%, transparent 68%)`,
              }}
            />

            {/* The pre-clipped organic photograph with its transparent wave tail sweeping leftward */}
            <img
              src={product.img}
              alt={product.name}
              loading="lazy"
              className="relative z-10 w-full h-full object-contain object-left transition-transform duration-700 ease-out group-hover:scale-105 select-none"
            />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
