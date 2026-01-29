import React from 'react';


import AgapeCarousel  from '@/components/AgapeCarousel';
import { RecentMessages } from '@/components/RecentMessages';
import { GetConnected } from '@/components/GetConnected';
import { Events } from '@/components/Events';
import { VisitUs } from '@/components/VisitUs';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CellGroups from '@/components/CellGroups';
import YouthHero from '@/components/YouthHero';


export default function Youth() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow flex flex-col items-center w-full">
        <YouthHero />
 
      </main>
      <Footer />
    </div>
  );
}