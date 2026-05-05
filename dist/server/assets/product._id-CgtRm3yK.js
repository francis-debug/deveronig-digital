import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DCEh5kpX.js";
import { R as Route, g as getProduct, u as useCart, f as formatKsh, P as PRODUCTS, L as Link, W as WHATSAPP_NUMBER } from "./router-C8Caq8Dv.js";
import { P as PageShell } from "./PageShell-Ck9GCvGO.js";
import { c as createLucideIcon, T as Truck, S as ShieldCheck, a as ShoppingCart, b as WhatsAppIcon, P as ProductCard } from "./WhatsAppFab-DWyTIUMH.js";
import { M as Minus, P as Plus } from "./plus-C0NRyBFZ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = createLucideIcon("rotate-ccw", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function ProductPage() {
  const {
    id
  } = Route.useParams();
  const product = getProduct(id);
  const {
    add
  } = useCart();
  const [qty, setQty] = reactExports.useState(1);
  const discount = product.oldPrice ? Math.round((product.oldPrice - product.price) / product.oldPrice * 100) : 0;
  const waMsg = encodeURIComponent(`Hi Deveronig, I'd like to order: ${product.title} (${formatKsh(product.price)}) x ${qty}`);
  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mb-4 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary", children: "Home" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "/" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/category/$slug", params: {
        slug: product.category
      }, className: "hover:text-primary capitalize", children: [
        " ",
        product.category.replace(/-/g, " ")
      ] }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-1", children: "/" }),
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground line-clamp-1 inline", children: product.title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2 lg:gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-xl border border-border bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: product.image, alt: product.title, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-24 lg:pb-0", children: [
        product.brand && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wider text-primary", children: product.brand }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 text-2xl font-bold text-foreground sm:text-3xl", children: product.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0.5 text-primary", children: Array.from({
            length: 5
          }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: `h-4 w-4 ${i < Math.round(product.rating) ? "fill-primary" : ""}` }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: product.rating }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "(",
            product.reviews,
            " reviews)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-xl border border-border bg-card p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl font-bold text-foreground", children: formatKsh(product.price) }),
            product.oldPrice && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base text-muted-foreground line-through", children: formatKsh(product.oldPrice) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-md bg-discount/10 px-2 py-0.5 text-xs font-bold text-discount", children: [
                "-",
                discount,
                "%"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "VAT inclusive · Pay on delivery available" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Quantity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-full border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => Math.max(1, q - 1)), className: "px-3 py-2 hover:text-primary", "aria-label": "Decrease", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-8 text-center text-sm font-semibold tabular-nums", children: qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => q + 1), className: "px-3 py-2 hover:text-primary", "aria-label": "Increase", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Perk, { icon: Truck, title: "Fast Delivery", desc: "Countrywide" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Perk, { icon: ShieldCheck, title: "Genuine", desc: "Full warranty" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Perk, { icon: RotateCcw, title: "Easy Returns", desc: "7-day policy" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-base font-semibold text-foreground", children: "Description" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: product.description ?? `Genuine ${product.brand ?? ""} ${product.title} sourced directly from authorized distributors. Backed by our standard warranty and supported by our local team. Order online or via WhatsApp — pay on delivery available within Nairobi.` })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md p-3 shadow-lg lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold text-foreground", children: formatKsh(product.price) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-full border border-border bg-secondary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => Math.max(1, q - 1)), className: "px-2 py-1.5 hover:text-primary", "aria-label": "Decrease", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-6 text-center text-sm font-semibold tabular-nums", children: qty }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty((q) => q + 1), className: "px-2 py-1.5 hover:text-primary", "aria-label": "Increase", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => add(product, qty), className: "flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "h-5 w-5" }),
        " Add to Cart"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: `https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`, target: "_blank", rel: "noopener noreferrer", className: "flex-1 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-whatsapp text-sm font-semibold text-whatsapp-foreground transition-all hover:bg-whatsapp/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppIcon, { className: "h-5 w-5" }),
        " WhatsApp"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12 mb-20 lg:mb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-xl font-bold text-foreground", children: "You may also like" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4", children: related.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) })
    ] })
  ] });
}
function Perk({
  icon: Icon,
  title,
  desc
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 rounded-lg border border-border bg-card p-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: desc })
    ] })
  ] });
}
export {
  ProductPage as component
};
