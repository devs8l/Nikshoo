import React, { useRef } from 'react';
import "../pages/Hero.css"
import Carousel from "../components/Carousel"
import Navbar from '../components/Navbar'
import lefty from "../assets/lefty.png"
import righty from "../assets/righty.png"
import border from "../assets/hero2.png"
import office from "../assets/office.png"
import edu from "../assets/edu.png"
import health from "../assets/hww-lefty.png"
import kitchenImg from "../assets/hww-righty.png"
import lab from "../assets/hww-mid.png"

import v1 from "../assets/icon1.png"
import v2 from "../assets/icon2.png"
import v3 from "../assets/icon3.png"

import page4ilus from "../assets/page4-ilus.png"

import aditya from "../assets/aditya.png"
import bob from "../assets/bob.png"
import aziva from "../assets/aziva.png"
import bank1 from "../assets/bank1.png"
import bank2 from "../assets/bank2.png"
import sbi from "../assets/sbi.png"

import gal from "../assets/gallery.png"

import Footer from '../components/Footer'

import filus from "../assets/footer-ilus.png"

import { Rotate } from '../components/Rotate'
import GetInTouch from '../components/GetInTouch'

import Clients from '../components/Clients'

import heroVid from "../assets/hero-vid.mp4"


const Hero = () => {
  const getInTouchRef = useRef(null); // Create a ref for GetInTouch component

  const scrollToGetInTouch = () => {
    // Function to scroll to the GetInTouch section
    getInTouchRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='hero-wrapper'>
      <div className="page1">
        {/* <Navbar></Navbar> */}
        <div className="container">
          {/* <Carousel></Carousel> */}
          <video src={heroVid} autoPlay muted loop></video>
        </div>
        <div className="hero-content">
          <h1>Furniture For The Future</h1>
          <p>Elevate your spaces with innovative style, functionality and aesthetics</p>
          <button onClick={scrollToGetInTouch}>Get Started</button>
        </div>
      </div>

      <div className="page2">
        <div className="heading-page2">
          <h1>What Are You Building?</h1>
          <p>Transform your spaces with high performance furniture solutions crafted by us</p>
        </div>
        <div className="part2">
          <div className="part2-l">
            <div className="l-img">
              <img src={office} alt="" />
            </div>
            <div className="l-con">
              <h2>Office Space</h2>
            </div>
          </div>

          <div className="part2-r">
            <div className="r-img">
              <img src={edu} alt="" />
            </div>
            <div className="r-con">
              <h2>Education Space</h2>
            </div>
          </div>
        </div>

        <div className="part3">
          <div className="part3-sub">
            <div className="part3-img-div">
              <img src={health} alt="" />
            </div>
            <div className="part3-con">
              <h2>Healthcare Space</h2>
            </div>
          </div>
          <div className="part3-sub">
            <div className="part3-img-div">
              <img src={lab} alt="" />
            </div>
            <div className="part3-con">
              <h2>Laboratory Space</h2>
            </div>
          </div>
          <div className="part3-sub">
            <div className="part3-img-div">
              <img src={kitchenImg} alt="" />
            </div>
            <div className="part3-con">
              <h2>Commercial Kitchen</h2>
            </div>
          </div>
        </div>

        <div className="side">
          <h1>SUSTAINABLE FURNITURE SOLUTIONS</h1>
        </div>
      </div>

      <div className="page3">
        <div className="page3-con">
          <h1>Imagine Your Future Spaces Crafted with Precision & Style</h1>
        </div>
        <div className="page3-b">
          <div className="left-ilus">
            <img src={lefty} alt="" />  
          </div>
          <div className="center-ilus">
            <img src={border} alt="" />
          </div>
          <div className="right-ilus">
            <img src={righty} alt="" />
          </div>
          <button className='btn'>
            Enquire Now
          </button>

        </div>
      </div>
      <div className="info">
        <div className="info-sub">
          <img src={v1} alt="" />
          <h2>Innovative Design</h2>
          <p>We provide research-driven designs that combine style, functionality,  and ergonomics.</p>
        </div>
        <div className="info-sub">
          <img src={v2} alt="" />
          <h2>Durability & Quality</h2>
          <p>Our furniture is built to last, with high-quality materials and construction that withstands heavy use.</p>

        </div>
        <div className="info-sub">
          <img src={v3} alt="" />
          <h2>
          Broad Choice
          </h2>
          <p>We have a wide range of products and materiality options to meet style, preferences & budget needs</p>
        </div>
      </div>

      <div className="page4">
        <div className="page4-heading">
          <h1>How Are We Different?</h1>
          <p>Enhance your spaces with the comfortable furniture crafted by us</p>

        </div>
        <div className="page4-img-div">
          <img src={page4ilus} alt="" />
        </div>

        <div className="our-clients">
          <h1>Our Clients</h1>
          {/* <div className="client-icons">
            <img src={bank1} alt="" />
            <img src={aditya} alt="" />
            <img src={bank2} alt="" />
            <img src={bob} alt="" />
            <img src={sbi} alt="" />
            <img src={aziva} alt="" />
          </div> */}
          <Clients></Clients>
        </div>
      </div>
      <Rotate></Rotate>

      <div className="gallery">
        <h1>Get Inspired</h1>
        <p>Browse our gallery for a glimpse into perfectly designed workspaces</p>
        <div className="gal-img-div">
          <img src={gal} alt="" />
        </div>
      </div>
      <div ref={getInTouchRef}>
        <GetInTouch />
      </div>
      <div className="footer-ilus">
        <img src={filus} alt="" />
      </div>

    </div>
  )
}

export default Hero