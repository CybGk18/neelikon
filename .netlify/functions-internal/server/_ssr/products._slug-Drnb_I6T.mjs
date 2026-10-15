import { a as PRODUCTS } from "./content-Dmi_BSeT.mjs";
import { _ as lazyRouteComponent, q as notFound, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products._slug-Drnb_I6T.js
var $$splitComponentImporter = () => import("./products._slug-DpWbeIBW.mjs");
var $$splitNotFoundComponentImporter = () => import("./products._slug-CnEnFpjG.mjs");
var Route = createFileRoute("/products/$slug")({
	loader: ({ params }) => {
		const product = PRODUCTS.find((p) => p.slug === params.slug);
		if (!product) throw notFound();
		return { product };
	},
	head: ({ loaderData }) => {
		const p = loaderData?.product;
		const title = p ? `${p.name} — Neelikon` : "Product not found — Neelikon";
		const desc = p ? p.intro ?? p.blurb : "This Neelikon product page could not be found.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: desc.slice(0, 160)
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: desc.slice(0, 160)
			},
			{
				property: "og:type",
				content: "product.group"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			...p ? [{
				property: "og:image",
				content: p.img
			}, {
				name: "twitter:image",
				content: p.img
			}] : [{
				name: "robots",
				content: "noindex"
			}]
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
