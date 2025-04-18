
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import ServiceCards from './component/ServiceCards';
import Recognitions from './component/Recognitions';
import About from './component/About';
import Contact from './component/Contact';
import ServiceDetail from './component/ServiceDetail';
import ScrollToTop from './component/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ServiceCards />
              <Recognitions />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
