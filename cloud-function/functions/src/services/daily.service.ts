import {DailyExport} from "../dto/daily.dto";
import {Daily} from "../models/daily.model";
import {exportTemperatures} from "./temperatures.service";

export const exportDaily =(daily: Daily): DailyExport => {
  return {
    dt: daily.dt,
    weather: daily.weather,
    pop: daily.pop,
    temp: exportTemperatures(daily.temp),
  };
};
