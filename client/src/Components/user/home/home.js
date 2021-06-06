import React from "react";
import styles from "../../styles.css"
import Navbar from "../../commonComponents/navbar"
import Product from "../../commonComponents/product"
import data from "./data"

function Home(){
  console.log(data);
  return (
    <div>
      <Navbar />
      <div class="row">
        {data.map(function (product){
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

export default Home;
