import React from 'react'
import "../pages/Space.css"
import officeHero from "../assets/office-hero.png"
import officeHeroRight from "../assets/office-hero-right.png"

import DoctorExam from "../assets/Doctor-table.png"
import exeDesk from "../assets/exeDesk.png"
import Workstation from "../assets/Workstation.png"
import Cube from "../assets/cubicles.png"
import Conf from "../assets/con-room.png"
import Sofas from "../assets/sofas.png"
import Lounge from "../assets/lounge.png"
import Compact from "../assets/compact.png"
import Pods from "../assets/pods.png"
import Cafe from "../assets/cafeteria.png"
import Storage from "../assets/storage.png"
import Locker from "../assets/locker.png"

import heroMain from "../assets/hero-main.png"

import HealthcareHero from "../assets/Health-hero.png"
import HealthcareHeroRight from "../assets/Health-right-hero.png"
import Principal from "../assets/Principal.png"
import GreySofa from "../assets/grey-sofa.png"

import waiting from "../assets/wait.png"
import soft from "../assets/soft-seat.png"
import tward from "../assets/two.png"
import HospitalRoom from "../assets/hos-room.png"





const Healthcare = () => {
    const furnitureData = [
        { id: 1, img: DoctorExam, title: 'Doctor Examination' },
        { id: 2, img: Principal, title: 'Administration Desk' },
        { id: 3, img: GreySofa, title: 'Sofas' },
        { id: 4, img: waiting, title: 'Waiting area' },
        { id: 5, img: soft, title: 'Soft Seating' },
        { id: 9, img: Pods, title: 'Pods' },
        { id: 10, img: Cafe, title: 'Cafeteria/Recreation' },
        { id: 11, img: Storage, title: 'Storages' },
        { id: 12, img: Locker, title: 'Lockers' },
        { id: 6, img: tward, title: 'Transfer , ward & OT ' },
        { id: 7, img: HospitalRoom, title: 'Hospital room' },
        { id: 8, img: Compact, title: 'Compactors' },
    
        // Add more furniture data here
      ];
      
    return (
        <div className='space-wrap'>
            <div className="space-hero">
                <img src={HealthcareHero} alt="" />
                <div className="space-hero-left">
                    <h1>Healthcare Spaces</h1>
                    <a href="">Enquire Now</a>
                </div>
                <div className="space-hero-right health">
                    <img src={HealthcareHeroRight} alt="" />
                </div>
            </div>

            <div className="space2">
                <img src={heroMain} alt="" />
                <div className="space2-heading">
                <h1>Products in Healthcare Spaces</h1>
                <p>Our Solutions for  Healthcare Spaces include, but are not limited to:</p>
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

export default Healthcare
