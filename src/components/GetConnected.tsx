import React from 'react';
import { Ministry } from '../types';

const MINISTRIES: Ministry[] = [
  {
    title: 'Join a Group',
    description: 'Connect with others and grow in your faith in a smaller setting.',
    icon: 'diversity_3',
    action: 'Find a Group'
  },
  {
    title: 'Serve the City',
    description: 'Use your gifts to make a difference in our church and community.',
    icon: 'volunteer_activism',
    action: 'Join a Team'
  },
  {
    title: 'Request Prayer',
    description: 'How can we pray for you? Our team is ready to stand with you.',
    icon: 'prayer_times',
    action: 'Submit Request'
  }
];

export const GetConnected: React.FC = () => {
  return (
    <section className="w-full bg-white dark:bg-surface-dark py-16 md:py-24 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-4">Get Connected</h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">Life is better together. Find your place in our community through groups, serving, and prayer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MINISTRIES.map((item) => (
            <div 
              key={item.title}
              className="bg-background-light dark:bg-[#101922] p-8 rounded-2xl border border-slate-100 dark:border-slate-800 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="size-20 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-3">{item.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">{item.description}</p>
              <a href="#" className="mt-auto text-primary font-bold font-display text-sm hover:underline flex items-center gap-1">
                {item.action} <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};