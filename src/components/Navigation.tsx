import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Menu, X, ShoppingBag, Globe, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.build'), href: "#build" },
    { name: t('nav.menu'), href: "#menu" },
    { name: t('nav.location'), href: "#location" }
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#E5A93C] via-[#C8102E] to-[#E5A93C] z-[60] origin-[0%]"
        style={{ scaleX }}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled || isMenuOpen ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#26262E]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          {/* Mobile Hamburger (Hidden on Desktop) */}
          <div className="flex items-center gap-2 md:hidden">
            <button 
              className="text-[#F4F1EB] p-2 -mx-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Logo / Brand (Left on desktop, centered on mobile) */}
          <a 
            href="#" 
            className="flex items-center gap-2 md:gap-3 transition-colors duration-300 group max-md:absolute max-md:left-1/2 max-md:-translate-x-1/2"
          >
            <div className="relative">
              <Flame className="w-5 h-5 md:w-6 h-6 text-[#C8102E] filter drop-shadow-[0_0_8px_rgba(200,16,46,0.8)] group-hover:text-[#E5A93C] transition-colors duration-300" />
              <div className="absolute inset-0 bg-[#C8102E]/20 blur-md rounded-full -z-10 group-hover:bg-[#E5A93C]/20 transition-all duration-300" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="font-serif text-lg md:text-xl font-bold tracking-[0.2em] uppercase text-white group-hover:text-[#E5A93C] transition-colors duration-300">
                Wok House
              </span>
              <span className="text-[8px] md:text-[9px] tracking-[0.3em] uppercase text-[#E5A93C] font-semibold mt-0.5 group-hover:text-white transition-colors duration-300">
                {t('nav.restaurant')}
              </span>
            </div>
          </a>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs font-semibold uppercase tracking-widest text-[#F4F1EB]/80 hover:text-white transition-colors duration-300 py-1 group/link"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C8102E] transition-all duration-300 group-hover/link:w-full" />
              </a>
            ))}
          </div>

          {/* Actions (Language Switcher, Order Button, and Shopping Bag) */}
          <div className="flex items-center gap-3">
            {/* Desktop Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors p-2 cursor-pointer"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="md:hidden flex items-center justify-center text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors p-2 min-h-[48px] min-w-[48px]"
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* Desktop WhatsApp Order Button */}
            <a
              href="https://wa.me/96812345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-[#C8102E] text-white text-xs font-bold uppercase tracking-widest rounded hover:bg-[#A30D25] transition-all duration-300 shadow-md shadow-[#C8102E]/20 border border-transparent hover:border-[#C8102E]"
            >
              {t('nav.order')}
            </a>

            {/* Shopping Bag / Builder Link */}
            <a 
              href="#build"
              className="text-[#F4F1EB] hover:text-[#C8102E] transition-colors p-2 -mx-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
              aria-label="Build Wok"
            >
              <ShoppingBag className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0D0D0D] pt-24 px-6"
          >
            <div className="flex flex-col gap-8 text-center mt-12">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="text-2xl font-serif uppercase text-[#F4F1EB] hover:text-[#C8102E] transition-colors tracking-wider flex items-center justify-center min-h-[48px]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://wa.me/96812345678"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 mx-auto px-8 py-4 bg-[#C8102E] text-white font-bold uppercase tracking-wider rounded-md w-full max-w-xs min-h-[48px] flex items-center justify-center"
              >
                {t('nav.order')}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
