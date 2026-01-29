
import React from 'react';
import { Series, Speaker } from '../types';

interface FilterToolbarProps {
  search: string;
  setSearch: (s: string) => void;
  selectedSeries: Series | null;
  setSelectedSeries: (s: Series | null) => void;
  selectedSpeaker: Speaker | null;
  setSelectedSpeaker: (s: Speaker | null) => void;
//   selectedDate: string;
  setSelectedDate: (s: string) => void;
//   selectedCategory: string;
  setSelectedCategory: (s: string) => void;
  isAiLoading: boolean;
}

const FilterToolbar: React.FC<FilterToolbarProps> = ({ 
  search, 
  setSearch, 
  selectedSeries, 
  setSelectedSeries, 
  selectedSpeaker, 
  setSelectedSpeaker,
  isAiLoading
}) => {
  return (
    <section className="sticky top-16 z-40 w-full bg-white/80 backdrop-blur-md border-b border-[#f0f2f4] shadow-sm">
      <div className="max-w-300 w-full mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          {/* Search - filters sermons by title, topic, and description */}
          <div className="relative w-full md:max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {isAiLoading ? (
                <div className="animate-spin size-5 border-2 border-primary border-t-transparent rounded-full"></div>
              ) : (
                <span className="material-symbols-outlined">search</span>
              )}
            </div>
            <input 
              className="block w-full rounded-lg border-0 bg-[#f0f2f4] py-2.5 pl-10 pr-4 text-[#111418] ring-1 ring-inset ring-transparent focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6 placeholder:text-gray-500" 
              placeholder="Search by title, topic, or scripture..." 
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              data-search
            />
          </div>

          {/* Filters */}
          {/* <div className="flex w-full md:w-auto items-center gap-3 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <div className="relative min-w-35">
              <select 
                value={selectedSeries || ""}
               onChange={(e) => setSelectedSeries((e.target.value as Series) || null)}
                className="appearance-none block w-full rounded-lg border-gray-200 bg-white py-2.5 pl-3 pr-10 text-sm font-medium text-[#111418] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer shadow-sm"
              >
                <option value="">All Series</option>
                <option value="Walking in Faith">Walking in Faith</option>
                <option value="The Book of Romans">The Book of Romans</option>
                <option value="Special Event">Special Event</option>
                <option value="Vision Sunday">Vision Sunday</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
            </div>

            <div className="relative min-w-35">
              <select 
                value={selectedSpeaker || ""}
                onChange={(e) => setSelectedSpeaker((e.target.value as Speaker) || null)}
                className="appearance-none block w-full rounded-lg border-gray-200 bg-white py-2.5 pl-3 pr-10 text-sm font-medium text-[#111418] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer shadow-sm"
              >
                <option value="">All Speakers</option>
                <option value="Pastor John Doe">Pastor John Doe</option>
                <option value="Pastor Jane Smith">Pastor Jane Smith</option>
                <option value="Dr. Michael Brown">Dr. Michael Brown</option>
                <option value="Revd Peter Chen">Revd Peter Chen</option>
                <option value="Pastor Yvonne Pan">Pastor Yvonne Pan</option>
                <option value="Pastor Amos Chen">Pastor Amos Chen</option>
                <option value="Revd Jeremy-Joe Tan">Revd Jeremy-Joe Tan</option>
                <option value="Revd Bertram Cheong">Revd Bertram Cheong</option>
                <option value="Ven Wong Tak Meng">Ven Wong Tak Meng</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <span className="material-symbols-outlined text-sm">expand_more</span>
              </div>
            </div>

            <button className="flex items-center justify-center gap-1 rounded-lg border border-gray-200 bg-white p-2.5 text-[#111418] hover:bg-gray-50 shadow-sm shrink-0">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FilterToolbar;
