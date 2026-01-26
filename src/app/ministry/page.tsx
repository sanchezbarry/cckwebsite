import React from 'react';

import  MinistryHero    from '@/components/MinistryHero';
import VisionMission  from '@/components/VissionMission';
import { RecentMessages } from '@/components/RecentMessages';
import { GetConnected } from '@/components/GetConnected';
import { Events } from '@/components/Events';
import { VisitUs } from '@/components/VisitUs';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import People from '@/components/People';
import MinistryCarousel from '@/components/MinistryCarousel';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow flex flex-col items-center w-full">
        <MinistryHero />
        <MinistryCarousel />

      </main>
      <Footer />
    </div>
  );
}