import { U as jsxRuntimeExports } from "./worker-entry-DCEh5kpX.js";
import { u as useCart, L as Link, f as formatKsh } from "./router-C8Caq8Dv.js";
import { P as PageShell } from "./PageShell-Ck9GCvGO.js";
import { c as createLucideIcon } from "./WhatsAppFab-DWyTIUMH.js";
import { M as Minus, P as Plus } from "./plus-C0NRyBFZ.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M16 10a4 4 0 0 1-8 0", key: "1ltviw" }],
  ["path", { d: "M3.103 6.034h17.794", key: "awc11p" }],
  [
    "path",
    {
      d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
      key: "o988cm"
    }
  ]
];
const ShoppingBag = createLucideIcon("shopping-bag", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function CartPage() {
  const {
    items,
    setQty,
    remove,
    subtotal,
    count
  } = useCart();
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-7 w-7" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-2xl font-bold text-foreground", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Discover great deals on electronics & appliances." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90", children: "Continue Shopping" })
    ] }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold text-foreground sm:text-3xl", children: [
      "Your Cart (",
      count,
      ")"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 lg:col-span-2", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 rounded-xl border border-border bg-card p-3 sm:gap-4 sm:p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: {
          id: it.id
        }, className: "h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-secondary sm:h-28 sm:w-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: it.image, alt: it.title, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/product/$id", params: {
            id: it.id
          }, className: "line-clamp-2 text-sm font-medium text-foreground hover:text-primary sm:text-base", children: it.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-base font-bold text-foreground", children: formatKsh(it.price) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between gap-3 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center rounded-full border border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(it.id, it.qty - 1), className: "px-2.5 py-1.5 hover:text-primary", "aria-label": "Decrease", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, { className: "h-3.5 w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "min-w-7 text-center text-sm font-semibold tabular-nums", children: it.qty }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(it.id, it.qty + 1), className: "px-2.5 py-1.5 hover:text-primary", "aria-label": "Increase", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-3.5 w-3.5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => remove(it.id), className: "flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-destructive", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-3.5 w-3.5" }),
              " Remove"
            ] })
          ] })
        ] })
      ] }, it.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-fit rounded-xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-4 space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Subtotal", value: formatKsh(subtotal) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Delivery", value: "Calculated at checkout" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3 border-t border-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { label: "Total", value: formatKsh(subtotal), bold: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/checkout", className: "mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90", children: "Proceed to Checkout" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-2 block text-center text-xs text-muted-foreground hover:text-primary", children: "← Continue Shopping" })
      ] })
    ] })
  ] });
}
function Row({
  label,
  value,
  bold
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center justify-between ${bold ? "text-base font-bold text-foreground" : "text-muted-foreground"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: bold ? "text-foreground" : "", children: value })
  ] });
}
export {
  CartPage as component
};
