import { createMuiTheme, colors } from "@material-ui/core";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: `#0E4462`,
    },
    secondary: {
      main: `#b91d2a`,
    },
    error: {
      main: colors.red.A400,
    },
    background: {
      default: `#b91d2a`,
    },
  },
});

export default theme;
