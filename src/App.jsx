// import React, { useState } from 'react';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Gallery from './pages/Gallery';
// import Pricing from './pages/Pricing';
// import Contact from './pages/Contact';

// function App() {
//   const [currentPage, setCurrentPage] = useState('home');
  
//   const renderPage = () => {
//     switch(currentPage) {
//       case 'gallery':
//         return <Gallery />;
//       case 'pricing':
//         return <Pricing />;
//       case 'contact':
//         return <Contact />;
//       default:
//         return <Home />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
//       <main className="pt-16">
//         {renderPage()}
//       </main>
//       <Footer setCurrentPage={setCurrentPage} />
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('marathi');
  
  const renderPage = () => {
    switch(currentPage) {
      case 'services':
        return <Services language={language} />;
      case 'pricing':
        return <Pricing language={language} />;
      case 'gallery':
        return <Gallery language={language} />;
      case 'contact':
        return <Contact language={language} />;
      default:
        return <Home language={language} setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        language={language}
        setLanguage={setLanguage}
      />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer language={language} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;