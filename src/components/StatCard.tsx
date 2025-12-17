type StatCardProps = {
  title: string;
  value: string;
  sub?: string;
  badge?: string;
  negative?: boolean;
};

export function StatCard({ title, value, sub, badge, negative }: StatCardProps) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-neutral-500">{title}</p>
        {badge && (
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-medium ${
              negative ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
            }`}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="mt-2 text-2xl font-semibold">
        {value} <span className="text-sm text-neutral-400">{sub}</span>
      </div>
    </div>
  );
}