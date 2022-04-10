import { createContext, useState } from "react";

interface AppContextInterface {
  selectDay: Date;
  setSelectDay: React.Dispatch<React.SetStateAction<Date>>;
}

export const Selection = createContext<Partial<AppContextInterface>>({});

export const SelectionProvider = ({ children }: { children: JSX.Element }) => {
  const [selectDay, setSelectDay] = useState(new Date());
  return (
    <Selection.Provider value={{ selectDay, setSelectDay }}>
      {children}
    </Selection.Provider>
  );
};
