import Link from "next/link";
import { CATEGORIES } from "@/lib/data";
import { SectionHeader } from "./SectionHeader";

export function CategoryShowcase({ limit = 8, showSeeAll = true }: { limit?: number; showSeeAll?: boolean }) {
  const items = CATEGORIES.slice(0, limit);
  return (
    <section>
      <SectionHeader
        title="Shop by Category"
        subtitle="Browse our top product categories"
        actionHref={showSeeAll ? "/categories" : undefined}
        actionLabel="See All →"
      />
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {items.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
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
