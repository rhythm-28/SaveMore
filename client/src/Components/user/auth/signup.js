import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { RenderTextInput } from '../..';
import { signupValidate } from '../../../helpers/validate';
import { signup } from '../../../actions/auth';
import { connect } from 'react-redux';
import { Grid, Button, Paper, Avatar, TextField } from '@material-ui/core/';
import '../../styles.css';

const src =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzcuMzMzLDE5MmgtMzJ2LTQyLjY2N0M0MDUuMzMzLDY2Ljk5LDMzOC4zNDQsMCwyNTYsMFMxMDYuNjY3LDY2Ljk5LDEwNi42NjcsMTQ5LjMzM1YxOTJoLTMyDQoJCQlDNjguNzcxLDE5Miw2NCwxOTYuNzcxLDY0LDIwMi42Njd2MjY2LjY2N0M2NCw0OTIuODY1LDgzLjEzNSw1MTIsMTA2LjY2Nyw1MTJoMjk4LjY2N0M0MjguODY1LDUxMiw0NDgsNDkyLjg2NSw0NDgsNDY5LjMzMw0KCQkJVjIwMi42NjdDNDQ4LDE5Ni43NzEsNDQzLjIyOSwxOTIsNDM3LjMzMywxOTJ6IE0yODcuOTM4LDQxNC44MjNjMC4zMzMsMy4wMS0wLjYzNSw2LjAzMS0yLjY1Niw4LjI5Mg0KCQkJYy0yLjAyMSwyLjI2LTQuOTE3LDMuNTUyLTcuOTQ4LDMuNTUyaC00Mi42NjdjLTMuMDMxLDAtNS45MjctMS4yOTItNy45NDgtMy41NTJjLTIuMDIxLTIuMjYtMi45OS01LjI4MS0yLjY1Ni04LjI5Mmw2LjcyOS02MC41MQ0KCQkJYy0xMC45MjctNy45NDgtMTcuNDU4LTIwLjUyMS0xNy40NTgtMzQuMzEzYzAtMjMuNTMxLDE5LjEzNS00Mi42NjcsNDIuNjY3LTQyLjY2N3M0Mi42NjcsMTkuMTM1LDQyLjY2Nyw0Mi42NjcNCgkJCWMwLDEzLjc5Mi02LjUzMSwyNi4zNjUtMTcuNDU4LDM0LjMxM0wyODcuOTM4LDQxNC44MjN6IE0zNDEuMzMzLDE5MkgxNzAuNjY3di00Mi42NjdDMTcwLjY2NywxMDIuMjgxLDIwOC45NDgsNjQsMjU2LDY0DQoJCQlzODUuMzMzLDM4LjI4MSw4NS4zMzMsODUuMzMzVjE5MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';

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
    const { isLoggedIn } = this.props.authUser;
    return (
      <div>
        <div>
          {isLoggedIn && <div>Successfully Logged In</div>}
          <Grid>
            <Paper elevation={10} className="paperStyle">
              <form method="Post" onSubmit={handleSubmit(this.handleSubmit)}>
                <Grid align="center">
                  <Avatar src={src} alt="Lock-img">
                    {' '}
                  </Avatar>
                  <h1> Sign In </h1>
                </Grid>
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
                {/*<button type="submit" disabled={submitting}>
                    Submit
                  </button>*/}

                <Button
                  style={{ marginTop: '1rem' }}
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={submitting}
                  fullWidth
                >
                  Sign In
                </Button>
              </form>
            </Paper>
          </Grid>
        </div>
      </div>
    );
  }
}
const SignupForm = reduxForm({
  form: 'userSignup', // a unique identifier for this form
  validate: signupValidate,
})(Signup);
const mapStatetoProps = ({ authUser }) => {
  return { authUser };
};
export default connect(mapStatetoProps)(SignupForm);
