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
