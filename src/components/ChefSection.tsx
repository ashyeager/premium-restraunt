import { motion } from 'motion/react';

export default function ChefSection() {
  return (
    <section className="py-32 bg-[#050505] px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-20">
        
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-xs font-sans tracking-[0.3em] uppercase mb-6 opacity-50 text-[#F4F1EB]">The Visionary</h2>
            <h3 className="font-serif text-4xl md:text-6xl text-[#F4F1EB] mb-8">Chef Laurent<br/>Dubois</h3>
            <p className="text-sm font-light text-[#F4F1EB]/70 leading-relaxed mb-8 max-w-md">
              With over two decades traversing the globe's finest kitchens—from Paris to Tokyo—Chef Laurent brings a relentless pursuit of perfection to Maison Noir. His approach melds classical French technique with avant-garde innovation, resulting in plates that are as visually striking as they are profound in flavor.
            </p>
            <img src="/signature.png" alt="Chef Signature" className="h-12 opacity-80 invert mb-8" onError={(e) => e.currentTarget.style.display = 'none'} />
            <p className="text-xs tracking-[0.2em] uppercase text-[#F4F1EB]/40">Executive Chef & Founder</p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2"
        >
          <div className="aspect-square md:aspect-[3/4] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=2940&auto=format&fit=crop" 
              alt="Chef Laurent"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
