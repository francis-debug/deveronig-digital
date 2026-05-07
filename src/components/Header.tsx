"use client";

import Link from "next/link";
import { Search, Heart, ShoppingCart, User, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/lib/cart";

export function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 sm:gap-3 md:gap-6 md:py-4">
        <button
          onClick={onMenuClick}
          className="rounded-md p-1.5 hover:bg-secondary lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        <Link href="/" className="flex shrink-0 items-center">
          <img src={logo} alt="Deveronig Digital Electronics" className="h-9 w-auto sm:h-10 md:h-12" />
        </Link>

        <form className="relative ml-auto hidden max-w-2xl flex-1 sm:block" role="search">
          <input
            type="search"
            placeholder="Search for products, brands and categories..."
            className="h-11 w-full rounded-full border border-border bg-secondary pl-5 pr-12 text-sm outline-none transition-all placeholder:text-muted-foreground focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>

        <nav className="ml-auto flex items-center gap-1 sm:ml-0">
          <IconBtn href="/" icon={<User className="h-5 w-5" />} label="Account" hideLabelMobile />
          <IconBtn href="/" icon={<Heart className="h-5 w-5" />} label="Wishlist" hideLabelMobile />
          <IconBtn href="/cart" icon={<ShoppingCart className="h-5 w-5" />} label="Cart" badge={count} />
        </nav>
      </div>

      {/* Mobile-only search row */}
      <div className="border-t border-border px-4 py-2.5 sm:hidden">
        <form className="relative" role="search">
          <input
            type="search"
            placeholder="Search products..."
            className="h-10 w-full rounded-full border border-border bg-secondary pl-4 pr-11 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:bg-background"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </button>
        </form>
      </div>
    </header>
  );
}

function IconBtn({
  icon,
  label,
  badge,
  href,
  hideLabelMobile,
}: {
  icon: React.ReactNode;
  label: string;
  badge?: number;
  href: string;
  hideLabelMobile?: boolean;
}) {
  return (
    <Link
      href={href}
      className="relative flex flex-col items-center gap-0.5 rounded-md px-2 py-1.5 text-[11px] text-foreground transition-colors hover:bg-secondary sm:px-3 sm:text-xs"
    >
      <div className="relative">
        {icon}
        {badge !== undefined && badge > 0 && (
          <span className="absolute -right-2 -top-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
            {badge}
          </span>
        )}
      </div>
      <span className={hideLabelMobile ? "hidden md:block" : ""}>{label}</span>
    </Link>
  );
}
