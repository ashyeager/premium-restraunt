import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navigation
  "nav.build": { en: "Build Your Wok", ar: "أعد طبقك" },
  "nav.menu": { en: "Signature Dishes", ar: "أطباقنا المميزة" },
  "nav.location": { en: "Location", ar: "الموقع" },
  "nav.order": { en: "Order Now", ar: "اطلب الآن" },

  // Hero
  "hero.subtitle": { en: "Premium Asian Street Food", ar: "طعام الشارع الآسيوي الفاخر" },
  "hero.title1": { en: "Sizzle.", ar: "أزيز." },
  "hero.title2": { en: "Smoke.", ar: "دخان." },
  "hero.title3": { en: "Street.", ar: "شوارع." },
  "hero.desc": { en: "High-heat Pan-Asian street food at Muscat Grand Mall. Experience the authentic breath of the wok.", ar: "أشهى المأكولات الآسيوية المحضرة على حرارة عالية في مسقط جراند مول. عِش التجربة الأصيلة." },
  "hero.build": { en: "Build Your Wok", ar: "أعد طبقك" },
  "hero.whatsapp": { en: "WhatsApp Pickup", ar: "استلام عبر واتساب" },

  // WokBuilder
  "builder.title": { en: "Build Your Box", ar: "أعد صندوقك" },
  "builder.step1": { en: "Base Selection", ar: "اختر الأساس" },
  "builder.step2": { en: "Choose Protein", ar: "اختر البروتين" },
  "builder.step3": { en: "Signature Sauce", ar: "صلصتك المميزة" },
  "builder.total": { en: "Estimated Total", ar: "المجموع التقديري" },
  "builder.omr": { en: "OMR", ar: "ر.ع" },
  "builder.back": { en: "Back", ar: "رجوع" },
  "builder.next": { en: "Next Step", ar: "الخطوة التالية" },
  "builder.checkout": { en: "Send Custom Order via WhatsApp", ar: "أرسل طلبك المخصص عبر واتساب" },

  // Builder items
  "item.hakka.name": { en: "Hakka Noodles", ar: "نودلز هاكا" },
  "item.hakka.desc": { en: "Included", ar: "متضمن" },
  "item.jasmine.name": { en: "Jasmine Steam Rice", ar: "أرز ياسمين على البخار" },
  "item.jasmine.desc": { en: "Included", ar: "متضمن" },
  "item.udon.name": { en: "Udon Noodles", ar: "نودلز أودون" },
  "item.udon.desc": { en: "Thick & chewy", ar: "سميكة ومطاطية" },

  "item.beef.name": { en: "Charred Beef", ar: "لحم بقري مشوي" },
  "item.beef.desc": { en: "Smoky & tender", ar: "مدخن وطري" },
  "item.shrimp.name": { en: "Kung Pao Shrimp", ar: "روبيان كونغ باو" },
  "item.shrimp.desc": { en: "Spicy & nutty", ar: "حار وغني بالمكسرات" },
  "item.chicken.name": { en: "Tender Chicken", ar: "دجاج طري" },
  "item.chicken.desc": { en: "Wok-seared", ar: "مطهو بالمقلاة" },
  "item.tofu.name": { en: "Fresh Tofu & Veggies", ar: "توفو طازج وخضروات" },
  "item.tofu.desc": { en: "Crisp & light", ar: "مقرمش وخفيف" },

  "item.szechuan.name": { en: "Szechuan Chili", ar: "فلفل سيتشوان" },
  "item.szechuan.desc": { en: "Spicy kick", ar: "لمسة حارة" },
  "item.teriyaki.name": { en: "Sweet Soy Teriyaki", ar: "صويا ترياكي حلوة" },
  "item.teriyaki.desc": { en: "Sweet & savory", ar: "حلو ومالح" },
  "item.garlic.name": { en: "Garlic Black Pepper", ar: "ثوم وفلفل أسود" },
  "item.garlic.desc": { en: "Rich & peppery", ar: "غني ومبهر" },

  // Popular Dishes
  "menu.title": { en: "Signatures", ar: "أطباقنا المميزة" },
  "menu.subtitle": { en: "Curated chef's specials", ar: "إبداعات الشيف الخاصة" },
  "menu.viewAll": { en: "View All", ar: "عرض الكل" },
  "menu.add": { en: "Add to WhatsApp Order", ar: "أضف إلى طلب واتساب" },

  "dish.1.name": { en: "Chicken Dumplings", ar: "زلابية الدجاج" },
  "dish.1.desc": { en: "Steamed or pan-seared pork-free dumplings served with signature Szechuan chili oil dip.", ar: "زلابية دجاج مطهوة على البخار أو مقلية، تقدم مع صوص زيت فلفل سيتشوان المميز." },
  "dish.2.name": { en: "Kung Pao Shrimp Wok", ar: "مقلاة روبيان كونغ باو" },
  "dish.2.desc": { en: "Sizzling wok-tossed prawns, roasted peanuts, and dried red chilis over fragrant Jasmine rice.", ar: "روبيان مقلي مع الفول السوداني المحمص والفلفل الأحمر المجفف فوق أرز الياسمين العطري." },
  "dish.3.name": { en: "Charred Beef Wok Box", ar: "صندوق لحم بقري مشوي" },
  "dish.3.desc": { en: "Smoky wok-charred beef strips tossed in garlic black pepper glaze with Hakka noodles.", ar: "شرائح لحم بقري مدخنة ومقلية في صلصة الثوم والفلفل الأسود مع نودلز هاكا." },

  // Location
  "loc.title": { en: "WOK HOUSE", ar: "ووك هاوس" },
  "loc.subtitle": { en: "The Experience of Heat", ar: "تجربة الحرارة العالية" },
  "loc.location": { en: "Location", ar: "الموقع" },
  "loc.address1": { en: "Food Court, Muscat Grand Mall (MGM)", ar: "ردهة المطاعم، مسقط جراند مول" },
  "loc.address2": { en: "Al Khuwair, Muscat, Oman", ar: "الخوير، مسقط، عُمان" },
  "loc.hours": { en: "Hours", ar: "أوقات العمل" },
  "loc.days1": { en: "Sat–Wed", ar: "السبت–الأربعاء" },
  "loc.days2": { en: "Thu–Fri", ar: "الخميس–الجمعة" },
  "loc.directions": { en: "Get Google Maps Directions", ar: "احصل على اتجاهات خرائط جوجل" },
  "loc.contact": { en: "Contact via WhatsApp", ar: "تواصل عبر واتساب" },
  "loc.privacy": { en: "Privacy", ar: "الخصوصية" },
  "loc.terms": { en: "Terms", ar: "الشروط" },
  "loc.rights": { en: "WOK HOUSE OMAN. ALL RIGHTS RESERVED.", ar: "ووك هاوس عمان. جميع الحقوق محفوظة." },

  // Footer
  "foot.menu": { en: "Menu", ar: "القائمة" },
  "foot.visit": { en: "Visit Us", ar: "تفضل بزيارتنا" },
  "foot.legal": { en: "Legal", ar: "قانوني" },
  "foot.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "foot.terms": { en: "Terms of Service", ar: "شروط الخدمة" },
  "foot.built": { en: "BUILT BY", ar: "صُنع بواسطة" },

  // Bottom Nav
  "bnav.home": { en: "Home", ar: "الرئيسية" },
  "bnav.build": { en: "Build", ar: "ابدأ" },
  "bnav.menu": { en: "Menu", ar: "القائمة" },
  "bnav.locate": { en: "Locate", ar: "الموقع" },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
