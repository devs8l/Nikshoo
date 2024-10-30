import { React, useState, useEffect } from 'react'

import "../pages/Space.css"
import officeHero from "../assets/office-hero.png"
import officeHeroRight from "../assets/office-hero-right.png"

import DoctorExam from "../assets/Doctor-table.png"
import exeDesk from "../assets/exeDesk.png"
import Workstation from "../assets/Workstation.png"
import Cube from "../assets/cubicles.png"
import Conf from "../assets/con-room.png"
import Sofas from "../assets/sofas.png"
import Lounge from "../assets/lounge.png"
import Compact from "../assets/compact.png"
import Pods from "../assets/pods.png"
import Cafe from "../assets/Cafeteria.png"
import Storage from "../assets/storage.png"
import Locker from "../assets/locker.png"

import heroMain from "../assets/hero-main.png"

import HealthcareHero from "../assets/Health-hero.png"
import HealthcareHeroMobile from "../assets/mobile-healthcare-hero.png"
import HealthcareHeroRight from "../assets/Health-right-hero.png"
import Principal from "../assets/Principal.png"
import GreySofa from "../assets/grey-sofa.png"

import waiting from "../assets/wait.png"
import soft from "../assets/soft-seat.png"
import tward from "../assets/two.png"
import HospitalRoom from "../assets/hos-room.png"

import { Thanks } from '../components/Thanks'; // Import the Thanks component
import ReCAPTCHA from 'react-google-recaptcha';





const Healthcare = () => {
    const furnitureData = [
        { id: 1, img: DoctorExam, title: 'Doctor Examination' },
        { id: 2, img: Principal, title: 'Administration Desk' },
        { id: 3, img: GreySofa, title: 'Sofas' },
        { id: 4, img: waiting, title: 'Waiting area' },
        { id: 5, img: soft, title: 'Soft Seating' },
        { id: 9, img: Pods, title: 'Pods' },
        { id: 10, img: Cafe, title: 'Cafeteria/Recreation' },
        { id: 11, img: Storage, title: 'Storages' },
        { id: 12, img: Locker, title: 'Lockers' },
        { id: 6, img: tward, title: 'Transfer , ward & OT ' },
        { id: 7, img: HospitalRoom, title: 'Hospital room' },
        { id: 8, img: Compact, title: 'Compactors' },

        // Add more furniture data here
    ];


    const [isFormVisible, setFormVisible] = useState(false);
    const toggleFormVisibility = () => {
        setFormVisible(!isFormVisible);
    };

    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState({
        title: '',
        body: ''
    });

    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        location: '',
        message: '',
        email: '',
        space: 'Healthcare Space'
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;


    const handleSubmit = async (e) => {
        e.preventDefault();
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
        <div className='space-wrap'>
            <div className="space-hero">
                <img src={HealthcareHeroMobile} className='mobile' alt="" />
                <img src={HealthcareHero} className='desktop' alt="" />
                <div className="space-hero-left">
                    <h1>Healthcare Spaces</h1>
                    <p onClick={toggleFormVisibility} className='space-para'><u>Enquire Now</u></p>
                </div>
                <div className="space-hero-right health">
                    <img src={HealthcareHeroRight} alt="" />
                </div>
            </div>

            <div className="space2">
                <img src={heroMain} alt="" />
                <div className="space2-heading">
                    <h1>Products in Healthcare Spaces</h1>
                    <p>Our Solutions for  Healthcare Spaces include, but are not limited to:</p>
                </div>

                <div className="cards-container">
                    {furnitureData.map((item) => (
                        <div key={item.id} className="card">
                            <img src={item.img} alt={item.title} className="card-image" />
                            <h3 className="card-title">{item.title}</h3>
                        </div>
                    ))}
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
                                <label>Space</label>
                                <input
                                    type="text"
                                    name="space"
                                    value="Healthcare Space"
                                    readOnly
                                />
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
                                sitekey={recaptchaKey}
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
        </div>
    )
}

export default Healthcare
