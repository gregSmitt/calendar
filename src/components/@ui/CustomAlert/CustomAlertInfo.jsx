import React from 'react';
import PropTypes from 'prop-types';

import { Typography } from "@mui/material";
import CustomAlert from "./CustomAlert";

const CustomAlertInfo = ({
  title,
  subtitle,
}) => {
  return (
    <CustomAlert icon={false}>
      <>
        <Typography variant="h3" gutterBottom>{title}</Typography>
        <Typography variant="body1">{subtitle}</Typography>
      </>
    </CustomAlert>
  );
};

CustomAlertInfo.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

CustomAlertInfo.defaultProps = {
  subtitle: '',
};

export default CustomAlertInfo;