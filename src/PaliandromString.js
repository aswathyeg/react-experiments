import { useState } from "react"

const PaliandromString =()=>{
    let paliandrome = [];
    let value;
    let input;
    const[state,setState]=useState('');
    const [success,setSuccess]= useState(false);
    const [fail,setFail]= useState(false);

    const inputEvent =(e)=>{
        value=e.target.value;
        console.log(value);
        
    }
    const clickEvent=(value)=>{
        reversInput(value);

    }
    const reversInput =(value) =>{
       
        if(fail || success){
            setSuccess(false);
            setFail(false);

        }
        for(let i=value.length()-1;i>-1;i--){
            console.log('hi');
            const element = value[i];
            //console.log(element);
            console.log(`element: ${element}`);
            paliandrome.push(element);
            paliandrome=paliandrome.join(' ');
            console.log(paliandrome);
            if(input===paliandrome){
                setSuccess(true);
                return;
            }
           
            paliandrome=[];


        }

    }
    return(
        <div>
            <input type="text" 
            onChange={inputEvent}/>
            <button onClick={()=>{clickEvent(input)}}>
                Check
            </button>
            {success && <div>This is Paliandrome </div>} 
            {fail && <div>Sorry !! This is not Paliandrome </div>}
        </div>
    )
   
    }
    


export default PaliandromString;