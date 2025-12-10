'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="font-sans bg-gradient-to-br from-slate-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-cyan-950 text-slate-900 dark:text-slate-100 transition-all duration-300 min-h-screen">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 sm:px-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
            <span className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full animate-pulse"></span>
            Discover Our Journey
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          From Confusion to Clarity: <br />
          <div className="bg-gradient-to-r from-slate-800 via-slate-600 to-cyan-500 bg-clip-text text-transparent">
            The SpendWise AI Story
          </div>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8"
        >
          We believe managing money should feel empowering, not overwhelming. SpendWise AI combines cutting-edge AI with intuitive design
          to help you understand your finances, spot opportunities, and achieve your financial goals with confidence.
        </motion.p>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 sm:px-12 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Journey
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            What started as a small idea to simplify budgeting grew into a platform trusted by thousands.
            We wanted to create a tool that doesn’t just track expenses, but teaches you to spend smarter, save consistently,
            and plan for a future you’re proud of.
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
              title: 'Our Vision',
              description: 'A world where financial clarity is accessible to everyone, making money management effortless.',
              gradient: 'from-cyan-800 via-slate-600 to-sky-800',
            },
            {
              title: 'Our Values',
              description: 'Transparency, security, and actionable insights are at the heart of everything we do.',
              gradient: 'from-slate-800 via-slate-600 to-cyan-500',
            },
            {
              title: 'Our Promise',
              description: 'Your financial data is safe, and our AI is here to guide—not replace—your decisions.',
              gradient: 'from-cyan-700 via-cyan-600 to-sky-800',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className={`p-8 rounded-3xl bg-gradient-to-br ${item.gradient} text-white shadow-lg flex flex-col gap-4`}
              whileHover={{ y: -5, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-white/90 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 px-6 sm:px-12 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            A group of passionate thinkers, designers, and engineers, committed to making financial clarity accessible to all.
          </p>
        </motion.div>

        <motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, staggerChildren: 0.2 }}
>
  {[
    { name: 'Daniel', role: 'Product Designer' },
    { name: 'Odunayo', role: 'Front-End Engineer' },
    { name: 'Emmanuel', role: 'Back-End Engineer' },
    { name: 'Morgan', role: 'AI Specialist' },
  ].map((member, i) => (
    <motion.div
      key={i}
      className="bg-white/90 dark:bg-slate-800/80 rounded-3xl p-6 shadow-lg flex flex-col items-center gap-4 hover:scale-105 transition-transform"
    >
      <div className="w-24 h-24 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
        {member.name[0]}
      </div>
      <h4 className="font-bold text-lg">{member.name}</h4>
      <p className="text-slate-600 dark:text-slate-300">{member.role}</p>
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
          Ready to start your financial journey with us?
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

export default AboutPage;
