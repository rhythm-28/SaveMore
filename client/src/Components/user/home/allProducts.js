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
      <div className="row justify-content-around mt-3" id="allProducts">
        {data.map(function (product) {
          return (
            <Product
              src={product.src}
              title={product.title}
              info={product.info}
              price={product.price}
              discount={product.discount}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
}

export default allProducts;
