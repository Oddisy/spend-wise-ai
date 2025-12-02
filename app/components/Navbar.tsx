'use client';

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
// import ThemeToggle from '@/components/ThemeToggle';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-slate-700/50 shadow-lg shadow-black/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-14 sm:h-16'>

          {/* Logo */}
          <Link
            href='/'
            className='flex items-center gap-3 group hover:scale-105 transition'
          >
            <div className='w-9 h-9 bg-gradient-to-br from-indigo-500 via-violet-500 to-pink-500 rounded-xl flex items-center justify-center shadow-md group-hover:rotate-3 transition'>
              <span className='text-white font-bold'>💎</span>
            </div>
            <span className='font-bold text-lg bg-gradient-to-r from-indigo-600 via-violet-500 to-pink-500 bg-clip-text text-transparent'>
              SpendWise AI
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className='hidden md:flex items-center space-x-2'>
            {['Home', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href='/'
                className='px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl hover:text-indigo-600 dark:hover:text-pink-400 hover:bg-indigo-50/60 dark:hover:bg-pink-900/20 transition'
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className='flex items-center gap-2'>
            {/* <ThemeToggle /> */}

            <SignedOut>
              <SignInButton>
                <button className='bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 hover:opacity-90 text-white px-4 py-2 rounded-xl font-semibold shadow-md transition'>
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className='p-1 rounded-xl bg-gradient-to-r from-indigo-100/50 to-pink-100/50 dark:from-indigo-900/20 dark:to-pink-900/20 border border-indigo-200/30'>
                <UserButton />
              </div>
            </SignedIn>

            {/* Mobile Button */}
            <button
              className='md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-pink-900/20'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className='md:hidden mt-3 bg-white/90 dark:bg-slate-800/90 rounded-xl border shadow-lg p-3 space-y-2'>
            {['Home', 'About', 'Contact'].map((item) => (
              <Link
                key={item}
                href='/'
                className='block py-2 px-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-indigo-50/60 dark:hover:bg-pink-900/20 transition'
              >
                {item}
              </Link>
            ))}

            <SignedOut>
              <SignInButton>
                <button className='w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 text-white py-2 rounded-xl'>
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <div className='flex justify-center p-2 bg-gradient-to-r from-indigo-100/50 to-pink-100/50 rounded-xl'>
                <UserButton />
              </div>
            </SignedIn>
          </div>
        )}
      </div>
    </nav>
  );
}
