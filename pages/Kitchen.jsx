import { React, useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import "../pages/Space.css";
import { Thanks } from '../components/Thanks';
import ReCAPTCHA from 'react-google-recaptcha';

const Kitchen = () => {
    const furnitureData = [
        { id: 1, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985079/Bakery_syezcs.png", title: 'Bakery Equipment' },
        { id: 2, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985100/fridge_kanfzy.png", title: 'Refrigerator Equipment' },
        { id: 3, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985137/Restraunt_yizgu2.png", title: 'Restaurant Equipment' },
        { id: 4, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985114/kitchen-storage_dpkllm.png", title: 'Storage Equipment' },
        { id: 5, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985084/cloud_cqaiqb.png", title: 'Cloud Equipment' },
    ];

    const [isFormVisible, setFormVisible] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState({ title: '', body: '' });
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        location: '',
        message: '',
        email: '',
        space: 'Kitchen Space'
    });
    const [cities, setCities] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);
    const dropdownRef = useRef(null);
    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;

    const toggleFormVisibility = () => {
        setFormVisible(!isFormVisible);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const fetchCities = async (query) => {
        try {
            if (!query) {
                setCities([]);
                return;
            }

            const response = await fetch(`https://api.countrystatecity.in/v1/countries/IN/cities`, {
                headers: {
                    "X-CSCAPI-KEY": "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=="
                }
            });

            if (response.ok) {
                const data = await response.json();
                const filteredCities = data
                    .filter(city => city.name.toLowerCase().startsWith(query.toLowerCase()))
                    .slice(0, 10);
                setCities(filteredCities);
            }
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    const selectCity = (city) => {
        setFormData({ ...formData, location: city });
        setShowDropdown(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        if (name === "location") {
            setShowDropdown(true);
            fetchCities(value);
        }
    };

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isCaptchaVerified) {
            alert("Please complete the CAPTCHA before submitting the form.");
            return;
        }
        const dataToSend = {
            ...formData,
            space: 'Kitchen Space'
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
        toggleFormVisibility();
    };

    return (
        <div className='space-wrap'>
            <Helmet>
                <title>Buy High-quality Commercial Kitchen Equipment by Nikshoo Furniture Solution</title>
                <meta
                    name="description"
                    content="From gas ranges to tandoors, we have your restaurant needs covered with top-notch Commercial Kitchen Equipment that gets the job done efficiently and beautifully!"
                />
                <meta
                    name="keywords"
                    content="commercial kitchen equipment, restaurant furniture, bakery equipment, kitchen storage, refrigerator equipment, professional kitchen tools"
                />
                <meta property="og:title" content="Premium Commercial Kitchen Equipment | Nikshoo Furniture Solutions" />
                <meta property="og:description" content="High-quality commercial kitchen equipment for restaurants, bakeries and food service businesses." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nikshoo.com/kitchen" />
            </Helmet>

            <div className="space-hero">
                <img
                    src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985115/kitchen-hero_hiwmyk.png"
                    className='desktop'
                    alt="Commercial kitchen equipment solutions"
                    loading="lazy"
                />
                <img
                    src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985126/mobile-kitchen-hero_wnni0y.png"
                    className='mobile'
                    alt="Mobile view of commercial kitchen products"
                    loading="lazy"
                />
                <div className="space-hero-left">
                    <h1>Commercial Kitchen <br />Equipment</h1>
                    <p onClick={toggleFormVisibility} className='space-para'><u>Enquire Now</u></p>
                    <p id='hero-space-para'>Our Solutions for Commercial Kitchen include, but are not limited to</p>
                </div>
                <div className="space-hero-right kitchen">
                    <img
                        src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985112/kitchen-hero-right_dqrxox.png"
                        alt="Commercial kitchen equipment showcase"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="space2 kit">
                <img
                    src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985102/hero-main_ajhuae.png"
                    alt="Commercial kitchen products overview"
                    loading="lazy"
                />
                <div className="space2-heading ">
                    <div className="space2-heading-con">
                        <h1>Hospital Furniture: Comfort That Cares!</h1>
                        <p>A hospital isn’t just a building - it’s a place where lives are healed, comfort is key, and
                            efficiency matters. The right hospital furniture creates a space where doctors work smoothly,
                            patients feel at ease, and every moment counts. Whether it’s an emergency room, a patient
                            ward, or a doctor’s office, smartly designed furniture makes all the difference.</p>
                    </div>
                    <div className="space2-heading-con">
                        <h2>Hospital Furniture That Supports Every Need</h2>
                        <p>From treatment areas to waiting lounges, every space demands furniture that blends
                            functionality with comfort. The right setup enhances both care and convenience.</p>
                    </div>
                </div>

                <div className="cards-container">
                    {furnitureData.map((item) => (
                        <div key={item.id} className="card">
                            <img
                                src={item.img}
                                alt={`${item.title} for commercial kitchens`}
                                className="card-image"
                                loading="lazy"
                            />
                            <h3 className="card-title">{item.title}</h3>
                        </div>
                    ))}
                </div>
                <div className="space2-heading">
                    <div className="space2-heading-con">
                        <h3>Hospital Furniture That Enhances Healing</h3>
                        <p>A well-designed hospital environment isn’t just about looks - it’s about making recovery
                            smoother. When comfort meets care, healing happens faster!</p>
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
                                    value="Kitchen Space"
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

            {popupVisible && (
                <Thanks
                    message={popupMessage}
                    onClose={handleClosePopup}
                    buttonText="Explore More"
                />
            )}
        </div>
    );
};

export default Kitchen;