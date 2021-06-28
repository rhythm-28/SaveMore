import React, { Component } from 'react';
import axios from 'axios';
import { ProductUpdate } from '../';
import { productUpdateFormTriggered } from '../../actions/product';
import { connect } from 'react-redux';
class PreProductForm extends Component {
  constructor() {
    super();
    this.state = {
      renderUpdateForm: false,
    };
  }
  componentDidMount = async () => {
    const { match } = this.props;
    const res = await axios.get(`/api/product/${match.params.productId}`);
    this.props.dispatch(productUpdateFormTriggered(true, res.data));
    setTimeout(() => {
      this.setState({ renderUpdateForm: true });
    }, 500);
  };
  componentWillUnmount = () => {
    this.props.dispatch(productUpdateFormTriggered(false, {}));
  };
  componentWillUnmount = () => {};
  render() {
    const { match } = this.props;
    const { renderUpdateForm } = this.state;
    if (!renderUpdateForm) {
      return (
        <div className="d-flex justify-content-center align-items-center loadingPage">
          <div style={{ width: 150, height: 150 }}>
            <div className="loading"> </div>
          </div>
        </div>
      );
    }
    return (
      <div style={{ height: '100vh' }}>
        {renderUpdateForm && <ProductUpdate id={match.params.productId} />}
      </div>
    );
  }
}
const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps)(PreProductForm);
