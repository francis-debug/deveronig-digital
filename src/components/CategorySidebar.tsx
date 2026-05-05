import { Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export function CategorySidebar() {
  return (
    <aside className="hidden w-60 shrink-0 lg:block xl:w-64">
      <div className="overflow-hidden rounded-xl border border-border bg-card">
        <div className="bg-foreground px-4 py-3 text-sm font-semibold text-background">
          All Categories
        </div>
        <ul className="max-h-[380px] overflow-y-auto">
          {CATEGORIES.slice(0, 12).map((c) => (
            <li key={c.slug}>
              <Link
                to="/category/$slug"
                params={{ slug: c.slug }}
                className="group flex items-center justify-between gap-2 border-b border-border px-4 py-2.5 text-sm text-foreground transition-colors last:border-0 hover:bg-accent hover:text-primary"
              >
                <span className="truncate">{c.name}</span>
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/categories"
          className="block border-t border-border bg-secondary px-4 py-2.5 text-center text-xs font-semibold text-primary hover:bg-accent"
        >
          View All Categories →
        </Link>
      </div>
    </aside>
  );
}
