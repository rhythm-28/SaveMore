import React from 'react';
import data from './cartData.js';
import CartProduct from './cartProduct.js';
import styles from '../../stylesheets/cart.css';
import {Avatar,Button} from '@material-ui/core/';

function Cart(){
  return (
    <div class="bg-color">
      <h1 class="cart-heading"> Your Cart</h1>
      <div class="cart-box">
      {data.map(function(product){
        return (
          <CartProduct
            src={product.src}
            title={product.title}
            price={product.price}
           />
        );
      })}
      </div>
      <div class="card bottom">
        <h2> Total items: {data.length}</h2>
        <h2> Total Price: 500</h2>
        <button class="button-cart"> Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
