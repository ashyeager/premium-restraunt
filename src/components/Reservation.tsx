import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

export default function Reservation() {
  return (
    <section id="reservations" className="py-32 md:py-48 px-6 bg-[#0A0A0A] relative border-t border-[#F4F1EB]/10">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-xs font-sans tracking-[0.3em] uppercase mb-8 opacity-60 text-[#F4F1EB]">Reservations</h2>
          <p className="font-serif text-4xl md:text-6xl mb-6 text-[#F4F1EB] leading-tight">
            Secure Your Experience
          </p>
          <p className="text-sm font-light text-[#F4F1EB]/60 mb-16 max-w-lg mx-auto">
            Reservations are highly recommended. For parties of 6 or more, please contact us directly for private dining arrangements.
          </p>

          <form className="flex flex-col gap-8 w-full bg-[#0F0F0F] p-8 md:p-12 border border-[#F4F1EB]/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input 
                type="text" 
                placeholder="Full Name" 
                className="bg-transparent border-b border-[#F4F1EB]/20 py-4 px-2 text-[#F4F1EB] focus:outline-none focus:border-[#F4F1EB] transition-colors placeholder:text-[#F4F1EB]/40 font-light"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="bg-transparent border-b border-[#F4F1EB]/20 py-4 px-2 text-[#F4F1EB] focus:outline-none focus:border-[#F4F1EB] transition-colors placeholder:text-[#F4F1EB]/40 font-light"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <input 
                type="date" 
                className="bg-transparent border-b border-[#F4F1EB]/20 py-4 px-2 text-[#F4F1EB] focus:outline-none focus:border-[#F4F1EB] transition-colors placeholder:text-[#F4F1EB]/40 font-light uppercase text-sm tracking-wider"
              />
              <select defaultValue="" className="bg-transparent border-b border-[#F4F1EB]/20 py-4 px-2 text-[#F4F1EB] focus:outline-none focus:border-[#F4F1EB] transition-colors appearance-none font-light">
                <option value="" disabled className="bg-[#0F0F0F] text-[#F4F1EB]/40">Time</option>
                <option value="19:00" className="bg-[#0F0F0F]">19:00</option>
                <option value="19:30" className="bg-[#0F0F0F]">19:30</option>
                <option value="20:00" className="bg-[#0F0F0F]">20:00</option>
                <option value="20:30" className="bg-[#0F0F0F]">20:30</option>
                <option value="21:00" className="bg-[#0F0F0F]">21:00</option>
              </select>
              <select defaultValue="" className="bg-transparent border-b border-[#F4F1EB]/20 py-4 px-2 text-[#F4F1EB] focus:outline-none focus:border-[#F4F1EB] transition-colors appearance-none font-light">
                <option value="" disabled className="bg-[#0F0F0F] text-[#F4F1EB]/40">Guests</option>
                <option value="2" className="bg-[#0F0F0F]">2 Guests</option>
                <option value="3" className="bg-[#0F0F0F]">3 Guests</option>
                <option value="4" className="bg-[#0F0F0F]">4 Guests</option>
                <option value="5" className="bg-[#0F0F0F]">5 Guests</option>
              </select>
            </div>

            <textarea 
              placeholder="Special Requests (Allergies, Occasion)" 
              rows={2}
              className="bg-transparent border-b border-[#F4F1EB]/20 py-4 px-2 text-[#F4F1EB] focus:outline-none focus:border-[#F4F1EB] transition-colors placeholder:text-[#F4F1EB]/40 font-light resize-none mt-4"
            />

            <button 
              type="button" 
              className="mt-8 bg-[#F4F1EB] text-[#0A0A0A] uppercase tracking-[0.2em] text-xs py-6 hover:bg-white hover:scale-[1.02] transition-all duration-300 w-full font-medium"
            >
              Confirm Reservation
            </button>
            
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-[1px] w-12 bg-[#F4F1EB]/20" />
              <span className="text-xs uppercase tracking-widest text-[#F4F1EB]/40">Or book via</span>
              <div className="h-[1px] w-12 bg-[#F4F1EB]/20" />
            </div>

            <button 
              type="button" 
              className="flex items-center justify-center gap-3 border border-[#F4F1EB]/20 text-[#F4F1EB] uppercase tracking-[0.2em] text-xs py-5 hover:bg-[#F4F1EB]/5 transition-colors duration-300 w-full"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
