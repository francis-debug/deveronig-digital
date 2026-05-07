"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { Star, Truck, ShieldCheck, RotateCcw, Minus, Plus, ShoppingCart } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { ProductCard, WhatsAppIcon } from "@/components/ProductCard";
import { getProduct, PRODUCTS, WHATSAPP_NUMBER } from "@/lib/data";
import { useCart, formatKsh } from "@/lib/cart";

function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id!);
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <PageShell>
        <p>Product not found.</p>
      </PageShell>
    );
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const waMsg = encodeURIComponent(
    `Hi Deveronig, I'd like to order: ${product.title} (${formatKsh(product.price)}) x ${qty}`,
  );

  const related = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <PageShell>
      <nav className="mb-4 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">Home</Link> <span className="mx-1">/</span>
        <Link href={`/category/${product.category}`} className="hover:text-primary capitalize">
          {" "}{product.category.replace(/-/g, " ")}
        </Link>{" "}
        <span className="mx-1">/</span> <span className="text-foreground line-clamp-1 inline">{product.title}</span>
      </nav>

      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-border bg-white p-6">
          <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
        </div>

        <div>
          {product.brand && (
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">{product.brand}</span>
          )}
          <h1 className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">{product.title}</h1>

          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-primary" : ""}`} />
              ))}
            </div>
            <span className="text-foreground font-medium">{product.rating}</span>
            <span>({product.reviews} reviews)</span>
          </div>

          <div className="mt-5 rounded-xl border border-border bg-card p-4">
            <div className="flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-bold text-foreground">{formatKsh(product.price)}</span>
              {product.oldPrice && (
                <>
                  <span className="text-base text-muted-foreground line-through">{formatKsh(product.oldPrice)}</span>
                  <span className="rounded-md bg-discount/10 px-2 py-0.5 text-xs font-bold text-discount">-{discount}%</span>
                </>
              )}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">VAT inclusive · Pay on delivery available</p>

            <div className="mt-4 flex items-center gap-3">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center rounded-full border border-border">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="px-3 py-2 hover:text-primary" aria-label="Decrease">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-8 text-center text-sm font-semibold tabular-nums">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="px-3 py-2 hover:text-primary" aria-label="Increase">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              <button
                onClick={() => add(product, qty)}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98]"
              >
                <ShoppingCart className="h-4 w-4" /> Add to Cart
              </button>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-whatsapp text-sm font-semibold text-whatsapp-foreground transition-all hover:bg-whatsapp/90"
              >
                <WhatsAppIcon className="h-4 w-4" /> Order on WhatsApp
              </a>
            </div>
          </div>

          <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Perk icon={Truck} title="Fast Delivery" desc="Countrywide" />
            <Perk icon={ShieldCheck} title="Genuine" desc="Full warranty" />
            <Perk icon={RotateCcw} title="Easy Returns" desc="7-day policy" />
          </ul>

          <div className="mt-6">
            <h2 className="text-base font-semibold text-foreground">Description</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {product.description ??
                `Genuine ${product.brand ?? ""} ${product.title} sourced directly from authorized distributors. Backed by our standard warranty and supported by our local team. Order online or via WhatsApp — pay on delivery available within Nairobi.`}
            </p>
          </div>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="mb-4 text-xl font-bold text-foreground">You may also like</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}

function Perk({
  icon: Icon,
  title,
  desc,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}) {
  return (
    <li className="flex items-center gap-3 rounded-lg border border-border bg-card p-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </li>
  );
}

export default ProductPage;
