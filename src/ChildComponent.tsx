import React from 'react';
import ParentComponent from './ParentComponent'
function ChildComponent(props:any){
    return(
        <div>
            <p> Value of counter:{props.countervalue}</p>
        </div>
    )
}
export default ChildComponent;