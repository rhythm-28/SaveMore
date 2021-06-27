import React from 'react';

import Navbar from '../navbar';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Styles from '../../stylesheets/productPage.css';

function Carousel(props) {
  let { images } = props;
  images = images.length
    ? images
    : [
        {
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png',
        },
      ];
  console.log(images);
  return (
    <div class="d-flex justify-content-center">
      <div
        id={`carousel-${images[0].url}`}
        class="carousel slide carousel-dark carousel-fade"
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
        href={`#carousel-${images[0].url}`}
        role="button"
        data-slide="prev"
      >
        <span class="" aria-hidden="true">
          <ArrowBackIosIcon style={{ color: 'black' }} fontSize="large" />
        </span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href={`#carousel-${images[0].url}`}
        role="button"
        data-slide="next"
      >
        <span class="" aria-hidden="true">
          <ArrowForwardIosIcon style={{ color: 'black' }} fontSize="large" />
        </span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
