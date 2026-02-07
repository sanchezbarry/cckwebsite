import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#101922] text-white pt-24 pb-12">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
                          <a href='/'>
                          <Image  src="/transparentlogo.png" alt="Church Logo" width={32} height={32} />
                          </a>
              {/* <span className="material-symbols-outlined text-primary text-3xl">church</span> */}
              <h3 className="text-xl font-bold font-display tracking-tight">Chapel of Christ the King</h3>
            </div>
            <div className="text-slate-400 text-sm leading-relaxed">
              <p>St Margaret’s School (Primary) School</p>
              <p>136 Sophia Rd, Singapore 228197</p>
              {/* <p className="mt-4 text-white font-medium">(555) 123-4567</p> */}
              {/* <p className="text-primary hover:text-white transition-colors cursor-pointer">hello@gracecommunity.com</p> */}
            </div>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/sg.cck/" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all">
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
              <a href="https://open.spotify.com/show/5JHkfZkqlaUqRxxVaU0Wqu?si=bc6aa8f050454978" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:-translate-y-1 transition-all">
                <span className="material-symbols-outlined text-lg">podcasts</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold font-display mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary after:rounded-full">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Sermons</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Member's Page</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Chaplaincy</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Events</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold font-display mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary after:rounded-full">Ministries</h4>
            <ul className="flex flex-col gap-4 text-slate-400 text-sm font-medium">
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Cell Groups</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Music & Sound</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Missons & Outreach</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Youth Fellowship</a></li>
              <li><a href="#" className="hover:text-primary hover:translate-x-1 transition-all inline-block">Agape Children</a></li>
            </ul>
          </div>

          {/* <div>
            <h4 className="text-lg font-bold font-display mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary after:rounded-full">Weekly Updates</h4>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">Subscribe to our newsletter to stay informed about events and news.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full h-12 px-4 rounded-lg bg-slate-800 border border-slate-700 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              />
              <button className="h-12 px-4 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold font-display text-sm transition-colors shadow-lg shadow-blue-900/20">
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">© 2026 Chapel of Christ the King. All rights reserved.</p>
          <div className="flex gap-8 text-slate-500 text-xs font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};