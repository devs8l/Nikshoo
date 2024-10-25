import React, { useState } from 'react';
import '../pages/Hww.css';
import hww1 from "../assets/hww1.png";
import hww2 from "../assets/hww2.png";
import hww3 from "../assets/hww3.png";
import hww4 from "../assets/hww4.png";
import hww5 from "../assets/hww5.png";
import heroMain from "../assets/hero-main.png";
import hwwHero from "../assets/hww-hero.png";
import hwwFoot from "../assets/hww-footer.png";
import { Thanks } from '../components/Thanks'; // Import the Thanks component
import ReCAPTCHA from 'react-google-recaptcha';

import { Helmet } from 'react-helmet';

const Hww = () => {
  const [phoneError, setPhoneError] = useState(''); // State to manage phone number error
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    location: '',
    message: '',
    email: ''
  });



  // Popup state
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState({
    title: '',
    body: ''
  });

  const toggleFormVisibility = () => {
    setFormVisible(!isFormVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (name === 'phoneNumber') {
      if (value.length < 10) {
        setPhoneError('Must be 10 digits.');
      } else {
        setPhoneError(''); // Clear error if valid
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phoneError) {
      return; // Prevent submission if there's a phone error
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
        setPopupMessage({
          title: 'Thank you for your enquiry!',
          body: 'We will get back to you shortly.'
        });
      } else {
        setPopupMessage({
          title: 'Something went wrong',
          body: 'Please try again later.'
        });
      }
      setPopupVisible(true);

      // Clear form
      setFormData({
        fullName: '',
        phoneNumber: '',
        location: '',
        message: '',
        email: ''
      });

    } catch (error) {
      setPopupMessage({
        title: 'Something went wrong',
        body: 'Please try again later.'
      });
      setPopupVisible(true);
    }
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    toggleFormVisibility(); // Optionally close the form when the popup is closed
  };

  return (
    <header className="hww-wrap">

      <Helmet>
        <title>How We Work | Nikshoo Furniture Solutions</title>
        <meta name="description" content="Explore how we work at Nikshoo Furniture Solutions through consultation, space planning, product selection, installation, and after-sales support." />
        <meta name="keywords" content="furniture, consultation, space planning, installation, product selection, after-sales support" />
      </Helmet>
      <div className="hero-hww">
        <img src={heroMain} alt="Hero main" loading="lazy" />

        <div className="hww-hero-con">
          <h1>How We Work</h1>
          <p className='hww-para'>At Nikshoo,  we're dedicated to providing exceptional  furniture solutions that enhance your work environment. Here's an overview of our collaborative and tailored approach:</p>
        </div>
        <div className="hww-img-div">
          <img src={hwwHero} alt="How we work hero" loading="lazy" />

        </div>
      </div>
      <div className="image-container">
        <div className="image-part part-1">
          <img src={hww1} alt="Consultation process" loading="lazy" />

          <div className="hww-con">
            <div className="num">
              <h1>1</h1>
            </div>
            <div className="num-para">
              <h2>Consultation</h2>
              <p>
                -We listen to your needs, goals, and challenges to understand your unique requirements.
              </p>
              <p>
                -Our expert team guides you through a discovery process to identify the perfect furniture solutions.</p>
            </div>
          </div>
        </div>
        <div className="image-part part-2">
          <img src={hww2} alt="Space planning process" loading="lazy" />

          <div className="hww-con">
            <div className="num">
              <h1>2</h1>
            </div>
            <div className="num-para">
              <h2>Space Planning</h2>
              <p>
                - We assess your office space, taking into account layout, functionality, and workflow
              </p>
              <p>- Our designers create a customized floor plan, optimizing your space for productivity and comfort.</p>
            </div>
          </div>
        </div>
        <div className="image-part part-3">
          <img src={hww3} alt="Product selection process" loading="lazy" />

          <div className="hww-con">
            <div className="num">
              <h1>3</h1>
            </div>
            <div className="num-para">
              <h2>Product Selection</h2>
              <p>- We present a curated selection of furniture options, tailored to your style, budget, and needs.
              </p>
              <p>- Our team helps you choose the perfect products, ensuring a cohesive and functional workspace.</p>
            </div>
          </div>
        </div>
        <div className="image-part part-4">
          <img src={hww4} alt="Installation process" loading="lazy" />

          <div className="hww-con">
            <div className="num">
              <h1>4</h1>
            </div>
            <div className="num-para">
              <h2>Installation</h2>
              <p>- Our experienced installation team ensures a seamless and efficient setup process.
              </p>
              <p>
                - We take care of every detail, from delivery to assembly, so you can focus on your business.</p>
            </div>
          </div>
        </div>
        <div className="image-part part-5">
          <img src={hww5} alt="After sales support process" loading="lazy" />

          <div className="hww-con">
            <div className="num">
              <h1>5</h1>
            </div>
            <div className="num-para">
              <h2>After Sales Support</h2>
              <p>- We provide comprehensive support, including maintenance, repairs, and replacement services.
              </p>
              <p>- Our dedicated team ensures your satisfaction and helps you maximize the value of your investment.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="hero-hww">
          <div className="hww-hero-con">
            <h1>Let’s Chat!</h1>
            <p className='hww-para'>Got a question, concern, or idea? We’re all ears! Fill out the form, and let’s get your answer or solution on its way!</p>
            <button onClick={toggleFormVisibility}>
              Enquire Now
            </button>
          </div>
          <div className="hww-img-div">
            <img src={hwwFoot} alt="How we work footer" loading="lazy" />
          </div>
        </div>
      </div>
      {isFormVisible && (
        <div className="popup-form">
          <div className="form-content">
            <button className="close-btn" onClick={toggleFormVisibility}>
              &times;
            </button>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Your Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Your Full Name"
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
                  {phoneError && <p className="error hww">{phoneError}</p>} {/* Display phone error */}

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
                sitekey="Your client site key"
              />
              <button type="submit" id='submit'>Submit</button>
            </form>
          </div>
        </div>
      )}

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
};

export default Hww;
