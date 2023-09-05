import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import TextField from '@mui/material/TextField';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7 (#00) 000 0000"
      definitions={{
        '#': /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function CustomPhone({
  label,
  value,
  onChange,
  required,
}) {
  const [val, setVal] = React.useState(value);

  const handleChangeValue = (e) => {
    console.log({ e });
    setVal(e.target.value);
    onChange(e.target.value);
  }

  return (
    <TextField
      fullWidth
      label={label}
      value={val}
      required={required}
      onChange={handleChangeValue}
      name="numberformat"
      id="formatted-numberformat-input"
      InputProps={{
        inputComponent: TextMaskCustom,
      }}
      variant="filled"
    />
  );
};

CustomPhone.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  required: PropTypes.bool,
};

CustomPhone.defaultProps = {
  label: '',
  value: '',
  required: false,
  onChange: () => { },
};