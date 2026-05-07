import type { Metadata } from "next";
import { Toaster } from "sonner";
import { CartProvider } from "@/lib/cart";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenya Electrify — Kenya's One Stop Electronics Store",
  description:
    "Shop genuine electronics & appliances in Kenya. TVs, fridges, cookers, solar, CCTV, smartphones. Fast delivery, pay on delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
          <Toaster position="top-right" richColors />
        </CartProvider>
      </body>
    </html>
  );
}
