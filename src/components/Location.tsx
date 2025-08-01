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

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* Left Side - Building Image & Info */}
            <div className="space-y-6">
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

              {/* Location Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-amber-500/50 transition-all duration-300 group">
                  <div className="flex items-center space-x-2 mb-3">
                    <Building className="text-amber-400 group-hover:scale-110 transition-transform" size={20} />
                    <h3 className="text-lg font-semibold text-white">
                      {t('location.headquarters')}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t('contact.fullAddress')}
                  </p>
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

            {/* Right Side - Map */}
            <div className="space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 group-hover:border-blue-500/50 transition-all duration-300">
                  <div className="aspect-video rounded-xl overflow-hidden cursor-pointer relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.8234567890123!2d47.9894!3d29.3743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDIyJzI3LjUiTiA0N8KwNTknMjEuOCJF!5e0!3m2!1sen!2skw!4v1234567890123!5m2!1sen!2skw"
                      width="100%"
                      height="100%"
                      style={{ border: 0, pointerEvents: 'none' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="موقع شركة الدرة العالمية - الكويت"
                      className="transition-all duration-300 group-hover:brightness-110"
                    ></iframe>
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onClick={openInGoogleMaps}
                      title="اضغط لفتح في خرائط جوجل"
                    ></div>
                  </div>
                  
                  {/* Map Info Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-sm rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium text-sm">
                          {t('properties.coordinates')}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          29.3743°N, 47.9894°E
                        </p>
                      </div>
                      <div className="flex items-center space-x-1 text-amber-400 text-xs">
                        <span>{t('location.openInMaps')}</span>
                        <ExternalLink size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Card */}
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {t('location.description')}
                </p>
                
                {/* CTA Button */}
                <div className="text-center">
                  <button
                    onClick={openInGoogleMaps}
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25 group"
                  >
                    <MapPin size={20} className="group-hover:animate-bounce" />
                    <span>{t('location.openInMaps')}</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Address Bar */}
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/50">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-white font-semibold">{t('contact.fullAddress2')}</p>
                  <p className="text-gray-300 text-sm">{t('contact.fullAddress')}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-amber-400 cursor-pointer hover:text-amber-300 transition-colors" onClick={openInGoogleMaps}>
                <span className="text-sm font-medium">{t('location.openInMaps')}</span>
                <ExternalLink size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;