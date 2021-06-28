import React, { Component } from 'react';
import axios from 'axios';
import { Field, reduxForm } from 'redux-form';
import { productFormValidate } from '../../helpers/validate';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  Grid,
  Button,
  Paper,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
} from '@material-ui/core/';

import {
  RenderTextInput,
  RenderTextArea,
  Navbar,
  ImageComponent,
  ImageUpdate,
  Flash,
} from '..';
import {
  getProductData,
  productFormUnmount,
  productUpdate,
  productUpdateFormTriggered,
} from '../../actions/product';

import '../../stylesheets/styles.css';
import { objForm } from '../../helpers/util';
const src = 'https://img.icons8.com/nolan/64/left-view.png';

class ProductUpdate extends Component {
  constructor() {
    super();
    this.state = {
      product: null,
      files: {},
      deleteImages: [],
    };
  }
  handleSubmit = (values) => {
    const { dispatch, match } = this.props;
    const { files, deleteImages, product } = this.state;
    const fd = new FormData();
    for (let image of deleteImages) {
      fd.append('deleteImages', image);
    }
    for (let key in Object.keys(files)) {
      fd.append('image', files[key]);
    }
    for (let key in product) {
      if (key !== '_id' && key !== 'images' && key !== '__v') {
        fd.append(key, product[key]);
      }
    }

    dispatch(productUpdate(fd, match.params.productId));
  };
  addImage = (e) => {
    this.setState({ files: e.target.files });
  };
  componentDidMount = async () => {
    const { id } = this.props;
    const res = await axios.get(`/api/product/${id}`);
    this.setState({
      product: res.data,
    });
  };
  handleChange = (event, newValue, previousValue, name) => {
    const { product } = this.state;
    product[name] = newValue;
    this.setState({ product });
  };
  ImageClick = (filename, e) => {
    let deleteImages = [];
    if (e.target.checked) {
      deleteImages = [...this.state.deleteImages, filename];
    } else {
      deleteImages = this.state.deleteImages.filter((file) => filename != file);
    }
    this.setState({ deleteImages });
  };

  render() {
    const { handleSubmit, submitting, load } = this.props;
    const { product, deleteImages } = this.state;
    const { isProductUpdated, data } = this.props.product;
    if (isProductUpdated) {
      return <Redirect to="/admin/info" />;
    }
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
        <div className="my-4 paperStyle row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-md-7 col-sm-8 col-10">
            <Grid>
              <Paper elevation={10} style={{ borderRadius: '5%' }}>
                <form
                  method="GET"
                  onSubmit={handleSubmit(this.handleSubmit)}
                  encType="multipart/form-data"
                  action="/products"
                  autoComplete="off"
                  className="px-3"
                >
                  <Grid align="center" className="py-3 my-3">
                    <Avatar src={src} alt="Lock-img">
                      {' '}
                    </Avatar>
                    <h1>Update Product</h1>
                  </Grid>

                  <Field
                    name="name"
                    label="Product Name"
                    type="text"
                    onChange={this.handleChange}
                    Value={product.name}
                    value={product.name}
                    component={RenderTextInput}
                  />
                  <Field
                    name="marketPrice"
                    label="Market Price"
                    type="number"
                    onChange={this.handleChange}
                    Value={product.marketPrice}
                    value={product.marketPrice}
                    component={RenderTextInput}
                  />
                  <Field
                    name="discountPrice"
                    label="Discount Price"
                    type="number"
                    onChange={this.handleChange}
                    Value={product.discountPrice}
                    value={product.discountPrice}
                    component={RenderTextInput}
                  />
                  <label
                    for="exampleFormControlInput1"
                    class="form-label mb-0 pb-0 text-dark fw-bold"
                  >
                    Product Description
                  </label>
                  <Field
                    name="description"
                    label="Product Description"
                    onChange={this.handleChange}
                    Value={product.description}
                    value={product.description}
                    component={RenderTextArea}
                  />
                  <Field
                    name="image"
                    type="file"
                    addImage={this.addImage}
                    multipleImages={true}
                    heading="Add Images"
                    component={ImageComponent}
                  />
                  {product.images && product.images.length ? (
                    <ImageUpdate
                      images={product.images}
                      deleteImages={deleteImages}
                      ImageClick={this.ImageClick}
                    />
                  ) : (
                    ''
                  )}
                  <Grid align="center">
                    <button
                      style={{
                        marginBottom: '1rem',
                        marginTop: '1rem',
                      }}
                      type="submit"
                      disabled={submitting}
                    >
                      Update Product
                    </button>
                  </Grid>
                </form>
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
const ProductUpdateRedux = reduxForm({
  form: 'productUpdate', // a unique identifier for this form
  validate: productFormValidate,
  initialValues: {},
})(ProductUpdate);
const mapStatetoProps = ({ product, account }) => {
  return { product, initialValues: product.data };
};
export default connect(mapStatetoProps)(ProductUpdateRedux);
