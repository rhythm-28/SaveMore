import {
  Input,
  TextField,
  Fab,
  Select,
  InputLabel,
  FormControl,
} from '@material-ui/core/';

const createRenderInput =
  (render) =>
  ({ input, meta, label, ...rest }) => {
    return (
      <div>
        {meta.error && meta.touched
          ? render(input, label, rest, {
              error: true,
              id: 'standard-error',
            })
          : render(input, label, rest)}
      </div>
    );
  };

export const RenderTextInput = createRenderInput(
  (input, label, { type }, error = {}) => {
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
  }
);
export const RenderTextSelect = createRenderInput(
  (input, label, { children }, error) => {
    return (
      <div>
        <FormControl
          style={{ minWidth: '100%', marginBottom: '1rem' }}
          {...error}
        >
          <InputLabel id="demo-simple-select-label">{label}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            {...input}
          >
            {children}
          </Select>
        </FormControl>
      </div>
    );
  }
);
