import { useState, useEffect } from 'react';
import React from 'react';
import "../components/Gallery.css";

export function Gallery() {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(`https://nikshoo-backend.vercel.app/admin/images`);
      const data = await response.json();

      // Reorder the images based on the fileName
      const orderedImages = [
        data.find(img => img.fileName.includes("gallery1")),
        data.find(img => img.fileName.includes("gallery2")),
        data.find(img => img.fileName.includes("gallery3")),
        data.find(img => img.fileName.includes("gallery4")),
        data.find(img => img.fileName.includes("gallery5")),
      ];

      setImages(orderedImages); // Set ordered images
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchImages(); // Fetch images on component mount
  }, []);

  return (
    <div className="custom-grid">
      {/* Left Section - Full Height */}
      <div className="left-section">
        {images[0] && <img src={images[0].imageUrl} alt={images[0].fileName} />}
      </div>

      {/* Right Section - Split vertically into two halves */}
      <div className="right-section">
        {/* Top Half */}
        <div className="top-half">
          {images[1] && (
            <div className="gallery-image-container">
              <img src={images[1].imageUrl} alt={images[1].fileName} />
            </div>
          )}
          {images[2] && (
            <div className="gallery-image-container">
              <img src={images[2].imageUrl} alt={images[2].fileName} />
            </div>
          )}
        </div>

        {/* Bottom Half */}
        <div className="bottom-half">
          {images[3] && (
            <div className="gallery-image-container">
              <img src={images[3].imageUrl} alt={images[3].fileName} />
            </div>
          )}
          {images[4] && (
            <div className="gallery-image-container">
              <img src={images[4].imageUrl} alt={images[4].fileName} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
