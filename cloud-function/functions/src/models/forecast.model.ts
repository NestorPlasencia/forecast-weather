import {City} from "./city.model";
import {Weather} from "./weather.model";
import {WeatherMainInfo} from "./weatherMainInfo.model";

export interface Forecast {
    cod: string;
    message: number;
    cnt: number;
    list: ForecastList[];
    city: City;
}


export interface ForecastList {
    dt: number;
    main: WeatherMainInfo;
    weather: Weather[];
    clouds: {
        all: number;
    };
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
        pod: string;
    };
    dt_txt: Date;
}
