import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar } from 'lucide-react';

export default function FloatingBookingButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled past 80% of the viewport height (past the Hero section)
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state if page is loaded already scrolled
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#reservations"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-[#F4F1EB] text-[#0A0A0A] px-5 py-3 md:px-6 md:py-4 shadow-2xl flex items-center gap-2 md:gap-3 hover:bg-white hover:scale-105 transition-all duration-300"
        >
          <Calendar className="w-4 h-4" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Book Now</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
