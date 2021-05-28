import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { RenderTextInput } from '..';
import { loginValidate } from '../../helpers/validate';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
class Login extends Component {
  constructor() {
    super();
  }
  handleSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch(login(values));
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
const LoginForm = reduxForm({
  form: 'login', // a unique identifier for this form
  validate: loginValidate,
})(Login);
const mapStatetoProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStatetoProps)(LoginForm);
