import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Loader from '../components/Loader';
import Hero from '../pages/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hww from '../pages/Hww';
import Contact from '../pages/Contact';
import Partner from '../pages/Partner';
import Blogs from '../pages/Blogs';
import About from '../pages/About';
import Office from '../pages/Office';
import Education from '../pages/Education';
import Healthcare from '../pages/Healthcare';
import Kitchen from '../pages/Kitchen';
import Lab from '../pages/Lab';
import Privacy from '../pages/Privacy';
import Admin from '../pages/Admin';
import navimg from "../assets/whatsapp-icon.png";
import Cookie from '../components/Cookie';
import BlogDetail from '../pages/BlogDetail';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes("/123nikshoo/admin");

  // State to manage loading
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true); // State to control loader visibility

  useEffect(() => {
    const hasVisited = sessionStorage.getItem(location.pathname);

    if (hasVisited) {
      setIsLoading(false);
      setShowLoader(false);
    } else {
      setIsLoading(true);
      setShowLoader(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setShowLoader(false), 500); // Additional delay to allow fade-out
        sessionStorage.setItem(location.pathname, "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Show loader if showLoader is true */}
      {showLoader && <Loader isVisible={isLoading} />}

      {!isAdminRoute && !isLoading && <Navbar />}

      <div className="whatsapp-ct">
        <a href="https://wa.me/+919993550133" target='_blank' rel="noopener noreferrer">
          <img src={navimg} alt="WhatsApp Icon" />
        </a>
        <Cookie />
      </div>

      {!isLoading && (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/howwework" element={<Hww />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:blogId" element={<BlogDetail />} /> 
          <Route path="/office-furniture" element={<Office />} />
          <Route path="/furniture-for-education" element={<Education />} />
          <Route path="/hospital-furniture" element={<Healthcare />} />
          <Route path="/commercial-kitchen-equipment" element={<Kitchen />} />
          <Route path="/laboratory-furniture" element={<Lab />} />
          <Route path="/123nikshoo/admin" element={<Admin />} />
        </Routes>
      )}

      {!isAdminRoute && !isLoading && <Footer />}
    </>
  );
}

export default App;