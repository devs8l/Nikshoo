import React from 'react'
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

import heroMain from "../assets/hero-main.png"



const Office = () => {
    const furnitureData = [
        { id: 1, img: officechair, title: 'Office Chair' },
        { id: 2, img: exeDesk, title: 'Executive Desk' },
        { id: 3, img: Workstation, title: 'Workstations' },
        { id: 4, img: Cube, title: 'Cubicles' },
        { id: 5, img: Conf, title: 'Meeting and Conference room Furniture' },
        { id: 6, img: Sofas, title: 'Sofas/Soft Seating' },
        { id: 7, img: Lounge, title: 'Lounge Furniture' },
        { id: 8, img: Compact, title: 'Compactors' },
        { id: 9, img: Pods, title: 'Pods' },
        { id: 10, img: Cafe, title: 'Cafeteria/Recreation' },
        { id: 11, img: Storage, title: 'Storages' },
        { id: 12, img: Locker, title: 'Lockers' },
    
        // Add more furniture data here
      ];
      
    return (
        <div className='space-wrap'>
            <div className="space-hero">
                <img src={officeHero} alt="" />
                <div className="space-hero-left">
                    <h1>Office Spaces</h1>
                    <a href="">Enquire Now</a>
                </div>
                <div className="space-hero-right">
                    <img src={officeHeroRight} alt="" />
                </div>
            </div>

            <div className="space2">
                <img src={heroMain} alt="" />
                <div className="space2-heading">
                <h1>Products in Office Spaces</h1>
                <p>Our Solutions for  Office Spaces include, but are not limited to:</p>
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

export default Office
