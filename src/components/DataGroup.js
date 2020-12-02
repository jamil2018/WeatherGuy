import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import WeatherInfoText from "./WeatherInfoText";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "1rem 0rem",
    paddingRight: "0.5rem",
  },
}));
const DataGroup = ({ dataTitle, dataDescription }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Grid item>
        <WeatherInfoText variant="subtitle2" text={dataTitle} />
      </Grid>
      <Grid item>
        <WeatherInfoText variant="subtitle2" text={dataDescription} />
      </Grid>
    </Grid>
  );
};

export default DataGroup;
