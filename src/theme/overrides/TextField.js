import { MAIN_TEXT } from "../colors";
import { BORDER_RADIUS_SM } from "../const";

export default function TextField(theme) {
  return {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.paper,
          color: MAIN_TEXT,
          borderRadius: BORDER_RADIUS_SM,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          color: MAIN_TEXT,
          borderRadius: BORDER_RADIUS_SM,
          ':before': {
            borderBottom: 0,
          },
          ':after': {
            borderBottom: 0,
          },
          ':hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: 0,
          },
          '&.Mui-error': {
            border: `1px solid ${theme.palette.primary.main}`,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: theme.palette.primary.main,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          '&.Mui-error': {
            position: 'absolute',
            top: '54px',
            marginTop: 0,
          },
        },
      },
    },
  };
};
