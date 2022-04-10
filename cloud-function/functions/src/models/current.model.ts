import {Weather} from "./weather.model";

export interface Current {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    clouds: number;
    uvi: number;
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
    weather: Weather[];
}
