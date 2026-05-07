"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { PageShell } from "@/components/PageShell";
import { useCart, formatKsh } from "@/lib/cart";

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const router = useRouter();
  const [pay, setPay] = useState("mpesa");
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    return (
      <PageShell>
        <div className="py-16 text-center">
          <h1 className="text-xl font-bold">Your cart is empty</h1>
          <Link href="/" className="mt-4 inline-block text-primary hover:underline">Go shopping</Link>
        </div>
      </PageShell>
    );
  }

  if (submitted) {
    return (
      <PageShell>
        <div className="mx-auto max-w-md py-16 text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-success" />
          <h1 className="mt-4 text-2xl font-bold text-foreground">Order placed!</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            We received your order and will contact you shortly to confirm delivery.
          </p>
          <Link
            href="/"
            className="mt-6 inline-flex h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Back to Home
          </Link>
        </div>
      </PageShell>
    );
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clear();
    setSubmitted(true);
    toast.success("Order placed successfully");
    setTimeout(() => router.push("/"), 4500);
  };

  return (
    <PageShell>
      <h1 className="text-2xl font-bold text-foreground sm:text-3xl">Checkout</h1>

      <form onSubmit={onSubmit} className="mt-5 grid gap-6 lg:grid-cols-3">
        <div className="space-y-5 lg:col-span-2">
          <Section title="Contact Information">
            <Field label="Full name" name="name" required />
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="Phone" name="phone" type="tel" placeholder="07xx xxx xxx" required />
              <Field label="Email" name="email" type="email" required />
            </div>
          </Section>

          <Section title="Delivery Address">
            <div className="grid gap-3 sm:grid-cols-2">
              <Field label="County" name="county" required />
              <Field label="City / Town" name="city" required />
            </div>
            <Field label="Street / Building" name="address" required />
            <Field label="Delivery notes (optional)" name="notes" />
          </Section>

          <Section title="Payment Method">
            <div className="grid gap-2 sm:grid-cols-3">
              {[
                { id: "mpesa", label: "M-PESA" },
                { id: "card", label: "Card" },
                { id: "cod", label: "Pay on Delivery" },
              ].map((opt) => (
                <label
                  key={opt.id}
                  className={`flex cursor-pointer items-center gap-2 rounded-xl border p-3 text-sm font-medium transition-all ${
                    pay === opt.id ? "border-primary bg-accent text-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  <input
                    type="radio"
                    name="pay"
                    className="accent-primary"
                    checked={pay === opt.id}
                    onChange={() => setPay(opt.id)}
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </Section>
        </div>

        <aside className="h-fit space-y-3 rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-bold text-foreground">Order Summary</h2>
          <ul className="space-y-2 text-sm">
            {items.map((it) => (
              <li key={it.id} className="flex justify-between gap-3">
                <span className="line-clamp-1 text-muted-foreground">{it.title} × {it.qty}</span>
                <span className="shrink-0 font-medium">{formatKsh(it.price * it.qty)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-border pt-3 text-sm">
            <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>{formatKsh(subtotal)}</span></div>
            <div className="flex justify-between text-muted-foreground"><span>Delivery</span><span>FREE</span></div>
            <div className="mt-2 flex justify-between text-base font-bold text-foreground"><span>Total</span><span>{formatKsh(subtotal)}</span></div>
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            Place Order
          </button>
        </aside>
      </form>
    </PageShell>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <h2 className="mb-4 text-base font-semibold text-foreground">{title}</h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block font-medium text-foreground">{label}{required && <span className="text-discount"> *</span>}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}

export default CheckoutPage;
