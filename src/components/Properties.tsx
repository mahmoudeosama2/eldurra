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
import building1 from '../assets/IMG_20250722_235841.jpg';
import building2 from '../assets/IMG_20250723_000830.jpg';
import building3 from '../assets/IMG_20250723_001013.jpg';

const Properties: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  const properties = [
    {
      image: jabriyaImg,
      title: t('properties.jabriya.title'),
      description: t('properties.jabriya.description'),
    },
    {
      image: one,
      title: t('properties.hotel.title'),
      description: t('properties.hotel.description'),
    },
    {
      image: two,
      title: t('properties.mall.title'),
      description: t('properties.mall.description'),
    },
    {
      image: three,
      title: t('properties.portfolio.title'),
      description: t('properties.portfolio.description'),
    },
    {
      image: four,
      title: t('properties.salmiya.title'),
      description: t('properties.salmiya.description'),
    },
    {
      image: five,
      title: t('properties.residential.title'),
      description: t('properties.residential.description'),
    },
    {
      image: sex,
      title: t('properties.luxury.title'),
      description: t('properties.luxury.description'),
    },
    {
      image: btbuilding,
      title: t('properties.btbuilding.title'),
      description: t('properties.btbuilding.description'),
    },
    {
      image: lolohyber,
      title: t('properties.lolohyber.title'),
      description: t('properties.lolohyber.description'),
    },
    {
      image: lolohyber2,
      title: t('properties.lolohyber2.title'),
      description: t('properties.lolohyber2.description'),
    },
    {
      image: lolohyber3,
      title: t('properties.lolohyber3.title'),
      description: t('properties.lolohyber3.description'),
    },
    {
      image: altijari,
      title: t('properties.altijari.title'),
      description: t('properties.altijari.description'),
    },
    {
      image: daralawad,
      title: t('properties.daralawad.title'),
      description: t('properties.daralawad.description'),
    },
    {
      image: building1,
      title: t('properties.building1.title'),
      description: t('properties.building1.description'),
    },
    {
      image: building2,
      title: t('properties.building2.title'),
      description: t('properties.building2.description'),
    },
    {
      image: building3,
      title: t('properties.building3.title'),
      description: t('properties.building3.description'),
    },
  ];

  return (
    <section id="properties" className="py-16 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          {t('properties.title')}
        </h2>

        <div className="space-y-16">
          {properties.map((property, index) => (
            <div
              key={index}
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
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-amber-400">
                  {property.title}
                </h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {property.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
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