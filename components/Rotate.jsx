import React, { useState } from 'react';
import '../components/Rotate.css';
import coencircles from "../assets/circles.png";
import centerpiece from "../assets/center-left.png";
import eduImg from "../assets/mg4.png";
import med from "../assets/mg2.png";
import Kitchen from "../assets/mg5.png";
import rec from "../assets/rec.png";
import lab from "../assets/mg3.png";
import officetop from "../assets/office-top.png";
import officeleft from "../assets/office-b-l.png";
import officeright from "../assets/office-b-r.png";
import edutop from "../assets/edu-top.png";

import hbed from "../assets/bed-health.png"


import kitchenRotate from "../assets/kitchen2.png"
import labRotate from "../assets/lab2.png"

export const Rotate = () => {
    const [activeContent, setActiveContent] = useState('Click on a circle to display content');
    const [activeImage, setActiveImage] = useState(centerpiece);
    const [activeElectron, setActiveElectron] = useState(1);

    const circles = [
        {
            id: 1,
            heading: 'Office Space',
            content: 'Content for Office Space',
            image: centerpiece,
            rightTop: {
                h3: 'Dream Office',
                h1: 'Office Desk',
                para: 'Beautiful Color Collection',
                image: officetop
            },
            bottomLeft: {
                h1: 'Rotational Chairs',
                image: officeleft
            },
            bottomRight: {
                h1: 'Modern Chairs',
                image: officeright
            }
        },
        {
            id: 2,
            heading: 'Education Space',
            content: 'Content for Education Space',
            image: eduImg,
            rightTop: {
                h3: 'Elevating',
                h1: 'Education Space',
                para: 'Beautiful Color Collection',
                image: edutop
            },
            bottomLeft: {
                h1: 'Rotational Chairs',
                image: officeleft
            },
            bottomRight: {
                h1: 'Modern Chairs',
                image: officeright
            }
        },
        {
            id: 3,
            heading: 'Commercial Kitchen',
            content: 'Content for Commercial Kitchen',
            image: Kitchen,
            rightTop: {
                h3: 'Top-notch',
                h1: 'Commercial Kitchen',
                para: '',
                image: kitchenRotate
            },
            bottomLeft: {
                h1: 'Rotational Chairs',
                image: officeleft
            },
            bottomRight: {
                h1: 'Modern Chairs',
                image: officeright
            }
        },
        {
            id: 4,
            heading: 'Healthcare Space',
            content: 'Content for Healthcare Space',
            image: med,
            rightTop: {
                h3: 'Top-Notch',
                h1: 'Healthcare Space',
                para: '',
                image: hbed
            },
            bottomLeft: {
                h1: 'Rotational Chairs',
                image: officeleft
            },
            bottomRight: {
                h1: 'Modern Chairs',
                image: hbed
            }
        },
        {
            id: 5,
            heading: 'Laboratory Space',
            content: 'Content for Laboratory Space',
            image: lab,
            rightTop: {
                h3: 'Top-Notch',
                h1: 'Laboratory Space',
                para: '',
                image: labRotate
            },
            bottomLeft: {
                h1: 'Rotational Chairs',
                image: officeleft
            },
            bottomRight: {
                h1: 'Modern Chairs',
                image: officeright
            }
        }
    ];

    const activeCircle = circles.find(circle => circle.id === activeElectron) || {};

    const handleCircleClick = (content, image, id) => {
        setActiveContent(content);
        setActiveImage(image);
        setActiveElectron(id);
    };

    const handleNext = () => {
        setActiveElectron(prev => (prev === circles.length ? 1 : prev + 1));
    };

    const handlePrev = () => {
        setActiveElectron(prev => (prev === 1 ? circles.length : prev - 1));
    };

    return (
        <div className="rotate-wrap">
            <div className="heading-rotate">
                <h1>Explore Our Solutions</h1>
                <p>Enhance your spaces with the comfortable furniture crafted by us</p>
            </div>
            <div className="atomic-model">
                <div className="left-div">
                    <div className="circle-div">
                        <img src={coencircles} alt="" />
                    </div>
                    <div className="nucleus">
                        <img src={activeImage} className="central-image" alt="Central" />
                        {circles.map((circle, index) => (
                            <div
                                key={circle.id}
                                className={`electron electron-${index + 1} ${activeElectron === circle.id ? 'active' : ''}`}
                                onMouseEnter={() => handleCircleClick(circle.content, circle.image, circle.id)}
                            >
                                <h4>{circle.heading}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mobile-carousel">
                    <div className="mobile-arrow left-arrow" onClick={handlePrev}>&#60;</div>
                    <div className="mobile-circle">
                        <h4>{activeCircle.heading}</h4>
                    </div>
                    <div className="mobile-arrow right-arrow" onClick={handleNext}>&#62;</div>
                </div>
                <div className="right-div">
                    {activeElectron === 3 || activeElectron === 4 || activeElectron === 5 ? (
                        <div className="custom-content">
                            <img src={rec} alt="" />
                            <div className="custom-r-t-con">
                                <h3>{activeCircle.rightTop.h3}</h3>
                                <h1>{activeCircle.rightTop.h1}</h1>
                                <p>{activeCircle.rightTop.para}</p>
                                <a href="">View Collection</a>
                            </div>
                            <div className="custom-img-div">
                                <img src={activeCircle.rightTop.image} alt="" />
                            </div>
                        </div>
                    ) : (
                        <>
                            {activeCircle.rightTop && (
                                <div className="right-top">
                                    <img src={rec} alt="" className='right-img-ilus' />
                                    <div className="r-t-con">
                                        <h3>{activeCircle.rightTop.h3}</h3>
                                        <h1>{activeCircle.rightTop.h1}</h1>
                                        <p>{activeCircle.rightTop.para}</p>
                                        <a href="">View Collection</a>
                                    </div>
                                    <div className="r-t-img">
                                        <img src={activeCircle.rightTop.image} alt="" />
                                    </div>
                                </div>
                            )}
                            {activeCircle.bottomLeft && (
                                <div className="right-bottom">
                                    <div className="r-b-l">
                                        <div className="r-b-con">
                                            <h1>{activeCircle.bottomLeft.h1}</h1>
                                            <a href="">Shop Now</a>
                                        </div>
                                        <div className="r-b-img">
                                            <img src={activeCircle.bottomLeft.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="r-b-r">
                                        <div className="r-b-con">
                                            <h1>{activeCircle.bottomRight.h1}</h1>
                                            <a href="">Shop Now</a>
                                        </div>
                                        <div className="r-b-img">
                                            <img src={activeCircle.bottomRight.image} alt="" />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>

                {/* <div className="right-div">
                    {activeCircle.rightTop && (
                        <div className="right-top">
                            <img src={rec} alt="" className='right-img-ilus' />
                            <div className="r-t-con">
                                <h3>{activeCircle.rightTop.h3}</h3>
                                <h1>{activeCircle.rightTop.h1}</h1>
                                <p>{activeCircle.rightTop.para}</p>
                                <a href="">View Collection</a>
                            </div>
                            <div className="r-t-img">
                                <img src={activeCircle.rightTop.image} alt="" />
                            </div>
                        </div>
                    )}
                    {activeCircle.bottomLeft && (
                        <div className="right-bottom">
                            <div className="r-b-l">
                                <div className="r-b-con">
                                    <h1>{activeCircle.bottomLeft.h1}</h1>
                                    <a href="">Shop Now</a>
                                </div>
                                <div className="r-b-img">
                                    <img src={activeCircle.bottomLeft.image} alt="" />
                                </div>
                            </div>
                            <div className="r-b-r">
                                <div className="r-b-con">
                                    <h1>{activeCircle.bottomRight.h1}</h1>
                                    <a href="">Shop Now</a>
                                </div>
                                <div className="r-b-img">
                                    <img src={activeCircle.bottomRight.image} alt="" />
                                </div>
                            </div>
                        </div>
                    )}
                </div> */}
            </div>
        </div>
    );
}
