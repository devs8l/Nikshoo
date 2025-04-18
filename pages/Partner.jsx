import React, { useState, useRef, useEffect } from 'react';
import "../pages/Partner.css";
// import heroMain from "../assets/hero-main.png";
// import bp from "../assets/become-partner.png";

// import iconPartnerleft from "../assets/partner-2-r.png";
// import iconPartnerRight from "../assets/partner-2-l.png";

// import partnerone from "../assets/partner3-1.png";
// import partnertwo from "../assets/partner3-2.png";
// import partnerthree from "../assets/partner3-3.png";
// import lefty from "../assets/lefty.png";
// import righty from "../assets/righty.png";
import { Thanks } from '../components/Thanks';
import emailjs from '@emailjs/browser';
import { MdOutlineFileUpload } from "react-icons/md";

import ReCAPTCHA from 'react-google-recaptcha';

import { Helmet } from 'react-helmet';


const Partner = () => {
    const [phoneError, setPhoneError] = useState(''); // State to manage phone number error
    const [formData, setFormData] = useState({
        partnerRole: '',
        partnerName: '',
        companyName: '',
        phoneNumber: '',
        email: '',
        city: '',
        document: null,
        comments: ''
    });

    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState({
        title: '',
        body: ''
    });


    const [responseMessage, setResponseMessage] = useState(null);
    const [documentUrl, setDocumentUrl] = useState('');

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
        setFormData({ ...formData, city: city });
        setShowDropdown(false); // Hide dropdown after selection
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'document' && files.length > 0) {
            setFileName(files[0].name);
            setFormData({
                ...formData,
                [name]: files[0] // This should set the file object
            });
        } else {
            setFormData({
                ...formData,
                [name]: value // Update other fields
            });
        }

        if (name === "city") {
            setShowDropdown(true); // Show dropdown when typing in location
            fetchCities(value); // Fetch cities as the user types
        }

        if (name === 'phoneNumber') {
            if (value.length < 10) {
                setPhoneError('Must be 10 digits.');
            } else {
                setPhoneError(''); // Clear error if valid
            }
        }
    };

    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;
    const [verified, setVerified] = useState(false)

    const recaptchaRef = useRef(null);
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);
    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value); // Sets to true if CAPTCHA is verified, false otherwise
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (!isCaptchaVerified) {
            alert("Please complete the CAPTCHA before submitting the form.");
            return;
        }

        // Create FormData object to include form fields and the file
        const data = new FormData();
        data.append('partnerRole', formData.partnerRole);
        data.append('partnerName', formData.partnerName);
        data.append('companyName', formData.companyName);
        data.append('phoneNumber', formData.phoneNumber);
        data.append('email', formData.email);
        data.append('city', formData.city);
        data.append('comments', formData.comments);
        data.append('document', formData.document); // Add the document file

        const emailParams = {
            from_name: formData.partnerName, // Sender (Partner's name)
            message: `
                Email: ${formData.email}
                Contact No: ${formData.phoneNumber}
                City: ${formData.city}
                Partner Role: ${formData.partnerRole}
                Company Name: ${formData.companyName}
                Comments/Queries: ${formData.comments}
            `
        };

        try {
            setLoading(true);

            // Send POST request to the API
            const response = await fetch('https://nikshoo-backend.vercel.app/partner/submit', {
                method: "POST",
                body: data,
            });
            // console.log(formData);
            setFormData({
                partnerRole: '',
                partnerName: '',
                companyName: '',
                phoneNumber: '',
                email: '',
                city: '',
                document: null,
                comments: ''
            })


            const result = await response.json();


            setLoading(false);

            if (response.ok) {
                emailjs.send('service_gbhr1de', 'template_2e1dxq8', emailParams, 'R2Gl4qKFqy2yMwWaS')
                .then(() => {
                  console.log('Email sent successfully!');
                })
                .catch(error => {
                  console.error('Email sending failed:', error);
                });
                setPopupMessage({
                    title: 'Thank you for your submission!',
                    body: 'Our team shall get back to you shortly.'
                });
                setPopupVisible(true);

                setCaptchaVerified(false);
                recaptchaRef.current.reset();

            } else {
                setPopupMessage({
                    title: 'Something went wrong',
                    body: 'Try again later.'
                });
                setPopupVisible(true);
            }
        } catch (error) {
            setLoading(false);
        }
    };
    const handleClosePopup = () => {
        setPopupVisible(false); // Close the popup
    };

    const query = useRef(null);
    const scrollToGetInTouch = () => {
        // Function to scroll to the GetInTouch section
        query.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header>
            <header className="partner-wrap">
                <Helmet>
                    <title>Become Partner | Nikshoo Furniture Solutions</title>
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
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985102/hero-main_ajhuae.png" alt="" />
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985117/lefty_bvf6e7.png" alt="" id='leftyy-part' />
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985138/righty_el1zci.png" alt="" id='rightyy-part' />

                <div className="partner1">
                    <div className="partner1-left">
                        <h1>Become A Partner</h1>
                        <p>We are transforming the approach to designing spaces, creating innovative, adaptable environments that inspire. Let's collaborate and make visionary spaces reality!</p>
                        <p href="" className='paragreen' onClick={scrollToGetInTouch}><u>Join Us!</u></p>
                    </div>
                    <div className="partner1-right">
                        <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985080/become-partner_jllz8f.png" alt="" />
                    </div>
                </div>

                <div className="partner2">
                    <h1>We Believe, Collaboration</h1>
                    <div className="partner-2-sub">
                        <div className="partner2-colab">
                            <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985134/partner-2-r_cypxjd.png" alt="" />
                            <p>Fosters a dynamic exchange of ideas, stimulating creativity and innovation.
                            </p>
                        </div>
                        <div className="partner2-colab">
                            <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985133/partner-2-l_rk1foh.png" alt="" />
                            <p>Builds trust, strengthens communication, and develops stronger relationships.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="partner3">
                    <h1>Join Us As</h1>
                    <div className="partner3-sub">
                        <div className="partner3-con">
                            <h2>Designer</h2>
                            <p>1. Opportunity to work on innovative projects</p>
                            <p>2. Access to new technologies and tools</p>
                            <p>3. Exposure to new markets or clients</p>
                        </div>
                        <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985135/partner3-1_qltxuq.png" alt="" />
                    </div>
                    <div className="partner3-sub reverse">
                        <div className="partner3-con">
                            <h2>Product Suppliers</h2>

                            <p>1. Potential for increased sales and revenue</p>
                            <p>2. Joint marketing efforts</p>
                            <p>3. Greater reach and brand exposure</p>
                        </div>
                        <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985135/partner3-2_capdd2.png" alt="" />
                    </div>
                    <div className="partner3-sub">
                        <div className="partner3-con">
                            <h2>Execution Partner</h2>

                            <p>1. Potential for long-term collaborations</p>
                            <p>2. Steady stream of projects</p>
                            <p>3. Priority access to new projects</p>
                        </div>
                        <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985135/partner3-3_dcacgm.png" alt="" />
                    </div>
                </div>

                {/* Form Section */}
                <div className="partner-form" ref={query}>
                    <h1>Almost There</h1>
                    <form className="custom-form" onSubmit={handleSubmit}>
                        {/* Partner Dropdown */}
                        <div className="partner-section">
                            <select
                                id="partnerRole"
                                name="partnerRole"
                                value={formData.partnerRole}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled hidden>Partner as a</option>
                                <option value="Designer">Designer</option>
                                <option value="Execution Partner">Execution Partner</option>
                                <option value="Product Supplier">Product Supplier</option>
                            </select>
                        </div>

                        {/* Person/Company Name */}
                        <div className="form-row">
                            <label htmlFor="partnerName">Your Name</label>
                            <input
                                type="text"
                                id="partnerName"
                                name="partnerName"
                                placeholder="Your name"
                                value={formData.partnerName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <label htmlFor="companyName">Company Name</label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                placeholder="Company name"
                                value={formData.companyName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {/* Phone Number & Email */}
                        <div className="form-row two-columns">
                            <div className="form-column">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Enter your phone number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                                {phoneError && <p className="error gitouch partner">{phoneError}</p>} {/* Display phone error */}

                            </div>
                            <div className="form-column">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        {/* City */}
                        <div ref={dropdownRef} className='form-row'>
                            <label>City</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder='Enter Your city'
                                autoComplete="off"
                                required
                            />
                            {showDropdown && cities.length > 0 && (
                                <ul className="dropdown git-partner">
                                    {cities.map(city => (
                                        <li key={city.id} onClick={() => selectCity(city.name)}>
                                            {city.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Upload Document */}
                        <div className="form-row">
                            <h4>{fileName ? fileName : 'Upload Document (Upto 5MB)'}</h4>
                            <label htmlFor="document" id='doc'><MdOutlineFileUpload className='upload' />Upload Document </label>
                            <input
                                type="file"
                                id="document"
                                name="document"
                                onChange={handleChange}
                                className="file-input"
                            />
                        </div>

                        {/* Comments/Queries */}
                        <div className="form-row">
                            <label htmlFor="comments">Comments/Queries</label>
                            <textarea
                                id="comments"
                                name="comments"
                                placeholder="Type Your Comments/Queries"
                                rows="4"
                                value={formData.comments}
                                onChange={handleChange}
                            />
                        </div>
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={recaptchaKey}
                            onChange={handleCaptchaChange}

                        />

                        {/* Submit Button */}
                        <div className="form-row submit-row">
                            <button type="submit" disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit'}
                            </button>
                        </div>
                    </form>


                </div>
            </header>
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

export default Partner;