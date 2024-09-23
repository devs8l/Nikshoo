import React, { useState } from 'react'

import { NavLink, useLocation } from "react-router-dom"
import "../components/Navbar.css"
import navimg from "../assets/Frame.png"
import { GiHamburgerMenu } from "react-icons/gi";
export default function Navbar() {
    const location = useLocation();
    const isHeroPage = location.pathname === '/';
    const [toggle, setToggle] = useState(false);
    const handleNavLinkClick = () => {
        setToggle(false);  // Close the dropdown when a link is clicked
    };
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
            <div className="menu" onClick={() => {
                setToggle(!toggle)
            }}>
                <h3><GiHamburgerMenu 
                        style={{ color: isHeroPage ? 'white' : 'black' }} 
                    /></h3>
            </div>

            <div className="nav-right">
                <ul>
                    <li><NavLink to="/" className="navlink">Home</NavLink></li>
                    <li><NavLink to="/howwework" className="navlink">How we Work</NavLink></li>
                    <li><NavLink to="/partner" className="navlink">Become a Partner</NavLink></li>
                    <li><NavLink to="/blogs" className="navlink">Blogs</NavLink></li>
                    <li><NavLink to="/about" className="navlink">About</NavLink></li>
                    <li><NavLink to="/shop" className="navlink">Shop</NavLink></li>
                    <li><NavLink to="/contact" className="navlink">Contact Us</NavLink></li>
                </ul>
            </div>
            <div className={toggle ? "fullscr toggle" : "fullscr"}>
                <div id="full-div1">
                <div id="fulldiv-text">
                        <li><NavLink to="/" className="navlink" onClick={handleNavLinkClick}><h1>Home</h1></NavLink></li>
                        <li><NavLink to="/howwework" className="navlink" onClick={handleNavLinkClick}><h1>How we Work</h1></NavLink></li>
                        <li><NavLink to="/partner" className="navlink" onClick={handleNavLinkClick}><h1>Become a Partner</h1></NavLink></li>
                        <li><NavLink to="/blogs" className="navlink" onClick={handleNavLinkClick}><h1>Blogs</h1></NavLink></li>
                        <li><NavLink to="/about" className="navlink" onClick={handleNavLinkClick}><h1>About</h1></NavLink></li>
                        <li><NavLink to="/shop" className="navlink" onClick={handleNavLinkClick}><h1>Shop</h1></NavLink></li>
                        <li><NavLink to="/contact" className="navlink" onClick={handleNavLinkClick}><h1>Contact Us</h1></NavLink></li>
                    </div>
                </div>
            </div>
        </div>
    )
}
