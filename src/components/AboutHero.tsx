import React from 'react';

const AboutHero: React.FC = () => {
  return (
    <section className="w-full flex justify-center  py-5 px-4 md:px-10">
      <div 
        className="w-full max-w-240 rounded-xl overflow-hidden relative min-h-120 flex flex-col justify-center items-center text-center p-8 bg-cover bg-center shadow-lg"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDRjleZUxkk14fuGU73oRUyjvRkLVO-JzDQCH5NaOT7OYQtYZ77MDiITncF5K5I65MTopwRsypEoaHsvsluqSJNPDgyTp-OK0nW1ltrNc4HlEkMPempxTjoDUC0Io1EmDyLGfkAWJ0DItdfoWta4PPzbpg2PGqMu8YifphpKYXqWEGAsS7V7ADgZWcHE_V38ExCgOuECigVTx0eyV8XSzUY-oI82zMa1Us2yU4SPMn5hi_YpaTre6UKU0Ojc_sDVgkmAYK2F4hSSFPB')`
        }}
      >
        <div className="flex flex-col gap-4 z-10 max-w-2xl">
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-sm">
            Who We Are
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-medium max-w-lg mx-auto drop-shadow-sm">
            A community dedicated to faith, hope, and love. Join us as we journey together.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="h-12 px-6 bg-primary hover:bg-blue-600 text-white text-base font-bold rounded-lg transition-all hover:scale-105 shadow-md">
              Watch Welcome Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;