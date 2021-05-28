import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { RenderTextInput } from '..';
import { signupValidate } from '../../helpers/validate';
import { signup } from '../../actions/auth';
import { connect } from 'react-redux';
class Signup extends Component {
  constructor() {
    super();
  }
  handleSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch(signup(values));
  };
  render() {
    const { handleSubmit, submitting } = this.props;
    const { isLoggedIn } = this.props.auth;
    return (
      <div>
        <div>
          {isLoggedIn && <div>Successfully Logged In</div>}
          <form method="Post" onSubmit={handleSubmit(this.handleSubmit)}>
            <Field
              name="username"
              label="Username"
              type="text"
              component={RenderTextInput}
            />
            <Field
              name="firstName"
              label="FirstName"
              type="text"
              component={RenderTextInput}
            />
            <Field
              name="lastName"
              label="LastName"
              type="text"
              component={RenderTextInput}
            />
            <Field
              name="email"
              label="Email"
              type="email"
              component={RenderTextInput}
            />
            <Field
              name="password"
              label="Password"
              type="password"
              component={RenderTextInput}
            />
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const SignupForm = reduxForm({
  form: 'signup', // a unique identifier for this form
  validate: signupValidate,
})(Signup);
const mapStatetoProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStatetoProps)(SignupForm);
