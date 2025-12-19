import { useTools } from "../hooks/useTools";


export function ToolsTable() {
  const {tools, loading, error} = useTools();

  if (loading) {
    return <p>Chargement...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <section className="mt-10 rounded-2xl border bg-zinc-950 p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-medium">Recent Tools</h2>
        <span className="text-sm text-neutral-500">Last 30 days</span>
      </div>

      <table className="w-full text-sm">
        <thead className="text-left text-neutral-500">
          <tr className="border-b">
            <th className="py-2">Tools</th>
            <th>Department</th>
            <th>Users</th>
            <th>Monthly Cost</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool.id} className="border-b last:border-none">
              <td className="py-3 font-medium">{tool.name}</td>
              <td>{tool.category}</td>
              <td>{tool.active_users_count}</td>
              <td>{tool.monthly_cost}</td>
              <td>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    tool.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : tool.status === "Expiring"
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
  );
}