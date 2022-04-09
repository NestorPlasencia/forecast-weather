import {OneCall} from "../models/onecall.model";
import {OneCallExport} from "../dto/onecall.dto";
import {exportCurrent} from "./current.service";
import {exportHourly} from "./hourly.service";
import {exportDaily} from "./daily.service";

export const exportOneCall =(oneCall: OneCall): OneCallExport => {
  return {
    current: exportCurrent(oneCall.current),
    hourly: oneCall.hourly.map( (e)=> exportHourly(e)).splice(0, 25),
    daily: oneCall.daily.map( (e)=> exportDaily(e)),
  };
};
