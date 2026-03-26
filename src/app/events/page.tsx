import React from 'react';

import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { AllPosts } from '@/components/AllPosts';


export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar alwaysShowBackground />
      <main className="grow flex-col items-center w-full">
        <AllPosts />

      </main>
      <Footer />
    </div>
  );
}