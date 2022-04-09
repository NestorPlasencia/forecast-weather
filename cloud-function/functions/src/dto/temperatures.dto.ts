import {Temperatures} from "../models/temperatures.model";

export type TemperaturesExport = Pick<Temperatures, "day" | "min" | "max">
