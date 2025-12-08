'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
// import ThemeToggle from '@/components/ThemeToggle';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg shadow-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-linear-to-br from-slate-800 via-slate-700 to-cyan-500 rounded-xl flex items-center justify-center shadow-md group-hover:rotate-3 transition">
              <span className="text-white font-bold">💎</span>
            </div>

         <span className="font-bold text-lg bg-linear-to-r from-cyan-500  via-slate-400 to-slate-100 bg-clip-text text-transparent" >   SpendWise AI
  </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-2">
            {['Overview'].map((item) => (
              <Link
                key={item}
                href="/"
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-500 hover:bg-slate-100 dark:hover:bg-cyan-900/20 transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-2">

            {/* <ThemeToggle /> */}

            <SignedOut>
              <SignInButton>
                <button className="bg-linear-to-r from-slate-800 via-slate-700 to-cyan-500 text-white px-4 py-2 rounded-xl shadow hover:opacity-90 transition">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
                <UserButton />
              </div>
            </SignedIn>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-slate-700 dark:text-white hover:bg-slate-200 dark:hover:bg-cyan-900/20"
            >
              ☰
            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white/90 dark:bg-slate-800/90 rounded-xl shadow border p-3 space-y-2">
            {['Home', 'About', 'Contact'].map((item) => (
              <Link key={item} href="/" className="block px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-cyan-900/20">
                {item}
              </Link>
            ))}

            <SignedOut>
              <SignInButton>
                <button className="w-full mt-2 bg-gradient-to-r from-slate-800 via-slate-700 to-cyan-500 text-white py-2 rounded-xl">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className="flex justify-center mt-2">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        )}

      </div>
    </nav>
  );
}
