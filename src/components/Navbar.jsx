// import React from 'react';
// import { Menu, X } from 'lucide-react';

// const Navbar = ({ currentPage, setCurrentPage }) => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
//   const navItems = [
//     { id: 'home', label: 'Home' },
//     { id: 'gallery', label: 'Gallery' },
//     { id: 'pricing', label: 'Pricing' },
//     { id: 'contact', label: 'Contact' },
//   ];
  
//   return (
//     <nav className="fixed top-0 w-full bg-white shadow-md z-50">
//       <div className="container mx-auto px-4 py-3">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-lg">OG</span>
//             </div>
//             <span className="text-xl font-bold text-gray-800">OmRautGraphics</span>
//           </div>
          
//           {/* Desktop Navigation */}
//           <div className="hidden md:flex space-x-8">
//             {navItems.map(item => (
//               <button
//                 key={item.id}
//                 onClick={() => setCurrentPage(item.id)}
//                 className={`font-medium transition-colors ${
//                   currentPage === item.id 
//                     ? 'text-blue-600 border-b-2 border-blue-600' 
//                     : 'text-gray-600 hover:text-blue-600'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
          
//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
        
//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className="md:hidden mt-4 pb-4">
//             {navItems.map(item => (
//               <button
//                 key={item.id}
//                 onClick={() => {
//                   setCurrentPage(item.id);
//                   setIsMenuOpen(false);
//                 }}
//                 className={`block w-full text-left py-2 px-4 font-medium ${
//                   currentPage === item.id 
//                     ? 'bg-blue-50 text-blue-600 rounded-lg' 
//                     : 'text-gray-600 hover:bg-gray-50 rounded-lg'
//                 }`}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Menu, X, Video, Camera, Palette, Sparkles, Globe } from 'lucide-react';
import logo from '../assets/orglogo.png'

const Navbar = ({ currentPage, setCurrentPage, language, setLanguage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const navItems = language === 'marathi' ? [
    { id: 'home', label: 'मुखपृष्ठ', icon: <Sparkles size={18} /> },
    { id: 'services', label: 'सेवा', icon: <Palette size={18} /> },
    { id: 'pricing', label: 'किंमत', icon: <Video size={18} /> },
    { id: 'gallery', label: 'कामे', icon: <Camera size={18} /> },
    { id: 'contact', label: 'संपर्क', icon: <Sparkles size={18} /> },
  ] : [
    { id: 'home', label: 'Home', icon: <Sparkles size={18} /> },
    { id: 'services', label: 'Services', icon: <Palette size={18} /> },
    { id: 'pricing', label: 'Pricing', icon: <Video size={18} /> },
    { id: 'gallery', label: 'Portfolio', icon: <Camera size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Sparkles size={18} /> },
  ];
  
  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-sky-700 to-purple-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-black to-orange-400 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold p-1 text-xl"><img src={logo} alt="" /></span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Om Raut</h1>
              <p className="text-xs text-blue-200">Graphics</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'marathi' ? 'english' : 'marathi')}
              className="flex items-center space-x-2 px-3 py-1 bg-pink-800 rounded-lg hover:bg-orange-600 transition"
            >
              <Globe size={16} />
              <span className="font-medium">
                {language === 'marathi' ? 'EN' : 'मरा'}
              </span>
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 font-medium transition-all ${
                    currentPage === item.id 
                      ? 'text-yellow-300 border-b-2 border-yellow-300' 
                      : 'text-white hover:text-yellow-200'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-blue-800 rounded-lg p-4">
            <div className="mb-4">
              <button
                onClick={() => setLanguage(language === 'marathi' ? 'english' : 'marathi')}
                className="flex items-center justify-center space-x-2 w-full py-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition"
              >
                <Globe size={16} />
                <span className="font-medium">
                  {language === 'marathi' ? 'Switch to English' : 'मराठीत बदला'}
                </span>
              </button>
            </div>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center space-x-3 w-full text-left py-3 px-4 font-medium rounded-lg mb-1 ${
                  currentPage === item.id 
                    ? 'bg-blue-700 text-yellow-300' 
                    : 'text-white hover:bg-blue-600'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;