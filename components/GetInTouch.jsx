import React, { useState } from 'react';
import "../components/GetInTouch.css"
const GetInTouch = () => {
    const [formData, setFormData] = useState({
        name: '',
        contactNo: '',
        location: '',
        budget: '',
        email: '',
        organisation: '',
        areaSqFt: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response =await fetch(`https://thingproxy.freeboard.io/fetch/https://nikshoo-backend.vercel.app/enquiry/submit`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData),
        })
        // console.log(response);
        setFormData({
            name: '',
            contactNo: '',
            location: '',
            budget: '',
            email: '',
            organisation: '',
            areaSqFt: ''
        });
    };
    return (
        <div className="gi-wrap">
            <div className="gi-box">
                <div className="gi-left">
                    <h1>Space <br /> Transformation <br />Starts Here</h1>
                </div>
                <div className="gi-right">
                    <form onSubmit={handleSubmit} className="project-form">
                        <div className="form-con">
                        <div className="left-form">
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Contact No.:</label>
                                <input
                                    type="text"
                                    name="contactNo"
                                    value={formData.contactNo}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Location:</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Budget for project:</label>
                                <input
                                    type="text"
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    
                                />
                            </div>
                        </div>
                        <div className="right-form">
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Name of organisation:</label>
                                <input
                                    type="text"
                                    name="organisation"
                                    value={formData.organisation}
                                    onChange={handleChange}
                                    
                                />
                            </div>

                            <div className="form-group">
                                <label>Area in sq. ft.:</label>
                                <input
                                    type="text"
                                    name="areaSqFt"
                                    value={formData.areaSqFt}
                                    onChange={handleChange}
                                    
                                />
                            </div>
                        </div>
                        </div>
                        <button type="submit" className="submit-btn">Enquire Now</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch