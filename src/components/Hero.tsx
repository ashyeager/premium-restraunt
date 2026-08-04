import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import heroFoodVisual from '../assets/hero-food-visual.svg';

export default function Hero() {
  const { t, language } = useLanguage();
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroPreviewAnimation = isMobile
    ? { rotate: [-2.5, 3.5, -2.5], y: [0, -5, 0], x: [0, 3, 0], scale: [0.99, 1, 0.99] }
    : { rotate: [-4, 6, -4], y: [0, -8, 0], x: [0, 5, 0], scale: [0.98, 1, 0.98] };
  const heroOrbAnimation = isMobile
    ? { scale: [0.98, 1.02, 0.98], opacity: [0.95, 1, 0.95] }
    : { scale: [0.96, 1.02, 0.96], opacity: [0.9, 1, 0.9] };
  const heroPreviewDuration = isMobile ? 8.5 : 7;
  const heroOrbDuration = isMobile ? 7.5 : 6.5;

  return (
    <section ref={ref} className="relative min-h-screen w-full overflow-hidden bg-[#0D0D0D]">
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img
          src={heroFoodVisual}
          alt="Wok House Asian Street Food"
          className="h-full w-full origin-center scale-105 object-cover opacity-50 mix-blend-overlay"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${language === 'ar' ? 'from-transparent via-[#0D0D0D]/80 to-[#0D0D0D]' : 'from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent'}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0D0D]/30 via-transparent to-[#0D0D0D]" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl text-left rtl:text-right rtl:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#E5A93C]/20 bg-[#E5A93C]/10 px-3 py-1.5 shadow-[0_0_20px_rgba(229,169,60,0.06)] backdrop-blur-sm"
            >
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#E5A93C] md:text-xs">
                {t('hero.badge')}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#E5A93C] shadow-[0_0_10px_rgba(229,169,60,0.9)]" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 md:text-sm"
            >
              {t('hero.subtitle')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 max-w-4xl font-serif text-4xl font-black leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-8xl"
            >
              <span className="text-[#E5A93C] drop-shadow-[0_2px_15px_rgba(229,169,60,0.15)]">{t('hero.title1')}</span>{' '}
              <span className="text-white">{t('hero.title2')}</span>{' '}
              <span className="block text-[#C8102E] drop-shadow-[0_2px_15px_rgba(200,16,46,0.3)] md:inline">{t('hero.title3')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-10 max-w-md text-base font-light leading-relaxed text-gray-200 sm:max-w-xl md:text-lg"
            >
              {t('hero.desc')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex w-full max-w-[430px] flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row"
            >
              <a
                href="#build"
                className="flex min-h-[48px] flex-1 items-center justify-center gap-3 rounded bg-[#C8102E] px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A30D25] hover:shadow-[0_0_22px_rgba(200,16,46,0.28)]"
              >
                {t('hero.build')}
              </a>
              <a
                href="https://wa.me/96812345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] flex-1 items-center justify-center gap-3 rounded border border-[#26262E] bg-[#16161A]/90 px-8 py-4 text-center text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#E5A93C]/50 hover:bg-[#26262E] hover:shadow-[0_0_16px_rgba(255,255,255,0.06)]"
              >
                <MessageSquare className="h-4 w-4 text-[#E5A93C]" />
                {t('hero.whatsapp')}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[460px] lg:flex-shrink-0"
          >
            <div className="relative mx-auto mt-2 aspect-square w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[460px] [perspective:1200px]">
              <motion.div
                animate={heroPreviewAnimation}
                transition={{ duration: heroPreviewDuration, repeat: Infinity, ease: 'easeInOut' }}
                style={{ willChange: 'transform' }}
                className="absolute inset-0 rounded-[2.5rem] border border-[#E5A93C]/20 bg-[radial-gradient(circle_at_top_left,_rgba(229,169,60,0.16),_transparent_45%),linear-gradient(135deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.01))] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
              >
                <div className="absolute inset-4 rounded-[2rem] border border-white/10" />
                <motion.div
                  animate={heroOrbAnimation}
                  transition={{ duration: heroOrbDuration, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ willChange: 'transform' }}
                  className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-[38%] border border-[#E5A93C]/35 bg-[radial-gradient(circle_at_30%_30%,_rgba(229,169,60,0.35),_rgba(200,16,46,0.1)_45%,_rgba(13,13,13,0.95)_100%)] shadow-[0_20px_60px_rgba(200,16,46,0.12)]"
                >
                  <div className="absolute inset-[16%] rounded-full border border-white/20" />
                  <motion.div
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-[24%] rounded-full border border-[#E5A93C]/40"
                  />
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8102E]/70 shadow-[0_0_40px_rgba(200,16,46,0.45)]"
                  />
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 16, 0], y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-[14%] top-[18%] h-16 w-16 rounded-2xl border border-[#E5A93C]/30 bg-[#16161A]/80 backdrop-blur-sm"
                />
                <motion.div
                  animate={{ rotate: [0, -12, 0], y: [0, 8, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-[16%] right-[14%] h-14 w-14 rounded-full border border-[#C8102E]/30 bg-[#C8102E]/10"
                />
                <div className="absolute left-5 top-5 rounded-full bg-[#E5A93C]/10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5A93C]">
                  3D Wok
                </div>
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-[#0D0D0D]/70 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-200">
                  Live Preview
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
