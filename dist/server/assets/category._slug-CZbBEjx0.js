import { U as jsxRuntimeExports } from "./worker-entry-DCEh5kpX.js";
import { b as Route, c as getCategory, p as productsByCategory, L as Link, C as CATEGORIES, P as PRODUCTS } from "./router-C8Caq8Dv.js";
import { P as PageShell } from "./PageShell-Ck9GCvGO.js";
import { P as ProductCard } from "./WhatsAppFab-DWyTIUMH.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function CategoryPage() {
  const {
    slug
  } = Route.useParams();
  const cat = getCategory(slug);
  let items = productsByCategory(slug);
  if (items.length === 0) items = PRODUCTS.slice(0, 8);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mb-3 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary", children: "Home" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/categories", className: "hover:text-primary", children: " Categories" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "/" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: cat.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-accent to-secondary p-6 sm:p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground sm:text-3xl", children: cat.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-sm text-muted-foreground", children: [
        items.length,
        " products available"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-6 flex flex-wrap gap-2", children: CATEGORIES.slice(0, 10).map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/category/$slug", params: {
      slug: c.slug
    }, className: `rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${c.slug === slug ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary hover:text-primary"}`, children: c.name }, c.slug)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4", children: items.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
  ] });
}
export {
  CategoryPage as component
};
