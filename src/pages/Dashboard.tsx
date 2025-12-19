import { Building2, TrendingUp, Users, Wrench } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { StatCard } from "../components/StatCard";
import { ToolsTable } from "../components/ToolsTable";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-neutral-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Internal Tools Dashboard</h1>
          <p className="mt-1 text-sm text-neutral-500">
            Monitor and manage your organization’s software tools and expenses
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Monthly Budget" value="€28,750" sub="/ €30k" badge="+12%" badgeClassName="bg-gradient-to-r from-green-500 to-green-800" icon={TrendingUp} iconClassName="bg-gradient-to-r from-green-500 to-green-800" />
          <StatCard title="Active Tools" value="147" badge="+8" badgeClassName="bg-gradient-to-r from-blue-500 to-purple-800" icon={Wrench} iconClassName="bg-gradient-to-r from-blue-500 to-purple-800" />
          <StatCard title="Departments" value="8" badge="+2" badgeClassName="bg-gradient-to-r from-orange-500 to-rose-500" icon={Building2} iconClassName="bg-gradient-to-r from-orange-500 to-rose-500" />
          <StatCard title="Cost / User" value="€156" badge="-12" badgeClassName="bg-gradient-to-r from-rose-500 to-pink-700" icon={Users} iconClassName="bg-gradient-to-r from-rose-500 to-pink-700" />
        </section>

        <ToolsTable />
      </main>
    </div>
  );
}