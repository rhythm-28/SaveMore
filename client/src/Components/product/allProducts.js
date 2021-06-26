import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Product, Flash } from '../';

import styles from '../../stylesheets/styles.css';
import '../../stylesheets/allProducts.css';

class allProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount = async () => {
    const res = await axios.get('/api/products');
    this.setState({ data: res.data });
  };
  render() {
    const { data } = this.state;
    if (data.length == 0) {
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
        <div
          className="row justify-content-around mt-3 d-flex"
          id="allProducts"
        >
          {data.map(function (product) {
            return (
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: 'none' }}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-6 mb-5 d-grid float-start"
              >
                <Product product={product} key={product._id} />
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default allProducts;
