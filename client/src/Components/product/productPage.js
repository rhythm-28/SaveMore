import React from 'react';
import axios from 'axios';

import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import { Avatar, Button } from '@material-ui/core/';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { userAddedProduct } from '../../actions/cart';
import { Navbar, Carousel, Flash } from '../';

import Styles from '../../stylesheets/productPage.css';

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
    const res = await axios.get(`/api/product/${match.params.productId}`);
    this.setState({
      product: res.data,
    });
  };
  handleClick = async () => {
    const { match } = this.props;
    this.props.dispatch(userAddedProduct(this.state.product._id));
    this.setState({ added: true });
  };
  render() {
    const { product, added } = this.state;
    const { isLoggedIn } = this.props.authUser;

    if (!product) {
      return (
        <div className="d-flex justify-content-center align-items-center loadingPage">
          <div style={{ width: 150, height: 150 }}>
            <div className="loading"> </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Navbar />
        <Flash />
        <div className="row mainDiv justify-content-center">
          <div className="col-xl-4  col-md-7 col-sm-9 col-10 leftDivStyle mt-5 mb-0 py-0">
            <div className="card card-all carousel-card">
              <div className="card-body" id="carouselProductPage">
                <Carousel images={product.images} />
                {isLoggedIn && (
                  <div className="buttons">
                    <button
                      onClick={this.handleClick}
                      disabled={added}
                      className={added ? `btn-success` : ''}
                    >
                      <i class="fas fa-shopping-cart"></i>{' '}
                      {added ? 'Added' : 'Add to Cart'}
                    </button>
                    <button>
                      {' '}
                      <i class="fas fa-shopping-cart"> </i> Buy Now
                    </button>
                  </div>
                )}
                {!isLoggedIn && (
                  <Link to="/user/auth" style={{ textDecoration: 'none' }}>
                    <div className="buttons">
                      <button>Login to buy</button>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="col-xl-7  rightDivStyle mt-0 mb-5 mt-xl-5">
            <div class="main-info mx-3">
              <div class="card card-all text-white card-title">
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
            <div class="other-info mx-3">
              <div class="card card-all text-white card-description">
                <div class="card-body">
                  <p>{' ' + product.description}</p>
                  <Link
                    to={`/product/${product._id}/edit`}
                    style={{ textDecoration: 'none' }}
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ cart, authUser }) => {
  return { cart, authUser };
};
export default connect(mapStateToProps)(productPage);
