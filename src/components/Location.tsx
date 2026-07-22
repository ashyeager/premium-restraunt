import { motion } from 'motion/react';
import { MapPin, Clock, Phone } from 'lucide-react';

export default function Location() {
  return (
    <section className="py-32 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        
        {/* Info Side */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/3 flex flex-col justify-center"
        >
          <h2 className="text-xs font-sans tracking-[0.3em] uppercase mb-12 opacity-50 text-[#F4F1EB]">Location & Hours</h2>
          
          <div className="flex flex-col gap-10">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#F4F1EB]/60 mt-1" />
              <div>
                <h3 className="font-serif text-xl text-[#F4F1EB] mb-2">Address</h3>
                <p className="text-sm font-light text-[#F4F1EB]/60 leading-relaxed">
                  14 Al Shatti Street<br/>
                  Qurum District, Muscat<br/>
                  Sultanate of Oman
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-[#F4F1EB]/60 mt-1" />
              <div>
                <h3 className="font-serif text-xl text-[#F4F1EB] mb-2">Hours</h3>
                <p className="text-sm font-light text-[#F4F1EB]/60 leading-relaxed">
                  Tue - Sun: 18:30 – 23:30<br/>
                  Monday: Closed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-[#F4F1EB]/60 mt-1" />
              <div>
                <h3 className="font-serif text-xl text-[#F4F1EB] mb-2">Contact</h3>
                <p className="text-sm font-light text-[#F4F1EB]/60 leading-relaxed">
                  +968 24 123 456<br/>
                  info@maisonnoir.om
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-[#0A0A0A] border border-[#F4F1EB]/5">
              <h4 className="text-xs tracking-[0.2em] uppercase text-[#F4F1EB]/80 mb-2">Valet Parking</h4>
              <p className="text-sm font-light text-[#F4F1EB]/50">Complimentary valet service is available at the main entrance.</p>
            </div>
          </div>
        </motion.div>

        {/* Map Image Side */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-full lg:w-2/3 h-[500px] lg:h-[600px] relative overflow-hidden grayscale contrast-125 brightness-75 hover:grayscale-0 hover:contrast-100 hover:brightness-100 transition-all duration-1000 cursor-pointer"
        >
          {/* Using a high-quality map aesthetic image as placeholder for an actual map */}
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2948&auto=format&fit=crop" 
            alt="Location Map"
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-[#0A0A0A]/30 flex items-center justify-center pointer-events-none">
             <div className="bg-[#0A0A0A] p-4 border border-[#F4F1EB]/20 shadow-2xl flex flex-col items-center">
                <MapPin className="w-6 h-6 text-[#F4F1EB] mb-2" />
                <span className="font-serif text-sm">Maison Noir</span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
