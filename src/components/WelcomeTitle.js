import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    margin: theme.spacing(1),
  },
}));

const WelcomeTitle = ({ title }) => {
  const classes = useStyles();
  return (
    <Typography variant="h5" className={classes.root}>
      {title}
    </Typography>
  );
};

export default WelcomeTitle;
