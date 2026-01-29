// import { useContext, createContext, useState, useRef, useCallback } from 'react';

// interface AudioContextType {
//   currentlyPlaying: string | null;
//   playAudio: (sermonId: string, audioUrl: string) => void;
//   pauseAudio: (sermonId: string) => void;
//   isPlaying: (sermonId: string) => boolean;
//   audioRef: React.RefObject<HTMLAudioElement>;
// }

// export const AudioContext = createContext<AudioContextType | null>(null);

// export function useAudioPlayer() {
//   const context = useContext(AudioContext);
//   if (!context) {
//     throw new Error('useAudioPlayer must be used within AudioProvider');
//   }
//   return context;
// }

// export function AudioProvider({ children }: { children: React.ReactNode }) {
//   const [currentlyPlaying, setCurrentlyPlaying] = useState<string | null>(null);
//   const audioRef = useRef<HTMLAudioElement>(null);

//   const playAudio = useCallback((sermonId: string, audioUrl: string) => {
//     if (!audioRef.current) return;

//     // If a different sermon is playing, pause it first
//     if (currentlyPlaying && currentlyPlaying !== sermonId) {
//       audioRef.current.pause();
//     }

//     // Set the new audio source and play
//     audioRef.current.src = audioUrl;
//     audioRef.current.play().catch(() => {
//       alert('Could not play audio. Please check your connection.');
//     });
//     setCurrentlyPlaying(sermonId);
//   }, [currentlyPlaying]);

//   const pauseAudio = useCallback((sermonId: string) => {
//     if (currentlyPlaying === sermonId && audioRef.current) {
//       audioRef.current.pause();
//       setCurrentlyPlaying(null);
//     }
//   }, [currentlyPlaying]);

//   const isPlaying = useCallback((sermonId: string) => {
//     return currentlyPlaying === sermonId;
//   }, [currentlyPlaying]);

//   return (
//     <AudioContext.Provider value={{ currentlyPlaying, playAudio, pauseAudio, isPlaying, audioRef }}>
//       {children}
//       <audio ref={audioRef} crossOrigin="anonymous" />
//     </AudioContext.Provider>
//   );
// }