import * as React from 'react';
import PropTypes from 'prop-types';
import CustomRadioItem from './CustomRadioItem';
import { Grid } from '@mui/material';

export default function CustomRadioGroup({
  options,
  value,
  onChange,
  multiselect,
}) {
  const defaultValue = value || (multiselect ? [] : '');
  const [state, setState] = React.useState(defaultValue);
  const [hasChanged, setHasChanged] = React.useState(false);

  const handleCheck = (id) => {
    if (multiselect) {
      setState((prev) => {
        const find = prev.find((item) => item === id);
        if (find) return prev.filter((item) => item !== find);
        return prev.concat(id);
      });
    } else {
      setState(id);
    }
    setHasChanged(true);
  };

  React.useEffect(() => {
    if (hasChanged && state !== value) {
      onChange(state);
    }
  }, [onChange, state, hasChanged, value]);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      gap={2}
      padding={2}
      sx={(theme) => ({
        bgcolor: theme.palette.info.main,
        borderRadius: theme.shape.borderRadiusSm,
      })}
    >
      {options.map(({
        label,
        id,
      }) => {
        const checked = multiselect ? !!state.find((item) => item === id) : state === id;
        return <CustomRadioItem
          key={id}
          checked={checked}
          onClick={() => handleCheck(id)}
        >
          {label}
        </CustomRadioItem>
      })}
    </Grid>
  );
};

CustomRadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  })),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  onChange: PropTypes.func,
  multiselect: PropTypes.bool,
};

CustomRadioGroup.defaultProps = {
  onChange: () => { },
  multiselect: false,
};
