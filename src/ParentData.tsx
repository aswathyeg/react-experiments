import React, { useState } from "react";
import ChildData from "./ChildData";

function ParentData(props:any) {
    let [counter, setCounter] = useState(0);
   
    let callback = (valueFromChild: React.SetStateAction<number>) => setCounter(valueFromChild);
   
    return (
      <div>
        <p>Value of counter: {counter}</p>
        <ChildData callbackFunc={callback} counterValue={counter} />
      </div>
    );
   }
   export default ParentData;