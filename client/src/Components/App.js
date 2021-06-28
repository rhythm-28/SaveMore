import React, { Component } from 'react';
import axios from 'axios';
import {
  adminSignup,
  UserForm,
  Home,
  Products,
  ProductForm,
  productPage,
  Cart,
  ProductUpdate,
  AdminUpdate,
  AdminInfo,
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
import { getAdmin } from '../actions/admin';
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
        ) : isLoggedIn && !isAdmin ? (
          <Redirect to={{ pathname: '/admin/signup', state: { from: path } }} />
        ) : (
          <Redirect to={{ pathname: '/user/auth', state: { from: path } }} />
        );
      }}
    />
  );
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      adminData: {},
    };
  }
  componentDidUpdate = async (prevProps, prevState) => {
    const { admin } = this.props.authAdmin;
    const adminData = this.state.adminData;
    const { isAdmin } = this.props.authUser;

    for (let key in adminData) {
      if (key !== '_id' && key !== '__v' && adminData[key] != admin[key]) {
        this.props.dispatch(getAdmin(admin));
        this.setState({ adminData: admin });
      }
    }
    if (isAdmin && !adminData) {
      const res = await axios.get('/api/currentAdmin');
      this.props.dispatch(getAdmin(res.data));
      this.setState({ adminData: res.data });
    }
  };
  componentDidMount = async () => {
    this.props.dispatch(fetchUserData());
    const admin = await axios.get('/api/currentAdmin');
    this.props.dispatch(getAdmin(admin.data));
    this.setState({ adminData: admin.data });
  };

  render() {
    const { isLoggedIn, isAdmin } = this.props.authUser;
    return (
      <div className="w-100 mainAppDiv">
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
            <AdminRoute
              path="/admin/update"
              isLoggedIn={isLoggedIn}
              isAdmin={isAdmin}
              Component={AdminUpdate}
            />
            <AdminRoute
              path="/admin/info"
              Component={AdminInfo}
              isLoggedIn={isLoggedIn}
              isAdmin={isAdmin}
            />
            <Route path="/user/auth" component={UserForm} />
            <PrivateRoute
              path="/admin/signup"
              Component={adminSignup}
              isLoggedIn={isLoggedIn}
            />
            <AdminRoute
              exact
              path="/product/:productId/edit"
              Component={ProductUpdate}
              isLoggedIn={isLoggedIn}
              isAdmin={isAdmin}
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
const mapStateToProps = ({ authUser, authAdmin }) => {
  return { authUser, authAdmin };
};
export default connect(mapStateToProps)(App);
