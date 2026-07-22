import { motion } from 'motion/react';
import { Instagram } from 'lucide-react';

const INSTAGRAM_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544025162-811114215b22?auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1560684352-8497838a2229?auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80',
    link: '#',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80',
    link: '#',
  },
];

export default function InstagramGallery() {
  return (
    <section className="py-32 bg-[#050505] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-16 text-center"
        >
          <Instagram className="w-8 h-8 text-[#F4F1EB] mb-6 opacity-80" />
          <h2 className="font-serif text-3xl md:text-5xl text-[#F4F1EB] mb-6">@maisonnoir.mct</h2>
          <p className="text-[#F4F1EB]/60 font-light max-w-lg">
            Follow our culinary journey and tag us to share your Maison Noir experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full">
          {INSTAGRAM_POSTS.map((post, index) => (
            <motion.a
              key={post.id}
              href={post.link}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative aspect-square overflow-hidden bg-[#1A1A1A] ${
                index === 4 ? 'hidden md:block' : ''
              }`}
            >
              <img
                src={post.image}
                alt="Instagram post"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0A0A0A]/0 group-hover:bg-[#0A0A0A]/40 transition-colors duration-500 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
