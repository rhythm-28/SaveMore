import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar, Product } from '.';
// import data from './data';
import { logout } from '../actions/user';

import '../stylesheets/home.css';
import '../stylesheets/styles.css';

class Home extends React.Component {
  onClickLogout = () => {
    this.props.dispatch(logout());
  };
  render() {
    const { isAdmin, isLoggedIn } = this.props.authUser;
    return (
      <div
        className="d-flex flex-column h-100 w-100 justify-content-between vh-100"
        id="HomePage"
      >
        <header className="mx-5">
          <div>
            <h3 className="float-md-start text-white">SaveMore</h3>
            <nav className="nav justify-content-center float-md-end HomeNavbar">
              <Link to="/" className="nav-link active">
                Home
              </Link>
              <Link to="/products" className="nav-link">
                Products
              </Link>
              {!isLoggedIn && (
                <Link to="/user/auth" class="nav-link">
                  Register
                </Link>
              )}
              {!isLoggedIn && (
                <Link to="/user/auth" class="nav-link">
                  Login
                </Link>
              )}
              {isLoggedIn && !isAdmin && (
                <Link to="/admin/signup" class="nav-link">
                  Register as Admin
                </Link>
              )}

              {isLoggedIn && isAdmin && (
                <Link to="/add/product" class="nav-link">
                  Add Product
                </Link>
              )}
              {isLoggedIn && (
                <Link onClick={this.onClickLogout} class="nav-link">
                  Logout
                </Link>
              )}
            </nav>
          </div>
        </header>
        <div>
          <h2 className="text-white">SaveMore</h2>
          <p className="fw-normal text-light">
            Welcome to SaveMore <br />
            Fashion &amp; Clothing is the one makes <br /> you look awesome and
            unique from others!
          </p>

          <Link to="/products" className="btn btn-secondary fw-bold text-white">
            Jump In
          </Link>
        </div>
        <footer>
          <p className="lead text-muted">&copy; SaveMore</p>
        </footer>
      </div>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  return { authUser };
};
export default connect(mapStateToProps)(Home);
