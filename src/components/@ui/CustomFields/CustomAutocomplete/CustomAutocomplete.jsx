import * as React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { THEMES } from '../CustomTextField';

export default function CustomAutocomplete({
  options,
  placeholder,
  onChange,
  val,
  theme,
}) {
  const [value, setValue] = React.useState(val);
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onChange(newValue);
  }

  React.useEffect(() => {
    setValue(val);
  }, [val]);

  const sx = THEMES[theme];

  return (
    <Autocomplete
      value={value}
      onChange={handleChange}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      fullWidth
      id="controllable-states-demo"
      options={options}
      renderInput={(params) => {
        return <TextField
          {...params}
          variant="filled"
          theme={theme}
          fullWidth
          label={placeholder}
          sx={sx}
        />
      }}
    />
  );
}

CustomAutocomplete.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  val: PropTypes.any,
};

CustomAutocomplete.defaultProps = {
  placeholder: 'Выберите значение',
  onChange: () => { },
  val: '',
}