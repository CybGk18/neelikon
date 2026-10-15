import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-BoqkhH5J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EASE = [
	.22,
	1,
	.36,
	1
];
function Reveal({ children, delay = 0, className, y = 28 }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: reduce ? false : {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-10% 0px"
		},
		transition: {
			duration: .8,
			delay,
			ease: EASE
		},
		children
	});
}
function MaskImage({ src, alt, className, imgClassName, eager }) {
	const reduce = useReducedMotion();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className: `overflow-hidden ${className ?? ""}`,
		initial: reduce ? false : { clipPath: "inset(12% 12% 12% 12%)" },
		whileInView: { clipPath: "inset(0% 0% 0% 0%)" },
		viewport: {
			once: true,
			margin: "-10% 0px"
		},
		transition: {
			duration: 1.1,
			ease: EASE
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImg, {
			src,
			alt,
			eager,
			className: `h-full w-full object-cover ${imgClassName ?? ""}`
		})
	});
}
function SafeImg({ src, alt, className, eager }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	if (failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "img",
		"aria-label": alt,
		className: `spectrum-bar opacity-80 ${className ?? ""}`
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt,
		loading: eager ? "eager" : "lazy",
		decoding: "async",
		onError: () => setFailed(true),
		className
	});
}
//#endregion
export { SafeImg as i, MaskImage as n, Reveal as r, EASE as t };
