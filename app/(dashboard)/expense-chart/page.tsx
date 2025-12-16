import RecordChart from '@/components/RecordChart';
import Guest from '@/app/(marketing)/guest/page';
import { currentUser } from '@clerk/nextjs/server';

export default async function ChartPage() {
  const user = await currentUser();

  // Redirect unauthenticated users
  if (!user) {
    return <Guest />;
  }

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">

        {/* Page Header */}
        <div
          className="relative bg-white/95 dark:bg-slate-900/90
          border border-slate-200/50 dark:border-slate-700/50
          rounded-3xl backdrop-blur-xl shadow-xl overflow-hidden mb-6"
        >
          {/* Accent Line */}
          <div className="h-1 bg-linear-to-r from-slate-800 via-slate-600 to-cyan-500" />

          <div className="p-6 sm:p-8 space-y-3">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Expense Analytics
            </h1>

            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              Visualize your spending patterns and track your expenses over time with this interactive chart.
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 shadow-lg">
          <RecordChart />
        </div>

      </div>
    </main>
  );
}
