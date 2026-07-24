import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

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
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled || isMenuOpen ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#26262E]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              className="text-[#F4F1EB] p-2 -mx-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors p-2"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
          </div>
          
          <a href="#" className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase text-[#E5A93C] hover:text-white transition-colors duration-300 absolute left-1/2 -translate-x-1/2">
            Wok House
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="md:hidden flex items-center justify-center text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors p-2 min-h-[48px] min-w-[48px]"
            >
              {language === 'en' ? 'عربي' : 'EN'}
            </button>
            <a 
              href="#build"
              className="text-[#F4F1EB] hover:text-[#C8102E] transition-colors p-2 -mx-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
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
