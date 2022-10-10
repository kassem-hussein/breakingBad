import React from 'react';

import img2 from '../../assets/images/BreakingBad2.jpg';
import img4 from '../../assets/images/BreakingBad4.jpg';
import './Slider.css';
const Slider = () => {
  return (
    <div className="mt-3">
      <div
        id="carouselExampleControls"
        class="carousel slide "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner  w-100">
          <div class="carousel-item active">
            <img src={img2} class="d-block w-100 img" alt="..." />
          </div>

          <div class="carousel-item">
            <img src={img4} class="d-block w-100 img" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
