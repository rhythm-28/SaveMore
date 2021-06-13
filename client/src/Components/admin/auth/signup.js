import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { RenderTextInput, RenderTextSelect, Navbar } from '../..';
import { adminSignupValidate } from '../../../helpers/validate';
import { adminSignup } from '../../../actions/admin/auth';
import { connect } from 'react-redux';
import {
  Grid,
  Button,
  Paper,
  Avatar,
  TextField,
  MenuItem,
} from '@material-ui/core/';
import '../../styles.css';
import { sectors } from '../../../helpers/util';
const src =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00MzcuMzMzLDE5MmgtMzJ2LTQyLjY2N0M0MDUuMzMzLDY2Ljk5LDMzOC4zNDQsMCwyNTYsMFMxMDYuNjY3LDY2Ljk5LDEwNi42NjcsMTQ5LjMzM1YxOTJoLTMyDQoJCQlDNjguNzcxLDE5Miw2NCwxOTYuNzcxLDY0LDIwMi42Njd2MjY2LjY2N0M2NCw0OTIuODY1LDgzLjEzNSw1MTIsMTA2LjY2Nyw1MTJoMjk4LjY2N0M0MjguODY1LDUxMiw0NDgsNDkyLjg2NSw0NDgsNDY5LjMzMw0KCQkJVjIwMi42NjdDNDQ4LDE5Ni43NzEsNDQzLjIyOSwxOTIsNDM3LjMzMywxOTJ6IE0yODcuOTM4LDQxNC44MjNjMC4zMzMsMy4wMS0wLjYzNSw2LjAzMS0yLjY1Niw4LjI5Mg0KCQkJYy0yLjAyMSwyLjI2LTQuOTE3LDMuNTUyLTcuOTQ4LDMuNTUyaC00Mi42NjdjLTMuMDMxLDAtNS45MjctMS4yOTItNy45NDgtMy41NTJjLTIuMDIxLTIuMjYtMi45OS01LjI4MS0yLjY1Ni04LjI5Mmw2LjcyOS02MC41MQ0KCQkJYy0xMC45MjctNy45NDgtMTcuNDU4LTIwLjUyMS0xNy40NTgtMzQuMzEzYzAtMjMuNTMxLDE5LjEzNS00Mi42NjcsNDIuNjY3LTQyLjY2N3M0Mi42NjcsMTkuMTM1LDQyLjY2Nyw0Mi42NjcNCgkJCWMwLDEzLjc5Mi02LjUzMSwyNi4zNjUtMTcuNDU4LDM0LjMxM0wyODcuOTM4LDQxNC44MjN6IE0zNDEuMzMzLDE5MkgxNzAuNjY3di00Mi42NjdDMTcwLjY2NywxMDIuMjgxLDIwOC45NDgsNjQsMjU2LDY0DQoJCQlzODUuMzMzLDM4LjI4MSw4NS4zMzMsODUuMzMzVjE5MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==';

class AdminSignup extends Component {
  constructor() {
    super();
  }
  handleSubmit = (values) => {
    const { dispatch } = this.props;
    dispatch(adminSignup(values));
  };
  render() {
    const { handleSubmit, submitting } = this.props;
    //const { isLoggedIn } = this.props.authUser;
    return (
      <div>
        <Navbar />
        <div id="adminSignup" className="my-3">
          <div>
            {/* {isLoggedIn && <div>Successfully Logged In</div>} */}
            <Grid>
              <Paper elevation={10} className="paperStyle">
                <form
                  method="Post"
                  onSubmit={handleSubmit(this.handleSubmit)}
                  style={{ padding: '1rem' }}
                >
                  <Grid align="center">
                    <Avatar src={src} alt="Lock-img">
                      {' '}
                    </Avatar>
                    <h1> Tell Us About your Bussiness </h1>
                  </Grid>
                  <Field
                    name="storeName"
                    label="Store Name"
                    type="text"
                    component={RenderTextInput}
                  />
                  <Field
                    name="category"
                    label="Category"
                    component={RenderTextSelect}
                  >
                    {sectors.map((sector) => (
                      <MenuItem key={sector} value={sector}>
                        {sector}
                      </MenuItem>
                    ))}
                  </Field>
                  <Field
                    name="pinCode"
                    label="Pincode"
                    type="number"
                    component={RenderTextInput}
                  />
                  <Field
                    name="address"
                    label="Address"
                    type="text"
                    component={RenderTextInput}
                  />
                  <Field
                    name="city"
                    label="City"
                    type="text"
                    component={RenderTextInput}
                  />
                  <Field
                    name="state"
                    label="State"
                    type="text"
                    component={RenderTextInput}
                  />
                  <Field
                    name="country"
                    label="Country"
                    type="text"
                    component={RenderTextInput}
                  />
                  <Field
                    name="gstIn"
                    label="GST registration number"
                    type="text"
                    component={RenderTextInput}
                  />
                  {/*<button type="submit" disabled={submitting}>
                    Submit
                  </button>*/}

                  <Button
                    style={{
                      marginBottom: '1rem',
                      marginTop: '1rem',
                      color: '#23DCBB',
                    }}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={submitting}
                    fullWidth
                  >
                    Register
                  </Button>
                </form>
              </Paper>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
const AdminSignupForm = reduxForm({
  form: 'adminSignup', // a unique identifier for this form
  validate: adminSignupValidate,
})(AdminSignup);
const mapStatetoProps = ({ authAdmin }) => {
  return { authAdmin };
};
export default connect(mapStatetoProps)(AdminSignupForm);
