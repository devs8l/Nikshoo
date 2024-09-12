import React from 'react'
import { NavLink,useLocation } from "react-router-dom"
import "../components/Navbar.css"
import navimg from "../assets/Frame.png"
export default function Navbar() {
    const location = useLocation();
    const isHeroPage = location.pathname === '/';
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

            <div className="nav-right">
                    <ul>
                        <li><NavLink to="/" className="navlink">Home</NavLink></li>
                        <li><NavLink to="/about" className="navlink">Shop</NavLink></li>
                        <li><NavLink to="/howwework" className="navlink">How we Work</NavLink></li>
                        <li><NavLink to="/partner" className="navlink">Become a Partner</NavLink></li>
                        <li><NavLink to="/blogs" className="navlink">Blogs</NavLink></li>
                        <li><NavLink to="/contact" className="navlink">Contact Us</NavLink></li>
                    </ul>
            </div>
        </div>
    )
}
