import {
  getStringMonth,
  celsiusToFahrenheit,
  mpsToKmph,
  mpsToMph,
} from "./utils";

export const formatTemperature = (unit: string, temp: number) => {
  if (unit === "C") {
    return Math.round(temp) + "°C";
  } else {
    return Math.round(celsiusToFahrenheit(temp)) + "°F";
  }
};

export const formatWindSpeed = (unit: string, speed: number) => {
  if (unit === "C") {
    return Math.round(mpsToKmph(speed)) + " km/h";
  } else {
    return Math.round(mpsToMph(speed)) + " mph";
  }
};

export const formatLocalDate = (dt: number) => {
  const date = new Date(dt * 1000);
  const dayOfWeek = date.toLocaleString("en-us", { weekday: "short" });
  const day = date.getDate();
  return dayOfWeek + " " + day;
};

export const formatLocalDateLong = (dt: number) => {
  const date = new Date(dt * 1000);
  const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });
  const day = date.getDate();
  return dayOfWeek + " " + day;
};

export const formatLocalDateTime = (dt: number) => {
  const date = new Date(dt * 1000);
  const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });
  let month = getStringMonth(date);
  let day = date.getDate();
  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  return `${dayOfWeek}, ${month} ${day} ${time}`;
};
