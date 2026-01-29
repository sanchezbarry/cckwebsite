'use client';

import React, { useState, useMemo } from 'react';
import { useSermons } from '@/hooks/useSermons';
import { Series, Speaker } from '@/types';
import SermonCard from './SermonCards';
import FilterToolbar from './FilterToolbar';

export const SermonLibrary: React.FC = () => {
  const { sermons, isLoading, error } = useSermons();
  const [search, setSearch] = useState('');
  const [selectedSeries, setSelectedSeries] = useState<Series | null>('All Series');
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>('All Speakers');
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter sermons based on search, series, and speaker (exclude the featured sermon)
  // Logic based on sermon.js implementation
  const filteredSermons = useMemo(() => {
    // Skip the first sermon (featured) and filter the rest
    const allSermons = sermons.slice(1);
    
    return allSermons.filter((sermon) => {
      // Search filter - searches title, description, and series
      const searchLower = search.toLowerCase();
      const matchesSearch =
        sermon.title.toLowerCase().includes(searchLower) ||
        (sermon.description && sermon.description.toLowerCase().includes(searchLower)) ||
        sermon.series.toLowerCase().includes(searchLower);

      // Series filter
      const matchesSeries =
        selectedSeries === 'All Series' || sermon.series === selectedSeries;

      // Speaker filter
      const matchesSpeaker =
        selectedSpeaker === 'All Speakers' || sermon.speaker === selectedSpeaker;

      return matchesSearch && matchesSeries && matchesSpeaker;
    });
  }, [sermons, search, selectedSeries, selectedSpeaker]);

  if (isLoading) {
    return (
      <>
        <div className="sticky top-16 z-40 w-full bg-white/80 backdrop-blur-md border-b border-[#f0f2f4] shadow-sm">
          <div className="max-w-300 w-full mx-auto px-4 md:px-8 py-4">
            <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
        <section className="w-full bg-[#f9fafb] py-12">
          <div className="max-w-300 w-full mx-auto px-4 md:px-8">
            <div className="animate-pulse space-y-4 mb-8">
              <div className="h-8 bg-gray-200 rounded w-1/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-96 bg-gray-200 rounded-xl animate-pulse"></div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  if (error) {
    return (
      <>
        <FilterToolbar
          search={search}
          setSearch={setSearch}
          selectedSeries={selectedSeries}
          setSelectedSeries={setSelectedSeries}
          selectedSpeaker={selectedSpeaker}
          setSelectedSpeaker={setSelectedSpeaker}
        //   selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        //   selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          isAiLoading={false}
        />
        <section className="w-full bg-[#f9fafb] py-12">
          <div className="max-w-300 w-full mx-auto px-4 md:px-8 text-center">
            <p className="text-red-600 font-semibold">{error}</p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <FilterToolbar
        search={search}
        setSearch={setSearch}
        selectedSeries={selectedSeries}
        setSelectedSeries={setSelectedSeries}
        selectedSpeaker={selectedSpeaker}
        setSelectedSpeaker={setSelectedSpeaker}
        // selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        // selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isAiLoading={false}
      />

      <section className="w-full bg-[#f9fafb] py-12">
        <div className="max-w-300 w-full mx-auto px-4 md:px-8">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#111418] mb-2">
              Sermon Library
            </h2>
            <p className="text-[#617589]">
              {filteredSermons.length} sermon{filteredSermons.length !== 1 ? 's' : ''} found
              {search && ` matching "${search}"`}
              {selectedSeries !== 'All Series' && ` in ${selectedSeries}`}
              {selectedSpeaker !== 'All Speakers' && ` by ${selectedSpeaker}`}
            </p>
          </div>

          {filteredSermons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredSermons.map((sermon) => (
                <SermonCard key={sermon.id} sermon={sermon} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="material-symbols-outlined text-6xl text-gray-300 block mb-4">
                search_off
              </span>
              <h3 className="text-xl font-bold text-gray-600 mb-2">
                No sermons found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
