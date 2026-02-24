'use client'

import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import Image from 'next/image'; 

const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about-us', },
  { label: 'Sermons', href: '/sermons', },
  { 
    label: 'Ministries', 
    href: '/ministry', 
    hasDropdown: true,
    dropdownItems: [
      { label: 'Agape Children', href: '/ministry/agape' },
      { label: 'Youth Ministry', href: '/ministry/youth' },
      { label: 'Filipino Fellowship', href: '/ministry/filipino' },
      { label: 'Cell Groups', href: '/ministry/cellgroups' },
      { label: 'Men\'s Ministry', href: '/ministry/men' },
      { label: 'Women\'s Ministry', href: '/ministry/women' },
      { label: 'Missions & Outreach', href: '/ministry/missions' },
      { label: 'Music & Sound Ministry', href: '/ministry/music' },
    ]
  },
  { label: 'Chaplaincy', href: '/chaplaincy', },
  { label: 'Events', href: '/events', },
  { label: 'Contact', href: '/contact' },
  { label: 'Member\' Page', href: '/member' },
];

interface NavbarProps {
  alwaysShowBackground?: boolean;
}

export default function Navbar({ alwaysShowBackground = false }: NavbarProps){
  const [isScrolled, setIsScrolled] = useState<boolean>(alwaysShowBackground);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect((): (() => void) => {
    const handleScroll = (): void => {
      setIsScrolled(alwaysShowBackground || window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysShowBackground]);

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
                  <span className={`material-symbols-outlined text-sm transition-transform group-hover:rotate-180 duration-300 ${
                    isScrolled ? 'text-slate-400' : 'text-white/70'
                  }`}>expand_more</span>
                )}
                
                {/* Desktop Dropdown Menu */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="absolute top-full left-0 mt-0 w-48 bg-white dark:bg-[#1a2332] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block px-4 py-2 text-sm font-display text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
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
              <div key={item.label}>
                <div className="flex justify-between items-center">
                  <a 
                    href={item.href}
                    className="text-lg font-bold font-display text-slate-800 dark:text-slate-100 hover:text-primary dark:hover:text-primary"
                  >
                    {item.label}
                  </a>
                  {item.hasDropdown && <span className="material-symbols-outlined text-slate-400">chevron_right</span>}
                </div>
                
                {/* Mobile Dropdown Items */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="ml-4 mt-2 flex flex-col gap-2 border-l-2 border-slate-200 dark:border-slate-700 pl-4">
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="text-sm font-display text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                      >
                        {dropdownItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
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