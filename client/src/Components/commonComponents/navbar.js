import React from 'react';
import styles from '../styles.css';

function Navbar() {
  return (
    <div className="sticky-top">
      <nav class="navbar navbar-expand-lg navbar-dark ProductsNavbar">
        <a class="navbar-brand" href="/">
          SaveMore
        </a>
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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                {' '}
                Top Products <span class="sr-only">(current)</span>
              </a>
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
                Kids
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Furniture
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More Categories
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Men's Fashion
                </a>
                <a class="dropdown-item" href="#">
                  Women's Fashion
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search for products"
              aria-label="Search"
            />
            <button
              class="btn btn-outline-success my-2 my-sm-0 search"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
