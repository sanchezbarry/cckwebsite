import React from 'react';

import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AgapeInfo } from '@/components/AgapeInfo';
import ChaplaincyHero from '@/components/ChaplaincyHero';
import ChaplaincyAbout from '@/components/ChaplaincyAbout';
import  Calendar from '@/components/Calendar';


export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar alwaysShowBackground />
      <main className="grow flex-col items-center w-full">
        <Calendar />

      </main>
      <Footer />
    </div>
  );
}