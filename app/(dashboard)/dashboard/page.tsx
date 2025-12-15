import AddNewRecord from '@/components/AddNewRecord';
import AllAiInsights from '@/components/AllAiInsights';
import ExpenseStats from '@/components/ExpenseStats';
import Guest from '@/app/(marketing)/guest/page';
import RecordChart from '@/components/RecordChart';
import RecordHistory from '@/components/RecordHistory';
import { currentUser } from '@clerk/nextjs/server';

export default async function HomePage() {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
  }
  return (
    <main className='bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans min-h-screen transition-colors duration-300'>
      {/* Mobile-optimized container with responsive padding */}
      <div className='max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8'>
        {/* Mobile-first responsive grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6'>
          {/* Left Column - Stacked on mobile */}
          <div className='space-y-4 sm:space-y-6'>
            {/* Welcome section with improved mobile layout */}
     <div className="relative bg-white/95 dark:bg-slate-900/90
border border-slate-200/50 dark:border-slate-700/50 rounded-3xl
backdrop-blur-xl shadow-xl overflow-hidden">

  {/* Top Accent Line */}
  <div className="h-1 bg-linear-to-r from-slate-800 via-slate-600 to-cyan-500" />

  <div className="p-6 sm:p-8 flex max-sm:flex-col-reverse flex-row-reverse  gap-6">

    {/* LEFT PANEL */}
    <div className=" sm:w-[60%] lg:col-span-2 space-y-4">

      {/* Status */}
      <span className="inline-flex items-center gap-2
      px-3 py-1 text-xs font-semibold uppercase tracking-wide
      text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
        ● Active Account
      </span>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
        Welcome back, {user.lastName}
      </h2>

      {/* Info */}
      <p className="text-slate-600 dark:text-slate-400 max-w-xl">
        Manage your expenses, track spending patterns, and stay financially disciplined with SpendWise AI.
      </p>

      {/* CTA */}
      <button className="mt-3 inline-flex items-center gap-3
      bg-linear-to-r from-slate-800 to-cyan-500 text-white
      px-5 py-3 rounded-xl shadow hover:opacity-90 transition">

        view history →
      </button>

    </div>

    {/* RIGHT PANEL */}
    <div className="w-[80%] sm:w-[40%] bg-slate-50 dark:bg-slate-800/60
    border border-slate-200 dark:border-slate-700 rounded-2xl p-5
    flex flex-col items-center justify-center text-center space-y-4">

      {/* Avatar */}
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-slate-700 to-cyan-500
        rounded-2xl blur opacity-40" />

        <img
          src={user.imageUrl}
          alt={`${user.firstName}'s profile`}
          className="relative w-20 h-20 rounded-2xl object-cover
          border-2 border-white dark:border-slate-700 shadow-md"
        />

        <span className="absolute -bottom-1 -right-1 bg-cyan-500 text-white text-xs
        w-6 h-6 flex items-center justify-center rounded-full ring-2 ring-white dark:ring-slate-900">
          ✓
        </span>
      </div>

      {/* Stats */}
      <div className="w-full text-sm space-y-2">

        <div className="flex justify-between text-slate-500 dark:text-slate-400">
          <span>Joined</span>
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {new Date(user.createdAt).toLocaleDateString()}
          </span>
        </div>

        <div className="flex justify-between text-slate-500 dark:text-slate-400">
          <span>Last Active</span>
          <span className="font-semibold text-slate-700 dark:text-slate-200">
            {user.lastActiveAt
              ? new Date(user.lastActiveAt).toLocaleDateString()
              : "Today"}
          </span>
        </div>
             <div className="flex justify-between text-slate-500 dark:text-slate-400 text-clip">
          <span className="font-semibold text-slate-700 dark:text-slate-200 text-[10px]">
          {user.emailAddresses[0]?.emailAddress}
          </span>
        </div>

      </div>

    </div>

  </div>

</div>

            {/* Add New Expense */}
            <AddNewRecord />
          </div>

          {/* Right Column - Stacked below on mobile */}
          <div className='space-y-4 sm:space-y-6'>
            {/* Expense Analytics */}
            <RecordChart />
            <ExpenseStats />
          </div>
        </div>

        {/* Full-width sections below - mobile-friendly spacing */}
        <div className='mt-6 sm:mt-8 space-y-4 sm:space-y-6'>
          <AllAiInsights />
          <RecordHistory />
        </div>
      </div>
    </main>
  );
}