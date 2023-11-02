import { BORDER_RADIUS_SM } from "../const";

export default function Button(theme) {
  return {
    MuiIconButton: {
      styleOverrides: {
        sizeLarge: {
          borderRadius: BORDER_RADIUS_SM,
          backgroundColor: theme.palette.primary.contrastText,
        },
      },
    },
  };
}
