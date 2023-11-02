import { MAIN_TEXT } from "../colors";
import { BORDER_RADIUS_SM } from "../const";

export default function Alert(theme) {
  return {
    MuiAlert: {
      styleOverrides: {
        standardInfo: {
          backgroundColor: theme.palette.info.main,
          color: MAIN_TEXT,
          borderRadius: BORDER_RADIUS_SM,
        },
      },
    },
  };
}
