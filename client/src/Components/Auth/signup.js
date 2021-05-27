import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { RenderTextInput } from '..';
import { signupValidate } from '../../helpers/validate';
import { signup } from '../../actions/auth';
class Signup extends Component {
  constructor() {
    super();
  }
  handleSubmit = async (values) => {
    const res = await signup(values);
  };
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div>
        <div>
          <form method="Post" onSubmit={handleSubmit(this.handleSubmit)}>
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

export default reduxForm({
  form: 'signup', // a unique identifier for this form
  validate: signupValidate,
})(Signup);
