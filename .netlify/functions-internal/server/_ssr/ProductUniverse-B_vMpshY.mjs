import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { i as SafeImg, r as Reveal, t as EASE } from "./Reveal-BoqkhH5J.mjs";
import { T as ArrowRight, b as CircleCheck, w as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductUniverse-B_vMpshY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EDITORIAL_PRODUCTS = [
	{
		num: "01",
		slug: "natural-food",
		name: "Natural Food Colours",
		group: "Food",
		desc: "Natural colours extracted from select plants, fruits and vegetables, offering clean-label formulation with tailor-made shades.",
		longDesc: "Offered under the brand NeeliNatural, these colourants are derived from carefully selected plant sources, fruits, and vegetables. Neelikon engineers customised natural blends with tailor-made shades, exceptional heat and light stability, and batch-to-batch consistency for confectionery, bakery, beverages, and dairy.",
		highlights: [
			"Plant & Vegetable Extracts",
			"Customised Shade Matching",
			"Global Food Regulations"
		],
		img: "/images/products/natural-food.png",
		dotColor: "bg-amber-500",
		badgeBg: "bg-amber-50/80 border-amber-200/70",
		textColor: "text-amber-800"
	},
	{
		num: "02",
		slug: "synthetic-food",
		name: "Synthetic Food Colours",
		group: "Food",
		desc: "Water-soluble colours, custom blends, aluminium lakes, and low-dust granular grades engineered for food and beverage manufacturing.",
		highlights: [
			"Water-Soluble Dyes & Blends",
			"Low-Dust Granular Grades",
			"High Purity Aluminium Lakes"
		],
		img: "/images/products/synthetic-food.png",
		dotColor: "bg-amber-500",
		badgeBg: "bg-amber-50/80 border-amber-200/70",
		textColor: "text-amber-800"
	},
	{
		num: "03",
		slug: "pharma",
		name: "Pharmaceutical Colourants",
		group: "Pharma",
		desc: "Pharmacopeial-grade colourants for tablet coatings, gelatin capsules, oral syrups, and ointments, backed by stringent analytical profiling.",
		highlights: [
			"USP / EP / JP Compliance",
			"High-Purity Iron Oxides",
			"Low Heavy Metal Limits"
		],
		img: "/images/products/pharma.png",
		dotColor: "bg-blue-500",
		badgeBg: "bg-blue-50/80 border-blue-200/70",
		textColor: "text-blue-800"
	},
	{
		num: "04",
		slug: "cosmetic",
		name: "Cosmetic Pigments",
		group: "Cosmetics",
		desc: "Lavanya cosmetic dyes, lakes, and high-purity pigments for decorative cosmetics, manufactured with soft, ultra-fine particle distribution.",
		highlights: [
			"Ultra-Fine Particle Micronisation",
			"Aluminium & Barium Lakes",
			"For Lip, Eye & Face Products"
		],
		img: "/images/products/cosmetic.png",
		dotColor: "bg-rose-500",
		badgeBg: "bg-rose-50/80 border-rose-200/70",
		textColor: "text-rose-800"
	},
	{
		num: "05",
		slug: "personal-home",
		name: "Personal Care & Home Care Colourants",
		group: "Cosmetics",
		desc: "Lavanya water-soluble and solvent-soluble organic dyes and dispersions specifically formulated for toiletries, soaps, and detergents.",
		highlights: [
			"Surfactant-Stable Formulations",
			"Aqueous Paste Dispersions",
			"Bright Clear Liquid Shades"
		],
		img: "/images/products/personal-home.png",
		dotColor: "bg-rose-500",
		badgeBg: "bg-rose-50/80 border-rose-200/70",
		textColor: "text-rose-800"
	},
	{
		num: "06",
		slug: "surface-treated",
		name: "Surface-Treated Pigments",
		group: "Cosmetics",
		desc: "Engineered hydrophobic and lipophilic surface treatments that deliver superior dispersion, long wear, and smooth sensory skin feel.",
		highlights: [
			"Enhanced Skin Adhesion",
			"Hydrophobic & Lipophilic Coatings",
			"Even Cream & Powder Blend"
		],
		img: "/images/products/surface-treated.png",
		dotColor: "bg-rose-500",
		badgeBg: "bg-rose-50/80 border-rose-200/70",
		textColor: "text-rose-800"
	},
	{
		num: "07",
		slug: "lip-paste",
		name: "Ready-Mix Paste for Lip Care",
		group: "Cosmetics",
		desc: "Pre-dispersed, high-load colour pastes in cosmetic oils and waxes for rapid and flawless incorporation into lipsticks and glosses.",
		highlights: [
			"Ready-to-Use Pigment Dispersion",
			"Non-Agglomerating Formulation",
			"High Colour Tinting Power"
		],
		img: "/images/products/lip-paste.png",
		dotColor: "bg-rose-500",
		badgeBg: "bg-rose-50/80 border-rose-200/70",
		textColor: "text-rose-800"
	},
	{
		num: "08",
		slug: "pearlescent",
		name: "Pearlescent Pigments",
		group: "Cosmetics",
		desc: "Precision-coated natural and synthetic mica platelets delivering multi-dimensional lustre, satin sheen, and brilliant metallic effects.",
		highlights: [
			"Natural & Synthetic Mica",
			"Silky Satin to High Sparkle",
			"Safe for Eye & Facial Cosmetics"
		],
		img: "/images/products/pearlescent.png",
		dotColor: "bg-rose-500",
		badgeBg: "bg-rose-50/80 border-rose-200/70",
		textColor: "text-rose-800"
	},
	{
		num: "09",
		slug: "white-no-tio2",
		name: "White Pigments Without Titanium Dioxide",
		group: "Food",
		desc: "Clean-label mineral and organic white opacifying alternatives engineered specifically for formulations without titanium dioxide (TiO₂).",
		highlights: [
			"TiO₂-Free Clean Label",
			"Effective Opacity & Whiteness",
			"Confectionery & Tablet Coating"
		],
		img: "/images/products/white-no-tio2.png",
		dotColor: "bg-sky-500",
		badgeBg: "bg-sky-50/80 border-sky-200/70",
		textColor: "text-sky-800"
	},
	{
		num: "10",
		slug: "red3-alt",
		name: "Alternatives for FD&C Red 3",
		group: "Food",
		desc: "Regulatory-compliant natural and synthetic red alternatives developed to replace FD&C Red No. 3 following US FDA updates.",
		highlights: [
			"Turnkey Red 3 Reformulation",
			"Heat & pH Robust Matches",
			"Applicable for Food & Confections"
		],
		img: "/images/products/red3-alt.png",
		dotColor: "bg-amber-500",
		badgeBg: "bg-amber-50/80 border-amber-200/70",
		textColor: "text-amber-800"
	},
	{
		num: "11",
		slug: "natural-lakes",
		name: "Synthetic Aluminium Lakes from Natural Colours",
		group: "Pharma",
		desc: "Advanced water-insoluble aluminium lakes produced from natural pigments, delivering high dispersion stability without bleeding.",
		highlights: [
			"Insoluble Non-Bleeding Lakes",
			"Natural Colour Source",
			"Compressed Tablets & Coatings"
		],
		img: "/images/products/natural-lakes.png",
		dotColor: "bg-blue-500",
		badgeBg: "bg-blue-50/80 border-blue-200/70",
		textColor: "text-blue-800"
	},
	{
		num: "12",
		slug: "fluorescent",
		name: "Fluorescent & Solvent Dyes",
		group: "Specialty",
		desc: "High-visibility fluorescent colourants and clear solvent-soluble dyes engineered for industrial tracing, plastics, and safety materials.",
		highlights: [
			"High Fluorescence Intensity",
			"Organic Solvent Solubility",
			"Plastics & Smoke Tracer Dyes"
		],
		img: "/images/products/fluorescent.png",
		dotColor: "bg-emerald-500",
		badgeBg: "bg-emerald-50/80 border-emerald-200/70",
		textColor: "text-emerald-800"
	},
	{
		num: "13",
		slug: "inkjet",
		name: "Stationery & Inkjet Dyes",
		group: "Specialty",
		desc: "Ultra-purified, de-salted dyes designed for high surface-tension inkjet inks, fountain pens, and precision highlighter markers.",
		highlights: [
			"Ultra-Low Salt Content",
			"No Printhead Clogging",
			"Vivid Neon & Optical Shades"
		],
		img: "/images/products/inkjet.png",
		dotColor: "bg-purple-500",
		badgeBg: "bg-purple-50/80 border-purple-200/70",
		textColor: "text-purple-800"
	},
	{
		num: "14",
		slug: "industrial",
		name: "Industrial Application Colourants",
		group: "Specialty",
		desc: "Heavy-duty specialty pigments and dyes tailored for polymers, masterbatches, seed coatings, textile dyeing, and technical fluids.",
		highlights: [
			"High Thermal Resistance",
			"Migration-Resistant Dyes",
			"Agriculture & Polymer Compounds"
		],
		img: "/images/products/industrial.png",
		dotColor: "bg-purple-500",
		badgeBg: "bg-purple-50/80 border-purple-200/70",
		textColor: "text-purple-800"
	}
];
var FILTER_TABS = [
	"All",
	"Food",
	"Pharma",
	"Cosmetics",
	"Specialty"
];
function ProductUniverse({ heading = "h2" }) {
	const [activeFilter, setActiveFilter] = (0, import_react.useState)("All");
	const filtered = EDITORIAL_PRODUCTS.filter((p) => activeFilter === "All" || p.group === activeFilter);
	const featured = filtered[0];
	const catalogueList = filtered.slice(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "products",
		className: "scroll-mt-20 bg-[#FAF8F5] py-20 lg:py-28 relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between pb-12 border-b border-stone-200/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2.5 text-xs font-bold uppercase tracking-widest text-slate-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-0.5 w-6 bg-blue-700" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "COLOUR PORTFOLIO · 14 SPECIALIZED FAMILIES" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(heading, {
							className: "mt-4 font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.08]",
							children: [
								"Colours for a",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-serif italic font-normal text-blue-700",
									children: "brighter world."
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: .15,
						className: "lg:max-w-md xl:max-w-lg flex flex-col justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm sm:text-base leading-relaxed text-slate-600",
							children: "High-purity, low-impurity colours engineered to comply with JECFA, USA, Europe, Japan, China, and India regulations as applicable — rigorously tested for global food, pharmaceutical, and cosmetic safety."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							role: "group",
							"aria-label": "Filter products by industry",
							className: "mt-6 flex flex-wrap items-center gap-2",
							children: FILTER_TABS.map((tab) => {
								const count = tab === "All" ? EDITORIAL_PRODUCTS.length : EDITORIAL_PRODUCTS.filter((p) => p.group === tab).length;
								const isActive = activeFilter === tab;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									"aria-pressed": isActive,
									onClick: () => setActiveFilter(tab),
									className: `rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${isActive ? "bg-slate-950 text-white shadow-sm ring-1 ring-slate-950" : "bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900 border border-stone-200/80"}`,
									children: [
										tab,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "opacity-60 font-normal",
											children: [
												"(",
												count,
												")"
											]
										})
									]
								}, tab);
							})
						})]
					})]
				}),
				featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "wait",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -16
						},
						transition: {
							duration: .4,
							ease: EASE
						},
						className: "mt-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products/$slug",
							params: { slug: featured.slug },
							className: "group grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-2xl sm:rounded-3xl bg-white border border-stone-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:border-slate-300",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-6 lg:col-span-7 relative aspect-[16/10] md:aspect-auto md:min-h-[22rem] lg:min-h-[26rem] overflow-hidden bg-stone-100",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImg, {
									src: featured.img,
									alt: featured.name,
									className: "h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute top-4 left-4 sm:top-6 sm:left-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-800 shadow-sm backdrop-blur-sm border border-stone-200/60",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-2 w-2 rounded-full ${featured.dotColor}` }),
											"Featured Family · ",
											featured.group
										]
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-6 lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 lg:p-12",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-2 text-xs font-mono font-medium text-slate-400",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["CATALOGUE REF. #", featured.num] })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-950 group-hover:text-blue-700 transition-colors",
										children: featured.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm sm:text-base leading-relaxed text-slate-600",
										children: featured.longDesc || featured.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex flex-wrap gap-2",
										children: featured.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1.5 rounded-md bg-stone-50 px-2.5 py-1 text-xs font-medium text-slate-700 border border-stone-200/60",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-3.5 w-3.5 text-blue-700" }), h]
										}, h))
									})
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-8 pt-6 border-t border-stone-100 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-2 font-bold text-sm text-blue-700 group-hover:text-blue-800",
										children: ["Explore Product Family & Specifications", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" })]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white shadow-sm transition-transform duration-200 group-hover:scale-105",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })
									})]
								})]
							})]
						})
					}, `featured-${activeFilter}-${featured.slug}`)
				}),
				catalogueList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between pb-6 border-b border-stone-200/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs font-bold tracking-widest uppercase text-slate-400 font-mono",
							children: [
								activeFilter === "All" ? "ALL FAMILIES" : `${activeFilter.toUpperCase()} RANGE`,
								" (",
								catalogueList.length,
								" PRODUCTS)"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-slate-400",
							children: "Click any family to view grade specifications"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8",
						children: catalogueList.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/products/$slug",
								params: { slug: product.slug },
								className: "group flex flex-col w-full rounded-2xl bg-white border border-stone-200/80 p-5 sm:p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] hover:border-slate-300 hover:-translate-y-0.5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-stone-100/70 border border-stone-200/50",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImg, {
											src: product.img,
											alt: product.name,
											className: "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center justify-between text-xs text-slate-500",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono font-medium text-slate-400",
											children: product.num
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold tracking-wider uppercase ${product.badgeBg} ${product.textColor}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${product.dotColor}` }), product.group]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-3 text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors",
										children: product.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm leading-relaxed text-slate-600 flex-1",
										children: product.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 pt-3 border-t border-stone-100 flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-semibold text-slate-500 group-hover:text-blue-700 transition-colors",
											children: "View Product Range"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "flex h-7 w-7 items-center justify-center rounded-full border border-stone-200 text-slate-400 transition-all duration-200 group-hover:border-blue-600 group-hover:text-blue-700 group-hover:bg-blue-50/60",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
										})]
									})
								]
							})
						}, product.slug))
					})]
				})
			]
		})
	});
}
//#endregion
export { ProductUniverse as t };
