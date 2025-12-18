

// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, User, Briefcase, MessageCircle } from 'lucide-react';

// const Contact = ({ language }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     service: '',
//     message: ''
//   });
  
//   const [isSubmitted, setIsSubmitted] = useState(false);
  
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Format the message for WhatsApp
//     const whatsappMessage = `
// *नवीन ग्राहक संदेश - OmRautGraphics*

// *नाव:* ${formData.name}
// *ईमेल:* ${formData.email}
// *फोन:* ${formData.phone}
// *सेवा:* ${formData.service}
// *संदेश:*
// ${formData.message}

// _हा संदेश OmRautGraphics वेबसाइटवरून पाठवला आहे._
//     `.trim();
    
//     // Encode the message for URL
//     const encodedMessage = encodeURIComponent(whatsappMessage);
    
//     // WhatsApp number
//     const whatsappNumber = '7218644962';
    
//     // Create WhatsApp URL
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
//     // Open WhatsApp in new tab
//     window.open(whatsappURL, '_blank');
    
//     // Show success message
//     setIsSubmitted(true);
    
//     // Reset form after showing success message
//     setTimeout(() => {
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         service: '',
//         message: ''
//       });
//       setIsSubmitted(false);
//     }, 5000);
//   };
  
//   const content = language === 'marathi' ? {
//     title: 'आमच्याशी संपर्क साधा',
//     subtitle: 'तुमच्या प्रकल्पाबद्दल चर्चा करा. आम्ही तुम्हाला सर्वोत्कृष्ट उपाय देऊ.',
//     contactInfo: 'संपर्क माहिती',
//     sendMessage: 'संदेश पाठवा',
//     name: 'नाव *',
//     email: 'ईमेल *',
//     phone: 'फोन नंबर',
//     service: 'सेवा *',
//     message: 'संदेश *',
//     placeholderName: 'तुमचे नाव',
//     placeholderEmail: 'तुमचा ईमेल',
//     placeholderPhone: 'तुमचा फोन नंबर',
//     placeholderMessage: 'तुमचा संदेश...',
//     submitButton: 'WhatsApp वर संदेश पाठवा',
//     successTitle: 'WhatsApp उघडला!',
//     successMessage: 'आभार! आता तुमचा संदेश WhatsApp वर पाठवण्यासाठी तयार आहे.',
//     whatsappNote: 'कृपया तुमचा संदेश WhatsApp वर पाठवण्यासाठी "Send" बटण दाबा.',
//     whyChooseUs: 'आम्हाला का निवडा',
    
//     services: [
//       'व्हिडिओ एडिटिंग',
//       'फोटो एडिटिंग',
//       'ग्राफिक डिझाईन',
//       'लोगो डिझाईन',
//       'प्रिंटिंग सेवा',
//       'अ‍ॅडव्हर्टायझिंग',
//       'इतर'
//     ],
    
//     contactDetails: [
//       {
//         icon: <Phone size={24} />,
//         title: 'फोन',
//         details: '7218644962 , 8767133672',
//         subtitle: 'सोम-शनि, सकाळी 9 - संध्याकाळी 6',
//         whatsapp: true
//       },
//       {
//         icon: <Mail size={24} />,
//         title: 'ईमेल',
//         details: 'info@omrautgraphics.com',
//         subtitle: '24 तासांत प्रतिसाद'
//       },
//       {
//         icon: <MapPin size={24} />,
//         title: 'ठिकाण',
//         details: ' अमरावती, महाराष्ट्र',
//         subtitle: 'सर्व ठिकाणी सेवा उपलब्ध'
//       }
//     ],
    
//     whyUsPoints: [
//       'व्यावसायिक आणि क्रिएटिव्ह डिझाईन',
//       'वेळेवर वितरण',
//       'अमर्यादित बदल',
//       'ग्राहक समाधानाची हमी'
//     ]
//   } : {
//     title: 'Contact Us',
//     subtitle: 'Discuss your project. We will provide you with the best solution.',
//     contactInfo: 'Contact Information',
//     sendMessage: 'Send Message',
//     name: 'Name *',
//     email: 'Email *',
//     phone: 'Phone Number',
//     service: 'Service *',
//     message: 'Message *',
//     placeholderName: 'Your Name',
//     placeholderEmail: 'Your Email',
//     placeholderPhone: 'Your Phone Number',
//     placeholderMessage: 'Your Message...',
//     submitButton: 'Send Message via WhatsApp',
//     successTitle: 'WhatsApp Opened!',
//     successMessage: 'Thank you! Your message is now ready to send on WhatsApp.',
//     whatsappNote: 'Please click the "Send" button in WhatsApp to complete your message.',
//     whyChooseUs: 'Why Choose Us',
    
//     services: [
//       'Video Editing',
//       'Photo Editing',
//       'Graphic Design',
//       'Logo Design',
//       'Printing Service',
//       'Advertising',
//       'Other'
//     ],
    
//     contactDetails: [
//       {
//         icon: <Phone size={24} />,
//         title: 'Phone',
//         details: ' 7218644962 , 8767133672',
//         subtitle: 'Mon-Sat, 9AM - 6PM',
//         whatsapp: true
//       },
//       {
//         icon: <Mail size={24} />,
//         title: 'Email',
//         details: 'info@omrautgraphics.com',
//         subtitle: 'Response within 24 hours'
//       },
//       {
//         icon: <MapPin size={24} />,
//         title: 'Location',
//         details: 'Amravati, Maharashtra',
//         subtitle: 'Services available everywhere'
//       }
//     ],
    
//     whyUsPoints: [
//       'Professional and Creative Designs',
//       'On Time Delivery',
//       'Unlimited Revisions',
//       'Customer Satisfaction Guarantee'
//     ]
//   };

//   // Function to open WhatsApp directly
//   const openWhatsAppDirectly = () => {
//     const whatsappNumber = '7218644962';
//     const defaultMessage = language === 'marathi' 
//       ? 'हॅलो, मला OmRautGraphics बद्दल माहिती हवी आहे.' 
//       : 'Hello, I need information about OmRautGraphics.';
    
//     const encodedMessage = encodeURIComponent(defaultMessage);
//     const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
//     window.open(whatsappURL, '_blank');
//   };

//   return (
//     <div className="min-h-screen py-12">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             {content.title}
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             {content.subtitle}
//           </p>
//         </div>
        
//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Contact Information */}
//           <div className="lg:col-span-1">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">{content.contactInfo}</h2>
            
//             <div className="space-y-6 mb-8">
//               {content.contactDetails.map((detail, index) => (
//                 <div key={index} className="flex items-start space-x-5 p-4 bg-white rounded-xl shadow-sm">
//                   <div className={`w-12 h-12 ${detail.whatsapp ? 'bg-green-100' : 'bg-blue-100'} rounded-lg flex items-center justify-center flex-shrink-0`}>
//                     <div className={detail.whatsapp ? 'text-green-600' : 'text-blue-600'}>{detail.icon}</div>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-800">{detail.title}</h3>
//                     <p className="text-gray-600 font-medium">{detail.details}</p>
//                     <p className="text-sm text-gray-500">{detail.subtitle}</p>
//                     {detail.whatsapp && (
//                       <button
//                         onClick={openWhatsAppDirectly}
//                         className="mt-2 flex items-center space-x-1 cursor-pointer text-green-600 hover:text-green-700 text-sm font-medium"
//                       >
//                         <MessageCircle size={14} />
//                         <span>{language === 'marathi' ? 'WhatsApp वर संदेश पाठवा' : 'Message on WhatsApp'}</span>
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Why Choose Us */}
//             <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
//               <h3 className="font-bold text-gray-800 mb-4">{content.whyChooseUs}</h3>
//               <ul className="space-y-3">
//                 {content.whyUsPoints.map((point, index) => (
//                   <li key={index} className="flex items-center text-gray-700">
//                     <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
//                     {point}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* WhatsApp Quick Contact */}
//             <div className="mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
//               <div className="flex items-center mb-3">
//                 <MessageCircle size={24} className="mr-3" />
//                 <h3 className="text-xl font-bold">
//                   {language === 'marathi' ? 'WhatsApp वर थेट संपर्क करा' : 'Contact Directly on WhatsApp'}
//                 </h3>
//               </div>
//               <p className="text-green-100  mb-4">
//                 {language === 'marathi' 
//                   ? 'थेट WhatsApp वर संदेश पाठवा त्वरित प्रतिसादासाठी'
//                   : 'Send message directly on WhatsApp for instant response'}
//               </p>
//               <button
//                 onClick={openWhatsAppDirectly}
//                 className="w-full bg-white text-green-600 font-semibold cursor-pointer py-3 px-6 rounded-lg hover:bg-gray-100 transition flex items-center justify-center shadow-lg"
//               >
//                 <MessageCircle size={20} className="mr-2" />
//                 {language === 'marathi' ? 'WhatsApp उघडा' : 'Open WhatsApp'}
//               </button>
//             </div>
//           </div>
          
//           {/* Contact Form */}
//           <div className="lg:col-span-2">
//             <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-2xl font-bold text-gray-800">{content.sendMessage}</h2>
//                 <div className="flex items-center space-x-2 text-green-600">
//                   <MessageCircle size={20} />
//                   <span className="text-sm font-medium">
//                     {language === 'marathi' ? 'WhatsApp वर पाठवेल' : 'Will send via WhatsApp'}
//                   </span>
//                 </div>
//               </div>
              
//               {isSubmitted ? (
//                 <div className="text-center py-12">
//                   <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <MessageCircle size={32} className="text-green-600" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">{content.successTitle}</h3>
//                   <p className="text-gray-600 mb-3">{content.successMessage}</p>
//                   <p className="text-gray-500 text-sm italic">{content.whatsappNote}</p>
//                   <button
//                     onClick={() => setIsSubmitted(false)}
//                     className="mt-6 text-blue-600 hover:text-blue-700 font-medium"
//                   >
//                     {language === 'marathi' ? 'पुन्हा संदेश पाठवा' : 'Send Another Message'}
//                   </button>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
//                         <User size={16} className="inline mr-2" />
//                         {content.name}
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         placeholder={content.placeholderName}
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
//                         <Mail size={16} className="inline mr-2" />
//                         {content.email}
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         placeholder={content.placeholderEmail}
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
//                         <Phone size={16} className="inline mr-2" />
//                         {content.phone}
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         placeholder={content.placeholderPhone}
//                       />
//                     </div>
                    
//                     <div>
//                       <label className="block text-gray-700 mb-2 font-medium" htmlFor="service">
//                         <Briefcase size={16} className="inline mr-2" />
//                         {content.service}
//                       </label>
//                       <select
//                         id="service"
//                         name="service"
//                         value={formData.service}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                       >
//                         <option value="">{language === 'marathi' ? 'सेवा निवडा' : 'Select a service'}</option>
//                         {content.services.map(service => (
//                           <option key={service} value={service}>{service}</option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
                  
//                   <div>
//                     <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
//                       <MessageSquare size={16} className="inline mr-2" />
//                       {content.message}
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
//                       placeholder={content.placeholderMessage}
//                     />
//                   </div>
                  
//                   <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
//                     <p className="text-sm text-blue-700 mb-2">
//                       {language === 'marathi' 
//                         ? '📱 हा फॉर्म भरल्यानंतर तुमचा संदेश WhatsApp वर पाठवला जाईल'
//                         : '📱 After filling this form, your message will be sent on WhatsApp'}
//                     </p>
//                     <p className="text-xs text-blue-600">
//                       {language === 'marathi'
//                         ? 'तुम्हाला WhatsApp उघडल्यावर "Send" बटण दाबावे लागेल'
//                         : 'You will need to click "Send" button after WhatsApp opens'}
//                     </p>
//                   </div>
                  
//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-orange-500 to-green-400 text-black cursor-pointer font-semibold py-3 px-6 rounded-lg hover:opacity-90 transition flex items-center justify-center shadow-lg"
//                   >
//                     <MessageCircle size={18} className="mr-2" />
//                     {content.submitButton}
//                   </button>
//                 </form>
//               )}
//             </div>
            
//             {/* Business Hours */}
//             <div className="mt-6 bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6 rounded-xl">
//               <h3 className="text-xl font-bold mb-4">
//                 {language === 'marathi' ? 'कार्यालयीन वेळ' : 'Business Hours'}
//               </h3>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <p className="font-medium">{language === 'marathi' ? 'सोमवार - शनिवार' : 'Monday - Saturday'}</p>
//                   <p className="text-blue-200">9:00 AM - 6:00 PM</p>
//                 </div>
//                 <div>
//                   <p className="font-medium">{language === 'marathi' ? 'रविवार' : 'Sunday'}</p>
//                   <p className="text-blue-200">
//                     {language === 'marathi' ? 'बंद' : 'Closed'}
//                   </p>
//                 </div>
//               </div>
//               <div className="mt-4 pt-4 border-t border-blue-800">
//                 <p className="text-blue-200 text-sm">
//                   {language === 'marathi'
//                     ? 'WhatsApp वर संदेश 24 तास पाठवता येतात'
//                     : 'WhatsApp messages can be sent 24 hours'}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare, User, Briefcase, MessageCircle } from 'lucide-react';

const Contact = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `
*नवीन ग्राहक संदेश - OmRautGraphics*

*नाव:* ${formData.name}
*ईमेल:* ${formData.email}
*फोन:* ${formData.phone}
*सेवा:* ${formData.service}
*संदेश:*
${formData.message}

_हा संदेश OmRautGraphics वेबसाइटवरून पाठवला आहे._
    `.trim();
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number
    const whatsappNumber = '7218644962';
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 5000);
  };
  
  const content = language === 'marathi' ? {
    title: 'आमच्याशी संपर्क साधा',
    subtitle: 'तुमच्या प्रकल्पाबद्दल चर्चा करा. आम्ही तुम्हाला सर्वोत्कृष्ट उपाय देऊ.',
    contactInfo: 'संपर्क माहिती',
    sendMessage: 'संदेश पाठवा',
    name: 'नाव *',
    email: 'ईमेल',
    phone: 'फोन नंबर *',
    service: 'सेवा *',
    message: 'संदेश *',
    placeholderName: 'तुमचे नाव',
    placeholderEmail: 'तुमचा ईमेल (पर्यायी)',
    placeholderPhone: 'तुमचा फोन नंबर',
    placeholderMessage: 'तुमचा संदेश...',
    submitButton: 'WhatsApp वर संदेश पाठवा',
    successTitle: 'WhatsApp उघडला!',
    successMessage: 'आभार! आता तुमचा संदेश WhatsApp वर पाठवण्यासाठी तयार आहे.',
    whatsappNote: 'कृपया तुमचा संदेश WhatsApp वर पाठवण्यासाठी "Send" बटण दाबा.',
    whyChooseUs: 'आम्हाला का निवडा',
    
    services: [
      'व्हिडिओ एडिटिंग',
      'फोटो एडिटिंग',
      'ग्राफिक डिझाईन',
      'लोगो डिझाईन',
      'प्रिंटिंग सेवा',
      'अ‍ॅडव्हर्टायझिंग',
      'इतर'
    ],
    
    contactDetails: [
      {
        icon: <Phone size={24} />,
        title: 'फोन',
        details: '7218644962 , 8767133672',
        subtitle: 'सोम-शनि, सकाळी 9 - संध्याकाळी 6',
        whatsapp: true
      },
      {
        icon: <Mail size={24} />,
        title: 'ईमेल',
        details: 'info@omrautgraphics.com',
        subtitle: '24 तासांत प्रतिसाद'
      },
      {
        icon: <MapPin size={24} />,
        title: 'ठिकाण',
        details: ' अमरावती, महाराष्ट्र',
        subtitle: 'सर्व ठिकाणी सेवा उपलब्ध'
      }
    ],
    
    whyUsPoints: [
      'व्यावसायिक आणि क्रिएटिव्ह डिझाईन',
      'वेळेवर वितरण',
      'अमर्यादित बदल',
      'ग्राहक समाधानाची हमी'
    ]
  } : {
    title: 'Contact Us',
    subtitle: 'Discuss your project. We will provide you with the best solution.',
    contactInfo: 'Contact Information',
    sendMessage: 'Send Message',
    name: 'Name *',
    email: 'Email',
    phone: 'Phone Number *',
    service: 'Service *',
    message: 'Message *',
    placeholderName: 'Your Name',
    placeholderEmail: 'Your Email (optional)',
    placeholderPhone: 'Your Phone Number',
    placeholderMessage: 'Your Message...',
    submitButton: 'Send Message via WhatsApp',
    successTitle: 'WhatsApp Opened!',
    successMessage: 'Thank you! Your message is now ready to send on WhatsApp.',
    whatsappNote: 'Please click the "Send" button in WhatsApp to complete your message.',
    whyChooseUs: 'Why Choose Us',
    
    services: [
      'Video Editing',
      'Photo Editing',
      'Graphic Design',
      'Logo Design',
      'Printing Service',
      'Advertising',
      'Other'
    ],
    
    contactDetails: [
      {
        icon: <Phone size={24} />,
        title: 'Phone',
        details: ' 7218644962 , 8767133672',
        subtitle: 'Mon-Sat, 9AM - 6PM',
        whatsapp: true
      },
      {
        icon: <Mail size={24} />,
        title: 'Email',
        details: 'info@omrautgraphics.com',
        subtitle: 'Response within 24 hours'
      },
      {
        icon: <MapPin size={24} />,
        title: 'Location',
        details: 'Amravati, Maharashtra',
        subtitle: 'Services available everywhere'
      }
    ],
    
    whyUsPoints: [
      'Professional and Creative Designs',
      'On Time Delivery',
      'Unlimited Revisions',
      'Customer Satisfaction Guarantee'
    ]
  };

  // Function to open WhatsApp directly
  const openWhatsAppDirectly = () => {
    const whatsappNumber = '7218644962';
    const defaultMessage = language === 'marathi' 
      ? 'हॅलो, मला OmRautGraphics बद्दल माहिती हवी आहे.' 
      : 'Hello, I need information about OmRautGraphics.';
    
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {content.title}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{content.contactInfo}</h2>
            
            <div className="space-y-6 mb-8">
              {content.contactDetails.map((detail, index) => (
                <div key={index} className="flex items-start space-x-5 p-4 bg-white rounded-xl shadow-sm">
                  <div className={`w-12 h-12 ${detail.whatsapp ? 'bg-green-100' : 'bg-blue-100'} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <div className={detail.whatsapp ? 'text-green-600' : 'text-blue-600'}>{detail.icon}</div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{detail.title}</h3>
                    <p className="text-gray-600 font-medium">{detail.details}</p>
                    <p className="text-sm text-gray-500">{detail.subtitle}</p>
                    {detail.whatsapp && (
                      <button
                        onClick={openWhatsAppDirectly}
                        className="mt-2 flex items-center space-x-1 cursor-pointer text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        <MessageCircle size={14} />
                        <span>{language === 'marathi' ? 'WhatsApp वर संदेश पाठवा' : 'Message on WhatsApp'}</span>
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <h3 className="font-bold text-gray-800 mb-4">{content.whyChooseUs}</h3>
              <ul className="space-y-3">
                {content.whyUsPoints.map((point, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-green-500 mr-3 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp Quick Contact */}
            <div className="mt-6 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl">
              <div className="flex items-center mb-3">
                <MessageCircle size={24} className="mr-3" />
                <h3 className="text-xl font-bold">
                  {language === 'marathi' ? 'WhatsApp वर थेट संपर्क करा' : 'Contact Directly on WhatsApp'}
                </h3>
              </div>
              <p className="text-green-100  mb-4">
                {language === 'marathi' 
                  ? 'थेट WhatsApp वर संदेश पाठवा त्वरित प्रतिसादासाठी'
                  : 'Send message directly on WhatsApp for instant response'}
              </p>
              <button
                onClick={openWhatsAppDirectly}
                className="w-full bg-white text-green-600 font-semibold cursor-pointer py-3 px-6 rounded-lg hover:bg-gray-100 transition flex items-center justify-center shadow-lg"
              >
                <MessageCircle size={20} className="mr-2" />
                {language === 'marathi' ? 'WhatsApp उघडा' : 'Open WhatsApp'}
              </button>
            </div>
          </div>
          
          {/* Contact Form - IMPROVED VERSION */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              {/* Form Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl p-2 md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {content.sendMessage}
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    {language === 'marathi' ? 'त्वरित प्रतिसाद मिळवा' : 'Get instant response'}
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-gradient-to-r from-green-50 to-emerald-50 px-3 py-2 rounded-full border border-green-100">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <MessageCircle size={20} className="text-green-600" />
                  <span className="text-sm font-medium text-green-700">
                    {language === 'marathi' ? 'WhatsApp वर पाठवेल' : 'Will send via WhatsApp'}
                  </span>
                </div>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="relative mx-auto mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto">
                      <MessageCircle size={32} className="text-green-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Send size={14} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{content.successTitle}</h3>
                  <p className="text-gray-600 mb-4 max-w-md mx-auto">{content.successMessage}</p>
                  <p className="text-gray-500 text-sm italic mb-6">{content.whatsappNote}</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>{language === 'marathi' ? 'पुन्हा संदेश पाठवा' : 'Send Another Message'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="group">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-100 to-blue-50 rounded-lg flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                          <User size={16} className="text-blue-600" />
                        </div>
                        <label className="block text-gray-700 font-medium text-sm" htmlFor="name">
                          {content.name}
                        </label>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 outline-none transition-all duration-300 hover:border-blue-300"
                        placeholder={content.placeholderName}
                      />
                    </div>
                    
                    <div className="group">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-purple-50 rounded-lg flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                          <Mail size={16} className="text-purple-600" />
                        </div>
                        <label className="block text-gray-700 font-medium text-sm" htmlFor="email">
                          {content.email} <span className="text-gray-400 text-xs">({language === 'marathi' ? 'पर्यायी' : 'optional'})</span>
                        </label>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 hover:border-purple-300"
                        placeholder={content.placeholderEmail}
                      />
                    </div>
                  </div>
                  
                  {/* Phone and Service Row */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="group">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-100 to-green-50 rounded-lg flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                          <Phone size={16} className="text-green-600" />
                        </div>
                        <label className="block text-gray-700 font-medium text-sm" htmlFor="phone">
                          {content.phone}
                        </label>
                      </div>
                      <div className="relative">
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                          +91
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full pl-12 pr-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 outline-none transition-all duration-300 hover:border-green-300"
                          placeholder={content.placeholderPhone}
                        />
                      </div>
                    </div>
                    
                    <div className="group">
                      <div className="flex items-center mb-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                          <Briefcase size={16} className="text-orange-600" />
                        </div>
                        <label className="block text-gray-700 font-medium text-sm" htmlFor="service">
                          {content.service}
                        </label>
                      </div>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition-all duration-300 hover:border-orange-300 appearance-none cursor-pointer"
                        >
                          <option value="">{language === 'marathi' ? 'सेवा निवडा' : 'Select a service'}</option>
                          {content.services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message Field */}
                  <div className="group">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-pink-100 to-pink-50 rounded-lg flex items-center justify-center mr-2 group-hover:scale-110 transition-transform">
                        <MessageSquare size={16} className="text-pink-600" />
                      </div>
                      <label className="block text-gray-700 font-medium text-sm" htmlFor="message">
                        {content.message}
                      </label>
                    </div>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-pink-500 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-300 hover:border-pink-300 resize-none"
                        placeholder={content.placeholderMessage}
                      />
                      <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                        {formData.message.length}/500
                      </div>
                    </div>
                  </div>
                  
                  {/* WhatsApp Info Card */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                    <div className="flex items-start space-x-3">
                      <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
                        <MessageCircle size={20} className="text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-green-800">
                          {language === 'marathi' 
                            ? '📱 WhatsApp वर सुरक्षित कनेक्शन'
                            : '📱 Secure WhatsApp Connection'}
                        </p>
                        <p className="text-sm text-green-600 mt-1">
                          {language === 'marathi'
                            ? 'फॉर्म भरल्यानंतर तुमचा संदेश आमच्या व्यवसाय WhatsApp वर पाठवला जाईल. कृपया "Send" बटण दाबा.'
                            : 'Your message will be sent to our business WhatsApp. Please click "Send" button to deliver.'}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg"
                  >
                    <div className="relative">
                      <MessageCircle size={22} className="animate-pulse" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    </div>
                    <span className="text-lg">{content.submitButton}</span>
                    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
            
            {/* Business Hours */}
            <div className="mt-6 bg-gradient-to-r from-blue-900 to-purple-900 text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">
                {language === 'marathi' ? 'कार्यालयीन वेळ' : 'Business Hours'}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">{language === 'marathi' ? 'सोमवार - शनिवार' : 'Monday - Saturday'}</p>
                  <p className="text-blue-200">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="font-medium">{language === 'marathi' ? 'रविवार' : 'Sunday'}</p>
                  <p className="text-blue-200">
                    {language === 'marathi' ? 'बंद' : 'Closed'}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-blue-800">
                <p className="text-blue-200 text-sm">
                  {language === 'marathi'
                    ? 'WhatsApp वर संदेश 24 तास पाठवता येतात'
                    : 'WhatsApp messages can be sent 24 hours'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;