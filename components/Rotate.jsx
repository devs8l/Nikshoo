import React, { useState, useEffect } from 'react';
import '../components/Rotate.css';
import coencircles from "../assets/circles.png";
import centerpiece from "../assets/center-left.png";
import eduImg from "../assets/mg4.png";
import med from "../assets/mg2.png";
import Kitchen from "../assets/mg5-2.png";
import rec from "../assets/rec.png";
import lab from "../assets/mg3-2.png";
import officetop from "../assets/office-top.png";
import officeleft from "../assets/office-b-l.png";
import officeright from "../assets/office-workstation.png";
import edutop from "../assets/edu-top.png";
import eduHeroRight from "../assets/edu-hero-right.png"

import hbed from "../assets/bed-health.png"
import CafeEdu from "../assets/Cafe-edu.png"
import Library from "../assets/library.png"
import metalBed from "../assets/metalbed.png"

import { MdOutlineArrowOutward } from "react-icons/md";








import kitchenRotate from "../assets/com-kitchen.png"
import labRotate from "../assets/lab2.png"

export const Rotate = () => {
    const [activeContent, setActiveContent] = useState('Click on a circle to display content');
    const [activeImage, setActiveImage] = useState(centerpiece);
    const [activeElectron, setActiveElectron] = useState(1);
    const [animationDirection, setAnimationDirection] = useState('');


    const circles = [
        {
            id: 1,
            heading: 'Office Space',
            content: 'Content for Office Space',
            image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985084/center-left_qmfdfg.png",
                rightTop: {
                link: '/office',
                h1: 'Office Desk',
                para: 'Beautiful Color Collection',
                image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985130/office-top_oa6fmy.png"
            },
            bottomLeft: {
                h1: 'Rotational Chairs',
                image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985127/office-b-l_ae7did.png"
            },
            bottomRight: {
                h1: 'Workstations',
                image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985131/office-workstation_tq2lwj.png"
            }
        },
        {
            id: 2,
            heading: 'Education Space',
            content: 'Content for Education Space',
            image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985125/mg4_tokh6q.png",
            rightTop: {
                link: '/education',
                h1: 'Education Space',
                para: 'Beautiful Color Collection',
                image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985091/edu-hero-right_hos1ws.png"
            },
            bottomLeft: {
                h1: 'Library',
                image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985117/library_oortad.png"
            },
            bottomRight: {
                h1: 'Acommodation',
                image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985122/metalbed_oux3pj.png"
            }
        },
        {
            id: 3,
            heading: 'Commercial Kitchen',
            content: 'Content for Commercial Kitchen',
            image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985126/mg5-2_rruuqa.jpg",
            rightTop: {
                link: '/kitchen',
                h1: 'Commercial Kitchen',
                para: '',
                image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985085/com-kitchen_ovonx8.png"
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
            image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985124/mg2_fjrwfj.png",
            rightTop: {
                link: '/healthcare',
                h1: 'Healthcare Space',
                para: '',
                image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985081/bed-health_epc9bu.png"
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
            image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985123/mg3-2_qa5nie.webp",
            rightTop: {
                link: '/lab',
                h1: 'Laboratory Space',
                para: '',
                image: "https://res.cloudinary.com/dicusurfx/image/upload/v1730985117/lab2_tjw2zi.png"
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
    useEffect(() => {
        if (animationDirection) {
            const timeout = setTimeout(() => {
                setAnimationDirection('');
            }, 300); // Match the duration of the CSS transition

            return () => clearTimeout(timeout);
        }
    }, [animationDirection]);

    const activeCircle = circles.find(circle => circle.id === activeElectron) || {};

    const handleCircleClick = (content, image, id) => {
        setActiveContent(content);
        setActiveImage(image);
        setActiveElectron(id);
    };

    const handleNext = () => {
        setAnimationDirection('left');
        setActiveElectron(prev => (prev === circles.length ? 1 : prev + 1));
    };

    const handlePrev = () => {
        setAnimationDirection('right');
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
                    <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985084/circles_popvhc.png" alt="" />
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

                <div className={`mobile-carousel ${animationDirection === 'left' ? 'slide-left' : ''} ${animationDirection === 'right' ? 'slide-right' : ''}`}>
                    {/* Previous of Previous Heading */}
                    <div className="mobile-prev-prev">
                        {activeCircle.id > 2 ? circles[activeCircle.id - 3].heading : (activeCircle.id === 2 ? circles[circles.length - 1].heading : circles[circles.length - 2].heading)}
                    </div>
                    {/* Previous Heading */}
                    <div className="mobile-arrow left-arrow" onClick={handlePrev}>
                        {activeCircle.id > 1 ? circles[activeCircle.id - 2].heading : circles[circles.length - 1].heading}
                    </div>
                    {/* Active Circle Heading */}
                    <div className="mobile-circle">
                        <h4>{activeCircle.heading}</h4>
                    </div>
                    {/* Next Heading */}
                    <div className="mobile-arrow right-arrow" onClick={handleNext}>
                        {activeCircle.id < circles.length ? circles[activeCircle.id].heading : circles[0].heading}
                    </div>
                    {/* Next of Next Heading */}
                    <div className="mobile-next-next">
                        {activeCircle.id < circles.length - 1 ? circles[activeCircle.id + 1].heading : (activeCircle.id === circles.length - 1 ? circles[0].heading : circles[1].heading)}
                    </div>

                </div>
                    <div className="carousel-indicator">
                        {circles.map((circle, index) => (
                            <div
                                key={circle.id}
                                className={`carousel-dot ${index + 1 === activeCircle.id ? 'active-dot' : ''}`}
                                onClick={() => handleCircleClick(circle.content, circle.image, circle.id)}
                            ></div>
                        ))}
                    </div>


                <div className="right-div">
                    {activeElectron === 3 || activeElectron === 4 || activeElectron === 5 ? (
                        <div className="custom-content">
                            <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985137/rec_sc5tlr.png" alt="" />
                            <div className="custom-r-t-con">
                                {/* <h3>{activeCircle.rightTop.h3}</h3> */}
                                <h1>{activeCircle.rightTop.h1}</h1>
                                <p>{activeCircle.rightTop.para}</p>
                                <a href={activeCircle.rightTop.link}>Explore<MdOutlineArrowOutward className='green' /></a>
                            </div>
                            <div className={`custom-img-div ${activeCircle.id === 4 ? 'special-align' : ''}  ${activeCircle.id === 3 ? 'special-align-kitchen' : ''}`}>
                                <img src={activeCircle.rightTop.image} alt="" />
                            </div>
                        </div>
                    ) : (
                        <>
                            {activeCircle.rightTop && (
                                <div className="right-top">
                                    <img src="https://res.cloudinary.com/dicusurfx/image/upload/v1730985137/rec_sc5tlr.png" alt="" className='right-img-ilus' />
                                    <div className="r-t-con">
                                        {/* <h3>{activeCircle.rightTop.h3}</h3> */}
                                        <h1>{activeCircle.rightTop.h1}</h1>
                                        {/* <p>{activeCircle.rightTop.para}</p> */}
                                        <a href={activeCircle.rightTop.link}>Explore<MdOutlineArrowOutward className='green' /></a>
                                    </div>
                                    <div className="r-t-img">
                                        <img src={activeCircle.rightTop.image} alt="" />
                                    </div>
                                </div>
                            )}
                            {activeCircle.bottomLeft && (
                                <div className="right-bottom">
                                    <div className="r-b-l">
                                        <div className="r-b-con bottomabs">
                                            <h1>{activeCircle.bottomLeft.h1}</h1>
                                            <a href={activeCircle.rightTop.link}>Explore<MdOutlineArrowOutward className='green' /></a>
                                        </div>
                                        <div className={`r-b-img ${activeCircle.id === 2 ? 'special' : ''}`}>
                                            <img src={activeCircle.bottomLeft.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="r-b-r">
                                        <div className="r-b-con bottomabs">
                                            <h1>{activeCircle.bottomRight.h1}</h1>
                                            <a href={activeCircle.rightTop.link}>Explore<MdOutlineArrowOutward className='green' /></a>
                                        </div>
                                        <div className="r-b-img btmimgabs">
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
