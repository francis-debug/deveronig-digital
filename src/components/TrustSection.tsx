import { Truck, ShieldCheck, CreditCard, Headphones } from "lucide-react";

const items = [
  { icon: Truck, title: "Fast Delivery", desc: "Countrywide delivery in Kenya" },
  { icon: ShieldCheck, title: "Genuine Warranty", desc: "Authentic products, full warranty" },
  { icon: CreditCard, title: "Flexible Payments", desc: "M-Pesa, card & pay on delivery" },
  { icon: Headphones, title: "Expert Support", desc: "Real human help, 7 days a week" },
];

export function TrustSection() {
  return (
    <section className="grid grid-cols-2 gap-3 rounded-xl border border-border bg-card p-4 md:grid-cols-4 md:p-6">
      {items.map(({ icon: Icon, title, desc }) => (
        <div key={title} className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            <p className="text-xs text-muted-foreground">{desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
