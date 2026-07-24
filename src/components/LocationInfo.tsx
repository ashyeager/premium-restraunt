import React from 'react';
import { motion } from 'motion/react';
import { MapPin, MessageCircle, Navigation as NavIcon, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LocationInfo() {
  const { t } = useLanguage();

  return (
    <section id="location" className="pt-24 pb-32 px-6 bg-[#0D0D0D] border-t border-[#26262E]">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-3xl tracking-[0.2em] uppercase text-[#E5A93C] mb-2">
            {t('loc.title')}
          </h2>
          <p className="font-serif italic text-gray-400 text-lg">
            {t('loc.subtitle')}
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-lg bg-[#16161A] border border-[#26262E] rounded-xl p-6 md:p-10 shadow-2xl"
        >
          <div className="flex flex-col gap-8 mb-10">
            <div className="flex items-start gap-4">
              <div className="text-[#C8102E] mt-1 bg-[#C8102E]/10 p-3 rounded-full border border-[#C8102E]/20">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-wider">{t('loc.location')}</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                  {t('loc.address1')}<br/>
                  {t('loc.address2')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#C8102E] mt-1 bg-[#C8102E]/10 p-3 rounded-full border border-[#C8102E]/20">
                <Clock className="w-5 h-5" />
              </div>
              <div className="w-full">
                <h3 className="font-bold text-white text-lg mb-2 uppercase tracking-wider">{t('loc.hours')}</h3>
                <div className="text-gray-400 text-sm md:text-base leading-relaxed flex flex-col gap-2">
                  <div className="flex justify-between border-b border-[#26262E] pb-2">
                    <span>{t('loc.days1')}</span> 
                    <span dir="ltr">10:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>{t('loc.days2')}</span> 
                    <span className="text-[#E5A93C]" dir="ltr">10:00 AM – 12:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://maps.google.com/?q=Muscat+Grand+Mall" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#26262E] text-white px-4 py-3 rounded-md font-semibold hover:bg-[#333333] transition-colors border border-[#333333] text-sm min-h-[48px] text-center"
            >
              <NavIcon className="w-4 h-4 text-[#E5A93C]" />
              {t('loc.directions')}
            </a>
            <a 
              href="https://wa.me/96812345678" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#C8102E] text-white px-4 py-3 rounded-md font-semibold hover:bg-[#A30D25] transition-colors border border-[#C8102E] text-sm min-h-[48px] text-center"
            >
              <MessageCircle className="w-4 h-4" />
              {t('loc.contact')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
