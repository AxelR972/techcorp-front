import type { Tool } from "../hooks/useTools";

const API_URL = "https://tt-jsonserver-01.alt-tools.tech";

export async function fetchTools(): Promise<Tool[]> {
  const res = await fetch(`${API_URL}/tools`);

  if (!res.ok) {
    throw new Error("Erreur lors du fetch des tools");
  }

  return res.json();
}
