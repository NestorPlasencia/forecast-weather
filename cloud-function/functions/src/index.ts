import axios from "axios";
import * as cors from "cors";
import * as functions from "firebase-functions";
import {OneCall} from "./models/onecall.model";
import {exportResponse} from "./services/response.service";
import {handleAxiosError} from "./utils/error";

const corsHandler = cors({origin: true});
const apiKey = process.env.API_KEY;
const apiUrl = "https://api.openweathermap.org/data/2.5";

export const forecast = functions.https.onRequest(async (request, response) => {
  corsHandler(request, response, async () => {
    const lat = request.query.lat;
    const lon = request.query.lon;
    try {
      const {data: oneCallData} = await axios.get<OneCall>(
          `${apiUrl}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${apiKey}&units=metric`
      );
      const {data: forecastData} = await axios.get(
          `${apiUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      response.json(exportResponse({oneCall: oneCallData, forecast: forecastData}));
    } catch (error) {
      response.json(handleAxiosError(error));
    }
  });
});
