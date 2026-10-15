import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { EASE, Reveal, SafeImg } from "./Reveal";

export type GroupFilter = "All" | "Food" | "Pharma" | "Cosmetics" | "Specialty";

export interface EditorialProduct {
  num: string;
  slug: string;
  name: string;
  group: "Food" | "Pharma" | "Cosmetics" | "Specialty";
  desc: string;
  longDesc?: string;
  highlights: string[];
  img: string;
  dotColor: string;
  badgeBg: string;
  textColor: string;
}

const EDITORIAL_PRODUCTS: EditorialProduct[] = [
  {
    num: "01",
    slug: "natural-food",
    name: "Natural Food Colours",
    group: "Food",
    desc: "Natural colours extracted from select plants, fruits and vegetables, offering clean-label formulation with tailor-made shades.",
    longDesc: "Offered under the brand NeeliNatural, these colourants are derived from carefully selected plant sources, fruits, and vegetables. Neelikon engineers customised natural blends with tailor-made shades, exceptional heat and light stability, and batch-to-batch consistency for confectionery, bakery, beverages, and dairy.",
    highlights: ["Plant & Vegetable Extracts", "Customised Shade Matching", "Global Food Regulations"],
    img: "/images/products/natural-food.png",
    dotColor: "bg-amber-500",
    badgeBg: "bg-amber-50/80 border-amber-200/70",
    textColor: "text-amber-800",
  },
  {
    num: "02",
    slug: "synthetic-food",
    name: "Synthetic Food Colours",
    group: "Food",
    desc: "Water-soluble colours, custom blends, aluminium lakes, and low-dust granular grades engineered for food and beverage manufacturing.",
    highlights: ["Water-Soluble Dyes & Blends", "Low-Dust Granular Grades", "High Purity Aluminium Lakes"],
    img: "/images/products/synthetic-food.png",
    dotColor: "bg-amber-500",
    badgeBg: "bg-amber-50/80 border-amber-200/70",
    textColor: "text-amber-800",
  },
  {
    num: "03",
    slug: "pharma",
    name: "Pharmaceutical Colourants",
    group: "Pharma",
    desc: "Pharmacopeial-grade colourants for tablet coatings, gelatin capsules, oral syrups, and ointments, backed by stringent analytical profiling.",
    highlights: ["USP / EP / JP Compliance", "High-Purity Iron Oxides", "Low Heavy Metal Limits"],
    img: "/images/products/pharma.png",
    dotColor: "bg-blue-500",
    badgeBg: "bg-blue-50/80 border-blue-200/70",
    textColor: "text-blue-800",
  },
  {
    num: "04",
    slug: "cosmetic",
    name: "Cosmetic Pigments",
    group: "Cosmetics",
    desc: "Lavanya cosmetic dyes, lakes, and high-purity pigments for decorative cosmetics, manufactured with soft, ultra-fine particle distribution.",
    highlights: ["Ultra-Fine Particle Micronisation", "Aluminium & Barium Lakes", "For Lip, Eye & Face Products"],
    img: "/images/products/cosmetic.png",
    dotColor: "bg-rose-500",
    badgeBg: "bg-rose-50/80 border-rose-200/70",
    textColor: "text-rose-800",
  },
  {
    num: "05",
    slug: "personal-home",
    name: "Personal Care & Home Care Colourants",
    group: "Cosmetics",
    desc: "Lavanya water-soluble and solvent-soluble organic dyes and dispersions specifically formulated for toiletries, soaps, and detergents.",
    highlights: ["Surfactant-Stable Formulations", "Aqueous Paste Dispersions", "Bright Clear Liquid Shades"],
    img: "/images/products/personal-home.png",
    dotColor: "bg-rose-500",
    badgeBg: "bg-rose-50/80 border-rose-200/70",
    textColor: "text-rose-800",
  },
  {
    num: "06",
    slug: "surface-treated",
    name: "Surface-Treated Pigments",
    group: "Cosmetics",
    desc: "Engineered hydrophobic and lipophilic surface treatments that deliver superior dispersion, long wear, and smooth sensory skin feel.",
    highlights: ["Enhanced Skin Adhesion", "Hydrophobic & Lipophilic Coatings", "Even Cream & Powder Blend"],
    img: "/images/products/surface-treated.png",
    dotColor: "bg-rose-500",
    badgeBg: "bg-rose-50/80 border-rose-200/70",
    textColor: "text-rose-800",
  },
  {
    num: "07",
    slug: "lip-paste",
    name: "Ready-Mix Paste for Lip Care",
    group: "Cosmetics",
    desc: "Pre-dispersed, high-load colour pastes in cosmetic oils and waxes for rapid and flawless incorporation into lipsticks and glosses.",
    highlights: ["Ready-to-Use Pigment Dispersion", "Non-Agglomerating Formulation", "High Colour Tinting Power"],
    img: "/images/products/lip-paste.png",
    dotColor: "bg-rose-500",
    badgeBg: "bg-rose-50/80 border-rose-200/70",
    textColor: "text-rose-800",
  },
  {
    num: "08",
    slug: "pearlescent",
    name: "Pearlescent Pigments",
    group: "Cosmetics",
    desc: "Precision-coated natural and synthetic mica platelets delivering multi-dimensional lustre, satin sheen, and brilliant metallic effects.",
    highlights: ["Natural & Synthetic Mica", "Silky Satin to High Sparkle", "Safe for Eye & Facial Cosmetics"],
    img: "/images/products/pearlescent.png",
    dotColor: "bg-rose-500",
    badgeBg: "bg-rose-50/80 border-rose-200/70",
    textColor: "text-rose-800",
  },
  {
    num: "09",
    slug: "white-no-tio2",
    name: "White Pigments Without Titanium Dioxide",
    group: "Food",
    desc: "Clean-label mineral and organic white opacifying alternatives engineered specifically for formulations without titanium dioxide (TiO₂).",
    highlights: ["TiO₂-Free Clean Label", "Effective Opacity & Whiteness", "Confectionery & Tablet Coating"],
    img: "/images/products/white-no-tio2.png",
    dotColor: "bg-sky-500",
    badgeBg: "bg-sky-50/80 border-sky-200/70",
    textColor: "text-sky-800",
  },
  {
    num: "10",
    slug: "red3-alt",
    name: "Alternatives for FD&C Red 3",
    group: "Food",
    desc: "Regulatory-compliant natural and synthetic red alternatives developed to replace FD&C Red No. 3 following US FDA updates.",
    highlights: ["Turnkey Red 3 Reformulation", "Heat & pH Robust Matches", "Applicable for Food & Confections"],
    img: "/images/products/red3-alt.png",
    dotColor: "bg-amber-500",
    badgeBg: "bg-amber-50/80 border-amber-200/70",
    textColor: "text-amber-800",
  },
  {
    num: "11",
    slug: "natural-lakes",
    name: "Synthetic Aluminium Lakes from Natural Colours",
    group: "Pharma",
    desc: "Advanced water-insoluble aluminium lakes produced from natural pigments, delivering high dispersion stability without bleeding.",
    highlights: ["Insoluble Non-Bleeding Lakes", "Natural Colour Source", "Compressed Tablets & Coatings"],
    img: "/images/products/natural-lakes.png",
    dotColor: "bg-blue-500",
    badgeBg: "bg-blue-50/80 border-blue-200/70",
    textColor: "text-blue-800",
  },
  {
    num: "12",
    slug: "fluorescent",
    name: "Fluorescent & Solvent Dyes",
    group: "Specialty",
    desc: "High-visibility fluorescent colourants and clear solvent-soluble dyes engineered for industrial tracing, plastics, and safety materials.",
    highlights: ["High Fluorescence Intensity", "Organic Solvent Solubility", "Plastics & Smoke Tracer Dyes"],
    img: "/images/products/fluorescent.png",
    dotColor: "bg-emerald-500",
    badgeBg: "bg-emerald-50/80 border-emerald-200/70",
    textColor: "text-emerald-800",
  },
  {
    num: "13",
    slug: "inkjet",
    name: "Stationery & Inkjet Dyes",
    group: "Specialty",
    desc: "Ultra-purified, de-salted dyes designed for high surface-tension inkjet inks, fountain pens, and precision highlighter markers.",
    highlights: ["Ultra-Low Salt Content", "No Printhead Clogging", "Vivid Neon & Optical Shades"],
    img: "/images/products/inkjet.png",
    dotColor: "bg-purple-500",
    badgeBg: "bg-purple-50/80 border-purple-200/70",
    textColor: "text-purple-800",
  },
  {
    num: "14",
    slug: "industrial",
    name: "Industrial Application Colourants",
    group: "Specialty",
    desc: "Heavy-duty specialty pigments and dyes tailored for polymers, masterbatches, seed coatings, textile dyeing, and technical fluids.",
    highlights: ["High Thermal Resistance", "Migration-Resistant Dyes", "Agriculture & Polymer Compounds"],
    img: "/images/products/industrial.png",
    dotColor: "bg-purple-500",
    badgeBg: "bg-purple-50/80 border-purple-200/70",
    textColor: "text-purple-800",
  },
];

const FILTER_TABS: GroupFilter[] = ["All", "Food", "Pharma", "Cosmetics", "Specialty"];

export function ProductUniverse({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  const [activeFilter, setActiveFilter] = useState<GroupFilter>("All");

  const filtered = EDITORIAL_PRODUCTS.filter(
    (p) => activeFilter === "All" || p.group === activeFilter
  );

  const featured = filtered[0];
  const catalogueList = filtered.slice(1);

  const H = heading;

  return (
    <section id="products" className="scroll-mt-20 bg-[#FAF8F5] pt-16 pb-8 sm:pt-20 sm:pb-10 lg:pt-24 lg:pb-12 relative">
      <div className="container-x">
        {/* Editorial Section Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between pb-12 border-b border-stone-200/80">
          <Reveal className="max-w-2xl">
            <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-slate-500">
              <span className="h-0.5 w-6 bg-blue-700" />
              <span>COLOUR PORTFOLIO · 14 SPECIALIZED FAMILIES</span>
            </div>
            <H className="mt-4 font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.08]">
              Colours for a{" "}
              <span className="font-serif italic font-normal text-blue-700">
                brighter world.
              </span>
            </H>
          </Reveal>

          <Reveal delay={0.15} className="lg:max-w-md xl:max-w-lg flex flex-col justify-end">
            <p className="text-sm sm:text-base leading-relaxed text-slate-600">
              High-purity, low-impurity colours engineered to comply with JECFA, USA, Europe, Japan, China, and India regulations as applicable — rigorously tested for global food, pharmaceutical, and cosmetic safety.
            </p>

            {/* Category Filter Pills */}
            <div
              role="group"
              aria-label="Filter products by industry"
              className="mt-6 flex flex-wrap items-center gap-2"
            >
              {FILTER_TABS.map((tab) => {
                const count =
                  tab === "All"
                    ? EDITORIAL_PRODUCTS.length
                    : EDITORIAL_PRODUCTS.filter((p) => p.group === tab).length;
                const isActive = activeFilter === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveFilter(tab)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-slate-950 text-white shadow-sm ring-1 ring-slate-950"
                        : "bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-stone-200/80"
                    }`}
                  >
                    {tab} <span className="opacity-60 font-normal">({count})</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Featured Showcase Item */}
        {featured && (
          <AnimatePresence mode="wait">
            <motion.div
              key={`featured-${activeFilter}-${featured.slug}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="mt-12"
            >
              <Link
                to="/products/$slug"
                params={{ slug: featured.slug }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-stone-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:border-slate-300"
              >
                {/* Featured Photo: Uncropped, clean aspect ratio */}
                <div className="md:col-span-6 lg:col-span-7 relative aspect-[16/10] md:aspect-auto md:min-h-[22rem] lg:min-h-[26rem] overflow-hidden bg-stone-100">
                  <SafeImg
                    src={featured.img}
                    alt={featured.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm border border-stone-200/60">
                      <span className={`h-2 w-2 rounded-full ${featured.dotColor}`} />
                      Featured Family · {featured.group}
                    </span>
                  </div>
                </div>

                {/* Featured Editorial Content */}
                <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-12">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-400">
                      <span>CATALOGUE REF. #{featured.num}</span>
                    </div>

                    <h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 group-hover:text-blue-700 transition-colors">
                      {featured.name}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-600">
                      {featured.longDesc || featured.desc}
                    </p>

                    {/* Key Attributes Highlights */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {featured.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1.5 rounded-md bg-stone-50 px-2.5 py-1 text-xs font-medium text-slate-700 border border-stone-200/60"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-700" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA link */}
                  <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 font-bold text-sm text-blue-700 group-hover:text-blue-800">
                      Explore Product Family & Specifications
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Editorial Catalogue Grid of Remaining Families */}
        {catalogueList.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between pb-6 border-b border-stone-200/80">
              <span className="text-xs font-bold tracking-widest uppercase text-slate-400 font-mono">
                {activeFilter === "All" ? "ALL FAMILIES" : `${activeFilter.toUpperCase()} RANGE`} ({catalogueList.length} PRODUCTS)
              </span>
              <span className="text-xs text-slate-400">
                Click any family to view grade specifications
              </span>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {catalogueList.map((product) => (
                <div key={product.slug} className="flex">
                  <Link
                    to="/products/$slug"
                    params={{ slug: product.slug }}
                    className="group flex flex-col w-full rounded-2xl bg-white border border-stone-200/80 p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] hover:border-slate-300 hover:-translate-y-0.5"
                  >
                    {/* Image Area: Fixed aspect ratio matching clean extracted photos, fully contained with no distortion or text clipping */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-stone-100/70 border border-stone-200/50">
                      <SafeImg
                        src={product.img}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Metadata Header */}
                    <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                      <span className="font-mono font-medium text-slate-400">{product.num}</span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${product.badgeBg} ${product.textColor}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${product.dotColor}`} />
                        {product.group}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="mt-3 text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                      {product.name}
                    </h3>

                    {/* Full Description: No line clamping, comfortable line height */}
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 flex-1">
                      {product.desc}
                    </p>

                    {/* Action Arrow */}
                    <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-500 group-hover:text-blue-700 transition-colors">
                        View Product Range
                      </span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-stone-200 text-slate-400 transition-all duration-200 group-hover:border-blue-600 group-hover:text-blue-700 group-hover:bg-blue-50/60">
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
