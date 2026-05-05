import { r as reactExports, U as jsxRuntimeExports } from "./worker-entry-DCEh5kpX.js";
import { A as AnnouncementBar, H as Header, M as MobileMenu, F as Footer, W as WhatsAppFab } from "./WhatsAppFab-DWyTIUMH.js";
function PageShell({ children }) {
  const [menuOpen, setMenuOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnnouncementBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { onMenuClick: () => setMenuOpen(true) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MobileMenu, { open: menuOpen, onClose: () => setMenuOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "mx-auto max-w-7xl px-3 py-5 sm:px-4 sm:py-6", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppFab, {})
  ] });
}
export {
  PageShell as P
};
