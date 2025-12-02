import Link from 'next/link';

const GuestPage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950 text-slate-900 dark:text-slate-100 transition-all duration-300 min-h-screen">

      {/* Hero Section */}
      <section className="relative overflow-hidden flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-cyan-100/10 via-slate-50/5 to-cyan-100/10 dark:from-cyan-900/20 dark:via-slate-900/20 dark:to-cyan-950/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto w-full">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6 shadow-lg">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse"></span>
            AI-Powered Financial Insights
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-slate-100 leading-tight">
            About{' '}
            <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-cyan-500 bg-clip-text text-transparent">
              SpendWise AI
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Your smart companion for tracking expenses, budgeting efficiently, and making smarter financial decisions in real-time.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2 sm:px-0">
            <Link
              href="/sign-up"
              className="group relative overflow-hidden bg-gradient-to-r from-slate-800 via-slate-600 to-cyan-500 hover:from-slate-900 hover:via-slate-700 hover:to-cyan-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Get Started Free</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>

            <Link
              href="/contact"
              className="group border-2 border-cyan-500/20 dark:border-cyan-400/20 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-800 via-slate-600 to-cyan-500"></div>
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <span className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full"></span>
            Our Mission
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-slate-100 px-2 sm:px-0">
            Simplifying Financial Management with AI
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl mx-auto">
            SpendWise AI leverages advanced AI algorithms to track your spending patterns, provide actionable insights, and help you make smarter money decisions effortlessly.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900/20 dark:to-cyan-950/20 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-2">10K+</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Active Users</div>
            </div>
            <div className="bg-gradient-to-br from-cyan-50 to-slate-50 dark:from-cyan-950/20 dark:to-slate-900/20 p-6 rounded-2xl border border-cyan-200/50 dark:border-cyan-700/50">
              <div className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">$2M+</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">Money Tracked</div>
            </div>
            <div className="bg-gradient-to-br from-slate-50 to-cyan-50 dark:from-slate-900/20 dark:to-cyan-950/20 p-6 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
              <div className="text-3xl font-bold text-cyan-700 dark:text-cyan-400 mb-2">99%</div>
              <div className="text-slate-600 dark:text-slate-400 font-medium">User Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuestPage;
