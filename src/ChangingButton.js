import React, { useEffect, useState } from "react";

function ChangingButton() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
      <GrowingButton />
    </div>
  );
}

const GrowingButton = () => {
  const [growing,setGrowing ] = useState(true);
  const [size,setSize] = useState({ height: 40, width: 80 });
  
  const adjustSize =(height,width)=>{
    if( growing && height <200 ){
    setSize({height:height+10,width:width+10});
    }
    if( !growing && height>20){
      setSize({height:height-10,width:width-10})
    }

  }
  const handleClick =()=>{
    setGrowing(false);

  }
  useEffect (()=>{
    const timer = setInterval(() => adjustSize(size.height, size.width), 1000);
    return () => {
      clearInterval(timer);
    };


  },[size, adjustSize])

  return(
    <button onClick= {handleClick}
    style={{height:size.height,width:size.width}}
    >
      {growing?"Shrink":"Grow"}
    </button>
  )
  
};

export default ChangingButton;