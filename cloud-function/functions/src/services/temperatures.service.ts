import {Temperatures} from "../models/temperatures.model";
import {TemperaturesExport} from "../dto/temperatures.dto";

export const exportTemperatures =(daily: Temperatures): TemperaturesExport=> {
  return {
    day: daily.day,
    min: daily.min,
    max: daily.max,
  };
};
