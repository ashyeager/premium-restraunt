import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#26262E] pt-16 pb-24 md:pb-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
        
        <div className="flex flex-col max-w-xs">
          <span className="font-serif text-2xl tracking-[0.2em] uppercase text-[#E5A93C] mb-4">
            Wok House
          </span>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            High-heat Pan-Asian street food at Muscat Grand Mall. Experience the authentic breath of the wok.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 -ml-2 min-h-[48px] min-w-[48px] flex items-center justify-center">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 min-h-[48px] min-w-[48px] flex items-center justify-center">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 min-h-[48px] min-w-[48px] flex items-center justify-center">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Menu</h4>
            <a href="#build" className="text-gray-400 hover:text-[#E5A93C] transition-colors text-sm min-h-[48px] md:min-h-0 flex items-center md:block">Build Your Wok</a>
            <a href="#menu" className="text-gray-400 hover:text-[#E5A93C] transition-colors text-sm min-h-[48px] md:min-h-0 flex items-center md:block">Signature Dishes</a>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Visit Us</h4>
            <a href="#location" className="text-gray-400 hover:text-[#E5A93C] transition-colors text-sm min-h-[48px] md:min-h-0 flex items-center md:block">Location</a>
            <a href="https://maps.google.com/?q=Muscat+Grand+Mall" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E5A93C] transition-colors text-sm min-h-[48px] md:min-h-0 flex items-center md:block">Get Directions</a>
          </div>

          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Legal</h4>
            <div className="flex md:flex-col gap-8 md:gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm min-h-[48px] md:min-h-0 flex items-center md:block">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm min-h-[48px] md:min-h-0 flex items-center md:block">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-[#26262E] pt-8 gap-4">
        <p className="text-gray-500 text-xs uppercase tracking-widest text-center md:text-left">
          &copy; {new Date().getFullYear()} WOK HOUSE OMAN. ALL RIGHTS RESERVED.
        </p>
        <p className="text-gray-500 text-xs tracking-widest flex items-center gap-2">
          BUILT BY 
          <a 
            href="https://harikos-ai.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#E5A93C] font-bold hover:text-white transition-colors"
          >
            HARIKOS AI
          </a>
        </p>
      </div>
    </footer>
  );
}
