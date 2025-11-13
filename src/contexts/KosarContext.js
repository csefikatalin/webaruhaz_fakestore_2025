import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Kontextus létrehozása
export const KosarContext = createContext();

//  Provider komponens
export const KosarProvider = ({ children }) => {
  const [kosar, setKosar] = useState([]);
  const [osszar, setOsszar] = useState(0);


   useEffect(() => {
     osszarSzamolas();
  }, [kosar]);

  function kosarTorol(adat) {
    const ujKosar = kosar.filter((item) => item.id !== adat.id);
    setKosar(ujKosar);
  
  }

  function kosarba(adat) {
    console.log(adat)
    setKosar((prevKosar) => {
      // Megnézzük, hogy benne van-e már ez az id
      const letezo = prevKosar.find((item) => item.id === adat.id);

      if (letezo) {
        // Ha van, növeljük a darabszámát
        return prevKosar.map((item) =>
          item.id === adat.id ? { ...item, db: item.db + 1 } : item
        );
      } else {
        // Ha még nincs benne, új elemként adjuk hozzá db = 1-gyel
        return [...prevKosar, { ...adat, db: 1 }];
      }
    });
  
  }
  function osszarSzamolas() {
    const ar = kosar.reduce((sum, item) => sum + item.price * item.db, 0);
    setOsszar(ar);
  }

  function kosarDBValt(ujDb, elem) {
    if (ujDb < 1 || isNaN(ujDb)) return;

    // Kosár state frissítése
    const ujKosar = kosar.map((item) =>
      item.id === elem.id ? { ...item, db: ujDb } : item
    );
    setKosar(ujKosar);
  
  }
  //  Provider visszaadása
  return (
    <KosarContext.Provider
      value={{  kosarba,  kosar, kosarDBValt, osszar, kosarTorol }}
    >
      {children}
    </KosarContext.Provider>
  );
};

/* 
import { createContext, useContext, useState } from "react";

// Kontextus létrehozása
const PublicContext = createContext();

//  Provider komponens
export const PublicProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log("provider");
  //  Provider visszaadása
  return (
    <PublicContext.Provider value={{ data, setData }}>
      {children}
    </PublicContext.Provider>
  );
};


*/
