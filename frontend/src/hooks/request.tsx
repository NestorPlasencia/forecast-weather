import { useEffect, useState } from "react";
import { Response } from "../models/response.model";
type ObjectType = { [key: string]: string };
type Props = {
  request: any;
  params?: ObjectType;
  lazy?: boolean;
};
export const useRequest = ({ request, params = {}, lazy = false }: Props) => {
  const [loading, changeLoading] = useState(false);
  const [error, changeError] = useState<ObjectType | undefined>();
  const [data, changeData] = useState<Response | undefined>();

  const makeRequest = (values: { [key: string]: string }) => {
    changeLoading(true);
    changeError(undefined);
    request({ ...params, ...values })
      .then((data: Response) => {
        changeData(data);
      })
      .catch((e: { [key: string]: string }) => changeError(e))
      .finally(() => changeLoading(false));
  };

  useEffect(() => {
    if (!lazy) {
      makeRequest({});
    }
  }, []);

  return {
    data,
    loading,
    error,
    makeRequest,
  };
};
