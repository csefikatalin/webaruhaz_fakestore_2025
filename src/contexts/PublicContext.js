import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Kontextus létrehozása
export const PublicContext = createContext();

//  Provider komponens
export const PublicProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [kosar,setKosar]=useState([])


  function getProducts() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setData(response.data);
        setLoading(true);
      })
      .catch((err) => {
        console.error("Hiba történt a lekérés közben:", err);
        setError("Nem sikerült betölteni a termékeket. Próbáld újra később.");
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);


  function kosarba(adat){
    console.log(adat)
    const sv=[...kosar]
    sv.push(adat)
    setKosar([...sv])
  }
  function kedvenc(adat){
    setData((prevData) =>
    prevData.map((item) =>
      item.id === adat.id ? { ...item, kedvenc: !item.kedvenc } : item
    )
  );
  }
  //  Provider visszaadása
  return (
    <PublicContext.Provider value={{ data,kosarba,kedvenc }}>{children}</PublicContext.Provider>
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
