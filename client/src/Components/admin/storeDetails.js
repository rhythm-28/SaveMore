import React from 'react';
import { Link } from 'react-router-dom';
function StoreDetails(props) {
  const address = props.details.address;
  const length = address.length;
  return (
    <div className="store-details col-lg-5">
      <div className="store-logo-div">
        <img
          className="store-logo"
          src={
            props.details.image
              ? props.details.image.url
              : 'http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG'
          }
          alt=""
        />
      </div>

      <div style={{padding:'7%'}}>
        <div className="row">
          <label className="col-6"> Category </label>
          <p className="col-6 text-align"> {props.details.category} </p>
        </div>

        <div className="row">
          <label className="col-6"> Pin Code</label>
          <p className="col-6 text-align"> {props.details.pinCode} </p>
        </div>

        <div className="row">
          <label className="col-6"> Address</label>
          <p className="col-6 text-align"> {props.details.address} </p>
        </div>

        <div className="row">
          <label className="col-6"> City</label>
          <p className="col-6 text-align"> {props.details.city} </p>
        </div>

        <div className="row">
          <label className="col-6"> State</label>
          <p className="col-6 text-align"> {props.details.state} </p>
        </div>

        <div className="row">
          <label className="col-6"> Country</label>
          <p className="col-6 text-align"> {props.details.country} </p>
        </div>

        <div className="row">
          <label className="col-6"> GST Registration Number</label>
          <p className="col-6 text-align"> {props.details.gstIn} </p>
        </div>
        <div className="update-details-button">
          <Link to="/admin/update" style={{ textDecoration: 'none' }}>
            <button className="col-6 text-align" className="update-details-button">
              {' '}
              Update Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default StoreDetails;
