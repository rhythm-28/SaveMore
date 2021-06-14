import React from 'react';
import styles from '../../stylesheets/cart.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
function CartProduct(props){

  const x = 1;

  return (
    <div>
      <div class="row productDiv card-all">
        <div class="col-3">
          <div class="img-div">
            <img src={props.src} alt={props.title} class="img"/>
          </div>
        </div>
        <div class="col-9 all-info">
          <div class="product-cart">
            <div class="main-info">
              <h1> {props.title}</h1>
              <h2> Final Price: {props.price} </h2>
            </div>
            <div class="quantity">
              <h2> Quantity: {x}</h2>
              <Button> <AddCircleIcon size="medium"/> </Button>
              <Button> <RemoveCircleIcon size="medium"/> </Button>
              <Button size='large'> <DeleteIcon/> </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
