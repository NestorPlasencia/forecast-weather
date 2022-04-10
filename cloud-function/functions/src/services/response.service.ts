import {OneCall} from "../models/onecall.model";
import {Response} from "../models/response.model";
import {exportForecast} from "./forecast.service";
import {exportOneCall} from "./onecall.service";
import {Forecast} from "../models/forecast.model";

export const exportResponse=({oneCall, forecast}:{oneCall: OneCall, forecast: Forecast}): Response => {
  return {
    weather: exportOneCall(oneCall),
    forecast: exportForecast(forecast),
  };
};
