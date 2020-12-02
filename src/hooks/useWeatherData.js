import { useState, useEffect } from "react";
import axios from "axios";

const useWeatherData = (lon, lat) => {
  const [res, setRes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (lon && lat) {
      const fetchData = async () => {
        try {
          const cancelToken = axios.CancelToken;
          const source = cancelToken.source();
          const reqURI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
          const weatherData = await axios.get(reqURI);
          setRes(weatherData);
          return source.cancel("axios request cancelled");
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }
  }, [lon, lat]);

  return [res, error];
};

export default useWeatherData;
