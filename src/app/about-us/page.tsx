import React from 'react';

import  AboutHero  from '@/components/AboutHero';
import VisionMission  from '@/components/VissionMission';
import { RecentMessages } from '@/components/RecentMessages';
import { GetConnected } from '@/components/GetConnected';
import { Events } from '@/components/Events';
import { VisitUs } from '@/components/VisitUs';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import People from '@/components/People';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow flex flex-col items-center w-full">
        <AboutHero />
         <VisionMission />
         <People />
      </main>
      <Footer />
    </div>
  );
}