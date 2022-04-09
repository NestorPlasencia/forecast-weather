import {OneCallExport} from "../dto/onecall.dto";
import {GeolocationExport} from "../dto/geolocation.dto";

export interface Response {
    weather: OneCallExport;
    location: GeolocationExport;
}
