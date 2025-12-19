import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bell, Moon, Search, Settings, Zap } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-zinc-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 font-semibold">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white"><Zap className="h-4 w-4" /></div>
            TechCorp
          </div>
          <div className="hidden gap-6 text-sm font-medium text-neutral-50 md:flex">
            <a className="text-neutral-50">Dashboard</a>
            <a>Tools</a>
            <a>Analytics</a>
            <a>Settings</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2  text-neutral-400" />
            <input
              placeholder="Search tools..."
              className="rounded-lg border pl-9 pr-3 py-2 text-sm outline-none bg-zinc-900 focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <Moon className="h-5 w-5 text-neutral-500" />
          <Bell className="h-5 w-5 text-neutral-500" />
          <Settings className="h-5 w-5 text-neutral-500" />
          <Menu as="div" className="relative ml-3">
            <MenuButton className="relative flex rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full bg-gray-800 outline outline-1 -outline-offset-1 outline-white/10"
              />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-1 outline-black/5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                >
                  Your profile
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                >
                  Settings
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:outline-none"
                >
                  Sign out
                </a>
              </MenuItem>
            </MenuItems>
          </Menu>
        </div >
      </div >
    </nav >
  );
}