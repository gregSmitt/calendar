import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, IconButton, Typography } from '@mui/material';

const CustomRadioItem = ({
  checked,
  id,
  onClick,
  children,
}) => {
  const handleClick = () => {
    onClick(id);
  }
  return (
    <IconButton size="small" sx={{ padding: 0 }} onClick={handleClick}>
      <Avatar
        sx={(theme) => ({
          bgcolor: checked ? theme.palette.primary.main : theme.palette.info.light,
          width: 48,
          height: 48,
          transition: 'all 0.4s ease'
        })}
      >
        <Typography
          variant="h3"
          style={{ width: 24, height: 24 }}
          color={checked ? 'default' : 'ActiveBorder'}
        >
          {children}
        </Typography>
      </Avatar>
    </IconButton>

  )
};

export default CustomRadioItem;

CustomRadioItem.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.any.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};
