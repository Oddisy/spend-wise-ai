"use client";
import { useState } from "react";
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
  Menu,
  X,
} from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Add New Expense", href: "/add-record", icon: PlusCircle },
  { name: "Analytics", href: "/expense-chart", icon: BarChart3 },
  { name: "AI Insights", href: "/ai-insights", icon: Sparkles },
  { name: "History", href: "/history", icon: History },
];

export default function SideNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(true)}
        className="
          lg:hidden fixed top-4 left-4 z-50
          p-2 rounded-lg bg-white dar:text-white dark:bg-slate-900
          border border-slate-200 dark:border-slate-700
          shadow
        "
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`flex flex-col gap-6
          fixed left-0 top-0 z-50 h-screen w-64
          bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl
          border-r border-slate-200/60 dark:border-slate-700/60
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-slate-200/60 dark:border-slate-700/60">
          <div>

         <h1 className="font-bold text-lg bg-linear-to-r from-cyan-500  via-slate-400 to-slate-100 bg-clip-text text-transparent" >   SpendWise AI
  </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Smart Expense Manager
            </p>
          </div>

          {/* Close button (mobile) */}
          <button
            onClick={() => setOpen(false)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
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
                onClick={() => setOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition
                  ${active
                    ? "bg-gradient-to-r from-slate-800 to-cyan-500 text-white shadow"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"}
                `}
              >
                <Icon className="w-5 h-5" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="px-4 py-4 border-t border-slate-200/60 dark:border-slate-700/60 space-y-3">
          <Link
            href="/settings"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <Settings className="w-5 h-5" />
            Settings
          </Link>

          <div className="flex items-center justify-between px-4">
            <UserButton afterSignOutUrl="/" />
            <Link href="/settings">
            <LogOut className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
