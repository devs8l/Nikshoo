import React, { useState,useRef } from 'react';
import "../components/GetInTouch.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Thanks } from '../components/Thanks'; // Import the Thanks component

const GetInTouch = () => {
    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;
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
                    <form onSubmit={handleSubmit} className="project-form">
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

                                <div className="form-group">
                                    <label>Location:</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                    />
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
