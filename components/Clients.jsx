import React from 'react'
import "../components/Clients.css";
import n2 from "../assets/aditya.png"
import n3 from "../assets/aziva.png"

import n4 from "../assets/bob.png"

import n5 from "../assets/bank1.png"
import n6 from "../assets/bank2.png"
import n7 from "../assets/sbi.png"



const Crsl = () => {
  return (
    <div className="scroller">
      <div className="scroller_in">
        <img src={n2} alt="" />
        <img src={n3} alt="" />
        <img src={n5} alt="" />
        <img src={n4} alt="" />
        <img src={n6} alt="" />
        <img src={n7} alt="" />

      </div>
      <div className="scroller_in">
        <img src={n2} alt="" />
        <img src={n3} alt="" />
        <img src={n5} alt="" />
        <img src={n4} alt="" />
        <img src={n6} alt="" />
        <img src={n7} alt="" />

      </div>
    </div>
  )
}

export default Crsl;