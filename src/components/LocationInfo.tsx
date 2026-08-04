import React from 'react';
import { motion } from 'motion/react';
import { MapPin, MessageCircle, Navigation as NavIcon, Clock, UtensilsCrossed } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LocationInfo() {
  const { t } = useLanguage();

  return (
    <section id="location" className="relative overflow-hidden border-t border-[#26262E] bg-[#0D0D0D] px-4 py-20 sm:px-6 md:px-12 lg:py-24">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-[#C8102E]/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#E5A93C]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Details & Brand Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              {/* Authentic Asian Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C8102E]/10 border border-[#C8102E]/20 mb-6">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#C8102E]" />
                <span className="text-[#C8102E] text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  {t('loc.subtitle')}
                </span>
              </div>

              {/* Title emphasizing Grand Mall */}
              <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                Visit Us at <span className="text-[#E5A93C]">{t('loc.address1')}</span>
              </h2>

              <p className="text-gray-300 text-base md:text-lg mb-10 leading-relaxed font-light">
                {t('loc.description')}
              </p>

              {/* Detail Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {/* Location Box */}
                <div className="bg-[#16161A] border border-[#26262E] p-6 rounded-lg hover:border-[#E5A93C]/30 transition-colors duration-300">
                  <div className="text-[#C8102E] mb-4 bg-[#C8102E]/10 p-2.5 rounded-md border border-[#C8102E]/20 w-fit">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2 uppercase tracking-wider">
                    {t('loc.location')}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    <strong>{t('loc.address1')}</strong><br/>
                    {t('loc.address2')}
                  </p>
                </div>

                {/* Timings Box */}
                <div className="bg-[#16161A] border border-[#26262E] p-6 rounded-lg hover:border-[#E5A93C]/30 transition-colors duration-300">
                  <div className="text-[#C8102E] mb-4 bg-[#C8102E]/10 p-2.5 rounded-md border border-[#C8102E]/20 w-fit">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-2 uppercase tracking-wider">
                    {t('loc.hours')}
                  </h3>
                  <div className="text-gray-400 text-sm leading-relaxed flex flex-col gap-2">
                    <div className="flex justify-between border-b border-[#26262E]/50 pb-1">
                      <span>{t('loc.days1')}</span> 
                      <span className="font-mono text-xs" dir="ltr">10:00 AM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>{t('loc.days2')}</span> 
                      <span className="text-[#E5A93C] font-mono text-xs" dir="ltr">10:00 AM – 12:00 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://maps.app.goo.gl/mPjVEXf5WfKsqh1k7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#26262E] text-white px-6 py-3.5 rounded font-semibold hover:bg-[#333333] transition-colors border border-[#333333] text-sm min-h-[48px] text-center"
              >
                <NavIcon className="w-4 h-4 text-[#E5A93C]" />
                {t('loc.directions')}
              </a>
              <a 
                href="https://wa.me/96812345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#C8102E] text-white px-6 py-3.5 rounded font-semibold hover:bg-[#A30D25] transition-colors border border-[#C8102E] text-sm min-h-[48px] text-center shadow-lg shadow-[#C8102E]/10"
              >
                <MessageCircle className="w-4 h-4" />
                {t('loc.contact')}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Mini Map Embed */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full bg-[#16161A] border border-[#26262E] p-3 rounded-xl shadow-2xl hover:border-[#E5A93C]/30 transition-all duration-500 flex flex-col group min-h-[350px]">
              <div className="w-full flex-1 rounded-lg overflow-hidden border border-[#26262E] relative bg-[#0D0D0D]">
                <iframe
                  title="Wok House Muscat Grand Mall Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7623910398327!2d58.4069818!3d23.5949174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff2c68a413d3%3A0xe54e6ff175bd31bd!2sMuscat%20Grand%20Mall!5e0!3m2!1sen!2som!4v1716382103212!5m2!1sen!2som"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[350px] md:min-h-[400px] rounded-lg grayscale invert opacity-75 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700 pointer-events-auto"
                ></iframe>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
