import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import ProductModal from './productModal.js';

import Styles from '../../stylesheets/adminInfoStyles.css';

function showProduct(id) {
  var modals = document.getElementsByClassName(id)[0];
  modals.style.display = 'block';
}

function hideProduct(id) {
  var modals = document.getElementsByClassName(id)[0];
  modals.style.display = 'none';
}

window.onclick = function (event) {
  var modals = document.getElementsByClassName('modals');
  [...modals].forEach(function (modal) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

function showConfirmDeleteBox(delId) {
  var deleteConfirm = document.getElementsByClassName(delId)[0];
  deleteConfirm.style.display = 'block';
}

function hideConfirmDeleteBox(delId) {
  var deleteCancel = document.getElementsByClassName(delId)[0];
  deleteCancel.style.display = 'none';
}

function ProductInfo(props) {
  var id = 'show' + props.product._id;
  var delId = 'delete' + props.product._id;
  return (
    <div className="col-md-4 col-sm-6 store-product-item">
      <img
        className="img-product-admin"
        src={
          props.product.images.length
            ? props.product.images[0].url
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png'
        }
        alt=""
        className="product-main-image"
      />
      <div className="button-tray">
        <IconButton
          onClick={function () {
            showProduct(id);
          }}
          aria-label="InfoIcon"
        >
          {' '}
          <InfoIcon />
        </IconButton>
        <Link to={`/product/${props.product._id}/edit`}>
          <IconButton aria-label="UpdateIcon">
            {' '}
            <UpdateIcon />
          </IconButton>
        </Link>
        <IconButton
          aria-label="DeleteIcon"
          // onClick={() => props.handleDelete(props.product._id)}
          onClick={() => {
            showConfirmDeleteBox(delId);
          }}
        >
          {' '}
          <DeleteIcon />
        </IconButton>
      </div>

      <div className={`modals ${id}`}>
        <div className="modals-content">
          <span
            onClick={function () {
              hideProduct(id);
            }}
            class="closes"
          >
            &times;
          </span>
          <ProductModal product={props.product} />
        </div>
      </div>

      <div className={`modals ${delId}`}>
        <div className="modals-content-delete">
          <div className="delete-item-admin">
            <h4> Do you want to delete this item? </h4>
          </div>
          <div className="delete-buttons">
            <button
              onClick={() => {
                props.handleDelete(props.product._id);
                hideConfirmDeleteBox(delId);
              }}
            >
              {' '}
              YES{' '}
            </button>
            <button
              onClick={() => {
                hideConfirmDeleteBox(delId);
              }}
            >
              {' '}
              NO{' '}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
