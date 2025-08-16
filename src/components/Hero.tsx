import * as React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

import ar from '../assets/logo_ar.jpg';
import en from '../assets/logo_en.jpg';
import hamed_ar from '../assets/hamed_ar.png';
import hamed_en from '../assets/hamed_en.png';
import alkhleg_ar from '../assets/alkhleg_ar.png';
import alkhleg_en from '../assets/alkhleg_en.png';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const [imageErrors, setImageErrors] = React.useState({
    main: false,
    hamed: false,
    alkhleg: false
  });

  React.useEffect(() => {
    setImageErrors({
      main: false,
      hamed: false,
      alkhleg: false
    });
  }, [language]);

  const handleImageError = (logoType: 'main' | 'hamed' | 'alkhleg') => {
    setImageErrors(prev => ({
      ...prev,
      [logoType]: true
    }));
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* خلفية مع الـ gradient الأصلي */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="absolute inset-0 bg-white/80"></div>
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>

      <div className="relative z-10 text-center text-gray-900 px-4 max-w-6xl mx-auto flex flex-col items-center">
        
        {/* لوجو Hamed فوق */}
        <div className="mb-2">
          {!imageErrors.hamed ? (
            <img
              src={language === 'ar' ? hamed_ar : hamed_en}
              alt={language === 'ar' ? 'شركة حامد - الشركة الأم' : 'Hamed Company - Parent Company'}
              className="h-64 md:h-80 lg:h-96 w-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
              onError={() => handleImageError('hamed')}
            />
          ) : (
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {language === 'ar' ? 'شركة حامد - الشركة الأم' : 'Hamed Company - Parent Company'}
            </h1>
          )}
        </div>

        {/* اللوجوهين تحت جنب بعض */}
        <div className="flex justify-center items-center gap-16 mb-6">
          {/* اللوجو الرئيسي للمجموعة */}
          <div>
            {!imageErrors.main ? (
              <img
                src={language === 'ar' ? ar : en}
                alt={language === 'ar' ? 'مجموعة حامد عوض' : 'Hamed Awadh Group'}
                className="h-40 md:h-48 lg:h-56 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
                onError={() => handleImageError('main')}
              />
            ) : (
              <span className="text-xl md:text-2xl font-semibold">
                {language === 'ar' ? 'مجموعة حامد عوض' : 'Hamed Awadh Group'}
              </span>
            )}
          </div>

          {/* لوجو الخليج */}
          <div>
            {!imageErrors.alkhleg ? (
              <img
                src={language === 'ar' ? alkhleg_ar : alkhleg_en}
                alt={language === 'ar' ? 'شركة الخليج' : 'Alkhleg Company'}
                className="h-44 md:h-52 lg:h-60 w-auto object-contain drop-shadow-lg transition-transform duration-300 hover:scale-105"
                onError={() => handleImageError('alkhleg')}
              />
            ) : (
              <span className="text-xl md:text-2xl font-semibold">
                {language === 'ar' ? 'شركة الخليج' : 'Alkhleg Company'}
              </span>
            )}
          </div>
        </div>

        {/* النص تحت اللوجوهات */}
        <div className="text-center">
<h2
  className="inline-block pb-1 text-4xl md:text-6xl lg:text-7xl font-bold leading-normal bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent animate-pulse"
  style={{
    background: 'linear-gradient(to right, #004aaf, #0056cc, #0062e6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }}
  style={{
    fontFamily: language === 'ar' ? 'Amiri, serif' : 'Playfair Display, serif'
  }}
>
  {language === 'ar' ? 'مجموعة حامد عوض' : 'Hamed Awadh Group'}
</h2>


        </div>
      </div>
    </section>
  );
};

export default Hero;
