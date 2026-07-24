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

      <div className="relative z-10 text-left flex flex-col items-start px-6 lg:px-12 mt-20 max-w-5xl mx-auto w-full rtl:text-right rtl:items-start">
        {/* Ultimate Wok Experience Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5A93C]/10 border border-[#E5A93C]/20 mb-6 backdrop-blur-sm"
        >
          <span className="text-[#E5A93C] text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">
            {t('hero.badge')}
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4"
        >
          {t('hero.subtitle')}
        </motion.div>
        
        {/* Main Title - Structured & High Contrast */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none mb-6 text-white max-w-4xl"
        >
          <span className="text-[#E5A93C] drop-shadow-[0_2px_15px_rgba(229,169,60,0.15)]">{t('hero.title1')}</span>{' '}
          <span className="text-white">{t('hero.title2')}</span>{' '}
          <span className="text-[#C8102E] drop-shadow-[0_2px_15px_rgba(200,16,46,0.3)] block md:inline">{t('hero.title3')}</span>
        </motion.h1>

        {/* Description with enhanced legibility */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-base md:text-lg text-gray-200 max-w-md md:max-w-xl mb-10 leading-relaxed font-light"
        >
          {t('hero.desc')}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto min-w-[320px] sm:min-w-[450px]"
        >
          <a 
            href="#build" 
            className="flex items-center justify-center gap-3 bg-[#C8102E] text-white px-8 py-4 font-bold uppercase tracking-widest rounded text-xs hover:bg-[#A30D25] hover:shadow-[0_0_30px_rgba(200,16,46,0.4)] transform hover:-translate-y-0.5 transition-all duration-300 flex-1 text-center min-h-[48px]"
          >
            {t('hero.build')}
          </a>
          <a 
            href="https://wa.me/96812345678" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#16161A]/90 backdrop-blur-sm text-white font-bold uppercase tracking-widest rounded text-xs hover:bg-[#26262E] hover:border-[#E5A93C]/50 border border-[#26262E] transform hover:-translate-y-0.5 transition-all duration-300 flex-1 text-center min-h-[48px]"
          >
            <MessageSquare className="w-4 h-4 text-[#E5A93C]" />
            {t('hero.whatsapp')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
