import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { RenderTextInput } from '..';
import { loginValidate } from '../../helpers/validate';
import { login } from '../../actions/auth';
class Login extends Component {
  constructor() {
    super();
  }
  handleSubmit = async (values) => {
    const res = await login(values);
  };
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div>
        <div>
          <form method="Post" onSubmit={handleSubmit(this.handleSubmit)}>
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

export default reduxForm({
  form: 'login', // a unique identifier for this form
  validate: loginValidate,
})(Login);
