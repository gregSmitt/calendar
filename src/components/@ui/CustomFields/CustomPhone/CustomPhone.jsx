// eslint-disable

import * as React from 'react';
import PropTypes from 'prop-types';
import { IMaskInput } from 'react-imask';
import TextField from '@mui/material/TextField';
import { THEMES } from '../CustomTextField';

function onlyNumeric(str) {
  return `${str.replace(/\D/g, '')}`;
}

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
      autoComplete="off"
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
  theme,
  required,
}) {
  const defaultErrorState = {
    error: false,
    title: '',
  };

  const [val, setVal] = React.useState(value);
  const [error, setError] = React.useState(defaultErrorState);
  const [hasChanged, setHasChanged] = React.useState(false);

  const validatePhone = (phone) => {
    const value = onlyNumeric(phone);
    if (value.length < 11) return false;
    return true;
  }

  const validate = (val) => {
    const res = validatePhone(val);

    if (required && !val) {
      setError({
        error: true,
        title: 'Обязательное поле',
      });
    } else if (required && !res) {
      setError({
        error: true,
        title: 'Неверный формат',
      });
    } else {
      setError(defaultErrorState);
    }
  }

  const handleChangeValue = (e) => {
    setVal(e.target.value);
  }

  const deboundedOnChange = () => {
    setHasChanged(true);
    if (value !== val) {
      onChange(val);
    }
  }

  React.useEffect(() => {
    setVal(value);
    if (hasChanged) {
      validate(value);
    }
  // eslint-disable-next-line
  }, [value, hasChanged])

  const sx = THEMES[theme];

  return (
    <TextField
      error={error.error}
      helperText={error.title}
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
      sx={sx}
      onBlur={deboundedOnChange}
      autoComplete="off"
    />
  );
};

CustomPhone.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['base', 'filled']).isRequired,
  required: PropTypes.bool,
};

CustomPhone.defaultProps = {
  label: '',
  value: '',
  required: false,
  onChange: () => { },
};