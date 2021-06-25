import React from 'react';

import AdminCarousel from "./adminCarousel.js";
import Carousel from "../product/Carousel.js";

function ProductModal(props){
    const description = props.product.description;
    const length = description.length;
    return (
        <div className="row product-modal-main-div">
            <h1 className="admin-product-name"> {props.product.name}</h1>
            <div className="col-7 modal-img-div">
                {/* <AdminCarousel images={props.product.images}/> */}
                <Carousel images={props.product.images}/>
            </div>
            <div className="col-5 modal-info-div">
                <div className="row">
                    <label className="col-6"> Market Price</label>
                    <p className="col-6"> {props.product.marketPrice} </p>
                </div>
                <div className="row">
                    <label className="col-6"> DiscountPrice</label>
                    <p className="col-6"> {props.product.discountPrice} </p>
                </div>
                <div className="row">
                    <label className="col-6"> About the Product</label>
                    <div className="col-6">
                        <p> {description.substring(0,length/2)} </p>
                        <p> {description.substring(length/2,length)} </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductModal; 