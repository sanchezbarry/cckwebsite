import React from 'react';

const VisionMission: React.FC = () => {
  return (
    <section className="w-full max-w-240 px-4 md:px-10 py-12">
      <div className="flex flex-col gap-4 mb-10 text-center md:text-left">
        <h2 className="text-[#111418] dark:text-white text-3xl md:text-4xl font-bold leading-tight">
          Our Vision & Mission
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl">
          Driven by our faith and commitment to the community, we strive to make a lasting impact.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Vision Card */}
        <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632] shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">visibility</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-[#111418] dark:text-white">Our Vision</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To see our city transformed by the Gospel through authentic community, sacrificial service, and unwavering hope.
            </p>
          </div>
        </div>

        {/* Mission Card */}
        <div className="flex flex-col gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#1a2632] shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold text-[#111418] dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              To love God wholeheartedly, love people unconditionally, and make disciples who make disciples.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;