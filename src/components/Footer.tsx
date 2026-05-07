import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";
import logo from "@/assets/logo.png";
import { CATEGORIES, PHONE_DISPLAY } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-16 bg-[#0f1726] text-slate-300">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white">Get exclusive offers in your inbox</h3>
            <p className="mt-1 text-sm text-slate-400">
              Sign up for the latest deals on electronics & appliances. No spam, ever.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-md gap-2 md:ml-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="h-11 flex-1 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-primary"
            />
            <button className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
              <Send className="h-4 w-4" /> Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <img src={logo} alt="Deveronig" className="h-12 w-auto brightness-0 invert" />
          <p className="mt-4 max-w-sm text-sm text-slate-400">
            Kenya's one-stop electronics & appliances store. Genuine products, unbeatable prices,
            countrywide delivery.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 text-primary" /> {PHONE_DISPLAY}
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 text-primary" /> info@deveronig.co.ke
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-primary" /> Nairobi, Kenya
            </li>
          </ul>
          <div className="mt-5 flex gap-2">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-slate-300 transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol
          className="lg:col-span-3"
          title="Top Categories"
          links={CATEGORIES.slice(0, 6).map((c) => ({ label: c.name, to: "/category/$slug", params: { slug: c.slug } }))}
        />
        <FooterCol
          className="lg:col-span-2"
          title="Customer Care"
          links={[
            { label: "Contact Us", to: "/" },
            { label: "Track Order", to: "/" },
            { label: "Returns", to: "/" },
            { label: "Warranty", to: "/" },
            { label: "FAQs", to: "/" },
          ]}
        />
        <FooterCol
          className="lg:col-span-3"
          title="About"
          links={[
            { label: "About Us", to: "/" },
            { label: "Privacy Policy", to: "/" },
            { label: "Terms & Conditions", to: "/" },
            { label: "Shipping Policy", to: "/" },
            { label: "Careers", to: "/" },
          ]}
        />
      </div>

      {/* Payment methods */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-400 sm:flex-row">
          <span>© {new Date().getFullYear()} Deveronig Digital Electronics Ltd. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-2">
            <PayBadge>M-PESA</PayBadge>
            <PayBadge>VISA</PayBadge>
            <PayBadge>Mastercard</PayBadge>
            <PayBadge>Airtel Money</PayBadge>
            <PayBadge>COD</PayBadge>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  className,
}: {
  title: string;
  links: { label: string; to: string; params?: Record<string, string> }[];
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">{title}</h3>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href || l.to}
              className="text-slate-400 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PayBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-slate-300">
      {children}
    </span>
  );
}
