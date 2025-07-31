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

    // Property Categories
    'properties.categories.current': 'Current Main Projects',
    'properties.categories.complexes': 'Commercial Complexes',
    'properties.categories.residential': 'Residential Properties',
    'properties.categories.previous': 'Previously Managed Properties',
    'properties.categories.construction': 'Construction & Renovation Projects',

    // Current Projects
    'properties.jabriya.title': 'JABRIYA Hotel',
    'properties.jabriya.description': 'Premium hotel facility located in Jabriya area.',

    'properties.hotel.title': 'Hotel Project (Under Construction)',
    'properties.hotel.description': 'A hotel project under development. Location: Jabriya. Expected to include hospitality services and strategic positioning with modern amenities.',

    'properties.mall.title': 'Commercial Complex',
    'properties.mall.description': 'A multi-purpose complex under the management of Durra World Company.',

    'properties.portfolio.title': 'Real Estate Portfolio',
    'properties.portfolio.description': 'Various projects managed or leased across Kuwait.',

    'properties.btbuilding.title': 'Main Office',
    'properties.btbuilding.description': 'Main office location at Mazaya Towers, Kuwait.',
// Villa Properties
'properties.villa1.title': 'Al-Rumaithiya Diwan Block 3',
'properties.villa1.description': 'Al-Rumaithiya Diwan Block 3.',
'properties.villa2.title': 'Salwa Block 7',
'properties.villa2.description': 'Salwa Block 7.',
'properties.villa3.title': 'Al-Rumaithiya Villa Block 7',
'properties.villa3.description': 'Al-Rumaithiya Villa Block 7.',
'properties.villa4.title': 'Al-Rumaithiya Villa Block 9',
'properties.villa4.description': 'Al-Rumaithiya Villa Block 9.',
'properties.villa5.title': 'Al-Rumaithiya Villa Block 12',
'properties.villa5.description': 'Al-Rumaithiya Villa Block 12.',

// Alrayaan Complex
'properties.alrayaan.title': 'Salmiya Alrayaan 5',
'properties.alrayaan.description': 'Alrayaan Complex in Salmiya.',
'properties.alrayaan2.title': 'Salmiya Alrayaan 7',
'properties.alrayaan2.description': 'Alrayaan Complex in Salmiya.',
'properties.alrayaan3.title': 'Salmiya Alrayaan 8',
'properties.alrayaan3.description': 'Alrayaan Complex in Salmiya.',

// La Plage Complex
'properties.lablag.title': 'La Plage 2',
'properties.lablag.description': 'La Plage Complex on Arabian Gulf Street.',
'properties.lablag2.title': 'La Plage',
'properties.lablag2.description': 'La Plage Complex on Arabian Gulf Street.',

// Mahbullah Properties
'properties.mahbullah216.title': 'Mahbullah 216',
'properties.mahbullah216.description': 'Mahbullah Property 216.',
'properties.mahbullah216_2.title': 'Mahbullah 216',
'properties.mahbullah216_2.description': 'Mahbullah Property 216.',
'properties.mahbullahComplex.title': 'Mahbullah Properties 3',
'properties.mahbullahComplex.description': 'Mahbullah Properties.',
'properties.mahbullahComplex2.title': 'Mahbullah Properties 4',
'properties.mahbullahComplex2.description': 'Mahbullah Properties.',

   
    // Residential Villas
    'properties.residential.title': 'Residential Villa Project',
    'properties.residential.description': 'Part of residential villa development projects currently being developed and managed.',
    'properties.luxury.title': 'Luxury Villa Project',
    'properties.luxury.description': 'Premium villa development with luxury amenities and modern design.',
    'properties.daralawad.title': 'Dar Al Awadh Villa',
    'properties.daralawad.description': 'Premium villa development in prime residential area.',

   

    // Previous Projects
    'properties.salmiya.title': 'Previous Projects',
    'properties.salmiya.description': 'Projects previously managed including La Plage, Al Hamra Complex, Al Rayan, and Salam Mall management period. Management handled personally by Hamed Awadh before Durra World Company establishment.',

    'properties.lolohyber.title': 'Salam Mall Management Period',
    'properties.lolohyber.description': 'Commercial entities including Lulu Hypermarket and Al Tijari Bank managed during Salam Mall administration period.',

    'properties.lolohyber2.title': 'Commercial Entities Management',
    'properties.lolohyber2.description': 'Various commercial entities managed during previous projects period.',

    'properties.lolohyber3.title': 'Banking Institutions Cooperation',
    'properties.lolohyber3.description': 'Cooperation with banking institutions during previous management periods.',

    'properties.altijari.title': 'Al Tijari Bank Cooperation',
    'properties.altijari.description': 'Cooperation with Al Tijari Bank during previous project management periods.',

    // Al Hamra Residence
'properties.hamra.title': 'Al Hamra Residence',
'properties.hamra.description': 'Al Hamra Residence.',
'properties.hamra2.title': 'Al Hamra Residence',
'properties.hamra2.description': 'Al Hamra Residence.',
'properties.hamra3.title': 'Al Hamra Residence',
'properties.hamra3.description': 'Al Hamra Residence.',

// Salam Mall
'properties.salam1.title': 'Salam Mall 2',
'properties.salam1.description': 'Salam Mall.',
'properties.salam2.title': 'Salam Mall 4',
'properties.salam2.description': 'Salam Mall.',
'properties.salam3.title': 'Salam Mall 6',
'properties.salam3.description': 'Salam Mall.',
'properties.salam4.title': 'Salam Mall 7',
'properties.salam4.description': 'Salam Mall.',
'properties.salam5.title': 'Salam Mall 8',
'properties.salam5.description': 'Salam Mall.',

// Construction Projects
'properties.cartblanche.title': 'Hawally Carte Blanche',
'properties.cartblanche.description': 'Hawally Carte Blanche.',
'properties.cartblanche2.title': 'Hawally Carte Blanche 3',
'properties.cartblanche2.description': 'Hawally Carte Blanche.',
'properties.clinic.title': 'Shuab Al Bahri Medical Clinics',
'properties.clinic.description': 'Shuab Al Bahri Medical Clinics.',
'properties.clinic2.title': 'Shuab Al Bahri Medical Clinics',
'properties.clinic2.description': 'Shuab Al Bahri Medical Clinics.',

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
    'footer.services': 'Services',
    // Contact
  
    'footer.phoneNumbers': 'Phone Numbers',
    'footer.emails': 'Email Addresses',
    'footer.address': 'Address',
    'footer.hamedAwadCo': 'Hamed Awad Co',
    'footer.worldDurraCo': 'World Durra Co',
    'footer.gulfDurraCo': 'Gulf Durra Co',
    'footer.country': 'Kuwait - Mubarek',
    'footer.area': 'Mubarek Area',
    'footer.street': 'Khalid Ibn Al-Walid Street',
    'footer.building': 'Mazaya Tower 1 - Floor 11',
    'footer.office': 'Office No: B1',

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

    // تصنيفات العقارات
    'properties.categories.current': 'المشاريع الرئيسية الحالية',
    'properties.categories.complexes': 'المجمعات التجارية',
    'properties.categories.residential': 'العقارات السكنية',
    'properties.categories.previous': 'العقارات المُدارة سابقاً',
    'properties.categories.construction': 'مشاريع البناء والترميم',

    // المشاريع الحالية
    'properties.jabriya.title': 'فندق الجابرية',
    'properties.jabriya.description': 'منشأة فندقية متميزة تقع في منطقة الجابرية.',

    'properties.hotel.title': 'مشروع فندقي (قيد الإنشاء)',
    'properties.hotel.description': 'مشروع فندقي قيد التطوير، الموقع: الجابرية. من المتوقع أن يضم خدمات ضيافة وموقع استراتيجي مع مرافق حديثة.',

    'properties.mall.title': 'مجمع تجاري',
    'properties.mall.description': 'مجمع متعدد الأغراض تحت إدارة شركة درة العالم.',

    'properties.portfolio.title': 'المحفظة العقارية',
    'properties.portfolio.description': 'مشاريع متعددة تُدار أو يتم تأجيرها في مختلف أنحاء الكويت.',

    'properties.btbuilding.title': 'المكتب الرئيسي',
    'properties.btbuilding.description': 'موقع المكتب الرئيسي في أبراج مزايا، الكويت.',

    // مجمع الريان
    'properties.alrayaan.title': 'السالمية الريان 5',
    'properties.alrayaan.description': 'مجمع الريان في السالمية.',
    'properties.alrayaan2.title': 'السالمية الريان 7',
    'properties.alrayaan2.description': 'مجمع الريان في السالمية.',
    'properties.alrayaan3.title': 'السالمية الريان 8',
    'properties.alrayaan3.description': 'مجمع الريان في السالمية.',

    // مجمع البلاج
    'properties.lablag.title': 'البلاج 2',
    'properties.lablag.description': 'مجمع البلاج على شارع الخليج العربي.',
    'properties.lablag2.title': 'البلاج',
    'properties.lablag2.description': 'مجمع البلاج على شارع الخليج العربي.',

    // عقارات المهبولة
    'properties.mahbullah216.title': 'المهبولة 216',
    'properties.mahbullah216.description': 'عقار المهبولة 216.',
    'properties.mahbullah216_2.title': 'المهبولة 216',
    'properties.mahbullah216_2.description': 'عقار المهبولة 216.',
    'properties.mahbullahComplex.title': 'عقارات المهبولة 3',
    'properties.mahbullahComplex.description': 'عقارات المهبولة.',
    'properties.mahbullahComplex2.title': 'عقارات المهبولة 4',
    'properties.mahbullahComplex2.description': 'عقارات المهبولة.',

    // الفيلل السكنية
    'properties.residential.title': 'مشروع فيلل سكنية',
    'properties.residential.description': 'جزء من مشاريع فيلل سكنية يتم تطويرها وإدارتها حالياً.',
    'properties.luxury.title': 'مشروع فيلل فاخرة',
    'properties.luxury.description': 'تطوير فيلل متميزة بمرافق فاخرة وتصميم حديث.',
    'properties.daralawad.title': 'فيلا دار الأعواد',
    'properties.daralawad.description': 'تطوير فيلل متميزة في منطقة سكنية راقية.',

    // الفيلل
    'properties.villa1.title': 'ديوان الرميثية قطعة 3',
    'properties.villa1.description': 'ديوان الرميثية قطعة 3.',
    'properties.villa2.title': 'سلوى قطعة 7',
    'properties.villa2.description': 'سلوى قطعة 7.',
    'properties.villa3.title': 'فيلا الرميثية قطعة 7',
    'properties.villa3.description': 'فيلا الرميثية قطعة 7.',
    'properties.villa4.title': 'فيلا الرميثية قطعة 9',
    'properties.villa4.description': 'فيلا الرميثية قطعة 9.',
    'properties.villa5.title': 'فيلا الرميثية قطعة 12',
    'properties.villa5.description': 'فيلا الرميثية قطعة 12.',

    // المشاريع السابقة
    'properties.salmiya.title': 'مشاريع سابقة',
    'properties.salmiya.description': 'مشاريع تمت إدارتها سابقاً تشمل لا بلاج، مجمع الحمراء، الريان، وفترة إدارة السلام مول. تم التعامل من قبل حامد عوض شخصياً قبل تأسيس شركة درة العالم.',

    'properties.lolohyber.title': 'فترة إدارة السلام مول',
    'properties.lolohyber.description': 'كيانات تجارية تشمل لولو هايبر والبنك التجاري تم إدارتها خلال فترة إدارة السلام مول.',

    'properties.lolohyber2.title': 'إدارة الكيانات التجارية',
    'properties.lolohyber2.description': 'كيانات تجارية متعددة تم إدارتها خلال فترة المشاريع السابقة.',

    'properties.lolohyber3.title': 'التعاون مع المؤسسات البنكية',
    'properties.lolohyber3.description': 'التعاون مع مؤسسات بنكية خلال فترات الإدارة السابقة.',

    'properties.altijari.title': 'التعاون مع البنك التجاري',
    'properties.altijari.description': 'التعاون مع البنك التجاري خلال فترات إدارة المشاريع السابقة.',

    // الحمراء ريزيدنس
    'properties.hamra.title': 'الحمرا ريزيدنس',
    'properties.hamra.description': 'الحمرا ريزيدنس.',
    'properties.hamra2.title': 'الحمرا ريزيدنس',
    'properties.hamra2.description': 'الحمرا ريزيدنس.',
    'properties.hamra3.title': 'الحمرا ريزيدنس',
    'properties.hamra3.description': 'الحمرا ريزيدنس.',

    // السلام مول
    'properties.salam1.title': 'السلام مول 2',
    'properties.salam1.description': 'السلام مول.',
    'properties.salam2.title': 'السلام مول 4',
    'properties.salam2.description': 'السلام مول.',
    'properties.salam3.title': 'السلام مول 6',
    'properties.salam3.description': 'السلام مول.',
    'properties.salam4.title': 'السلام مول 7',
    'properties.salam4.description': 'السلام مول.',
    'properties.salam5.title': 'السلام مول 8',
    'properties.salam5.description': 'السلام مول.',

    // مشاريع البناء
    'properties.cartblanche.title': 'حولي كارت بلانش',
    'properties.cartblanche.description': 'حولي كارت بلانش.',
    'properties.cartblanche2.title': 'حولي كارت بلانش3',
    'properties.cartblanche2.description': 'حولي كارت بلانش.',
    'properties.clinic.title': 'عيادات طبية الشعب البحري',
    'properties.clinic.description': 'عيادات طبية الشعب البحري.',
    'properties.clinic2.title': 'عيادات طبية الشعب البحري',
    'properties.clinic2.description': 'عيادات طبية الشعب البحري.',

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
    'footer.services': 'الخدمات',
 
    'footer.phoneNumbers': 'أرقام الهواتف',
    'footer.emails': 'عناوين البريد الإلكتروني',
    'footer.address': 'العنوان',
    'footer.hamedAwadCo': 'شركة حامد عوض',
    'footer.worldDurraCo': 'شركة درة العالم',
    'footer.gulfDurraCo': 'شركة درة الخليج',
    'footer.country': 'الكويت - المرقاب',
    'footer.area': 'منطقة المرقاب',
    'footer.street': 'شارع خالد بن الوليد',
    'footer.building': 'برج مزايا 1 - الدور 11',
    'footer.office': 'مكتب رقم: ب 1'
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