import React from 'react';

import  AgapeHero    from '@/components/AgapeHero';
import AgapeCarousel  from '@/components/AgapeCarousel';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AgapeInfo } from '@/components/AgapeInfo';


export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow flex flex-col items-center w-full">
        <AgapeHero />
        <AgapeInfo />
        <AgapeCarousel />
  

      </main>
      <Footer />
    </div>
  );
}