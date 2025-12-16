import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from '@clerk/nextjs'
import Guest from "@/app/(marketing)/guest/page";

export default async function SettingsPage() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main className="bg-gray-900 min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">

        {/* ===== PAGE HEADER ===== */}
        <section className="relative bg-white/95 dark:bg-slate-900/90 border border-slate-200/50 dark:border-slate-700/50 rounded-3xl backdrop-blur-xl shadow-xl overflow-hidden">
          <div className="h-1 bg-linear-to-r from-slate-800 via-slate-600 to-cyan-500" />
          <div className="p-6 sm:p-8 space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Account Settings
            </h1>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl">
              Manage your profile, security, and account preferences.
            </p>
          </div>
        </section>

        {/* ===== PROFILE SECTION ===== */}
        <section
          className="
          relative overflow-hidden
          bg-white/95 dark:bg-slate-900/90
          border border-slate-200/50 dark:border-slate-700/50
          rounded-3xl shadow-xl
          p-6 sm:p-8
        "
        >
          {/* Soft Gradient */}
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-slate-800/10 dark:from-cyan-500/20 dark:to-slate-900 pointer-events-none" />

          <h2 className="relative text-xl font-semibold mb-6">
            Profile Information
          </h2>

          <div className="relative flex flex-col sm:flex-row gap-8 items-start sm:items-center">

            {/* Avatar Card */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-slate-800 to-cyan-500 blur-xl opacity-30 group-hover:opacity-50 transition" />
              <div className="relative bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-3xl p-4 flex flex-col items-center gap-3">
                <img
                  src={user.imageUrl}
                  alt={`${user.firstName}'s avatar`}
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-white dark:border-slate-700 shadow-lg"
                />
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                  ● Active Account
                </span>
              </div>
            </div>

            {/* User Info Grid */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              {[
                {
                  label: "Full Name",
                  value: `${user.firstName} ${user.lastName}`,
                },
                {
                  label: "Email Address",
                  value: user.emailAddresses[0]?.emailAddress,
                  small: true,
                },
                {
                  label: "Joined",
                  value: new Date(user.createdAt).toLocaleDateString(),
                },
                {
                  label: "Last Active",
                  value: user.lastActiveAt
                    ? new Date(user.lastActiveAt).toLocaleDateString()
                    : "Today",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700"
                >
                  <p className="text-slate-500 dark:text-slate-400 text-xs mb-1">
                    {item.label}
                  </p>
                  <p
                    className={`font-semibold text-slate-900 dark:text-white ${
                      item.small ? "text-[13px] break-all" : ""
                    }`}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== ACCOUNT ACTIVITY ===== */}
        <section className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl font-semibold mb-4">
            Account Activity
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-slate-500">Last Active</span>
              <span className="font-medium">
                {user.lastActiveAt
                  ? new Date(user.lastActiveAt).toLocaleDateString()
                  : "Today"}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-slate-500">Account Status</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-500 bg-cyan-100 dark:bg-cyan-900/30 rounded-full">
                ● Active
              </span>
            </div>
          </div>
        </section>

        {/* ===== ACTIONS ===== */}
        <section className="bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-lg p-6 sm:p-8">
          <h2 className="text-xl font-semibold mb-4">
            Security & Preferences
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 text-white hover:opacity-90 transition">
              Manage Account
            </button>
  <SignOutButton>
            <button className="w-full sm:w-auto px-5 py-3 rounded-xl bg-red-500 text-white hover:opacity-90 transition">
              Sign Out
            </button>
            </SignOutButton>
          </div>
        </section>

      </div>
    </main>
  );
}
