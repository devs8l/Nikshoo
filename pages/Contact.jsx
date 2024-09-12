import React from 'react'
import "../pages/Contact.css"
import heroMain from "../assets/hero-main.png"
import contactImg from "../assets/contact-img.png"

const Contact = () => {
  return (
    <div className='contact-wrap'>
      <img src={heroMain} alt="" />
      <div className="contact-hero">
        <div className="contact-hero-left">
            <h1>
                Contact Us
            </h1>
            <p>
            Drop us a note and we’ll get back to you as quickly as possible
            </p>
            <a href="">Write Us Your Query</a>
        </div>
        <div className="contact-hero-right">
            <img src={contactImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Contact
