import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    fontWeight: "300",
    textTransform: "capitalize",
  },
}));

const WeatherInfoText = ({ text, variant, className }) => {
  const classes = useStyles();
  return (
    <Typography
      variant={variant}
      className={[classes.root, className].join(" ")}
      color="textPrimary"
    >
      {text}
    </Typography>
  );
};

export default WeatherInfoText;
