import { Link } from "@tanstack/react-router";
import { CATEGORIES } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function CategoryShowcase({ limit = 8, showSeeAll = true, gradient = false }: { limit?: number; showSeeAll?: boolean; gradient?: boolean }) {
  const items = CATEGORIES.slice(0, limit);
  return (
    <section>
      <SectionHeader
        title="Shop by Category"
        subtitle="Browse our top product categories"
        actionTo={showSeeAll ? "/categories" : undefined}
        actionLabel="See All →"
        gradient={gradient}
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {items.map((c) => (
          <Link
            key={c.slug}
            to="/category/$slug"
            params={{ slug: c.slug }}
            className="group flex flex-col items-center text-center"
          >
            <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-secondary p-3 transition-all group-hover:bg-accent group-hover:shadow-md">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="mt-2 line-clamp-2 text-xs font-semibold text-foreground transition-colors group-hover:text-primary sm:text-sm">
              {c.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
