'use client';

import React, { useState } from 'react';
import type { Series, Speaker } from '@/types';

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
import SermonHero from '@/components/SermonHero';
import { SermonLibrary } from '@/components/SermonLibrary';
import FilterToolbar from '@/components/FilterToolbar';
import SermonCard from '@/components/SermonCards';

export default function AboutUs() {
  const [search, setSearch] = useState('');
  const [selectedSeries, setSelectedSeries] = useState<Series | null>(null);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow flex flex-col items-center w-full">
        <SermonHero />
        {/* <FilterToolbar search={search} setSearch={setSearch} selectedSeries={selectedSeries} setSelectedSeries={setSelectedSeries} selectedSpeaker={selectedSpeaker} setSelectedSpeaker={setSelectedSpeaker} /> */}
        <SermonLibrary />

      </main>
      <Footer />
    </div>
  );
}