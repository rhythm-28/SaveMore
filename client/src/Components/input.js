import {
  Input,
  TextField,
  Fab,
  Select,
  InputLabel,
  FormControl,
  TextareaAutosize,
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
          : render(input, label, rest, { error: false })}
      </div>
    );
  };

export const RenderTextInput = createRenderInput(
  (input, label, { type, Value }, error = {}) => {
    const placeholder = 'Enter ' + label;

    return (
      <span>
        {/* <label>{label}</label>
        <Input {...input} type={type} value={Value} /> */}
        <TextField
          {...error}
          {...input}
          label={label}
          type={type}
          inputProps={{ value: Value }}
          placeholder={label}
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
export const RenderTextArea = createRenderInput(
  (input, label, { Value }, { error }) => {
    return (
      <FormControl
        style={{ minWidth: '100%', marginBottom: '1rem' }}
        className="mt-3"
      >
        <TextareaAutosize
          rowsMin="5"
          rowsMax="8"
          placeholder={`Enter ${label}`}
          label={label}
          {...input}
          value={Value}
          className={error ? `border border-danger border-2` : ``}
        />
      </FormControl>
    );
  }
);
