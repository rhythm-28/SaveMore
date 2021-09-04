import React from 'react';
import { Avatar, Button } from '@material-ui/core/';
import { connect } from 'react-redux';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import CartProduct from './cartProduct.js';
import OrderSummary from './orderSummary';
import {
  getUserProducts,
  userAddedProduct,
  userSubtractedProduct,
  userRemovedProduct,
} from '../../actions/cart.js';
import { Navbar, Flash } from '../index';

import styles from '../../stylesheets/cart.css';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

async function displayRazorpay(amount, currency, name, id, email, setPayment) {
  const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

  if (!res) {
    alert('razorpay sdk failed to load');
    return;
  }
  // __DEV__ ? : 'real_key
  var options = {
    key: process.env.Key,
    amount: amount.toString(),
    currency: currency,
    name: name,
    description: 'Test Transaction',
    image:
      'https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg',
    order_id: id,
    handler: function (response) {
      // alert(response.razorpay_signature)
      //removeAllProducts();
      setPayment(true);
    },
    prefill: {
      name: name,
      email: email,
    },
  };
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

async function handleCheckout(val, user, setPayment) {
  // call api here
  // api should send details like amount,currency,name,id,email,phone
  // displayRazorpay();
  const res = await axios.post('/api/razorpay/', { amount: val });
  console.log(res.data);

  displayRazorpay(
    val,
    'INR',
    user.username,
    res.data.id,
    user.email,
    setPayment
  );
}

function checkout(products, totalQuantity, totalPrice, user, setPayment) {
  const val = totalPrice(products);
  if (products.length != 0) {
    return (
      <div class="row justify-content-center">
        <div class="card bottom col-xl-5 col-md-6 col-sm-8 col-10">
          <h2> Total items: {totalQuantity(products)}</h2>
          <h2> Total Price: {val}</h2>
          <button
            class="button-cart"
            onClick={() => {
              handleCheckout(val, user, setPayment);
            }}
          >
            {' '}
            Proceed to Checkout
          </button>
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
      payment: false,
    };
  }
  addProductToCart = (id) => {
    this.props.dispatch(userAddedProduct(id));
  };
  subtractProductFromCart = (id) => {
    this.props.dispatch(userSubtractedProduct(id));
  };
  removeProductFromCart = (id) => {
    this.props.dispatch(userRemovedProduct(id));
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
  setPayment = (val) => {
    this.setState({ payment: val });
  };
  componentDidMount = () => {
    this.props.dispatch(getUserProducts());
    this.setState({ inProgress: false });
  };

  render() {
    const { products } = this.props.cart;
    const { user } = this.props.authUser;
    console.log('Payment', this.state.payment);
    return (
      <div>
        <Navbar />
        <Flash />
        {!this.state.payment ? (
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
            {checkout(
              products,
              this.totalQuantity,
              this.totalPrice,
              user,
              this.setPayment
            )}
          </div>
        ) : (
          <OrderSummary products={products} setPayment={this.setPayment} />
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ cart, authUser }) => {
  return { cart, authUser };
};
export default connect(mapStateToProps)(Cart);
