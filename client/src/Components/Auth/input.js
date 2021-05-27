const createRenderInput =
  (render) =>
  ({ input, meta, label, type }) => {
    return (
      <div>
        {render(input, label, type)}
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </div>
    );
  };
export default createRenderInput((input, label, type) => {
  return (
    <span>
      <label>{label}</label>
      <input {...input} type={type} />
    </span>
  );
});
