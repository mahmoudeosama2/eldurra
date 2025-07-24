// ✅ LanguageProvider.tsx (بعد التعديل الكامل)

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.properties': 'Projects',
    'nav.about': 'About',
    'nav.location': 'Location',
    'nav.contact': 'Contact',

    // Hero Section
    'hero.title': 'DURRA WORLD CO',
    'hero.subtitle': 'For Management and Leasing of Real Estate',
    'hero.cta': 'Contact Us',

    // Features
    'features.security.title': 'Professional Management',
    'features.security.description': 'Real estate management with high standards.',
    'features.quality.title': 'Strategic Projects',
    'features.quality.description': 'Projects across key urban locations.',
    'features.service.title': 'Ongoing Developments',
    'features.service.description': 'Developing residential and commercial projects.',
    'features.location.title': 'Prime Locations',
    'features.location.description': 'Across key areas in Kuwait.',

    // Properties
    'properties.title': 'Project Components',

    // Mahboula Residential Complex
    'properties.jabriya.title': 'Mahboula Residential Complex',
    'properties.jabriya.description': '16 residential buildings located in Mahboula – Block 3.',

    // Hotel Project
    'properties.hotel.title': 'Hotel Project (Under Construction)',
    'properties.hotel.description': 'A hotel project under development. Location: Jabriya. Expected to include hospitality services and strategic positioning with modern amenities.',

    // Commercial Complex
    'properties.mall.title': 'Commercial Complex',
    'properties.mall.description': 'A multi-purpose complex under the management of Durra World Company.',

    // Real Estate Portfolio
    'properties.portfolio.title': 'Real Estate Portfolio',
    'properties.portfolio.description': 'Various projects managed or leased across Kuwait.',

    // Residential Villa Projects
    'properties.residential.title': 'Residential Villa Project',
    'properties.residential.description': 'Part of residential villa development projects currently being developed and managed.',

    'properties.luxury.title': 'Residential Villa Project',
    'properties.luxury.description': 'Part of residential villa development projects currently being developed and managed.',

    'properties.building1.title': 'Residential Villa Project',
    'properties.building1.description': 'Part of residential villa development projects currently being developed and managed.',

    'properties.building2.title': 'Residential Villa Project',
    'properties.building2.description': 'Part of residential villa development projects currently being developed and managed.',

    'properties.building3.title': 'Residential Villa Project',
    'properties.building3.description': 'Part of residential villa development projects currently being developed and managed.',

    'properties.daralawad.title': 'Residential Villa Project',
    'properties.daralawad.description': 'Part of residential villa development projects currently being developed and managed.',

    // Blue Tower Complex
    'properties.btbuilding.title': 'Main Office',
    'properties.btbuilding.description': 'Main office location at Mazaya Towers, Kuwait.',

    // Previous Projects
    'properties.salmiya.title': 'Previous Projects',
    'properties.salmiya.description': 'Projects previously managed including La Plage, Al Hamra Complex, Al Rayan, and Salam Mall management period. Management handled personally by Hamed Awadh before Durra World Company establishment.',

    'properties.lolohyber.title': 'Salam Mall Management Period',
    'properties.lolohyber.description': 'Commercial entities including Lulu Hypermarket and Al Tijari Bank managed during Salam Mall administration period. Handled personally by Hamed Awadh before Durra World Company establishment.',

    'properties.lolohyber2.title': 'Commercial Entities Management',
    'properties.lolohyber2.description': 'Various commercial entities managed during previous projects period.',

    'properties.lolohyber3.title': 'Banking Institutions Cooperation',
    'properties.lolohyber3.description': 'Cooperation with banking institutions during previous management periods.',

    'properties.altijari.title': 'Al Tijari Bank Cooperation',
    'properties.altijari.description': 'Cooperation with Al Tijari Bank during previous project management periods.',

    // About
    'about.title': 'About DURRA WORLD CO',
    'about.description': 'A real estate company specialized in leasing and management of residential and commercial properties in Kuwait.',
    'about.stats.experience': 'Years Experience',
    'about.stats.projects': 'Projects',
    'about.stats.locations': 'Locations',

    // Location
    'location.title': 'Our Locations',
    'location.description': 'Main office at Mazaya Towers, Kuwait.',
    'location.headquarters': 'Main Office – Kuwait',
    'location.projects': 'Project Areas',
    'location.projectsText': 'Jabriya, Mahboula, and other prime locations',
    'location.coordinates': 'Coordinates: 29.3743° N, 47.9894° E',

    // Contact
    'contact.title': 'Contact DURRA WORLD CO',
    'contact.description': 'Reach out to our team for inquiries or leasing.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.cta': 'Get in Touch',

    // Footer
    'footer.description': 'DURRA WORLD CO – Real Estate Management and Leasing.',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Info',
    'footer.rights': 'All rights reserved.',
    'footer.company': 'Companies',
    'footer.services': 'Services'
  },

  ar: {
    'nav.home': 'الرئيسية',
    'nav.properties': 'المشاريع',
    'nav.about': 'من نحن',
    'nav.location': 'الموقع',
    'nav.contact': 'اتصل بنا',

    'hero.title': 'شركة درة العالم',
    'hero.subtitle': 'لإدارة وتأجير العقارات',
    'hero.cta': 'تواصل معنا',

    'features.security.title': 'إدارة احترافية',
    'features.security.description': 'إدارة عقارية بمعايير عالية.',
    'features.quality.title': 'مشاريع استراتيجية',
    'features.quality.description': 'مشاريع في مواقع حيوية.',
    'features.service.title': 'تطوير مستمر',
    'features.service.description': 'تطوير مشاريع سكنية وتجارية.',
    'features.location.title': 'مواقع متميزة',
    'features.location.description': 'في أهم مناطق الكويت.',

    'properties.title': 'مكونات المشروع',

    'properties.jabriya.title': 'مجمع سكني في المهبولة',
    'properties.jabriya.description': 'يتكون من 16 عمارة سكنية تقع في قطعة 3 بالمهبولة.',

    'properties.hotel.title': 'مشروع فندقي (قيد الإنشاء)',
    'properties.hotel.description': 'مشروع فندقي قيد التطوير، الموقع: الجابرية. من المتوقع أن يضم خدمات ضيافة وموقع استراتيجي مع مرافق حديثة.',

    'properties.mall.title': 'مجمع تجاري',
    'properties.mall.description': 'مجمع متعدد الأغراض تحت إدارة شركة درة العالم.',

    'properties.portfolio.title': 'المحفظة العقارية',
    'properties.portfolio.description': 'مشاريع متعددة تُدار أو يتم تأجيرها في مختلف أنحاء الكويت.',

    'properties.residential.title': 'مشروع فيلل سكنية',
    'properties.residential.description': 'جزء من مشاريع فيلل سكنية يتم تطويرها وإدارتها حالياً.',

    'properties.luxury.title': 'مشروع فيلل سكنية',
    'properties.luxury.description': 'جزء من مشاريع فيلل سكنية يتم تطويرها وإدارتها حالياً.',

    'properties.building1.title': 'مشروع فيلل سكنية',
    'properties.building1.description': 'جزء من مشاريع فيلل سكنية يتم تطويرها وإدارتها حالياً.',

    'properties.building2.title': 'مشروع فيلل سكنية',
    'properties.building2.description': 'جزء من مشاريع فيلل سكنية يتم تطويرها وإدارتها حالياً.',

    'properties.building3.title': 'مشروع فيلل سكنية',
    'properties.building3.description': 'جزء من مشاريع فيلل سكنية يتم تطويرها وإدارتها حالياً.',

    'properties.daralawad.title': 'مشروع فيلل سكنية',
    'properties.daralawad.description': 'جزء من مشاريع فيلل سكنية يتم تطويرها وإدارتها حالياً.',

    'properties.btbuilding.title': 'المكتب الرئيسي',
    'properties.btbuilding.description': 'موقع المكتب الرئيسي في أبراج مزايا، الكويت.',

    'properties.salmiya.title': 'مشاريع سابقة',
    'properties.salmiya.description': 'مشاريع تمت إدارتها سابقاً تشمل لا بلاج، مجمع الحمراء، الريان، وفترة إدارة السلام مول. تم التعامل من قبل حامد عوض شخصياً قبل تأسيس شركة درة العالم.',

    'properties.lolohyber.title': 'فترة إدارة السلام مول',
    'properties.lolohyber.description': 'كيانات تجارية تشمل لولو هايبر والبنك التجاري تم إدارتها خلال فترة إدارة السلام مول. من قبل حامد عوض شخصياً قبل تأسيس شركة درة العالم.',

    'properties.lolohyber2.title': 'إدارة الكيانات التجارية',
    'properties.lolohyber2.description': 'كيانات تجارية متعددة تم إدارتها خلال فترة المشاريع السابقة.',

    'properties.lolohyber3.title': 'التعاون مع المؤسسات البنكية',
    'properties.lolohyber3.description': 'التعاون مع مؤسسات بنكية خلال فترات الإدارة السابقة.',

    'properties.altijari.title': 'التعاون مع البنك التجاري',
    'properties.altijari.description': 'التعاون مع البنك التجاري خلال فترات إدارة المشاريع السابقة.',

    'about.title': 'عن شركة درة العالم',
    'about.description': 'شركة عقارية متخصصة في إدارة وتأجير العقارات السكنية والتجارية في الكويت.',
    'about.stats.experience': 'سنوات خبرة',
    'about.stats.projects': 'مشاريع',
    'about.stats.locations': 'مواقع',

    'location.title': 'مواقعنا',
    'location.description': 'المكتب الرئيسي في أبراج مزايا – الكويت.',
    'location.headquarters': 'المكتب الرئيسي – الكويت',
    'location.projects': 'مناطق المشاريع',
    'location.projectsText': 'الجابرية، المهبولة، ومواقع متميزة أخرى',
    'location.coordinates': 'الإحداثيات: 29.3743° N, 47.9894° E',

    'contact.title': 'تواصل مع شركة درة العالم',
    'contact.description': 'للاستفسارات أو تأجير العقارات، تواصل مع فريقنا.',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.address': 'العنوان',
    'contact.cta': 'تواصل الآن',

    'footer.description': 'شركة درة العالم – لإدارة وتأجير العقارات.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'معلومات الاتصال',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.company': 'الشركات',
    'footer.services': 'الخدمات'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>{children}</div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};