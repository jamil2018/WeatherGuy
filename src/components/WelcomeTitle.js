import { makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.primary,
    margin: `${theme.spacing(2)} 0`,
    textTransform: "capitalize",
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
