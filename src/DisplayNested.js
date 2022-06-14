import React, { useState } from "react";

const DisplayNested = ({ nestedObjected }) =>{
  
  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <>
      {Object.entries(nestedObjected).map(([key, value]) => {
        if (typeof value === "object") {
          return (
            <>
              <p>{`${key}: `}</p>
              <div style={{ paddingLeft: 50 }}>
                <DisplayNested nestedObjected={value} />
              </div>
            </>
          );
        } else {
          return <p>{`${key}: ${value}`}</p>;
        }
      })}
    </>
    </div>
  );
}




export default DisplayNested;