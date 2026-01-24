import React from 'react';
import { Sermon } from '../types';

const RECENT_MESSAGES: Sermon[] = [
  {
    id: '1',
    title: 'The Vicar\'s Message',
    series: 'Faith & Culture',
    speaker: 'Welcome to our website! Regardless of how you found us or simply stumbled onto this page, we are just glad that you found your way here. We are a family church, but our definition embraces anyone who desires to encounter God\'s presence in a tangible manner. We hope to hear from you, so click on the tab that says \'Contact\' and we will get in touch with you.The Lord be with you!',
    imageUrl: '/vicarmsg.jpg',
    category: 'Ps Bertram'
  },
  {
    id: '2',
    title: 'Service Times',
    series: 'Service Information',
    speaker: 'English Service: Sundays 10.30am | Agape Children\'s Ministry: Sundays, 10.30am | The Joshua Connection (Youth): Sundays 12.30pm | Filipino Fellowship: Sundays 1.30pm',
    imageUrl: '/outside.jpg',
    category: 'Service Information'
  },
  {
    id: '3',
    title: 'John 15:1-2',
    series: 'Theme Verse 2026',
    speaker: '“I am the true vine, and my Father is the vinedresser. 2 Every branch in me that does not bear fruit he takes away, and every branch that does bear fruit he prunes, that it may bear more fruit.”',
    imageUrl: '/cross.jpg',
    category: 'Theme Verse 2026'
  },
];

export const RecentMessages: React.FC = () => {
  return (
    <section className="w-full max-w-300 pt-16 px-4 pb-16 md:pb-24 mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white">Our Church</h3>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
        {/* <a href="#" className="text-sm font-bold font-display text-primary hover:underline flex items-center gap-1 group">
          Sermon Library <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {RECENT_MESSAGES.map((msg) => (
          <div key={msg.id} className="group cursor-pointer flex flex-col">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${msg.imageUrl}')` }}
              ></div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                {/* <div className="size-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 border border-white/40">
                  <span className="material-symbols-outlined text-white text-3xl ml-1">play_arrow</span>
                </div> */}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold font-display text-primary uppercase mb-2 tracking-wider">{msg.category}</span>
              <h4 className="font-bold font-display text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight mb-2">
                {msg.title}
              </h4>
              <p className="text-sm text-slate-500 font-medium">{msg.speaker}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};