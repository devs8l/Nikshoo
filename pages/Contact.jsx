import React, { useState, useEffect, useRef } from 'react';
import "../pages/Contact.css"
import heroMain from "../assets/hero-main.png"
import contactImg from "../assets/contact-img.png"
import navimg from "../assets/Frame.png"
import location from "../assets/location.png"
import lefty from "../assets/lefty.png"
import righty from "../assets/righty.png"
import { Helmet } from 'react-helmet';

import ReCAPTCHA from "react-google-recaptcha";

import { Thanks } from '../components/Thanks'; // Import the Thanks component

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    location: '',
    message: '',
    email: ''
  });
  const query = useRef(null);
  const scrollToGetInTouch = () => {
    // Function to scroll to the GetInTouch section
    query.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [contactData, setContactData] = useState({
    email: '',
    phone: '',
    whatsapp: '',
    addresses: ''
  });

  // State to handle popup
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState({
    title: '',
    body: ''
  });

  // State to track phone number validation error
  const [phoneError, setPhoneError] = useState('');

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the input field is for phone number and apply validation
    if (name === "phoneNumber") {
      if (value.length < 10) {
        setPhoneError('Phone number must be at least 10 digits.');
      } else {
        setPhoneError(''); // Clear error if phone number is valid
      }
    }

    // Update form data state
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Skip form submission if there's a phone number error
    if (phoneError) {
      return;
    }

    try {
      const response = await fetch(`https://nikshoo-backend.vercel.app/contact/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If successful, show the thank you popup
        setPopupMessage({
          title: 'Thank you for taking out your time!',
          body: 'Our team shall get back to you within 24hrs.'
        });
        setPopupVisible(true);
      } else {
        // Show error message
        setPopupMessage({
          title: 'Something went wrong',
          body: 'Try again later.'
        });
        setPopupVisible(true);
      }

      // Clear form
      setFormData({
        fullName: '',
        phoneNumber: '',
        location: '',
        message: '',
        email: ''
      });

    } catch (error) {
      // Show error message on exception
      setPopupMessage({
        title: 'Something went wrong',
        body: 'Try again later.'
      });
      setPopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false); // Close the popup
  };

  return (
    <header className='contact-wrap'>
      <Helmet>
        <title>Contact Us | Nikshoo Furniture Solutions</title>
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
            bed room
          "
        />
      </Helmet>
      <img src={heroMain} alt="Main Hero Image" loading="lazy" />
      <img src={lefty} alt="Left Decoration" loading="lazy" id='leftyy' />
      <img src={righty} alt="Right Decoration" loading="lazy" id='rightyy' />

      <div className="contact-hero">
        <div className="contact-hero-left">
          <h1>Contact Us</h1>
          <p>Drop us a note and we’ll get back to you as quickly as possible</p>
          <p onClick={scrollToGetInTouch} className='paragreen'><u>Write To Us</u></p>
        </div>
        <div className="contact-hero-right">
          <img src={contactImg} alt="Contact Hero Image" loading="lazy" />
        </div>
      </div>

      <div className="contact2">
        {/* Contact Info Section */}
        <div className="contact-top">
          <div className="contact-ways">
            <img src="" alt="" />
            <h3>Call Us</h3>
            <p>{contactData.phone}</p>
          </div>
          <div className="contact-ways">
            <img src="" alt="" />
            <h3>Email Us</h3>
            <p>{contactData.email}</p>
          </div>
          <div className="contact-ways">
            <img src="" alt="" />
            <h3>WhatsApp Us</h3>
            <p>{contactData.whatsapp}</p>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-b-l">
            <img src={navimg} alt="Visit Icon" loading="lazy" />
            <h3>Visit Us</h3>
          </div>
          <div className="contact-b-r">
            <div className="location">
              <img src={location} alt="Location Icon" loading="lazy" />
              <h3>Indore:</h3>
              <p>{contactData.addresses}</p>
            </div>
            <h4>{contactData.addresses}</h4>

          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact3" ref={query}>
        <h1>Get In Touch</h1>
        <p>Ready to transform your workspace? Contact us today to explore how we can help you create a space that inspires success.</p>
        <div className="contactus-form" ref={query}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Your Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Type Your Name"
                required
              />
            </div>
            <div className="half-row">
              <div>
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  required
                />
                {phoneError && <span className="error">{phoneError}</span>} {/* Display error */}
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  required
                />
              </div>
            </div>
            <div>
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Your Location"
                required
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type Your Message"
                required
              />
            </div>
            <ReCAPTCHA
              sitekey="6Leo2moqAAAAANTwPPI-CokkG_njK0x2fn6qATVk"
              
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Popup Component */}
      {popupVisible && (
        <Thanks
          message={popupMessage}
          onClose={handleClosePopup}
          buttonText="Explore More"
        />
      )}
    </header>
  );
}

export default Contact;
