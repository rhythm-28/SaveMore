import React, { Component } from 'react';
import {
  adminSignup,
  UserForm,
  Home,
  Products,
  ProductForm,
  productPage,
} from './';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserData, logout } from '../actions/user/auth';

class Logout extends Component {
  componentDidMount() {
    this.props.dispatch(logout());
  }

  render() {
    return <div>Successfully Logout</div>;
  }
}

class App extends Component {
  constructor() {
    super();
  }
  componentDidMount = () => {
    this.props.dispatch(fetchUserData());
  };

  render() {
    const { isLoggedIn } = this.props.authUser;
    return (
      <div className="w-100">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route
              path="/user/logout"
              render={() => <Logout dispatch={this.props.dispatch} />}
            />
            <Route path="/add/product" component={ProductForm} />
            <Route path="/user/auth" component={UserForm} />
            <Route path="/admin/signup" component={adminSignup} />
            <Route path="/productPage" component={productPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  return { authUser };
};
export default connect(mapStateToProps)(App);
