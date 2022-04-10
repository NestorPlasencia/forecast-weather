
import {Forecast, ForecastList} from "../models/forecast.model";
import {WeatherMainInfo} from "../models/weatherMainInfo.model";
import {WeatherMainInfoExport, ForecastListExport, ForecastExport} from "../dto/forecast.dto";

export const exportWeatherMainInfo =(weatherMainInfo: WeatherMainInfo): WeatherMainInfoExport => {
  return {
    temp: weatherMainInfo.temp,
  };
};

export const exportForecastList = ( item : ForecastList ) : ForecastListExport => {
  return {
    main: exportWeatherMainInfo(item.main),
    dt: item.dt,
    pop: item.pop,
  };
};

export const exportForecast =(forecast: Forecast): ForecastExport => {
  return {
    list: forecast.list.map((e) =>exportForecastList(e)),
    city: {
      name: forecast.city.name,
    },
    cod: forecast.cod,
    message: forecast.message,
  };
};
