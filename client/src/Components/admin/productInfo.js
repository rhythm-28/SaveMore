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
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
};

function ProductInfo(props) {
  var id = 'a' + props.product._id;
  return (
    <div className="col-md-4 col-sm-6 store-product-item">
      <img
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
        <IconButton aria-label="DeleteIcon">
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
    </div>
  );
}

export default ProductInfo;
