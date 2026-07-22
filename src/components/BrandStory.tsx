import { motion } from 'motion/react';

export default function BrandStory() {
  return (
    <section id="philosophy" className="py-32 md:py-48 px-6 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Side: Editorial Image */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-5/12 relative"
        >
          <div className="aspect-[3/4] overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop" 
              alt="Restaurant Philosophy"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-[#0A0A0A]/20" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute -bottom-10 -right-10 bg-[#0F0F0F] p-8 border border-[#F4F1EB]/10 hidden md:block"
          >
            <p className="font-serif text-3xl text-[#F4F1EB]">Est. 2024</p>
            <p className="text-xs font-sans tracking-[0.2em] uppercase mt-2 opacity-60">Muscat, Oman</p>
          </motion.div>
        </motion.div>

        {/* Right Side: Typography & Story */}
        <div className="w-full lg:w-7/12 lg:pl-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xs font-sans tracking-[0.3em] uppercase mb-8 opacity-50 text-[#F4F1EB]">Our Philosophy</h2>
            
            <p className="font-serif text-3xl md:text-5xl leading-[1.3] text-[#F4F1EB] mb-12">
              Dining is an intimate dialogue between origin and execution. 
              By stripping away the superfluous, we reveal the inherent elegance.
            </p>

            <div className="w-12 h-[1px] bg-[#F4F1EB]/30 mb-12" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#F4F1EB]/80">Uncompromising Quality</h3>
                <p className="text-sm font-light text-[#F4F1EB]/60 leading-relaxed">
                  Sourcing exclusively from artisan purveyors and local coastal fisheries, ensuring every ingredient reflects the pristine nature of its origin.
                </p>
              </div>
              <div>
                <h3 className="text-xs tracking-[0.2em] uppercase mb-4 text-[#F4F1EB]/80">Artful Restraint</h3>
                <p className="text-sm font-light text-[#F4F1EB]/60 leading-relaxed">
                  Allowing purity of flavor to dictate our modern minimalist plating. Each element on the dish serves a precise, intentional purpose.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
