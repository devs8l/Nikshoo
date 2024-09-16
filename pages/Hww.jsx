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
          <div className="hww-con ">
            <div className="num">
              <h1>1</h1>
            </div>
            <div className="num-para">
              <h2>Cosultation</h2>
              <p>
                - We listen to your needs, goals, and challenges to understand your unique requirements.
              </p>
              <p>
                - Our expert team guides you through a discovery process to identify the perfect furniture solutions.</p>
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
              <h2>Space Planning</h2>
              <p>
                - We assess your office space, taking into account layout, functionality, and workflow
              </p>
              <p>- Our designers create a customized floor plan, optimizing your space for productivity and comfort.</p>
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
              <h2>Product Selection</h2>
              <p>- We present a curated selection of furniture options, tailored to your style, budget, and needs.
              </p>
              <p>- Our team helps you choose the perfect products, ensuring a cohesive and functional workspace.</p>
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
              <h2>Installation</h2>
              <p>- Our experienced installation team ensures a seamless and efficient setup process.
              </p>
              <p>
              - We take care of every detail, from delivery to assembly, so you can focus on your business.</p>
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
              <h2>After Sales Support</h2>
              <p>- We provide comprehensive support, including maintenance, repairs, and replacement services.
              </p>
              <p>- Our dedicated team ensures your satisfaction and helps you maximize the value of your investment.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-section">
        <div className="hero-hww">
          <div className="hww-hero-con">
            <h1>Work With Us!</h1>
            <p className='hww-para'>At Nikshoo,  we're dedicated to providing exceptional  furniture solutions that enhance your work environment. Here's an overview of our collaborative and tailored approach:</p>
            <button>
            Join US!
          </button>
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
