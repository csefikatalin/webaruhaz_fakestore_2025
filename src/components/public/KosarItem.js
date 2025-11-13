import React, { useContext } from "react";
import { KosarContext } from "../../contexts/KosarContext";

export default function KosarItem(props) {
  const { kosarTorol,kosarDBValt } = useContext(KosarContext);

  function handleDbChange(e) {
    const ujDb = parseInt(e.target.value, 10);
    
    kosarDBValt(ujDb,props.elem)
  }
  return (
    <tr>
      <td style={{width:"250px"}}>{props.elem.title}</td>
    
      <td style={{width:"100px"}}>
        <input
          type="number"
          min="1"
          max="10"
          value={props.elem.db}
          onChange={handleDbChange}
        />
      </td>
      <td style={{width:"100px"}}>{props.elem.price} $ </td>
      <td style={{width:"100px"}}>{props.elem.price * props.elem.db} $ </td>
      <td style={{width:"50px", cursor:"pointer"}} onClick={() => kosarTorol(props.elem)}>🗑️</td>
    </tr>
  );
}
