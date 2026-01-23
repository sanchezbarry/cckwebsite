'use client'

import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen min-h-150 flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(16, 25, 34, 0.4) 0%, rgba(16, 25, 34, 0.7) 100%), url("/hero.jpg")`,
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mx-auto animate-fade-in-up mt-16">
        <span className="mb-6 inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold font-display uppercase tracking-widest">
          Sundays 9:00 AM & 11:00 AM
        </span>
        
        <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-black font-display leading-tight tracking-tight mb-8 drop-shadow-lg">
          Our Mission
        </h1>
        
        <p className="text-slate-100 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mb-12 drop-shadow-md">
          To be a community of people who live out the Word of God, in the power of the Holy Spirit with the love of God the Father.
          <br />
          THEME 2026: “ABIDE IN HIM”
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="group flex items-center justify-center gap-2 h-14 px-8 bg-primary hover:bg-blue-600 text-white text-base font-bold font-display rounded-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            <span>New Here? Start Here</span>
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          
          <button className="group flex items-center justify-center gap-2 h-14 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold font-display rounded-lg transition-all hover:-translate-y-1">
            <span>Listen Online</span>
            <span className="material-symbols-outlined text-xl group-hover:scale-110 transition-transform">play_circle</span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 animate-bounce-slow cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
      </div>
    </header>
  );
};