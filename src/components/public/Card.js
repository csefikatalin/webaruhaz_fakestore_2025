import React, { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";
import { KosarContext } from "../../contexts/KosarContext";

export default function Card(props) {
  const { kedvenc}=useContext(CardContext)
  const {kosarba}=useContext(KosarContext)
  return (
    <div className="card " style={{ flex: "1 0 200px" }}>
      <div style={{ height: "300px", overflow: "hidden" }}>
        <img src={props.adat.image} className="card-img-top" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.adat.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.adat.category}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{props.adat.price}</h6>
        <p className="card-text">{props.adat.description}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button className="btn btn-success" onClick={()=>{kosarba(props.adat)}}>Kosárba</button>
        <button className={props.adat.kedvenc?"btn btn-warning":"btn btn-light"}  onClick={()=>{kedvenc(props.adat)}}>☆  
</button>
      </div>
    </div>
  );
}
