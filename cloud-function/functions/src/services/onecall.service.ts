import {CurrentExport, DailyExport, HourlyExport, TemperaturesExport, OneCallExport} from "../dto/onecall.dto";
import {Current} from "../models/current.model";
import {Daily} from "../models/daily.model";
import {Hourly} from "../models/hourly.model";
import {Temperatures} from "../models/temperatures.model";
import {OneCall} from "../models/onecall.model";

export const exportTemperatures =(daily: Temperatures): TemperaturesExport=> {
  return {
    day: daily.day,
    min: daily.min,
    max: daily.max,
  };
};

export const exportDaily =(daily: Daily): DailyExport => {
  return {
    dt: daily.dt,
    weather: daily.weather,
    pop: daily.pop,
    temp: exportTemperatures(daily.temp),
  };
};


export const exportCurrent =(current: Current): CurrentExport => {
  return {
    dt: current.dt,
    temp: current.temp,
    humidity: current.humidity,
    wind_speed: current.wind_speed,
    weather: current.weather,
  };
};


export const exportHourly =(hourly: Hourly): HourlyExport => {
  return {
    dt: hourly.dt,
    temp: hourly.temp,
    pop: hourly.pop,
  };
};

export const exportOneCall =(oneCall: OneCall): OneCallExport => {
  return {
    current: exportCurrent(oneCall.current),
    hourly: oneCall.hourly.map( (e)=> exportHourly(e)).splice(0, 25),
    daily: oneCall.daily.map( (e)=> exportDaily(e)).splice(0, 6),
  };
};
