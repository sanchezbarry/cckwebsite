import React, { useState, useEffect } from "react";

export const Insta: React.FC = () => {
    useEffect(() => {
    const d = document;
    const s = d.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    d.head.append(s);
  }, []);

  return (
    <section className="w-full py-20 bg-white dark:bg-[#101922] overflow-hidden">
      <div className="max-w-300 mx-auto px-4 text-center mb-12 flex flex-col items-center">
        <span className="inline-block p-3 rounded-full bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 mb-4 animate-bounce-slow">
          <span className="material-symbols-outlined text-3xl">photo_camera</span>
        </span>
        <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mb-2">Follow Us on Instagram</h2>
        <a href="https://www.instagram.com/sg.cck/" className="text-pink-600 dark:text-pink-400 font-bold hover:underline transition-colors text-lg">@sg.cck</a>
      </div>



<div data-behold-id="ZuKGfdU1GrkNcYtXm02c"></div>
        {/* {IMAGES.map((src, index) => (
          <div key={index} className="relative group aspect-square md:aspect-auto overflow-hidden bg-slate-100 dark:bg-slate-800 cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundImage: `url('${src}')` }}
            ></div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
              <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 text-3xl">favorite</span>
            </div>
          </div>
        ))} */}
  
    </section>
  );
};


