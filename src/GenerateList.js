import axios from "axios";
import { useEffect, useState } from "react";

const GenerateList = () => {

  const [activityList,setActivityList] =useState([]);
   const genatateActivity = ( ) =>{
    const 
   }
   
    return(
        <div  style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}>
          <input
           placeholder = "GenerateActivity"
           type = {"button"}
           onClick = {genatateActivity}
           />
           <ul>
            {activityList.map((act)=>{
              return(
                <ExpandableList item = {act}/>
              )
            })}
           </ul>
            
        </div>
    )

   
  };
  
  
export default GenerateList;  