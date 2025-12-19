import { useEffect, useState } from "react";

export interface Tool {
  id: number;
  name: string;
  category: string;
  active_users_count: number;
  monthly_cost: number;
  status: "active" | "expiring" | "unused";
}

export function useTools() {
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://tt-jsonserver-01.alt-tools.tech/tools")
      .then((res) => res.json())
      .then(setTools)
      .catch(() => setError("Erreur de chargement"))
      .finally(() => setLoading(false));
  }, []);

  return { tools, loading, error };
}
