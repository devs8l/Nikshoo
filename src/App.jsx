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

function App() {


  return (
    <>
      <BrowserRouter>

        <Navbar></Navbar>
        <Routes>


          <Route path="/" element={<Hero />} />
          <Route path="/howwework" element={<Hww />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner" element={<Partner />} />
        </Routes>
        <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
