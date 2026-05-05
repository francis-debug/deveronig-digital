import { Link } from "@tanstack/react-router";

export function SectionHeader({
  title,
  subtitle,
  accent,
  actionTo,
  actionLabel = "See All →",
  actionParams,
  gradient = false,
}: {
  title: string;
  subtitle?: string;
  accent?: React.ReactNode;
  actionTo?: string;
  actionLabel?: string;
  actionParams?: Record<string, string>;
  gradient?: boolean;
}) {
  if (gradient) {
    return (
      <div className="mb-3 flex items-center justify-between gap-3 rounded-t-xl bg-gradient-to-r from-[#F68B1E] to-[#d36e0a] px-4 py-3 text-white">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          <h2 className="text-base font-bold sm:text-lg md:text-xl">{title}</h2>
          {accent}
        </div>
        {actionTo && (
          <Link
            to={actionTo as any}
            params={actionParams as any}
            className="shrink-0 text-xs font-semibold underline-offset-2 hover:underline sm:text-sm"
          >
            {actionLabel}
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold text-foreground sm:text-xl md:text-2xl">{title}</h2>
          {accent}
        </div>
        {subtitle && <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">{subtitle}</p>}
      </div>
      {actionTo && (
        <Link
          to={actionTo as any}
          params={actionParams as any}
          className="shrink-0 text-sm font-semibold text-primary hover:underline"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
