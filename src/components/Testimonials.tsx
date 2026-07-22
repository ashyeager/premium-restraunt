import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "A masterclass in culinary restraint. Every dish is a profound exploration of texture and taste.",
    source: "The Culinary Review",
    rating: 5
  },
  {
    quote: "Maison Noir elevates Muscat's dining scene to international heights. Unflinchingly brilliant.",
    source: "Global Gastronomy",
    rating: 5
  },
  {
    quote: "The Wagyu A5 is nothing short of transcendent. The ambiance dictates pure luxury.",
    source: "VIP Guest",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-32 md:py-48 bg-[#0F0F0F] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-xs font-sans tracking-[0.3em] uppercase opacity-50 text-[#F4F1EB]">Acclaim</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12">
          {testimonials.map((test, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-8 text-[#F4F1EB]/40 text-lg">
                {[...Array(test.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="font-serif text-xl md:text-2xl text-[#F4F1EB] leading-relaxed mb-8">
                "{test.quote}"
              </p>
              <span className="text-xs tracking-[0.2em] uppercase text-[#F4F1EB]/50">
                — {test.source}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
