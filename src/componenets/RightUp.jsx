import React,{useState} from 'react'
import {data} from './data.js'
import { PieChart, Pie, Cell  } from "react-chartjs-2";

export const RightUp = ({entryCountPerYear}) => {

  // const [Years,setYears] = useState(data.map((item)=> {return parseInt(item.dateofreg.substring(6)) }))

  // const[graphData, setGraphData] = useState({
  //   labels : Object.keys(entryCountPerYear),
  //   dataset : [
  //     {
  //       label : "joined",
  //       data : Object.values(entryCountPerYear),
  //     },
  //   ],
  // });

  // const newJoins = data.map(item => item['Sr. No.']);
  
  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        data: data.map(item => item["Sr. No."]),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#8BC34A',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
          '#009688',
          '#FF5722',
          '#795548',
          '#607D8B',
          '#4CAF50',
          '#E91E63',
          '#2196F3',
          '#FFEB3B',
          '#CDDC39',
          '#FF9800',
          '#9C27B0',
          '#3F51B5',
          '#009688',
          '#FF5722',
          '#795548',
          '#607D8B',
          '#4CAF50',
          '#E91E63'
        ],
      },
    ],
  };

  return (
    <div>
      <h3>Right up</h3>
      <Pie data={chartData} />
    </div>

  )
}
