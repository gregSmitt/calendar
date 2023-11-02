import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import { InfoIcon } from '../../../assets/icons';

const CustomInformer = ({
  children,
}) => {
  return (
    <Grid
      container
      alignItems="center"
      gap={1}
    >
      <InfoIcon />
      <Typography variant="caption">{children}</Typography>
    </Grid>
  );
};

CustomInformer.propTypes = {
  children: PropTypes.any.isRequired,
};

export default CustomInformer;