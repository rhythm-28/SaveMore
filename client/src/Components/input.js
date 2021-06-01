import { Input, TextField, Fab } from '@material-ui/core/';

const createRenderInput =
  (render) =>
  ({ input, meta, label, type }) => {
    return (
      <div>
        {meta.error && meta.touched
          ? render(input, label, type, { error: true, id: 'standard-error' })
          : render(input, label, type)}
      </div>
    );
  };

export default createRenderInput((input, label, type, error = {}) => {
  const placeholder = 'Enter ' + label;
  return (
    <span>
      {/*<label>{label}</label>*/}
      {/*<Input {...input} type={type} />*/}
      <TextField
        {...error}
        {...input}
        label={label}
        type={type}
        placeholder={placeholder}
        style={{
          marginBottom: '1rem',
        }}
        fullWidth
      />
    </span>
  );
});
