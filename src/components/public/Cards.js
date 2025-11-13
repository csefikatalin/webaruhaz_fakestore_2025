import React, { useContext } from "react";
import Card from "./Card";
import { CardContext } from "../../contexts/CardContext";

export default function Cards() {
  const { data } = useContext(CardContext);
  return (
    <div className="d-flex flex-row gap-5 bd-highlight mb-3 justify-content-around align-content-around flex-wrap">
      {data?data.map((adat) => {
        return <Card key={adat.id} adat={adat} />;
      }):"Nincs adat!"}
    
    </div>
  );
}
