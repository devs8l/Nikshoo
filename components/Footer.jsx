import React from 'react'
import "../components/Footer.css"
import link1 from "../assets/Link.png"
import link2 from "../assets/link2.png"

import link3 from "../assets/link3.png"

import c1 from "../assets/Container.png"
import c2 from "../assets/Container2.png"
import c3 from "../assets/Container3.png"


import navimgfooter from "../assets/footerlogo.png"
const Footer = () => {
    return (
        <div className="footer-wrap">
            <div className="upper-part">
            <div className="left-foot">
                <div className="footer-logo">
                    <div className="footer-img-div">
                        <img src={navimgfooter} alt="" />
                    </div>
                    <div className="footer-left-content">
                        <h2>Nikshoo</h2>
                        <p>Furniture Solutions</p>
                    </div>
                </div>
                <p>We are a commercial furniture solutions provider whose aim is to help people do their best work in the many places where work is done, by creating spaces that work better.</p>

                <div className="icon-div-footer">
                    <img src={link1}alt="" />
                    <img src={link2}alt="" />
                    <img src={link3}alt="" />
                </div>
            </div>
            <div className="mid-foot">
                <h2>Quick Links</h2>
                <div className="links-footer">
                    <h3>Home</h3>
                    <h3>Shop now</h3>
                    <h3>How we work</h3>
                    <h3>Become A Partner</h3>
                    <h3>About Us</h3>
                    <h3>Contact Us</h3>
                    <h3>Blogs</h3>
                    <h3>Privacy Policy</h3>
                </div>
            </div>
            <div className="right-foot">
                <h2>Contact Information </h2>

                <div className="c-info">
                    <div className="c-top">
                        <div className="c-top-heading">
                            <img src={c1} alt="" />
                            <h3>Address:</h3>
                        </div>
                        <p>Greenshots Retail Pvt. Ltd. 
                        Indore, Madhya Pradesh, 452003</p>
                        <div className="c-top-heading">
                            <img src={c2} alt="" />
                            <h3>Reach us by phone:</h3>
                        </div>
                        <p>011-411-69125</p>
                        <div className="c-top-heading">
                            <img src={c3} alt="" />
                            <h3>Email us:</h3>  
                        </div>
                        <p>inquiry@nikshoo.com</p>
                    </div>
                </div>
            </div>
            </div>
            <div className="copyright">
                <h3>@copy</h3>
            </div>
        </div>
    )
}

export default Footer
