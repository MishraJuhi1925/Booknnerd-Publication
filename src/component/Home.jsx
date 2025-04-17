// import React from 'react'
// import Navbar from './Navbar'
// import Footer from './Footer'
// import HeroSection from './HeroSection'
// import ServiceCards from './ServiceCards'
// import About from './About'
// import Recognitions from './Recognitions'

// function Home() {
//   return (
//     <div>
//       <Navbar/>
//       <HeroSection/>
//       <About/>
//       <ServiceCards/>
//       <Recognitions/>
//       <Footer/>
//     </div>
//   )
// }

// export default Home

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSection from './HeroSection';
import ServiceCards from './ServiceCards';
import ServiceDetail from './ServiceDetail';
import About from './About';
import Recognitions from './Recognitions';
import Contact from './Contact';

function Home() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  return (
    <div>
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            {/* <About /> */}
            <ServiceCards />
            <Recognitions />
          </>
        } />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default Home;