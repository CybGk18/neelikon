import { r as INFRA, t as ABOUT_IMG } from "./content-Dmi_BSeT.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as MaskImage, r as Reveal } from "./Reveal-BoqkhH5J.mjs";
import { T as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CJzhEgLX.js
var import_jsx_runtime = require_jsx_runtime();
var [LAB, PLANT, , WARE, ETP] = INFRA.map((g) => g.imgs);
var CHAPTERS = [
	{
		k: "Research & testing",
		t: "Analytical rigour at the core.",
		d: "Continuous R&D and in-house testing — including HPLC, ion chromatography, gas chromatography and ICP-OES — support quality improvement across our ranges.",
		img: LAB[6]
	},
	{
		k: "Distribution network",
		t: "International relationships.",
		d: "Long-standing distribution and business partnerships take Neelikon colourants to customers across 100+ countries.",
		img: WARE[0]
	},
	{
		k: "Manufacturing & packaging",
		t: "Built around the customer.",
		d: "Manufacturing and customer-centric packaging, backed by technical support for each application.",
		img: WARE[3]
	},
	{
		k: "Environment",
		t: "Responsible operations.",
		d: "Environmental initiatives, including effluent treatment, are part of how we manufacture.",
		img: ETP[0]
	},
	{
		k: "CSR",
		t: "Commitment beyond business.",
		d: "Corporate social responsibility initiatives in the communities we are part of.",
		img: ABOUT_IMG.csr
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-ink pb-20 pt-40 text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-sky",
					children: "About Neelikon · Est. 1983 · Mumbai"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "display mt-6 max-w-6xl fs-section",
					children: ["Four decades of colour expertise. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "serif-accent text-flame",
						children: "A future of possibilities."
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-4 md:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskImage, {
						eager: true,
						src: PLANT[0],
						alt: "Neelikon manufacturing plant",
						className: "aspect-[16/10] md:col-span-8"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskImage, {
						eager: true,
						src: LAB[2],
						alt: "Neelikon quality-control laboratory",
						className: "aspect-[16/10] md:aspect-auto md:col-span-4"
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-12 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					className: "md:col-span-5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display fs-section",
						children: "A Mumbai manufacturer with a global outlook."
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "space-y-5 text-lg text-muted-foreground md:col-span-6 md:col-start-7",
					delay: .1,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Neelikon Food Dyes and Chemicals Limited was established in 1983 as a Mumbai-based manufacturing and export business." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today its expertise spans food, pharmaceutical, cosmetic, personal-care and specialty industrial colourants — guided by a leadership focus on continuous R&D, quality improvement and long-term customer relationships." })]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-card section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-navy",
					children: "Timeline"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-px bg-border md:grid-cols-3",
					children: [
						["1983", "Neelikon is established in Mumbai."],
						["Growth", "Expansion across food, pharmaceutical, cosmetic and industrial colourants."],
						["Today", "Serving customers in 100+ countries through an international network."]
					].map(([y, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "bg-card p-8 md:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "fs-stat text-navy",
							children: y
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg",
							children: d
						})]
					}, y))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x space-y-24 md:space-y-32",
				children: CHAPTERS.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `grid items-center gap-10 md:grid-cols-12 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskImage, {
						src: c.img,
						alt: c.k,
						className: "aspect-[4/3] md:col-span-7"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: i % 2 ? "md:col-span-4 md:col-start-2" : "md:col-span-4 md:col-start-9",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "eyebrow text-navy",
								children: [
									String(i + 1).padStart(2, "0"),
									" · ",
									c.k
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "display fs-sub mt-4",
								children: c.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-lg text-muted-foreground",
								children: c.d
							})
						]
					})]
				}, c.k))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "navy-field section-y text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x flex flex-col items-start justify-between gap-8 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display max-w-3xl fs-section",
					children: "Let's create what's next in colour."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/#contact",
					className: "inline-flex items-center gap-2 rounded-full bg-flame btn text-ink",
					children: ["Discuss Your Requirements ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
