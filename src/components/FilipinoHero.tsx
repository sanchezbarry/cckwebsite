'use client'

import React from 'react';

const FilipinoHero: React.FC = () => {
  return (
    <section className="relative w-full min-h-120 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20s] hover:scale-105"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('/filipinohero.png')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">
        <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
          Filipino Ministry
        </h1>
        <p className="text-white/90 text-lg md:text-xl font-medium max-w-lg mx-auto drop-shadow-sm mt-4">
          A community dedicated to faith, hope, and love. Join us as we journey together.
        </p>
        {/* <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
          <button className="h-12 px-6 bg-primary hover:bg-blue-600 text-white text-base font-bold rounded-lg transition-all hover:scale-105 shadow-md">
            Watch Welcome Video
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default FilipinoHero;