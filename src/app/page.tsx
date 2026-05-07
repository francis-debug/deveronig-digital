"use client";

import { useState } from "react";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { CategorySidebar } from "@/components/CategorySidebar";
import { Hero } from "@/components/Hero";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { FlashSales } from "@/components/FlashSales";
import { ProductGrid } from "@/components/ProductGrid";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { MobileMenu } from "@/components/MobileMenu";
import { PRODUCTS } from "@/lib/data";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header onMenuClick={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="mx-auto max-w-7xl px-3 py-4 sm:px-4 sm:py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:h-96">
          <CategorySidebar />
          <Hero />
        </div>

        <div className="mt-8 space-y-10 sm:mt-10 sm:space-y-12">
          <CategoryShowcase limit={8} />
          <FlashSales />
          <ProductGrid title="Top Deals" subtitle="Hand-picked offers, updated daily" products={PRODUCTS.slice(0, 8)} />
          <ProductGrid title="Best Sellers" subtitle="What everyone's buying right now" products={[...PRODUCTS].reverse().slice(0, 8)} />
          <ProductGrid title="New Arrivals" subtitle="Fresh in store this week" products={PRODUCTS.slice(8, 16)} />
          <TrustSection />
        </div>
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  );
}
