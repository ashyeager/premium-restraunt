import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const navLinks = {
    en: {
      brand: "Maison Noir",
      philosophy: "Philosophy",
      menu: "Menu",
      privateDining: "Private Dining",
      reservations: "Reservations",
      book: "Book a Table",
    },
    ar: {
      brand: "ميزون نوار",
      philosophy: "فلسفتنا",
      menu: "القائمة",
      privateDining: "طعام خاص",
      reservations: "الحجوزات",
      book: "احجز طاولة",
    }
  };

  const t = navLinks[language];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
          isScrolled ? 'bg-[#0A0A0A]/70 backdrop-blur-xl border-[#F4F1EB]/10 py-5' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <a href="#" className="font-serif text-2xl lg:text-3xl tracking-wide text-[#F4F1EB]">{t.brand}</a>
          
          <div className="hidden md:flex gap-12 text-[11px] font-light tracking-[0.2em] uppercase text-[#F4F1EB]">
            <a href="#philosophy" className="hover:text-white/60 transition-colors">{t.philosophy}</a>
            <a href="#menu" className="hover:text-white/60 transition-colors">{t.menu}</a>
            <a href="#reservations" className="hover:text-white/60 transition-colors">{t.privateDining}</a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[10px] tracking-[0.2em] uppercase text-[#F4F1EB]/70 hover:text-[#F4F1EB] transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <a href="#reservations" className="text-[10px] tracking-[0.2em] uppercase border border-[#F4F1EB]/30 px-8 py-3 hover:bg-[#F4F1EB] hover:text-[#0A0A0A] transition-all duration-500 text-[#F4F1EB]">
              {t.reservations}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center text-[#F4F1EB]/70 hover:text-[#F4F1EB] transition-colors"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button 
              className="p-2 -mr-2 text-[#F4F1EB]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-2xl flex flex-col justify-center items-center"
          >
            <button 
              className={`absolute top-8 ${language === 'ar' ? 'left-6' : 'right-6'} p-4 text-[#F4F1EB]`}
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="flex flex-col gap-10 text-center font-serif text-4xl text-[#F4F1EB]">
              <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">{t.philosophy}</a>
              <a href="#menu" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">{t.menu}</a>
              <a href="#reservations" onClick={() => setMobileMenuOpen(false)} className="hover:opacity-70 transition-opacity">{t.privateDining}</a>
              <a href="#reservations" onClick={() => setMobileMenuOpen(false)} className="mt-12 text-xs font-sans tracking-[0.2em] uppercase border border-[#F4F1EB]/30 px-10 py-5 hover:bg-[#F4F1EB] hover:text-[#0A0A0A] transition-colors">
                {t.book}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
