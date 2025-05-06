import React, { useEffect, useState, useRef } from 'react';
import "../pages/Space.css"
import { Thanks } from '../components/Thanks';
import ReCAPTCHA from 'react-google-recaptcha';
import { Helmet } from 'react-helmet';

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

    const [isCaptchaVerified, setCaptchaVerified] = useState(false);
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
                <title>Buy Furniture for Education at Best Price</title>
                <meta
                    name="description"
                    content="Explore Nikshoo Furniture Solutions for premium Furniture for Education, including Classroom Desking, Administration Office Furniture, Waiting Area Furniture, Compactors, Cafeteria/Recreation, Storages, Lockers, Library, and Lab setups. Elevate learning spaces with functional and stylish designs. Buy Classroom Furniture CAD blocks and desks crafted for durability and efficiency"
                />
                <meta
                    name="keywords"
                    content="education furniture, classroom furniture, school furniture, lab furniture, library furniture, cafeteria furniture, Nikshoo"
                />
            </Helmet>

            <div className="space-hero">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985093/edu-hero_fwlzig.png" className='desktop' alt="" />
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985126/mobile-education-hero_qbqznr.png" className='mobile' alt="" />
                <div className="space-hero-left">
                    <h1>Furniture for <br />Education</h1>
                    <p onClick={toggleFormVisibility} className='space-para'><u>Enquire Now</u></p>
                    <p id='hero-space-para'>Our Solutions for  Education Spaces include, but are not limited to</p>
                </div>
                <div className="space-hero-right edu">
                    <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985091/edu-hero-right_hos1ws.png" alt="" />
                </div>
            </div>

            <div className="space2">
                <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985102/hero-main_ajhuae.png" alt="" />
                <div className="space2-heading office">
                    <div className="space2-heading-con">
                        <h1>Furniture for Education: The Secret to Smarter Learning!</h1>
                        <p>Ever wondered why some classrooms feel more inspiring than others? It’s all about the
                            setup! The right furniture for education isn’t just about filling space - it’s about creating an
                            environment where students focus better, collaborate easily, and actually enjoy learning. A
                            well-planned classroom encourages creativity, keeps distractions away, and makes studying
                            feel effortless.</p>
                    </div>
                    <div className="space2-heading-con">
                        <h2>Furniture for Education That Fits Every Space</h2>
                        <p>Every learning area needs the perfect setup - something comfortable, functional, and
designed to boost productivity. Whether it’s for quiet study or interactive discussions, the
right furniture makes a difference.</p>
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
                <div className="space2-heading">

                    <div className="space2-heading-con">
                        <h3>Furniture for Education That Shapes the Future</h3>
                        <p>A great classroom isn’t just a room - it’s a space where ideas grow. Investing in the right
                        furniture means investing in better learning, sharper minds, and brighter futures!</p>
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