import {TemperaturesExport} from "./temperatures.dto";
import {Daily} from "../models/daily.model";

export interface DailyExport extends Pick<Daily, "dt" | "weather" | "pop" > {
    temp: TemperaturesExport;
}
