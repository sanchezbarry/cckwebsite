import React from 'react';
import { Sermon } from '../types';

const RECENT_MESSAGES: Sermon[] = [
  {
    id: '1',
    title: 'Walking in Faith',
    series: 'Faith & Culture',
    speaker: 'Pastor Jane Smith',
    date: 'Oct 17, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUYfCRmEj-wKoB2dEtUYvu86fG0jxf-ggsRF9_8OiQj2UipZ99uR8n6HtlJk2fMTGMWyFF8Tf2GreIL531EH4tLE5-pkU4_N2OT71e4s3t-2ZybIBB-WMf_DZrYVClmoAW0cFzsvyMzOG7tQ-HPr23mvRP41qaA-qGX4BHF-RZwSCa7SNds_hcfR4yanR0JPc8D58NaicpaKa-mwLCa67gJ7v43xrIiJi-G9YEvZHJFvVbc6GklATLz6eClAZGMY2rLV3qbc26Szpu',
    category: 'Faith & Culture'
  },
  {
    id: '2',
    title: 'The Power of Together',
    series: 'Community',
    speaker: 'Pastor John Doe',
    date: 'Oct 10, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2e992Kt5dXpG5Fmtpjf04Za27DkLuKQhadawRAB1nULtsdpSUKtPHtAeXZ4MC_zQza1PCjfoJRMClgyI-RYYA6jWNqk4jaAFrQ9tZKD-DXqMc8C0yh_Tp3EgYs1UaPlR_YHnWVKye_iyVmP0myVXEshz_HGUjx4NDrso9ngZzcm-iOlnKIGsEV31Bd55sqoDd4WexeQwyBKntcfoneodtak5aiJYiHxf0bnzmAa5tZbCiV-V13mCyfI7kE9aE-JHp7mfDXEPgRiou',
    category: 'Community'
  },
  {
    id: '3',
    title: 'Serving with Joy',
    series: 'Service',
    speaker: 'Pastor Mike Brown',
    date: 'Oct 03, 2023',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUHkkEudfUun5RSGGZIaOmSgHl_qqGWznl9CFnzUNUGaKbQy_pR-HbmfYf0G55YewNohIH_fK6M3g9bfdEar8XivAHBb1062BO3YAoV_GQRHdtpm-w97aPggTKX8Q67S1W1ALILUAzFEnA4hEi2LkvcBdcHr8I9QrMVKCblDlYyx9nHXmVxzFh1QQ10-HtbQNewRQY4opOnvjiWTC1RwDnZOV3eX-SJvKUIyyg3WTTpSEmfDgWSluA9NCugthf0v3xxHOZEEsvlsSB',
    category: 'Service'
  },
];

export const RecentMessages: React.FC = () => {
  return (
    <section className="w-full max-w-[1200px] px-4 pb-16 md:pb-24 mx-auto">
      <div className="flex items-center gap-4 mb-10">
        <h3 className="text-xl md:text-2xl font-bold font-display text-slate-900 dark:text-white">Recent Messages</h3>
        <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
        <a href="#" className="text-sm font-bold font-display text-primary hover:underline flex items-center gap-1 group">
          Sermon Library <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
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
                <div className="size-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 border border-white/40">
                  <span className="material-symbols-outlined text-white text-3xl ml-1">play_arrow</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold font-display text-primary uppercase mb-2 tracking-wider">{msg.category}</span>
              <h4 className="font-bold font-display text-lg text-slate-900 dark:text-white group-hover:text-primary transition-colors leading-tight mb-2">
                {msg.title}
              </h4>
              <p className="text-sm text-slate-500 font-medium">{msg.speaker} • {msg.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};