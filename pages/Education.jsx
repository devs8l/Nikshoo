import React, { useEffect ,useState} from 'react';
import "../pages/Space.css"
import officeHero from "../assets/office-hero.png"
import officeHeroRight from "../assets/office-hero-right.png"

import officechair from "../assets/officechair.png"
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
import edudesk from "../assets/edudesk.png"


import heroMain from "../assets/hero-main.png"
import admin from "../assets/furn.png"
import eduHero from "../assets/edu-hero.png"
import eduHeroMobile from "../assets/mobile-education-hero.png"
import eduHeroRight from "../assets/edu-hero-right.png"
import waiting from "../assets/wait.png"
import Principal from "../assets/Principal.png"
import soft from "../assets/soft-seat.png"
import Library from "../assets/library.png"
import Dining from "../assets/dining.png"
import Hostel from "../assets/Hostel.png"
import Lab from "../assets/lab.png"

import { Thanks } from '../components/Thanks'; // Import the Thanks component
import ReCAPTCHA from 'react-google-recaptcha';



const Education = () => {
  
    const furnitureData = [
        { id: 1, img: edudesk, title: 'Classroom Desking' },
        { id: 2, img: exeDesk, title: 'Executive Desk' },
        { id: 3, img: admin, title: 'Administration Office Furniture' },
        { id: 4, img: Sofas, title: 'Sofas' },
        { id: 5, img: waiting, title: 'Waiting Area Furniture' },
        { id: 6, img: soft, title: 'Soft Seating' },
        { id: 8, img: Compact, title: 'Compactors' },
        { id: 9, img: Pods, title: 'Pods' },
        { id: 10, img: Cafe, title: 'Cafeteria/Recreation' },
        { id: 11, img: Storage, title: 'Storages' },
        { id: 12, img: Locker, title: 'Lockers' },
        { id: 12, img: Library, title: 'Library' },
        { id: 12, img: Dining, title: 'Dining' },
        { id: 12, img: Hostel, title: 'Hostel' },
        { id: 12, img: Lab, title: 'Lab' },
        { id: 7, img: Principal, title: 'Principal /Dean Cabin' },
    
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
        space: 'Education Space'
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

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
                <img src={eduHero} className='desktop' alt="" />
                <img src={eduHeroMobile} className='mobile' alt="" />
                <div className="space-hero-left">
                    <h1>Education Spaces</h1>
                    <p onClick={toggleFormVisibility} className='space-para'><u>Enquire Now</u></p>
                    
                </div>
                <div className="space-hero-right edu">
                    <img src={eduHeroRight} alt="" />
                </div>
            </div>

            <div className="space2">
                <img src={heroMain} alt="" />
                <div className="space2-heading">
                    
                <h1>Products in Education Spaces</h1>
                <p>Our Solutions for  Education Spaces include, but are not limited to:</p>
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
                                    value="Education Space"
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

        </div>
    )
}

export default Education
