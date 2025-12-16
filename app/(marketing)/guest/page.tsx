'use client';
import {useUser } from '@clerk/nextjs'

import Link from 'next/link';
import { motion } from 'framer-motion';

const GuestPage = () => {
  const {isSignedIn} = useUser()
  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950 text-slate-900 dark:text-slate-100 transition-all duration-300 min-h-screen">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-20 px-6 sm:px-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            <span className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse"></span>
            AI-Powered Financial Insights
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          Track, Analyze & Optimize with{' '}
          <div className="bg-gradient-to-r from-slate-800 via-slate-600 to-cyan-500 bg-clip-text text-transparent">
            SpendWise AI
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8"
        >
          Simplify your finances, get real-time insights, and make smarter spending decisions with AI-powered tracking and budgeting.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href={isSignedIn ? "/dashboard" : "/sign-up"}
            className="group relative overflow-hidden bg-gradient-to-r from-slate-800 via-slate-600 to-cyan-500 hover:from-slate-900 hover:via-slate-700 hover:to-cyan-600 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1"
          >
            Get Started Free
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl"></div>
          </Link>
          <Link
            href="/learn-more"
            className="border-2 border-cyan-500/30 dark:border-cyan-400/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
     {/* Features Section */}
<section className="py-16 sm:py-20 px-6 sm:px-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm relative overflow-hidden">
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center max-w-4xl mx-auto mb-12"
  >
    <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-3 py-1 rounded-full text-sm font-medium mb-4">
      <span className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse"></span>
      Our Mission
    </div>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
      Empower Your Financial Journey
    </h2>
    <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
      At SpendWise AI, our mission is to help you understand your money better.
      We combine AI-powered analytics with intuitive budgeting tools to track your spending,
      uncover opportunities to save, and guide you towards smarter financial decisions effortlessly.
    </p>
  </motion.div>

 <motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-0"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, staggerChildren: 0.3 }}
>
  {[
    {
      title: 'Smart Spending Insights',
      description: 'Visualize where your money goes and get AI-driven suggestions to optimize your budget.',
      gradient: 'from-cyan-800 via-slate-600 to-sky-800',
    },
    {
      title: 'Seamless Budgeting',
      description: 'Set goals, track progress, and manage your finances effortlessly in one place.',
      gradient: 'from-slate-800 via-slate-600 to-cyan-500',
    },
    {
      title: 'Privacy First',
      description: 'All your data is encrypted and secure, giving you full control over your financial information.',
      gradient: 'from-cyan-700 via-cyan-600 to-sky-800',
    },
  ].map((feature, i) => (
    <motion.div
      key={i}
      className={`p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg flex flex-col gap-4`}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <h3 className="text-2xl font-bold">{feature.title}</h3>
      <p className="text-white/90 leading-relaxed">{feature.description}</p>
    </motion.div>
  ))}
</motion.div>


</section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 bg-cyan-100 dark:bg-cyan-900/10 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          Ready to take control of your finances?
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
            href="/learn-more"
            className="border-2 border-cyan-500/30 dark:border-cyan-400/30 text-cyan-600 dark:text-cyan-400 px-8 py-4 rounded-2xl font-semibold hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all"
          >
            Learn More
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default GuestPage;
