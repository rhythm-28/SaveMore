import { Input, TextField, Fab } from '@material-ui/core/';
import { AlertTitle } from '@material-ui/lab';
const createRenderInput =
  (render) =>
  ({ input, meta, label, type }) => {
    return (
      <div>
        {render(input, label, type)}
        {meta.error && meta.touched && (
          <AlertTitle severity="error" color="error" style={{ marginTop: 0 }}>
            Required
          </AlertTitle>
        )}
      </div>
    );
  };

export default createRenderInput((input, label, type) => {
  const placeholder = 'Enter ' + label;
  return (
    <span>
      {/*<label>{label}</label>*/}
      {/*<Input {...input} type={type} />*/}
      <TextField
        {...input}
        label={label}
        type={type}
        placeholder={placeholder}
        style={{
          marginBottom: '1rem',
        }}
        fullWidth
        required
      />
    </span>
  );
});
