import React from 'react';
import styles from '../../styles.css';
import Navbar from '../../commonComponents/navbar';
import Product from '../../commonComponents/product';
import data from './data';
import '../../../stylesheets/home.css';
function Home() {

  function add(){
    const container = document.getElementById('container');
    container.classList.add("right-panel-active");
  }

  return (
    <div
      className="d-flex flex-column h-100 w-100 justify-content-between vh-100"
      id="HomePage"
    >
      <header className="mx-5">
        <div>
          <h3 className="float-md-start text-white">SaveMore</h3>
          <nav className="nav justify-content-center float-md-end HomeNavbar">
            <a href="/" className="nav-link active">
              Home
            </a>
            <a href="/products" className="nav-link">
              Products
            </a>

            <a href="/user/auth" className="nav-link">
              Register
            </a>
            <a role="button" href="/user/auth" className="nav-link">
              Login
            </a>

            <a href="/Logout" className="nav-link">
              Logout
            </a>
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

        <a href="/products" className="btn btn-secondary fw-bold text-white">
          Jump In
        </a>
      </div>
      <footer>
        <p className="lead text-muted">&copy; SaveMore</p>
      </footer>
    </div>
  );
}

export default Home;
