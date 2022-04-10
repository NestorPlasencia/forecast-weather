import { useContext } from "react";
import { Selection } from "../contexts/Selection";

export const useSelection = () => useContext(Selection);
