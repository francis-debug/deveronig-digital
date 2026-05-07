"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { CATEGORIES, PRODUCTS, getCategory, productsByCategory } from "@/lib/data";

function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const cat = getCategory(slug!);
  
  if (!cat) {
    return (
      <PageShell>
        <p>Category not found.</p>
      </PageShell>
    );
  }

  let items = productsByCategory(slug!);
  if (items.length === 0) items = PRODUCTS.slice(0, 8); // fallback so page is not empty

  return (
    <PageShell>
      <nav className="mb-3 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Home</Link> <span className="mx-1">/</span>
        <Link href="/categories" className="hover:text-primary"> Categories</Link>{" "}
        <span className="mx-1">/</span> <span className="text-foreground">{cat.name}</span>
      </nav>

      <header className="mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-accent to-secondary p-6 sm:p-8">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">{cat.name}</h1>
        <p className="mt-1 text-sm text-muted-foreground">{items.length} products available</p>
      </header>

      {/* Sub-category chips */}
      <div className="mb-6 flex flex-wrap gap-2">
        {CATEGORIES.slice(0, 10).map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              c.slug === slug
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-foreground hover:border-primary hover:text-primary"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </PageShell>
  );
}

export default CategoryPage;
