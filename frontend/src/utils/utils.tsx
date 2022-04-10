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

export const isSameDate = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

export const getDateFromDt = (dt: number): Date => {
  return new Date(dt * 1000);
};

export const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};
