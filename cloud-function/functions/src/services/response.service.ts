import {Geolocation} from "../models/geolocation.model";
import {OneCall} from "../models/onecall.model";
import {Response} from "../models/response.model";
import {exportGeolocation} from "./geolocation.service";
import {exportOneCall} from "./onecall.service";

export const exportResponse=(oneCall: OneCall, geolocation: Geolocation[]): Response => {
  return {
    location: exportGeolocation(geolocation[0]),
    weather: exportOneCall(oneCall),
  };
};
