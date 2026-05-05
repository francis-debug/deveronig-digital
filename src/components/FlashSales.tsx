import { useEffect, useState } from "react";
import { Flame } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PRODUCTS } from "@/lib/data";
import { ProductCard } from "./ProductCard";

function useCountdown(hours: number) {
  const [t, setT] = useState(hours * 3600);
  useEffect(() => {
    const i = setInterval(() => setT((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, []);
  const h = Math.floor(t / 3600);
  const m = Math.floor((t % 3600) / 60);
  const s = t % 60;
  return [h, m, s].map((n) => String(n).padStart(2, "0"));
}

export function FlashSales() {
  const [h, m, s] = useCountdown(8);
  return (
    <section>
      <div className="mb-3 flex items-center justify-between gap-3 rounded-t-xl bg-gradient-to-r from-discount to-[#c2410c] px-4 py-3 text-white">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <div className="flex items-center gap-2 text-base font-bold sm:text-lg">
            <Flame className="h-5 w-5" /> Flash Sales
          </div>
          <div className="flex items-center gap-1 text-xs">
            <span className="opacity-90">Ends in:</span>
            <TimeBox v={h} />:<TimeBox v={m} />:<TimeBox v={s} />
          </div>
        </div>
        <Link to="/categories" className="shrink-0 text-xs font-semibold underline-offset-2 hover:underline sm:text-sm">
          See All →
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        {PRODUCTS.slice(0, 8).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

function TimeBox({ v }: { v: string }) {
  return (
    <span className="rounded bg-white/95 px-1.5 py-0.5 text-[11px] font-bold text-discount tabular-nums">
      {v}
    </span>
  );
}
