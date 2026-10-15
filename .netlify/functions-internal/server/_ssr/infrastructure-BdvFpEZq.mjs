import { r as __toESM } from "../_runtime.mjs";
import { r as INFRA } from "./content-Dmi_BSeT.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { i as SafeImg, n as MaskImage, r as Reveal, t as EASE } from "./Reveal-BoqkhH5J.mjs";
import { S as ChevronLeft, t as X, x as ChevronRight } from "../_libs/lucide-react.mjs";
import { t as LEAD } from "./infrastructure-D2gS6Sq9.mjs";
import { t as FinalCta } from "./FinalCta-DFEW2CFb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/infrastructure-BdvFpEZq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Infra() {
	const all = INFRA.flatMap((g) => g.imgs.map((src, i) => ({
		src,
		alt: `${g.title} — photo ${i + 1}`
	})));
	const [open, setOpen] = (0, import_react.useState)(null);
	const closeRef = (0, import_react.useRef)(null);
	const opener = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (open === null) return;
		closeRef.current?.focus();
		const k = (e) => {
			if (e.key === "Escape") setOpen(null);
			if (e.key === "ArrowRight") setOpen((o) => o === null ? o : (o + 1) % all.length);
			if (e.key === "ArrowLeft") setOpen((o) => o === null ? o : (o - 1 + all.length) % all.length);
		};
		window.addEventListener("keydown", k);
		return () => {
			window.removeEventListener("keydown", k);
			opener.current?.focus();
		};
	}, [open, all.length]);
	let idx = 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[85vh] overflow-hidden bg-ink text-paper",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImg, {
					src: LEAD,
					alt: "Neelikon manufacturing plant",
					eager: true,
					className: "absolute inset-0 h-full w-full object-cover opacity-80"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "film-shade absolute inset-0" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x relative flex min-h-[85vh] flex-col justify-end pb-16 pt-32",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-sky",
							children: "Infrastructure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "display mt-4 max-w-4xl fs-section",
							children: ["The backbone of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "serif-accent text-flame",
								children: "Neelikon."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-lg text-paper/85",
							children: "Choosing a supplier goes beyond a polished website. We invite distributors and customers — current, new and prospective — to visit our facilities in Raigad, Maharashtra and Bharuch, Gujarat."
						})
					]
				})
			]
		}),
		INFRA.map((g, gi) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: `py-20 md:section-y ${gi % 2 ? "bg-card" : "bg-background"}`,
			"aria-labelledby": `g-${gi}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "grid gap-4 md:grid-cols-12 md:items-end",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-sm text-navy md:col-span-1",
							children: ["0", gi + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: `g-${gi}`,
							className: "display text-4xl md:col-span-6 md:text-6xl",
							children: g.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground md:col-span-4 md:col-start-9",
							children: g.note
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4",
					children: g.imgs.map((src, i) => {
						const n = idx++;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: i === 0 ? "col-span-2 row-span-2" : "",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: (e) => {
									opener.current = e.currentTarget;
									setOpen(n);
								},
								"aria-label": `Enlarge ${g.title} photo ${i + 1}`,
								className: "group block h-full w-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MaskImage, {
									src,
									alt: `${g.title} — photo ${i + 1}`,
									className: "aspect-[4/3] h-full bg-muted",
									imgClassName: "transition-transform duration-700 group-hover:scale-105"
								})
							})
						}, src);
					})
				})]
			})
		}, g.title)),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			role: "dialog",
			"aria-modal": "true",
			"aria-label": all[open].alt,
			className: "fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-4",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			onClick: () => setOpen(null),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: all[open].src,
					alt: all[open].alt,
					initial: {
						opacity: 0,
						scale: .97
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					transition: {
						duration: .35,
						ease: EASE
					},
					className: "max-h-[85vh] max-w-full object-contain",
					onClick: (e) => e.stopPropagation()
				}, open),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-paper/80",
					children: all[open].alt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					ref: closeRef,
					onClick: () => setOpen(null),
					"aria-label": "Close",
					className: "absolute right-4 top-4 rounded-full bg-paper p-2 text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						setOpen((open - 1 + all.length) % all.length);
					},
					"aria-label": "Previous photo",
					className: "absolute left-4 top-1/2 rounded-full bg-paper p-2 text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: (e) => {
						e.stopPropagation();
						setOpen((open + 1) % all.length);
					},
					"aria-label": "Next photo",
					className: "absolute right-4 top-1/2 rounded-full bg-paper p-2 text-ink",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
				})
			]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { Infra as component };
