import { createContext, useEffect, useState } from "react";
import { getForecast } from "../api/forecast";
import { useLocation } from "../hooks/location";
import { useRequest } from "../hooks/request";
import { Response } from "../models/response.model";
interface AppContextInterface {
  data: Response;
  loading: boolean;
  error: Error;
}

export const Data = createContext<Partial<AppContextInterface>>({});

export const DataProvider = ({ children }: { children: JSX.Element }) => {
  const { position } = useLocation();

  const [data, setData] = useState<Response | undefined>();

  const {
    data: success,
    loading,
    error,
    makeRequest: getData,
  } = useRequest({
    request: getForecast,
    lazy: true,
  });

  useEffect(() => {
    if (position?.lat !== null && position?.lon !== null) {
      getData({ lat: String(position?.lat), lon: String(position?.lon) });
    }
  }, [position]);

  useEffect(() => {
    if (success !== undefined) {
      setData(success);
    }
  }, [success]);

  return (
    <Data.Provider value={{ data, loading, error }}>{children}</Data.Provider>
  );
};
