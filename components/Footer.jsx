import React from 'react'
import { useState, useEffect } from 'react';

import "../components/Footer.css"
import link1 from "../assets/Link.png"
import link2 from "../assets/link2.png"

import link3 from "../assets/link3.png"

import c1 from "../assets/Container.png"
import c2 from "../assets/Container2.png"
import c3 from "../assets/Container3.png"
import flast from "../assets/footer-last.png"
import flast2 from "../assets/startup.png"



import navimgfooter from "../assets/footerlogo.png"
const Footer = () => {
    const [contactData, setContactData] = useState({
        email: '',
        phone: '',
        whatsapp: '',
        addresses: ''
    });


    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const response = await fetch('https://nikshoo-backend.vercel.app/api/contact-info-1');
                if (!response.ok) {
                    throw new Error('Failed to fetch contact data.');
                }
                const data = await response.json();
                setContactData(data);

            } catch (err) {

            }
        };
        fetchContactData();
    }, []);


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
                        <img src={link1} alt="" />
                        <img src={link2} alt="" />
                        <img src={link3} alt="" />
                    </div>

                    <div className="gem">
                        <div className="gem1">
                            <img src={flast} alt="" />
                            <p>We’re a GeM Registered Seller</p>
                        </div>
                        <div className="gem2">
                            <img src={flast2} alt="" />
                            <p>We're a DPIIT
                                Registered Startup</p>
                        </div>
                    </div>
                </div>
                <div className="mid-foot">
                    <h2>Quick Links</h2>
                    <div className="links-footer">
                        <h3><a href="/">Home</a></h3>
                        <h3><a href="/howwework">How we work</a></h3>
                        <h3><a href="/partner">Become A Partner</a></h3>
                        <h3><a href="/about">About Us</a></h3>
                        <h3><a href="/contact">Contact Us</a></h3>
                        <h3><a href="/privacy">Privacy Policy</a></h3>
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
                            <p><u>{contactData.addresses}</u></p>
                            <div className="c-top-heading">
                                <img src={c2} alt="" />
                                <h3>Reach us by phone:</h3>
                            </div>
                            <p><u>{contactData.phone}</u></p>
                            <div className="c-top-heading">
                                <img src={c3} alt="" />
                                <h3>Email us:</h3>
                            </div>
                            <p><u>{contactData.email}</u></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <h3>Copyright © 2024</h3>
            </div>
        </div>
    )
}

export default Footer
