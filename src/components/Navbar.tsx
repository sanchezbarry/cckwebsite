'use client'

import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import Image from 'next/image'; 

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about-us', },
    { label: 'Sermons', href: '#', },
  { label: 'Ministries', href: '/ministry', hasDropdown: true },
  { label: 'Chaplaincy', href: '#', },
    { label: 'Events', href: '#', },
  { label: 'Contact', href: '#' },
  { label: 'Member\' Page', href: '#' },
];

interface NavbarProps {}
interface NavbarState {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
}

export default function Navbar(){
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-[#101922]/95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="px-4 md:px-8 lg:px-12 flex items-center justify-between h-16 max-w-350 mx-auto">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-primary group-hover:scale-110 transition-transform duration-300">
            <a href='/'>
            <Image  src="/transparentlogo.png" alt="Church Logo" width={32} height={32} />
            </a>
            {/* <span className="material-symbols-outlined text-4xl">church</span> */}
          </div>
          <h2 className={`text-xl font-bold font-display tracking-tight transition-colors ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}>
            Chapel Of Christ The King
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {NAV_ITEMS.map((item: NavItem) => (
              <div key={item.label} className="group relative flex items-center gap-1 cursor-pointer">
                <a 
                  href={item.href} 
                  className={`text-sm font-bold font-display transition-colors hover:text-primary ${
                    isScrolled ? 'text-slate-700 dark:text-slate-200' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
                {item.hasDropdown && (
                  <span className={`material-symbols-outlined text-sm transition-colors ${
                    isScrolled ? 'text-slate-400' : 'text-white/70'
                  }`}>expand_more</span>
                )}
              </div>
            ))}
          </div>
          <button className="bg-primary hover:bg-blue-600 text-white font-display text-sm font-bold h-10 px-6 rounded-full transition-all shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5">
            Plan a Visit
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            onClick={(): void => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors ${isScrolled ? 'text-slate-900 dark:text-white' : 'text-white'}`}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-[#101922] border-t border-slate-100 dark:border-slate-800 shadow-xl animate-fade-in-up">
          <div className="flex flex-col p-6 gap-4">
            {NAV_ITEMS.map((item: NavItem) => (
              <a 
                key={item.label}
                href={item.href}
                className="text-lg font-bold font-display text-slate-800 dark:text-slate-100 hover:text-primary dark:hover:text-primary flex justify-between items-center"
              >
                {item.label}
                {item.hasDropdown && <span className="material-symbols-outlined text-slate-400">chevron_right</span>}
              </a>
            ))}
            <button className="bg-primary hover:bg-blue-600 text-white font-display text-base font-bold h-12 w-full rounded-lg mt-4 transition-colors">
              Plan a Visit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};