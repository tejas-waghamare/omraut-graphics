// import React, { useState } from 'react';
// import { Search, Filter, X, ChevronLeft, ChevronRight } from 'lucide-react';

// const Gallery = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const categories = [
//     { id: 'all', label: 'All Work' },
//     { id: 'logo', label: 'Logo Design' },
//     { id: 'branding', label: 'Brand Identity' },
//     { id: 'print', label: 'Print Design' },
//     { id: 'web', label: 'Web Graphics' },
//     { id: 'social', label: 'Social Media' },
//     { id: 'illustration', label: 'Illustration' },
//   ];
  
//   const galleryItems = [
//     { 
//       id: 1, 
//       title: 'Modern Tech Logo', 
//       category: 'logo', 
//       description: 'Clean and modern logo for a tech startup',
//       image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//     },
//     { 
//       id: 2, 
//       title: 'Coffee Brand Identity', 
//       category: 'branding', 
//       description: 'Complete brand package for artisanal coffee shop',
//       image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//     },
//     { 
//       id: 3, 
//       title: 'Business Cards Design', 
//       category: 'print', 
//       description: 'Elegant business card design for corporate client',
//       image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//     },
//     { 
//       id: 4, 
//       title: 'E-commerce Website UI', 
//       category: 'web', 
//       description: 'User interface design for online store',
//       image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//     },
//     { 
//       id: 5, 
//       title: 'Social Media Campaign', 
//       category: 'social', 
//       description: 'Series of posts for social media marketing campaign',
//       image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//     },
//     { 
//       id: 6, 
//       title: 'Character Illustration', 
//       category: 'illustration', 
//       description: 'Custom character design for children\'s book',
//       image: 'https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//     },
//     { 
//       id: 7, 
//       title: 'Minimalist Brand Logo', 
//       category: 'logo', 
//       description: 'Minimal logo design for fashion brand',
//       image: 'https://images.unsplash.com/photo-1634942536827-d75f5b7f294b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//     },
//     { 
//       id: 8, 
//       title: 'Restaurant Menu Design', 
//       category: 'print', 
//       description: 'Creative menu design for fine dining restaurant',
//       image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//     },
//     { 
//       id: 9, 
//       title: 'Mobile App Graphics', 
//       category: 'web', 
//       description: 'UI/UX design for fitness tracking mobile app',
//       image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
//     },
//   ];
  
//   const filteredItems = galleryItems.filter(item => {
//     const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
//     const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
//                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });
  
//   const openLightbox = (item, index) => {
//     setSelectedImage(item);
//     setCurrentIndex(index);
//   };
  
//   const closeLightbox = () => {
//     setSelectedImage(null);
//   };
  
//   const goToPrevious = () => {
//     const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//     setSelectedImage(filteredItems[newIndex]);
//   };
  
//   const goToNext = () => {
//     const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//     setSelectedImage(filteredItems[newIndex]);
//   };
  
//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Our <span className="text-blue-600">Portfolio</span>
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Explore our collection of creative work. Each project represents our commitment to quality and innovation in graphic design.
//           </p>
//         </div>
        
//         {/* Filters and Search */}
//         <div className="mb-8">
//           <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
//             <div className="relative flex-grow max-w-md">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search projects..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//               />
//             </div>
            
//             <div className="flex items-center text-gray-600">
//               <Filter size={18} className="mr-2" />
//               <span className="font-medium">Filter by:</span>
//             </div>
//           </div>
          
//           <div className="flex flex-wrap gap-2">
//             {categories.map(category => (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`px-4 py-2 rounded-full font-medium transition ${
//                   selectedCategory === category.id
//                     ? 'bg-blue-600 text-white'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {category.label}
//               </button>
//             ))}
//           </div>
//         </div>
        
//         {/* Gallery Grid */}
//         {filteredItems.length === 0 ? (
//           <div className="text-center py-12">
//             <p className="text-gray-500 text-lg">No projects found matching your criteria.</p>
//             <button 
//               onClick={() => {
//                 setSelectedCategory('all');
//                 setSearchTerm('');
//               }}
//               className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
//             >
//               Clear filters
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredItems.map((item, index) => (
//               <div 
//                 key={item.id} 
//                 className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//                 onClick={() => openLightbox(item, index)}
//               >
//                 <div className="relative overflow-hidden h-64">
//                   <img 
//                     src={item.image} 
//                     alt={item.title} 
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
//                     <span className="text-white font-medium">View Details</span>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <div className="flex justify-between items-start mb-2">
//                     <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
//                     <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
//                       {categories.find(c => c.id === item.category)?.label}
//                     </span>
//                   </div>
//                   <p className="text-gray-600">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
        
//         {/* Lightbox Modal */}
//         {selectedImage && (
//           <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//             <div className="relative max-w-4xl w-full">
//               <button
//                 onClick={closeLightbox}
//                 className="absolute -top-10 right-0 text-white hover:text-gray-300 z-10"
//               >
//                 <X size={24} />
//               </button>
              
//               <div className="relative">
//                 <img 
//                   src={selectedImage.image} 
//                   alt={selectedImage.title} 
//                   className="w-full max-h-[70vh] object-contain rounded-lg"
//                 />
                
//                 <button
//                   onClick={goToPrevious}
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
//                 >
//                   <ChevronLeft size={24} />
//                 </button>
                
//                 <button
//                   onClick={goToNext}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
//                 >
//                   <ChevronRight size={24} />
//                 </button>
//               </div>
              
//               <div className="bg-white p-6 rounded-b-lg">
//                 <div className="flex justify-between items-start mb-3">
//                   <h3 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h3>
//                   <span className="px-4 py-1 bg-blue-100 text-blue-600 font-semibold rounded-full">
//                     {categories.find(c => c.id === selectedImage.category)?.label}
//                   </span>
//                 </div>
//                 <p className="text-gray-600 mb-4">{selectedImage.description}</p>
//                 <p className="text-gray-500 text-sm">
//                   {currentIndex + 1} of {filteredItems.length} projects
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React, { useState } from 'react';
import { Search, Filter, X, ChevronLeft, ChevronRight, Play, Image as ImageIcon, 
         Palette, Target, Video, Printer, Megaphone } from 'lucide-react';

const Gallery = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const content = language === 'marathi' ? {
    title: 'आमची कामे',
    subtitle: 'आमच्या क्रिएटिव्ह कामांचा संग्रह',
    allWork: 'सर्व कामे',
    logoDesign: 'लोगो डिझाईन',
    branding: 'ब्रँडिंग',
    printDesign: 'प्रिंट डिझाईन',
    webGraphics: 'वेब ग्राफिक्स',
    socialMedia: 'सोशल मीडिया',
    illustration: 'इलस्ट्रेशन',
    videoEditing: 'व्हिडिओ एडिटिंग',
    photoEditing: 'फोटो एडिटिंग',
    viewDetails: 'तपशील पहा',
    noProjects: 'कोणतीही कामे सापडली नाहीत',
    clearFilters: 'फिल्टर काढा',
    
    galleryItems: [
      { 
        id: 1, 
        title: 'आधुनिक तंत्रज्ञान लोगो', 
        category: 'logo', 
        description: 'टेक स्टार्टअपसाठी स्वच्छ आणि आधुनिक लोगो',
        icon: <Target size={24} />,
        color: 'bg-blue-100 text-blue-600'
      },
      { 
        id: 2, 
        title: 'कॉफी ब्रँड आइडेंटिटी', 
        category: 'branding', 
        description: 'आर्टिसनल कॉफी शॉपसाठी संपूर्ण ब्रँड पॅकेज',
        icon: <Palette size={24} />,
        color: 'bg-purple-100 text-purple-600'
      },
      { 
        id: 3, 
        title: 'व्यवसाय कार्ड डिझाईन', 
        category: 'print', 
        description: 'कॉर्पोरेट क्लायंटसाठी इलेगंट बिझनेस कार्ड डिझाईन',
        icon: <Printer size={24} />,
        color: 'bg-green-100 text-green-600'
      },
      { 
        id: 4, 
        title: 'ई-कॉमर्स वेबसाइट UI', 
        category: 'web', 
        description: 'ऑनलाइन स्टोअरसाठी यूजर इंटरफेस डिझाईन',
        icon: <Palette size={24} />,
        color: 'bg-yellow-100 text-yellow-600'
      },
      { 
        id: 5, 
        title: 'सोशल मीडिया कॅम्पेन', 
        category: 'social', 
        description: 'सोशल मीडिया मार्केटिंग कॅम्पेनसाठी पोस्टची मालिका',
        icon: <Megaphone size={24} />,
        color: 'bg-pink-100 text-pink-600'
      },
      { 
        id: 6, 
        title: 'कॅरेक्टर इलस्ट्रेशन', 
        category: 'illustration', 
        description: 'मुलांच्या पुस्तकासाठी कस्टम कॅरेक्टर डिझाईन',
        icon: <ImageIcon size={24} />,
        color: 'bg-indigo-100 text-indigo-600'
      },
      { 
        id: 7, 
        title: 'व्हिडिओ प्रोमोशन', 
        category: 'video', 
        description: 'व्यवसायासाठी प्रोफेशनल व्हिडिओ प्रोमोशन',
        icon: <Video size={24} />,
        color: 'bg-red-100 text-red-600'
      },
      { 
        id: 8, 
        title: 'फोटो रिटचिंग', 
        category: 'photo', 
        description: 'व्यावसायिक फोटोशूटसाठी प्रतिमा संपादन',
        icon: <ImageIcon size={24} />,
        color: 'bg-teal-100 text-teal-600'
      },
      { 
        id: 9, 
        title: 'मोबाइल अ‍ॅप ग्राफिक्स', 
        category: 'web', 
        description: 'फिटनेस ट्रॅकिंग मोबाइल अ‍ॅपसाठी UI/UX डिझाईन',
        icon: <Palette size={24} />,
        color: 'bg-orange-100 text-orange-600'
      },
    ],
    
    categories: [
      { id: 'all', label: 'सर्व कामे', icon: <Filter size={16} /> },
      { id: 'logo', label: 'लोगो डिझाईन', icon: <Target size={16} /> },
      { id: 'branding', label: 'ब्रँडिंग', icon: <Palette size={16} /> },
      { id: 'print', label: 'प्रिंट डिझाईन', icon: <Printer size={16} /> },
      { id: 'web', label: 'वेब ग्राफिक्स', icon: <Palette size={16} /> },
      { id: 'social', label: 'सोशल मीडिया', icon: <Megaphone size={16} /> },
      { id: 'video', label: 'व्हिडिओ एडिटिंग', icon: <Video size={16} /> },
      { id: 'photo', label: 'फोटो एडिटिंग', icon: <ImageIcon size={16} /> },
    ]
  } : {
    title: 'Our Portfolio',
    subtitle: 'Collection of our creative works',
    allWork: 'All Work',
    logoDesign: 'Logo Design',
    branding: 'Branding',
    printDesign: 'Print Design',
    webGraphics: 'Web Graphics',
    socialMedia: 'Social Media',
    illustration: 'Illustration',
    videoEditing: 'Video Editing',
    photoEditing: 'Photo Editing',
    viewDetails: 'View Details',
    noProjects: 'No projects found',
    clearFilters: 'Clear filters',
    
    galleryItems: [
      { 
        id: 1, 
        title: 'Modern Tech Logo', 
        category: 'logo', 
        description: 'Clean and modern logo for tech startup',
        icon: <Target size={24} />,
        color: 'bg-blue-100 text-blue-600'
      },
      { 
        id: 2, 
        title: 'Coffee Brand Identity', 
        category: 'branding', 
        description: 'Complete brand package for artisanal coffee shop',
        icon: <Palette size={24} />,
        color: 'bg-purple-100 text-purple-600'
      },
      { 
        id: 3, 
        title: 'Business Cards Design', 
        category: 'print', 
        description: 'Elegant business card design for corporate client',
        icon: <Printer size={24} />,
        color: 'bg-green-100 text-green-600'
      },
      { 
        id: 4, 
        title: 'E-commerce Website UI', 
        category: 'web', 
        description: 'User interface design for online store',
        icon: <Palette size={24} />,
        color: 'bg-yellow-100 text-yellow-600'
      },
      { 
        id: 5, 
        title: 'Social Media Campaign', 
        category: 'social', 
        description: 'Series of posts for social media marketing campaign',
        icon: <Megaphone size={24} />,
        color: 'bg-pink-100 text-pink-600'
      },
      { 
        id: 6, 
        title: 'Character Illustration', 
        category: 'illustration', 
        description: 'Custom character design for children\'s book',
        icon: <ImageIcon size={24} />,
        color: 'bg-indigo-100 text-indigo-600'
      },
      { 
        id: 7, 
        title: 'Video Promotion', 
        category: 'video', 
        description: 'Professional video promotion for business',
        icon: <Video size={24} />,
        color: 'bg-red-100 text-red-600'
      },
      { 
        id: 8, 
        title: 'Photo Retouching', 
        category: 'photo', 
        description: 'Image editing for professional photoshoot',
        icon: <ImageIcon size={24} />,
        color: 'bg-teal-100 text-teal-600'
      },
      { 
        id: 9, 
        title: 'Mobile App Graphics', 
        category: 'web', 
        description: 'UI/UX design for fitness tracking mobile app',
        icon: <Palette size={24} />,
        color: 'bg-orange-100 text-orange-600'
      },
    ],
    
    categories: [
      { id: 'all', label: 'All Work', icon: <Filter size={16} /> },
      { id: 'logo', label: 'Logo Design', icon: <Target size={16} /> },
      { id: 'branding', label: 'Branding', icon: <Palette size={16} /> },
      { id: 'print', label: 'Print Design', icon: <Printer size={16} /> },
      { id: 'web', label: 'Web Graphics', icon: <Palette size={16} /> },
      { id: 'social', label: 'Social Media', icon: <Megaphone size={16} /> },
      { id: 'video', label: 'Video Editing', icon: <Video size={16} /> },
      { id: 'photo', label: 'Photo Editing', icon: <ImageIcon size={16} /> },
    ]
  };

  const filteredItems = content.galleryItems.filter(item => {
    return selectedCategory === 'all' || item.category === selectedCategory;
  });
  
  const openLightbox = (item, index) => {
    setSelectedImage(item);
    setCurrentIndex(index);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };
  
  const goToNext = () => {
    const newIndex = currentIndex === filteredItems.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  // Generate placeholder images based on category
  const getPlaceholderImage = (category) => {
    const baseUrl = 'https://images.unsplash.com/photo-';
    const images = {
      logo: '1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      branding: '1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      print: '1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      web: '1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      social: '1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      illustration: '1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      video: '1593351417175-1c1d5c6b3d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      photo: '1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    };
    return baseUrl + (images[category] || images.logo);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {content.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>
        
        {/* Categories Filter */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center text-gray-600">
              <Filter size={20} className="mr-2" />
              <span className="font-medium">
                {language === 'marathi' ? 'श्रेणीनुसार फिल्टर करा' : 'Filter by category'}
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {content.categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Gallery Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">{content.noProjects}</p>
            <button 
              onClick={() => setSelectedCategory('all')}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              {content.clearFilters}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                onClick={() => openLightbox(item, index)}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={getPlaceholderImage(item.category)} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white font-medium">{content.viewDetails}</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 rounded-full ${item.color} text-sm font-semibold`}>
                      <div className="flex items-center space-x-1">
                        {item.icon}
                        <span>{content.categories.find(c => c.id === item.category)?.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
              >
                <X size={28} />
              </button>
              
              <div className="relative">
                <img 
                  src={getPlaceholderImage(selectedImage.category)} 
                  alt={selectedImage.title} 
                  className="w-full max-h-[60vh] object-cover rounded-lg"
                />
                
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              <div className="bg-white p-6 rounded-b-lg">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-800">{selectedImage.title}</h3>
                  <div className={`px-4 py-1 rounded-full ${selectedImage.color} font-semibold`}>
                    {content.categories.find(c => c.id === selectedImage.category)?.label}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{selectedImage.description}</p>
                <p className="text-gray-500 text-sm">
                  {currentIndex + 1} {language === 'marathi' ? 'पैकी' : 'of'} {filteredItems.length} {language === 'marathi' ? 'कामे' : 'projects'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;