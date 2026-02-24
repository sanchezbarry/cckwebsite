"use client";
import React, { useEffect, useState } from 'react';
import { Footer } from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { LoginForm } from '@/components/Login';
import LoginHero from '@/components/LoginHero';
import { FileUploader } from '@/components/FileUpload';
import { PDFViewer } from '@/components/PDFViewer';
import { createClient } from '@supabase/supabase-js';

export default function Members() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const isAdmin = userEmail === "admin@cck.org.sg";

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = async () => {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || "",
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
      );

      const { data } = await supabase.auth.getSession();
      setIsAuthenticated(!!data?.session);
      setUserEmail(data?.session?.user?.email || null);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Navbar />
        <main className="grow flex flex-col items-center justify-center w-full">
          <p className="text-gray-600 dark:text-gray-400">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
        <Navbar />
        <main className="grow flex flex-col items-center w-full">
          <LoginForm />
        </main>
        <Footer />
      </div>
    );
  }

  // Show members content if authenticated
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <LoginHero />
      <main className="grow flex flex-col items-center w-full gap-8 py-8 px-4">
        
        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Weekly Bulletin</h2>
          <PDFViewer refreshTrigger={refreshTrigger} isAdmin={isAdmin} />
        </section>

        {/* Upload section - only for admin */}
        {isAdmin && (
          <section className="w-full max-w-4xl">
            <h2 className="text-2xl font-bold mb-4">Upload Bulletin</h2>
            <FileUploader onUploadSuccess={() => setRefreshTrigger(prev => prev + 1)} />
          </section>
        )}

      </main>
      <Footer />
    </div>
  );
}