import { Plus, Filter, Search } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { useTools } from "../hooks/useTools";


export function Tools() {
     const {tools, loading, error} = useTools();

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }
  return (
   
    <div className="min-h-screen bg-zinc-950 text-neutral-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Tools</h1>
            <p className="mt-1 text-sm text-neutral-500">
              Manage all internal tools used across your organization
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg border bg-zinc-900 px-3 py-2 text-sm font-medium shadow-sm hover:bg-neutral-50 hover:text-black">
              <Filter className="h-4 w-4" />
              Filters
            </button>
            <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-indigo-500">
              <Plus className="h-4 w-4" />
              Add tool
            </button>
          </div>
        </header>

        {/* SearchBar */}
        <div className="mb-6">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              placeholder="Search tools..."
              className="w-full rounded-lg border bg-zinc-900 py-2 pl-9 pr-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Tools Table */}
        <section className="overflow-hidden rounded-2xl border bg-zinc-950 shadow-sm">
          <table className="w-full text-sm">
            <thead className="border-b bg-zinc-950 text-left text-neutral-500">
              <tr>
                <th className="px-6 py-3 font-medium">Tool</th>
                <th className="py-3 font-medium">Category</th>
                <th className="py-3 font-medium">Users</th>
                <th className="py-3 font-medium">Monthly Cost</th>
                <th className="py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {tools.map((tool) => (
                <tr key={tool.id} className="border-b last:border-none">
                  <td className="px-6 py-4 font-medium">{tool.name}</td>
                  <td>{tool.category}</td>
                  <td>{tool.active_users_count}</td>
                  <td>{tool.monthly_cost}</td>
                  <td>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-medium ${
                        tool.status === "active"
                          ? "bg-green-100 text-green-700"
                          : tool.status === "expiring"
                          ? "bg-orange-100 text-orange-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {tool.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

