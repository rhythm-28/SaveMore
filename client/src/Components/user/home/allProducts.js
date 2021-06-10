import React from 'react';
import styles from '../../styles.css';
import Navbar from '../../commonComponents/navbar';
import Product from '../../commonComponents/product';
import data from './data';
import '../../../stylesheets/allProducts.css';
function allProducts(props) {
  return (
    <div>
      <Navbar />
      <div className="row justify-content-around">
        {data.map(function (product) {
          return (
            <Product
              src={product.src}
              title={product.title}
              info={product.info}
              price={product.price}
              discount={product.discount}
            />
          );
        })}
      </div>
    </div>
  );
}

export default allProducts;
