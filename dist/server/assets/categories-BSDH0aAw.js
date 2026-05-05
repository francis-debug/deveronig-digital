import { U as jsxRuntimeExports } from "./worker-entry-DCEh5kpX.js";
import { L as Link, C as CATEGORIES } from "./router-C8Caq8Dv.js";
import { P as PageShell } from "./PageShell-Ck9GCvGO.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./WhatsAppFab-DWyTIUMH.js";
function CategoriesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mb-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary", children: "Home" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "/" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Categories" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground sm:text-3xl", children: "All Categories" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Explore our complete range — 20 product categories." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/category/$slug", params: {
      slug: c.slug
    }, className: "group flex flex-col items-center text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square w-full overflow-hidden rounded-2xl bg-secondary p-3 transition-all group-hover:bg-accent group-hover:shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.image, alt: c.name, loading: "lazy", className: "h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 line-clamp-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary", children: c.name })
    ] }, c.slug)) })
  ] });
}
export {
  CategoriesPage as component
};
