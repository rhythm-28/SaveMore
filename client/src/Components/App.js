import React, { Component } from 'react';
import {
  adminSignup,
  UserForm,
  Home,
  Products,
  ProductForm,
  productPage,
  Cart,
  ProductUpdate,
} from './';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  HashRouter,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserData, logout } from '../actions/user';

function PrivateRoute(props) {
  const { isLoggedIn, path, Component } = props;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/user/auth', state: { from: path } }} />
        );
      }}
    />
  );
}
function AdminRoute(props) {
  const { isLoggedIn, isAdmin, path, Component } = props;
  return (
    <Route
      path={path}
      render={(props) => {
        return isLoggedIn && isAdmin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/user/auth', state: { from: props.location } }}
          />
        );
      }}
    />
  );
}
class App extends Component {
  constructor() {
    super();
  }
  componentDidMount = () => {
    this.props.dispatch(fetchUserData());
  };

  render() {
    const { isLoggedIn, isAdmin } = this.props.authUser;
    return (
      <div className="w-100">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <AdminRoute
              path="/add/product"
              Component={ProductForm}
              isLoggedIn={isLoggedIn}
              isAdmin={isAdmin}
            />
            <Route path="/user/auth" component={UserForm} />
            <PrivateRoute
              path="/admin/signup"
              Component={adminSignup}
              isLoggedIn={isLoggedIn}
            />
            <PrivateRoute
              exact
              path="/product/:productId/edit"
              Component={ProductUpdate}
              isLoggedIn={isLoggedIn}
            />
            <Route exact path="/product/:productId" component={productPage} />
            <PrivateRoute
              path="/user/cart"
              Component={Cart}
              isLoggedIn={isLoggedIn}
            />
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
