import React from 'react';

import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import YouthHero from '@/components/YouthHero';
import DataDeletion from '@/components/DataDeletion';

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow flex flex-col items-center w-full">
        {/* <YouthHero /> */}
        <DataDeletion />
      </main>
      <Footer />
    </div>
  );
}