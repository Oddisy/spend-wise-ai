import { History as HistoryIcon, Clock } from "lucide-react";

export default function History() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">

        {/* Page Card */}
        <div
          className="relative bg-white/95 dark:bg-slate-900/90
          border border-slate-200/50 dark:border-slate-700/50
          rounded-3xl backdrop-blur-xl shadow-xl overflow-hidden"
        >
          {/* Accent Line */}
          <div className="h-1 bg-linear-to-r from-slate-800 via-slate-600 to-cyan-500" />

          <div className="p-8 sm:p-12 flex flex-col items-center text-center space-y-5">
            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800">
              <HistoryIcon className="w-8 h-8 text-slate-700 dark:text-slate-300" />
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Expense History
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 dark:text-slate-400 max-w-md">
              Your complete transaction history will appear here once this feature is ready.
            </p>

            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-slate-100 dark:bg-slate-800
              text-slate-700 dark:text-slate-300 text-sm font-medium animate-bounce">
              <Clock className="w-4 h-4" />
              Coming Soon
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
