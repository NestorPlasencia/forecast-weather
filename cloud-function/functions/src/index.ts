import axios from "axios";
import * as cors from "cors";
import * as functions from "firebase-functions";
import {Geolocation} from "./models/geolocation.model";
import {OneCall} from "./models/onecall.model";
import {exportResponse} from "./services/response.service";
import {handleAxiosError} from "./utils/error";

const corsHandler = cors({origin: true});
const apiKey = process.env.API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5";
const geoUrl = "https://api.openweathermap.org/geo/1.0";

export const forecast = functions.https.onRequest(async (request, response) => {
  corsHandler(request, response, async () => {
    const lat = request.query.lat;
    const lon = request.query.lon;
    try {
      const {data: oneCallData} = await axios.get<OneCall>(
          `${apiUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}&units=metric`
      );
      const {data: geoData} = await axios.get<Geolocation[]>(
          `${geoUrl}/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${apiKey}`
      );
      const {data: forecastData} = await axios.get(
          `${apiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      console.log(forecastData);
      response.json(exportResponse(oneCallData, geoData));
    } catch (error) {
      response.json(handleAxiosError(error));
    }
  });
});
