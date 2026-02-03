import React from 'react';

import  CellHero    from '@/components/CellHero';
import VisionMission  from '@/components/VissionMission';
import { RecentMessages } from '@/components/RecentMessages';
import { GetConnected } from '@/components/GetConnected';
import { Events } from '@/components/Events';
import { VisitUs } from '@/components/VisitUs';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import CellGroups from '@/components/CellGroups';


export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow flex-col items-center w-full">
        <CellHero />
        <CellGroups />
  

      </main>
      <Footer />
    </div>
  );
}