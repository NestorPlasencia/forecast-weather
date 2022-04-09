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

export const celsiusToFahrenheit = (celsius: number) => {
  return (9 / 5) * celsius + 32;
};

export const mpsToKmph = (mps: number) => {
  return Math.round(mps * 3.6);
};

export const mpsToMph = (mps: number) => {
  return Math.round(mps * 2.237);
};

export const capitalize = (str: string) => {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
};

export const formatLocalDate = (dt: number) => {
  const date = new Date(dt * 1000);
  return date.toLocaleString().split(",")[0];
};

//
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

//
export const getStringMonth = (date: Date) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return month[date.getMonth()];
};

export const errorCodeMessage = (status: number) => {
  let errorMessage = "";

  if (status === 401) {
    errorMessage = "You need to check your Openweathermap API request.";
  }
  if (status === 404) {
    errorMessage =
      "The format of your Openweathermap API request is incorrect.";
  }
  if (status === 429) {
    errorMessage =
      "You have tried several times with your Openweathermap free plan subscription.";
  }
  if (status === 500 || status === 502 || status === 503 || status === 504) {
    errorMessage = "Contact Openweathermap for assistance";
  }

  return errorMessage;
};

export const getGeoLocationStatus = async () => {
  if (navigator.permissions) {
    const response = await navigator.permissions.query({ name: "geolocation" });
    if (response.state === "granted") {
      return "granted";
    } else if (response.state === "prompt") {
      return "prompt";
    } else {
      return "reject";
    }
  }
  return "unsupported";
};

export const getLocation = (callback: (params: any) => void) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(callback);
  }
};

export const getGeoLocationMessage = (status: string) => {
  if (status === "granted") {
    return "We are obtaining your location data.";
  }
  if (status === "reject") {
    return "You don't allow access to your location.";
  }
  if (status === "prompt") {
    return "You should allow access to your location to continue.";
  }
  if (status === "unsupported") {
    return "Geolocation is not supported by this browser.";
  }
  return "";
};
