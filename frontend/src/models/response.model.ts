export interface Response {
  weather: ResponseWeather;
  location?: Location;
}

export interface Location {
  name: string;
  country: string;
  state: string;
}

export interface ResponseWeather {
  current: Current;
  hourly: Hourly[];
  daily: Daily[];
}

export interface Current {
  dt: number;
  temp: number;
  humidity: number;
  wind_speed: number;
  weather: WeatherElement[];
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
  temp: Temp;
}

export interface Temp {
  day: number;
  min: number;
  max: number;
}

export interface Hourly {
  dt: number;
  temp: number;
  pop: number;
}
