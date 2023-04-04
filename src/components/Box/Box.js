import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import './Box.css';
import image1 from '../image1.jpg';
import image2 from '../image2.jpg';
import image3 from '../image3.jpg';
import image4 from '../image4.jpg';

const Box = () => {
  // Use a ref to access the image container DOM element
  const imageContainerRef = useRef(null);

  // Define the scroll distance
  const scrollDistance = 200;

  // Define the event handlers for the arrow buttons
  const handleRightArrowClick = () => {
    imageContainerRef.current.scrollBy({
      left: scrollDistance,
      behavior: 'smooth'
    });
  };

  const handleLeftArrowClick = () => {
    imageContainerRef.current.scrollBy({
      left: -scrollDistance,
      behavior: 'smooth'
    });
  };

  return (
    <div className="Box">
      <div className="project-images">
        <div className="scroll-arrow left-arrow" onClick={handleLeftArrowClick}>
          <svg width="14" height="60" viewBox="0 0 20 60" xmlns="http://www.w3.org/2000/svg">
            <polyline fill="none" stroke="#fff" strokeWidth="1.5" points="18,2 2,29 18,58 "></polyline>
          </svg>
        </div>
        <div className="scroll-arrow right-arrow" onClick={handleRightArrowClick}>
          <svg width="14" height="60" viewBox="0 0 20 60" xmlns="http://www.w3.org/2000/svg">
            <polyline fill="none" stroke="#fff" strokeWidth="1.5" points="2,58 18,29 2,2 "></polyline>
          </svg>
        </div>
        <div className="image-container" ref={imageContainerRef}>
          <img src={image1} alt="Image 1" />
          <img src={image2} alt="Image 2" />
          <img src={image3} alt="Image 3" />
          <img src={image4} alt="Image 4" />
        </div>
      </div>
    </div>
  );
};

Box.propTypes = {};

Box.defaultProps = {};

export default Box;