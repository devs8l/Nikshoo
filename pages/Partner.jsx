import React, { useState } from 'react';
import "../pages/Partner.css"
import heroMain from "../assets/hero-main.png"
import bp from "../assets/become-partner.png"

import iconPartnerleft from "../assets/partner-2-r.png"
import iconPartnerRight from "../assets/partner-2-l.png"

import partnerone from "../assets/partner3-1.png"
import partnertwo from "../assets/partner3-2.png"
import partnerthree from "../assets/partner3-3.png"
import lefty from "../assets/lefty.png"
import righty from "../assets/righty.png"
const Partner = () => {
    const [formData, setFormData] = useState({
        partnerRole: '',
        partnerName: '',
        companyName: '',
        phoneNumber: '',
        email: '',
        city: '',
        document: null,
        comments: ''
    });

    const [fileName, setFileName] = useState('');

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'document' && files.length > 0) {
            setFileName(files[0].name);
        }
        setFormData({
            ...formData,
            [name]: files ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(formData);
    };
    return (
        <div>
            <div className="partner-wrap">
                <img src={heroMain} alt="" />
                <img src={lefty} alt="" id='leftyy' />
                <img src={righty} alt="" id='rightyy' />

                <div className="partner1">
                    <div className="partner1-left">
                        <h1>Become A Partner</h1>
                        <p>We are changing the way in which spaces are designed, and we would love to collaborate!</p>
                        <a href="">Join Us!</a>
                    </div>
                    <div className="partner1-right">
                        <img src={bp} alt="" />
                    </div>
                </div>
                <div className="partner2">
                    <h1>We Believe, Collaboration:</h1>
                    <div className="partner-2-sub">
                        <div className="partner2-colab">
                            <img src={iconPartnerleft} alt="" />
                            <p>Fosters a dynamic exchange of ideas, stimulating creativity and innovation.
                            </p>
                        </div>
                        <div className="partner2-colab">
                            <img src={iconPartnerRight} alt="" />
                            <p>Builds trust, strengthens communication, and develops stronger relationships.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="partner3">
                    <h1>Join Us As</h1>
                    <div className="partner3-sub">
                        <div className="partner3-con">
                            <h2>Designer</h2>
                            <p>1.Opportunity to work on innovative projects</p>
                            <p>2.Access to new technologies and tools</p>
                            <p>3.Exposure to new markets or clients</p>
                        </div>
                        <img src={partnerone} alt="" />
                    </div>
                    <div className="partner3-sub reverse">
                        <div className="partner3-con">
                            <h2>Product Suppliers</h2>

                            <p>1.Potential for increased sales and revenue</p>
                            <p>2.Joint marketing efforts</p>
                            <p>3.Greater reach and brand exposure</p>
                        </div>
                        <img src={partnertwo} alt="" />
                    </div>
                    <div className="partner3-sub">
                        <div className="partner3-con">
                            <h2>Execution Partner</h2>

                            <p>1.Potential for long-term collaborations</p>
                            <p>2.Steady stream of projects</p>
                            <p>3.Priority access to new projects</p>
                        </div>
                        <img src={partnerthree} alt="" />
                    </div>
                </div>
                <div className="partner-form">
                    <h1>Almost There</h1>
                    <form className="custom-form" onSubmit={handleSubmit}>
                        {/* Partner Dropdown */}
                        <div className="partner-section">

                            <select
                                id="partnerRole"
                                name="partnerRole"
                                value={formData.partnerRole}
                                onChange={handleChange}
                            >
                                <option value="" disabled hidden>Partner as a</option>
                                <option value="Designer">Designer</option>
                                <option value="Turnkey Contractor">Turnkey Contractor</option>
                                {/* <option value="Subcontractor">Subcontractor</option> */}
                                <option value="Product Supplier">Product Supplier</option>
                            </select>
                        </div>

                        {/* Person/Company Name & Your/Company Name */}
                        <div className="form-row">
                            <label htmlFor="partnerName">Person/Company Name</label>
                            <input
                                type="text"
                                id="partnerName"
                                name="partnerName"
                                placeholder="Your company/name"
                                value={formData.partnerName}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Phone Number & Email in the Same Line */}
                        <div className="form-row two-columns">
                            <div className="form-column">
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="Enter your phone number"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-column">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* City */}
                        <div className="form-row">
                            <label htmlFor="city">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="Your city"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Upload Document */}
                        <div className="form-row">
                            <h4>
                                {fileName ? fileName : 'Upload Document (Upto 5MB)'}
                            </h4>
                            <label htmlFor="document" id='doc'>Upload Document</label>
                            <input
                                type="file"
                                id="document"
                                name="document"
                                onChange={handleChange}
                                className="file-input"
                            />
                        </div>

                        {/* Comments/Queries */}
                        <div className="form-row">
                            <label htmlFor="comments">Comments/Queries</label>
                            <textarea
                                id="comments"
                                name="comments"
                                placeholder="Type Your Comments/Queries"
                                rows="4"
                                value={formData.comments}
                                onChange={handleChange}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="form-row submit-row">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Partner
