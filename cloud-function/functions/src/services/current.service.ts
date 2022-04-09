import {CurrentExport} from "../dto/current.dto";
import {Current} from "../models/current.model";

export const exportCurrent =(current: Current): CurrentExport => {
  return {
    dt: current.dt,
    temp: current.temp,
    humidity: current.humidity,
    wind_speed: current.wind_speed,
    weather: current.weather,
  };
};
