import React, { useEffect ,useState} from 'react';
import Card from './Card';
import useCounter from '../hooks/use-counter';
const BackwardCounting = () =>{ 
    
    const counter=useCounter(false);   
    return(
        <div>

<Card>{counter}</Card>
        </div>
    )

}
export default BackwardCounting;