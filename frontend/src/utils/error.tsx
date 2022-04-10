import { Response } from "../models/response.model";

export const getErrorMessage = (error: unknown) => {
  if (typeof error === "string") {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "";
};

export const errorCodeMessage = (status: number, message: string) => {
  if (message === "") {
    if (status === 401) {
      return "You need to check your Openweathermap API request.";
    }
    if (status === 404) {
      return "The format of your Openweathermap API request is incorrect.";
    }
    if (status === 429) {
      return "You have tried several times with your Openweathermap free plan subscription.";
    }
    if (status === 500 || status === 502 || status === 503 || status === 504) {
      return "Contact Openweathermap for assistance";
    }
  }
  const splitMessage = message.split(".");
  if (splitMessage.length > 1) return splitMessage[0];
  return message;
};

export const instanceOfResponse = (data: any): data is Response => {
  return "weather" in data;
};
