import React from 'react';
import { Event } from '../types';

const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Annual Fall Festival',
    date: 'Nov 15',
    description: 'Bring the whole family for a night of food, games, and community connection in our main parking lot.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUHkkEudfUun5RSGGZIaOmSgHl_qqGWznl9CFnzUNUGaKbQy_pR-HbmfYf0G55YewNohIH_fK6M3g9bfdEar8XivAHBb1062BO3YAoV_GQRHdtpm-w97aPggTKX8Q67S1W1ALILUAzFEnA4hEi2LkvcBdcHr8I9QrMVKCblDlYyx9nHXmVxzFh1QQ10-HtbQNewRQY4opOnvjiWTC1RwDnZOV3eX-SJvKUIyyg3WTTpSEmfDgWSluA9NCugthf0v3xxHOZEEsvlsSB'
  },
  {
    id: '2',
    title: 'Baptism Sunday',
    date: 'Nov 22',
    description: 'We are celebrating life change! If you are interested in being baptized, sign up for our baptism class.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQFsxLiclTSH5BFevX26ooxeLJ1pVdncrFyurSBdP4dbXXj7c0JJWCNYuHL_KVQcKe-QKucxhRdqJYvWKGDmIh8z_bcYrBUSY64tb4k4Kr7OVR0O_-BYypUpVHIjIWjno40sIpuE5HBPB6Hq33iIuQyNM63uLj_nDSlmbykA2seTp3ZWl9Yed0x0_7G0RoUDsfRr_l9_7qofdton3k57lSAACqVsPhvSnf9UOlcH6VtFvId46emsZovLoBx3-5xxALc9f7ERuGbYab'
  },
  {
    id: '3',
    title: 'Winter Youth Retreat',
    date: 'Dec 05',
    description: 'Registration is now open for our high school winter retreat. Early bird pricing ends soon!',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHP0czwre6TGhgpg2aoGjkoNuR5-5G12JfC2HZJKurVsigMTX-IhllTfmb-L_U9bVRiL0lA5v8Rt9_WWceaQ2lFkKZJEhcXMRGva5CYZ8Tuc8vydf_0JTHOm5Wbb3gX-V2SQehf2yy7UWVvDQdSoHttZ4WE1w8GIIB9eMJI4YBfVTjm0kru3ysbktGkzFh4gCzylZw1Mk08VIoZeodzR_1dwnnIcDy3Huqwoo6eQ_w5Wk1AONvU32pIThmqd44H7a6dpErD5Rdglhv'
  }
];

export const Events: React.FC = () => {
  return (
    <section className="w-full max-w-300 px-4 py-16 md:py-24 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold font-display">Latest News & Events</h2>
          <p className="text-slate-500 mt-3 text-lg">Stay up to date with what's happening at CCK.</p>
        </div>
        <button className="h-12 px-6 border border-slate-300 dark:border-slate-700 rounded-lg font-bold font-display text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200">
          View All Events
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {EVENTS.map((event) => (
          <article key={event.id} className="flex flex-col group cursor-pointer">
            <div className="overflow-hidden rounded-2xl aspect-4/3 mb-5 bg-slate-200 relative shadow-sm">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${event.imageUrl}')` }}
              ></div>
              <div className="absolute top-4 left-4 bg-white/95 dark:bg-[#101922]/95 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold font-display uppercase tracking-wider text-slate-900 dark:text-white shadow-lg border border-slate-100 dark:border-slate-800">
                {event.date}
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                {event.description}
              </p>
              <span className="text-primary font-bold text-sm mt-1 flex items-center gap-2 group-hover:gap-3 transition-all">
                Read More <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};