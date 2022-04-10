import {Current} from "../models/current.model";
import {Daily} from "../models/daily.model";
import {Hourly} from "../models/hourly.model";
import {Temperatures} from "../models/temperatures.model";

export type CurrentExport = Pick<Current, "dt" | "temp" | "humidity" | "wind_speed" | "weather" >

export type TemperaturesExport = Pick<Temperatures, "day" | "min" | "max">

export interface DailyExport extends Pick<Daily, "dt" | "weather" | "pop" > {
    temp: TemperaturesExport;
}

export type HourlyExport = Pick<Hourly, "dt" | "temp" | "pop" >

export interface OneCallExport {
    current: CurrentExport;
    hourly: HourlyExport[];
    daily: DailyExport[];
}
