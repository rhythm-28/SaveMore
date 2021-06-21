import React from 'react';

function ImageUpdate(props) {
  const { images, ImageClick } = props;
  return (
    <div className="mt-3">
      {images.map((image, idx) => {
        return (
          <div>
            <img
              src={image.url.replace('/upload', '/upload/w_300/h_200')}
              alt=""
              class="img-thumbnail"
            />
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id={`image-${idx}`}
                onClick={(e) => ImageClick(image.filename, e)}
              />
              <label class="form-check-label" for={`image-${idx}`}>
                Delete ?
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImageUpdate;
