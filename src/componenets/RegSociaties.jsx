import React from 'react'
import './styles/RegSociaties.css'
import { data } from './data'
import { RegSociatiesRow } from './RegSociatiesRow'

export const RegSociaties = () => {
  return (
    <div className='RegSociaties_component'>
        <div className="head">
          <h3>Registered Sociaties</h3>
        </div>
        <div className="rows">
          {data.map((item,id)=>{
            return  <RegSociatiesRow key={id} id={id} data={item}/>
          })}
        </div>
    </div>
  )
}
