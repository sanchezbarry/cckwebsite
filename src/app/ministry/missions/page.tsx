import React from 'react';

import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import MenHero from '@/components/MenHero';
import MenAbout from '@/components/MenAbout';
import WomenHero from '@/components/WomenHero';
import WomenAbout from '@/components/WomenAbout';
import MissionHero from '@/components/MissionHero';

export default function Men() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow flex flex-col items-center w-full">
        <MissionHero />
        <WomenAbout />
      </main>
      <Footer />
    </div>
  );
}