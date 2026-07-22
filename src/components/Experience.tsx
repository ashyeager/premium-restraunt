import { motion } from 'motion/react';

const experiences = [
  {
    title: "Romantic Dining",
    desc: "Intimate corners and dim lighting create the perfect atmosphere for unforgettable evenings.",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop"
  },
  {
    title: "Private Events",
    desc: "Exclusive spaces designed for discretion, tailored menus, and dedicated sommelier service.",
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2940&auto=format&fit=crop"
  }
];

export default function Experience() {
  return (
    <section className="py-32 md:py-48 bg-[#0A0A0A] px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-xs font-sans tracking-[0.3em] uppercase mb-6 opacity-60 text-[#F4F1EB]">Experiences</h2>
          <p className="font-serif text-4xl md:text-5xl text-[#F4F1EB]">More Than A Meal</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2 }}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden mb-8 relative">
                <img 
                  src={exp.img} 
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#0A0A0A]/20 transition-opacity duration-500 group-hover:bg-transparent" />
              </div>
              <h3 className="font-serif text-3xl mb-4 text-[#F4F1EB]">{exp.title}</h3>
              <p className="text-sm font-light text-[#F4F1EB]/60 leading-relaxed max-w-md">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
