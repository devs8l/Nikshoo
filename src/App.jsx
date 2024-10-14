import { useState } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Hero from '../pages/Hero'
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

function App() {


  return (
    <>


        <Navbar></Navbar>
        <Routes>


          <Route path="/" element={<Hero />} />
          <Route path="/howwework" element={<Hww />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner" element={<Partner />} />
          
          <Route path="/about" element={<About />} />

          {/* spaces */}
          <Route path="/office" element={<Office />} />
          <Route path="/education" element={<Education />} />
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/lab" element={<Lab />} />

        </Routes>
        <Footer></Footer>

    </>
  )
}

export default App
