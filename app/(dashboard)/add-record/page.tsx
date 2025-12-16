import AddNewRecord from '@/components/AddNewRecord';
import Guest from '@/app/(marketing)/guest/page';
import { currentUser } from '@clerk/nextjs/server';

export default async function AddRecordPage() {
  const user = await currentUser();

  // If not authenticated, show guest page
  if (!user) {
    return <Guest />;
  }

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">

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
              Add New Expense
            </h1>

            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              Quickly record a new expense and keep your financial data accurate and up-to-date.
            </p>
          </div>
        </div>

        {/* Add Record Form */}
        <div className="space-y-6">
          <AddNewRecord />
        </div>

      </div>
    </main>
  );
}
