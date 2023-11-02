/* eslint-disable */

import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Grid } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomAlertDialog({
  open,
  onClose,
  title,
  description,
  children,
}) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"

      >
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={(theme) => ({
            bgcolor: theme.palette.info.main,
            borderRadius: theme.shape.borderRadiusSm,
            textAlign: 'center',
          })}
        >
          {title ? (
            <DialogTitle variant="h3">{title}</DialogTitle>
          ) : null}
          <DialogContent>
            {description ? (
              <DialogContentText id="alert-dialog-slide-description">
                {description}
              </DialogContentText>) : null}
            {children}
          </DialogContent>
          <DialogActions
            disableSpacing
            sx={(theme) => ({
              paddingTop: 0,
              paddingBottom: 3,
            })}
          >
            <Button
              size='large'
              variant='contained'
              onClick={onClose}>
              Закрыть
            </Button>
            {/* <Button variant="contained" onClick={handleSuccess}>Agree</Button> */}
          </DialogActions>
        </Grid>
      </Dialog>
    </div>
  );
}

CustomAlertDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.any,
};

CustomAlertDialog.defaultProps = {
  title: '',
  description: '',
  children: <></>,
};