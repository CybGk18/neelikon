import { r as __toESM } from "../_runtime.mjs";
import { a as PRODUCTS, i as LOGO, n as CONTACT } from "./content-Dmi_BSeT.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { r as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as EASE } from "./Reveal-BoqkhH5J.mjs";
import { C as ChevronDown, T as ArrowRight, f as Menu, t as X } from "../_libs/lucide-react.mjs";
import { t as LEAD } from "./infrastructure-D2gS6Sq9.mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useLocation, v as createFileRoute, x as useRouter, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$5 } from "./products._slug-Drnb_I6T.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CEQWBIr3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DmcaBg3L.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message: describeThrown(error),
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var MAX_SERIALIZED_LENGTH = 2e3;
function describeThrown(error) {
	if (error instanceof Response) return `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`;
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	const { message } = error ?? {};
	if (typeof message === "string" && message.length > 0) return message;
	try {
		return JSON.stringify(error)?.slice(0, MAX_SERIALIZED_LENGTH) ?? String(error);
	} catch {
		return String(error);
	}
}
var NAV = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "Products",
		href: "/products"
	},
	{
		label: "Industries",
		href: "/#industries"
	},
	{
		label: "Innovation",
		href: "/#innovation"
	},
	{
		label: "About Us",
		href: "/about"
	},
	{
		label: "Quality",
		href: "/#quality"
	},
	{
		label: "Contact",
		href: "/#contact"
	}
];
function Logo({ invert }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		"aria-label": "Neelikon home",
		className: "flex items-center gap-2",
		children: [!failed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `rounded-sm px-1.5 py-1 ${invert ? "bg-paper" : ""}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: LOGO,
				alt: "Neelikon Colours Global",
				width: 140,
				height: 40,
				className: "h-9 w-auto",
				onError: () => setFailed(true)
			})
		}), failed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xl font-extrabold tracking-tight",
			children: "NEELIKON"
		})]
	});
}
function Header() {
	const { pathname } = useLocation();
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [mega, setMega] = (0, import_react.useState)(false);
	const [hover, setHover] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 40);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	(0, import_react.useEffect)(() => setOpen(false), [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "border-b border-[#E8E2D9] bg-[#FDFAF5]/90 text-foreground backdrop-blur-xl shadow-xs" : "bg-transparent text-[#0F172A]"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-20 items-center justify-between gap-6 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { invert: false }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Main",
					className: "hidden lg:block",
					onMouseLeave: () => {
						setHover(null);
						setMega(false);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex items-center gap-1",
						children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "relative",
							onMouseEnter: () => {
								setHover(n.label);
								setMega(n.label === "Products");
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: n.href,
								onFocus: () => setHover(n.label),
								className: "relative flex items-center gap-1 px-3 py-2 text-sm font-semibold",
								children: [
									n.label,
									n.label === "Products" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
										className: "h-3.5 w-3.5",
										"aria-hidden": true
									}),
									hover === n.label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
										layoutId: "nav-underline",
										className: "spectrum-bar absolute inset-x-3 -bottom-0.5 h-0.5",
										transition: {
											duration: .35,
											ease: EASE
										}
									})
								]
							})
						}, n.label))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: mega && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: -8
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: {
							opacity: 0,
							y: -8
						},
						transition: {
							duration: .3,
							ease: EASE
						},
						className: "absolute left-1/2 top-full w-[min(56rem,92vw)] -translate-x-1/2 border bg-background p-8 text-foreground shadow-2xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-5 text-muted-foreground",
							children: "Product portfolio"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "grid grid-cols-3 gap-x-8 gap-y-3",
							children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `/products/${p.slug}`,
								className: "text-sm font-medium transition-colors hover:text-navy",
								children: p.name
							}) }, p.slug))
						})]
					}) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/#contact",
						className: "hidden rounded-full btn min-h-11 px-5 text-sm font-bold bg-[#1E2B68] text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#151F4E] active:scale-95 sm:inline-flex items-center gap-2",
						children: ["Discuss Your Requirements ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						className: "p-2 lg:hidden text-[#0F172A]",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.nav, {
			"aria-label": "Mobile",
			initial: {
				opacity: 0,
				height: 0
			},
			animate: {
				opacity: 1,
				height: "100dvh"
			},
			exit: {
				opacity: 0,
				height: 0
			},
			transition: {
				duration: .45,
				ease: EASE
			},
			className: "overflow-hidden bg-ink text-paper lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "container-x flex flex-col gap-1 pt-6",
				children: [NAV.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.li, {
					initial: {
						opacity: 0,
						x: -16
					},
					animate: {
						opacity: 1,
						x: 0
					},
					transition: {
						delay: .05 * i + .1,
						ease: EASE
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						onClick: () => setOpen(false),
						className: "display block py-2 text-4xl",
						children: n.label
					})
				}, n.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#contact",
						onClick: () => setOpen(false),
						className: "inline-flex rounded-full bg-flame btn text-ink",
						children: "Discuss Your Requirements"
					})
				})]
			})
		}) })]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x grid gap-12 py-20 md:grid-cols-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { invert: true }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm text-sm leading-relaxed text-paper/60",
							children: "Neelikon Food Dyes and Chemicals Limited — manufacturer of food colours, pharmaceutical colourants, cosmetic pigments and specialty dyes, since 1983."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4 text-sky",
							children: "Products"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-2 text-sm text-paper/70",
							children: PRODUCTS.slice(0, 7).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `/products/${p.slug}`,
								className: "hover:text-paper",
								children: p.name
							}) }, p.slug))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4 text-sky",
							children: "Company"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm text-paper/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "hover:text-paper",
									children: "About Neelikon"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#quality",
									className: "hover:text-paper",
									children: "Quality & Certifications"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/infrastructure",
									className: "hover:text-paper",
									children: "Infrastructure"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#innovation",
									className: "hover:text-paper",
									children: "R&D"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/#insights",
									className: "hover:text-paper",
									children: "Blog & Insights"
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "https://neelikon.com/",
									target: "_blank",
									rel: "noreferrer",
									className: "hover:text-paper",
									children: "Privacy & disclaimer"
								}) })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mb-4 text-sky",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("address", {
							className: "space-y-3 text-sm not-italic text-paper/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: CONTACT.address }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${CONTACT.email}`,
									className: "hover:text-paper",
									children: CONTACT.email
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: CONTACT.phoneHref,
									className: "hover:text-paper",
									children: CONTACT.phone
								}) })
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "spectrum-bar h-1 origin-left",
				initial: { scaleX: 0 },
				whileInView: { scaleX: 1 },
				viewport: { once: true },
				transition: { duration: 1.4 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x flex flex-col justify-between gap-2 py-6 text-xs text-paper/50 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Neelikon Food Dyes and Chemicals Limited. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Colour has a science. Quality has a standard." })]
			})
		]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$4 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Neelikon — Colour Science" },
			{
				name: "description",
				content: "Neelikon Food Dyes and Chemicals Limited — colourants for food, pharma, cosmetics and industry."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$4.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
var $$splitComponentImporter$3 = () => import("./routes-B_0I15X4.mjs");
var Route$3 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Neelikon — Colour, Engineered. Food, Pharma & Cosmetic Colourants" },
		{
			name: "description",
			content: "Neelikon manufactures high-purity food colours, pharmaceutical colourants, cosmetic pigments and specialty dyes for customers in 100+ countries since 1983."
		},
		{
			property: "og:title",
			content: "Neelikon — Colour, Engineered. For a World in Motion."
		},
		{
			property: "og:description",
			content: "High-purity colourants for food, pharmaceutical, cosmetic and industrial applications, from Mumbai to 100+ countries."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-CJzhEgLX.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About Neelikon — Four Decades of Colour Expertise" },
		{
			name: "description",
			content: "Since 1983, Neelikon has manufactured food, pharmaceutical, cosmetic and specialty colourants in Mumbai for customers worldwide."
		},
		{
			property: "og:title",
			content: "About Neelikon — Four Decades of Colour Expertise"
		},
		{
			property: "og:description",
			content: "The story of Neelikon: R&D, manufacturing, distribution, and environmental and CSR initiatives."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./infrastructure-BdvFpEZq.mjs");
var Route$1 = createFileRoute("/infrastructure")({
	head: () => ({ meta: [
		{ title: "Infrastructure — Laboratories & Manufacturing | Neelikon" },
		{
			name: "description",
			content: "Inside Neelikon's laboratories, manufacturing plants in Raigad and Bharuch, EHS systems, warehouses and wastewater treatment."
		},
		{
			property: "og:title",
			content: "Neelikon infrastructure"
		},
		{
			property: "og:description",
			content: "Laboratories, manufacturing, EHS, warehousing and wastewater treatment at Neelikon."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			property: "og:image",
			content: LEAD
		},
		{
			name: "twitter:image",
			content: LEAD
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./products.index-D-2eoEaO.mjs");
var Route = createFileRoute("/products/")({
	head: () => ({ meta: [
		{ title: "Products — Food, Pharma, Cosmetic & Specialty Colourants | Neelikon" },
		{
			name: "description",
			content: "Explore Neelikon's 15 product families: food colours, pharmaceutical colourants, cosmetic pigments, pearlescent pigments, fluorescent dyes and more."
		},
		{
			property: "og:title",
			content: "Neelikon product portfolio"
		},
		{
			property: "og:description",
			content: "Fifteen colourant families for food, pharma, cosmetics and industry."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$4
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$4
});
var InfrastructureRoute = Route$1.update({
	id: "/infrastructure",
	path: "/infrastructure",
	getParentRoute: () => Route$4
});
var ProductsIndexRoute = Route.update({
	id: "/products/",
	path: "/products/",
	getParentRoute: () => Route$4
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	InfrastructureRoute,
	ProductsSlugRoute: Route$5.update({
		id: "/products/$slug",
		path: "/products/$slug",
		getParentRoute: () => Route$4
	}),
	ProductsIndexRoute
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
