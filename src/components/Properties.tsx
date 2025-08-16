import * as React from 'react';
import { X, MapPin, Eye, ArrowRight, Star, Calendar, Building, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Import all your actual images
import jabriyaImg from '../assets/jabriya.jpg';

// Al Jabriya Hotel Images
import aljabria1 from '../assets/aljabriahotel/asd.jpg';
import aljabria2 from '../assets/aljabriahotel/asdd.jpg';
import aljabria3 from '../assets/aljabriahotel/casc.jpg';
import aljabria4 from '../assets/aljabriahotel/cx.jpg';
import aljabria5 from '../assets/aljabriahotel/dds.jpg';
import aljabria6 from '../assets/aljabriahotel/ew.jpg';
import aljabria7 from '../assets/aljabriahotel/fs.jpg';
import aljabria8 from '../assets/aljabriahotel/hf.jpg';
import aljabria9 from '../assets/aljabriahotel/hhf.jpg';
import aljabria10 from '../assets/aljabriahotel/jhg.jpg';
import aljabria11 from '../assets/aljabriahotel/jj.jpg';
import aljabria12 from '../assets/aljabriahotel/mb.jpg';
import aljabria13 from '../assets/aljabriahotel/re.jpg';
import aljabria14 from '../assets/aljabriahotel/Screenshot 2025-07-29 165559.png';
import aljabria15 from '../assets/aljabriahotel/Screenshot 2025-07-29 170035.png';
import aljabria16 from '../assets/aljabriahotel/Screenshot 2025-07-29 170427.png';
import aljabria17 from '../assets/aljabriahotel/vcvcv.jpg';
import aljabria18 from '../assets/aljabriahotel/vvc.jpg';
import aljabria19 from '../assets/aljabriahotel/vvcvx.jpg';
import aljabria20 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.53_9f302c48.jpg';
import aljabria21 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.53_77e9edfb.jpg';
import aljabria22 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.53_94b1c07a.jpg';
import aljabria23 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.54_4a009ce5.jpg';
import aljabria24 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.54_04b4a11c.jpg';
import aljabria25 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.54_9ed7b2c2.jpg';
import aljabria26 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.54_b65989e5.jpg';
import aljabria27 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.55_7b5872aa.jpg';
import aljabria30 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.55_df663050.jpg';
import aljabria32 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.56_7842b42a.jpg';
import aljabria33 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.56_c9a5ffee.jpg';
import aljabria34 from '../assets/aljabriahotel/WhatsApp Image 2025-08-01 at 22.31.56_ce9dc41d.jpg';

import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import five from '../assets/5.jpg';
import sex from '../assets/6.jpg';

// Alrayaan Complex - Salmiyah
import alrayaan1 from '../assets/Alrayaan Complex - Salmiyah/السالمية الريان 5.jpg';
import alrayaan2 from '../assets/Alrayaan Complex - Salmiyah/السالمية الريان 7.jpg';
import alrayaan3 from '../assets/Alrayaan Complex - Salmiyah/السالمية الريان 8.jpg';

// Bnid Al-Qar Complex
import bnidAlqar14and16 from '../assets/Bnid-Alqar/بنيد القار 14&16  .2.jpg';
import bnidAlqar16and14 from '../assets/Bnid-Alqar/بنيد القار عقار 14&16 .1.jpg';

// La Plage Complex
import lablag1 from '../assets/Lablag Complex - arabian gulf street/البلاج 2.jpg';
import lablag2 from '../assets/Lablag Complex - arabian gulf street/البلاج.jpg';

// Mahbullah Properties
import mahbullah1 from '../assets/Mahbullah 216/المهبولة 216 .1.jpg';
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
import video from '../assets/video/aljabraivideo.mp4';

// Construction and Renovation Projects
import cartblanche1 from '../assets/عقارات سابقة وحالية تم إنشائها و ترميمها/حولي كارت بلانش (2).jpg';
import cartblanche2 from '../assets/عقارات سابقة وحالية تم إنشائها و ترميمها/حولي كارت بلانش3.jpg';
import clinic1 from '../assets/عقارات سابقة وحالية تم إنشائها و ترميمها/عيادات طبية الشعب البحري (1).jpg';
import clinic2 from '../assets/عقارات سابقة وحالية تم إنشائها و ترميمها/عيادات طبية الشعب البحري.jpg';

const Properties: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  const [hoveredCard, setHoveredCard] = React.useState<string | null>(null);
  
  // Refs for scroll containers (one for each property that might need scrolling)
  const scrollRefs = React.useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Al Jabriya complete gallery
  const aljabriaGallery = [
    jabriyaImg, aljabria1, aljabria2, aljabria3, aljabria4, aljabria5, 
    aljabria6, aljabria7, aljabria8, aljabria9, aljabria10, aljabria11, 
    aljabria12, aljabria13, aljabria14, aljabria15, aljabria16, aljabria17, 
    aljabria18, aljabria19, aljabria20, aljabria21, aljabria22, aljabria23, 
    aljabria24, aljabria25, aljabria26, aljabria27,
    aljabria30,  aljabria32, aljabria33, aljabria34, 
    five, sex, three, four
  ];

  // Scroll functions
  const scrollGallery = (direction: 'left' | 'right', scrollKey: string) => {
    const container = scrollRefs.current[scrollKey];
    if (container) {
      const scrollAmount = 300; // Amount to scroll in pixels
      const currentScroll = container.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      container.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  // Grouped properties by folder/category with your actual images and original translations
  const propertyGroups = [
    {
      folderName: t("folders.current"),
      folderNameEn: "Current Properties",
      category: 'current',
      properties: [
        {
          image: jabriyaImg,
          title: t('properties.jabriya.title'),
          category: 'current',
          featured: true,
          video: video,
          gallery: aljabriaGallery,
          isHighlight: true // Flag for special treatment
        },
        // {
        //   image: btbuilding,
        //   title: t('properties.btbuilding.title'),
        //   category: 'current',
        //   gallery: [btbuilding]
        // },
        // {
        //   image: daralawad,
        //   title: t('properties.daralawad.title'),
        //   category: 'current',
        //   gallery: [daralawad]
        // },
        // {
        //   image: altijari,
        //   title: t('properties.altijari.title'),
        //   category: 'current',
        //   gallery: [altijari]
        // }
      ]
    },
    {
      folderName: t("folders.alrayaan"),
      folderNameEn: "Alrayaan Complex - Salmiyah",
      category: 'complexes',
      properties: [
        {
          image: alrayaan1,
        //  title: t('properties.alrayaan.title'),
          category: 'complexes',
          location: 'https://maps.app.goo.gl/n7ZhwdxmRNbRTKe7A',
          featured: false,
          gallery: [alrayaan1, alrayaan2, alrayaan3]
        }
      ]
    },
    {
      folderName: t("folders.bnidalqar"),
      folderNameEn: "Bnid Al-Qar Complex",
      category: 'complexes',
      properties: [
        {
          image: bnidAlqar16and14,
          //title: t('properties.bnidalqar.title'),
          category: 'complexes',
          featured: false,
          gallery: [bnidAlqar16and14, bnidAlqar14and16]
        }
      ]
    },
    {
      folderName: t("folders.laplage"),
      folderNameEn: "La Plage Complex - Arabian Gulf Street",
      category: 'complexes',
      properties: [
        {
          image: lablag1,
       //   title: t('properties.lablag.title'),
          category: 'complexes',
          location: 'https://maps.app.goo.gl/n3va1GHMwC6Q9AVdA',
          gallery: [lablag1, lablag2]
        }
      ]
    },
    // {
    //   folderName: t("folders.mahbullahComplex"),
    //   folderNameEn: "Mahbullah 216 Properties",
    //   category: 'residential',
    //   properties: [
    //     {
    //       image: mahbullah1,
    //       title: t('properties.mahbullah216.title'),
    //       category: 'residential',
    //       location: 'https://maps.app.goo.gl/L6xEWegmmwMEsVcJ8',
    //       gallery: [mahbullah1, mahbullah2]
    //     }
    //   ]
    // },
    {
      folderName: t("folders.mahbullahComplex"),
      folderNameEn: "Mahbullah Complex",
      category: 'complexes',
      properties: [
        {
          image: mahbullahComplex1,
       //   title: t('properties.mahbullahComplex.title'),
          category: 'complexes',
          location: 'https://maps.app.goo.gl/SwHvnd4NYuNvPEJ68',
          featured: false,
          gallery: [mahbullahComplex1, mahbullahComplex2]
        }
      ]
    },
    {
      folderName: t("folders.villas"),
      folderNameEn: "Residential Houses and Villas",
      category: 'residential',
      properties: [
        {
          image: villa1,
        //  title: t('properties.villa1.title'),
          category: 'residential',
          location: 'https://maps.app.goo.gl/dFJEcctsmeZQeoMQ6',
          gallery: [villa1, villa2, villa3, villa4, villa5 ,mahbullah1 ]
        }
      ]
    },
    {
      folderName: t("folders.previous"),
      folderNameEn: "Previously Managed Properties",
      category: 'previous',
      properties: [
        {
          image: hamra1,
          title: t('properties.hamra.title'),
          category: 'previous',
          gallery: [hamra1, hamra2, hamra3]
        },
        {
          image: salam1,
          title: t('properties.salam1.title'),
          category: 'previous',
          gallery: [salam1, salam2, salam3, salam4, salam5]
        }
      ]
    },
    {
      folderName: t("folders.construction"),
      folderNameEn: "Construction and Renovation Projects",
      category: 'construction',
      properties: [
        {
          image: cartblanche1,
          title: t('properties.cartblanche.title'),
          category: 'construction',
          location: 'https://maps.app.goo.gl/aEMH9R7P6fSxadVPA',
          gallery: [cartblanche1, cartblanche2]
        },
        {
          image: clinic1,
          title: t('properties.clinic.title'),
          category: 'construction',
          location: 'https://maps.app.goo.gl/4HxqXRS89skExD6P9',
          gallery: [clinic1, clinic2]
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: t('categories.all'), icon: Building },
    { id: 'current', name: t('categories.current'), icon: Star },
    { id: 'complexes', name: t('categories.complexes'), icon: Building },
    { id: 'residential', name: t('categories.residential'), icon: Building },
    { id: 'previous', name: t('categories.previous'), icon: Calendar },
    { id: 'construction', name: t('categories.construction'), icon: Building }
  ];

  const filteredGroups = activeCategory === 'all' 
    ? propertyGroups 
    : propertyGroups.filter(group => group.category === activeCategory);

  const handleLocationClick = (location: string) => {
    window.open(location, '_blank');
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      current: 'from-emerald-500 to-teal-600',
      complexes: 'from-blue-500 to-indigo-600',
      residential: 'from-purple-500 to-pink-600',
      previous: 'from-orange-500 to-red-600',
      construction: 'from-yellow-500 to-amber-600'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="properties" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-900 bg-clip-text text-transparent mb-6">
            {t('properties.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('exploreDescription')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative overflow-hidden px-6 py-3 rounded-full font-medium transition-all duration-300 border ${
                  activeCategory === category.id
                    ? 'text-white shadow-lg border-blue-600'
                    : 'bg-white/80 text-gray-700 hover:bg-gray-100 border-gray-300'
                }`}
                style={activeCategory === category.id ? { 
                  background: 'linear-gradient(to right, #004aaf, #0056cc)',
                  boxShadow: '0 4px 14px 0 rgba(0, 74, 175, 0.25)'
                } : {}}
              >
                <div className="flex items-center gap-2 relative z-10">
                  <Icon size={18} />
                  <span>{category.name}</span>
                </div>
                {activeCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-600/20 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Properties Groups */}
        <div className="space-y-16">
          {filteredGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-8">
              {/* Group Header */}
              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-blue-50 backdrop-blur-sm border border-blue-200 rounded-full px-8 py-4 mb-4">
                  <Building className="w-6 h-6" style={{ color: '#004aaf' }} />
                  <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#004aaf' }}>
                    {group.folderName}
                  </h3>
                </div>
                <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(to right, #004aaf, #0056cc)' }}></div>
              </div>

              {/* Properties Grid for this group */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {group.properties.map((property, index) => {
                  const cardId = `${group.category}-${groupIndex}-${index}`;
                  const scrollKey = `scroll-${cardId}`;
                  const isHovered = hoveredCard === cardId;
                  const isJabriya = property.isHighlight;
                  const hasMultipleImages = property.gallery && property.gallery.length > 1;
                  
                  return (
                    <div
                      key={cardId}
                      className={`group relative transition-all duration-500 ${
                        isJabriya 
                          ? 'md:col-span-2 lg:col-span-2 xl:col-span-3' // Full width for Jabriya
                          : ''
                      } ${
                        property.featured ? 'ring-2 ring-amber-500/20' : ''
                      } ${isHovered ? 'transform scale-105 shadow-2xl shadow-amber-500/10' : 'hover:transform hover:scale-102'}`}
                      onMouseEnter={() => setHoveredCard(cardId)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`bg-white backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 transition-all duration-500 hover:border-blue-400 shadow-lg ${
                        isJabriya ? 'ring-4 ring-blue-300 shadow-2xl shadow-blue-500/20' : ''
                      }`}>
                        {/* Featured Badge */}
                        {property.featured && (
                          <div className="absolute top-4 left-4 z-20">
                            <div className="flex items-center gap-1 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg" style={{ background: 'linear-gradient(to right, #004aaf, #0056cc)' }}>
                              <Star size={14} fill="currentColor" />
                              <span>{t("distinct")}</span>
                            </div>
                          </div>
                        )}

                        {/* Video Badge */}
                        {property.video && (
                          <div className="absolute top-4 right-4 z-20">
                            <div className="flex items-center gap-1 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                              <Play size={14} fill="currentColor" />
                              <span>{t('video')}</span>
                            </div>
                          </div>
                        )}

                        {/* Main Image Container - تم تطويل صورة الجابرية */}
                        <div className={`relative overflow-hidden ${isJabriya ? 'h-96 md:h-[28rem]' : 'h-80'}`}>
                          <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(property.category)} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                          
                          {/* Action Buttons Overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                            <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <button
                                onClick={() => setSelectedImage(property.image)}
                                className="bg-white/90 hover:bg-white text-black p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
                              >
                                <Eye size={20} />
                              </button>
                              {property.video && (
                                <button
                                  onClick={() => setSelectedVideo(property.video!)}
                                  className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
                                >
                                  <Play size={20} />
                                </button>
                              )}
                              {property.location && (
                                <button
                                  onClick={() => handleLocationClick(property.location!)}
                                  className="text-white p-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-110"
                                  style={{ backgroundColor: '#004aaf' }}
                                >
                                  <MapPin size={20} />
                                </button>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Category Tag */}
                          <div className="mb-3">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white" style={{ background: 'linear-gradient(to right, #004aaf, #0056cc)' }}>
                              {categories.find(c => c.id === property.category)?.name}
                            </span>
                          </div>

                          <h4 className={`font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 ${
                            isJabriya ? 'text-2xl md:text-3xl' : 'text-xl'
                          }`}>
                            {property.title}
                          </h4>

                          {/* Special description for Jabriya */}
                          {isJabriya && (
                            <p className="text-gray-600 text-lg mb-4 leading-relaxed">
{t('title.aljbria')}                            </p>
                          )}

                          {/* Gallery thumbnails with scroll controls */}
                          {hasMultipleImages && (
                            <div className="mt-4">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                  <div className="w-4 h-4 rounded-full" style={{ background: 'linear-gradient(to right, #004aaf, #0056cc)' }}></div>
                                  <span className="text-sm text-gray-600 font-medium">
                                    {t("gallery")} ({property.gallery!.length} )
                                  </span>
                                </div>
                                
                                {/* Scroll Controls - Show only for galleries with many images */}
                                {property.gallery!.length > 5 && (
                                  <div className="flex gap-2">
                                    <button
                                      onClick={() => scrollGallery('left', scrollKey)}
                                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-all duration-200 hover:scale-110"
                                      style={{ color: '#004aaf' }}
                                      aria-label="التمرير للخلف"
                                    >
                                      <ChevronLeft size={16} />
                                    </button>
                                    <button
                                      onClick={() => scrollGallery('right', scrollKey)}
                                      className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-all duration-200 hover:scale-110"
                                      style={{ color: '#004aaf' }}
                                      aria-label="التمرير للأمام"
                                    >
                                      <ChevronRight size={16} />
                                    </button>
                                  </div>
                                )}
                              </div>
                              
                              {/* Horizontal Scrollable Gallery with improved styling */}
                              <div className="relative">
                                <div 
                                  ref={(el) => scrollRefs.current[scrollKey] = el}
                                  className={`flex gap-3 overflow-x-auto scrollbar-hide pb-2 scroll-smooth ${
                                    isJabriya ? 'snap-x snap-mandatory' : ''
                                  }`} 
                                  style={{ 
                                    scrollbarWidth: 'none', 
                                    msOverflowStyle: 'none',
                                    WebkitScrollbar: { display: 'none' }
                                  }}
                                >
                                  {property.gallery!.map((galleryImg, galleryIndex) => (
                                    <div
                                      key={galleryIndex}
                                      className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden cursor-pointer group/thumb hover:ring-2 hover:ring-amber-500/50 transition-all duration-200 hover:scale-105 ${
                                        isJabriya ? 'snap-start' : ''
                                      }`}
                                     style={{ '--tw-ring-color': '#004aaf' } as React.CSSProperties}
                                      onClick={() => setSelectedImage(galleryImg)}
                                    >
                                      <img
                                        src={galleryImg}
                                        alt={`${property.title} - صورة ${galleryIndex + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-200"
                                        loading="lazy"
                                      />
                                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                                        <Eye size={14} className="text-white" />
                                      </div>
                                      {/* Image Number Badge */}
                                      <div className="absolute top-1 right-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200">
                                        {galleryIndex + 1}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                                
                                {/* Enhanced Progress Indicator for Jabriya */}
                                {isJabriya && (
                                  <div className="flex justify-center mt-3">
                                    <div className="flex items-center gap-2 bg-gray-100 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                      <span className="text-xs font-medium" style={{ color: '#004aaf' }}>
                                       {t("move")}
                                      </span>
                                      <div className="flex gap-1">
                                        {[...Array(Math.ceil(property.gallery!.length / 5))].map((_, i) => (
                                          <div
                                            key={i}
                                            className="w-1.5 h-1.5 rounded-full"
                                            style={{ backgroundColor: 'rgba(0, 74, 175, 0.3)' }}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                          <div className={`absolute inset-0 rounded-2xl ${
                            isJabriya 
                              ? 'blur-xl' 
                              : 'blur-xl'
                          }`} 
                          style={{ 
                            background: isJabriya 
                              ? 'linear-gradient(to right, rgba(0, 74, 175, 0.2), rgba(0, 86, 204, 0.2))' 
                              : 'linear-gradient(to right, rgba(0, 74, 175, 0.1), rgba(0, 86, 204, 0.1))'
                          }} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGroups.length === 0 && (
          <div className="text-center py-20">
            <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">لا توجد عقارات في هذه الفئة</h3>
            <p className="text-gray-500">جرب تصفح فئة أخرى لعرض المزيد من العقارات</p>
          </div>
        )}
      </div>

      {/* Modal for full-size image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-full animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white bg-black/70 hover:bg-black/90 rounded-full p-3 transition-all duration-200 z-10 shadow-2xl hover:scale-110"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="عرض كامل"
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Modal for video */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative max-w-7xl max-h-full animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 text-white bg-black/70 hover:bg-black/90 rounded-full p-3 transition-all duration-200 z-10 shadow-2xl hover:scale-110"
            >
              <X size={24} />
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="max-w-full max-h-full rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              متصفحك لا يدعم تشغيل الفيديو
            </video>
          </div>
        </div>
      )}

      {/* Custom CSS for hiding scrollbars */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Properties;