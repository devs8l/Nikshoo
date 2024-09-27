import React from 'react'
import "../pages/About.css"
import heroMain from "../assets/hero-main.png"
import aboutright from "../assets/about-hero.png"
import neha from "../assets/neha.png"
import anirudh from "../assets/anirudh.png"
import Carousel from '../components/Carousel'
import ab1 from "../assets/ab1.png"
import ab2 from "../assets/ab2.png"
import ab3 from "../assets/ab3.png"
import ab4 from "../assets/ab4.png"
import filus from "../assets/footer-ilus.png"

const About = () => {
    return (
        <div className='about-wrap'>
            <img src={heroMain} alt="" />
            <div className="about-hero">
                <div className="about-hero-left">
                    <h1>About Us</h1>
                    <p>At Nikshoo Furniture solutions,  we're passionate about creating inspiring workspaces that boost productivity, collaboration, and well-being. As a seasoned furniture supplier, we believe that a well-designed space is the foundation of a successful business.
                    </p>
                </div>
                <div className="about-hero-right">
                    <img src={aboutright} alt="" />
                </div>
            </div>

            <div className="about2">
                <h1>Our Story</h1>
                <p>With about a decade of experience in the industry, our founder, <span>Neha Halen</span>, saw an opportunity to make a difference in the way people work. She brought together a team of experts dedicated to delivering exceptional service, tailored solutions, and sustainable products that enhance the work environment.</p>
            </div>
            <div className="about3">
                <h1>About the Founders</h1>
                <p>With about a decade of experience in the industry, our founder, <span>Neha Halen</span>, saw an opportunity to make a difference in the way people work. She brought together a team of experts dedicated to delivering exceptional service, tailored solutions, and sustainable products that enhance the work environment.</p>

                <div className="founders">
                    <div className="founder-sub">
                        <div className="founder-img">
                            <img src={neha} alt="" />
                        </div>
                        <h2>Neha Halen</h2>
                        <p>Director at Greenshoots Retail Pvt Ltd.</p>
                        <a href="">Contact on LinkedIn</a>
                    </div>
                    <div className="founder-sub">
                        <div className="founder-img">
                            <img src={anirudh} alt="" />
                        </div>
                        <h2>Anirudh Halen</h2>
                        <p>Director at Halen Ceramics Pvt Ltd.</p>
                        <a href="">Contact on LinkedIn</a>
                    </div>
                </div>

                <Carousel></Carousel>

            </div>
            <div className="about4">
                <h1>Our Vision</h1>
                <div className="about4-img-div">
                    <img src={ab1} alt="" />
                    <img src={ab2} alt="" />
                    <img src={ab3} alt="" />
                    <img src={ab4} alt="" />
                </div>
            </div>
            <div className="footer-ilus">
                <img src={filus} alt="" />
            </div>
        </div>
    )
}

export default About
