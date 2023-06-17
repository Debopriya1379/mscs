import React from 'react'
import './styles/RegSociatiesRow.css'

export const RegSociatiesRow = ({id,data}) => {
  return (
    <div className='RegSociatiesRow'>
        <p>{id+1}</p>
        <p>{data.name.substring(0)}</p>
        <p>{data.State}</p>
        <p>{data.dateofreg}</p>
        <p>{data.sectortype}</p>
    </div>
  )
}
