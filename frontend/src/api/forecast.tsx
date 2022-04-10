import { errorCodeMessage, instanceOfResponse } from "../utils/error";
import { capitalize } from "../utils/utils";

export async function getForecast({
  lat,
  lon,
}: {
  lat?: number;
  lon?: number;
}) {
  try {
    const URL = process.env.REACT_APP_API_URL;
    const response = await fetch(`${URL}/forecast/?lat=${lat}&lon=${lon}`);
    if (!response.ok) throw response.statusText;
    const data = await response.json();
    if (data?.cod) throw errorCodeMessage(data.cod, capitalize(data.message));
    if (instanceOfResponse(data)) return data;
    throw new Error("No data found in this location.");
  } catch (error: unknown) {
    throw error;
  }
}
