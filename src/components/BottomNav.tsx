import React from 'react';
import { Home, Flame, UtensilsCrossed, MapPin } from 'lucide-react';

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#0D0D0D]/95 backdrop-blur-md border-t border-[#26262E] z-50 px-6 py-2 flex justify-between items-center md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.8)] pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <a href="#" className="flex flex-col items-center justify-center gap-1 text-[#C8102E] min-h-[48px] min-w-[48px]">
        <Home className="w-5 h-5" />
        <span className="text-[10px] font-medium tracking-wide">Home</span>
      </a>
      <a href="#build" className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-[#E5A93C] transition-colors min-h-[48px] min-w-[48px]">
        <Flame className="w-5 h-5" />
        <span className="text-[10px] font-medium tracking-wide">Build</span>
      </a>
      <a href="#menu" className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-[#E5A93C] transition-colors min-h-[48px] min-w-[48px]">
        <UtensilsCrossed className="w-5 h-5" />
        <span className="text-[10px] font-medium tracking-wide">Menu</span>
      </a>
      <a href="#location" className="flex flex-col items-center justify-center gap-1 text-gray-400 hover:text-[#E5A93C] transition-colors min-h-[48px] min-w-[48px]">
        <MapPin className="w-5 h-5" />
        <span className="text-[10px] font-medium tracking-wide">Locate</span>
      </a>
    </div>
  );
}
