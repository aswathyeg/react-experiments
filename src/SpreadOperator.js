import React, { useState } from 'react';

export default function SpreadOperator(){
const[car,setCar]=useState({
    color:"red",
    year:1964,
    model:"mustang",
    brand:"mercides"
})
const clickColor=()=>{
    setCar(previousState=>{
        return{...previousState,color:"blue"}
    })

}

return(
    <div>
        <p>
            This is a {car.color} car 
        </p>
        <p>
           Model {car.model} <br></br>year:{car.year} <br></br>brand is:{car.brand}
        </p>
        <button onClick={clickColor}>Click to change color</button>
    </div>
)
}
