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
} from '..';
import {
  load as loadAccount,
  productFormUnmount,
  productUpdate,
} from '../../actions/product';

import '../../stylesheets/styles.css';

const src = 'https://img.icons8.com/nolan/64/left-view.png';

class ProductUpdate extends Component {
  constructor() {
    super();
    this.state = {
      product: {},
      files: {},
      deleteImages: [],
    };
  }
  handleSubmit = (values) => {
    const { dispatch, match } = this.props;
    const { files, deleteImages } = this.state;
    const fd = new FormData();
    for (let image of deleteImages) {
      fd.append('deleteImages', image);
    }
    for (let key in Object.keys(files)) {
      fd.append('image', files[key]);
    }
    for (let key in values) {
      fd.append(key, values[key]);
    }
    dispatch(productUpdate(fd, match.params.productId));
  };
  addImage = (e) => {
    this.setState({ files: e.target.files });
  };
  componentDidMount = async () => {
    const { match } = this.props;
    const res = await axios.get(`/api/product/${match.params.productId}`);
    this.props.dispatch(
      loadAccount({
        name: res.data.name,
        marketPrice: res.data.marketPrice,
        discountPrice: res.data.discountPrice,
        description: res.data.description,
      })
    );
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
  componentWillUnmount() {
    this.props.dispatch(productFormUnmount());
  }

  render() {
    const { handleSubmit, submitting, load } = this.props;
    const { product } = this.state;
    const { isProductUpdated } = this.props.product;
    if (isProductUpdated) {
      return <Redirect to="/products" />;
    }
    return (
      <div>
        <Navbar />
        <div id="addProduct" className="my-4 paperStyle">
          <Grid>
            <Paper
              elevation={10}
              style={{ borderRadius: '5%' }}
              className="paperStyle"
            >
              <form
                method="GET"
                onSubmit={handleSubmit(this.handleSubmit)}
                encType="multipart/form-data"
                style={{ height: '70%' }}
                action="/products"
                autoComplete="off"
              >
                <Grid align="center">
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
                  component={ImageComponent}
                />
                {product.images && (
                  <ImageUpdate
                    images={product.images}
                    ImageClick={this.ImageClick}
                  />
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
    );
  }
}
const ProductUpdateRedux = reduxForm({
  form: 'productUpdate', // a unique identifier for this form
  validate: productFormValidate,
})(ProductUpdate);
const mapStatetoProps = ({ product, account }) => {
  return { product, initialValues: account.data };
};
export default connect(mapStatetoProps, { load: loadAccount })(
  ProductUpdateRedux
);
