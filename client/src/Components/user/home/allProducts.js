import axios from 'axios';
import React from 'react';
import styles from '../../styles.css';
import Navbar from '../../commonComponents/navbar';
import Product from '../../commonComponents/product';
import '../../../stylesheets/allProducts.css';
import { Link } from 'react-router-dom';
import data from './data';
class allProducts extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount = async () => {
    const res = await axios.get('/products');
    this.setState({ data: res.data });
  };
  render() {
    if (data.length == 0) {
      return <h1>Loading...</h1>;
    }
    return (
      <div>
        <Navbar />
        <div className="row justify-content-around mt-3" id="allProducts">
          {this.state.data.map(function (product) {
            return (
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: 'none' }}
                className="col-lg-3 mb-5 d-grid"
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
