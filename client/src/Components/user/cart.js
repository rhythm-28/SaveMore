import React from 'react';
import data from './cartData.js';
import CartProduct from './cartProduct.js';
import styles from '../../stylesheets/cart.css';
import { Avatar, Button } from '@material-ui/core/';
import { connect } from 'react-redux';
import { getUserProducts, userAddedProduct,userSubtractedProduct ,userRemovedProduct} from '../../actions/cart.js';
import Navbar from '../commonComponents/navbar.js';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

function checkout(products){
  if(products.length != 0)
  {
    return (
      <div class="card bottom">
        <h2> Total items: {this.totalQuantity(products)}</h2>
        <h2> Total Price: {this.totalPrice(products)}</h2>
        <button class="button-cart"> Proceed to Checkout</button>
      </div>
    );
  }
}

function renderCartProduct(products){
  if(products.length != 0)
  {
    return products.map((product) => {
      return (
        <CartProduct
          product={product}
          addProductToCart={this.addProductToCart}
          subtractProductFromCart={this.subtractProductFromCart}
          removeProductFromCart={this.removeProductFromCart}
        />
      );
    })
  }
  else
  {
    return (
      <div class="cart-all-products">
        <h1> Your Cart is empty! </h1>
        <h2> Let's shop </h2>
          <a href="/products">
            Our Top Products
          </a>
      </div>
    );
  }
}

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      inProgress: true,
      totalQty:0
    };
  }
  addProductToCart = (name) => {
    this.props.dispatch(userAddedProduct(name));
  };
  subtractProductFromCart=(name)=>{
    this.props.dispatch(userSubtractedProduct(name));
  }
  removeProductFromCart=(name)=>{
    this.props.dispatch(userRemovedProduct(name));
  }
  totalQuantity=(products)=>{
  let qty = 0 ;
   products.forEach(product=>{
    qty+=product.quantity
   })
   return qty;
  }
  totalPrice=(products)=>{
    let price = 0 ;
     products.forEach(product=>{
      price+=product.quantity*product.price
     })
     return price;
    }
  componentDidMount() {
    this.props.dispatch(getUserProducts());
    this.setState({ inProgress: false });
  }


  render() {
    const { products } = this.props.cart;
    const { inProgress,totalQty } = this.state;
    if (inProgress) {
      return <h1>Loading...</h1>;
    }
    console.log("render")
    return (
      <div>
        <Navbar />
        <div class="bg-color">
          <h1 class="cart-heading"> <ShoppingCartOutlinedIcon/> </h1>
          <div class="cart-box">
            {renderCartProduct(products)}
          </div>
          {checkout(products)}
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ cart }) => {
  return { cart };
};
export default connect(mapStateToProps)(Cart);
