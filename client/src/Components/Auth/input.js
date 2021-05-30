import {Input,TextField} from '@material-ui/core/';

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
  const placeholder = "Enter " + label;
  return (
    <span>
      {/*<label>{label}</label>*/}
      {/*<Input {...input} type={type} />*/}
      <TextField
      {...input}
      label={label}
      type={type}
      placeholder={placeholder}
      style={{marginBottom:"1rem"}}
      fullWidth
      required
      />
    </span>
  );
});
