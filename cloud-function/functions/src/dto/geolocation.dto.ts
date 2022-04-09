import {Geolocation} from "../models/geolocation.model";

export type GeolocationExport = Pick<Geolocation, "name" | "country" | "state" >
