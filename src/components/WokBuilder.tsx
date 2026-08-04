import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WokBuilder() {
  const { t } = useLanguage();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const steps = [
    { id: 'base', title: t('builder.step1'), num: '1' },
    { id: 'protein', title: t('builder.step2'), num: '2' },
    { id: 'sauce', title: t('builder.step3'), num: '3' }
  ];

  const menuOptions = {
    base: [
      { id: 'hakka_noodles', nameKey: 'item.hakka.name', descKey: 'item.hakka.desc', price: 0.000 },
      { id: 'jasmine_rice', nameKey: 'item.jasmine.name', descKey: 'item.jasmine.desc', price: 0.000 },
      { id: 'udon', nameKey: 'item.udon.name', descKey: 'item.udon.desc', price: 0.300 }
    ],
    protein: [
      { id: 'charred_beef', nameKey: 'item.beef.name', descKey: 'item.beef.desc', price: 1.200 },
      { id: 'kung_pao_shrimp', nameKey: 'item.shrimp.name', descKey: 'item.shrimp.desc', price: 1.400 },
      { id: 'tender_chicken', nameKey: 'item.chicken.name', descKey: 'item.chicken.desc', price: 0.900 },
      { id: 'tofu_veggies', nameKey: 'item.tofu.name', descKey: 'item.tofu.desc', price: 0.500 }
    ],
    sauce: [
      { id: 'szechuan_chili', nameKey: 'item.szechuan.name', descKey: 'item.szechuan.desc', price: 0.000 },
      { id: 'sweet_soy_teriyaki', nameKey: 'item.teriyaki.name', descKey: 'item.teriyaki.desc', price: 0.000 },
      { id: 'garlic_black_pepper', nameKey: 'item.garlic.name', descKey: 'item.garlic.desc', price: 0.000 }
    ]
  };

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
      const b = menuOptions.base.find(i => i.id === selections.base)?.nameKey;
      const p = menuOptions.protein.find(i => i.id === selections.protein)?.nameKey;
      const s = menuOptions.sauce.find(i => i.id === selections.sauce)?.nameKey;
      return { 
        b: b ? t(b) : '', 
        p: p ? t(p) : '', 
        s: s ? t(s) : '' 
      };
    };
    
    const names = getNames();
    const total = calculateTotal().toFixed(3);
    
    const message = `Hi Wok House MGM! I'd like to place an order: ${names.b} + ${names.p} + ${names.s}. Total: ${total} OMR. Pickup at MGM Food Court.`;
    
    const whatsappUrl = `https://wa.me/96812345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const activeCategory = steps[activeStepIndex].id as keyof typeof menuOptions;
  const currentOptions = menuOptions[activeCategory];
  const selectedItems = Object.values(selections).filter(Boolean).length;

  return (
    <section id="build" className="relative border-t border-[#26262E] bg-[#0D0D0D] px-4 py-20 text-[#F4F1EB] sm:px-6 lg:px-8 lg:py-24">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold tracking-wide text-white md:text-5xl">
            {t('builder.title')}
          </h2>
          <div className="h-1 w-16 rounded bg-[#C8102E]"></div>
        </div>

        <div className="mb-10 rounded-[2rem] border border-[#26262E] bg-[#101013] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.25)] sm:p-6 lg:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="lg:w-[55%]">
              <div className="mb-8 flex items-center gap-4 border-b border-[#26262E] pb-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C8102E] bg-[#C8102E]/10 font-serif text-xl text-[#C8102E]">
                  {steps[activeStepIndex].num}
                </div>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                    {selectedItems}/3 selected
                  </p>
                  <h3 className="font-serif text-2xl text-white md:text-3xl">
                    {steps[activeStepIndex].title}
                  </h3>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-[#26262E] bg-[#16161A]/90 p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#E5A93C]">
                    Live wok preview
                  </p>
                  <span className="rounded-full border border-[#E5A93C]/20 bg-[#E5A93C]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-[#E5A93C]">
                    {steps[activeStepIndex].title}
                  </span>
                </div>
                <div className="relative mx-auto aspect-square max-w-[240px] [perspective:1200px] sm:max-w-[280px]">
                  <motion.div
                    animate={{ rotate: [-6, 6, -6], y: [0, -8, 0], x: [0, 5, 0] }}
                    transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute inset-0 rounded-[2rem] border border-[#E5A93C]/30 bg-[radial-gradient(circle_at_top_left,_rgba(229,169,60,0.16),_transparent_45%),linear-gradient(135deg,_rgba(255,255,255,0.08),_rgba(255,255,255,0.01))] shadow-[0_20px_70px_rgba(0,0,0,0.3)]"
                  >
                    <motion.div
                      animate={{ rotateX: [8, -10, 8], rotateY: [-12, 12, -12] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute left-1/2 top-1/2 h-[56%] w-[56%] -translate-x-1/2 -translate-y-1/2 rounded-[40%] border border-[#E5A93C]/30 bg-[radial-gradient(circle_at_30%_30%,_rgba(229,169,60,0.22),_rgba(200,16,46,0.14)_40%,_rgba(13,13,13,0.95)_100%)]"
                    />
                    <div className="absolute inset-[18%] rounded-full border border-white/10" />
                    <div className="absolute bottom-[18%] right-[16%] h-10 w-10 rounded-full border border-[#C8102E]/30 bg-[#C8102E]/15" />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="lg:w-[45%]">
              <div className="rounded-[1.5rem] border border-[#26262E] bg-[#0D0D0D] p-4 sm:p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Custom order flow
                </p>
                <p className="text-sm leading-relaxed text-gray-400">
                  The mobile and tablet experience now keeps the same layered motion and step progression as the desktop view, with smoother transitions and more touch-friendly controls.
                </p>
              </div>
            </div>
          </div>
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
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
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
                      {t(option.nameKey)}
                    </span>
                    <span className="text-sm text-gray-400 text-center mb-2 px-2">
                      {t(option.descKey)}
                    </span>
                    {option.price > 0 && (
                      <span className="text-xs font-mono text-[#E5A93C] bg-[#E5A93C]/10 px-2 py-1 rounded">
                        +{option.price.toFixed(3)} {t('builder.omr')}
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
<div className="mx-auto flex w-full max-w-md flex-col gap-6">
          <div className="flex flex-col justify-between gap-4 rounded-lg border border-[#26262E] bg-[#16161A] p-6 shadow-xl sm:flex-row sm:items-center">
            <div>
              <p className="mb-1 text-xs uppercase tracking-widest text-gray-400">{t('builder.total')}</p>
              <div className="font-mono text-3xl font-bold text-[#E5A93C]">
                {calculateTotal().toFixed(3)} <span className="text-sm font-sans text-gray-400">{t('builder.omr')}</span>
              </div>
            </div>

            {activeStepIndex > 0 && (
              <button
                onClick={() => setActiveStepIndex(prev => prev - 1)}
                className="flex min-h-[48px] items-center justify-center rounded-md border border-[#26262E] px-6 text-sm uppercase tracking-wider text-gray-400 transition-colors hover:bg-[#26262E] hover:text-white"
              >
                {t('builder.back')}
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
            className={`flex min-h-[48px] w-full items-center justify-center rounded-md py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300 ${
              (activeStepIndex === steps.length - 1 && !isComplete)
                ? 'cursor-not-allowed border border-[#26262E] bg-[#16161A] text-gray-500'
                : 'bg-[#C8102E] text-white shadow-lg shadow-[#C8102E]/20 hover:bg-[#A30D25]'
            }`}
          >
            {activeStepIndex < steps.length - 1 ? t('builder.next') : t('builder.checkout')}
          </button>
        </div>
        
      </div>
    </section>
  );
}
