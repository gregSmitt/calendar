import { CONTAINER_WIDTH_MD } from "../const";

export default function Container(theme) {
  return {
    MuiContainer: {
      styleOverrides: {
        root: {
          [theme.breakpoints.down('sm')]: {
            paddingLeft: 0,
            paddingRight: 0,
          },
        },
        maxWidthMd: {
          marginBottom: 48,
          maxWidth: CONTAINER_WIDTH_MD,
          paddingLeft: 0,
          paddingRight: 0,
          [theme.breakpoints.up('md')]: {
            maxWidth: CONTAINER_WIDTH_MD,
            paddingLeft: 0,
            paddingRight: 0,
          },

        },
      },
    },
  };
}
