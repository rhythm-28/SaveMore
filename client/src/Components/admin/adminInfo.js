import React from 'react';

import Navbar from '../navbar';
import ProductInfo from './productInfo.js';
import StoreDetails from './storeDetails.js';
import { Flash } from '../';

import Styles from '../../stylesheets/adminInfoStyles.css';
import { connect } from 'react-redux';
import axios from 'axios';

class adminInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      admin: null,
      products: null,
    };
  }
  handleDelete = async (id) => {
    const products = await axios.get(`/api/product/${id}/delete`);
    this.setState({ products: products.data });
  };
  componentDidMount = async () => {
    const admin = await axios.get('/api/currentAdmin');
    const products = await axios.get('/api/admin/products');
    this.setState({ admin: admin.data, products: products.data });
  };

  render() {
    const { admin, products } = this.state;

    if (!admin) {
      return <h1>Loading...</h1>;
    }

    return (
      <div>
        <Navbar />
        <Flash />
        <div className="admin-div">
          <div className="store-name">
            <img
              className="store-logo"
              src={
                admin.image
                  ? admin.image.url
                  : 'http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'
              }
              alt=""
            />
            <h1 className="store-name-h1"> {admin.storeName} </h1>
          </div>

          <div className="details-products">
            <h1 className="your-products"> Your Products </h1>
            <div className="row">
              <StoreDetails details={admin} />

              {products && (
                <div className="store-products col-lg-7">
                  <div className="row store-product">
                    {products.map((product) => {
                      return (
                        <ProductInfo
                          product={product}
                          handleDelete={this.handleDelete}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ authAdmin }) => {
  return { authAdmin };
};
export default connect(mapStateToProps)(adminInfo);
