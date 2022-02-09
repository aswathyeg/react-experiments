
export default function ChildColor (props){
    
const handleClick = (e) =>{
props.onColorChange(e.target.value);
}
  
        return(
            <div className="child-component"> 
             <h4>Child Component</h4>
            <div className="child-component button">
               <button  value="Red" onClick={handleClick}>Red</button>
               <button  value="Blue"onClick={handleClick}>Blue</button>
               <button  value="White"onClick={handleClick}>Green</button>
               </div>
            </div>
        )
    }
