"use client";

import Link from "next/link";
import { CATEGORIES } from "@/lib/data";
import { X } from "lucide-react";

export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog">
      <div className="absolute inset-0 bg-black/50 animate-fade-in" onClick={onClose} />
      <div className="absolute left-0 top-0 h-full w-72 max-w-[85%] bg-background shadow-xl animate-slide-in-right">
        <div className="flex items-center justify-between border-b border-border bg-foreground px-4 py-3 text-background">
          <span className="font-semibold">All Categories</span>
          <button onClick={onClose} aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <ul className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 52px)" }}>
          <li>
            <Link
              href="/categories"
              onClick={onClose}
              className="block border-b border-border px-4 py-3 text-sm font-semibold text-primary hover:bg-accent"
            >
              View All Categories →
            </Link>
          </li>
          {CATEGORIES.map((c) => (
            <li key={c.slug}>
              <Link
                href={`/category/${c.slug}`}
                onClick={onClose}
                className="block border-b border-border px-4 py-3 text-sm hover:bg-accent hover:text-primary"
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
