import { Location } from "../contexts/Location";
import { useContext } from "react";

export const useLocation = () => useContext(Location);
