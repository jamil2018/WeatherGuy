import { makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    paddingTop: theme.spacing(3),
  },
}));

const TimeTitle = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );
  const classes = useStyles();
  const setTime = (time) => {
    setCurrentTime(time);
  };
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <Typography variant="h2" className={classes.root}>
      {currentTime}
    </Typography>
  );
};

export default TimeTitle;
