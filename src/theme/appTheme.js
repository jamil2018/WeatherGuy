const { createMuiTheme } = require("@material-ui/core");
const { grey } = require("@material-ui/core/colors");

const theme = createMuiTheme({
  palette: {
    text: {
      primary: grey[300],
      secondary: grey[500],
    },
  },
});

export default theme;
