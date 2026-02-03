import React from 'react';

import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MenHero from '@/components/YouthHero';
import MenAbout from '@/components/MenAbout';

export default function Men() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow flex flex-col items-center w-full">
        <MenHero />
        <MenAbout />
      </main>
      <Footer />
    </div>
  );
}