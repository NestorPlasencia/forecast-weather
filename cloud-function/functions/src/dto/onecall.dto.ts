import {CurrentExport} from "./current.dto";
import {DailyExport} from "./daily.dto";
import {HourlyExport} from "./hourly.dto";

export interface OneCallExport {
    current: CurrentExport;
    hourly: HourlyExport[];
    daily: DailyExport[];
}
