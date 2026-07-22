import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const menuData = {
  Starters: [
    { name: "Charred Hispi Cabbage", desc: "Miso brown butter, toasted hazelnut, cured egg yolk", price: "24" },
    { name: "Bluefin Tuna Tartare", desc: "Ponzu, avocado silk, black sesame tuile", price: "32" },
    { name: "Roasted Bone Marrow", desc: "Parsley salad, capers, sourdough toast", price: "26" }
  ],
  Mains: [
    { name: "Wild Caught Omani Lobster", desc: "Saffron emulsion, charred leek, sea greens", price: "34" },
    { name: "Wagyu Striploin A5", desc: "Black garlic purée, wild mushroom, smoked bone marrow", price: "75" },
    { name: "Pan-Seared Halibut", desc: "Champagne beurre blanc, caviar, samphire", price: "55" },
    { name: "Aged Duck Breast", desc: "Cherry glaze, endive, smoked duck fat potato", price: "48" }
  ],
  Desserts: [
    { name: "Dark Chocolate Delice", desc: "Gold leaf, espresso caramel, hazelnut praline", price: "18" },
    { name: "Vanilla Bean Mille-Feuille", desc: "Caramelized puff pastry, madagascar vanilla cream", price: "16" },
    { name: "Lemon Basil Tart", desc: "Torched meringue, basil oil, lemon curd", price: "15" }
  ],
  Drinks: [
    { name: "Smoked Old Fashioned", desc: "Bourbon, cedar smoke, angostura bitters", price: "22" },
    { name: "Rosemary Gimlet", desc: "Gin, lime, rosemary syrup", price: "18" },
    { name: "Artisan Sommelier Selection", desc: "Curated pairing by glass", price: "MP" }
  ]
};

export default function InteractiveMenu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>('Mains');

  return (
    <section id="menu" className="py-32 px-6 bg-[#0F0F0F] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-xs font-sans tracking-[0.3em] uppercase mb-6 opacity-60 text-[#F4F1EB]">The Menu</h2>
          <p className="font-serif text-4xl md:text-5xl text-[#F4F1EB]">A Symphony of Flavors</p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-20 border-b border-[#F4F1EB]/10 pb-6">
          {(Object.keys(menuData) as Array<keyof typeof menuData>).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-xs md:text-sm tracking-[0.2em] uppercase transition-all duration-300 relative ${
                activeCategory === category ? 'text-[#F4F1EB]' : 'text-[#F4F1EB]/40 hover:text-[#F4F1EB]/80'
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.div 
                  layoutId="menu-underline"
                  className="absolute -bottom-[25px] left-0 right-0 h-[1px] bg-[#F4F1EB]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12"
            >
              {menuData[activeCategory].map((item, index) => (
                <div key={index} className="flex flex-col group cursor-default">
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="font-serif text-xl tracking-wide text-[#F4F1EB] group-hover:text-white transition-colors">{item.name}</h3>
                    <div className="flex-grow border-b border-dotted border-[#F4F1EB]/20 mx-4 opacity-50" />
                    <span className="text-sm tracking-widest text-[#F4F1EB]">{item.price}</span>
                  </div>
                  <p className="text-sm font-light opacity-50 font-sans tracking-wide text-[#F4F1EB]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
