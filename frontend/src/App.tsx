import { FullMessage } from "./components/FullMessage/FullMessage";
import { Current } from "./containers/Current/Current";
import { Daily } from "./containers/Daily/Daily";
import { Hourly } from "./containers/Hourly/Hourly";
import { useData } from "./hooks/data";
import { useLocation } from "./hooks/location";
import { getErrorMessage } from "./utils/error";
import {
  getGeoLocationMessage,
  getGeoLocationErrorIcon,
} from "./utils/location";

const App = () => {
  const { data, loading, error } = useData();
  const { position, geolocationStatus } = useLocation();

  return (
    <main>
      {position?.lat === null &&
        position?.lon === null &&
        geolocationStatus && (
          <FullMessage
            message={getGeoLocationMessage(geolocationStatus)}
            icon={getGeoLocationErrorIcon(geolocationStatus)}
          />
        )}
      {loading && <FullMessage message={"Loading ..."} />}
      {error && <FullMessage message={getErrorMessage(error)} icon="11d" />}
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
