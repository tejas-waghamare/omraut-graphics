// import React from 'react';
// import { Facebook, Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

// const Footer = ({ setCurrentPage }) => {
//   const currentYear = new Date().getFullYear();
  
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid md:grid-cols-4 gap-8 mb-8">
//           {/* Company Info */}
//           <div>
//             <div className="flex items-center space-x-2 mb-4">
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
//                 <span className="text-white font-bold text-lg">OG</span>
//               </div>
//               <span className="text-xl font-bold">OmRautGraphics</span>
//             </div>
//             <p className="text-gray-400 mb-4">
//               Professional graphic design services that bring your vision to life with creativity and precision.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white transition">
//                 <Facebook size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition">
//                 <Instagram size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition">
//                 <Twitter size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition">
//                 <Linkedin size={20} />
//               </a>
//             </div>
//           </div>
          
//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <button 
//                   onClick={() => setCurrentPage('home')}
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Home
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => setCurrentPage('gallery')}
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Portfolio
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => setCurrentPage('pricing')}
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Pricing
//                 </button>
//               </li>
//               <li>
//                 <button 
//                   onClick={() => setCurrentPage('contact')}
//                   className="text-gray-400 hover:text-white transition"
//                 >
//                   Contact
//                 </button>
//               </li>
//             </ul>
//           </div>
          
//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Services</h3>
//             <ul className="space-y-2">
//               <li><span className="text-gray-400">Logo Design</span></li>
//               <li><span className="text-gray-400">Brand Identity</span></li>
//               <li><span className="text-gray-400">Print Design</span></li>
//               <li><span className="text-gray-400">Web Graphics</span></li>
//               <li><span className="text-gray-400">Social Media Graphics</span></li>
//             </ul>
//           </div>
          
//           {/* Newsletter */}
//           <div>
//             <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
//             <p className="text-gray-400 mb-4">
//               Subscribe to our newsletter for design tips and exclusive offers.
//             </p>
//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Your email"
//                 className="px-4 py-2 bg-gray-800 text-white rounded-l-lg flex-grow outline-none"
//               />
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 rounded-r-lg font-medium hover:opacity-90 transition">
//                 <Mail size={18} />
//               </button>
//             </div>
//           </div>
//         </div>
        
//         <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
//           <p>&copy; {currentYear} OmRautGraphics. All rights reserved.</p>
//           <p className="mt-2 text-sm">Professional Graphic Design Services</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/orglogo.png'

const Footer = ({ language, setCurrentPage }) => {
  const currentYear = new Date().getFullYear();
  
  const content = language === 'marathi' ? {
    description: 'व्यावसायिक व्हिडिओ एडिटिंग, फोटो एडिटिंग, ग्राफिक डिझाईन आणि लोगो डिझाईन सेवा.',
    quickLinks: 'द्रुत लिंक',
    services: 'सेवा',
    contactUs: 'संपर्क करा',
    stayUpdated: 'अद्ययावत रहा',
    newsletterPlaceholder: 'तुमचा ईमेल',
    subscribe: 'सबस्क्राईब',
    rights: 'सर्व हक्क राखीव',
    address: 'नांदगाव पेठ,अमरावती, महाराष्ट्र',
    phone: '8717133672, 7218644962',
    email: 'info@omrautgraphics.com',
    
    quickLinksItems: [
      { id: 'home', label: 'मुखपृष्ठ' },
      { id: 'services', label: 'सेवा' },
      { id: 'pricing', label: 'किंमत' },
      { id: 'gallery', label: 'कामे' },
      { id: 'contact', label: 'संपर्क' },
    ],
    
    servicesItems: [
      'व्हिडिओ एडिटिंग',
      'फोटो एडिटिंग',
      'ग्राफिक डिझाईन',
      'लोगो डिझाईन',
      'प्रिंटिंग सेवा'
    ]
  } : {
    description: 'Professional video editing, photo editing, graphic design and logo design services.',
    quickLinks: 'Quick Links',
    services: 'Services',
    contactUs: 'Contact Us',
    stayUpdated: 'Stay Updated',
    newsletterPlaceholder: 'Your email',
    subscribe: 'Subscribe',
    rights: 'All rights reserved',
    address: 'Nandgaon Peth,Amravati, Maharashtra',
    phone: '8717133672, 7218644962',
    email: 'info@omrautgraphics.com',
    
    quickLinksItems: [
      { id: 'home', label: 'Home' },
      { id: 'services', label: 'Services' },
      { id: 'pricing', label: 'Pricing' },
      { id: 'gallery', label: 'Portfolio' },
      { id: 'contact', label: 'Contact' },
    ],
    
    servicesItems: [
      'Video Editing',
      'Photo Editing',
      'Graphic Design',
      'Logo Design',
      'Printing Service'
    ]
  };

  return (
    <footer className="bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-900 to-fuchsia-500 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl"><img src={logo} alt="" /></span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Om Raut Graphics</h1>
                <p className="text-sm text-blue-200">वा सोल्यूशन</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              {content.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">{content.quickLinks}</h3>
            <ul className="space-y-2">
              {content.quickLinksItems.map(item => (
                <li key={item.id}>
                  <button 
                    onClick={() => setCurrentPage(item.id)}
                    className="text-gray-300 hover:text-white transition hover:underline"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">{content.services}</h3>
            <ul className="space-y-2">
              {content.servicesItems.map((service, index) => (
                <li key={index} className="text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{content.contactUs}</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone size={18} className="text-blue-300 mt-1" />
                <div>
                  <p className="font-medium">{content.phone}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-300 mt-1" />
                <div>
                  <p className="font-medium">{content.email}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-blue-300 mt-1" />
                <div>
                  <p className="font-medium">{content.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-800 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} Om Raut Graphics {content.rights}
          </p>
          <p className="text-gray-400 text-sm mt-2">
            {language === 'marathi' 
              ? 'डिझाईनिंग | प्रिंटिंग | अ‍ॅडव्हर्टायझिंग' 
              : 'Designing | Printing | Advertising'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;