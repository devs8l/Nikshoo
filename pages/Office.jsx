import { React, useState, useEffect, useRef } from 'react';
import "../pages/Space.css";
import { Thanks } from '../components/Thanks';
import ReCAPTCHA from 'react-google-recaptcha';
import { Helmet } from 'react-helmet';

const Office = () => {
    const furnitureData = [
        { id: 1, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985131/officechair_jtavgm.png", title: 'Office Chair' },
        { id: 2, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985092/exeDesk_rjt7ia.png", title: 'Executive Desk' },
        { id: 3, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985144/Workstation_tokxlu.png", title: 'Workstations' },
        { id: 4, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985088/cubicles_yiaypg.png", title: 'Cubicles' },
        { id: 5, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985086/con-room_d3tvmo.png", title: 'Meeting and Conference room Furniture' },
        { id: 6, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985139/sofas_xqc3tf.png", title: 'Sofas/Soft Seating' },
        { id: 7, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985120/lounge_aicgne.png", title: 'Lounge Furniture' },
        { id: 8, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985086/compact_vw81uf.png", title: 'Compactors' },
        { id: 9, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985137/pods_xpi29z.png", title: 'Pods' },
        { id: 10, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985083/Cafeteria_jw4bow.png", title: 'Cafeteria/Recreation' },
        { id: 11, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985141/storage_dnvz4z.png", title: 'Storages' },
        { id: 12, img: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985120/locker_ysfhsu.png", title: 'Lockers' },
    ];

    const [cities, setCities] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [isFormVisible, setFormVisible] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupMessage, setPopupMessage] = useState({ title: '', body: '' });
    const [formData, setFormData] = useState({
        fullName: '',
        phoneNumber: '',
        location: '',
        message: '',
        email: '',
        space: 'Office Space'
    });
    const dropdownRef = useRef(null);
    const recaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;
    const [isCaptchaVerified, setCaptchaVerified] = useState(false);

    const fetchCities = async (query) => {
        try {
            if (!query) {
                setCities([]);
                return;
            }
            const response = await fetch(`https://api.countrystatecity.in/v1/countries/IN/cities`, {
                headers: { "X-CSCAPI-KEY": "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==" }
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "location") {
            setShowDropdown(true);
            fetchCities(value);
        }
    };

    const handleCaptchaChange = (value) => {
        setCaptchaVerified(!!value);
    };

    const selectCity = (city) => {
        setFormData({ ...formData, location: city });
        setShowDropdown(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isCaptchaVerified) {
            alert("Please complete the CAPTCHA before submitting the form.");
            return;
        }
        const dataToSend = { ...formData, space: 'Office Space' };
        try {
            const response = await fetch(`https://nikshoo-backend.vercel.app/api/form-submission`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
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
            {/* SEO Meta Tags */}
            <Helmet>
                <title>Office Furniture at Best Price | Nikshoo</title>
                <meta
                    name="description"
                    content="Buy office furniture with Nikshoo, which has a wide range of furniture available. Shop director chairs, executive chairs, visitor chairs, reception chairs, desks, computer tables, meeting tables, office sofas, etc."
                />
                <meta
                    name="keywords"
                    content="office furniture, chairs, desks, tables, Nikshoo, executive chairs, meeting tables, office sofas"
                />
            </Helmet>
            {/* hero */}

            <div className="space-hero">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985127/mobile-office-hero_phfgvu.png" className="mobile" alt="" loading='lazy' />
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985132/office-hero_byf2pd.png" className="desktop" alt="" loading='lazy' />
                <div className="space-hero-left">
                    <h1>Office Furniture</h1>
                    <p onClick={toggleFormVisibility} className='space-para'><u>Enquire Now</u></p>
                    <p id='hero-space-para'>Our Solutions for Office Spaces include, but are not limited to</p>
                </div>
                <div className="space-hero-right">
                    <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985128/office-hero-right_m1ubvq.png" alt="" loading='lazy' />
                </div>
            </div>

            <div className="space2">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985102/hero-main_ajhuae.png" alt="" />
                <div className="space2-heading office">
                    <div className="space2-heading-con">
                        <h1>Office Furniture: The Secret to a Smart & Stylish Workspace!</h1>
                        <p>Let’s be honest - nobody wants to work in a boring, uncomfortable office. But have you
                            ever walked into a place that just feels productive? That’s the magic of office furniture! It’s
                            not just about tables and chairs; it’s about creating a space where work feels effortless and
                            creativity flows.</p>
                    </div>
                    <div className="space2-heading-con">
                        <h2>Office Furniture That Makes Work Feel Less Like Work</h2>
                        <p>You spend hours in your office, so why settle for anything less than comfort and style?
                            The right office furniture can turn a dull workspace into a powerhouse of ideas.</p>
                    </div>


                </div>

                <div className="cards-container">
                    {furnitureData.map((item) => (
                        <div key={item.id} className="card">
                            <img src={item.img} alt={item.title} className="card-image" />
                            <h3 className="card-title">{item.title}</h3>
                        </div>
                    ))}
                </div>
                <div className='space2-heading'>
                    <div className="space2-heading-con">
                        <h3>Office Furniture: Because of Comfort and Style Matter!</h3>
                        <p>A well-designed office isn’t just about aesthetics - it’s about how it makes you feel. The
                            right office furniture keeps you comfortable, focused, and ready to take on anything. So, why
                            not upgrade your space and make work feel less like work?</p>
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
                                    value="Office Space"
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
                                    placeholder="Enter city"
                                    onFocus={() => setShowDropdown(true)}
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

export default Office;