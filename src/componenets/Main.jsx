import React,{useEffect} from 'react'
import './styles/Main.css'
import { data } from './data'
import { RegSociaties } from './RegSociaties'
import { NewsEvents } from './NewsEvents'
import { RightUp } from './RightUp'
import { RightDown } from './RightDown'

export const Main = () => {

  const entryCountPerYear = {}

  const createGraph = ()=> {
    data.forEach(entry => {
      const date = entry.dateofreg;
      const year = date.split('/')[2]; 
      
      entryCountPerYear[year] = (entryCountPerYear[year] || 0) + 1;
    });
  }

  useEffect(()=>{
    createGraph();
  },[])


  return (
    <div className='Main_component'>
        <div className="main_left">
            <RegSociaties/>
            <NewsEvents/>
        </div>
        <div className="main_right">
            {/* <RightUp entryCountPerYear={entryCountPerYear}/> */}
            {/* <RightDown/> */}
        </div>
    </div>
  )
}
 