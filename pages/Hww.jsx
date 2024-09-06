import React from 'react';
import '../pages/Hww.css';
import hww1 from "../assets/hww1.png";
import hww2 from "../assets/hww2.png";
import hww3 from "../assets/hww3.png";
import hww4 from "../assets/hww4.png";
import hww5 from "../assets/hww5.png";
import heroMain from "../assets/hero-main.png"


import hwwHero from "../assets/hww-hero.png"
import hwwFoot from "../assets/hww-footer.png"

const Hww = () => {
  return (
    <div className="hww-wrap">
      <div className="hero-hww">
        <img src={heroMain} alt="" />
        <div className="hww-hero-con">
          <h1>How We Work</h1>
          <p className='hww-para'>At Nikshoo,  we're dedicated to providing exceptional  furniture solutions that enhance your work environment. Here's an overview of our collaborative and tailored approach:</p>
        </div>
        <div className="hww-img-div">
          <img src={hwwHero} alt="" />
        </div>
      </div>
      <div className="image-container">
        <div className="image-part part-1">
          <img src={hww1} alt="Segment 1" />
          <div className="hww-con">
            <div className="num">
              <h1>1</h1>
            </div>
            <div className="num-para">
              <p>lorem10</p>
            </div>
          </div>
        </div>
        <div className="image-part part-2">
          <img src={hww2} alt="Segment 2" />
          <div className="hww-con">
            <div className="num">
              <h1>2</h1>
            </div>
            <div className="num-para">
              <p>lorem20</p>
            </div>
          </div>
        </div>
        <div className="image-part part-3">
          <img src={hww3} alt="Segment 3" />
          <div className="hww-con">
            <div className="num">
              <h1>3</h1>
            </div>
            <div className="num-para">
              <p>lorem30</p>
            </div>
          </div>
        </div>
        <div className="image-part part-4">
          <img src={hww4} alt="Segment 4" />
          <div className="hww-con">
            <div className="num">
              <h1>4</h1>
            </div>
            <div className="num-para">
              <p>lorem40</p>
            </div>
          </div>
        </div>
        <div className="image-part part-5">
          <img src={hww5} alt="Segment 5" />
          <div className="hww-con">
            <div className="num">
              <h1>5</h1>
            </div>
            <div className="num-para">
              <p>lorem50</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="hero-hww">
          <div className="hww-hero-con">
            <h1>Work With Us!</h1>
            <p className='hww-para'>At Nikshoo,  we're dedicated to providing exceptional  furniture solutions that enhance your work environment. Here's an overview of our collaborative and tailored approach:</p>
          </div>
          <div className="hww-img-div">
            <img src={hwwFoot} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Hww;
