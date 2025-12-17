type Tool = {
  name: string;
  department: string;
  users: number;
  cost: string;
  status: "Active" | "Expiring" | "Unused";
};

const TOOLS: Tool[] = [
  { name: "Slack", department: "Communication", users: 245, cost: "€2,450", status: "Active" },
  { name: "Figma", department: "Design", users: 32, cost: "€480", status: "Active" },
  { name: "GitHub", department: "Engineering", users: 89, cost: "€890", status: "Active" },
  { name: "Notion", department: "Operations", users: 156, cost: "€780", status: "Expiring" },
  { name: "Adobe CC", department: "Marketing", users: 12, cost: "€720", status: "Unused" },
];

export function ToolsTable() {
  return (
    <section className="mt-10 rounded-2xl border bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-medium">Recent Tools</h2>
        <span className="text-sm text-neutral-500">Last 30 days</span>
      </div>

      <table className="w-full text-sm">
        <thead className="text-left text-neutral-500">
          <tr className="border-b">
            <th className="py-2">Tool</th>
            <th>Department</th>
            <th>Users</th>
            <th>Monthly Cost</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {TOOLS.map((tool) => (
            <tr key={tool.name} className="border-b last:border-none">
              <td className="py-3 font-medium">{tool.name}</td>
              <td>{tool.department}</td>
              <td>{tool.users}</td>
              <td>{tool.cost}</td>
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