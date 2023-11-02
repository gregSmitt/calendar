import PropTypes from 'prop-types';
import 'typeface-inter';

import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme
} from "@mui/material/styles";

import palette from './palette';
import typography from './typography';

import componentsOverride from './overrides';
import { BORDER_RADIUS_MD, BORDER_RADIUS_SM } from './const';

const shape = {
  borderRadiusSm: BORDER_RADIUS_SM / 4,
  borderRadius: BORDER_RADIUS_MD / 4,
}

const options = createTheme({
  palette,
  typography,
  shape,
});

const ThemeProvider = ({ children }) => {
  const theme = createTheme(options);
  theme.components = componentsOverride(theme);
  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;