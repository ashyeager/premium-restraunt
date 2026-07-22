import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Setup with Parallax */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2940&auto=format&fit=crop" 
          alt="Maison Noir Interior" 
          className="w-full h-full object-cover scale-105 origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/40 to-[#0A0A0A]" />
      </motion.div>

      <div className="relative z-10 text-center flex flex-col items-center px-6 mt-20 max-w-5xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm font-light tracking-[0.4em] uppercase mb-8 opacity-80"
        >
          A Return to Sublimity
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-wide leading-[1.1] mb-12 text-[#F4F1EB]"
        >
          Where Culinary Art <br className="hidden md:block" /> Meets Unforgettable <br className="hidden md:block" /> Experiences
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center"
        >
          <a href="#reservations" className="bg-[#F4F1EB] text-[#0A0A0A] px-10 py-4 text-xs tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-500 w-full sm:w-auto">
            Reserve Table
          </a>
          <a href="#menu" className="text-xs tracking-widest uppercase pb-2 border-b border-[#F4F1EB]/40 hover:border-[#F4F1EB] transition-colors duration-500 w-full sm:w-auto text-[#F4F1EB]">
            Explore Menu
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] opacity-40">Scroll to Explore</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-[#F4F1EB]/50 to-transparent" 
        />
      </motion.div>
    </section>
  );
}
