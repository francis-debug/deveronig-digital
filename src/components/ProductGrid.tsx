import { SectionHeader } from "./SectionHeader";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/data";

export function ProductGrid({
  title,
  subtitle,
  products,
  actionTo = "/categories",
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  actionTo?: string;
}) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} actionTo={actionTo} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4 xl:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
