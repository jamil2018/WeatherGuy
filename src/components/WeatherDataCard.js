import React from "react";
import { Card, CardContent, Grid, makeStyles } from "@material-ui/core";
import GeneralWeatherInfo from "./GeneralWeatherInfo";
import DataGroup from "./DataGroup";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(10, 10, 10, 0.3)",
    color: theme.palette.text.primary,
    padding: "0rem 1.5rem",
  },
  cardContainer: {
    minWidth: "35%",
  },
}));
const WeatherDataCard = ({
  temperature,
  location,
  iconURL,
  weatherDescription,
  feelsLike,
  sunrise,
  sunset,
}) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item className={classes.cardContainer}>
        <Card className={classes.root}>
          <CardContent>
            <GeneralWeatherInfo
              temperature={temperature}
              location={location}
              iconURL={iconURL}
              weatherDescription={weatherDescription}
            />
            <DataGroup dataTitle="Feels Like" dataDescription={feelsLike} />
            <DataGroup dataTitle="Sunrise" dataDescription={sunrise} />
            <DataGroup dataTitle="Sunset" dataDescription={sunset} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default WeatherDataCard;
