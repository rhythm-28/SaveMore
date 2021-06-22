import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import '../../stylesheets/productForm.css';
function ImageUpdate(props) {
  const { images, ImageClick, deleteImages } = props;
  return (
    <div className="d-flex justify-content-center">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide my-3 mx-4"
        data-bs-ride="carousel"
        style={{ width: '60%' }}
      >
        <div className="carousel-inner">
          {images.map((image, idx) => {
            return (
              <div
                className={`carousel-item text-center ${
                  idx == 0 ? 'active' : ''
                }`}
              >
                <img
                  src={image.url.replace('/upload', '/upload/w_300/h_300')}
                  alt="product"
                  class="img-thumbnail border-0"
                />
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    id={`image-${idx}`}
                    onClick={(e) => ImageClick(image.filename, e)}
                    class="d-none"
                  />
                  <label
                    class="form-check-label"
                    id="updateProductDeleteButton"
                    for={`image-${idx}`}
                  >
                    <DeleteIcon
                      color={
                        deleteImages.indexOf(image.filename) !== -1
                          ? 'secondary'
                          : 'primary'
                      }
                      fontSize="large"
                    />
                  </label>
                </div>
              </div>
            );
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default ImageUpdate;
