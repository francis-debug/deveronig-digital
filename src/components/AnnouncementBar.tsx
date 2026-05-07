import { Truck, ShieldCheck, Banknote } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="bg-foreground text-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs">
        <div className="flex items-center gap-5 overflow-x-auto scrollbar-hide">
          <span className="flex items-center gap-1.5 whitespace-nowrap">
            <Truck className="h-3.5 w-3.5 text-primary" /> Fast Delivery in Kenya
          </span>
          <span className="hidden items-center gap-1.5 whitespace-nowrap sm:flex">
            <Banknote className="h-3.5 w-3.5 text-primary" /> Pay on Delivery Available
          </span>
          <span className="hidden items-center gap-1.5 whitespace-nowrap md:flex">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Secure Payments
          </span>
        </div>
        <div className="hidden whitespace-nowrap sm:block">
          Call us: <span className="font-semibold text-primary">0712 407 941</span>
        </div>
      </div>
    </div>
  );
}
