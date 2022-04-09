import {Temperatures} from "./temperatures.model";
import {TemperatureSensations} from "./temperaturesSensations.model";
import {Weather} from "./weather.model";

export interface Daily {
    dt: number;
    sunrise: number;
    sunset: number;
    moonrise: number;
    moonset: number;
    moon_phase: number;
    temp: Temperatures;
    feels_like: TemperatureSensations;
    pressure: number;
    humidity: number;
    dew_point: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
    clouds: number;
    pop: number;
    rain?: number;
    uvi?: number;
}
