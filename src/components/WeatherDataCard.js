import React from "react";
import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "rgba(10, 10, 10, 0.3)",
    color: theme.palette.text.primary,
  },
}));

const WeatherDataCard = ({ cardTitle }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5">{cardTitle}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default WeatherDataCard;
