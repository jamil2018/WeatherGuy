import { useState, useEffect } from "react";
import axios from "axios";

const useLocationData = (lon, lat) => {
  const [res, setRes] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (lon && lat) {
      const fetchData = async () => {
        try {
          const cancelToken = axios.CancelToken;
          const source = cancelToken.source();
          const reqURI = `https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&lat=${lat}&lon=${lon}&format=json`;
          const locationData = await axios.get(reqURI);
          setRes(locationData);
          return source.cancel("axios requests cancelled");
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }
  }, [lon, lat]);

  return [res, error];
};

export default useLocationData;
