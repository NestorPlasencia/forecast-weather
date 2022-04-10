import { FullMessage } from "./components/FullMessage/FullMessage";
import { Current } from "./containers/Current/Current";
import { Daily } from "./containers/Daily/Daily";
import { Hourly } from "./containers/Hourly/Hourly";
import { useData } from "./hooks/data";
import { useLocation } from "./hooks/location";
import { errorCodeMessage, getGeoLocationMessage } from "./utils/utils";

const App = () => {
  const { data, loading, error } = useData();
  const { position, geolocationStatus } = useLocation();

  return (
    <main>
      <></>
      {position?.lat === null &&
        position?.lon === null &&
        geolocationStatus && (
          <FullMessage
            message={getGeoLocationMessage(geolocationStatus)}
            icon={
              geolocationStatus === "granted"
                ? "01n"
                : geolocationStatus === "prompt"
                ? "solar-eclipse"
                : "11d"
            }
          />
        )}
      {loading && <FullMessage message={"Loading ..."} />}
      {error && error?.status && typeof error.status === "number" && (
        <FullMessage message={errorCodeMessage(error.status)} icon="11d" />
      )}
      {data?.location && (
        <>
          <Current />
          <Daily />
          <Hourly />
        </>
      )}
    </main>
  );
};

export { App };
