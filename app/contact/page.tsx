'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with real submission logic or API endpoint
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

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
            Get in Touch
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          We'd Love to Hear From You
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8"
        >
          Whether you have a question, feedback, or want to collaborate, drop us a message and we’ll get back to you as soon as possible.
        </motion.p>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-700 dark:text-cyan-400">Thank you!</h3>
              <p className="text-slate-700 dark:text-slate-300">Your message has been sent successfully. We'll get back to you soon.</p>
            </motion.div>
          ) : (
          <form
  action="https://formspree.io/f/mvgewwqy"
  method="POST"
  className="flex flex-col gap-6"
>
  <div className="flex flex-col gap-2">
    <label className="text-slate-700 dark:text-slate-300 font-medium">Name</label>
    <input
      type="text"
      name="name"
      required
      className="px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-slate-800 dark:text-slate-100 transition-all"
    />
  </div>
  <div className="flex flex-col gap-2">
    <label className="text-slate-700 dark:text-slate-300 font-medium">Email</label>
    <input
      type="email"
      name="email"
      required
      className="px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-slate-800 dark:text-slate-100 transition-all"
    />
  </div>
  <div className="flex flex-col gap-2">
    <label className="text-slate-700 dark:text-slate-300 font-medium">Message</label>
    <textarea
      name="message"
      rows={6}
      required
      className="px-4 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:bg-slate-800 dark:text-slate-100 transition-all"
    />
  </div>
  <button
    type="submit"
    className="bg-gradient-to-r from-slate-800 via-slate-600 to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
  >
    Send Message
  </button>
</form>

          )}
        </motion.div>
      </section>

      {/* Contact Info & CTA */}
      <section className="py-16 sm:py-20 px-6 sm:px-12 bg-cyan-100 dark:bg-cyan-900/10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Prefer another way to reach us?
          </h3>
          <p className="text-slate-700 dark:text-slate-300 mb-8">
            Email us directly at <span className="font-semibold text-cyan-700 dark:text-cyan-400">odunayoogunleye200@gmail.com</span> or connect on social media.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/ogunleye-odunayo-4a444b23a/" target="_blank" className="text-cyan-700 dark:text-cyan-400 hover:underline">LinkedIn</a>
            <a href="https://github.com/Oddisy" target="_blank" className="text-cyan-700 dark:text-cyan-400 hover:underline">GitHub</a>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default ContactPage;
