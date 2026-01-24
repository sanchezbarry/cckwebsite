import React from 'react';

export const SermonSeries: React.FC = () => {
  return (
    <section className="w-full max-w-300 px-4 pt-16 md:pt-24 pb-12 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
        <div>
          <span className="text-primary font-bold font-display uppercase tracking-widest text-xs">Sunday Sermons</span>
          <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold font-display mt-2">Latest Sermon</h2>
        </div>
        <a href="#" className="text-slate-500 hover:text-primary font-semibold font-display flex items-center gap-1 transition-colors group">
          View All <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </a>
      </div>

      <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden group">

        <div className="flex flex-col lg:flex-row items-stretch">

                  <iframe data-testid="embed-iframe" src="https://open.spotify.com/embed/show/5JHkfZkqlaUqRxxVaU0Wqu?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

          {/* <div 
            className="w-full lg:w-3/5 min-h-[300px] lg:min-h-[450px] bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD2e992Kt5dXpG5Fmtpjf04Za27DkLuKQhadawRAB1nULtsdpSUKtPHtAeXZ4MC_zQza1PCjfoJRMClgyI-RYYA6jWNqk4jaAFrQ9tZKD-DXqMc8C0yh_Tp3EgYs1UaPlR_YHnWVKye_iyVmP0myVXEshz_HGUjx4NDrso9ngZzcm-iOlnKIGsEV31Bd55sqoDd4WexeQwyBKntcfoneodtak5aiJYiHxf0bnzmAa5tZbCiV-V13mCyfI7kE9aE-JHp7mfDXEPgRiou")` }}
          >
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center cursor-pointer">
              <div className="size-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                <span className="material-symbols-outlined text-white text-5xl ml-1">play_arrow</span>
              </div>
            </div>
          </div> */}
          
          {/* <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-primary text-xs font-bold font-display uppercase rounded-md mb-4 tracking-wider">
                Series
              </span>
              <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-3">The Book of Acts</h3>
              <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                Join us as we explore the early church and what it means to be a community of believers today. Discover how the Holy Spirit moves through ordinary people to do extraordinary things.
              </p>
            </div>
            
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mt-auto">
              <p className="text-sm text-slate-400 font-medium mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">person</span> Pastor John Doe
                <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                <span className="material-symbols-outlined text-base">calendar_today</span> Oct 24, 2023
              </p>
              <button className="w-full sm:w-auto h-12 px-6 bg-primary hover:bg-blue-600 text-white font-bold font-display rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                <span className="material-symbols-outlined text-xl">play_circle</span>
                <span>Watch Now</span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};