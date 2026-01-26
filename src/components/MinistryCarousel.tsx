'use client';

import React, { useState, useEffect } from 'react';
import { MINISTRIES } from '@/constants';
import { Ministry } from '../types';

const MinistryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  // Responsive items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalItems = MINISTRIES.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      // Loop back to start if we are at the end
      if (prevIndex >= totalItems - itemsPerPage) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // Loop to end if we are at the start
      if (prevIndex === 0) {
        return totalItems - itemsPerPage;
      }
      return prevIndex - 1;
    });
  };

  return (
    <div className="relative w-full px-4 md:px-12 pt-12 pb-10">
      {/* Carousel Container */}
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
        >
          {MINISTRIES.map((ministry) => (
            <div
              key={ministry.id}
              className={`shrink-0 px-3 transition-all duration-300`}
              style={{ width: `${100 / itemsPerPage}%` }}
            >
              <div className="flex flex-col gap-4 group cursor-pointer h-full">
                <div className="w-full aspect-4/3 bg-center bg-no-repeat bg-cover rounded-xl overflow-hidden shadow-sm relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url("${ministry.imageUrl}")` }}
                  ></div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div className="flex flex-col gap-2 grow">
                  <div className="flex justify-between items-start">
                    <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">
                      {ministry.title}
                    </h3>
                    <span
                      className={`${ministry.tagColor} ${ministry.tagTextColor} text-xs px-2 py-1 rounded-full font-semibold whitespace-nowrap`}
                    >
                      {ministry.tag}
                    </span>
                  </div>
                  <p className="text-[#617589] dark:text-slate-400 text-sm font-normal leading-normal line-clamp-3">
                    {ministry.description}
                  </p>
                  <button className="mt-auto pt-2 text-primary text-sm font-bold leading-normal flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons - Absolute positioned relative to container */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 sm:ml-0 z-10 size-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 shadow-md text-primary hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors border border-gray-100 dark:border-slate-600"
        aria-label="Previous slide"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 sm:mr-0 z-10 size-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-700 shadow-md text-primary hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors border border-gray-100 dark:border-slate-600"
        aria-label="Next slide"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>

      {/* Pagination Dots (Optional for extra UX) */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalItems - itemsPerPage + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === idx
                ? 'w-6 bg-primary'
                : 'w-2 bg-gray-300 dark:bg-slate-700 hover:bg-primary/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MinistryCarousel;
