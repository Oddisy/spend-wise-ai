"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PlusCircle,
  BarChart3,
  History,
  Sparkles,
  LogOut,
  Settings,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const navItems = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Add Record", href: "#add", icon: PlusCircle },
  { name: "Analytics", href: "#analytics", icon: BarChart3 },
  { name: "AI Insights", href: "#ai", icon: Sparkles },
  { name: "History", href: "#history", icon: History },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 hidden lg:flex flex-col
    bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl
    border-r border-slate-200/60 dark:border-slate-700/60">

      {/* Logo */}
      <div className="px-6 py-5 border-b border-slate-200/60 dark:border-slate-700/60">
        <h1 className="text-xl font-extrabold bg-gradient-to-r from-slate-800 to-cyan-500 bg-clip-text text-transparent">
          SpendWise AI
        </h1>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Smart Expense Manager
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                ${active
                  ? "bg-gradient-to-r from-slate-800 to-cyan-500 text-white shadow"
                  : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"}`}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom section */}
      <div className="px-4 py-4 border-t border-slate-200/60 dark:border-slate-700/60 space-y-3">
        <Link
          href="#settings"
          className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
        >
          <Settings className="w-5 h-5" />
          Settings
        </Link>

        <div className="flex items-center justify-between px-4">
          <UserButton afterSignOutUrl="/" />
          <LogOut className="w-4 h-4 text-slate-400" />
        </div>
      </div>
    </aside>
  );
}
