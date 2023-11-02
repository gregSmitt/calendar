import * as React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function CustomSwitch({
  required,
  disabled,
  label,
  value,
  onChange,
}) {
  const [val, setVal] = React.useState(value);

  const handleChangeValue = (e) => {
    setVal(e.target.checked);
    onChange(e.target.checked);
  }

  return (
    <FormGroup>
      <FormControlLabel
        required={required}
        disabled={disabled}
        label={label}
        control={(
          <Switch
            checked={val}
            onChange={handleChangeValue}
            inputProps={{ 'aria-label': 'controlled' }}
          />
        )}
      />
    </FormGroup>
  );
};

CustomSwitch.propTypes = {
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

CustomSwitch.defaultProps = {
  required: false,
  disabled: false,
  label: '',
  value: false,
  onChange: () => {},
};
