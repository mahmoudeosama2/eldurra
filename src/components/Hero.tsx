import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
  import ar from '../assets/logo_ar.jpg';
import en from '../assets/logo_en.jpg';
const Hero: React.FC = () => {
  const { language, t } = useLanguage();
  const [imageError, setImageError] = React.useState(false);

  // Reset image error when language changes
  React.useEffect(() => {
    setImageError(false);
  }, [language]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Logo Section */}
        <div className="mb-8 flex justify-center">
          {!imageError ? (
            <img 
              src={language === 'ar' ? ar : en}
              alt={language === 'ar' ? 'شركة درة العالم' : 'WORLD DURRA CO'}
              className="h-48 md:h-64 lg:h-80 w-auto object-contain filter brightness-0 invert drop-shadow-lg"
              onError={() => setImageError(true)}
            />
          ) : (
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {t('hero.title')}
            </h1>
          )}
        </div>

       
        
        {/* <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          {t('hero.cta')}
        </button> */}
      </div>
    </section>
  );
};

export default Hero;