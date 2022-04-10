import {OneCallExport} from "../dto/onecall.dto";
import {ForecastExport} from "../dto/forecast.dto";

export interface Response {
    weather: OneCallExport;
    forecast: ForecastExport;
}
