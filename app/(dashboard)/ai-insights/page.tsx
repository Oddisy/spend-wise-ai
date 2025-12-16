'use client';

import AllAiInsights from '@/components/AllAiInsights';
import Link from 'next/link';

export default function AllAiInsightsPage() {
  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen font-sans transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Page Header */}
        <div className="relative bg-white/95 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-700/50 rounded-3xl backdrop-blur-xl shadow-xl overflow-hidden mb-8">
          <div className="h-1 bg-linear-to-r from-slate-800 via-slate-600 to-cyan-500" />

          <div className="p-6 sm:p-8 text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
              🤖 All AI Insights
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg sm:text-xl">
              Explore intelligent financial insights powered by AI. Get actionable advice, tips, and real-time guidance to manage your expenses and optimize spending.
            </p>
            <Link href="/dashboard">
              <button className="mt-6 inline-flex items-center gap-3 bg-linear-to-r from-slate-800 to-cyan-500 text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition">
                ← Back to Dashboard
              </button>
            </Link>
          </div>
        </div>

        {/* AI Insights Timeline Component */}
        <div className="space-y-6">
          <AllAiInsights />
        </div>
      </div>
    </main>
  );
}
