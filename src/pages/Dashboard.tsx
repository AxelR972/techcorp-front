import { Navbar } from "../components/Navbar";
import { StatCard } from "../components/StatCard";
import { ToolsTable } from "../components/ToolsTable";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">Internal Tools Dashboard</h1>
          <p className="mt-1 text-sm text-neutral-500">
            Monitor and manage your organization’s software tools and expenses
          </p>
        </header>

        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Monthly Budget" value="€28,750" sub="/ €30k" badge="+12%" />
          <StatCard title="Active Tools" value="147" badge="+8" />
          <StatCard title="Departments" value="8" badge="+2" />
          <StatCard title="Cost / User" value="€156" badge="-12" negative />
        </section>

        <ToolsTable />
      </main>
    </div>
  );
}