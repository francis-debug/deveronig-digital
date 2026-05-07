import Link from "next/link";

export function SectionHeader({
  title,
  subtitle,
  actionHref,
  actionLabel = "See All →",
  tone = "primary",
}: {
  title: string;
  subtitle?: string;
  actionHref?: string;
  actionLabel?: string;
  actionParams?: Record<string, string>;
  tone?: "primary" | "discount";
}) {
  const bar =
    tone === "discount"
      ? "bg-gradient-to-r from-discount to-[#c2410c]"
      : "bg-gradient-to-r from-primary to-[#d36e0a]";
  return (
    <div className={`mb-4 flex items-center justify-between gap-3 ${bar} px-4 py-3 text-white`}>
      <div className="min-w-0">
        <h2 className="text-base font-bold leading-tight sm:text-lg md:text-xl">{title}</h2>
        {subtitle && <p className="mt-0.5 text-[11px] text-white/85 sm:text-xs">{subtitle}</p>}
      </div>
      {actionHref && (
        <Link
          href={actionHref as string}
          className="shrink-0 text-xs font-semibold underline-offset-2 hover:underline sm:text-sm"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
