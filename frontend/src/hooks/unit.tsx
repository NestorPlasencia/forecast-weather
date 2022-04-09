import { useContext } from "react";
import { Unit } from "../contexts/Unit";

export const useUnit = () => useContext(Unit);
