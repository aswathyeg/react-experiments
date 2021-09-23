import { useState } from 'react';
function DetectHover(Component){
    return function Hoc(props){
        const [hoverd,setHoverd]=useState(false);
        return(
        <div
        onMouseOver={()=>setHoverd(true)}
        onMouseLeave={()=>setHoverd(false)}
        >
            <Component hoverd={hoverd}{...props}></Component>  {/*returned component with additional functionality*/}

         </div>)
      
    }


}
function HOCExample (props){
    const style={
        backgroundColor:props.hoverd?"yellow":""
    }
   
    return(
        <div style={style}>
            <h1>
                HI!!GOODMORNING ALL!!
            </h1>
        </div>
    )
}
export default DetectHover(HOCExample);//passing component as an argument