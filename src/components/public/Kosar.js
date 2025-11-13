import React, { useContext } from 'react'
import KosarItem from './KosarItem'
import { KosarContext } from '../../contexts/KosarContext'

export default function Kosar() {
  const {kosar,osszar}=useContext(KosarContext)
  
  return (
    <div className='table-responsive'>
    <table className='table table-striped'>
      <thead>
        <tr>
          <th style={{maxWidth:"30vw"}}>Termék név</th>
          <th>Darab</th>
          <th>Ár</th>
          <th>Összár</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
        kosar.length?kosar.map((elem)=>{
          return  <KosarItem elem={elem} key={elem.id} />
        })
      :<tr><td colSpan="4">Nincs termék a kosárban!</td></tr>}
      </tbody>
     <tfoot>
      <tr  style={{minWidth:"30vw",backgroundColor:"darkgray"}}><td colSpan="3" className="text-end">Összesen</td><td>{osszar.toFixed(2)} $</td></tr>
     </tfoot>
    </table>

    </div>
  )
}
