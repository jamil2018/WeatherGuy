import { Box, Container, makeStyles } from "@material-ui/core";
import MorningBgImage from "../img/morning.svg";
import NightBgImage from "../img/night.svg";
import NoonBgImage from "../img/noon.svg";
import AfterNoonBgImage from "../img/afternoon.svg";
import React from "react";
import TimeTitle from "./TimeTitle";
import WelcomeTitle from "./WelcomeTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    background: `url(${AfterNoonBgImage}) center center`,
    backgroundSize: "100vw",
    backgroundRepeat: "no-repeat",
  },
}));

const WeatherGuy = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Container>
        <TimeTitle />
        <WelcomeTitle title="Good Morning" />
      </Container>
    </Box>
  );
};

export default WeatherGuy;
