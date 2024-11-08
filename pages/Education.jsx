import React, { useEffect, useState,useRef } from 'react';
import "../pages/Space.css"
// import officeHero from "../assets/office-hero.png"
// import officeHeroRight from "../assets/office-hero-right.png"

// import officechair from "../assets/officechair.png"
// import exeDesk from "../assets/exeDesk.png"
// import Workstation from "../assets/Workstation.png"
// import Cube from "../assets/cubicles.png"
// import Conf from "../assets/con-room.png"
// import Sofas from "../assets/sofas.png"
// import Lounge from "../assets/lounge.png"
// import Compact from "../assets/compact.png"
// import Pods from "../assets/pods.png"
// import Cafe from "../assets/Cafeteria.png"
// import Storage from "../assets/storage.png"
// import Locker from "../assets/locker.png"
// import edudesk from "../assets/edudesk.png"


// import heroMain from "../assets/hero-main.png"
// import admin from "../assets/furn.png"
// import eduHero from "../assets/edu-hero.png"
// import eduHeroMobile from "../assets/mobile-education-hero.png"
// import eduHeroRight from "../assets/edu-hero-right.png"
// import waiting from "../assets/wait.png"
// import Principal from "../assets/Principal.png"
// import soft from "../assets/soft-seat.png"
// import Library from "../assets/library.png"
// import Dining from "../assets/dining.png"
// import Hostel from "../assets/Hostel.png"
// import Lab from "../assets/lab.png"

import { Thanks } from '../components/Thanks'; // Import the Thanks component
import ReCAPTCHA from 'react-google-recaptcha';



const Education = () => {

    const furnitureData = [
        { id: 1, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985092/edudesk_f2pvp1.png", title: 'Classroom Desking' },
        { id: 2, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985092/exeDesk_rjt7ia.png", title: 'Executive Desk' },
        { id: 3, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985100/furn_y17eql.png", title: 'Administration Office Furniture' },
        { id: 4, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985139/sofas_xqc3tf.png", title: 'Sofas' },
        { id: 5, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985142/wait_ht3p7n.png", title: 'Waiting Area Furniture' },
        { id: 6, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985139/soft-seat_za8thc.png", title: 'Soft Seating' },
        { id: 8, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985086/compact_vw81uf.png", title: 'Compactors' },
        { id: 9, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985137/pods_xpi29z.png", title: 'Pods' },
        { id: 10, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985083/Cafeteria_jw4bow.png", title: 'Cafeteria/Recreation' },
        { id: 11, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985141/storage_dnvz4z.png", title: 'Storages' },
        { id: 12, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985120/locker_ysfhsu.png", title: 'Lockers' },
        { id: 12, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985117/library_oortad.png", title: 'Library' },
        { id: 12, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985089/dining_xwbjv0.png", title: 'Dining' },
        { id: 12, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985106/Hostel_kxabmn.png", title: 'Hostel' },
        { id: 12, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985117/lab_gzcxpm.png", title: 'Lab' },
        { id: 7, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985136/Principal_mhgqgl.png", title: 'Cabins' },

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

    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;

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
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
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
        const dataToSend = {
            ...formData,
            space: 'Education Space'
        };
        try {
            const response = await fetch(`https://nikshoo-backend.vercel.app/api/form-submission`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataToSend),
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
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985093/edu-hero_fwlzig.png" className='desktop' alt="" />
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985126/mobile-education-hero_qbqznr.png" className='mobile' alt="" />
                <div className="space-hero-left">
                    <h1>Education Spaces</h1>
                    <p onClick={toggleFormVisibility} className='space-para'><u>Enquire Now</u></p>
                    <p id='hero-space-para'>Our Solutions for  Education Spaces include, but are not limited to</p>

                </div>
                <div className="space-hero-right edu">
                    <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985091/edu-hero-right_hos1ws.png" alt="" />
                </div>
            </div>

            <div className="space2">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985102/hero-main_ajhuae.png" alt="" />
                <div className="space2-heading">

                    <h1>Products in Education Spaces</h1>
                    <p>Our Solutions for  Education Spaces include, but are not limited to</p>
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
                            <div ref={dropdownRef}>
                                <label>Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Your Location"
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
                                sitekey={recaptchaKey}
                                onChange={handleCaptchaChange}
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