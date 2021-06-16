import React from 'react';
import Navbar from './navbar';
import Styles from '../../stylesheets/productPage.css';

function Carousel(props) {
  const { images } = props;
  return (
    <div class="d-flex justify-content-center">
      <div
        id="carousel"
        class="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        <ol class="carousel-indicators">
          {images.map((image, idx) => {
            return (
              <li
                data-target="#carousel"
                data-slide-to={idx}
                class={idx == 0 ? `active` : ''}
              ></li>
            );
          })}
        </ol>
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
      </div>
      <a
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
      </a>
    </div>
  );
}

export default Carousel;
