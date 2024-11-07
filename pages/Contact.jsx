import React, { useState, useEffect, useRef } from 'react';
import "../pages/Contact.css"
// import heroMain from "../assets/hero-main.png"
// import contactImg from "../assets/contact-img.png"
// import navimg from "../assets/Frame.png"
// import location from "../assets/location.png"
// import lefty from "../assets/lefty.png"
// import righty from "../assets/righty.png"

// import call from "../assets/call.png" 
// import wsp from "../assets/wsp.png"
// import email from "../assets/email.png"


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
  const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;
  const recaptchaRef = useRef(null);
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value); // Sets to true if CAPTCHA is verified, false otherwise
  };

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



  const dropdownRef = useRef(null);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false); // Hide dropdown if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const [cities, setCities] = useState([]); // State to hold the list of cities
  const [showDropdown, setShowDropdown] = useState(false);

  const fetchCities = async (query) => {
    try {
      if (!query) {
        setCities([]);
        return;
      }

      const response = await fetch(`https://api.countrystatecity.in/v1/countries/IN/cities`, {
        headers: {
          "X-CSCAPI-KEY": "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==" // Replace with your API key
        }
      });

      if (response.ok) {
        const data = await response.json();
        const filteredCities = data
          .filter(city => city.name.toLowerCase().startsWith(query.toLowerCase()))
          .slice(0, 10); // Limit to 10 cities for display
        setCities(filteredCities); // Update state with filtered city names
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const selectCity = (city) => {
    setFormData({ ...formData, location: city });
    setShowDropdown(false); // Hide dropdown after selection
  };

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

    if (name === "location") {
      setShowDropdown(true); // Show dropdown when typing in location
      fetchCities(value); // Fetch cities as the user types
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      alert("Please complete the CAPTCHA before submitting the form.");
      return;
    }

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
      <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985102/hero-main_ajhuae.png" alt="Main Hero Image" loading="lazy" />
      <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985117/lefty_bvf6e7.png" alt="Left Decoration" loading="lazy" id='leftyy' />
      <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985138/righty_el1zci.png" alt="Right Decoration" loading="lazy" id='rightyy' />

      <div className="contact-hero">
        <div className="contact-hero-left">
          <h1>Contact Us</h1>
          <p>Drop us a note and we’ll get back to you as quickly as possible</p>
          <p onClick={scrollToGetInTouch} className='paragreen'><u>Write To Us</u></p>
        </div>
        <div className="contact-hero-right">
          <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985086/contact-img_jjxqm2.png" alt="Contact Hero Image" loading="lazy" />
        </div>
      </div>

      <div className="contact2">
        {/* Contact Info Section */}
        <div className="contact-top">
          <div className="contact-ways">
            <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985083/call_aj4ufu.png" alt="" />
            <h3>Call Us</h3>
            <p>+91{contactData.phone}</p>
          </div>
          <div className="contact-ways email">
            <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985092/email_n38q4y.png" alt="" />
            <h3>Email Us</h3>
            <p>{contactData.email}</p>
          </div>
          <div className="contact-ways">
            <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985144/wsp_ilkang.png" alt="" />
            <h3>WhatsApp Us</h3>
            <p>{contactData.whatsapp}</p>
          </div>
        </div>
        <div className="contact-bottom">
          <div className="contact-b-l">
            <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985100/Frame_dbegmd.png" alt="Visit Icon" loading="lazy" />
            <h3>Visit Us</h3>
          </div>
          <div className="contact-b-r">
            <div className="location">
              <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985120/location_nfbgw9.png" alt="Location Icon" loading="lazy" />
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
            <div ref={dropdownRef}>
              <label>Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder='Your City'
                autoComplete="off"
                required
              />
              {showDropdown && cities.length > 0 && (
                <ul className="dropdown">
                  {cities.map(city => (
                    <li key={city.id} onClick={() => selectCity(city.name)}>
                      {city.name}
                    </li>
                  ))}
                </ul>
              )}
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
              ref={recaptchaRef}
              sitekey={recaptchaKey}
              onChange={handleCaptchaChange}

            />
            <button type="submit" >Submit</button>
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
