import { useState, useEffect } from "react";
import axios from "axios";

const useWeatherData = (lon, lat) => {
  const [res, setRes] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reqURI = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
        const weatherData = await axios.get(reqURI);
        setRes(weatherData);
      } catch (error) {
        setError(error);
      }
    };
    setLoading(true);
    fetchData();
    setLoading(false);
  }, [lon, lat]);
  return [res, loading, error];
};

export default useWeatherData;
