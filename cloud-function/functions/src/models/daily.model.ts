import {Temperatures} from "./temperatures.model";
import {Weather} from "./weather.model";

export interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: Temperatures;
    feels_like: Temperatures;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust?: number;
    weather: Weather[];
    clouds: number;
    pop: number;
    rain?: number;
    snow?: number;
    uvi: number;
}
