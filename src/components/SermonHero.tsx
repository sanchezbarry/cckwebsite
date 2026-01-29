'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useSermons } from '@/hooks/useSermons';

const SermonHero: React.FC = () => {
  const { sermons, isLoading, error } = useSermons();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const featuredSermon = sermons[0];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    if (!featuredSermon?.audioUrl) return;

    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      if (!audioRef.current) {
        audioRef.current = new Audio(featuredSermon.audioUrl);
      }
      audioRef.current.play().catch(() => {
        alert('Could not play audio. Please check your connection.');
      });
      setIsPlaying(true);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (isLoading) {
    return (
      <section className="w-full bg-white py-8 lg:py-12 border-b border-[#f0f2f4]">
        <div className="max-w-300 w-full mx-auto px-4 md:px-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/3"></div>
            <div className="h-12 bg-gray-200 rounded w-2/3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 h-96 bg-gray-200 rounded-xl"></div>
              <div className="space-y-4">
                <div className="h-24 bg-gray-200 rounded"></div>
                <div className="h-40 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !featuredSermon) {
    return (
      <section className="w-full bg-white py-8 lg:py-12 border-b border-[#f0f2f4]">
        <div className="max-w-300 w-full mx-auto px-4 md:px-8 text-center">
          <p className="text-red-600 font-semibold">{error || 'No sermons available'}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-8 lg:py-12 border-b border-[#f0f2f4]">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={featuredSermon?.audioUrl} />
      
      <div className="max-w-300 w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-1 text-xs font-bold text-red-600 ring-1 ring-inset ring-red-600/10 uppercase tracking-wide">
              LATEST MESSAGE
            </span>
            <span className="text-[#617589] text-sm font-medium">{featuredSermon.type === 'VISION' ? 'Vision Sunday' : featuredSermon.type === 'SPECIAL' ? 'Special Event' : 'New Series'}</span>
          </div>
          <h1 className="text-[#111418] text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
            {featuredSermon.title}
          </h1>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Audio Player / Video Placeholder */}
          <div className="lg:col-span-2 w-full">
            <div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg aspect-video bg-[#111418] w-full" 
                 style={{ 
                   backgroundImage: `url(${featuredSermon.imageUrl})`, 
                   backgroundSize: 'cover', 
                   backgroundPosition: 'center' 
                 }}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <button 
                  onClick={togglePlayPause}
                  className="flex shrink-0 items-center justify-center rounded-full size-16 md:size-20 bg-primary/90 text-white shadow-xl hover:scale-105 transition-transform duration-200 pl-1">
                  <span className="material-symbols-outlined text-[32px] md:text-[40px]">
                    {isPlaying ? 'pause' : 'play_arrow'}
                  </span>
                </button>
              </div>
              
              {/* Progress bar overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-3">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleProgressChange}
                  className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-primary hover:h-2 transition-all"
                  style={{
                    background: `linear-gradient(to right, #2563eb 0%, #2563eb ${duration ? (currentTime / duration) * 100 : 0}%, rgba(255,255,255,0.3) ${duration ? (currentTime / duration) * 100 : 0}%, rgba(255,255,255,0.3) 100%)`
                  }}
                />
                <div className="flex justify-between items-center mt-2 text-white text-xs font-medium">
                  {/* <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span> */}
                </div>
              </div>
            </div>
          </div>

          {/* Details Side Panel */}
          <div className="lg:col-span-1 flex flex-col h-full justify-between gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold text-[#111418] mb-1">About this message</h3>
                <p className="text-[#617589] text-base leading-relaxed">
                  {featuredSermon.description}
                </p>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                {/* <div className="flex items-center gap-3 text-sm text-[#111418]">
                  <span className="material-symbols-outlined text-gray-400">person</span>
                  <span className="font-medium">{featuredSermon.speaker}</span>
                </div> */}
                <div className="flex items-center gap-3 text-sm text-[#111418]">
                  <span className="material-symbols-outlined text-gray-400">calendar_today</span>
                  <span>{featuredSermon.date}</span>
                </div>
                {/* <div className="flex items-center gap-3 text-sm text-[#111418]">
                  <span className="material-symbols-outlined text-gray-400">schedule</span>
                  <span>{featuredSermon.duration}</span>
                </div> */}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button 
                onClick={togglePlayPause}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white hover:bg-blue-600 transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  {isPlaying ? 'pause' : 'headphones'}
                </span>
                {isPlaying ? 'Pause' : 'Listen Now'}
              </button>
              {/* <div className="grid grid-cols-2 gap-3">
                <button className="flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-[#111418] hover:bg-gray-50 transition-colors">
                  <span className="material-symbols-outlined text-[20px]">description</span>
                  Notes
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SermonHero;