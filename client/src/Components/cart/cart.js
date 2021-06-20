import React from 'react';
import { Avatar, Button } from '@material-ui/core/';
import { connect } from 'react-redux';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

import CartProduct from './cartProduct.js';
import {
  getUserProducts,
  userAddedProduct,
  userSubtractedProduct,
  userRemovedProduct,
} from '../../actions/cart.js';
import Navbar from '../navbar.js';

import styles from '../../stylesheets/cart.css';

function checkout(products, totalQuantity, totalPrice) {
  if (products.length != 0) {
    return (
      <div class="row justify-content-center">
        <div class="card bottom col-xl-5 col-md-6 col-sm-8 col-10">
          <h2> Total items: {totalQuantity(products)}</h2>
          <h2> Total Price: {totalPrice(products)}</h2>
          <button class="button-cart"> Proceed to Checkout</button>
        </div>
      </div>
    );
  }
}

function renderCartProduct(
  products,
  addProductToCart,
  subtractProductFromCart,
  removeProductFromCart
) {
  if (products.length != 0) {
    return products.map((product) => {
      return (
        <CartProduct
          product={product}
          addProductToCart={addProductToCart}
          subtractProductFromCart={subtractProductFromCart}
          removeProductFromCart={removeProductFromCart}
        />
      );
    });
  } else {
    return (
      <div class="cart-all-products">
        <h1> Your Cart is empty! </h1>
        <h2> Let's shop </h2>
        <Link to="/products">Our Top Products</Link>
      </div>
    );
  }
}

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      inProgress: true,
      totalQty: 0,
    };
  }
  addProductToCart = (name) => {
    this.props.dispatch(userAddedProduct(name));
  };
  subtractProductFromCart = (name) => {
    this.props.dispatch(userSubtractedProduct(name));
  };
  removeProductFromCart = (name) => {
    this.props.dispatch(userRemovedProduct(name));
  };
  totalQuantity = (products) => {
    let qty = 0;
    products.forEach((product) => {
      qty += product.quantity;
    });
    return qty;
  };
  totalPrice = (products) => {
    let price = 0;
    products.forEach((product) => {
      price += product.quantity * product.price;
    });
    return price;
  };
  componentDidMount = () => {
    this.props.dispatch(getUserProducts());
    this.setState({ inProgress: false });
  };

  render() {
    const { products } = this.props.cart;
    const { inProgress, totalQty } = this.state;
    return (
      <div>
        <Navbar />
        <div class="bg-color">
          <h1 class="cart-heading">
            {' '}
            <ShoppingCartOutlinedIcon fontSize="inherit" />{' '}
          </h1>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div class="cart-box">
                {renderCartProduct(
                  products,
                  this.addProductToCart,
                  this.subtractProductFromCart,
                  this.removeProductFromCart
                )}
              </div>
            </div>
          </div>
          {checkout(products, this.totalQuantity, this.totalPrice)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ cart }) => {
  return { cart };
};
export default connect(mapStateToProps)(Cart);
