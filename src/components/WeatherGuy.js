import { Box, Container, makeStyles } from "@material-ui/core";
import { determinePeriod } from "../utils/ClockUtils";
import MorningBgImage from "../img/morning.svg";
import NightBgImage from "../img/night.svg";
import NoonBgImage from "../img/noon.svg";
import AfterNoonBgImage from "../img/afternoon.svg";
import React, { useEffect, useState } from "react";
import TimeTitle from "./TimeTitle";
import WelcomeTitle from "./WelcomeTitle";
import WeatherDataCard from "./WeatherDataCard";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
  },
  bgMorning: {
    background: `url(${MorningBgImage}) center center`,
    backgroundSize: "100vw",
    backgroundRepeat: "no-repeat",
  },
  bgNoon: {
    background: `url(${NoonBgImage}) center center`,
    backgroundSize: "100vw",
    backgroundRepeat: "no-repeat",
  },
  bgAfternoon: {
    background: `url(${AfterNoonBgImage}) center center`,
    backgroundSize: "100vw",
    backgroundRepeat: "no-repeat",
  },
  bgNight: {
    background: `url(${NightBgImage}) center center`,
    backgroundSize: "100vw",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    height: "100%",
    background: "rgba(40, 40, 40, 0.34)",
  },
}));
const WeatherGuy = () => {
  const [currentHr, setCurrentHr] = useState(new Date().getHours());
  const classes = useStyles();
  const period = determinePeriod(currentHr);
  let timeBg;
  switch (period) {
    case "morning":
      timeBg = classes.bgMorning;
      break;
    case "noon":
      timeBg = classes.bgNoon;
      break;
    case "afternoon":
      timeBg = classes.bgAfternoon;
      break;
    case "evening":
      timeBg = classes.bgAfternoon;
      break;
    case "night":
      timeBg = classes.bgNight;
      break;
    default:
      timeBg = classes.bgMorning;
  }
  useEffect(() => {
    setInterval(() => {
      setCurrentHr(new Date().getHours());
    }, 60000);
  }, [currentHr]);
  return (
    <Box component="div" className={[classes.root, timeBg].join(" ")}>
      <Box component="div" className={classes.overlay}>
        <Container>
          <TimeTitle />
          <WelcomeTitle title={`Good ${period}`} />
          <WeatherDataCard cardTitle="Hello World" />
        </Container>
      </Box>
    </Box>
  );
};

export default WeatherGuy;
