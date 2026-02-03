import React from 'react';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { LoginForm } from '@/components/Login';
import LoginHero from '@/components/LoginHero';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="grow flex-col items-center w-full">
        <LoginHero />
         <LoginForm />
      </main>
      <Footer />
    </div>
  );
}