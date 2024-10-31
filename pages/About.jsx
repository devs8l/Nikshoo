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
            <div className="about-offer">
                <h1>What We Offer</h1>
                <p>We offer commercial furniture solutions for Offices, Educational institutions, Corporates and the like. Our aim is to empower spaces for exceptional working, through innovative, sustainable, and performance-driven furniture solutions. Our mission is to deliver certified, high-quality furniture solutions that enhance comfort, productivity, and well-being. Our product line include office, educational , lab , hospital furniture, as well as commercial kitchen equipments. We are also a GeM registered seller and our clientele include various projects and departments of the Government.</p>
            </div>

            <div className="about2">
                <h1>Our Story</h1>
                <p>With about a decade of experience in the industry, our founder, <span>Neha Halen</span>, saw an opportunity to make a difference in the way people work. She brought together a team of experts dedicated to delivering exceptional service, tailored solutions, and sustainable products that enhance the work environment.</p>
            </div>
            <div className="about3">
                <h1>About the Founders</h1>
              

                <div className="founders">
                    <div className="founder-sub">
                        <div className="founder-img">
                            <img src={neha} alt="" />
                        </div>
                        <h2>Neha Halen</h2>
                        <p>Director at Greenshoots Retail Pvt Ltd.</p>
                        <a href="https://www.linkedin.com/in/neha-halen-216b82200/" target='_blank'>Connect on LinkedIn</a>
                        <p className='founder-con'>Neha , an entrepreneur,  has over a decade of experience in  commercial furniture solutions.  A commerce graduate from SRCC, Delhi University, Neha cleared all 3 levels of the Chartered Financial Analyst Program. With a strong business acumen, Neha co-founded Nikshoo furniture Solutions, under Greenshoots Retail Pvt. Ltd. She has established herself in this industry,  delivering tailored solutions to enhance workplace productivity and aesthetics.</p>
                    </div>
                    <div className="founder-sub">
                        <div className="founder-img">
                            <img src={anirudh} alt="" />
                        </div>
                        <h2>Anirudh Halen</h2>
                        <p>Director at Halen Ceramics Pvt Ltd.</p>
                        <a href="https://www.linkedin.com/in/anirudh-halen-5ab69b56/" target='_blank'>Connect on LinkedIn</a>
                        <p className='founder-con'>Anirudh, an entrepreneur, holds a commerce graduation. With over 15 years of experience in the furniture industry, Anirudh has a profound understanding of the products and is passionate about delivering solutions, thus fuelling our mission.   He is adept at managing teams .  Having a knack for executing projects, he helps shape the future of commercial furniture solutions. </p>
                    </div>
                </div>

                {/* <Carousel></Carousel> */}

            </div>
            <div className="about4">
                <h1>Our Values</h1>
                <div className="about4-img-div">
                    <img src={ab1} alt="" />
                    <img src={ab2} alt="" />
                    {/* <img src={ab3} alt="" />
                    <img src={ab4} alt="" /> */}
                </div>
                <div className="about4-img-div">
                    {/* <img src={ab1} alt="" />
                    <img src={ab2} alt="" /> */}
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
