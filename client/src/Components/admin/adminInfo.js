import React from 'react';

import Navbar from '../navbar';
import ProductInfo from "./productInfo.js";
import StoreDetails from "./storeDetails.js";

import {details,products} from "./data.js";
import Styles from '../../stylesheets/adminInfoStyles.css';

function adminInfo(){
    return (
        <div>
            <Navbar />
            <div className="admin-div">
                <div className="store-name">
                    <img className="store-logo" src={details.storeImage} alt="" />
                    <h1 className="store-name-h1"> {details.storeName} </h1>
                </div>

                <div className="details-products">
                    <h1 className="your-products"> Your Products </h1>
                    <div className="row">
                        <StoreDetails details={details}/>

                        <div className="store-products col-lg-7">
                            <div className="row store-product">
                                {products.map(function(product){
                                    return (
                                        <ProductInfo product={product}/>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default adminInfo; 