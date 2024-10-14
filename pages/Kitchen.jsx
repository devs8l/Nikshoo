import React from 'react'
import "../pages/Space.css"
import KitchenHero from "../assets/kitchen-hero.png"
import KitchenHeroMobile from "../assets/mobile-kitchen-hero.png"
import KitchenHeroRight from "../assets/kitchen-hero-right.png"
import heroMain from "../assets/hero-main.png"
import Bakery from "../assets/Bakery.png"
import Fridge from "../assets/fridge.png"
import restraunt from "../assets/Restraunt.png"
import kitchenStorage from "../assets/kitchen-storage.png"
import cloud from "../assets/cloud.png"



const Kitchen = () => {
    const furnitureData = [
        { id: 1, img: Bakery, title: 'Bakery Equipment' },
        { id: 2, img: Fridge, title: 'Refridgerator Equipment' },
        { id: 3, img: restraunt, title: 'Restraunt Equipment' },
        { id: 4, img: kitchenStorage, title: 'Storage Equipment' },
        { id: 5, img: cloud, title: 'Cloud Equipment' },
   
    
        // Add more furniture data here
      ];
      
    return (
        <div className='space-wrap'>
            <div className="space-hero">
                <img src={KitchenHero} className='desktop' alt="" />
                <img src={KitchenHeroMobile} className='mobile' alt="" />
                <div className="space-hero-left">
                    <h1>Commercial Kitchen</h1>
                    <a href="">Enquire Now</a>
                </div>
                <div className="space-hero-right kitchen">
                    <img src={KitchenHeroRight} alt="" />
                </div>
            </div>

            <div className="space2 kit">
                <img src={heroMain} alt="" />
                <div className="space2-heading">
                <h1>Products in Commercial Kitchen</h1>
                <p>Our Solutions for  Commercial Kitchen include, but are not limited to:</p>
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

export default Kitchen
