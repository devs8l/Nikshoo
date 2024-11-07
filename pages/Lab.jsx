import { React, useState, useEffect ,useRef} from 'react'

import "../pages/Space.css"
// import LabHero from "../assets/lab-hero.png"
// import LabHeroMobile from "../assets/mobile-laboratory-hero.png"
// import LabHeroRight from "../assets/lab-hero-right.png"
// import heroMain from "../assets/hero-main.png"
// import LabWork from "../assets/lab-work.png"
// import Fume from "../assets/lab-fume.png"
// import animal from "../assets/lab-animal.png"
// import LabSafe from "../assets/lab-safe.png"
import { Thanks } from '../components/Thanks'; // Import the Thanks component
import ReCAPTCHA from 'react-google-recaptcha';




const Lab = () => {
    const furnitureData = [
        { id: 1, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985115/lab-work_rlwo4q.png", title: 'Laboratory Workstations' },
        { id: 2, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1731005051/lab-fume_igjbfs.png", title: 'Laboratory Fume Heads' },
        { id: 3, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1731005064/lab-animal_hrx1i6.png", title: 'Animal House Furniture' },
        { id: 4, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985115/lab-safe_n7naws.png", title: 'Safety Cabinets' },


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
        space: 'Laboratory Space'
    });


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

    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isCaptchaVerified) {
            alert("Please complete the CAPTCHA before submitting the form.");
            return;
        }
        const dataToSend = {
            ...formData,
            space: 'Laboratory Space'
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
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985117/lab-hero_lpmoig.png" className='desktop' alt="" />
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985127/mobile-laboratory-hero_di728q.png" className='mobile' alt="" />
                <div className="space-hero-left">
                    <h1>Laboratory Spaces</h1>
                    <p onClick={toggleFormVisibility} className='space-para'><u>Enquire Now</u></p>
                    <p id='hero-space-para'>Our Solutions for Laboratory Spaces
                        include, but are not limited to</p>
                </div>
                <div className="space-hero-right kitchen">
                    <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985115/lab-hero-right_vzucee.png" alt="" />
                </div>
            </div>

            <div className="space2 lab">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985102/hero-main_ajhuae.png" alt="" />
                <div className="space2-heading">
                    <h1>Products in Laboratory Spaces</h1>
                    <p>Our Solutions for Laboratory Spaces
                        include, but are not limited to</p>
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
                                    value="Laboratory Space"
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
                                    placeholder="Your Location"
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

export default Lab
