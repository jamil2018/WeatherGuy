import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { determinePeriod } from "../utils/ClockUtils";
import MorningBgImage from "../img/morning.svg";
import NightBgImage from "../img/night.svg";
import NoonBgImage from "../img/noon.svg";
import AfterNoonBgImage from "../img/afternoon.svg";
import React, { useEffect, useState } from "react";
import TimeTitle from "../components/TimeTitle";
import WelcomeTitle from "../components/WelcomeTitle";
import WeatherDataCard from "../components/WeatherDataCard";
import useWeatherData from "../hooks/useWeatherData";
import useLocationData from "../hooks/useLocationData";
import useGeoLocation from "react-hook-geolocation";
import { generateLocationString } from "../utils/LocationUtils";
import {
  convertKelvinToCelsius,
  convertTimeToLocal,
  generateWeatherIconURL,
} from "../utils/WeatherUtils";
import Loader from "react-loader-spinner";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "100vh",
    transition: "background 0.5s",
  },
  bgMorning: {
    background: `url(${MorningBgImage}) center center`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  bgAfternoon: {
    background: `url(${NoonBgImage}) center center`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  bgEvening: {
    background: `url(${AfterNoonBgImage}) center center`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  bgNight: {
    background: `url(${NightBgImage}) center center`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  overlay: {
    height: "100%",
    background: "rgba(40, 40, 40, 0.34)",
  },
  errorMsg: {
    color: "red",
  },
}));
const WeatherGuy = () => {
  const [currentHr, setCurrentHr] = useState(new Date().getHours());
  const [location, setLocation] = useState({ lon: null, lat: null });
  const [weatherDataRes, weatherDataError] = useWeatherData(
    location.lon,
    location.lat
  );
  const [locationDataRes, locationDataError] = useLocationData(
    location.lon,
    location.lat
  );
  const { longitude, latitude, locationError } = useGeoLocation();
  const classes = useStyles();
  const period = determinePeriod(currentHr);
  let timeBg;
  switch (period) {
    case "morning":
      timeBg = classes.bgMorning;
      break;
    case "afternoon":
      timeBg = classes.bgAfternoon;
      break;
    case "evening":
      timeBg = classes.bgEvening;
      break;
    case "night":
      timeBg = classes.bgNight;
      break;
    default:
      timeBg = classes.bgMorning;
  }
  useEffect(() => {
    const clear = setInterval(() => {
      setCurrentHr(new Date().getHours());
    }, 1000);
    return () => clearInterval(clear);
  }, [currentHr]);
  useEffect(() => {
    if (!locationError && longitude && latitude) {
      setLocation({ lon: longitude.toFixed(4), lat: latitude.toFixed(4) });
    }
  }, [longitude, latitude, locationError]);
  return (
    <Box component="div" className={[classes.root, timeBg].join(" ")}>
      <Box component="div" className={classes.overlay}>
        <Container>
          <TimeTitle />
          <WelcomeTitle title={`Good ${period}`} />
          {locationDataRes && weatherDataRes ? (
            <>
              <WeatherDataCard
                location={generateLocationString(
                  locationDataRes.data.address.suburb,
                  locationDataRes.data.address.city
                )}
                temperature={convertKelvinToCelsius(
                  weatherDataRes.data.main.temp
                )}
                iconURL={generateWeatherIconURL(
                  weatherDataRes.data.weather[0].icon
                )}
                weatherDescription={weatherDataRes.data.weather[0].main}
                feelsLike={convertKelvinToCelsius(
                  weatherDataRes.data.main.feels_like
                )}
                sunrise={convertTimeToLocal(weatherDataRes.data.sys.sunrise)}
                sunset={convertTimeToLocal(weatherDataRes.data.sys.sunset)}
              />
            </>
          ) : locationDataError || weatherDataError ? (
            <Grid container justify="center" alignItems="center">
              <Grid item>
                <Typography variant="h3" className={classes.errorMsg}>
                  Error while fetching data!!!
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <Grid container justify="center" alignItems="center">
              <Grid item>
                <Loader type="ThreeDots" color="#f2f2f2" />
              </Grid>
            </Grid>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default WeatherGuy;
