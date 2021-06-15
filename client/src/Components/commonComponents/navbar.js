import React from 'react';
import styles from '../styles.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/user/auth';
class Navbar extends React.Component {
  onClickLogout = () => {
    this.props.dispatch(logout());
  };
  render() {
    const { isAdmin, isLoggedIn } = this.props.authUser;
    return (
      <div className="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark ProductsNavbar">
          <Link class="navbar-brand" to="/">
            SaveMore
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse navbar-dark"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/products">
                  {' '}
                  Top Products <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Books
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Electronics
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Beauty
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Men's Fashion
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Beauty
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Kids
                </a>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/user/cart">
                  <ShoppingCartOutlinedIcon />
                </Link>
              </li>
            </ul>
            {!isLoggedIn && (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/user/auth" class="nav-link">
                    Register
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/user/auth" class="nav-link">
                    Login
                  </Link>
                </li>
              </ul>
            )}
            {isLoggedIn && isAdmin && (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/add/product" class="nav-link">
                    Add Product
                  </Link>
                </li>
                <li class="nav-item">
                  <Link onClick={this.onClickLogout} class="nav-link">
                    Logout
                  </Link>
                </li>
              </ul>
            )}
            {isLoggedIn && !isAdmin && (
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/admin/signup" class="nav-link">
                    Register as Admin
                  </Link>
                </li>
                <li class="nav-item">
                  <Link onClick={this.onClickLogout} class="nav-link">
                    Logout
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = ({ authUser }) => {
  return { authUser };
};
export default connect(mapStateToProps)(Navbar);
