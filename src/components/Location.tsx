import * as React from 'react';
import { MapPin, ExternalLink, Building, Navigation } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import btbuilding from '../assets/blue.jpg';

const Location: React.FC = () => {
  const { t } = useLanguage();
  
  const openInGoogleMaps = () => {
    const coordinates = "29.3743,47.9894";
    const placeName = encodeURIComponent("شركة الدرة العالمية - الكويت - المرقاب - شارع خالد بن الوليد - برج مزايا 1");
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates}&query_place_id=${placeName}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <section id="location" className="py-16 bg-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-blue-500/20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4 bg-slate-800/50 backdrop-blur-sm rounded-full px-8 py-4 border border-amber-500/20">
              <MapPin className="text-amber-400 animate-pulse" size={32} />
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                {t('location.title')}
              </h2>
            </div>
          </div>

          {/* Main Content - Centered */}
          <div className="flex justify-center mb-8">
            <div className="max-w-2xl w-full space-y-6">
              {/* Building Image Card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 group-hover:border-amber-500/50 transition-all duration-300">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={btbuilding} 
                      alt="مبنى شركة الدرة العالمية"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center space-x-2 text-white">
                        <Building className="text-amber-400" size={20} />
                        <span className="font-semibold text-lg">{t('footer.building')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Info Cards - Centered */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-2 mb-3">
                    <Building className="text-amber-400 group-hover:scale-110 transition-transform" size={20} />
                    <h3 className="text-lg font-semibold text-white">
                      {t('location.headquarters')}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {t('contact.fullAddress')}
                  </p>
                  <button
                    onClick={openInGoogleMaps}
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 group"
                  >
                    <MapPin size={20} className="group-hover:animate-bounce" />
                    <span>{t('location.openInMaps')}</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-2 mb-3">
                    <Navigation className="text-amber-400 group-hover:scale-110 transition-transform" size={20} />
                    <h3 className="text-lg font-semibold text-white">
                      {t('location.projects')}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t('location.projectsText')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Address Bar */}
         
        </div>
      </div>
    </section>
  );
};

export default Location;