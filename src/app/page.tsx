'use client';

import React from 'react';

import { Hero } from '@/components/Hero';
import { SermonSeries } from '@/components/SermonSeries';
import { RecentMessages } from '@/components/RecentMessages';
import { GetConnected } from '@/components/GetConnected';
import { Events } from '@/components/Events';
import { VisitUs } from '@/components/VisitUs';
import  {Insta}  from '@/components/InstagramFeed';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow">
        <Hero />
        <RecentMessages />
        <SermonSeries />

        <GetConnected />
        {/* <Events /> */}
        <Insta />
        <VisitUs />

      </main>
      <Footer />
    </div>
  );
}