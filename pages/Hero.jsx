import React from 'react'
import "../pages/Hero.css"
import Carousel from "../components/Carousel"
import Navbar from '../components/Navbar'
const Hero = () => {
  return (
    <div className='hero-wrapper'>
        <Navbar></Navbar>
        <div className="container">
            <Carousel></Carousel>
        </div>
        <div className="hero-content">
            <h1>Amazing Furniture For Your Workspaces</h1>
            <p>Enhance your spaces with the comfortable furniture crafted by us</p>
            <button>Shop now</button>
        </div>
    </div>
  )
}

export default Hero