import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Loader from '../components/Loader'; // Import the Loader component
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

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.includes("/123nikshoo/admin");

  // State to manage loading
  const [isLoading, setIsLoading] = useState(true);

  // Effect to handle loading state on route change
  useEffect(() => {
    // Show loader at the beginning of each route change
    setIsLoading(true);

    // Hide loader after a delay (simulate loading time)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust delay as needed

    return () => clearTimeout(timer); // Clean up timer on unmount
  }, [location.pathname]); // Trigger on route change

  return (
    <>
      {isLoading && <Loader />} {/* Render loader if isLoading is true */}
      
      {!isAdminRoute && !isLoading && <Navbar />} {/* Conditionally render Navbar */}
      
      <div className="whatsapp-ct">
        <a href="https://wa.me/+918103702839" target='_blank' rel="noopener noreferrer">
          <img src={navimg} alt="WhatsApp Icon" />
        </a>
        <Cookie />
      </div>

      {/* Conditionally render routes when not loading */}
      {!isLoading && (
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/howwework" element={<Hww />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/office" element={<Office />} />
          <Route path="/education" element={<Education />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/123nikshoo/admin" element={<Admin />} />
        </Routes>
      )}

      {!isAdminRoute && !isLoading && <Footer />} {/* Conditionally render Footer */}
    </>
  );
}

export default App;
