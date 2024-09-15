import React, { useState } from 'react'; 
import "../pages/Blogs.css"
import heroMain from "../assets/hero-main.png"
import heroright from "../assets/blogs-hero.png"
import submit from "../assets/submit.png"

import bimg from "../assets/blog-img.png"
const Blogs = () => {
    const [formData, setFormData] = useState({ email: '' });
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
      };
    return (
        <div>
            <div className="blogs-wrap">
                <img src={heroMain} alt="" />
                <div className="blogs-hero">
                    <div className="hero-left">
                        <h1>Featured Blogs</h1>
                        <p>Enhance your spaces with the comfortable furniture crafted by us</p>
                    </div>
                    <div className="hero-right">
                        <img src={heroright} alt="" />
                    </div>
                </div>

                <div className="blogs-middle">
                    <div className="bimg-div">
                        <img src={bimg} alt="" />
                    </div>
                    <div className="blog-middle-con ">
                        <h1>Tips For Creating Work-From-Home Spaces</h1>
                        <h4>22 Aug,2024</h4>
                        <p>While everyone faces their own set of challenges and home sizes can vary drastically, providing ergonomic support and maximizing space — even small ones — help create workspaces at home that are more comfortable, enhance productivity and boost wellbeing...read more</p>
                    </div>
                </div>

                <div className="latest-blogs">
                    <h1>Latest Blogs</h1>
                    <p>Enhance your spaces with the comfortable furniture crafted by us</p>
                    <div className="blogs-container">
                        <div className="blogs-middle small">

                            <div className="bimg-div smallimg">
                                <img src={bimg} alt="" />
                            </div>
                            <div className="blog-middle-con smallcon ">
                                <h2>Tips For Creating Work-From-Home Spaces</h2>
                                <h4>21 Aug,2024</h4>
                                <p>While everyone faces their own set of challenges and home sizes can vary drastically, providing ergonomic support and maximizing space — even small ones — help create workspaces at home that are more comfortable, enhance productivity and boost wellbeing...read more</p>
                            </div>
                        </div>
                        <div className="blogs-middle small">
                            <div className="bimg-div smallimg">
                                <img src={bimg} alt="" />
                            </div>
                            <div className="blog-middle-con smallcon">
                                <h2>Tips For Creating Work-From-Home Spaces</h2>
                                <h4>22 Aug,2024</h4>
                                <p>While everyone faces their own set of challenges and home sizes can vary drastically, providing ergonomic support and maximizing space — even small ones — help create workspaces at home that are more comfortable, enhance productivity and boost wellbeing...read more</p>
                            </div>
                        </div>
                        <div className="blogs-middle small">
                            <div className="bimg-div smallimg">
                                <img src={bimg} alt="" />
                            </div>
                            <div className="blog-middle-con smallcon">
                                <h2>Tips For Creating Work-From-Home Spaces</h2>
                                <h4>22 Aug,2024</h4>
                                <p>While everyone faces their own set of challenges and home sizes can vary drastically, providing ergonomic support and maximizing space — even small ones — help create workspaces at home that are more comfortable, enhance productivity and boost wellbeing...read more</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="subscribe">
                    <div className="sub-left">
                        <h1>Subscribe Now!</h1>
                        <p>Get our latest blogs on your email address and never miss it</p>
                    </div>

                    <div className="sub-right">
                        <form onSubmit={handleSubmit}>
                            {/* <label>Email</label> */}
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter Your Email"
                                required
                            />
                            <button >
                                <img src={submit} alt="" />
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
