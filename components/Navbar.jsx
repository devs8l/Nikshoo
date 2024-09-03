import React from 'react'
import { NavLink } from "react-router-dom"
import "../components/Navbar.css"
import navimg from "../assets/Frame.png"
export default function Navbar() {
    return (
        <div className="navbar-wrap">
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
                        <li><NavLink to="/service" className="navlink">How we Work</NavLink></li>
                        <li><NavLink to="/contact" className="navlink">Become a Partner</NavLink></li>
                        <li><NavLink to="/contact" className="navlink">Blogs</NavLink></li>
                        <li><NavLink to="/contact" className="navlink">Contact Us</NavLink></li>
                    </ul>
            </div>
        </div>
    )
}
