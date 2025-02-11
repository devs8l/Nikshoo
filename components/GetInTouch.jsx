import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import "../components/GetInTouch.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Thanks } from '../components/Thanks'; // Import the Thanks component

const GetInTouch = () => {
    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;
    const form = useRef();
    const [verified, setVerified] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        contactNo: '',
        location: '',
        budget: '',
        email: '',
        organisation: '',
        areaSqFt: ''
    });

    const [showPopup, setShowPopup] = useState(false); // State to manage popup visibility
    const [popupMessage, setPopupMessage] = useState({ title: '', body: '' }); // State for popup message
    const [hasError, setHasError] = useState(false); // State to manage error
    const [phoneError, setPhoneError] = useState(''); // State to manage phone number error
    const recaptchaRef = useRef(null);

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
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        // Validate phone number
        if (name === 'contactNo') {
            if (value.length < 10) {
                setPhoneError('Must be 10 digits.');
            } else {
                setPhoneError(''); // Clear error if valid
            }
        }
        if (name === "location") {
            setShowDropdown(true); // Show dropdown when typing in location
            fetchCities(value); // Fetch cities as the user types
        }
    };

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

        // Check if there are any errors before submitting
        if (phoneError) {
            return; // Prevent submission if there's a phone error
        }
        const emailParams = {
            from_name: formData.name, // Sender (user's name)
            message: `
                Email: ${formData.email}
                Contact No: ${formData.contactNo}
                Location: ${formData.location}
                Budget: ${formData.budget}
                Organisation: ${formData.organisation}
                Area (sq.ft): ${formData.areaSqFt}
            `
        };

        try {
            const response = await fetch(`https://nikshoo-backend.vercel.app/enquiry/submit`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });
            // const response2 = await fetch(`https://apps.cratiocrm.com/Customize/Webhooks/webhook.php?id=671112`, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(formData),
            // });

            if (response.ok) {
                emailjs.send('service_gbhr1de', 'template_2e1dxq8', emailParams, 'R2Gl4qKFqy2yMwWaS')
                .then(() => {
                    console.log('Email sent successfully!');
                })
                .catch(error => {
                    console.error('Email sending failed:', error);
                });

                // Success case - show thank you popup
                setPopupMessage({
                    title: 'Thank you for taking out your time!',
                    body: 'Our team shall get back to you within 24hrs.'
                });
                setShowPopup(true); // Show popup
                setHasError(false); // No error
            } else {
                // Error case - show error popup
                setPopupMessage({
                    title: 'Something went wrong',
                    body: 'Try again later'
                });
                setShowPopup(true); // Show popup
                setHasError(true); // Error state
            }


            // Reset form data
            setFormData({
                name: '',
                contactNo: '',
                location: '',
                budget: '',
                email: '',
                organisation: '',
                areaSqFt: ''
            });
            setCaptchaVerified(false);
            recaptchaRef.current.reset();

        } catch (error) {
            console.error("Error submitting form:", error);
            // Show error popup
            setPopupMessage({
                title: 'Something went wrong',
                body: 'Try again later'
            });
            setShowPopup(true); // Show popup
            setHasError(true); // Error state
        }
    };

    const closePopup = () => {
        setShowPopup(false); // Close the popup
    };

    return (
        <div className="gi-wrap">
            <div className="gi-box">
                <div className="gi-left">
                    <h1>Space <br /> Transformation <br />Starts Here</h1>
                </div>
                <div className="gi-right">
                    <form onSubmit={handleSubmit} ref={form} className="project-form">
                        <div className="form-con">
                            <div className="left-form">
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Contact No.:</label>
                                    <input
                                        type="text"
                                        name="contactNo"
                                        value={formData.contactNo}
                                        onChange={handleChange}
                                        required
                                    />
                                    {phoneError && <p className="error gitouch">{phoneError}</p>} {/* Display phone error */}
                                </div>

                                <div ref={dropdownRef} className='form-group'>
                                    <label>Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}

                                        autoComplete="off"
                                        required
                                    />
                                    {showDropdown && cities.length > 0 && (
                                        <ul className="dropdown git-home">
                                            {cities.map(city => (
                                                <li key={city.id} onClick={() => selectCity(city.name)}>
                                                    {city.name}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Budget for project:</label>
                                    <input
                                        type="text"
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="right-form">
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Name of organisation:</label>
                                    <input
                                        type="text"
                                        name="organisation"
                                        value={formData.organisation}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Area in sq. ft.:</label>
                                    <input
                                        type="text"
                                        name="areaSqFt"
                                        value={formData.areaSqFt}
                                        onChange={handleChange}
                                    />
                                </div>
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={recaptchaKey}
                                    onChange={handleCaptchaChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="submit-btn" >Enquire Now</button>
                    </form>
                </div>
            </div>

            {/* Popup for success or error */}
            {showPopup && (
                <Thanks
                    message={popupMessage}
                    buttonText={hasError ? 'Try Again' : 'Explore More'}
                    onClose={closePopup}
                />
            )}
        </div>
    );
}

export default GetInTouch;
