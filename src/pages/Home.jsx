// import React from 'react';
// import { ArrowRight, Star, Users, Award, Clock } from 'lucide-react';

// const Home = () => {
//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden">
//         <div className="container mx-auto px-4 py-20 md:py-28">
//           <div className="max-w-3xl">
//             <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
//               Elevate Your Brand with <span className="text-blue-600">Stunning</span> Graphics
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Professional graphic design services that transform your ideas into visual masterpieces. From logos to complete brand identities, we create designs that make an impact.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition flex items-center">
//                 Start a Project <ArrowRight className="ml-2" size={20} />
//               </button>
//               <button className="border-2 border-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-50 transition">
//                 View Portfolio
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Background Elements */}
//         <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent -z-10"></div>
//         <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 -z-10"></div>
//       </section>
      
//       {/* Stats Section */}
//       <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-gray-800 mb-2">500+</div>
//               <div className="text-gray-600">Projects Completed</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-gray-800 mb-2">98%</div>
//               <div className="text-gray-600">Client Satisfaction</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-gray-800 mb-2">150+</div>
//               <div className="text-gray-600">Happy Clients</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-gray-800 mb-2">5+</div>
//               <div className="text-gray-600">Years Experience</div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
//             Ready to Transform Your Brand?
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto mb-8">
//             Let's discuss your project and create something amazing together.
//           </p>
//           <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition">
//             Get a Free Quote
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { PlayCircle, Image, Brush, Target, CheckCircle, Clock, Users, Award, ArrowRight } from 'lucide-react';
import bg from '../assets/image1.png'

const Home = ({ language, setCurrentPage }) => {
  const content = language === 'marathi' ? {
    heroTitle: 'ओम राऊत ग्राफिक्स',
    heroSubtitle: 'डिझाईनिंग | प्रिंटिंग | अ‍ॅडव्हर्टायझिंग',
    heroDescription: 'तुमच्या कल्पनांना आकार द्या. व्यावसायिक व्हिडिओ एडिटिंग, फोटो एडिटिंग, ग्राफिक डिझाईन आणि लोगो डिझाईन सेवा.',
    ctaButton: 'सेवा पहा',
    servicesTitle: 'आमच्या सेवा',
    featuresTitle: 'आमची विशेषता',
    getQuote: 'किंमत मिळवा',
    viewWork: 'आमची कामे पहा',
    services: [
      { icon: <PlayCircle size={32} />, title: 'व्हिडिओ एडिटिंग', desc: 'व्यावसायिक व्हिडिओ संपादन' },
      { icon: <Image size={32} />, title: 'निवडणूक प्रचार', desc: 'राजकीय डिझाईन' },
      { icon: <Brush size={32} />, title: 'ग्राफिक डिझाईन', desc: 'क्रिएटिव्ह ग्राफिक डिझाईन' },
      { icon: <Target size={32} />, title: 'लोगो डिझाईन', desc: 'युनिक लोगो डिझाईन' },
    ],
    features: [
      { icon: <CheckCircle />, text: 'उच्च दर्जाचे काम' },
      { icon: <Clock />, text: 'वेळेवर वितरण' },
      { icon: <Users />, text: '24/7 ग्राहक समर्थन' },
      { icon: <Award />, text: 'अनुभवी टीम' },
    ]
  } : {
    heroTitle: 'Om Raut Graphics',
    heroSubtitle: 'Designing | Printing | Advertising',
    heroDescription: 'Give shape to your imagination. Professional video editing, photo editing, graphic design and logo design services.',
    ctaButton: 'View Services',
    servicesTitle: 'Our Services',
    featuresTitle: 'Our Features',
    getQuote: 'Get Quote',
    viewWork: 'View Our Work',
    services: [
      { icon: <PlayCircle size={32} />, title: 'Video Editing', desc: 'Professional video editing' },
      { icon: <Image size={32} />, title: 'Election Campaign', desc: 'Election campaign design' },
      { icon: <Brush size={32} />, title: 'Graphic Design', desc: 'Creative graphic design' },
      { icon: <Target size={32} />, title: 'Logo Design', desc: 'Unique logo design' },
    ],
    features: [
      { icon: <CheckCircle />, text: 'High quality work' },
      { icon: <Clock />, text: 'Timely delivery' },
      { icon: <Users />, text: '24/7 customer support' },
      { icon: <Award />, text: 'Experienced team' },
    ]
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-150 overflow-hidden bg-gradient-to-br from-slate-950 via-zinc-950 to-gray-950 text-white">
        <div className="absolute inset-0 bg-black opacity-20">
            <img className='h-full w-full' src={bg} alt="" />
            </div>
        <div className="container relative mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="mb-6">
              <h2 className="text-3xl md:text-6xl font-bold mb-2">{content.heroTitle}</h2>
              <h1 className="text-4xl md:text-4xl font-bold mb-4 text-yellow-300">{content.heroSubtitle}</h1>
              <p className="text-xl mb-8 text-blue-100">{content.heroDescription}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setCurrentPage('services')}
                className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition flex items-center shadow-lg"
              >
                {content.ctaButton} <ArrowRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => setCurrentPage('pricing')}
                className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition"
              >
                {content.getQuote}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {content.servicesTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-blue-600"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {content.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {content.features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="text-green-500 mt-1">{feature.icon}</div>
                <p className="text-gray-700 font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language === 'marathi' ? 'तुमच्या प्रकल्पासाठी तयार आहोत' : 'Ready for Your Project'}
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            {language === 'marathi' 
              ? 'आमच्याशी संपर्क साधा आणि तुमच्या कल्पनांना वास्तवात आणूया' 
              : 'Contact us and let\'s bring your ideas to reality'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition shadow-lg"
            >
              {language === 'marathi' ? 'आता संपर्क करा' : 'Contact Now'}
            </button>
            <button 
              onClick={() => setCurrentPage('gallery')}
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white/10 transition"
            >
              {content.viewWork}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;