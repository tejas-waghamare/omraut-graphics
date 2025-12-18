// import React from 'react';
// import { Video, Image as ImageIcon, Palette, Target, Printer, Megaphone, 
//          FileText, Package, Headphones, Zap, Shield, Clock } from 'lucide-react';

// const Services = ({ language }) => {
//   const content = language === 'marathi' ? {
//     title: 'आमच्या सेवा',
//     subtitle: 'डिझाईनिंग, प्रिंटिंग आणि अ‍ॅडव्हर्टायझिंगच्या सर्व सेवा',
//     mainServices: 'मुख्य सेवा',
//     additionalServices: 'अतिरिक्त सेवा',
//     whyChooseUs: 'आम्हाला का निवडा',
    
//     services: [
//       {
//         icon: <Video size={28} />,
//         title: 'व्हिडिओ एडिटिंग',
//         description: 'व्यावसायिक व्हिडिओ संपादन, व्हिडिओ प्रोडक्शन, मोशन ग्राफिक्स',
//         features: ['व्हिडिओ प्रोमोशन', 'वेडिंग व्हिडिओ', 'इव्हेंट व्हिडिओ', 'यूट्यूब व्हिडिओ']
//       },
//       {
//         icon: <ImageIcon size={28} />,
//         title: 'फोटो एडिटिंग',
//         description: 'प्रतिमा संपादन, रंगदुरुस्ती, बॅकग्राउंड रिमूव्हल, फोटो रिस्टोरेशन',
//         features: ['व्यावसायिक फोटोशूट', 'प्रोडक्ट फोटोग्राफी', 'पोर्ट्रेट रिटचिंग', 'कलर करेक्शन']
//       },
//       {
//         icon: <Palette size={28} />,
//         title: 'ग्राफिक डिझाईन',
//         description: 'क्रिएटिव्ह ग्राफिक डिझाईन, ब्रँडिंग, मार्केटिंग मटेरियल',
//         features: ['ब्रँड आइडेंटिटी', 'सोशल मीडिया पोस्ट', 'प्रेझेंटेशन', 'ब्रोशर डिझाईन']
//       },
//       {
//         icon: <Target size={28} />,
//         title: 'लोगो डिझाईन',
//         description: 'युनिक आणि मेमोरेबल लोगो डिझाईन तुमच्या ब्रँडसाठी',
//         features: ['कॉर्पोरेट लोगो', 'ब्रँड लोगो', 'सिम्पल लोगो', 'क्रिएटिव्ह लोगो']
//       },
//       {
//         icon: <Printer size={28} />,
//         title: 'प्रिंटिंग सेवा',
//         description: 'उच्च दर्जाची प्रिंटिंग सेवा सर्व प्रकारच्या मटेरियलवर',
//         features: ['विझिटिंग कार्ड', 'ब्रोशर', 'बॅनर', 'फ्लेक्स प्रिंटिंग']
//       },
//       {
//         icon: <Megaphone size={28} />,
//         title: 'अ‍ॅडव्हर्टायझिंग',
//         description: 'डिजिटल आणि प्रिंट मीडियासाठी अ‍ॅडव्हर्टायझिंग सोल्यूशन',
//         features: ['डिजिटल मार्केटिंग', 'प्रिंट मीडिया', 'सोशल मीडिया अ‍ॅड्स', 'कॅम्पेन डिझाईन']
//       }
//     ],
    
//     additional: [
//       {
//         icon: <FileText size={20} />,
//         text: 'विझिटिंग कार्ड डिझाईन'
//       },
//       {
//         icon: <Package size={20} />,
//         text: 'पॅकेजिंग डिझाईन'
//       },
//       {
//         icon: <Printer size={20} />,
//         text: 'बिलबोर्ड डिझाईन'
//       },
//       {
//         icon: <Megaphone size={20} />,
//         text: 'होर्डिंग डिझाईन'
//       },
//       {
//         icon: <FileText size={20} />,
//         text: 'लेटरहेड डिझाईन'
//       }
//     ],
    
//     whyUs: [
//       {
//         icon: <Headphones size={24} />,
//         title: '24/7 समर्थन',
//         description: 'तुम्हाला कोणत्याही वेळी मदत उपलब्ध'
//       },
//       {
//         icon: <Zap size={24} />,
//         title: 'जलद वितरण',
//         description: 'कमी वेळेत उच्च दर्जाचे काम'
//       },
//       {
//         icon: <Shield size={24} />,
//         title: 'गुणवत्ता हमी',
//         description: 'प्रत्येक प्रकल्पासाठी गुणवत्तेची हमी'
//       },
//       {
//         icon: <Clock size={24} />,
//         title: 'वेळेचे पालन',
//         description: 'निश्चित केलेल्या वेळेत काम पूर्ण'
//       }
//     ]
//   } : {
//     title: 'Our Services',
//     subtitle: 'All services for designing, printing and advertising',
//     mainServices: 'Main Services',
//     additionalServices: 'Additional Services',
//     whyChooseUs: 'Why Choose Us',
    
//     services: [
//       {
//         icon: <Video size={28} />,
//         title: 'Video Editing',
//         description: 'Professional video editing, video production, motion graphics',
//         features: ['Video Promotion', 'Wedding Video', 'Event Video', 'YouTube Video']
//       },
//       {
//         icon: <ImageIcon size={28} />,
//         title: 'Photo Editing',
//         description: 'Image editing, color correction, background removal, photo restoration',
//         features: ['Professional Photoshoot', 'Product Photography', 'Portrait Retouching', 'Color Correction']
//       },
//       {
//         icon: <Palette size={28} />,
//         title: 'Graphic Design',
//         description: 'Creative graphic design, branding, marketing materials',
//         features: ['Brand Identity', 'Social Media Posts', 'Presentations', 'Brochure Design']
//       },
//       {
//         icon: <Target size={28} />,
//         title: 'Logo Design',
//         description: 'Unique and memorable logo design for your brand',
//         features: ['Corporate Logo', 'Brand Logo', 'Simple Logo', 'Creative Logo']
//       },
//       {
//         icon: <Printer size={28} />,
//         title: 'Printing Services',
//         description: 'High quality printing service on all types of materials',
//         features: ['Visiting Cards', 'Brochures', 'Banners', 'Flex Printing']
//       },
//       {
//         icon: <Megaphone size={28} />,
//         title: 'Advertising',
//         description: 'Advertising solutions for digital and print media',
//         features: ['Digital Marketing', 'Print Media', 'Social Media Ads', 'Campaign Design']
//       }
//     ],
    
//     additional: [
//       {
//         icon: <FileText size={20} />,
//         text: 'Visiting Card Design'
//       },
//       {
//         icon: <Package size={20} />,
//         text: 'Packaging Design'
//       },
//       {
//         icon: <Printer size={20} />,
//         text: 'Billboard Design'
//       },
//       {
//         icon: <Megaphone size={20} />,
//         text: 'Hoarding Design'
//       },
//       {
//         icon: <FileText size={20} />,
//         text: 'Letterhead Design'
//       }
//     ],
    
//     whyUs: [
//       {
//         icon: <Headphones size={24} />,
//         title: '24/7 Support',
//         description: 'Help available anytime you need'
//       },
//       {
//         icon: <Zap size={24} />,
//         title: 'Fast Delivery',
//         description: 'High quality work in less time'
//       },
//       {
//         icon: <Shield size={24} />,
//         title: 'Quality Guarantee',
//         description: 'Quality guarantee for every project'
//       },
//       {
//         icon: <Clock size={24} />,
//         title: 'On Time Delivery',
//         description: 'Work completed within agreed timeframe'
//       }
//     ]
//   };

//   return (
//     <div className="min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             {content.title}
//           </h1>
//           <p className="text-gray-600 text-lg max-w-3xl mx-auto">
//             {content.subtitle}
//           </p>
//         </div>

//         {/* Main Services */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
//             {content.mainServices}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {content.services.map((service, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow"
//               >
//                 <div className="p-6">
//                   <div className="text-blue-600 mb-4">{service.icon}</div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
//                   <p className="text-gray-600 mb-4">{service.description}</p>
//                   <div className="space-y-2">
//                     {service.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center text-gray-700">
//                         <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
//                         {feature}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8 mb-16">
//           {/* Additional Services */}
//           <div className="lg:col-span-2">
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">
//               {content.additionalServices}
//             </h2>
//             <div className="bg-white rounded-xl shadow-lg p-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 {content.additional.map((item, index) => (
//                   <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
//                     <div className="text-blue-600">{item.icon}</div>
//                     <span className="text-gray-700 font-medium">{item.text}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Why Choose Us */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-800 mb-6">
//               {content.whyChooseUs}
//             </h2>
//             <div className="space-y-4">
//               {content.whyUs.map((item, index) => (
//                 <div key={index} className="bg-white p-5 rounded-xl shadow-md">
//                   <div className="flex items-start space-x-4">
//                     <div className="text-blue-600 mt-1">{item.icon}</div>
//                     <div>
//                       <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
//                       <p className="text-gray-600 text-sm">{item.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import { 
  Video, Image as ImageIcon, Palette, Target, Printer, Megaphone, 
  FileText, Package, Headphones, Zap, Shield, Clock, 
  Calendar, Layers, Gift, CreditCard, Award, BookOpen
} from 'lucide-react';

const Services = ({ language }) => {
  const content = language === 'marathi' ? {
    title: 'आमच्या सेवा',
    subtitle: 'डिझाईनिंग, प्रिंटिंग आणि अ‍ॅडव्हर्टायझिंगच्या सर्व सेवा',
    mainServices: 'मुख्य सेवा',
    additionalServices: 'अतिरिक्त सेवा',
    whyChooseUs: 'आम्हाला का निवडा',
    
    services: [
      {
        icon: <Target size={28} />,
        title: 'सोशल मीडिया डिझाईन',
        description: 'सोशल मीडियावर आकर्षक डिझाईन आणि प्रोमोशन',
        features: ['वाढदिवस डिझाईन', 'सण-उत्सव डिझाईन', 'राजकीय डिझाईन', 'जयंती- पुण्यतिथी डिझाईन','व्यवसाय डिझाईन']
      },
      {
        icon: <Calendar size={28} />,
        title: 'निमंत्रण डिझाईन',
        description: 'वेडिंग, पार्टी, कार्यक्रम यासाठी आकर्षक निमंत्रण डिझाईन',
        features: ['लग्न निमंत्रण', 'जन्मदिन निमंत्रण', 'कार्यक्रम निमंत्रण', 'व्यवसाय निमंत्रण']
      },
      {
        icon: <Target size={28} />,
        title: 'लोगो डिझाईन',
        description: 'युनिक आणि मेमोरेबल लोगो डिझाईन तुमच्या ब्रँडसाठी',
        features: ['कॉर्पोरेट लोगो', 'ब्रँड लोगो', 'सिम्पल लोगो', 'क्रिएटिव्ह लोगो']
      },
      {
        icon: <Printer size={28} />,
        title: 'प्रिंटिंग सेवा',
        description: 'उच्च दर्जाची प्रिंटिंग सेवा सर्व प्रकारच्या मटेरियलवर',
        features: ['विझिटिंग कार्ड', 'ब्रोशर', 'बॅनर', 'फ्लेक्स प्रिंटिंग']
      },
      {
        icon: <Award size={28} />,
        title: 'वेबसाइट डिझाइन',
        description: 'व्यावसायिक वेबसाइट डिझाईन आणि विकास सेवा',
        features: ['वेबसाइट डिझाईन', 'वेबसाइट होस्टिंग', 'वेबसाइट हाताळणी']
      },
      {
        icon: <BookOpen size={28} />,
        title: 'बिल बुक डिझाईन',
        description: 'व्यावसायिक बिल बुक, रिसीप्ट बुक आणि अकाउंटिंग फॉर्म्स',
        features: ['बिल बुक', 'रिसीप्ट बुक', 'इनव्हॉइस', 'अकाउंटिंग फॉर्म्स']
      },
      {
        icon: <Video size={28} />,
        title: 'व्हिडिओ एडिटिंग',
        description: 'व्यावसायिक व्हिडिओ संपादन, व्हिडिओ प्रोडक्शन, मोशन ग्राफिक्स',
        features: ['व्हिडिओ प्रोमोशन', 'वेडिंग व्हिडिओ', 'इव्हेंट व्हिडिओ', 'यूट्यूब व्हिडिओ']
      },
      {
        icon: <Palette size={28} />,
        title: 'ग्राफिक डिझाईन',
        description: 'क्रिएटिव्ह ग्राफिक डिझाईन, ब्रँडिंग, मार्केटिंग मटेरियल',
        features: ['ब्रँड आइडेंटिटी', 'सोशल मीडिया पोस्ट', 'प्रेझेंटेशन', 'ब्रोशर डिझाईन']
      },
      {
        icon: <Megaphone size={28} />,
        title: 'अ‍ॅडव्हर्टायझिंग',
        description: 'डिजिटल आणि प्रिंट मीडियासाठी अ‍ॅडव्हर्टायझिंग सोल्यूशन',
        features: ['डिजिटल मार्केटिंग', 'प्रिंट मीडिया', 'निवडणूक व्यवस्थापन', 'कॅम्पेन डिझाईन']
      }
    ],
    
    additional: [
      {
        icon: <FileText size={20} />,
        text: 'विझिटिंग कार्ड डिझाईन'
      },
      {
        icon: <Package size={20} />,
        text: 'पॅकेजिंग डिझाईन'
      },
      {
        icon: <Printer size={20} />,
        text: 'बिलबोर्ड डिझाईन'
      },
      {
        icon: <Megaphone size={20} />,
        text: 'होर्डिंग डिझाईन'
      },
      {
        icon: <FileText size={20} />,
        text: 'लेटरहेड डिझाईन'
      },
      {
        icon: <Calendar size={20} />,
        text: 'कॅलेंडर डिझाईन'
      },
      {
        icon: <CreditCard size={20} />,
        text: 'बिझनेस कार्ड डिझाईन'
      },
      {
        icon: <BookOpen size={20} />,
        text: 'कॅटलॉग डिझाईन'
      },
      {
        icon: <Layers size={20} />,
        text: 'मेनू कार्ड डिझाईन'
      },
      {
        icon: <Gift size={20} />,
        text: 'गिफ्ट बॉक्स डिझाईन'
      }
    ],
    
    whyUs: [
      {
        icon: <Headphones size={24} />,
        title: '24/7 समर्थन',
        description: 'तुम्हाला कोणत्याही वेळी मदत उपलब्ध'
      },
      {
        icon: <Zap size={24} />,
        title: 'जलद वितरण',
        description: 'कमी वेळेत उच्च दर्जाचे काम'
      },
      {
        icon: <Shield size={24} />,
        title: 'गुणवत्ता हमी',
        description: 'प्रत्येक प्रकल्पासाठी गुणवत्तेची हमी'
      },
      {
        icon: <Clock size={24} />,
        title: 'वेळेचे पालन',
        description: 'निश्चित केलेल्या वेळेत काम पूर्ण'
      },
      {
        icon: <Award size={24} />,
        title: 'अनुभवी टीम',
        description: 'वर्षांच्या अनुभवासह व्यावसायिक डिझायनर'
      },
      {
        icon: <Palette size={24} />,
        title: 'क्रिएटिव्ह डिझाईन',
        description: 'तुमच्या गरजेनुसार युनिक आणि इनोव्हेटिव्ह डिझाईन'
      }
    ]
  } : {
    title: 'Our Services',
    subtitle: 'All services for designing, printing and advertising',
    mainServices: 'Main Services',
    additionalServices: 'Additional Services',
    whyChooseUs: 'Why Choose Us',
    
    services: [
      {
        icon: <Target size={28} />,
        title: 'Social Media Design',
        description: 'Attractive design and promotion on social media',
        features: ['Birthday Design', 'Festival Design', 'Political Design', 'Anniversary Design','Business Design']
      },
      {
        icon: <Calendar size={28} />,
        title: 'Invitation Design',
        description: 'Attractive invitation designs for weddings, parties and events',
        features: ['Wedding Invitations', 'Birthday Invitations', 'Event Invitations', 'Business Invitations']
      },
      {
        icon: <Target size={28} />,
        title: 'Logo Design',
        description: 'Unique and memorable logo design for your brand',
        features: ['Corporate Logo', 'Brand Logo', 'Simple Logo', 'Creative Logo']
      },
      {
        icon: <Printer size={28} />,
        title: 'Printing Services',
        description: 'High quality printing service on all types of materials',
        features: ['Visiting Cards', 'Brochures', 'Banners', 'Flex Printing']
      },
      {
        icon: <Award size={28} />,
        title: 'Website Design',
        description: 'Professional website design and development service',
        features: ['Website Design', 'Website Hosting', 'Website Maintenance']
      },
      {
        icon: <BookOpen size={28} />,
        title: 'Bill Book Design',
        description: 'Professional bill books, receipt books and accounting forms',
        features: ['Bill Books', 'Receipt Books', 'Invoices', 'Accounting Forms']
      },
      {
        icon: <Video size={28} />,
        title: 'Video Editing',
        description: 'Professional video editing, video production, motion graphics',
        features: ['Video Promotion', 'Wedding Video', 'Event Video', 'YouTube Video']
      },
      {
        icon: <Palette size={28} />,
        title: 'Graphic Design',
        description: 'Creative graphic design, branding, marketing materials',
        features: ['Brand Identity', 'Social Media Posts', 'Presentations', 'Brochure Design']
      },
      {
        icon: <Megaphone size={28} />,
        title: 'Advertising',
        description: 'Advertising solutions for digital and print media',
        features: ['Digital Marketing', 'Print Media', 'Election Management', 'Campaign Design']
      }
    ],
    
    additional: [
      {
        icon: <FileText size={20} />,
        text: 'Visiting Card Design'
      },
      {
        icon: <Package size={20} />,
        text: 'Packaging Design'
      },
      {
        icon: <Printer size={20} />,
        text: 'Billboard Design'
      },
      {
        icon: <Megaphone size={20} />,
        text: 'Hoarding Design'
      },
      {
        icon: <FileText size={20} />,
        text: 'Letterhead Design'
      },
      {
        icon: <Calendar size={20} />,
        text: 'Calendar Design'
      },
      {
        icon: <CreditCard size={20} />,
        text: 'Business Card Design'
      },
      {
        icon: <BookOpen size={20} />,
        text: 'Catalog Design'
      },
      {
        icon: <Layers size={20} />,
        text: 'Menu Card Design'
      },
      {
        icon: <Gift size={20} />,
        text: 'Gift Box Design'
      }
    ],
    
    whyUs: [
      {
        icon: <Headphones size={24} />,
        title: '24/7 Support',
        description: 'Help available anytime you need'
      },
      {
        icon: <Zap size={24} />,
        title: 'Fast Delivery',
        description: 'High quality work in less time'
      },
      {
        icon: <Shield size={24} />,
        title: 'Quality Guarantee',
        description: 'Quality guarantee for every project'
      },
      {
        icon: <Clock size={24} />,
        title: 'On Time Delivery',
        description: 'Work completed within agreed timeframe'
      },
      {
        icon: <Award size={24} />,
        title: 'Experienced Team',
        description: 'Professional designers with years of experience'
      },
      {
        icon: <Palette size={24} />,
        title: 'Creative Design',
        description: 'Unique and innovative designs as per your needs'
      }
    ]
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {content.title}
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {content.subtitle}
          </p>
        </div>

        {/* Main Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {content.mainServices}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group"
              >
                <div className="p-6">
                  <div className="text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Additional Services */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {content.additionalServices}
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {content.additional.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-4 hover:bg-blue-50 rounded-lg transition-colors group cursor-pointer"
                  >
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              {content.whyChooseUs}
            </h2>
            <div className="space-y-4">
              {content.whyUs.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-500"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Summary Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8 mb-8">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'marathi' 
                ? 'संपूर्ण डिझाईन आणि प्रिंटिंग सोल्यूशन' 
                : 'Complete Design & Printing Solutions'}
            </h2>
            <p className="text-blue-100 max-w-3xl mx-auto mb-6">
              {language === 'marathi'
                ? 'आम्ही लहान ते मोठे सर्व प्रकारचे डिझाईन आणि प्रिंटिंग काम स्वीकारतो. तुमच्या गरजेनुसार कस्टम सोल्यूशन्स.'
                : 'We take all types of design and printing work from small to large. Custom solutions as per your needs.'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-blue-200">{language === 'marathi' ? 'कामे पूर्ण' : 'Projects Done'}</div>
              </div>
              <div>
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm text-blue-200">{language === 'marathi' ? 'क्लायंट समाधान' : 'Client Satisfaction'}</div>
              </div>
              <div>
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-blue-200">{language === 'marathi' ? 'सेवा' : 'Services'}</div>
              </div>
              <div>
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm text-blue-200">{language === 'marathi' ? 'वर्ष अनुभव' : 'Years Experience'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;