import { motion } from 'motion/react';

const signatureDishes = [
  {
    name: "Wild Caught Omani Lobster",
    description: "Saffron emulsion, charred leek, sea greens",
    price: "34",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2938&auto=format&fit=crop",
    tag: "Chef's Signature"
  },
  {
    name: "Wagyu Striploin A5",
    description: "Black garlic purée, wild mushroom, smoked bone marrow",
    price: "75",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2940&auto=format&fit=crop",
    tag: "Customer Favorite"
  },
  {
    name: "Truffle & Artichoke Tart",
    description: "Aged parmesan, micro basil, confit shallot",
    price: "28",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=2940&auto=format&fit=crop",
    tag: "Seasonal"
  }
];

export default function SignatureDishes() {
  return (
    <section className="py-32 bg-[#050505] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-sans tracking-[0.3em] uppercase mb-6 opacity-60"
          >
            Signature Showcase
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-5xl"
          >
            Masterpieces of Taste
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureDishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative overflow-hidden cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-[#F4F1EB] text-[#0A0A0A] mb-4 inline-block">
                  {dish.tag}
                </span>
                <div className="flex justify-between items-end mb-3">
                  <h3 className="font-serif text-2xl text-[#F4F1EB]">{dish.name}</h3>
                  <span className="text-sm font-light tracking-widest">{dish.price}</span>
                </div>
                <p className="text-sm font-light text-[#F4F1EB]/80 md:text-[#F4F1EB]/60 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 mt-2 md:mt-0">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
