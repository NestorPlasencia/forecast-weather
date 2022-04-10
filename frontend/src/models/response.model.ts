export interface Response {
  weather: Weather;
  location?: Location;
  forecast?: Forecast;
}

export interface Location {
  name: string;
  country: string;
  state: string;
}

export interface Weather {
  current: {
    dt: number;
    temp: number;
    humidity: number;
    wind_speed: number;
    weather: WeatherElement[];
  };
  hourly:{
    dt: number;
    temp: number;
    pop: number;
  }[];
  daily: Daily[];
}

export interface Forecast {
  list: {
    main: {
      temp: number;
    };
    dt: number;
    pop: number;
  };
  city: {
    name: string;
  };
  cod: string;
  message: number;
}

export interface WeatherElement {
  id: number;
  main: string;
  description: string;
  icon: string;
}


export interface Daily {
    dt: number;
    weather: WeatherElement[];
    pop: number;
    temp: {
      day: number;
      min: number;
      max: number;
    };
}