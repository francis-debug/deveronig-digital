import { WHATSAPP_NUMBER } from "@/lib/data";
import { WhatsAppIcon } from "./ProductCard";

export function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Deveronig, I'd like to place an order")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-110 sm:bottom-8 sm:right-8 lg:bottom-6 lg:right-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp opacity-30" />
    </a>
  );
}
