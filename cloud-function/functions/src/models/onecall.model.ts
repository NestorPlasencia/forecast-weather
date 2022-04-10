import {Alert} from "./alert.model";
import {Current} from "./current.model";
import {Daily} from "./daily.model";
import {Hourly} from "./hourly.model";

export interface OneCall {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: Current;
    minutely?: {
        dt: number;
        precipitation: number;
    }[];
    hourly: Hourly[];
    daily: Daily[];
    alerts?: Alert[];
}
