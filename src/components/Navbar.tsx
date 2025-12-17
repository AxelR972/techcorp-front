import { Bell, Moon, Search, Settings } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-semibold">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">⚡</div>
            TechCorp
          </div>
          <div className="hidden gap-6 text-sm font-medium text-neutral-600 md:flex">
            <a className="text-neutral-900">Dashboard</a>
            <a>Tools</a>
            <a>Analytics</a>
            <a>Settings</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <input
              placeholder="Search tools..."
              className="rounded-lg border pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <Moon className="h-5 w-5 text-neutral-500" />
          <Bell className="h-5 w-5 text-neutral-500" />
          <Settings className="h-5 w-5 text-neutral-500" />
          <img className="h-8 w-8 rounded-full" src="https://i.pravatar.cc/40" alt="avatar" />
        </div>
      </div>
    </nav>
  );
}