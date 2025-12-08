import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950 border-t border-slate-200/50 dark:border-slate-700/50">

      <div className="h-1 bg-gradient-to-r from-slate-800 via-slate-700 to-cyan-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-xl bg-linear-to-br from-slate-800 via-slate-700 to-cyan-500 flex items-center justify-center shadow">
              <span className="text-white">💎</span>
            </div>
          <span className="font-bold text-lg bg-linear-to-r from-cyan-500  via-slate-400 to-slate-100 bg-clip-text text-transparent" >   SpendWise AI
  </span>
          </div>

          <p className="text-slate-600 dark:text-slate-400 text-sm">
  SpendWise AI gives you real-time insights, intelligent budgeting, and smarter money decisions.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold text-slate-800 dark:text-white mb-4">
            Links
          </h4>
          <ul className="space-y-2">
            {['Overview'].map((link) => (
              <li key={link}>
                <Link href="/" className="text-slate-600 dark:text-slate-400 hover:text-cyan-500 transition">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
{/* Badge */}
<div className="flex md:justify-end items-end">
  <div className="flex flex-col items-center text-center bg-cyan-50 dark:bg-cyan-900 px-5 py-4 rounded-2xl shadow-lg border border-cyan-300/40 dark:border-cyan-700/50 space-y-2">
    {/* Pulse icon */}
    <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse" />

    {/* Heading */}
    <h5 className="text-cyan-700 dark:text-cyan-200 font-semibold text-sm">
      Smarter Spending
    </h5>

    {/* Subtext */}
    <p className="text-slate-600 dark:text-slate-400 text-xs">
      Simplify your finances with real-time insights and intelligent budgeting.
    </p>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
