import React, { useState } from 'react';

const HigherOrderExample=(Component,incrementValue)=>{

    const HOCFun = () => {
        const [value, setValue] = useState(0);
        
        const incrementHandler = () => {
          setValue(value + incrementValue);
        };
    
        return <Component value={value} incrementHandler={incrementHandler} />;
      };
    
      return HOCFun;
    };

export default HigherOrderExample;