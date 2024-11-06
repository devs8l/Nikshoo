import React, { useRef,useState,useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom"
import { MdOutlineArrowOutward } from "react-icons/md";

import { Gallery } from '../components/Gallery';

import "../pages/Hero.css"
import Carousel from "../components/Carousel"
import Navbar from '../components/Navbar'
import lefty from "../assets/lefty.png"
import righty from "../assets/righty.png"
import border from "../assets/hero2.png"
import avizva from "../assets/AVIZVA.mp4"

import office from "../assets/office.png"
import edu from "../assets/edu.png"
import health from "../assets/hww-lefty.png"
import kitchenImg from "../assets/hww-righty.png"
import lab from "../assets/hww-mid.png"

import v1 from "../assets/icon1.png"
import v2 from "../assets/icon2.png"
import v3 from "../assets/icon3.png"

import page4ilus from "../assets/bento.mp4"



import filus from "../assets/footer-ilus.png"

import { Rotate } from '../components/Rotate'
import GetInTouch from '../components/GetInTouch'

import Clients from '../components/Clients'

import heroVid from "../assets/hero-vid.mp4"
import { Helmet } from 'react-helmet';
import mobileBento from "../assets/mobile-bento.mp4"


const Hero = () => {
  const getInTouchRef = useRef(null); // Create a ref for GetInTouch component
  const [page4VideoSrc, setPage4VideoSrc] = useState(page4ilus);
  const scrollToGetInTouch = () => {
    // Function to scroll to the GetInTouch section
    getInTouchRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    const updateVideoSrc = () => {
      // Check if the screen width is mobile-size and update video src
      if (window.innerWidth <= 768) {
        setPage4VideoSrc(mobileBento); // Mobile video
      } else {
        setPage4VideoSrc(page4ilus); // Desktop video
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
          <video src="https://res.cloudinary.com/dx0eyuux2/video/upload/v1730900831/hero-vid_fenuaw.mp4" autoPlay muted playsInline loop loading="lazy"></video>
        </div>
        <div className="hero-content">
          <h1>Furniture For The <span>Future</span></h1>
          <p>Elevate your spaces with innovative style, functionality and aesthetics</p>
          <div className="hero-button">
            <button onClick={scrollToGetInTouch}>Get Started</button>
            <a href=""><p>Get a Free Consultation</p></a>
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
              <a href="/office">
                <img src="https://res.cloudinary.com/dx0eyuux2/image/upload/v1730900815/office_c7jkzu.png" alt="Office Space" loading="lazy" />
              </a>
            </div>
            <div className="l-con">
              <h2><a href="/office" className="spaces">Office Space <MdOutlineArrowOutward className='green' /></a></h2>
            </div>
          </div>

          <div className="part2-r mobileabs">
            <div className="r-img">
              <a href="/education">
                <img src="https://res.cloudinary.com/dx0eyuux2/image/upload/v1730900793/edu_fvt7of.png" alt="Education Space" loading="lazy" />
              </a>
            </div>
            <div className="r-con">
              <h2><a href="/education" className="spaces">Education Space <MdOutlineArrowOutward className='green' /></a></h2>
            </div>
          </div>
        </div>

        <div className="part3">

          <div className="part2-r abs">
            <div className="r-img">
              <a href="/education">
                <img src="https://res.cloudinary.com/dx0eyuux2/image/upload/v1730900793/edu_fvt7of.png" alt="Education Space" loading="lazy" />
              </a>
            </div>
            <div className="r-con">
              <h2><a href="/education" className="spaces">Education Space <MdOutlineArrowOutward className='green' /></a></h2>
            </div>
          </div>

          <div className="part3-sub">
            <div className="part3-img-div">
              <a href="/healthcare">
                <img src="https://res.cloudinary.com/dx0eyuux2/image/upload/v1730900803/hww-lefty_gxccle.png" alt="Healthcare Space" loading="lazy" />
              </a>
            </div>
            <div className="part3-con">
              <h2><a href="/healthcare" className="spaces">Healthcare Space <MdOutlineArrowOutward className='green' /></a></h2>
            </div>
          </div>
          <div className="part3-sub">
            <div className="part3-img-div">
              <a href="/lab">
                <img src="https://res.cloudinary.com/dx0eyuux2/image/upload/v1730900804/hww-mid_vogg9n.png" alt="Laboratory Space" loading="lazy" />
              </a>
            </div>
            <div className="part3-con">
              <h2><a href="/lab" className="spaces">Laboratory Spaces <MdOutlineArrowOutward className='green' /></a></h2>
            </div>
          </div>
          <div className="part3-sub">
            <div className="part3-img-div">
              <a href="/kitchen">
                <img src="https://res.cloudinary.com/dx0eyuux2/image/upload/v1730900804/hww-righty_ke83mt.png" alt="Commercial Kitchen" loading="lazy" />
              </a>
            </div>
            <div className="part3-con">
              <h2><a href="/kitchen" className="spaces">Commercial Kitchen <MdOutlineArrowOutward className='green' /></a></h2>
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
            <img src={lefty} alt="Lefty Illustration" loading="lazy" />
          </div>
          <div className="center-ilus">
            <video src={avizva} alt="AVIZVA Video" autoPlay muted playsInline loop />
          </div>
          <div className="right-ilus">
            <img src={righty} alt="Righty Illustration" loading="lazy" />
          </div>
          <button className='btn' onClick={scrollToGetInTouch}>
            Enquire Now
          </button>
        </div>
      </div>

      <div className="info">
        <div className="info-sub">
          <div className="info-img-div">
            <img src={v1} alt="Innovative Design Icon" loading="lazy" />
          </div>
          <div className="info-sub-con">
            <h2>Innovative Design</h2>
            <p>We provide research-driven designs that combine style, functionality, and ergonomics.</p>
          </div>
        </div>
        <div className="info-sub">
          <div className="info-img-div">
            <img src={v2} alt="Durability & Quality Icon" loading="lazy" />
          </div>
          <div className="info-sub-con">
            <h2>Durability & Quality</h2>
            <p>Our furniture is built to last, with high-quality materials and construction that withstands heavy use.</p>
          </div>
        </div>
        <div className="info-sub">
          <div className="info-img-div">
            <img src={v3} alt="Broad Choice Icon" loading="lazy" />
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
          <p>Enhance your spaces with the comfortable furniture crafted by us</p>
        </div>
        <div className="page4-img-div">
          <video src={page4VideoSrc} alt="Bento Video" autoPlay muted playsInline loop loading="lazy"/>
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
        <img src={filus} loading="lazy" alt="Sofa table Sofa set Furniture" />
      </div>

    </div>
  )
}

export default Hero