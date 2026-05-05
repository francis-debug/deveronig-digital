import { SectionHeader } from "./SectionHeader";
import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/data";

export function ProductGrid({
  title,
  subtitle,
  products,
  actionTo = "/categories",
  gradient = false,
}: {
  title: string;
  subtitle?: string;
  products: Product[];
  actionTo?: string;
  gradient?: boolean;
}) {
  return (
    <section>
      <SectionHeader title={title} subtitle={subtitle} actionTo={actionTo} gradient={gradient} />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}
