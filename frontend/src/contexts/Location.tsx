import { createContext, useEffect, useState } from "react";
import { getGeoLocationStatus, getLocation } from "../utils/utils";

interface AppContextInterface {
  position: { lat: null | number; lon: null | number };
  geolocationStatus: string;
}

export const Location = createContext<Partial<AppContextInterface>>({});

export const LocationProvider = ({ children }: { children: JSX.Element }) => {
  const [position, setPosition] = useState({ lat: null, lon: null });
  const [geolocationStatus, setGeolocationStatus] = useState("");

  useEffect(() => {
    getLocation((position: { coords: { latitude: any; longitude: any } }) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setPosition({ lat, lon });
    });

    getGeoLocationStatus()
      .then((status: string) => {
        setGeolocationStatus(status);
      })
      .catch((error: any) => console.log({ error }));
  }, []);

  return (
    <Location.Provider value={{ position, geolocationStatus }}>
      {children}
    </Location.Provider>
  );
};
