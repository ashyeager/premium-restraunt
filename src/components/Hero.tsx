import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-[#0D0D0D]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552611052-33e04de081de?q=80&w=2940&auto=format&fit=crop" 
          alt="Wok House Asian Street Food" 
          className="w-full h-full object-cover scale-105 origin-center opacity-50 mix-blend-overlay"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${language === 'ar' ? 'from-transparent via-[#0D0D0D]/80 to-[#0D0D0D]' : 'from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent'}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/30 via-transparent to-[#0D0D0D]" />
      </motion.div>

      <div className="relative z-10 text-left flex flex-col items-start px-6 lg:px-12 mt-16 max-w-5xl mx-auto w-full rtl:text-right rtl:items-start">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#E5A93C] text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] mb-4"
        >
          {t('hero.subtitle')}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-normal leading-[1] mb-6 text-white"
        >
          {t('hero.title1')}<br/>
          {t('hero.title2')}<br/>
          <span className="text-[#C8102E]">{t('hero.title3')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-base md:text-lg text-white/80 max-w-[280px] md:max-w-md mb-10 leading-relaxed font-light"
        >
          {t('hero.desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col gap-3 w-full max-w-[320px]"
        >
          <a href="#build" className="flex items-center justify-center gap-3 bg-[#C8102E] text-white px-8 py-4 font-semibold uppercase tracking-widest rounded-md text-sm hover:bg-[#A30D25] transition-all duration-300 w-full text-center min-h-[48px]">
            {t('hero.build')}
          </a>
          <a href="https://wa.me/96812345678" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 bg-[#16161A]/80 backdrop-blur-sm text-white font-semibold uppercase tracking-widest rounded-md text-sm hover:bg-[#26262E] transition-all duration-300 w-full border border-[#26262E] text-center min-h-[48px]">
            <MessageSquare className="w-4 h-4 text-[#E5A93C]" />
            {t('hero.whatsapp')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
