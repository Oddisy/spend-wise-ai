
import Link from 'next/link';
import AddNewRecord from '@/components/AddNewRecord';
import AllAiInsights from '@/components/AllAiInsights';
import ExpenseStats from '@/components/ExpenseStats';
import Guest from '@/app/(marketing)/guest/page';
import RecordChart from '@/components/RecordChart';
import RecordHistory from '@/components/RecordHistory';
import { currentUser } from '@clerk/nextjs/server';
import { PlusCircle, BarChart3, History as HistoryIcon } from 'lucide-react';

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }

  const navCards = [
    {
      title: 'Add New Expense',
      description: 'Quickly add a new expense to track your spending.',
      href: '/add-record',
      icon: <PlusCircle className="w-8 h-8 text-cyan-500" />,
    },
    {
      title: 'View Expense Chart',
      description: 'Analyze your spending patterns over time.',
      href: '/expense-chart',
      icon: <BarChart3 className="w-8 h-8 text-cyan-500" />,
    },
    {
      title: 'Expense History',
      description: 'See all your past expenses and history logs.',
      href: '/history',
      icon: <HistoryIcon className="w-8 h-8 text-cyan-500" />,
    },
  ];

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Welcome Section */}
        <div className="flex max-sm:flex-col relative bg-white/95 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-700/50 rounded-3xl backdrop-blur-xl shadow-xl overflow-hidden mb-6">
          <div className="h-1 bg-linear-to-r from-slate-800 via-slate-600 to-cyan-500" />
          <div className="p-6 sm:p-4 flex max-sm:flex-col-reverse flex-row-reverse gap-6">
            <div className="sm:w-full lg:col-span-2 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
                ● Active Account
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                Welcome back, {user.lastName}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl">
                Manage your expenses, track spending patterns, and stay financially disciplined with SpendWise AI.
              </p>
              <Link href="/history">
              <button className="mt-3 inline-flex items-center gap-3 bg-linear-to-r from-slate-800 to-cyan-500 text-white px-5 py-3 rounded-xl shadow hover:opacity-90 transition">
                view history →
              </button>
              </Link>
            </div>
          </div>
               <ExpenseStats />
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {navCards.map((card) => (
            <Link key={card.href} href={card.href}>
              <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer flex flex-col gap-4">
                <div className="flex items-center justify-center w-14 h-14 bg-cyan-50 dark:bg-cyan-900/30 rounded-full">
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Main Dashboard Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="space-y-4 sm:space-y-6">
            <AddNewRecord />
          </div>
          <div className="space-y-4 sm:space-y-6">
            <RecordChart />
          </div>
        </div>

        <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
          <AllAiInsights />
          {/* <RecordHistory /> */}
        </div>
      </div>
    </main>
  );
}
