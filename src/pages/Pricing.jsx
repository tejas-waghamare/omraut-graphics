// import React, { useState } from 'react';
// import { Check, X, HelpCircle } from 'lucide-react';

// const Pricing = () => {
//   const [billingCycle, setBillingCycle] = useState('monthly');
  
//   const plans = [
//     {
//       name: 'Starter',
//       description: 'Perfect for individuals and small projects',
//       monthlyPrice: 299,
//       yearlyPrice: 2870, // 20% discount
//       features: [
//         { included: true, text: 'Custom Logo Design' },
//         { included: true, text: '2 Revision Rounds' },
//         { included: true, text: '3 Design Concepts' },
//         { included: true, text: 'Source Files (AI, EPS)' },
//         { included: false, text: 'Brand Style Guide' },
//         { included: false, text: 'Social Media Kit' },
//         { included: false, text: 'Unlimited Revisions' },
//         { included: false, text: 'Priority Support' },
//       ],
//       popular: false,
//       color: 'blue'
//     },
//     {
//       name: 'Professional',
//       description: 'Most popular for growing businesses',
//       monthlyPrice: 599,
//       yearlyPrice: 5750, // 20% discount
//       features: [
//         { included: true, text: 'Complete Brand Identity' },
//         { included: true, text: '5 Revision Rounds' },
//         { included: true, text: '5 Design Concepts' },
//         { included: true, text: 'Source Files (AI, EPS, PSD)' },
//         { included: true, text: 'Brand Style Guide' },
//         { included: true, text: 'Social Media Kit' },
//         { included: false, text: 'Unlimited Revisions' },
//         { included: true, text: 'Priority Support' },
//       ],
//       popular: true,
//       color: 'purple'
//     },
//     {
//       name: 'Enterprise',
//       description: 'For large businesses with ongoing needs',
//       monthlyPrice: 999,
//       yearlyPrice: 9590, // 20% discount
//       features: [
//         { included: true, text: 'Complete Brand Identity' },
//         { included: true, text: 'Unlimited Revisions' },
//         { included: true, text: 'Unlimited Design Concepts' },
//         { included: true, text: 'All Source Files' },
//         { included: true, text: 'Comprehensive Brand Guide' },
//         { included: true, text: 'Full Social Media Package' },
//         { included: true, text: 'Website Graphics' },
//         { included: true, text: '24/7 Priority Support' },
//       ],
//       popular: false,
//       color: 'green'
//     },
//   ];
  
//   const services = [
//     {
//       name: 'Logo Design',
//       description: 'Custom logo creation with multiple concepts',
//       price: 'From $299'
//     },
//     {
//       name: 'Brand Identity',
//       description: 'Complete brand package including guidelines',
//       price: 'From $599'
//     },
//     {
//       name: 'Business Cards',
//       description: 'Professional business card design',
//       price: 'From $99'
//     },
//     {
//       name: 'Social Media Graphics',
//       description: 'Custom graphics for all social platforms',
//       price: 'From $199'
//     },
//     {
//       name: 'Website Design',
//       description: 'UI/UX design for websites',
//       price: 'From $899'
//     },
//     {
//       name: 'Illustration',
//       description: 'Custom illustrations and artwork',
//       price: 'From $149'
//     },
//   ];
  
//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
//             Simple, Transparent <span className="text-blue-600">Pricing</span>
//           </h1>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Choose the perfect plan for your needs. All plans include high-quality designs and dedicated support.
//           </p>
//         </div>
        
//         {/* Billing Toggle */}
//         <div className="flex justify-center mb-10">
//           <div className="bg-gray-100 p-1 rounded-lg inline-flex">
//             <button
//               onClick={() => setBillingCycle('monthly')}
//               className={`px-6 py-2 rounded-md font-medium transition ${
//                 billingCycle === 'monthly'
//                   ? 'bg-white text-gray-800 shadow'
//                   : 'text-gray-600 hover:text-gray-800'
//               }`}
//             >
//               Monthly
//             </button>
//             <button
//               onClick={() => setBillingCycle('yearly')}
//               className={`px-6 py-2 rounded-md font-medium transition ${
//                 billingCycle === 'yearly'
//                   ? 'bg-white text-gray-800 shadow'
//                   : 'text-gray-600 hover:text-gray-800'
//               }`}
//             >
//               Yearly <span className="text-green-600 text-sm ml-1">(Save 20%)</span>
//             </button>
//           </div>
//         </div>
        
//         {/* Pricing Cards */}
//         <div className="grid md:grid-cols-3 gap-8 mb-16">
//           {plans.map((plan, index) => (
//             <div 
//               key={index} 
//               className={`relative rounded-2xl shadow-lg overflow-hidden ${
//                 plan.popular ? 'ring-2 ring-purple-500 transform md:scale-105' : ''
//               }`}
//             >
//               {plan.popular && (
//                 <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
//                   MOST POPULAR
//                 </div>
//               )}
              
//               <div className={`p-8 bg-gradient-to-br ${
//                 plan.color === 'blue' ? 'from-blue-50 to-blue-100' :
//                 plan.color === 'purple' ? 'from-purple-50 to-purple-100' :
//                 'from-green-50 to-green-100'
//               }`}>
//                 <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
//                 <p className="text-gray-600 mb-6">{plan.description}</p>
                
//                 <div className="mb-6">
//                   <div className="flex items-baseline">
//                     <span className="text-4xl font-bold text-gray-800">$</span>
//                     <span className="text-5xl font-bold text-gray-800 ml-1">
//                       {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
//                     </span>
//                     <span className="text-gray-600 ml-2">
//                       /{billingCycle === 'monthly' ? 'month' : 'year'}
//                     </span>
//                   </div>
//                   {billingCycle === 'yearly' && (
//                     <p className="text-green-600 font-medium mt-1">Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice} annually</p>
//                   )}
//                 </div>
                
//                 <button className={`w-full py-3 font-semibold rounded-lg mb-8 ${
//                   plan.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700' :
//                   plan.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700' :
//                   'bg-green-600 text-white hover:bg-green-700'
//                 } transition`}>
//                   Get Started
//                 </button>
//               </div>
              
//               <div className="p-8 bg-white">
//                 <h4 className="font-bold text-gray-800 mb-4">What's included:</h4>
//                 <ul className="space-y-3">
//                   {plan.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-start">
//                       {feature.included ? (
//                         <Check size={18} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
//                       ) : (
//                         <X size={18} className="text-gray-300 mt-0.5 mr-3 flex-shrink-0" />
//                       )}
//                       <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
//                         {feature.text}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* À La Carte Services */}
//         <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-gray-800 mb-3">À La Carte Services</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Need just one specific service? Choose from our individual offerings.
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {services.map((service, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
//                 <h3 className="font-bold text-gray-800 text-lg mb-2">{service.name}</h3>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="font-bold text-blue-600 text-xl">{service.price}</span>
//                   <button className="text-blue-600 hover:text-blue-700 font-medium">
//                     Select Service
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* FAQ Section */}
//         <div>
//           <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
          
//           <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             {[
//               {
//                 q: "How many revisions do I get?",
//                 a: "Revision rounds vary by plan. Starter includes 2 rounds, Professional includes 5 rounds, and Enterprise offers unlimited revisions."
//               },
//               {
//                 q: "What file formats will I receive?",
//                 a: "You'll receive all source files (AI, EPS, PSD) plus common formats like PNG, JPG, and PDF based on your project needs."
//               },
//               {
//                 q: "How long does a typical project take?",
//                 a: "Logo projects take 3-5 business days, brand identity projects 7-10 days, and complex projects 2-3 weeks depending on scope."
//               },
//               {
//                 q: "Do you offer custom quotes?",
//                 a: "Yes! For large or complex projects, contact us for a custom quote tailored to your specific requirements."
//               }
//             ].map((faq, index) => (
//               <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
//                 <div className="flex items-start mb-3">
//                   <HelpCircle className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
//                   <h3 className="font-bold text-gray-800">{faq.q}</h3>
//                 </div>
//                 <p className="text-gray-600 pl-8">{faq.a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Pricing;

import React, { useState } from 'react';
import { Check, X, HelpCircle, Video, Image as ImageIcon, Palette, Target } from 'lucide-react';
import { Link } from 'lucide-react';
import Contact from './Contact';

const Pricing = ({ language }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('INR');
  
  const content = language === 'marathi' ? {
    title: 'आमची किंमत',
    subtitle: 'सर्व सेवांसाठी पारदर्शक किंमत',
    currency: '₹ रुपये',
    basic: 'बेसिक',
    standard: 'स्टँडर्ड',
    premium: 'प्रीमियम',
    perProject: 'प्रति प्रकल्प',
    features: 'वैशिष्ट्ये',
    servicePricing: 'सेवेनुसार किंमत',
    faqTitle: 'नेहमीचे प्रश्न',
    mostPopular: 'सर्वात लोकप्रिय',
    
    plans: [
      {
        name: 'बेसिक',
        description: 'लहान व्यवसाय आणि सुरुवातीसाठी',
        price: '२,९९९/महिना',
        features: [
          { included: true, text: 'साधे लोगो डिझाईन' },
          { included: true, text: '२0 डिझाईन संकल्पना' },
          { included: true, text: '२ वेळा बदल' },
          { included: true, text: '४ व्हिडिओ' },
          // { included: false, text: 'ब्रँड स्टाईल गाइड' },
          { included: false, text: 'सोशल मीडिया किट' },
          { included: false, text: 'अमर्यादित बदल' },
          { included: false, text: 'प्राधान्य समर्थन' },
        ],
        popular: false,
        color: 'blue'
      },
      {
        name: 'स्टँडर्ड',
        description: 'वाढत्या व्यवसायांसाठी योग्य',
        price: '5,999/महिना',
        features: [
          { included: true, text: 'व्यावसायिक लोगो डिझाईन' },
          { included: true, text: '30 डिझाईन संकल्पना' },
          { included: true, text: '3 वेळा बदल' },
          { included: true, text: '5 व्हिडिओ' },
          // { included: true, text: 'ब्रँड स्टाईल गाइड' },
          { included: false, text: 'सोशल मीडिया किट' },
          { included: false, text: 'अमर्यादित बदल' },
          { included: true, text: 'प्राधान्य समर्थन' },
        ],
        popular: true,
        color: 'purple'
      },
      {
        name: 'प्रीमियम',
        description: 'मोठ्या प्रकल्पांसाठी संपूर्ण पॅकेज',
        price: '९,९९९/महिना',
        features: [
          { included: true, text: 'कॉर्पोरेट ब्रँडिंग' },
          { included: true, text: 'अमर्यादित संकल्पना' },
          { included: true, text: 'अमर्यादित बदल' },
          { included: true, text: 'सर्व फाइल फॉर्मॅट' },
          { included: true, text: 'विस्तृत ब्रँड गाइड' },
          { included: true, text: 'संपूर्ण मार्केटिंग किट' },
          { included: true, text: 'वेबसाइट डिझाईन' },
          { included: true, text: '24/7 प्राधान्य समर्थन' },
        ],
        popular: false,
        color: 'green'
      },
    ],
    
    services: [
      {
        icon: <Palette size={24} />,
        name: 'वेबसाइट डिझाइन',
        price: '₹ 3,000 ते ₹ 10,000',
        description: 'पृष्ठ आणि डिझाईननुसार'
      },
      {
        icon: <Video size={24} />,
        name: 'व्हिडिओ एडिटिंग',
        price: '₹ ५०० ते ₹ ५,०००',
        description: 'व्हिडिओ लांबी आणि जटिलतेनुसार'
      },
      
      {
        icon: <Palette size={24} />,
        name: 'ग्राफिक डिझाईन',
        price: '₹ ८०० ते ₹ १०,०००',
        description: 'डिझाईनच्या प्रकारानुसार'
      },
      {
        icon: <Target size={24} />,
        name: 'लोगो डिझाईन',
        price: '₹ १,९९९ ते ₹ ९,९९९',
        description: 'पॅकेज निवडीनुसार'
      },
      {
        icon: <Palette size={24} />,
        name: 'विझिटिंग कार्ड',
        price: '₹ ५०० ते ₹ २,०००',
        description: 'डिझाईन आणि प्रिंटिंग'
      },
      
    ],
    
    faq: [
      {
        q: "काम किती दिवसात पूर्ण होईल?",
        a: "लोगो डिझाईन 3-5 दिवस, ब्रँडिंग 5-7 दिवस आणि मोठे प्रकल्प 10-15 दिवसात पूर्ण होतात."
      },
      {
        q: "किती वेळा बदल करू शकतो?",
        a: "बेसिक पॅकेजमध्ये 2 बदल, स्टँडर्डमध्ये 4 बदल आणि प्रीमियममध्ये अमर्यादित बदल."
      },
      {
        q: "काय फाइल फॉर्मॅट मिळतील?",
        a: "सर्व सोर्स फाइल्स (AI, EPS, PSD) आणि वापरण्यायोग्य फाइल्स (PNG, JPG, PDF) मिळतील."
      },
      {
        q: "एकाच वेळी अनेक सेवा घेऊ शकतो का?",
        a: "होय, आम्ही कस्टम कॉम्बो ऑफर देऊ शकतो. संपर्क करा."
      }
    ]
  } : {
    title: 'Our Pricing',
    subtitle: 'Transparent pricing for all services',
    currency: '₹ Rupees',
    basic: 'Basic',
    standard: 'Standard',
    premium: 'Premium',
    perProject: 'per project',
    features: 'Features',
    servicePricing: 'Service-wise Pricing',
    faqTitle: 'Frequently Asked Questions',
    mostPopular: 'MOST POPULAR',
    
    plans: [
      {
        name: 'Basic',
        description: 'For small businesses and startups',
        price: '2,999/Month',
        features: [
          { included: true, text: 'Simple Logo Design' },
          { included: true, text: '20 Design Concepts' },
          { included: true, text: '2 Revisions' },
          { included: true, text: '4 Videos' },
          // { included: false, text: 'Brand Style Guide' },
          { included: false, text: 'Social Media Kit' },
          { included: false, text: 'Unlimited Revisions' },
          { included: false, text: 'Priority Support' },
        ],
        popular: false,
        color: 'blue'
      },
      {
        name: 'Standard',
        description: 'Perfect for growing businesses',
        price: '4,999',
        features: [
          { included: true, text: 'Professional Logo Design' },
          { included: true, text: '30 Design Concepts' },
          { included: true, text: '3 Revisions' },
          { included: true, text: '5 Videos' },
          { included: true, text: 'Brand Style Guide' },
          { included: false, text: 'Social Media Kit' },
          { included: false, text: 'Unlimited Revisions' },
          { included: true, text: 'Priority Support' },
        ],
        popular: true,
        color: 'purple'
      },
      {
        name: 'Premium',
        description: 'Complete package for large projects',
        price: '9,999/Months',
        features: [
          { included: true, text: 'Corporate Branding' },
          { included: true, text: 'Unlimited Concepts' },
          { included: true, text: 'Unlimited Revisions' },
          { included: true, text: 'All File Formats' },
          { included: true, text: 'Detailed Brand Guide' },
          { included: true, text: 'Complete Marketing Kit' },
          { included: true, text: 'Website Design' },
          { included: true, text: '24/7 Priority Support' },
        ],
        popular: false,
        color: 'green'
      },
    ],
    
    services: [
       {
        icon: <Palette size={24} />,
        name: 'Website Design',
        price: '₹ 3,000 to ₹ 10,000',
        description: 'Based on pages and design'
      },
      {
        icon: <Video size={24} />,
        name: 'Video Editing',
        price: '₹ 500 to ₹ 5,000',
        description: 'Based on video length and complexity'
      },
      
      {
        icon: <Palette size={24} />,
        name: 'Graphic Design',
        price: '₹ 800 to ₹ 10,000',
        description: 'Based on design type'
      },
      {
        icon: <Target size={24} />,
        name: 'Logo Design',
        price: '₹ 1,999 to ₹ 9,999',
        description: 'Based on package selection'
      },
      {
        icon: <Palette size={24} />,
        name: 'Visiting Card',
        price: '₹ 500 to ₹ 2,000',
        description: 'Design and printing'
      },
     
    ],
    
    faq: [
      {
        q: "How many days will the work take?",
        a: "Logo design 3-5 days, branding 5-7 days and large projects 10-15 days."
      },
      {
        q: "How many revisions can I make?",
        a: "Basic package has 2 revisions, Standard has 4, and Premium has unlimited revisions."
      },
      {
        q: "What file formats will I receive?",
        a: "All source files (AI, EPS, PSD) and usable files (PNG, JPG, PDF) will be provided."
      },
      {
        q: "Can I take multiple services at once?",
        a: "Yes, we can offer custom combo deals. Contact us."
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

        {/* Currency Selector */}
        {/* <div className="flex justify-center mb-10">
          <div className="bg-gray-100 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setSelectedCurrency('INR')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                selectedCurrency === 'INR'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {content.currency}
            </button>
            <button
              onClick={() => setSelectedCurrency('USD')}
              className={`px-6 py-2 rounded-md font-medium transition ${
                selectedCurrency === 'USD'
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              USD
            </button>
          </div>
        </div> */}

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {content.plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl shadow-lg overflow-hidden border ${
                plan.popular ? 'border-purple-500 transform md:scale-105 shadow-2xl' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-2 text-sm font-bold rounded-bl-lg">
                  {content.mostPopular}
                </div>
              )}
              
              <div className={`p-8 ${
                plan.color === 'blue' ? 'bg-blue-50' :
                plan.color === 'purple' ? 'bg-purple-50' :
                'bg-green-50'
              }`}>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-800">{content.currency.split(' ')[0]}</span>
                    <span className="text-5xl font-bold text-gray-800 ml-1">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{content.perProject}</p>
                </div>
                
                <button className={`w-full py-3 font-semibold rounded-lg mb-8  ${
                  plan.color === 'blue' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                  plan.color === 'purple' ? 'bg-purple-600 text-white hover:bg-purple-700' :
                  'bg-green-600 text-white hover:bg-green-700'
                } transition`}>
                  {language === 'marathi' ? 'आरंभ करा' : 'Get Started'}
                </button>
              </div>
              
              <div className="p-8 bg-white">
                <h4 className="font-bold text-gray-800 mb-4">{content.features}:</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      {feature.included ? (
                        <Check size={18} className="text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      ) : (
                        <X size={18} className="text-gray-300 mt-0.5 mr-3 flex-shrink-0" />
                      )}
                      <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Service-wise Pricing */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            {content.servicePricing}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-blue-600">{service.icon}</div>
                  <h3 className="font-bold text-gray-800 text-lg">{service.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-blue-600 text-xl">{service.price}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-medium">
                    {language === 'marathi' ? 'ऑर्डर करा' : 'Order Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            {content.faqTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {content.faq.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start mb-3">
                  <HelpCircle className="text-blue-500 mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <h3 className="font-bold text-gray-800">{faq.q}</h3>
                </div>
                <p className="text-gray-600 pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;