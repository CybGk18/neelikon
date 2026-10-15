import { r as __toESM } from "../_runtime.mjs";
import { a as PRODUCTS, n as CONTACT } from "./content-Dmi_BSeT.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as CircleCheck } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/EnquiryForm-BxMOz4FS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMPTY = {
	name: "",
	company: "",
	email: "",
	country: "",
	phone: "",
	product: "",
	application: "",
	message: ""
};
function validate(v) {
	const e = {};
	if (v.name.trim().length < 2) e.name = "Please enter your name.";
	if (v.company.trim().length < 2) e.company = "Please enter your company name.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = "Please enter a valid business email.";
	if (v.country.trim().length < 2) e.country = "Please enter your country.";
	if (!/^[+()\d\s-]{7,20}$/.test(v.phone.trim())) e.phone = "Please enter a valid contact number.";
	if (v.product.trim().length < 2) e.product = "Please choose or type a product or product family.";
	if (v.message.trim().length < 10) e.message = "Please tell us a little more (10+ characters).";
	return e;
}
function EnquiryForm({ product, intent }) {
	const [v, setV] = (0, import_react.useState)(EMPTY);
	const [err, setErr] = (0, import_react.useState)({});
	const [state, setState] = (0, import_react.useState)("idle");
	const busy = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		const p = product ?? new URLSearchParams(window.location.search).get("product") ?? "";
		if (!p) return;
		const msg = intent === "sample" ? `I would like to request a sample of ${p}.` : intent === "documents" ? `Please share the TDS / MSDS for ${p}.` : "";
		setV((s) => ({
			...s,
			product: p,
			message: msg || s.message
		}));
		setState("idle");
	}, [product, intent]);
	const set = (k) => (e) => setV((s) => ({
		...s,
		[k]: e.target.value
	}));
	async function submit(e) {
		e.preventDefault();
		if (busy.current) return;
		const er = validate(v);
		setErr(er);
		if (Object.keys(er).length) {
			document.getElementById(`f-${Object.keys(er)[0]}`)?.focus();
			return;
		}
		busy.current = true;
		setState("sending");
		const body = `Name: ${v.name}\nCompany: ${v.company}\nEmail: ${v.email}\nCountry: ${v.country}\nPhone: ${v.phone}\nProduct: ${v.product}\nApplication: ${v.application}\n\n${v.message}`;
		window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Enquiry: ${v.product} — ${v.company}`)}&body=${encodeURIComponent(body)}`;
		setState("mail");
		busy.current = false;
	}
	if (state === "sent" || state === "mail") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: "flex flex-col items-start gap-4 border border-paper/20 p-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-10 w-10 text-flame" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-2xl font-bold",
				children: state === "sent" ? "Thank you — your enquiry has been received." : "Your email app should now be open with your enquiry ready."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-paper/70",
				children: state === "mail" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Your enquiry is only delivered once you press send in your email app. If it didn't open, write to ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "underline",
						href: `mailto:${CONTACT.email}`,
						children: CONTACT.email
					}),
					" or call ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "underline",
						href: CONTACT.phoneHref,
						children: CONTACT.phone
					}),
					"."
				] }) : "Our team will be in touch."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => {
					setV(EMPTY);
					setState("idle");
				},
				className: "mt-2 text-sm font-bold underline",
				children: "Start a new enquiry"
			})
		]
	});
	const field = "w-full border-b border-paper/30 bg-transparent py-3 text-base text-paper placeholder:text-paper/40 focus:border-flame focus:outline-none";
	const input = (k, label, type = "text", auto, list) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: `f-${k}`,
			className: "eyebrow text-paper/70",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: `f-${k}`,
			type,
			list,
			autoComplete: auto,
			value: v[k],
			onChange: set(k),
			"aria-invalid": !!err[k],
			"aria-describedby": err[k] ? `e-${k}` : void 0,
			className: field
		}),
		err[k] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			id: `e-${k}`,
			className: "mt-1 text-sm text-flame",
			children: err[k]
		})
	] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		noValidate: true,
		onSubmit: submit,
		className: "grid gap-6 sm:grid-cols-2",
		children: [
			input("name", "Name", "text", "name"),
			input("company", "Company name", "text", "organization"),
			input("email", "Business email", "email", "email"),
			input("country", "Country", "text", "country-name"),
			input("phone", "Contact number", "tel", "tel"),
			input("product", "Product or product family", "text", "off", "f-products"),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("datalist", {
				id: "f-products",
				children: PRODUCTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { value: p.name }, p.slug))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "sm:col-span-2",
				children: input("application", "Application or end use (optional)")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "sm:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "f-message",
						className: "eyebrow text-paper/70",
						children: "Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						id: "f-message",
						rows: 4,
						value: v.message,
						onChange: set("message"),
						"aria-invalid": !!err.message,
						"aria-describedby": err.message ? "e-message" : void 0,
						className: field
					}),
					err.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						id: "e-message",
						className: "mt-1 text-sm text-flame",
						children: err.message
					})
				]
			}),
			state === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				role: "alert",
				className: "text-flame sm:col-span-2",
				children: [
					"We couldn't send your enquiry. Please try again or email ",
					CONTACT.email,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-4 sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: state === "sending",
					className: "rounded-full bg-flame btn text-ink transition-transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-60",
					children: state === "sending" ? "Preparing…" : "Send Enquiry"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-paper/60",
					children: "Opens your email app with the enquiry filled in."
				})]
			})
		]
	});
}
//#endregion
export { EnquiryForm as t };
