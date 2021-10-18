import React, { useState } from 'react';
import { Bar,Line,Pie } from 'react-chartjs-2';
const BarChart=()=>{
    // const[data,setData]=useState(undefined);
    // type Data={
    //     data:string
    // }
    return(
        <div>
             
           <Bar 
           data={{
               labels:['Red','Blue','Yellow','Green','Purple','Orange'],
           }} 
           height={400}
           width={600}
           
           
           />
        </div>
    )
}
export default BarChart;