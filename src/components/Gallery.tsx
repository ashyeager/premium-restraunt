import { motion } from 'motion/react';

const galleryImages = [
  "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section className="py-32 bg-[#0A0A0A] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-sans tracking-[0.3em] uppercase mb-4 opacity-60 text-[#F4F1EB]">Atmosphere</h2>
            <p className="font-serif text-4xl text-[#F4F1EB]">Visual Journey</p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href="https://instagram.com" 
            target="_blank"
            rel="noreferrer"
            className="text-xs tracking-[0.2em] uppercase pb-2 border-b border-[#F4F1EB]/40 hover:border-[#F4F1EB] transition-colors text-[#F4F1EB]"
          >
            Follow @MaisonNoir
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="aspect-square overflow-hidden group relative cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-[#F4F1EB] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-4 group-hover:translate-y-0 text-2xl">
                  ⤢
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
