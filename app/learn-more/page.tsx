'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const LearnMorePage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950 text-slate-900 dark:text-slate-100 transition-all duration-300 min-h-screen">

      {/* Hero Section */}
      <section className="text-center py-20 px-6 sm:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Learn More About <span className="bg-gradient-to-r from-slate-800 via-slate-600 to-cyan-500 bg-clip-text text-transparent">SpendWise AI</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto"
        >
          Track your spending manually, visualize your daily expenses, and get AI-powered insights to optimize your budget.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {[
            {
              title: 'AI-Powered Insights',
              description: 'Automatically generate insights based on your spending patterns and receive actionable suggestions.',
              bg: 'bg-cyan-50 dark:bg-cyan-900/20',
              text: 'text-cyan-700 dark:text-cyan-300'
            },
            {
              title: 'Effortless Budgeting',
              description: 'Set financial goals, track your progress, and manage your budget easily.',
              bg: 'bg-slate-50 dark:bg-slate-800/20',
              text: 'text-slate-800 dark:text-slate-200'
            },
            {
              title: 'Privacy First',
              description: 'Your data is fully private and encrypted, giving you complete control over your financial information.',
              bg: 'bg-cyan-100 dark:bg-cyan-900/10',
              text: 'text-cyan-800 dark:text-cyan-200'
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className={`${feature.bg} p-6 rounded-2xl border border-slate-200/30 dark:border-slate-700/30 flex flex-col gap-3`}
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 180 }}
            >
              <h3 className={`text-xl font-semibold ${feature.text}`}>{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl mx-4 sm:mx-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">How SpendWise AI Works</h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Add your expenses manually, and let SpendWise AI generate daily spending charts, categorize your items, and provide actionable insights to optimize your money.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {[
            {
              step: '1',
              title: 'Input Expenses',
              description: 'Manually add your daily expenses using a simple input form.'
            },
            {
              step: '2',
              title: 'AI Charts',
              description: 'View AI-generated charts that visualize your daily spending and patterns.'
            },
            {
              step: '3',
              title: 'Categorized Insights',
              description: 'AI automatically categorizes items and gives insights about money spent on each category.'
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-2xl flex flex-col gap-3 text-center"
              whileHover={{ y: -2, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 180 }}
            >
              <div className="text-cyan-700 dark:text-cyan-300 font-bold text-3xl">{item.step}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Start Managing Your Finances Smarter
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/sign-up"
            className="bg-gradient-to-r from-slate-800 via-slate-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Get Started Free
          </Link>
          <Link
            href=""
            className="border-2 border-cyan-500/30 dark:border-cyan-400/30 text-cyan-600 dark:text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default LearnMorePage;
