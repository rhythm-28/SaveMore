import React from 'react';
import axios from 'axios';
import Styles from '../../stylesheets/productPage.css';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { Avatar, Button } from '@material-ui/core/';
import Navbar from './navbar';
import Carousel from './Carousel';
import { connect } from 'react-redux';
import { userAddedProduct } from '../../actions/cart';

class productPage extends React.Component {
  constructor() {
    super();
    this.state = {
      product: null,
      added: false,
    };
  }
  componentDidMount = async () => {
    const { match } = this.props;
    const res = await axios.get(`/product/${match.params.productId}`);
    this.setState({
      product: res.data,
    });
  };
  handleClick = async () => {
    const { match } = this.props;

    this.props.dispatch(userAddedProduct(this.state.product.name));
    this.setState({ added: true });
    console.log(this.state);
    this.forceUpdate();
  };
  render() {
    const { product, added } = this.state;
    console.log(added);
    if (!product) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <Navbar />
        <div className="row mainDiv">
          <div className="col-4 leftDivStyle">
            <div className="card card-all carousel-card">
              <div className="card-body">
                <Carousel images={product.images} />
                <div className="buttons">
                  <button onClick={this.handleClick} disabled={added}>
                    <i class="fas fa-shopping-cart"> </i> Add to Cart
                  </button>
                  <button>
                    {' '}
                    <i class="fas fa-shopping-cart"> </i> Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-7 rightDivStyle">
            <div class="main-info">
              <div class="card card-all text-white bg-info card-title">
                <div class="card-body">
                  <h1> {product.name}</h1>
                  <div class="Price">
                    <h2>
                      {' '}
                      {100 -
                        (product.discountPrice / product.marketPrice).toFixed(
                          2
                        ) *
                          100}
                      % off
                    </h2>
                    <span className="stars">
                      <button className="ratings-button btn-sm">
                        {' '}
                        4.5 <i class="fas fa-star"></i>{' '}
                      </button>
                      <p class="ratings-and-reviews">
                        {' '}
                        {Math.floor(Math.random() * 1000) + 500} Ratings &{' '}
                        {Math.floor(Math.random() * 300) + 50} Reviews
                      </p>
                    </span>
                    <span>
                      <h3>
                        <s> ₹ {product.marketPrice}</s>{' '}
                      </h3>
                      <h4> ₹ {product.discountPrice} </h4>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="other-info">
              <div class="card card-all text-white card-description">
                <div class="card-body">
                  <p>{' ' + product.description}</p>
                </div>
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
export default connect(mapStateToProps)(productPage);
