  
  
 interface Details{
   name:string;
   rollNumber:number
 }
 const initialState: Details = {
  name: 'Nima',
  rollNumber:1
} //

  function DisplayDetails(){
    return(
      <div className="main">
        <h2>{initialState.name}</h2>
        <h4>{initialState.rollNumber}</h4>
      </div>
    )
   }
   
export default DisplayDetails;