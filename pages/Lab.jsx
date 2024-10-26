import React from 'react'
import "../pages/Space.css"
import LabHero from "../assets/lab-hero.png"
import LabHeroMobile from "../assets/mobile-laboratory-hero.png"
import LabHeroRight from "../assets/lab-hero-right.png"
import heroMain from "../assets/hero-main.png"
import LabWork from "../assets/lab-work.png"
import Fume from "../assets/lab-fume.png"
import animal from "../assets/lab-animal.png"
import LabSafe from "../assets/lab-safe.png"




const Lab = () => {
    const furnitureData = [
        { id: 1, img: LabWork, title: 'Laboratory Workstations' },
        { id: 2, img: Fume, title: 'Laboratory Fume Heads' },
        { id: 3, img: animal, title: 'Animal House Furniture' },
        { id: 4, img: LabSafe, title: 'Safety Cabinets' },
   
    
        // Add more furniture data here
      ];
      
    return (
        <div className='space-wrap'>
            <div className="space-hero">
                <img src={LabHero} className='desktop' alt="" />
                <img src={LabHeroMobile} className='mobile' alt="" />
                <div className="space-hero-left">
                    <h1>Laboratory Spaces</h1>
                    <a href="">Enquire Now</a>
                </div>
                <div className="space-hero-right kitchen">
                    <img src={LabHeroRight} alt="" />
                </div>
            </div>

            <div className="space2 lab">
                <img src={heroMain} alt="" />
                <div className="space2-heading">
                <h1>Products in Laboratory Spaces</h1>
                <p>Our Solutions for Laboratory Spaces
                include, but are not limited to:</p>
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

export default Lab
