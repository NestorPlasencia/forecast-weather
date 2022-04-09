import { createContext, useEffect, useState } from "react";

interface AppContextInterface {
  unit: string;
  changeUnit: (unit: string) => void;
}

export const Unit = createContext<Partial<AppContextInterface>>({});

export const UnitProvider = ({ children }: { children: JSX.Element }) => {
  const [unit, setUnit] = useState("F");

  useEffect(() => {
    const localUnit = localStorage.getItem("Unit");
    if (localUnit !== null) {
      setUnit(localUnit);
    } else {
      localStorage.setItem("Unit", unit);
    }
  }, []);

  const changeUnit = (unit: string) => {
    setUnit(unit);
    localStorage.setItem("Unit", unit);
  };

  return <Unit.Provider value={{ unit, changeUnit }}>{children}</Unit.Provider>;
};
