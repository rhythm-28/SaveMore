import React from 'react';
import Styles from '../../stylesheets/productPage.css';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import {Avatar,Button} from '@material-ui/core/';
import Navbar from "./navbar"
import Carousel from "./Carousel";

function productPage(){
  return (
    <div>
      <Navbar />
      <div className="row mainDiv">
        <div className="col-4 leftDivStyle">
          <div class="card carousel-card">
            <div class="card-body">
              <Carousel />
              <div className="buttons">
                <button ><i class="fas fa-shopping-cart"> </i> Add to Cart</button>
                <button> <i class="fas fa-shopping-cart"> </i> Buy Now</button>
              </div>
            </div>
          </div>
        </div>
          <div className="col-7 rightDivStyle">
            <div class="main-info">
              <div class="card text-white bg-info card-title">
                <div class="card-body">
                  <h1> Macbook</h1>
                  <div class="Price">
                    <h2> 75% off</h2>
                    <span className="stars">
                      <button className="ratings-button btn-sm"> 4.5 <i class="fas fa-star"></i> </button>
                      <p class="ratings-and-reviews"> 1,761 Ratings & 281 Reviews</p>
                    </span>
                    <span>
                      <h3 ><s> ₹ 1,50,000 </s> </h3>
                      <h4> ₹ 90,000 </h4>
                    </span>
                  </div>
                  </div>
                </div>
              </div>
            <div class="other-info">
              <div class="card text-white card-description">
                <div class="card-body">
                  <p> M1 has the fastest CPU we’ve ever made. With that kind of processing speed, MacBook Air can take on new extraordinarily intensive tasks like professional-quality editing and action-packed gaming. But the 8‑core CPU on M1 isn’t just up to 3.5x faster than the previous generation2 — it balances high-performance cores with efficiency cores that can still crush everyday jobs while using just a tenth of the power.</p>
                  <p> Up to 9x faster.14 Even for a 16‑core Neural Engine, that’s a lot to process. Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro, make smart tools such as magic wands and audio filters more accurate at auto‑detection, and so much more. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  );
}

export default productPage;
