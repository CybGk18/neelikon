import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-CnEnFpjG.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
	className: "container-x py-48 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "display text-5xl",
		children: "Product family not found."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/products",
		className: "mt-8 inline-flex rounded-full bg-navy btn text-paper",
		children: "View all products"
	})]
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
