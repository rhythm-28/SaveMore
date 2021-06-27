import React, { Component } from 'react';
import { connect } from 'react-redux';
import { errorMessageFlash, successMessageFlash } from '../actions/flash';
class Flash extends Component {
  constructor() {
    super();
    this.state = {
      success: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      const { userMessage } = this.props.authUser;
      const { adminMessage } = this.props.authAdmin;
      const { productMessage } = this.props.product;
      const success = userMessage || adminMessage || productMessage;
      if (success) {
        this.setState({ success: true });
      } else this.setState({ success: false });
    }, 50);
  }
  componentWillUnmount() {
    const { dispatch } = this.props;
    const { userMessage } = this.props.authUser;
    const { productMessage } = this.props.product;
    if (
      this.state.success ||
      productMessage === 'Product deleted successfully' ||
      userMessage === 'Thanks For Visiting'
    ) {
      dispatch(successMessageFlash());
    }
    dispatch(errorMessageFlash());
    this.setState({ success: false });
  }
  render() {
    const { err: userError, userMessage } = this.props.authUser;
    const { err: adminError, adminMessage } = this.props.authAdmin;
    const { err: productError, productMessage } = this.props.product;
    const error = userError || adminError || productError;
    const success = userMessage || adminMessage || productMessage;
    return (
      <div className="mt-4 mb-0" style={{ width: '50%', margin: 'auto' }}>
        {error && (
          <div
            class="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            {error}
            {/* <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button> */}
          </div>
        )}
        {success && (
          <div
            class="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            {success}
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = ({ authUser, authAdmin, product }) => {
  return { authUser, authAdmin, product };
};
export default connect(mapStateToProps)(Flash);
