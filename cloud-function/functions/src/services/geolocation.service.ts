import {GeolocationExport} from "../dto/geolocation.dto";
import {Geolocation} from "../models/geolocation.model";

export const exportGeolocation =(current: Geolocation): GeolocationExport => {
  return {
    name: current.name,
    country: current.country,
    state: current.state,
  };
};

