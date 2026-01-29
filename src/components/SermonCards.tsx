'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sermon, SermonCategory } from '../types';

interface SermonCardProps {
  sermon: Sermon | SermonCategory;
  highlighted?: boolean;
}

const SermonCard: React.FC<SermonCardProps> = ({ sermon, highlighted }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrl = (sermon as SermonCategory).audioUrl;

  // Handle both Sermon and SermonCategory types
  const title = sermon.title;
  const series = sermon.series;
  const speaker = sermon.speaker;
  const imageUrl = sermon.imageUrl;
  const categoryColor = (sermon as SermonCategory).categoryColor || 'text-primary';
  const date = (sermon as SermonCategory).date || '';
  const duration = (sermon as SermonCategory).duration || '';
  const description = (sermon as SermonCategory).description || '';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    if (!audioUrl || !audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        alert('Could not play audio. Please check your connection.');
      });
      setIsPlaying(true);
    }
  };

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} src={audioUrl} />
      
      <article className={`flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group h-full ${highlighted ? 'ring-2 ring-primary bg-blue-50/30' : ''}`}>
        <div className="relative aspect-video overflow-hidden">
          <img 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            src={imageUrl}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            {audioUrl ? (
              <button
                onClick={togglePlayPause}
                className="p-3 rounded-full bg-primary/90 text-white hover:bg-primary transition-colors hover:scale-110"
                title={isPlaying ? "Pause" : "Play"}
              >
                <span className="material-symbols-outlined text-4xl">
                  {isPlaying ? 'pause' : 'play_circle'}
                </span>
              </button>
            ) : (
              <span className="material-symbols-outlined text-white opacity-50 text-5xl drop-shadow-lg">play_circle</span>
            )}
          </div>
          {/* {duration && (
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">{duration}</div>
          )} */}
        </div>
        <div className="p-5 flex flex-col grow">
          <div className="mb-2 flex items-center justify-between">
            <span className={`${categoryColor} text-[10px] font-extrabold uppercase tracking-widest`}>
              {series}
            </span>
          </div>
          <h3 className="text-lg font-bold text-[#111418] mb-2 group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-[#617589] text-sm mb-4 leading-relaxed">
              {description}
            </p>
          )}
          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex flex-col">
              {/* <span className="text-xs text-gray-700 font-semibold">{speaker}</span> */}
              {date && (
                <span className="text-xs text-gray-500">{date}</span>
              )}
            </div>
            <div className="flex gap-1">
              <button 
                onClick={togglePlayPause}
                disabled={!audioUrl}
                className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                title={audioUrl ? (isPlaying ? "Pause Audio" : "Play Audio") : "No audio available"}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {isPlaying ? 'pause_circle' : 'headphones'}
                </span>
              </button>
              {/* <button className="p-2 text-gray-400 hover:text-primary hover:bg-primary/5 rounded-full transition-colors" title="Download Notes">
                <span className="material-symbols-outlined text-[20px]">description</span>
              </button> */}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default SermonCard;