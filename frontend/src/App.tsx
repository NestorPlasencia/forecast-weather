import { Current } from "./containers/Current/Current";
import { Hourly } from "./containers/Hourly/Hourly";
import { Daily } from "./containers/Daily/Daily";

const App = () => {
  return (
    <main>
      <Current />
      <Daily />
      <Hourly />
    </main>
  );
};

export { App };
