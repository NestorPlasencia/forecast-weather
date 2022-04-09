import {Current} from "../models/current.model";

export type CurrentExport = Pick<Current, "dt" | "temp" | "humidity" | "wind_speed" | "weather" >
