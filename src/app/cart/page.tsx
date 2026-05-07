"use client";

import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { useCart, formatKsh } from "@/lib/cart";

function CartPage() {
  const { items, setQty, remove, subtotal, count } = useCart();

  if (items.length === 0) {
    return (
      <PageShell>
        <div className="mx-auto max-w-md py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary">
            <ShoppingBag className="h-7 w-7" />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-foreground">Your cart is empty</h1>
          <p className="mt-1 text-sm text-muted-foreground">Discover great deals on electronics & appliances.</p>
          <Link
            href="/"
            className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Continue Shopping
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Your Cart ({count})</h1>

      <div className="mt-5 grid gap-6 lg:grid-cols-3">
        <div className="space-y-3 lg:col-span-2">
          {items.map((it) => (
            <div key={it.id} className="flex gap-3 rounded-xl border border-border bg-card p-3 sm:gap-4 sm:p-4">
              <Link href={`/product/${it.id}`} className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-secondary sm:h-28 sm:w-28">
                <img src={it.image} alt={it.title} className="h-full w-full object-cover" />
              </Link>
              <div className="flex flex-1 flex-col">
                <Link href={`/product/${it.id}`} className="line-clamp-2 text-sm font-medium text-foreground hover:text-primary sm:text-base">
                  {it.title}
                </Link>
                <div className="mt-1 text-base font-bold text-foreground">{formatKsh(it.price)}</div>
                <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                  <div className="flex items-center rounded-full border border-border">
                    <button onClick={() => setQty(it.id, it.qty - 1)} className="px-2.5 py-1.5 hover:text-primary" aria-label="Decrease">
                      <Minus className="h-3.5 w-3.5" />
                    </button>
                    <span className="min-w-7 text-center text-sm font-semibold tabular-nums">{it.qty}</span>
                    <button onClick={() => setQty(it.id, it.qty + 1)} className="px-2.5 py-1.5 hover:text-primary" aria-label="Increase">
                      <Plus className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <button onClick={() => remove(it.id)} className="flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-destructive">
                    <Trash2 className="h-3.5 w-3.5" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside className="h-fit rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-bold text-foreground">Order Summary</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <Row label="Subtotal" value={formatKsh(subtotal)} />
            <Row label="Delivery" value="Calculated at checkout" />
            <div className="my-3 border-t border-border" />
            <Row label="Total" value={formatKsh(subtotal)} bold />
          </dl>
          <Link
            href="/checkout"
            className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Proceed to Checkout
          </Link>
          <Link href="/" className="mt-2 block text-center text-xs text-muted-foreground hover:text-primary">
            ← Continue Shopping
          </Link>
        </aside>
      </div>
    </PageShell>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className={`flex items-center justify-between ${bold ? "text-base font-bold text-foreground" : "text-muted-foreground"}`}>
      <dt>{label}</dt>
      <dd className={bold ? "text-foreground" : ""}>{value}</dd>
    </div>
  );
}

export default CartPage;
