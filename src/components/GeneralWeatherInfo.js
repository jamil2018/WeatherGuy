import { Avatar, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import WeatherInfoText from "./WeatherInfoText";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(4),
  },
  avatarMid: {
    width: theme.spacing(7),
    height: theme.spacing(5),
  },
  alignTextCenter: {
    textAlign: "center",
    fontSize: theme.spacing(1.5),
  },
}));

const GeneralWeatherInfo = ({
  temperature,
  location,
  iconURL,
  weatherDescription,
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <WeatherInfoText text={temperature} variant="h5" />
        <WeatherInfoText text={location} variant="subtitle1" />
      </Grid>
      <Grid item>
        <Avatar src={iconURL} variant="square" className={classes.avatarMid} />
        <WeatherInfoText
          text={weatherDescription}
          variant="subtitle2"
          className={classes.alignTextCenter}
        />
      </Grid>
    </Grid>
  );
};

export default GeneralWeatherInfo;
