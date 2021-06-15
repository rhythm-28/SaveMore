import React from 'react';
import styles from '../../stylesheets/cart.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { connect } from 'react-redux';

class CartProduct extends React.Component {
  render() {
    const { product, addProductToCart ,subtractProductFromCart,removeProductFromCart} = this.props;
    return (
      <div>
        <div class="row productDiv card-all">
          <div class="col-3">
            <div class="img-div">
              <img src={product.image} alt={product.name} class="cart-img" />
            </div>
          </div>
          <div class="col-9 all-info">
            <div class="product-cart">
              <div class="main-info">
                <h3> {product.name}</h3>
                <h2> Final Price: {product.price} </h2>
              </div>
              <div class="quantity">
                <h2> Quantity: {product.quantity}</h2>
                <Button onClick={() => addProductToCart(product.name)}>
                  {' '}
                  <AddCircleIcon size="medium" />{' '}
                </Button>
                <Button onClick={()=>subtractProductFromCart(product.name)}>
                  {' '}
                  <RemoveCircleIcon size="medium" />{' '}
                </Button>
                <Button size="large" onClick={()=>removeProductFromCart(product.name)}>
                  {' '}
                  <DeleteIcon />{' '}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ cart }) => {
  return { cart };
};
export default connect(mapStateToProps)(CartProduct);
