import React, { useEffect } from 'react';
import "../pages/Space.css"
import officeHero from "../assets/office-hero.png"
import officeHeroRight from "../assets/office-hero-right.png"

import officechair from "../assets/officechair.png"
import exeDesk from "../assets/exeDesk.png"
import Workstation from "../assets/Workstation.png"
import Cube from "../assets/cubicles.png"
import Conf from "../assets/con-room.png"
import Sofas from "../assets/sofas.png"
import Lounge from "../assets/lounge.png"
import Compact from "../assets/compact.png"
import Pods from "../assets/pods.png"
import Cafe from "../assets/Cafeteria.png"
import Storage from "../assets/storage.png"
import Locker from "../assets/locker.png"
import edudesk from "../assets/edudesk.png"


import heroMain from "../assets/hero-main.png"
import admin from "../assets/furn.png"
import eduHero from "../assets/edu-hero.png"
import eduHeroRight from "../assets/edu-hero-right.png"
import waiting from "../assets/wait.png"
import Principal from "../assets/Principal.png"
import soft from "../assets/soft-seat.png"
import Library from "../assets/library.png"
import Dining from "../assets/dining.png"
import Hostel from "../assets/Hostel.png"
import Lab from "../assets/lab.png"



const Education = () => {
  
    const furnitureData = [
        { id: 1, img: edudesk, title: 'Classroom Desking' },
        { id: 2, img: exeDesk, title: 'Executive Desk' },
        { id: 3, img: admin, title: 'Administration Office Furniture' },
        { id: 4, img: Sofas, title: 'Sofas' },
        { id: 5, img: waiting, title: 'Waiting Area Furniture' },
        { id: 6, img: soft, title: 'Soft Seating' },
        { id: 8, img: Compact, title: 'Compactors' },
        { id: 9, img: Pods, title: 'Pods' },
        { id: 10, img: Cafe, title: 'Cafeteria/Recreation' },
        { id: 11, img: Storage, title: 'Storages' },
        { id: 12, img: Locker, title: 'Lockers' },
        { id: 12, img: Library, title: 'Library' },
        { id: 12, img: Dining, title: 'Dining' },
        { id: 12, img: Hostel, title: 'Hostel' },
        { id: 12, img: Lab, title: 'Lab' },
        { id: 7, img: Principal, title: 'Principal /Dean Cabin' },
    
        // Add more furniture data here
      ];
      
    return (
        <div className='space-wrap'>
            <div className="space-hero">
                <img src={eduHero} alt="" />
                <div className="space-hero-left">
                    <h1>Education Spaces</h1>
                    <a href="">Enquire Now</a>
                </div>
                <div className="space-hero-right edu">
                    <img src={eduHeroRight} alt="" />
                </div>
            </div>

            <div className="space2">
                <img src={heroMain} alt="" />
                <div className="space2-heading">
                <h1>Products in Education Spaces</h1>
                <p>Our Solutions for  Education Spaces include, but are not limited to:</p>
                </div>

                <div className="cards-container">
                    {furnitureData.map((item) => (
                        <div key={item.id} className="card">
                            <img src={item.img} alt={item.title} className="card-image" />
                            <h3 className="card-title">{item.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education
