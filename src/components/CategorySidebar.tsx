import Link from "next/link";
import { CATEGORIES } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export function CategorySidebar() {
  return (
    <aside className="hidden w-48 shrink-0 lg:block xl:w-52">
      <div className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card">
        <div className="bg-foreground px-3 py-2 text-lg font-semibold text-background">
          All Categories
        </div>
        <ul className="flex-1 overflow-y-auto">
          {CATEGORIES.slice(0, 12).map((c) => (
            <li key={c.slug}>
              <Link
                href={`/category/${c.slug}`}
                className="group flex items-center justify-between gap-2 border-b border-border px-3 py-2 text-lg text-foreground transition-colors last:border-0 hover:bg-accent hover:text-primary"
              >
                <span className="truncate">{c.name}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/categories"
          className="block border-t border-border bg-secondary px-3 py-2 text-center text-lg font-semibold text-primary hover:bg-accent"
        >
          View All Categories →
        </Link>
      </div>
    </aside>
  );
}
