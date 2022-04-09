import {HourlyExport} from "../dto/hourly.dto";
import {Hourly} from "../models/hourly.model";

export const exportHourly =(hourly: Hourly): HourlyExport => {
  return {
    dt: hourly.dt,
    temp: hourly.temp,
    pop: hourly.pop,
  };
};
