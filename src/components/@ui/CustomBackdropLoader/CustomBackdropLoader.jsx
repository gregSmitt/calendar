import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const CustomBackdropLoader = () => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 101 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default CustomBackdropLoader;