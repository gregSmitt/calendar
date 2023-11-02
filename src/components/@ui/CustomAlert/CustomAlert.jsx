import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

export default function CustomAlert({
  children,
  icon,
  showButton,
}) {
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          color="info"
          icon={icon}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {children}
        </Alert>
      </Collapse>
      {!open && showButton ? (
        <Button
          disabled={open}
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Вернуть
        </Button>
      ) : null}
    </Box>
  );
};

CustomAlert.propTypes = {
  children: PropTypes.element.isRequired,
  icon: PropTypes.bool,
  showButton: PropTypes.bool,
};

CustomAlert.defaultProps = {
  icon: true,
  showButton: false,
};

