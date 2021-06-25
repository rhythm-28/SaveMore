import React from 'react';

import Navbar from '../navbar';

import Styles from '../../stylesheets/productPage.css';

function AdminCarousel(props) {
  const { images } = props;
  return (
    <div class="d-flex justify-content-center">
      <div
        id="carousel"
        class="carousel slide"
        data-ride="carousel"
        // data-interval="false"
      >
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        {/* <ol class="carousel-indicators">
          {images.map((image, idx) => {
            return (
              <li
                data-target="#carousel"
                data-slide-to={idx}
                class={idx == 0 ? `active` : ''}
              ></li>
            );
          })}
        </ol> */}
        <div class="carousel-inner">
          {images.map((image, idx) => {
            return (
              <div class={idx == 0 ? `carousel-item active` : 'carousel-item'}>
                <img
                  class="d-block w-100"
                  src={image.url}
                  alt={`${idx + 1} slide`}
                />
              </div>
            );
          })}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* <a
        class="carousel-control-prev"
        href="#carousel"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a> */}
    </div>
  );
}

export default AdminCarousel;