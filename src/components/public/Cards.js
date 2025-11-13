import React, { useContext } from "react";
import Card from "./Card";
import { PublicContext } from "../../contexts/PublicContext";

export default function Cards() {
  const { data } = useContext(PublicContext);
  return (
    <div className="d-flex flex-row gap-5 bd-highlight mb-3 justify-content-around align-content-around flex-wrap">
      {data?data.map((adat) => {
        return <Card key={adat.id} adat={adat} />;
      }):"Nincs adat!"}
    
    </div>
  );
}
