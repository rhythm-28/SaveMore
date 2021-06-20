import React, { Component } from 'react';
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

import { RenderTextInput, RenderTextArea, Navbar } from '..';
import { productAdd, productFormUnmount } from '../../actions/product';

import '../../stylesheets/styles.css';

const src = 'https://img.icons8.com/nolan/64/left-view.png';
const ImageComponent = ({ addImage }) => {
  return (
    <span>
      <h5>Add An Image</h5>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => addImage(e)}
        multiple
      />
    </span>
  );
};

class ProductForm extends Component {
  constructor() {
    super();
    this.state = {
      file: {},
    };
  }
  onImageChange = (e) => {
    console.log('image', e.target.files);
    this.setState({ file: e.target.files });
  };
  handleSubmit = async (values) => {
    const { dispatch } = this.props;
    var formData = new FormData();
    for (const key of Object.keys(this.state.file)) {
      formData.append('image', this.state.file[key]);
    }
    for (let key in values) {
      formData.append(key, values[key]);
    }

    dispatch(productAdd(formData));
  };
  componentWillUnmount = () => {
    this.props.dispatch(productFormUnmount());
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    const { isProductAdded } = this.props.product;
    if (isProductAdded) {
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
                className="formStyle"
                encType="multipart/form-data"
                style={{ height: '70%' }}
                action="/products"
              >
                <Grid align="center">
                  <Avatar src={src} alt="Lock-img">
                    {' '}
                  </Avatar>
                  <h1>Add Product</h1>
                </Grid>

                <Field
                  name="name"
                  label="Product Name"
                  type="text"
                  component={RenderTextInput}
                />
                <Field
                  name="marketPrice"
                  label="Market Price"
                  type="number"
                  component={RenderTextInput}
                />
                <Field
                  name="discountPrice"
                  label="Discount Price"
                  type="number"
                  component={RenderTextInput}
                />
                <Field
                  name="description"
                  label="Product Description"
                  component={RenderTextArea}
                />
                <Field
                  name="image"
                  type="file"
                  addImage={this.onImageChange}
                  component={ImageComponent}
                />

                <Grid align="center">
                  <button
                    style={{
                      marginBottom: '1rem',
                      marginTop: '1rem',
                    }}
                    type="submit"
                    disabled={submitting}
                  >
                    Add Product
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
const ProductFormRedux = reduxForm({
  form: 'productForm', // a unique identifier for this form
  validate: productFormValidate,
})(ProductForm);
const mapStatetoProps = ({ product }) => {
  return { product };
};
export default connect(mapStatetoProps)(ProductFormRedux);
