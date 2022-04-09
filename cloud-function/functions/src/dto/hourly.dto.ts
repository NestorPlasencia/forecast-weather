import {Hourly} from "../models/hourly.model";

export type HourlyExport = Pick<Hourly, "dt" | "temp" | "pop" >
