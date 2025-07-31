import * as React from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

import jabriyaImg from '../assets/jabriya.jpg';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import five from '../assets/5.jpg';
import sex from '../assets/6.jpg';
import btbuilding from '../assets/blue.jpg';
import lolohyber from '../assets/lolohyber.jpg';
import lolohyber2 from '../assets/lolohyber2.jpg';
import lolohyber3 from '../assets/lolohyber3.jpg';
import altijari from '../assets/altijari.jpg';
import daralawad from '../assets/daralwad.jpg';

// Alrayaan Complex - Salmiyah
import alrayaan1 from '../assets/Alrayaan Complex - Salmiyah/السالمية الريان 5.jpg';
import alrayaan2 from '../assets/Alrayaan Complex - Salmiyah/السالمية الريان 7.jpg';
import alrayaan3 from '../assets/Alrayaan Complex - Salmiyah/السالمية الريان 8.jpg';

// La Plage Complex
import lablag1 from '../assets/Lablag Complex - arabian gulf street/البلاج 2.jpg';
import lablag2 from '../assets/Lablag Complex - arabian gulf street/البلاج.jpg';

// Mahbullah Properties
import mahbullah1 from '../assets/Mahbullah 216/المهبولة 216 .1.jpg';
import mahbullah2 from '../assets/Mahbullah 216/المهبولة 216.jpg';
import mahbullahComplex1 from '../assets/Mahbullah Complex/عقارات المهبولة 3.jpg';
import mahbullahComplex2 from '../assets/Mahbullah Complex/عقارات المهبولة 4.jpg';

// Residential Villas and Houses
import villa1 from '../assets/بيوت و فيلل سكنية/ديوان الرميثية قطعة 3.jpg';
import villa2 from '../assets/بيوت و فيلل سكنية/سلوى قطعة 7.jpg';
import villa3 from '../assets/بيوت و فيلل سكنية/فيلا الرميثية قطعة 7.jpg';
import villa4 from '../assets/بيوت و فيلل سكنية/فيلا الرميثية قطعة 9.jpg';
import villa5 from '../assets/بيوت و فيلل سكنية/فيلا الرميثية قطعة 12.jpg';

// Previous Managed Properties
import hamra1 from '../assets/عقارات سابقة تم ادارتها/الحمرا ريزيدنس (1).jpg';
import hamra2 from '../assets/عقارات سابقة تم ادارتها/الحمرا ريزيدنس (3).jpg';
import hamra3 from '../assets/عقارات سابقة تم ادارتها/الحمرا ريزيدنس (4).jpg';
import salam1 from '../assets/عقارات سابقة تم ادارتها/السلام مول 2.jpg';
import salam2 from '../assets/عقارات سابقة تم ادارتها/السلام مول 4.jpg';
import salam3 from '../assets/عقارات سابقة تم ادارتها/السلام مول 6.jpg';
import salam4 from '../assets/عقارات سابقة تم ادارتها/السلام مول 7.jpg';
import salam5 from '../assets/عقارات سابقة تم ادارتها/السلام مول 8.jpg';

// Construction and Renovation Projects
import cartblanche1 from '../assets/عقارات سابقة وحالية تم إنشائها و ترميمها/حولي كارت بلانش (2).jpg';
import cartblanche2 from '../assets/عقارات سابقة وحالية تم إنشائها و ترميمها/حولي كارت بلانش3.jpg';
import clinic1 from '../assets/عقارات سابقة وحالية تم إنشائها و ترميمها/عيادات طبية الشعب البحري (1).jpg';
import clinic2 from '../assets/عقارات سابقة وحالية تم إنشائها و ترميمها/عيادات طبية الشعب البحري.jpg';

const Properties: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const properties = [
    {
      image: jabriyaImg,
      title: t('properties.jabriya.title'),
      description: t('properties.jabriya.description'),
      category: 'current'
    },
    {
      image: one,
      title: t('properties.hotel.title'),
      description: t('properties.hotel.description'),
      category: 'current'
    },
    {
      image: two,
      title: t('properties.mall.title'),
      description: t('properties.mall.description'),
      category: 'current'
    },
    {
      image: three,
      title: t('properties.portfolio.title'),
      description: t('properties.portfolio.description'),
      category: 'current'
    },
    {
      image: btbuilding,
      title: t('properties.btbuilding.title'),
      description: t('properties.btbuilding.description'),
      category: 'current'
    },

    {
      image: alrayaan1,
      title: t('properties.alrayaan.title'),
      description: t('properties.alrayaan.description'),
      category: 'complexes'
    },
    {
      image: alrayaan2,
      title: t('properties.alrayaan2.title'),
      description: t('properties.alrayaan2.description'),
      category: 'complexes'
    },
    {
      image: alrayaan3,
      title: t('properties.alrayaan3.title'),
      description: t('properties.alrayaan3.description'),
      category: 'complexes'
    },

    {
      image: lablag1,
      title: t('properties.lablag.title'),
      description: t('properties.lablag.description'),
      category: 'complexes'
    },
    {
      image: lablag2,
      title: t('properties.lablag2.title'),
      description: t('properties.lablag2.description'),
      category: 'complexes'
    },

    {
      image: mahbullah1,
      title: t('properties.mahbullah216.title'),
      description: t('properties.mahbullah216.description'),
      category: 'residential'
    },
    {
      image: mahbullah2,
      title: t('properties.mahbullah216_2.title'),
      description: t('properties.mahbullah216_2.description'),
      category: 'residential'
    },
    {
      image: mahbullahComplex1,
      title: t('properties.mahbullahComplex.title'),
      description: t('properties.mahbullahComplex.description'),
      category: 'complexes'
    },
    {
      image: mahbullahComplex2,
      title: t('properties.mahbullahComplex2.title'),
      description: t('properties.mahbullahComplex2.description'),
      category: 'complexes'
    },

    {
      image: four,
      title: t('properties.salmiya.title'),
      description: t('properties.salmiya.description'),
      category: 'previous'
    },
    {
      image: five,
      title: t('properties.residential.title'),
      description: t('properties.residential.description'),
      category: 'residential'
    },
    {
      image: sex,
      title: t('properties.luxury.title'),
      description: t('properties.luxury.description'),
      category: 'residential'
    },
    {
      image: villa1,
      title: t('properties.villa1.title'),
      description: t('properties.villa1.description'),
      category: 'residential'
    },
    {
      image: villa2,
      title: t('properties.villa2.title'),
      description: t('properties.villa2.description'),
      category: 'residential'
    },
    {
      image: villa3,
      title: t('properties.villa3.title'),
      description: t('properties.villa3.description'),
      category: 'residential'
    },
    {
      image: villa4,
      title: t('properties.villa4.title'),
      description: t('properties.villa4.description'),
      category: 'residential'
    },
    {
      image: villa5,
      title: t('properties.villa5.title'),
      description: t('properties.villa5.description'),
      category: 'residential'
    },
    {
      image: daralawad,
      title: t('properties.daralawad.title'),
      description: t('properties.daralawad.description'),
      category: 'residential'
    },

    {
      image: lolohyber,
      title: t('properties.lolohyber.title'),
      description: t('properties.lolohyber.description'),
      category: 'previous'
    },
    {
      image: lolohyber2,
      title: t('properties.lolohyber2.title'),
      description: t('properties.lolohyber2.description'),
      category: 'previous'
    },
    {
      image: lolohyber3,
      title: t('properties.lolohyber3.title'),
      description: t('properties.lolohyber3.description'),
      category: 'previous'
    },
    {
      image: altijari,
      title: t('properties.altijari.title'),
      description: t('properties.altijari.description'),
      category: 'previous'
    },
    {
      image: hamra1,
      title: t('properties.hamra.title'),
      description: t('properties.hamra.description'),
      category: 'previous'
    },
    {
      image: hamra2,
      title: t('properties.hamra2.title'),
      description: t('properties.hamra2.description'),
      category: 'previous'
    },
    {
      image: hamra3,
      title: t('properties.hamra3.title'),
      description: t('properties.hamra3.description'),
      category: 'previous'
    },
    {
      image: salam1,
      title: t('properties.salam1.title'),
      description: t('properties.salam1.description'),
      category: 'previous'
    },
    {
      image: salam2,
      title: t('properties.salam2.title'),
      description: t('properties.salam2.description'),
      category: 'previous'
    },
    {
      image: salam3,
      title: t('properties.salam3.title'),
      description: t('properties.salam3.description'),
      category: 'previous'
    },
    {
      image: salam4,
      title: t('properties.salam4.title'),
      description: t('properties.salam4.description'),
      category: 'previous'
    },
    {
      image: salam5,
      title: t('properties.salam5.title'),
      description: t('properties.salam5.description'),
      category: 'previous'
    },

    {
      image: cartblanche1,
      title: t('properties.cartblanche.title'),
      description: t('properties.cartblanche.description'),
      category: 'construction'
    },
    {
      image: cartblanche2,
      title: t('properties.cartblanche2.title'),
      description: t('properties.cartblanche2.description'),
      category: 'construction'
    },
    {
      image: clinic1,
      title: t('properties.clinic.title'),
      description: t('properties.clinic.description'),
      category: 'construction'
    },
    {
      image: clinic2,
      title: t('properties.clinic2.title'),
      description: t('properties.clinic2.description'),
      category: 'construction'
    }
  ];

  const groupedProperties = {
    current: properties.filter(p => p.category === 'current'),
    complexes: properties.filter(p => p.category === 'complexes'),
    residential: properties.filter(p => p.category === 'residential'),
    previous: properties.filter(p => p.category === 'previous'),
    construction: properties.filter(p => p.category === 'construction')
  };

  const categoryTitles = {
    current: t('properties.categories.current'),
    complexes: t('properties.categories.complexes'),
    residential: t('properties.categories.residential'),
    previous: t('properties.categories.previous'),
    construction: t('properties.categories.construction')
  };

  return (
    <section id="properties" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          {t('properties.title')}
        </h2>

        {Object.entries(groupedProperties).map(([category, categoryProperties]) => (
          categoryProperties.length > 0 && (
            <div key={category} className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-center text-amber-400 mb-12">
                {categoryTitles[category as keyof typeof categoryTitles]}
              </h3>
              
              <div className="space-y-16">
                {categoryProperties.map((property, index) => (
                  <div
                    key={`${category}-${index}`}
                    className={`flex flex-col lg:flex-row items-center gap-12 ${
                      index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                    }`}
                  >
                    <div className="lg:w-1/2">
                      <img
                        src={property.image}
                        alt={property.title}
                        className="w-full h-96 object-cover rounded-lg shadow-2xl cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => setSelectedImage(property.image)}
                      />
                    </div>

                    <div className="lg:w-1/2 text-white">
                      <h4 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">
                        {property.title}
                      </h4>
                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        {property.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="عرض كامل"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Properties;