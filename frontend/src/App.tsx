import { Current } from "./containers/Current/Current";
import { Daily } from "./containers/Daily/Daily";
import { Hourly } from "./containers/Hourly/Hourly";
import { useData } from "./hooks/data";

const App = () => {
  const { data, loading } = useData();

  return (
    <main>
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
