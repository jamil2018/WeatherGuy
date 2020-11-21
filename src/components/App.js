import React from "react";
import theme from "../theme/appTheme";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import WeatherGuy from "./WeatherGuy";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <WeatherGuy />
    </ThemeProvider>
  );
}
export default App;
