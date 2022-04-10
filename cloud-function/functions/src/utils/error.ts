import axios from "axios";

export const handleAxiosError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    if (error?.response) return error.response.data;
    if (error?.request) return error.request;
    return error;
  }
  if (error instanceof Error) {
    delete error.stack;
    return error;
  }
  return error;
};
