import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

const steps = [
  { id: 'base', title: 'Base Selection', num: '1' },
  { id: 'protein', title: 'Choose Protein', num: '2' },
  { id: 'sauce', title: 'Signature Sauce', num: '3' }
];

const menuOptions = {
  base: [
    { id: 'hakka_noodles', name: 'Hakka Noodles', desc: 'Included', price: 0.000 },
    { id: 'jasmine_rice', name: 'Jasmine Steam Rice', desc: 'Included', price: 0.000 },
    { id: 'udon', name: 'Udon Noodles', desc: 'Thick & chewy', price: 0.300 }
  ],
  protein: [
    { id: 'charred_beef', name: 'Charred Beef', desc: 'Smoky & tender', price: 1.200 },
    { id: 'kung_pao_shrimp', name: 'Kung Pao Shrimp', desc: 'Spicy & nutty', price: 1.400 },
    { id: 'tender_chicken', name: 'Tender Chicken', desc: 'Wok-seared', price: 0.900 },
    { id: 'tofu_veggies', name: 'Fresh Tofu & Veggies', desc: 'Crisp & light', price: 0.500 }
  ],
  sauce: [
    { id: 'szechuan_chili', name: 'Szechuan Chili', desc: 'Spicy kick', price: 0.000 },
    { id: 'sweet_soy_teriyaki', name: 'Sweet Soy Teriyaki', desc: 'Sweet & savory', price: 0.000 },
    { id: 'garlic_black_pepper', name: 'Garlic Black Pepper', desc: 'Rich & peppery', price: 0.000 }
  ]
};

export default function WokBuilder() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [selections, setSelections] = useState<Record<string, string>>({
    base: '',
    protein: '',
    sauce: ''
  });

  const handleSelect = (category: keyof typeof menuOptions, itemId: string) => {
    setSelections(prev => ({ ...prev, [category]: itemId }));
    if (activeStepIndex < steps.length - 1) {
      setTimeout(() => setActiveStepIndex(prev => prev + 1), 300);
    }
  };

  const calculateTotal = () => {
    let total = 1.800; // Base wok price
    Object.entries(selections).forEach(([category, itemId]) => {
      if (itemId && menuOptions[category as keyof typeof menuOptions]) {
        const item = menuOptions[category as keyof typeof menuOptions].find(i => i.id === itemId);
        if (item) total += item.price;
      }
    });
    return total;
  };

  const isComplete = selections.base && selections.protein && selections.sauce;

  const handleOrder = () => {
    if (!isComplete) return;
    
    const getNames = () => {
      const b = menuOptions.base.find(i => i.id === selections.base)?.name;
      const p = menuOptions.protein.find(i => i.id === selections.protein)?.name;
      const s = menuOptions.sauce.find(i => i.id === selections.sauce)?.name;
      return { b, p, s };
    };
    
    const names = getNames();
    const total = calculateTotal().toFixed(3);
    
    const message = `Hi Wok House MGM! I'd like to place an order: ${names.b} + ${names.p} + ${names.s}. Total: ${total} OMR. Pickup at MGM Food Court.`;
    
    const whatsappUrl = `https://wa.me/96812345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const activeCategory = steps[activeStepIndex].id as keyof typeof menuOptions;
  const currentOptions = menuOptions[activeCategory];

  return (
    <section id="build" className="py-24 px-6 bg-[#0D0D0D] text-[#F4F1EB] relative border-t border-[#26262E]">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-wide mb-4 text-white">
            Build Your Box
          </h2>
          <div className="w-16 h-1 bg-[#C8102E] rounded"></div>
        </div>

        {/* Dynamic Step Display */}
        <div className="mb-10 flex items-center gap-4 border-b border-[#26262E] pb-6">
           <div className="w-12 h-12 rounded-full border border-[#C8102E] flex shrink-0 items-center justify-center text-[#C8102E] font-serif text-xl bg-[#C8102E]/10">
             {steps[activeStepIndex].num}
           </div>
           <h3 className="font-serif text-2xl md:text-3xl text-white">
             {steps[activeStepIndex].title}
           </h3>
        </div>

        {/* Options Grid */}
        <div className="mb-16 min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeStepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {currentOptions.map(option => {
                const isSelected = selections[activeCategory] === option.id;
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(activeCategory, option.id)}
                    className={`flex flex-col items-center justify-center p-6 rounded-lg border transition-all duration-300 min-h-[140px] w-full ${
                      isSelected 
                        ? 'border-[#C8102E] bg-[#C8102E]/5 shadow-[0_0_20px_rgba(200,16,46,0.15)]' 
                        : 'border-[#26262E] hover:border-[#E5A93C]/50 bg-[#16161A]'
                    }`}
                  >
                    <span className={`font-semibold text-lg mb-1 ${isSelected ? 'text-[#C8102E]' : 'text-white'}`}>
                      {option.name}
                    </span>
                    <span className="text-sm text-gray-400 text-center mb-2 px-2">
                      {option.desc}
                    </span>
                    {option.price > 0 && (
                      <span className="text-xs font-mono text-[#E5A93C] bg-[#E5A93C]/10 px-2 py-1 rounded">
                        +{option.price.toFixed(3)} OMR
                      </span>
                    )}
                    {isSelected && (
                       <div className="mt-3 bg-[#C8102E] text-white p-1.5 rounded-full shadow-lg shadow-[#C8102E]/50">
                         <Check className="w-4 h-4" />
                       </div>
                    )}
                  </button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Step Navigation & Summary */}
        <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
           <div className="flex justify-between items-center bg-[#16161A] p-6 rounded-lg border border-[#26262E] shadow-xl">
             <div>
               <p className="text-xs text-gray-400 mb-1 uppercase tracking-widest">Estimated Total</p>
               <div className="font-mono text-3xl font-bold text-[#E5A93C]">
                 {calculateTotal().toFixed(3)} <span className="text-sm text-gray-400 font-sans">OMR</span>
               </div>
             </div>
             
             {activeStepIndex > 0 && (
                <button 
                  onClick={() => setActiveStepIndex(prev => prev - 1)} 
                  className="text-gray-400 hover:text-white text-sm uppercase tracking-wider transition-colors min-h-[48px] px-6 border border-[#26262E] rounded-md hover:bg-[#26262E] flex items-center justify-center"
                >
                  Back
                </button>
             )}
           </div>

           <button
             onClick={() => {
                if (activeStepIndex < steps.length - 1) {
                  setActiveStepIndex(prev => prev + 1);
                } else {
                  handleOrder();
                }
             }}
             disabled={activeStepIndex === steps.length - 1 && !isComplete}
             className={`w-full py-4 rounded-md font-bold uppercase tracking-widest text-sm transition-all duration-300 min-h-[48px] flex items-center justify-center ${
               (activeStepIndex === steps.length - 1 && !isComplete)
                 ? 'bg-[#16161A] text-gray-500 border border-[#26262E] cursor-not-allowed'
                 : 'bg-[#C8102E] text-white hover:bg-[#A30D25] shadow-lg shadow-[#C8102E]/20'
             }`}
           >
             {activeStepIndex < steps.length - 1 ? 'Next Step' : 'Send Custom Order via WhatsApp'}
           </button>
        </div>
        
      </div>
    </section>
  );
}
