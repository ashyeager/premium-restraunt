import { motion } from 'motion/react';

export default function PremiumCTA() {
  return (
    <section className="relative py-48 md:py-64 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940&auto=format&fit=crop" 
          alt="Dining Experience" 
          className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s]"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl leading-tight text-[#F4F1EB] mb-12">
            Your unforgettable dining experience begins here.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="#reservations" className="bg-[#F4F1EB] text-[#0A0A0A] px-10 py-5 text-xs tracking-widest uppercase hover:bg-white hover:scale-105 transition-all duration-500 w-full sm:w-auto font-medium">
              Reserve Your Table
            </a>
            <a href="mailto:info@maisonnoir.om" className="border border-[#F4F1EB]/30 text-[#F4F1EB] px-10 py-5 text-xs tracking-widest uppercase hover:bg-[#F4F1EB]/10 transition-colors duration-500 w-full sm:w-auto">
              Contact Restaurant
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
