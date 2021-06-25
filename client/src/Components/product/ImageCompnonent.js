const ImageComponent = ({ addImage, multipleImages, heading }) => {
  return (
    <span class="mb-2">
      <h5>{heading}</h5>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => addImage(e)}
        multiple={multipleImages}
      />
    </span>
  );
};
export default ImageComponent;
