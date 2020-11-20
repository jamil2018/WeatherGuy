const { createMuiTheme } = require("@material-ui/core");
const { blueGrey, grey } = require("@material-ui/core/colors");

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[300],
    },
  },
});

export default theme;
