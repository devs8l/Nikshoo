import React, { useState, useEffect, useRef } from 'react'

import { NavLink, useLocation } from "react-router-dom"
import { RiArrowDropDownLine } from "react-icons/ri";
import "../components/Navbar.css"
import navimg from "../assets/Frame.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import navimgfooter from "../assets/footerlogo.png"
import { IoIosCall } from "react-icons/io";

export default function Navbar() {
    const location = useLocation();
    const isHeroPage = location.pathname === '/';
    const [toggle, setToggle] = useState(false);
    const dropdownRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpenMob, setDropdownOpenMob] = useState(false);
    const handleNavLinkClick = () => {
        
        setToggle(false);  // Close the dropdown when a link is clicked
        
    };
    const handleNavLinkClickMob = () => {
        setToggle(false);  // Close the dropdown when a link is clicked
    };


    const handleDropdownToggle = () => {
        setDropdownOpen(!dropdownOpen);  // Toggle the Spaces dropdown menu
    };

    const handleDropdownToggleMobile = () => {
        setDropdownOpenMob(!dropdownOpenMob);  // Toggle the Spaces dropdown menu
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false); // Close dropdown when clicking outside of it
        }
    };


    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className={`navbar-wrap ${isHeroPage ? 'hero-nav' : 'other-nav'}`}>
            <div className="nav-left">
                <div className="img-div">
                    <img src={navimg} alt="" />
                </div>
                <div className="left-content">
                    <h2>Nikshoo</h2>

                    <p>Furniture Solutions</p>
                </div>
            </div>
            <div className="call">
                {/* <a href=""></a> */}
                <IoIosCall onClick={() => window.location.href = 'tel:+91 7415775000'} style={{ color: isHeroPage ? 'white' : 'black' }} />
            </div>
            <div className="menu" onClick={() => {
                setToggle(!toggle)
            }}>
                <h3>
                    {toggle
                        ? <RxCross1 />
                        : <GiHamburgerMenu style={{ color: isHeroPage ? 'white' : 'black' }} />
                    }
                </h3>
            </div>

            <div className="nav-right">
                <ul>
                    <li><NavLink to="/" className="navlink">Home</NavLink></li>
                    <li><NavLink to="/howwework" className="navlink">How we Work</NavLink></li>
                    <li><NavLink to="/partner" className="navlink">Become a Partner</NavLink></li>
                    {/* <li><NavLink to="/blogs" className="navlink">Blogs</NavLink></li> */}
                    {/* <li><NavLink to="/about" className="navlink">About</NavLink></li> */}
                    {/* <li><NavLink to="/shop" className="navlink">Shop</NavLink></li> */}
                    <li ref={dropdownRef}>
                        <div className="spaces-dropdown scolor" onClick={(e) => {
                            e.stopPropagation(); // Prevent closing dropdown when clicking inside it
                            handleDropdownToggle();
                        }}>
                            Spaces <RiArrowDropDownLine className='dropdown-icon' />
                            {dropdownOpen && (
                                <ul className="spaces-dropdown-menu">
                                    <li><NavLink to="/office-furniture" onClick={handleNavLinkClick}>Office Furniture</NavLink></li>
                                    <li><NavLink to="/furniture-for-education" onClick={handleNavLinkClick}>Furniture for Education</NavLink></li>
                                    <li><NavLink to="/laboratory-furniture" onClick={handleNavLinkClick}>Laboratory Spaces</NavLink></li>
                                    <li><NavLink to="/hospital-furniture" onClick={handleNavLinkClick}>Healthcare Spaces</NavLink></li>
                                    <li><NavLink to="/commercial-kitchen-equipment" onClick={handleNavLinkClick}>Commercial Kitchen</NavLink></li>
                                </ul>
                            )}
                        </div>
                    </li>
                    <li><NavLink to="/contact" className="navlink">Contact Us</NavLink></li>
                </ul>
            </div>
            <div className={toggle ? "fullscr toggle" : "fullscr"}>
                <div id="full-div1">
                    <div className="full-nav-left">
                        <div className="full-img-div">
                            <img src={navimgfooter} alt="" />
                        </div>
                        <div className="full-left-content">
                            <h2>Nikshoo</h2>

                            <p>Furniture Solutions</p>
                        </div>
                    </div>
                    <div id="fulldiv-text">
                        <li><NavLink to="/" className="navlink" onClick={handleNavLinkClick}><h1>Home</h1></NavLink></li>
                        <li><NavLink to="/howwework" className="navlink" onClick={handleNavLinkClick}><h1>How we Work</h1></NavLink></li>
                        <li><NavLink to="/partner" className="navlink" onClick={handleNavLinkClick}><h1>Become a Partner</h1></NavLink></li>
                        {/* <li><NavLink to="/blogs" className="navlink" onClick={handleNavLinkClick}><h1>Blogs</h1></NavLink></li>
                        <li><NavLink to="/about" className="navlink" onClick={handleNavLinkClick}><h1>About</h1></NavLink></li>
                        <li><NavLink to="/shop" className="navlink" onClick={handleNavLinkClick}><h1>Shop</h1></NavLink></li> */}
                        <li><NavLink to="/contact" className="navlink" onClick={handleNavLinkClick}><h1>Contact Us</h1></NavLink></li>
                        <li>
                            <div className="spaces-dropdown" onClick={handleDropdownToggleMobile}>
                                Spaces <RiArrowDropDownLine className='dropdown-icon' />
                                {dropdownOpenMob && (
                                    <ul className="spaces-dropdown-menu mobile">
                                        <li><NavLink to="/office-furniture" className="navlink" onClick={handleNavLinkClickMob}><h1>Office Furniture</h1></NavLink></li>
                                        <li><NavLink to="/furniture-for-education" onClick={handleNavLinkClickMob}><h1>Furniture for Education</h1></NavLink></li>
                                        <li><NavLink to="/laboratory-furniture" onClick={handleNavLinkClickMob}><h1>Laboratory Spaces</h1></NavLink></li>
                                        <li><NavLink to="/hospital-furniture" onClick={handleNavLinkClickMob}><h1>Healthcare Spaces</h1></NavLink></li>
                                        <li><NavLink to="/commercial-kitchen-equipment" onClick={handleNavLinkClickMob}><h1>Commercial Kitchen</h1></NavLink></li>
                                    </ul>
                                )}
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </div>
    )
}
