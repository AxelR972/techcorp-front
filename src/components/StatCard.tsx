import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  badgeClassName?: string;
  iconClassName?: string;
  title: string;
  value: string;
  sub?: string;
  badge?: string;
  icon?: LucideIcon;
};

export function StatCard({ badgeClassName, iconClassName, title, value, sub, badge, icon: Icon }: StatCardProps) {
  return (
    <div className={`rounded-2xl border bg-zinc-950 p-5 shadow-sm`}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-50">{title}</p>
        <div className="flex items-center gap-2">
          {Icon && (
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-white ${iconClassName}`}>
              <Icon className="h-4 w-4" />
            </div>
          )}
        </div>

      </div>

      <div className="mt-2 text-2xl font-semibold">
        {value} <span className="text-sm text-neutral-400">{sub}</span>
      </div>
      {badge && (
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${badgeClassName}`}
        >
          {badge}
        </span>
      )}
    </div>
  );
}
