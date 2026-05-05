import { ReactNode, useState } from "react";
import { AnnouncementBar } from "./AnnouncementBar";
import { Header } from "./Header";
import { MobileMenu } from "./MobileMenu";
import { Footer } from "./Footer";
import { WhatsAppFab } from "./WhatsAppFab";

export function PageShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header onMenuClick={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="mx-auto max-w-7xl px-3 py-5 sm:px-4 sm:py-6">{children}</main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
