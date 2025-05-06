import { React, useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import "../pages/Space.css";
import { Thanks } from '../components/Thanks';
import ReCAPTCHA from 'react-google-recaptcha';

const Healthcare = () => {
    const furnitureData = [
        { id: 1, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985089/Doctor-table_ei03ox.png", title: 'Doctor Examination' },
        { id: 2, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985136/Principal_mhgqgl.png", title: 'Administration Desk' },
        { id: 3, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985101/grey-sofa_jiefic.png", title: 'Sofas' },
        { id: 4, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985142/wait_ht3p7n.png", title: 'Waiting area' },
        { id: 5, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985139/soft-seat_za8thc.png", title: 'Soft Seating' },
        { id: 9, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985137/pods_xpi29z.png", title: 'Pods' },
        { id: 10, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985083/Cafeteria_jw4bow.png", title: 'Cafeteria/Recreation' },
        { id: 11, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985141/storage_dnvz4z.png", title: 'Storages' },
        { id: 12, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985120/locker_ysfhsu.png", title: 'Lockers' },
        { id: 6, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985142/two_fnyxka.png", title: 'Transfer, Ward & OT' },
        { id: 7, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985105/hos-room_pbhkod.png", title: 'Hospital Room' },
        { id: 8, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985086/compact_vw81uf.png", title: 'Compactors' },
    ];

    const [isFormVisible, setFormVisible] = useState(false);
    const toggleFormVisibility = () => {
        setFormVisible(!isFormVisible);
    };

    const [isCaptchaVerified, setCaptchaVerified] = useState(false);
    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
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

    const dropdownRef = useRef(null);
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

    const [cities, setCities] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

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

    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isCaptchaVerified) {
            alert("Please complete the CAPTCHA before submitting the form.");
            return;
        }
        const dataToSend = {
            ...formData,
            space: 'Healthcare Space'
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
                <title>Buy High-quality Hospital Furniture by Nikshoo Furniture Solution</title>
                <meta
                    name="description"
                    content="Discover Nikshoo Furniture Solution hospital furniture designed for healthcare environments. From comfortable hospital chairs to adjustable hospital beds and trolleys."
                />
                <meta
                    name="keywords"
                    content="hospital furniture, medical furniture, healthcare furniture, doctor examination table, hospital beds, medical storage, hospital waiting chairs, healthcare space solutions"
                />
                <meta property="og:title" content="Premium Hospital Furniture | Nikshoo Furniture Solutions" />
                <meta property="og:description" content="High-quality hospital furniture designed for comfort, durability and hygiene in healthcare environments." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nikshoo.com/healthcare" />
            </Helmet>

            <div className="space-hero">
                <img
                    src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985126/mobile-healthcare-hero_an7lnb.png"
                    className='mobile'
                    alt="Hospital furniture solutions for healthcare spaces"
                    loading="lazy"
                />
                <img
                    src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985104/Health-hero_yhp9nq.png"
                    className='desktop'
                    alt="Premium healthcare furniture by Nikshoo"
                    loading="lazy"
                />
                <div className="space-hero-left">
                    <h1>Hospital Furniture</h1>
                    <p onClick={toggleFormVisibility} className='space-para'><u>Enquire Now</u></p>
                    <p id='hero-space-para'>Our healthcare furniture solutions include doctor examination tables, hospital beds, waiting area seating and more</p>
                </div>
                <div className="space-hero-right health">
                    <img
                        src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985103/Health-right-hero_e9afcs.png"
                        alt="Healthcare space furniture collection"
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="space2">
                <img
                    src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985102/hero-main_ajhuae.png"
                    alt="Healthcare furniture products overview"
                    loading="lazy"
                />
                <div className="space2-heading office">
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
                                alt={`${item.title} furniture for hospitals`}
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
                                    value="Healthcare Space"
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

export default Healthcare;