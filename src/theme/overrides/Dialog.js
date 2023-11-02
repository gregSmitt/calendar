import { BORDER_RADIUS_SM } from "../const";

export default function Dialog(theme) {
  return {
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: BORDER_RADIUS_SM,
        },
      },
    },
  };
}
