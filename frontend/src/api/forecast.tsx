import { Response } from "../models/response.model";

const instanceOfResponse = (data: any): data is Response => {
  return "location" in data;
};

export async function getForecast({
  lat,
  lon,
}: {
  lat?: number;
  lon?: number;
}) {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/forecast/?lat=${lat}&lon=${lon}`
    );
    const data = await response.json();
    if (data?.status || data?.cod) throw data;
    if (instanceOfResponse(data)) return data;
    return data;
  } catch (error) {
    throw error;
  }
}
