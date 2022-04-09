import { useContext } from "react";
import { Data } from "../contexts/Data";

export const useData = () => useContext(Data);
