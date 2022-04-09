import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { LocationProvider } from "./contexts/Location";
import { DataProvider } from "./contexts/Data";
import { UnitProvider } from "./contexts/Unit";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <UnitProvider>
    <LocationProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </LocationProvider>
  </UnitProvider>
);
