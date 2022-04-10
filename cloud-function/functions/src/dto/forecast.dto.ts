
import {City} from "../models/city.model";
import {Forecast, ForecastList} from "../models/forecast.model";
import {WeatherMainInfo} from "../models/weatherMainInfo.model";

export type WeatherMainInfoExport = Pick<WeatherMainInfo, "temp" >

export interface ForecastListExport extends Pick<ForecastList, "dt" |"pop" > {
    main: WeatherMainInfoExport;
}

export interface ForecastExport extends Pick<Forecast, "cod" | "message" > {
    list: ForecastListExport[]
    city: Pick<City, "name">;
}
