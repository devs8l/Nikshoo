import React, { useState } from 'react';
import "../components/Navigator.css";

const Navigator = ({ circles, onCircleClick }) => {
  const [activeIndex, setActiveIndex] = useState(0); // Active circle index

  // Calculate the offset based on the active index
  const getCarouselTransform = () => {
    const circleWidth = 60; // Width of a circle including margin (adjust as needed)
    const offset = circleWidth * activeIndex * -1; // Adjust for active index
    return `translateX(${offset}px)`;
  };

  const handleCircleClick = (index) => {
    setActiveIndex(index);
    onCircleClick(circles[index].content, circles[index].image, circles[index].id); // Call the parent's click handler with content and image
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: getCarouselTransform() }}>
        {circles.map((circle, index) => (
          <div
            key={index}
            className={`circle ${index === activeIndex ? 'active' : 'inactive'}`}
            onClick={() => handleCircleClick(index)} // Pass the index
          >
            <h4>{circle.heading}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navigator;
