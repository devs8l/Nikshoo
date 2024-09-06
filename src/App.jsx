import { useState } from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Hero from '../pages/Hero'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hww from '../pages/Hww';

function App() {


  return (
    <>
      <BrowserRouter>

        <Navbar></Navbar>
        <Routes>
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} /> */}


          <Route path="/" element={<Hero />} />
          <Route path="/howwework" element={<Hww />} />
        </Routes>
        <Footer></Footer>

      </BrowserRouter>
    </>
  )
}

export default App
