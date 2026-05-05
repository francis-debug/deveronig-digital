import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DCEh5kpX.js";
import { u as useCart, a as useNavigate, L as Link, f as formatKsh, t as toast } from "./router-C8Caq8Dv.js";
import { P as PageShell } from "./PageShell-Ck9GCvGO.js";
import { c as createLucideIcon } from "./WhatsAppFab-DWyTIUMH.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode);
function CheckoutPage() {
  const {
    items,
    subtotal,
    clear
  } = useCart();
  const navigate = useNavigate();
  const [pay, setPay] = reactExports.useState("mpesa");
  const [submitted, setSubmitted] = reactExports.useState(false);
  if (items.length === 0 && !submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-bold", children: "Your cart is empty" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-4 inline-block text-primary hover:underline", children: "Go shopping" })
    ] }) });
  }
  if (submitted) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(PageShell, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-md py-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mx-auto h-16 w-16 text-success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-2xl font-bold text-foreground", children: "Order placed!" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "We received your order and will contact you shortly to confirm delivery." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90", children: "Back to Home" })
    ] }) });
  }
  const onSubmit = (e) => {
    e.preventDefault();
    clear();
    setSubmitted(true);
    toast.success("Order placed successfully");
    setTimeout(() => navigate({
      to: "/"
    }), 4500);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-foreground sm:text-3xl", children: "Checkout" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-5 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Contact Information", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", type: "tel", placeholder: "07xx xxx xxx", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email", required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { title: "Delivery Address", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "County", name: "county", required: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City / Town", name: "city", required: true })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Street / Building", name: "address", required: true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Delivery notes (optional)", name: "notes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { title: "Payment Method", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-2 sm:grid-cols-3", children: [{
          id: "mpesa",
          label: "M-PESA"
        }, {
          id: "card",
          label: "Card"
        }, {
          id: "cod",
          label: "Pay on Delivery"
        }].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: `flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm font-medium transition-all ${pay === opt.id ? "border-primary bg-accent text-primary" : "border-border hover:border-primary/50"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "radio", name: "pay", className: "accent-primary", checked: pay === opt.id, onChange: () => setPay(opt.id) }),
          opt.label
        ] }, opt.id)) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "h-fit space-y-3 rounded-xl border border-border bg-card p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Order Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "line-clamp-1 text-muted-foreground", children: [
            it.title,
            " × ",
            it.qty
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 font-medium", children: formatKsh(it.price * it.qty) })
        ] }, it.id)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-3 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Subtotal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatKsh(subtotal) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Delivery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "FREE" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between text-base font-bold text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatKsh(subtotal) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-2 inline-flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90", children: "Place Order" })
      ] })
    ] })
  ] });
}
function Section({
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mb-4 text-base font-semibold text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mb-1 block font-medium text-foreground", children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-discount", children: " *" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, required, placeholder, className: "h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20" })
  ] });
}
export {
  CheckoutPage as component
};
