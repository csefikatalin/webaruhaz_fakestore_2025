import { createContext, useContext, useState } from "react";

// Kontextus létrehozása
export const UrlapContext = createContext();

//  Provider komponens
export const UrlapProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  function formAdatok(adat) {
    console.log(adat);
  }
  //  Provider visszaadása
  return (
    <UrlapContext.Provider value={{ formAdatok }}>
      {children}
    </UrlapContext.Provider>
  );
};
