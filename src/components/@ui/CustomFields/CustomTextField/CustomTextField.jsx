import * as React from 'react';
import PropTypes from 'prop-types';

import { IconButton, InputAdornment, TextField } from '@mui/material';

export const THEMES = {
  base: {},
  filled: {
    '& .MuiFilledInput-root': {
      backgroundColor: 'background.paper',
      '&:hover': {
        backgroundColor: 'background.paper',
      },
      '&.Mui-focused': {
        backgroundColor: 'background.paper',
      },
    },
  },
};

export default function CustomTextField({
  label,
  value,
  onChange,
  theme,
  required,
  onClick,
  autoComplete,
  multiline,
  icon,
  type,
}) {
  const [val, setVal] = React.useState(value);
  const [hasChanged, setHasChanged] = React.useState(false);

  const handleChangeValue = (e) => {
    setVal(e.currentTarget.value);
  }

  const defaultErrorState = {
    error: false,
    title: '',
  };

  const [error, setError] = React.useState(defaultErrorState);

  const validateEmail = (mail) => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return (true);
    }
    return (false);
  }

  const validate = (val) => {
    if (type === "email") {
      const res = validateEmail(val);

      console.log({ res });
      if (!res) {
        return setError({
          error: true,
          title: 'Некорректный email',
        });
      } else {
        return setError(defaultErrorState);
      }
    }

    if (required && !val) {
      setError({
        error: true,
        title: 'Обязательное поле',
      });
    } else {
      setError(defaultErrorState);
    }
  }

  const deboundedOnChange = () => {
    setHasChanged(true);
    if (value !== val) {
      onChange(val);
    }

    validate(val);
  }

  React.useEffect(() => {
    setVal(value);
    if (hasChanged) {
      validate(value);
    }
  // eslint-disable-next-line
  }, [value, hasChanged]);

  // React.useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //   }, 1000)

  //   return () => clearTimeout(delayDebounceFn)
  // }, [val])

  const sx = THEMES[theme];

  return (
    <TextField
      error={error.error}
      helperText={error.title}
      required={required}
      fullWidth
      label={label}
      variant="filled"
      value={val}
      onChange={handleChangeValue}
      sx={sx}
      type={type}
      onBlur={deboundedOnChange}
      onClick={onClick}
      autoComplete={autoComplete ? 'on' : 'off'}
      multiline={multiline}
      rows={multiline ? 3 : 1}
      InputProps={{
        endAdornment: icon ? (
          <InputAdornment position="end">
            <IconButton
              aria-label="calendar"
              edge="end"
            >
              {icon}
            </IconButton>
          </InputAdornment>
        ) : null
      }}
    />
  );
};

CustomTextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  theme: PropTypes.oneOf(['base', 'filled']).isRequired,
  required: PropTypes.bool,
  onClick: PropTypes.func,
  autoComplete: PropTypes.bool,
  multiline: PropTypes.bool,
  icon: PropTypes.element,
};

CustomTextField.defaultProps = {
  label: '',
  value: '',
  required: false,
  autoComplete: false,
  multiline: false,
  onChange: () => { },
  onClick: () => { },
  icon: null,
};