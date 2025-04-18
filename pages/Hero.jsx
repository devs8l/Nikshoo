import React, { useRef, useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom"
import { MdOutlineArrowOutward } from "react-icons/md";

import { Gallery } from '../components/Gallery';

import "../pages/Hero.css"
import Carousel from "../components/Carousel"
import Navbar from '../components/Navbar'
// import lefty from "../assets/lefty.png"
// import righty from "../assets/righty.png"
// import border from "../assets/hero2.png"
// import avizva from "../assets/AVIZVA.mp4"

// import office from "../assets/office.png"
// import edu from "../assets/edu.png"
// import health from "../assets/hww-lefty.png"
// import kitchenImg from "../assets/hww-righty.png"
// import lab from "../assets/hww-mid.png"

// import v1 from "../assets/icon1.png"
// import v2 from "../assets/icon2.png"
// import v3 from "../assets/icon3.png"

// import page4ilus from "../assets/bento.mp4"



// import filus from "../assets/footer-ilus.png"

import { Rotate } from '../components/Rotate'
import GetInTouch from '../components/GetInTouch'

import Clients from '../components/Clients'

// import heroVid from "../assets/hero-vid.mp4"
import { Helmet } from 'react-helmet';
// import mobileBento from "../assets/mobile-bento.mp4"


const Hero = () => {
  const getInTouchRef = useRef(null); // Create a ref for GetInTouch component
  const [page4VideoSrc, setPage4VideoSrc] = useState();
  const scrollToGetInTouch = () => {
    // Function to scroll to the GetInTouch section
    getInTouchRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const updateVideoSrc = () => {
      // Check if the screen width is mobile-size and update video src
      if (window.innerWidth <= 768) {
        setPage4VideoSrc("https://res.cloudinary.com/dicusurfx/video/upload/v1730985127/mobile-bento_gdoslo.mp4"); // Mobile video
      } else {
        setPage4VideoSrc("https://res.cloudinary.com/dicusurfx/video/upload/v1730985153/bento_f8vgds.mp4"); // Desktop video
      }
    };

    updateVideoSrc(); // Initial check
    window.addEventListener('resize', updateVideoSrc); // Listen for resize events

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateVideoSrc);
    };
  }, []);

  return (
    <div className='hero-wrapper'>
      <Helmet>
        <title>Nikshoo Furniture Solutions</title>
        <meta name="description" content="Explore a wide range of furniture solutions including sofas, tables, and more." />
        <meta
          name="keywords"
          content="
            furniture, 
            sofa, 
            sofa set, 
            table, 
            study table, 
            beds, 
            dining table, 
            dressing table, 
            chair, 
            wardrobe, 
            cupboards, 
            furniture shop near me, 
            double bed, 
            tv unit, 
            bookshelves, 
            folding bed, 
            computer table, 
            desk top, 
            sofa come bed, 
            furniture stores near me, 
            bed sets, 
            plastic chairs, 
            godrej almirah, 
            chests, 
            bed room,
          "
        />
      </Helmet>
      <div className="page1">
        <div className="container">
          <video src="https://res.cloudinary.com/dicusurfx/video/upload/v1737818299/st_video_1_pu0pqj.mp4" autoPlay muted playsInline loop loading="lazy"></video>
        </div>
        <div className="hero-content">
          <h1>Furniture For The <span>Future</span></h1>
          <p>Elevate your spaces with innovative style, functionality and aesthetics</p>
          <div className="hero-button">
            <button onClick={scrollToGetInTouch}>Get Started</button>
            <a href="https://calendly.com/nikshoobackup/30min"><p>Get a Free Consultation</p></a>
          </div>
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
              <a href="/office-furniture">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985133/office_gohucx.png" alt="Office Space" loading="lazy" />
              </a>
            </div>
            <div className="l-con">
              <h2><a href="/office-furniture" className="spaces">Office Furniture <MdOutlineArrowOutward className='green' /></a></h2>
            </div>
          </div>

          <div className="part2-r mobileabs">
            <div className="r-img">
              <a href="/furniture-for-education">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985094/edu_fuf0it.png" alt="Education Space" loading="lazy" />
              </a>
            </div>
            <div className="r-con">
              <h2><a href="/furniture-for-education" className="spaces">Furniture for Education <MdOutlineArrowOutward className='green' /></a></h2>
            </div>
          </div>
        </div>

        <div className="part3">

          <div className="part2-r abs">
            <div className="r-img">
              <a href="/furniture-for-education">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985094/edu_fuf0it.png" alt="Education Space" loading="lazy" />
              </a>
            </div>
            <div className="r-con">
              <h2><a href="/furniture-for-education" className="spaces">Education Spaces <MdOutlineArrowOutward className='green' /></a></h2>
            </div>
          </div>

          <div className="part3-sub">
            <div className="part3-img-div">
              <a href="/hospital-furniture">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985108/hww-lefty_fpguk9.png" alt="Healthcare Space" loading="lazy" />
              </a>
            </div>
            <div className="part3-con">
              <h2><a href="/hospital-furniture" className="spaces">Healthcare Spaces <MdOutlineArrowOutward className='green' /></a></h2>
            </div>
          </div>
          <div className="part3-sub">
            <div className="part3-img-div">
              <a href="/laboratory-furniture">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985108/hww-mid_srltbk.png" alt="Laboratory Space" loading="lazy" />
              </a>
            </div>
            <div className="part3-con">
              <h2><a href="/laboratory-furniture" className="spaces">Laboratory Spaces <MdOutlineArrowOutward className='green' /></a></h2>
            </div>
          </div>
          <div className="part3-sub">
            <div className="part3-img-div">
              <a href="/commercial-kitchen-equipment">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985108/hww-righty_wpfkt1.png" alt="Commercial Kitchen" loading="lazy" />
              </a>
            </div>
            <div className="part3-con">
              <h2><a href="/commercial-kitchen-equipment" className="spaces">Commercial Kitchen <MdOutlineArrowOutward className='green' /></a></h2>
            </div>
          </div>
        </div>

        <div className="side">
          <h1>SUSTAINABLE FURNITURE SOLUTIONS</h1>
        </div>
      </div>

      <div className="page3">
        <div className="page3-mobile">
          <h1>Imagine Your Future Spaces Crafted with Precision & Style</h1>
          <p>Enhance your spaces with the comfortable furniture crafted by us</p>
          <a onClick={scrollToGetInTouch}>Enquire now!</a>
        </div>
        <div className="page3-con">
          <h1>Imagine Your Future Spaces Crafted with Precision & Style</h1>
        </div>
        <div className="page3-b">
          <div className="left-ilus">
            <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985117/lefty_bvf6e7.png" alt="Lefty Illustration" loading="lazy" />
          </div>
          <div className="center-ilus">
            <video src="https://res.cloudinary.com/dicusurfx/video/upload/v1730985154/AVIZVA_s9sy6v.mp4" alt="AVIZVA Video" autoPlay muted playsInline loop />
          </div>
          <div className="right-ilus">
            <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985138/righty_el1zci.png" alt="Righty Illustration" loading="lazy" />
          </div>
          <button className='btn' onClick={scrollToGetInTouch}>
            Enquire Now
          </button>
        </div>
      </div>

      <div className="info">
        <div className="info-sub">
          <div className="info-img-div">
          <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985110/icon1_ydge9o.png" alt="Innovative Design Icon" loading="lazy" />
          </div>
          <div className="info-sub-con">
            <h2>Innovative Design</h2>
            <p>We provide research-driven designs that combine style, functionality, and ergonomics.</p>
          </div>
        </div>
        <div className="info-sub">
          <div className="info-img-div">
          <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985111/icon2_gppets.png" alt="Durability & Quality Icon" loading="lazy" />
          </div>
          <div className="info-sub-con">
            <h2>Durability & Quality</h2>
            <p>Our furniture is built to last, with high-quality materials and construction that withstands heavy use.</p>
          </div>
        </div>
        <div className="info-sub">
          <div className="info-img-div">
          <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985111/icon3_cpe7vs.png" alt="Broad Choice Icon" loading="lazy" />
          </div>
          <div className="info-sub-con">
            <h2>Broad Choice</h2>
            <p>We have a wide range of products and materiality options to meet style, preferences & budget needs.</p>
          </div>
        </div>
      </div>

      <div className="page4">
        <div className="page4-heading">
          <h1>How Are We Different?</h1>
          <p>Crafting unique furniture to enhance your spaces with comfort</p>
        </div>
        <div className="page4-img-div">
          <video src={page4VideoSrc} alt="Bento Video" autoPlay muted playsInline loop loading="lazy" />
        </div>

        <div className="our-clients">
          <h1>Our Clients</h1>
          <Clients></Clients>
        </div>
      </div>
      <Rotate></Rotate>

      <div className="gallery">
        <h1>Get Inspired</h1>
        <p>Browse our gallery for a glimpse into perfectly designed workspaces</p>
        <Gallery></Gallery>
      </div>
      <div ref={getInTouchRef}>
        <GetInTouch />
      </div>
      <div className="footer-ilus">
      <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985099/footer-ilus_ffxt4i.png" loading="lazy" alt="Sofa table Sofa set Furniture" />
      </div>

    </div>
  )
}

export default Hero