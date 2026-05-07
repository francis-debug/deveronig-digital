"use client";

import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { CATEGORIES } from "@/lib/data";

function CategoriesPage() {
  return (
    <PageShell>
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Home</Link> <span className="mx-1">/</span>{" "}
        <span className="text-foreground">Categories</span>
      </nav>
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">All Categories</h1>
      <p className="mt-1 text-sm text-muted-foreground">Explore our complete range — 20 product categories.</p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {CATEGORIES.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className="group flex flex-col items-center text-center"
          >
            <div className="aspect-square w-full overflow-hidden rounded-2xl bg-secondary p-3 transition-all group-hover:bg-accent group-hover:shadow-md">
              <img
                src={c.image}
                alt={c.name}
                loading="lazy"
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="mt-2 line-clamp-2 text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
              {c.name}
            </span>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}

export default CategoriesPage;
