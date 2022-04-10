import {Weather} from "./weather.model";

export interface Hourly {
    dt: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_gust?: number;
    wind_deg: number;
    rain: {
        "1h"?: number;
    };
    snow: {
        "1h"?: number;
    };
    pop: number;
    weather: Weather;
}
