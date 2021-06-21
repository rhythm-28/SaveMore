const ImageComponent = ({ addImage }) => {
  return (
    <span>
      <h5>Add An Image</h5>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => addImage(e)}
        multiple
      />
    </span>
  );
};
export default ImageComponent;
