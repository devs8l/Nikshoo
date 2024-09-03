import React from 'react'
import "../components/Footer.css"
import link1 from "../assets/Link.png"
import link2 from "../assets/link2.png"

import link3 from "../assets/link3.png"

import navimgfooter from "../assets/footerlogo.png"
const Footer = () => {
    return (
        <div className="footer-wrap">
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

            </div>
            <div className="right-foot">

            </div>
        </div>
    )
}

export default Footer
