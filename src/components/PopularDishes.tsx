import React from 'react';
import { motion } from 'motion/react';
import { Plus, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function PopularDishes() {
  const { t, language } = useLanguage();

  const popularDishes = [
    {
      nameKey: "dish.1.name",
      descKey: "dish.1.desc",
      price: "2.400",
      image: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?q=80&w=1000&auto=format&fit=crop",
    },
    {
      nameKey: "dish.2.name",
      descKey: "dish.2.desc",
      price: "3.600",
      image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1000&auto=format&fit=crop",
    },
    {
      nameKey: "dish.3.name",
      descKey: "dish.3.desc",
      price: "3.400",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1000&auto=format&fit=crop",
    }
  ];

  const handleOrder = (nameKey: string, price: string) => {
    const dishName = t(nameKey);
    const message = `Hi Wok House MGM! I'd like to place an order: ${dishName} (${price} OMR). Pickup at MGM Food Court.`;
    const whatsappUrl = `https://wa.me/96812345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="menu" className="py-24 px-6 bg-[#0D0D0D] border-t border-[#26262E]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-[#26262E] pb-6">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide text-white mb-2">
              {t('menu.title')}
            </h2>
            <p className="text-gray-400 text-sm md:text-base">
              {t('menu.subtitle')}
            </p>
          </div>
          <a href="#" className={`hidden sm:flex items-center gap-2 text-[#E5A93C] hover:text-white text-sm font-semibold tracking-wider uppercase transition-colors min-h-[48px] px-4 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {t('menu.viewAll')} <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {popularDishes.map((dish, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#16161A] rounded-xl overflow-hidden border border-[#26262E] flex flex-col group shadow-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0D0D0D]">
                <img 
                  src={dish.image} 
                  alt={t(dish.nameKey)}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#16161A] via-transparent to-transparent opacity-60" />
                <div className={`absolute top-4 ${language === 'ar' ? 'left-4' : 'right-4'} bg-[#0D0D0D]/80 backdrop-blur border border-[#26262E] text-[#E5A93C] px-3 py-1.5 text-sm font-mono font-bold rounded shadow-lg`}>
                  {dish.price} {t('builder.omr')}
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="font-serif text-xl md:text-2xl text-white mb-3">
                  {t(dish.nameKey)}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {t(dish.descKey)}
                </p>
                <button 
                  onClick={() => handleOrder(dish.nameKey, dish.price)}
                  className="w-full min-h-[48px] rounded-md bg-[#26262E] text-white flex items-center justify-center gap-2 hover:bg-[#C8102E] transition-colors border border-[#333333] hover:border-[#C8102E] text-sm uppercase tracking-wider font-semibold"
                >
                  <Plus className="w-4 h-4" />
                  {t('menu.add')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-10 flex justify-center sm:hidden">
          <a href="#" className={`flex items-center gap-2 text-[#E5A93C] hover:text-white text-sm font-semibold tracking-wider uppercase transition-colors border border-[#26262E] bg-[#16161A] px-6 py-3 rounded-md w-full justify-center min-h-[48px] ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
            {t('menu.viewAll')} <ArrowRight className={`w-4 h-4 ${language === 'ar' ? 'rotate-180' : ''}`} />
          </a>
        </div>
      </div>
    </section>
  );
}
