import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Typography } from '@mui/material';

const CustomPageHeader = ({
  title,
  subtitle,
}) => {
  return (
    <Grid
      container
      direction="column"
      gap={2}
      alignItems="center"
      textAlign="center"
      margin="48px 0 48px 0"
    >
      <Typography variant="h1">{title}</Typography>
      <Typography maxWidth="497px" variant="subtitle1">{subtitle}</Typography>
    </Grid>
  )
};

CustomPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

CustomPageHeader.defaultProps = {
  subtitle: '',
};

export default CustomPageHeader;