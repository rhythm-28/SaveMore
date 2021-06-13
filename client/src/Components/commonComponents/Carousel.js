import React from 'react';
import Navbar from "./navbar"
import Styles from '../../stylesheets/productPage.css';

function Carousel(){
  return (
    <div>
      <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="false">
        <ol class="carousel-indicators">
          <li data-target="#carousel" data-slide-to="0" class="active"></li>
          <li data-target="#carousel" data-slide-to="1"></li>
          <li data-target="#carousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 img" src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-silver-select-201911?wid=1808&hei=1686&fmt=jpeg&qlt=80&.v=1572825196932" alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img" src="https://images-na.ssl-images-amazon.com/images/I/913iRx-3W-L._SL1500_.jpg" alt="Second slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100 img" src="https://images-na.ssl-images-amazon.com/images/I/71z-1j187cL._SL1500_.jpg" alt="Third slide" />
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel
