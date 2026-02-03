import React from 'react';

import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import FilipinoHero from '@/components/FilipinoHero';
import FilipinoAbout from '@/components/FilipinoAbout';


export default function Youth() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow flex flex-col items-center w-full">
        <FilipinoHero />
        <FilipinoAbout />
 
      </main>
      <Footer />
    </div>
  );
}