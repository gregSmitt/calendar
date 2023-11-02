import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';

export default function CustomCard({
  children,
  padding,
  margin,
  width,
  variant,
}) {
  const sx = (theme) => ({
    base: {
      padding: '40px',
      [theme.breakpoints.down('sm')]: {
        padding: '24px',
      },
    },
    filled: {
      bgcolor: 'info.main',
      padding: '40px',
      [theme.breakpoints.down('sm')]: {
        padding: '24px',
      },
    },
  });

  return (
    <Paper
      elevation={0}
      style={{
        padding,
        width,
        margin,
      }}
      sx={(theme) => sx(theme)[variant]}
    >
      {children}
    </Paper>
  );
}

CustomCard.propTypes = {
  children: PropTypes.any.isRequired,
  padding: PropTypes.number,
  margin: PropTypes.any,
  width: PropTypes.any,
  variant: PropTypes.oneOf(['base', 'filled']),
};

CustomCard.defaultProps = {
  // padding: 48,
  width: '100%',
  margin: 0,
  variant: 'base',
};